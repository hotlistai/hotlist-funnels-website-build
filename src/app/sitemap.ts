import type { MetadataRoute } from "next";
import { getSiteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const routes = ["/", "/how-it-works", "/pricing", "/real-estate", "/solar", "/legal", "/restaurants", "/contractors", "/blue-collar", "/nonprofits", "/fitness", "/b2b-saas", "/contact", "/book-a-demo"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
