"use client"

import { useEffect, useRef } from "react"

const ADSENSE_CLIENT = "ca-pub-7892065085240733"
// Set NEXT_PUBLIC_ADSENSE_AD_SLOT to a real responsive display ad unit ID from AdSense.
// The component intentionally renders nothing until a valid slot is configured.

export default function AdSenseUnit({
  slot,
  label = "Advertisement",
}: {
  slot?: string
  label?: string
}) {
  const adRef = useRef<HTMLModElement>(null)
  const configuredSlot = slot ?? process.env.NEXT_PUBLIC_ADSENSE_AD_SLOT

  useEffect(() => {
    if (!configuredSlot || !adRef.current) return

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // AdSense can be unavailable in local previews or blocked by extensions.
    }
  }, [configuredSlot])

  if (!configuredSlot) return null

  return (
    <aside aria-label={label} className="mx-auto w-full max-w-3xl py-6">
      <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <ins
        ref={adRef}
        className="adsbygoogle block min-h-[100px] w-full overflow-hidden rounded-lg border border-border/60 bg-muted/20"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={configuredSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  )
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>
  }
}
