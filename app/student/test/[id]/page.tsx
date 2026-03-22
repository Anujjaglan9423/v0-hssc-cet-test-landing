"use client"

import { useEffect } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

/**
 * Redirect to fullscreen test mode
 * This page now redirects to the fullscreen test route for a distraction-free experience
 */
export default function TestPageRedirect() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const testId = params.id as string
  const isMockTest = searchParams.get("mock") === "true"

  useEffect(() => {
    // Redirect to fullscreen test route
    const redirectUrl = isMockTest 
      ? `/take-test/${testId}?mock=true`
      : `/take-test/${testId}`
    router.replace(redirectUrl)
  }, [testId, isMockTest, router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Entering fullscreen test mode...</p>
      </div>
    </div>
  )
}
