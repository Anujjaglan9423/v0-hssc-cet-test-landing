"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Trophy, TrendingUp, Users, Clock, BookOpen, Share2 } from "lucide-react"

interface TestResult {
  rank: number
  name: string
  score: number
  percentage: number
  timeSpent: number
  email: string
}

const leaderboardData: TestResult[] = [
  {
    rank: 1,
    name: "Priya Sharma",
    score: 95,
    percentage: 95,
    timeSpent: 65,
    email: "priya@example.com",
  },
  {
    rank: 2,
    name: "Raj Kumar",
    score: 92,
    percentage: 92,
    timeSpent: 72,
    email: "raj@example.com",
  },
  {
    rank: 3,
    name: "Anjali Singh",
    score: 88,
    percentage: 88,
    timeSpent: 78,
    email: "anjali@example.com",
  },
  {
    rank: 4,
    name: "Vikram Patel",
    score: 85,
    percentage: 85,
    timeSpent: 85,
    email: "vikram@example.com",
  },
  {
    rank: 5,
    name: "Neha Gupta",
    score: 82,
    percentage: 82,
    timeSpent: 88,
    email: "neha@example.com",
  },
]

export default function TestResultsPage() {
  const [showUserForm, setShowUserForm] = useState(false)
  const [userScore, setUserScore] = useState({
    name: "",
    email: "",
    phone: "",
    score: 78,
    percentage: 78,
    timeSpent: 95,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userScore.name && userScore.email && userScore.phone) {
      try {
        const response = await fetch('/api/leaderboard/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...userScore,
            testId: 'daily-challenge',
          }),
        })

        if (response.ok) {
          alert('Your score has been added to the leaderboard!')
          setShowUserForm(false)
        } else {
          alert('Failed to save. Please try again.')
        }
      } catch (error) {
        console.error('Error:', error)
        alert('An error occurred. Please try again.')
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-6xl mx-auto px-4 text-white text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-black mb-2">Test Completed!</h1>
          <p className="text-lg opacity-90">View leaderboard and share your score</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Results Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Your Result Card */}
            <div className="bg-card border-2 border-primary rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-foreground">Your Result</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Score</span>
                  <span className="text-2xl font-black text-primary">78/100</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary to-accent rounded-full h-3"
                    style={{ width: "78%" }}
                  />
                </div>
                <div className="text-sm text-muted-foreground">Percentage: 78%</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Time Spent</p>
                  <p className="font-bold text-foreground">1:35</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                  <p className="font-bold text-foreground">78%</p>
                </div>
              </div>

              <Button
                onClick={() => setShowUserForm(!showUserForm)}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {showUserForm ? "Cancel" : "Add Your Details"}
              </Button>

              {showUserForm && (
                <form onSubmit={handleSubmit} className="space-y-3 border-t pt-4">
                  <Input
                    placeholder="Full Name"
                    value={userScore.name}
                    onChange={(e) =>
                      setUserScore({ ...userScore, name: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={userScore.email}
                    onChange={(e) =>
                      setUserScore({ ...userScore, email: e.target.value })
                    }
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    value={userScore.phone}
                    onChange={(e) =>
                      setUserScore({ ...userScore, phone: e.target.value })
                    }
                    required
                  />
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Save & Add to Leaderboard
                  </Button>
                </form>
              )}
            </div>

            {/* Quick Stats */}
            <div className="space-y-2">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <p className="text-xs text-muted-foreground">Performance</p>
                </div>
                <p className="font-bold text-foreground">Good Attempt</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-primary" />
                  <p className="text-xs text-muted-foreground">Global Rank</p>
                </div>
                <p className="font-bold text-foreground">#1,247 (Est.)</p>
              </div>
            </div>

            <div className="space-y-2">
              <Link href="/signup" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Sign Up & Track Progress
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                <Share2 className="w-4 h-4 mr-2" />
                Share Result
              </Button>
            </div>
          </div>

          {/* Right - Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border p-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Top Performers - Today
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {leaderboardData.length} participants so far
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="text-left py-4 px-6 font-bold text-foreground">
                        Rank
                      </th>
                      <th className="text-left py-4 px-6 font-bold text-foreground">
                        Name
                      </th>
                      <th className="text-left py-4 px-6 font-bold text-foreground">
                        Score
                      </th>
                      <th className="text-left py-4 px-6 font-bold text-foreground">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((result, idx) => (
                      <tr
                        key={result.rank}
                        className={`border-b border-border hover:bg-muted/50 transition-colors ${
                          idx === 0 ? "bg-gradient-to-r from-primary/5 to-accent/5" : ""
                        }`}
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            {idx === 0 && (
                              <Trophy className="w-5 h-5 text-yellow-500" />
                            )}
                            {idx === 1 && (
                              <Trophy className="w-5 h-5 text-gray-400" />
                            )}
                            {idx === 2 && (
                              <Trophy className="w-5 h-5 text-orange-600" />
                            )}
                            {idx >= 3 && (
                              <span className="font-bold text-primary text-lg">
                                {result.rank}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-semibold text-foreground">
                              {result.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {result.email}
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-bold text-primary">
                              {result.score}/100
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {result.percentage}%
                            </p>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">
                          {Math.floor(result.timeSpent / 60)}:{String(result.timeSpent % 60).padStart(2, "0")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-muted p-6 text-center">
                <Link href="/signup">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Join Leaderboard & Compete
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
