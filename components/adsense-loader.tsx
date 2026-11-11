"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"
import { isAdEligiblePath } from "@/lib/ad-policy"

/**
 * The AdSense loader is only mounted for editorial/content pages.
 * Important: third-party Auto ads can persist after client-side navigation.
 * ALSO exclude protected/test paths in the AdSense Auto ads dashboard.
 */
export default function AdSenseLoader() {
  const pathname = usePathname()
  if (!isAdEligiblePath(pathname)) return null

  return (
    <Script
      id="cettest-adsense"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7892065085240733"
      strategy="afterInteractive"
      async
      crossOrigin="anonymous"
    />
  )
}
