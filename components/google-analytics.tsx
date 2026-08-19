"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const GA_MEASUREMENT_ID = "G-W5ZGFTDCTP"

declare global {
  interface Window {
    dataLayer: Array<unknown>
    gtag: (...args: unknown[]) => void
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!window.gtag) return

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pathname,
    })
  }, [pathname])

  return null
}

