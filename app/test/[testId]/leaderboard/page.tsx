'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Medal, TrendingUp, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface LeaderboardEntry {
  id: string
  score: number
  percentage: number
  time_taken: number
  created_at: string
  name: string
  email: string
  phone: string
  test_id: string
}

interface Test {
  id: string
  title: string
  total_questions: number
}

const ITEMS_PER_PAGE = 10

export default function LeaderboardPage() {
  const params = useParams()
  const testId = params.testId as string

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [test, setTest] = useState<Test | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Fetch test details
        console.log('[v0] Fetching test details for:', testId)
        const testRes = await fetch(`/api/tests/${testId}`)
        const testData = await testRes.json()
        if (testData.test) {
          setTest(testData.test)
        }

        // Fetch leaderboard
        console.log('[v0] Fetching leaderboard for test:', testId)
        const leaderRes = await fetch(`/api/tests/${testId}/leaderboard`)
        const leaderData = await leaderRes.json()
        console.log('[v0] Leaderboard response:', leaderData)

        if (leaderData.leaderboard) {
          setLeaderboard(leaderData.leaderboard)
        } else if (leaderData.error) {
          setError(leaderData.error)
        }
      } catch (err) {
        console.error('[v0] Error fetching leaderboard:', err)
        setError('Failed to load leaderboard')
      } finally {
        setLoading(false)
      }
    }

    if (testId) {
      fetchData()
    }
  }, [testId])

  // Calculate pagination
  const totalPages = Math.ceil(leaderboard.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedLeaderboard = leaderboard.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const getMedalIcon = (rank: number) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return rank
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading leaderboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/tests">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tests
            </Button>
          </Link>

          <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
            <h1 className="text-3xl font-bold text-foreground mb-2">Test Leaderboard</h1>
            {test && (
              <>
                <p className="text-lg text-primary font-semibold">{test.title}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Total Questions: {test.total_questions}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 mb-6">
            {error}
          </div>
        )}

        {/* Empty State */}
        {leaderboard.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-lg text-muted-foreground">No submissions yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Be the first to take this test and appear on the leaderboard!
            </p>
          </div>
        ) : (
          <>
            {/* Leaderboard Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rank</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Marks</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Percentage</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Time Taken</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedLeaderboard.map((entry, index) => {
                      const rank = startIndex + index + 1
                      return (
                        <tr
                          key={entry.id}
                          className="border-b border-border hover:bg-muted/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <span className="text-xl font-bold">
                              {getMedalIcon(rank)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-medium text-foreground">{entry.name}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-muted-foreground">{entry.email}</p>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="font-semibold text-primary">
                              {entry.score}/{test?.total_questions || entry.score}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center">
                              <span className="font-semibold text-foreground">{entry.percentage}%</span>
                              {entry.percentage >= 80 && (
                                <span className="ml-2 text-lg">⭐</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-2" />
                              <span className="text-sm">{formatTime(entry.time_taken)}</span>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, leaderboard.length)} of{' '}
                  {leaderboard.length} results
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      const page = currentPage > 3 ? currentPage - 2 + i : i + 1
                      return page <= totalPages ? (
                        <Button
                          key={page}
                          variant={currentPage === page ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      ) : null
                    })}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Top Score</p>
                    <p className="text-2xl font-bold text-primary">
                      {leaderboard[0]?.percentage}%
                    </p>
                  </div>
                  <Medal className="w-10 h-10 text-primary opacity-50" />
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Attempts</p>
                    <p className="text-2xl font-bold text-primary">{leaderboard.length}</p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-primary opacity-50" />
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Score</p>
                    <p className="text-2xl font-bold text-primary">
                      {Math.round(
                        leaderboard.reduce((sum, entry) => sum + entry.percentage, 0) /
                          leaderboard.length
                      )}
                      %
                    </p>
                  </div>
                  <div className="w-10 h-10 text-primary opacity-50">📊</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
