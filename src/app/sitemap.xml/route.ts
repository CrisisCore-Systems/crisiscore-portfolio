import fs from "node:fs";
import path from "node:path";
import { SITE } from "@/app/lib/site";
import { ARTIFACTS } from "@/app/lib/artifacts";
import { BUYER_INTENT_PAGES } from "@/app/lib/buyer-intent";
import { loadProjects, loadWriting } from "@/content/load";

export const runtime = "nodejs";
export const revalidate = 300;

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

type SitemapEntry = {
  path: string;
  lastmod: string;
};

function toIsoOrNow(filePath?: string) {
  if (!filePath) {
    return new Date().toISOString();
  }

  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function publicPath(relativePath: string) {
  return path.join(process.cwd(), "public", relativePath.replace(/^\//, ""));
}

function contentPath(...parts: string[]) {
  return path.join(process.cwd(), "content", ...parts);
}

function uniqueEntries(entries: SitemapEntry[]) {
  const seen = new Set<string>();

  return entries.filter((entry) => {
    if (seen.has(entry.path)) {
      return false;
    }

    seen.add(entry.path);
    return true;
  });
}

export async function GET() {
  const staticEntries: SitemapEntry[] = [
    { path: "", lastmod: toIsoOrNow() },
    { path: "/projects", lastmod: toIsoOrNow() },
    { path: "/writing", lastmod: toIsoOrNow() },
    { path: "/proof", lastmod: toIsoOrNow() },
    { path: "/about", lastmod: toIsoOrNow() },
    { path: "/contact", lastmod: toIsoOrNow() },
    { path: "/site-map", lastmod: toIsoOrNow() },
    { path: "/rss.xml", lastmod: toIsoOrNow() },
    {
      path: "/case-study/pain-tracker",
      lastmod: toIsoOrNow(contentPath("dossiers", "pain-tracker.json")),
    },
    {
      path: "/case-study/proofvault",
      lastmod: toIsoOrNow(contentPath("dossiers", "proofvault.json")),
    },
    ...BUYER_INTENT_PAGES.map((page) => ({
      path: `/services/${page.slug}`,
      lastmod: toIsoOrNow(path.join(process.cwd(), "src", "app", "services", "[slug]", "page.tsx")),
    })),
  ];

  const projectEntries: SitemapEntry[] = loadProjects().map((project) => ({
    path: `/projects/${project.slug}`,
    lastmod: toIsoOrNow(contentPath("projects", `${project.slug}.json`)),
  }));

  const postEntries: SitemapEntry[] = loadWriting().map((post) => ({
    path: `/writing/${post.slug}`,
    lastmod: toIsoOrNow(contentPath("writing", `${post.slug}.mdx`)),
  }));

  const artifactEntries: SitemapEntry[] = ARTIFACTS.map((artifact) => ({
    path: `/artifacts/${artifact.slug}`,
    lastmod: toIsoOrNow(publicPath(artifact.rawPath)),
  }));

  const urls = uniqueEntries([
    ...staticEntries,
    ...projectEntries,
    ...postEntries,
    ...artifactEntries,
  ])
    .map((entry) => {
      const loc = xmlEscape(`${SITE.url}${entry.path}`);
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=600",
    },
  });
}