import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/writing", "/about", "/contact"];
  const now = new Date();

  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
  }));
}
