'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Trophy, Medal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface LeaderboardEntry {
  id: string
  score: number
  percentage: number
  time_taken: number
  name: string
  email: string
  phone: string
  created_at: string
}

export default function LeaderboardPage() {
  const params = useParams()
  const testId = params.testId as string
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(`/api/tests/${testId}/leaderboard`)
        const data = await res.json()
        setLeaderboard(data.leaderboard || [])
      } catch (error) {
        console.error('[v0] Error fetching leaderboard:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [testId])

  const getMedalIcon = (rank: number) => {
    if (rank === 0) return <Trophy className="w-5 h-5 text-yellow-500" />
    if (rank === 1) return <Medal className="w-5 h-5 text-gray-400" />
    if (rank === 2) return <Medal className="w-5 h-5 text-orange-600" />
    return <span className="text-sm font-bold w-5">{rank + 1}</span>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-lg">Loading leaderboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Test Leaderboard</h1>
          <p className="text-muted-foreground">Top performers on this test</p>
        </div>

        {leaderboard.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground mb-4">No one has completed this test yet</p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <div
                key={entry.id}
                className="bg-card border border-border rounded-lg p-6 flex items-center justify-between hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {getMedalIcon(index)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{entry.name}</h3>
                    <p className="text-sm text-muted-foreground">{entry.email}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {entry.score}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {entry.percentage}% • {Math.floor(entry.time_taken / 60)}m {entry.time_taken % 60}s
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
