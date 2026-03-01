import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/site";
import { loadWriting } from "@/content/load";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = [
    "",
    "/projects",
    "/writing",
    "/proof",
    "/about",
    "/contact",
    "/rss.xml",
  ];
  const posts = loadWriting().map((p) => `/writing/${p.slug}`);

  const now = new Date();
  return [...base, ...posts].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
  }));
}

