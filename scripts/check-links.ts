import fs from "node:fs";
import path from "node:path";
import { ARTIFACTS } from "../src/app/lib/artifacts";
import {
  BUYER_INTENT_PAGES,
  PRIMARY_BUYER_INTENT_PAGES,
} from "../src/app/lib/buyer-intent";
import { loadProjects, loadWriting } from "../src/content/load";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content");
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIR = path.join(ROOT, "src");

const STRICT = process.env.STRICT_LINKS === "1";
const CONCURRENCY = Number(process.env.LINK_CHECK_CONCURRENCY ?? "6");
const TIMEOUT_MS = Number(process.env.LINK_CHECK_TIMEOUT_MS ?? "8000");
const RETRIES = Number(process.env.LINK_CHECK_RETRIES ?? "2");

const SAME_SITE_HOSTS = new Set([
  "crisiscore-systems.ca",
  "www.crisiscore-systems.ca",
]);
const SCANNED_EXTENSIONS = new Set([
  ".json",
  ".md",
  ".mdx",
  ".ts",
  ".tsx",
  ".txt",
]);
const IGNORED_SCANNED_FILES = new Set([path.normalize("src/app/lib/site.ts")]);

type LinkRef = {
  href: string;
  source: string;
};

function relativeSource(filePath: string) {
  return path.relative(ROOT, filePath).replaceAll(path.sep, "/");
}

function walkFiles(dir: string, acc: string[] = []) {
  if (!fs.existsSync(dir)) return acc;

  for (const name of fs.readdirSync(dir)) {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkFiles(filePath, acc);
      continue;
    }

    if (SCANNED_EXTENSIONS.has(path.extname(name))) {
      acc.push(filePath);
    }
  }

  return acc;
}

function walkPublicFiles(dir: string, acc: string[] = []) {
  if (!fs.existsSync(dir)) return acc;

  for (const name of fs.readdirSync(dir)) {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkPublicFiles(filePath, acc);
    } else {
      acc.push(filePath);
    }
  }

  return acc;
}

function collectHrefs(obj: unknown, source: string, acc: LinkRef[] = []) {
  if (!obj) return acc;
  if (Array.isArray(obj)) {
    for (const item of obj) collectHrefs(item, source, acc);
    return acc;
  }
  if (typeof obj === "object") {
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if (key === "href" && typeof value === "string") {
        acc.push({ href: value, source });
      } else {
        collectHrefs(value, source, acc);
      }
    }
  }
  return acc;
}

