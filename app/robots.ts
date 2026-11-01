import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/", "/api/", "/student/", "/auth/", "/login", "/signup",
        "/mock-test-attempt/", "/mock-test-results/", "/take-test/",
      ],
    }],
    sitemap: "https://cettest.site/sitemap.xml",
  }
}
