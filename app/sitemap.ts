import { allDocs } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs = allDocs.map((post) => ({
    url: `https://polgubau.com/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  const routes = ["", "/docs", "/projects"].map((route) => ({
    url: `https://polgubau.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 1,
  }));

  return [...routes, ...docs];
}