function extractTextLinks(raw: string, source: string) {
  const refs: LinkRef[] = [];
  const seen = new Set<string>();
  const add = (href: string) => {
    const trimmed = href.trim();
    if (!trimmed || trimmed.includes("${") || seen.has(trimmed)) return;
    seen.add(trimmed);
    refs.push({ href: trimmed, source });
  };

  for (const match of raw.matchAll(/!?\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    add(match[1]);
  }

  for (const match of raw.matchAll(
    /\b(?:href|src|serviceHref|proofHref|contactHref|artifactHref|parentHref|rawPath)\s*[:=]\s*["'`]([^"'`]+)["'`]/g
  )) {
    add(match[1]);
  }

  if (/\.(?:md|mdx|txt)$/.test(source)) {
    for (const match of raw.matchAll(/https?:\/\/[^\s)"'<>]+/g)) {
      add(match[0]);
    }
  }

  return refs;
}

function collectLinkRefs() {
  const refs: LinkRef[] = [];
  const files = [
    ...walkFiles(CONTENT_DIR),
    ...walkFiles(PUBLIC_DIR),
    ...walkFiles(SRC_DIR),
  ].filter((filePath) => !IGNORED_SCANNED_FILES.has(path.normalize(relativeSource(filePath))));

  for (const filePath of files) {
    const source = relativeSource(filePath);
    const raw = fs.readFileSync(filePath, "utf8");

    if (filePath.endsWith(".json")) {
      try {
        collectHrefs(JSON.parse(raw), source, refs);
      } catch {
        refs.push(...extractTextLinks(raw, source));
      }
      continue;
    }

    refs.push(...extractTextLinks(raw, source));
  }

  return refs;
}

function normalizePath(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withoutTrailingSlash =
    normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
  return withoutTrailingSlash || "/";
}

function stripQueryAndHash(pathname: string) {
  return pathname.split(/[?#]/, 1)[0];
}

function classifyHref(href: string):
  | { kind: "skip" }
  | { kind: "external"; url: string }
  | { kind: "internal"; path: string } {
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("urn:")
  ) {
    return { kind: "skip" };
  }

  if (/^https?:\/\//i.test(href)) {
    const url = new URL(href);
    if (SAME_SITE_HOSTS.has(url.hostname)) {
      return { kind: "internal", path: normalizePath(url.pathname) };
    }
    return { kind: "external", url: href };
  }

  if (href.startsWith("/")) {
    return { kind: "internal", path: normalizePath(stripQueryAndHash(href)) };
  }

  return { kind: "skip" };
}

function publicFilePaths() {
  return new Set(
    walkPublicFiles(PUBLIC_DIR).map((filePath) => {
      const relative = path.relative(PUBLIC_DIR, filePath).replaceAll(path.sep, "/");
      return normalizePath(`/${relative}`);
    })
  );
}

function knownInternalPaths() {
  return new Set([
    "/",
    "/about",
    "/artifacts",
    "/case-study",
    "/case-study/pain-tracker",
    "/case-study/proofvault",
    "/deploy-id",
    "/icon",
    "/icon-192",
    "/manifest.webmanifest",
    "/privacy",
    "/projects",
    "/proof",
    "/proof/fetchability.json",
    "/rss.xml",
    "/services",
    "/site-map",
    "/sitemap.xml",
    "/small-business-trust-cleanup",
    "/start-here",
    "/trust-hardening-review",
    "/trust-risk-read",
    "/version.json",
    "/writing",
    ...PRIMARY_BUYER_INTENT_PAGES.map((page) => `/services/${page.slug}`),
    ...loadProjects().map((project) => `/projects/${project.slug}`),
    ...loadWriting().map((post) => `/writing/${post.slug}`),
    ...ARTIFACTS.map((artifact) => `/artifacts/${artifact.slug}`),
  ]);
}

function redirectedInternalPaths() {
  return new Map([
    ["/contact", "/trust-risk-read"],
    ["/artifacts/pain-tracker/ui-01", "/artifacts/pain-tracker/ui-01-fastlog"],
    ...BUYER_INTENT_PAGES.filter((page) => !page.primaryIndexTarget && page.parentHref).map(
      (page) => [`/services/${page.slug}`, page.parentHref as string] as const
    ),
  ]);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url: string, method: "HEAD" | "GET") {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
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
    } catch (error) {
      if (attempt < RETRIES) {
        await sleep(250 * Math.pow(2, attempt));
        continue;
      }
      return { ok: false as const, status: "ERR", error };
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
  const refs = collectLinkRefs();
  const availableInternalPaths = knownInternalPaths();
  const availablePublicPaths = publicFilePaths();
  const redirectedPaths = redirectedInternalPaths();
  const external = new Map<string, string[]>();
  const internal: LinkRef[] = [];

  for (const ref of refs) {
    const classified = classifyHref(ref.href);
    if (classified.kind === "external") {
      const sources = external.get(classified.url) ?? [];
      sources.push(ref.source);
      external.set(classified.url, sources);
    }
    if (classified.kind === "internal") {
      internal.push({ href: classified.path, source: ref.source });
    }
  }

  let failed = 0;
  let warned = 0;

  for (const ref of internal) {
    if (ref.href.includes(" ")) {
      console.error(`Bad internal href in ${ref.source}: ${ref.href}`);
      failed++;
      continue;
    }

    const redirectTarget = redirectedPaths.get(ref.href);
    if (redirectTarget) {
      console.error(
        `Redirected internal href in ${ref.source}: ${ref.href} (use ${redirectTarget})`
      );
      failed++;
      continue;
    }

    if (!availableInternalPaths.has(ref.href) && !availablePublicPaths.has(ref.href)) {
      console.error(`Unknown internal href in ${ref.source}: ${ref.href}`);
      failed++;
    }
  }

  await runPool([...external.keys()], async (url) => {
    const result = await checkUrl(url);
    if (result.ok) return;

    const sourceList = [...new Set(external.get(url) ?? [])].join(", ");
    const location = sourceList ? ` in ${sourceList}` : "";

    if (typeof result.status === "number") {
      if (
        isDefinitelyDeadStatus(result.status) ||
        (STRICT && !isSoftFailureStatus(result.status))
      ) {
        console.error(`Dead link${location}: ${url} (status ${result.status})`);
        failed++;
        return;
      }

      if (isSoftFailureStatus(result.status)) {
        console.warn(`Link check soft-fail${location}: ${url} (status ${result.status})`);
        warned++;
        return;
      }

      console.error(`Bad link${location}: ${url} (status ${result.status})`);
      failed++;
      return;
    }

    if (STRICT) {
      console.error(`Dead link${location}: ${url} (${String(result.status)})`);
      failed++;
    } else {
      console.warn(`Link check error (soft)${location}: ${url} (${String(result.status)})`);
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
    `Link check OK (${external.size} external, ${internal.length} internal, ${warned} warning(s))`
  );
}

main();
