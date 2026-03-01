import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content");

const STRICT = process.env.STRICT_LINKS === "1";
const CONCURRENCY = Number(process.env.LINK_CHECK_CONCURRENCY ?? "6");
const TIMEOUT_MS = Number(process.env.LINK_CHECK_TIMEOUT_MS ?? "8000");
const RETRIES = Number(process.env.LINK_CHECK_RETRIES ?? "2");

function walkJson(dir: string) {
  const out: string[] = [];
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) out.push(...walkJson(p));
    else if (name.endsWith(".json")) out.push(p);
  }
  return out;
}

function collectHrefs(obj: unknown, acc: string[] = []) {
  if (!obj) return acc;
  if (Array.isArray(obj)) {
    for (const x of obj) collectHrefs(x, acc);
    return acc;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      if (k === "href" && typeof v === "string") acc.push(v);
      else collectHrefs(v, acc);
    }
  }
  return acc;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchWithTimeout(url: string, method: "HEAD" | "GET") {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(t);
  }
}

async function checkUrl(url: string) {
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    try {
      const head = await fetchWithTimeout(url, "HEAD");
      if (head.ok) return { ok: true as const, status: head.status };
      if (head.status === 405) {
        const get = await fetchWithTimeout(url, "GET");
        if (get.ok) return { ok: true as const, status: get.status };
        return { ok: false as const, status: get.status };
      }
      return { ok: false as const, status: head.status };
    } catch (e) {
      if (attempt < RETRIES) {
        await sleep(250 * Math.pow(2, attempt));
        continue;
      }
      return { ok: false as const, status: "ERR", error: e };
    }
  }
  return { ok: false as const, status: "ERR" };
}

function isDefinitelyDeadStatus(status: number) {
  return status === 404 || status === 410;
}

function isSoftFailureStatus(status: number) {
  return status === 429 || status === 403 || (status >= 500 && status <= 599);
}

async function runPool<T>(items: T[], worker: (item: T) => Promise<void>) {
  const queue = items.slice();
  const runners = Array.from({ length: Math.max(1, CONCURRENCY) }).map(
    async () => {
      while (queue.length) {
        const next = queue.shift();
        if (next === undefined) return;
        await worker(next);
      }
    }
  );
  await Promise.all(runners);
}

async function main() {
  const files = walkJson(CONTENT_DIR);
  const hrefs = new Set<string>();

  for (const f of files) {
    const json = JSON.parse(fs.readFileSync(f, "utf8")) as unknown;
    for (const h of collectHrefs(json)) hrefs.add(h);
  }

  const external = [...hrefs].filter((h) => /^https?:\/\//i.test(h));
  const internal = [...hrefs].filter((h) => h.startsWith("/"));

  let failed = 0;
  let warned = 0;

  for (const h of internal) {
    if (h.includes(" ")) {
      console.error("Bad internal href (contains spaces):", h);
      failed++;
    }
    if (!h.startsWith("/")) {
      console.error("Bad internal href (must start with /):", h);
      failed++;
    }
  }

  await runPool(external, async (url) => {
    const r = await checkUrl(url);
    if (r.ok) return;

    if (typeof r.status === "number") {
      if (isDefinitelyDeadStatus(r.status) || (STRICT && !isSoftFailureStatus(r.status))) {
        console.error(`Dead link: ${url} (status ${r.status})`);
        failed++;
        return;
      }

      if (isSoftFailureStatus(r.status)) {
        console.warn(`Link check soft-fail: ${url} (status ${r.status})`);
        warned++;
        return;
      }

      console.error(`Bad link: ${url} (status ${r.status})`);
      failed++;
      return;
    }

    if (STRICT) {
      console.error(`Dead link: ${url} (${String(r.status)})`);
      failed++;
    } else {
      console.warn(`Link check error (soft): ${url} (${String(r.status)})`);
      warned++;
    }
  });

  if (failed) {
    console.error(
      `\nLink check failed: ${failed} failure(s), ${warned} warning(s)\n`
    );
    process.exit(1);
  }

  console.log(
    `Link check OK (${external.length} external, ${internal.length} internal, ${warned} warning(s))`
  );
}

main();
