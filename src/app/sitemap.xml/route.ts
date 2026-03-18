import { SITE } from "@/app/lib/site";
import { loadWriting } from "@/content/load";

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

export async function GET() {
  const basePaths = [
    "",
    "/case-study/pain-tracker",
    "/projects",
    "/writing",
    "/proof",
    "/about",
    "/contact",
    "/rss.xml",
  ];

  const postPaths = loadWriting().map((post) => `/writing/${post.slug}`);
  const now = new Date().toISOString();

  const urls = [...basePaths, ...postPaths]
    .map((path) => {
      const loc = xmlEscape(`${SITE.url}${path}`);
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`;
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