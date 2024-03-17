import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://ui.polgubau.com/sitemap.xml",
    host: "https://ui.polgubau.com",
  };
}
