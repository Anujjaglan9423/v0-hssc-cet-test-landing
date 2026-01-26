import type React from "react"

/**
 * Test Layout - Allows both authenticated and unauthenticated access
 * Unauthenticated users can access mock tests via ?mock=true parameter
 */
export default function TestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
