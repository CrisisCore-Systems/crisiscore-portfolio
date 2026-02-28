import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/site";
import { getAllWritingSlugs } from "@/app/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = ["", "/projects", "/writing", "/about", "/contact", "/proof"];
  const posts = getAllWritingSlugs().map((slug) => `/writing/${slug}`);

  const now = new Date();
  return [...base, ...posts].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
  }));
}

