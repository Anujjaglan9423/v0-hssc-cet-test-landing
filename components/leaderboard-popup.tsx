"use client"

import { useEffect, useState } from "react"
import { Medal, Trophy, X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export interface LeaderboardEntry {
  name: string
  score: number
}

interface LeaderboardPopupProps {
  entries: LeaderboardEntry[]
}

export default function LeaderboardPopup({ entries }: LeaderboardPopupProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (entries.length > 0) setOpen(true)
  }, [entries.length])

  if (entries.length === 0) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden border-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-0 text-white shadow-2xl sm:max-w-md">
        <div className="relative px-6 pb-7 pt-8 sm:px-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 text-white/60 hover:bg-white/10 hover:text-white"
            aria-label="Close leaderboard"
          >
            <X className="size-4" />
          </Button>
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/30">
            <Trophy className="size-7" aria-hidden="true" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">Today&apos;s Top Performers</DialogTitle>
          <DialogDescription className="mt-2 text-center text-slate-300">
            Celebrating the students leading the CET TEST leaderboard.
          </DialogDescription>
          <div className="mt-6 space-y-3">
            {entries.map((entry, index) => (
              <div
                key={`${entry.name}-${index}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3"
              >
                <div className={`flex size-9 shrink-0 items-center justify-center rounded-full font-bold ${index === 0 ? "bg-amber-400 text-amber-950" : index === 1 ? "bg-slate-300 text-slate-900" : "bg-orange-400 text-orange-950"}`}>
                  {index === 0 ? <Trophy className="size-4" aria-hidden="true" /> : <Medal className="size-4" aria-hidden="true" />}
                </div>
                <span className="min-w-0 flex-1 truncate font-semibold">{entry.name}</span>
                <span className="text-sm font-bold text-amber-300">{entry.score}%</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">Keep practicing. Your name could be next.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
