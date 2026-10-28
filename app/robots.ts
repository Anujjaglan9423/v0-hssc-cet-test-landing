import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin/", "/api/", "/student/", "/login", "/signup", "/auth/"] }],
    sitemap: "https://cettest.site/sitemap.xml",
  }
}
