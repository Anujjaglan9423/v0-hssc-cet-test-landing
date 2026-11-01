import type { Metadata } from "next"
import type { ReactNode } from "react"

// Individual tests and personal results are not useful search landing pages.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
