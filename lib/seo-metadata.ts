import type { Metadata } from "next"

export const SITE_URL = "https://cettest.site"

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "CET TEST", type: "article" },
    twitter: { card: "summary_large_image", title, description },
  }
}
