"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, BellRing, X } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"

export function ExamAlertsPromo() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    let isMounted = true

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (isMounted) {
        setIsVisible(!data.session)
        setIsCheckingAuth(false)
      }
    }

    checkSession()
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) setIsVisible(!session)
    })

    return () => {
      isMounted = false
      listener.subscription.unsubscribe()
    }
  }, [])

  if (isCheckingAuth || !isVisible || pathname === "/exam-alerts") return null

  return (
    <aside
      aria-label="Exam alerts announcement"
      className="fixed bottom-4 right-4 z-40 w-[min(20rem,calc(100vw-2rem))] max-w-xs rounded-2xl border border-primary/20 bg-card p-4 text-card-foreground shadow-2xl shadow-primary/10 ring-1 ring-black/5 sm:bottom-6 sm:right-6"
    >
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss exam alerts announcement"
        className="absolute right-2 top-2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X aria-hidden="true" />
      </button>

      <div className="flex gap-3 pr-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <BellRing aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Now live</p>
          <h2 className="text-base font-semibold tracking-tight">Never miss an exam update</h2>
          <p className="mt-1 text-sm leading-5 text-muted-foreground">
            The Exam Alerts page is live with the latest government exam notifications and official links.
          </p>
        </div>
      </div>

      <Button asChild className="mt-4 w-full gap-2">
        <Link href="/exam-alerts">
          View exam alerts
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </Link>
      </Button>
    </aside>
  )
}

export default ExamAlertsPromo
