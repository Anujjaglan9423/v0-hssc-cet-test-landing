"use client"

import { useEffect, useState } from "react"
import { Trophy, X } from "lucide-react"

export interface DailyTopStudent {
  name: string
  correctAnswers: number
  testsAttempted: number
}

interface DailyTopStudentsPopupProps {
  students: DailyTopStudent[]
}

export function DailyTopStudentsPopup({ students }: DailyTopStudentsPopupProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (students.length === 0) return

    const timer = window.setTimeout(() => setOpen(true), 900)
    return () => window.clearTimeout(timer)
  }, [students.length])

  if (!open || students.length === 0) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" role="presentation">
      <button
        type="button"
        aria-label="Close daily toppers popup"
        className="absolute inset-0 cursor-default"
        onClick={() => setOpen(false)}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="daily-toppers-title"
        className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-primary/20 bg-background shadow-2xl"
      >
        <div className="bg-gradient-to-br from-primary/15 via-background to-amber-500/10 px-6 pb-5 pt-6 text-center">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close daily toppers popup"
            className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <Trophy className="mx-auto mb-2 size-10 text-amber-500" aria-hidden="true" />
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Today&apos;s champions</p>
          <h2 id="daily-toppers-title" className="mt-1 text-2xl font-bold">Top 3 performers</h2>
          <p className="mt-1 text-sm text-muted-foreground">Correct questions from Test and Practice sections today</p>
        </div>
        <div className="space-y-3 p-5">
          {students.map((student, index) => (
            <div key={`${student.name}-${index}`} className="flex items-center gap-3 rounded-2xl border bg-card px-4 py-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">{index + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{student.name}</p>
                <p className="text-xs text-muted-foreground">Test and Practice sections</p>
              </div>
              <p className="shrink-0 text-right font-bold text-emerald-600 dark:text-emerald-400">{student.correctAnswers} correct</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
