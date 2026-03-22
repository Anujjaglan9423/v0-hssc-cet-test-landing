import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test Mode | CET TEST",
  description: "Take your exam in fullscreen mode for a distraction-free experience",
}

/**
 * Fullscreen Test Layout - No sidebar, no navigation
 * This layout is used for test-taking mode where students need
 * a distraction-free, fullscreen experience
 */
export default function FullscreenTestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}
