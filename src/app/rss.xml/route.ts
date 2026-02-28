import { SITE } from "@/app/lib/site";
import { getAllWriting } from "@/app/lib/mdx";

export async function GET() {
  const posts = getAllWriting();

  const items = posts
    .map((p) => {
      const url = `${SITE.url}/writing/${p.slug}`;
      return `
<item>
  <title><![CDATA[${p.frontmatter.title}]]></title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
  <description><![CDATA[${p.frontmatter.description}]]></description>
</item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${SITE.name}</title>
    <link>${SITE.url}</link>
    <description>${SITE.tagline}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
