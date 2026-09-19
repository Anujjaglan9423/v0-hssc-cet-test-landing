"use client"

import { useEffect, useState } from "react"
import { Award, Loader2, Trophy } from "lucide-react"
import { ChartCard } from "@/components/dashboard/chart-card"
import { getAvailableTests, getPracticeLeaderboards } from "@/lib/actions/student"

interface Test { id: string; title: string; exam?: { name: string } | null }
interface Entry { name: string; score: number; totalQuestions: number; percentage: number }

export function PracticeLeaderboard() {
  const [tests, setTests] = useState<Test[]>([])
  const [leaderboards, setLeaderboards] = useState<Record<string, Entry[]>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const availableTests = (await getAvailableTests()) as Test[]
      setTests(availableTests)
      setLeaderboards(await getPracticeLeaderboards(availableTests.map((test) => test.id)))
      setIsLoading(false)
    }
    load()
  }, [])

  if (isLoading) return <div className="flex h-48 items-center justify-center"><Loader2 className="h-7 w-7 animate-spin text-primary" /></div>

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Practice Leaderboards</h2>
        <p className="mt-1 text-sm text-muted-foreground">See the top performers for every available test.</p>
      </div>
      {tests.length === 0 ? (
        <ChartCard title="No tests available"><p className="py-8 text-center text-sm text-muted-foreground">Leaderboards will appear when tests are published.</p></ChartCard>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {tests.map((test) => {
            const entries = leaderboards[test.id] || []
            return (
              <ChartCard key={test.id} title={test.title}>
                <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground"><Trophy className="h-4 w-4 text-amber-500" /> {test.exam?.name || "Practice test"}</div>
                {entries.length === 0 ? <p className="py-6 text-center text-sm text-muted-foreground">Be the first to complete this test.</p> : <div className="space-y-2">
                  {entries.map((entry, index) => <div key={`${test.id}-${index}`} className="flex items-center gap-3 rounded-lg border border-border/70 bg-muted/20 px-3 py-2.5">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? "bg-amber-500/20 text-amber-500" : "bg-muted text-muted-foreground"}`}>{index + 1}</span>
                    <Award className="h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">{entry.name}</span>
                    <span className="text-right text-sm font-semibold text-foreground">{entry.percentage}%<span className="block text-[10px] font-normal text-muted-foreground">{entry.score}/{entry.totalQuestions}</span></span>
                  </div>)}
                </div>}
              </ChartCard>
            )
          })}
        </div>
      )}
    </div>
  )
}
