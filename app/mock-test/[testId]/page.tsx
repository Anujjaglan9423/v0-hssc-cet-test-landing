"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MockTestPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.testId as string
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function checkAndRedirect() {
      if (!testId) return

      try {
        // Get the test to verify it exists
        const { data: test, error: err } = await supabase
          .from("tests")
          .select("id")
          .eq("id", testId)
          .single()

        if (err || !test) {
          setError("Mock test not found")
          return
        }

        // Redirect to the actual test interface
        router.push(`/mock-test/attempt/${testId}`)
      } catch (err) {
        console.error("[v0] Error:", err)
        setError("Failed to load mock test")
      } finally {
        setIsLoading(false)
      }
    }

    checkAndRedirect()
  }, [testId, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-destructive" />
          <h2 className="text-2xl font-bold text-foreground mb-2">{error}</h2>
          <p className="text-muted-foreground mb-6">Unable to load the mock test.</p>
          <Link href="/mock-test">
            <Button>Back to Mock Tests</Button>
          </Link>
        </div>
      </div>
    )
  }

  return null
}
