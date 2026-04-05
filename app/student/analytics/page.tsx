"use client"

import { useEffect, useState } from "react"
import { getStudentAnalytics } from "@/lib/actions/student"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  LabelList,
} from "recharts"
import { TrendingUp, Target, BookOpen, Zap, Loader2 } from "lucide-react"

export default function StudentAnalyticsPage() {
  const [analytics, setAnalytics] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const data = await getStudentAnalytics()
        if (data) {
          setAnalytics(data)
        } else {
          setError("No analytics data available")
        }
      } catch (err: any) {
        console.error("Analytics error:", err)
        setError(err instanceof Error ? err.message : "Failed to load analytics")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
          <p className="text-sm text-destructive">Error: {error}</p>
        </div>
      </div>
    )
  }

  if (!analytics) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">
          No analytics data available yet. Take some tests to see your performance!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            Your Analytics
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your progress and identify areas for improvement
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {/* CARD 1 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Overall Score</h3>
                <p className="text-2xl font-semibold text-foreground">
                  {Math.min(100, analytics.overallScore || 0)}%
                </p>
                <p className="text-sm text-muted-foreground">
                  Average across all tests
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-500" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Avg Time/Question</h3>
                <p className="text-2xl font-semibold text-emerald-600">
                  {analytics.avgTimePerQuestion || 0}s
                </p>
                <p className="text-sm text-muted-foreground">
                  Seconds per question
                </p>
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-500" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Current Streak</h3>
                <p className="text-2xl font-semibold text-amber-600">
                  {analytics.currentStreak || 0}
                </p>
                <p className="text-sm text-muted-foreground">
                  days • Best: {analytics.bestStreak || 0}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Performance Trend Chart */}
      {analytics.performanceTrend && analytics.performanceTrend.length > 0 && (
        <Card className="relative overflow-hidden border border-white/10 bg-white shadow-xl backdrop-blur-xl">

          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />

          <CardHeader>
            <CardTitle className="text-black text-lg font-semibold tracking-wide">
              Performance Trend
            </CardTitle>
            <CardDescription className="text-gray-600">
              Your test scores over time
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={analytics.performanceTrend} barCategoryGap="25%">

                {/* Gradient */}
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>

                {/* Grid */}
                {/* <CartesianGrid strokeDasharray="3 3" stroke="#000000" /> */}

                {/* X Axis */}
                <XAxis
                  dataKey="week"
                  tick={{ fill: "#242629ff", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                {/* Y Axis */}
                <YAxis
                  tick={{ fill: "#242629ff", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                {/* Tooltip */}
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.05)" }}
                  contentStyle={{
                    backgroundColor: "#f7f7f8ff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                  }}
                  labelStyle={{ color: "#000000ff" }}
                />

                {/* Bars */}
                <Bar
                  dataKey="score"
                  fill="#6d93d4ff"
                  radius={[8, 8, 0, 0]}
                >
                  {/* Value on top */}
                  <LabelList
                    dataKey="score"
                    position="top"
                    fill="#161718ff"
                    fontSize={12}
                  />
                </Bar>

              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
      {/* Subject Performance & Topic Strengths */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Subject Performance */}
        {analytics.subjectPerformance && analytics.subjectPerformance.length > 0 && (
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">

            <CardHeader>
              <CardTitle className="text-gray-900 font-semibold text-lg">
                Subject-wise Performance
              </CardTitle>
              <CardDescription className="text-gray-500">
                Your strength in each subject
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analytics.subjectPerformance} barCategoryGap="30%">

                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                  <XAxis
                    dataKey="subject"
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    cursor={{ fill: "rgba(0,0,0,0.04)" }}
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "10px",
                    }}
                  />

                  <Bar
                    dataKey="score"
                    fill="#3b82f6"
                    radius={[10, 10, 0, 0]}
                  >
                    <LabelList
                      dataKey="score"
                      position="top"
                      fill="#374151"
                      fontSize={12}
                    />
                  </Bar>

                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Topic Strengths */}
        {analytics.topicStrengths && analytics.topicStrengths.length > 0 && (
          <Card className="bg-white border border-gray-200 shadow-md rounded-2xl">

            <CardHeader>
              <CardTitle className="text-gray-900 font-semibold text-lg">
                Topic-wise Strength
              </CardTitle>
              <CardDescription className="text-gray-500">
                Performance breakdown by topic
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              {analytics.topicStrengths.map((topic: any) => {
                const strength = Math.min(100, topic.strength)
                const isStrong = strength >= 70

                return (
                  <div key={topic.topic} className="space-y-2">

                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-800 truncate">
                        {topic.topic}
                      </p>

                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${isStrong
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {strength}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-500 ${isStrong ? "bg-green-500" : "bg-yellow-500"
                          }`}
                        style={{ width: `${strength}%` }}
                      />
                    </div>

                  </div>
                )
              })}
            </CardContent>
          </Card>
        )}

      </div>

      {/* Personalized Recommendations */}
      <Card className="border-blue-200/20 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Personalized Recommendations
          </CardTitle>
          <CardDescription>Focus areas based on your performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {analytics.topicStrengths && analytics.topicStrengths.length > 0 ? (
              <>
                {/* Weakest Areas */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Areas to Improve</h4>
                  {[...analytics.topicStrengths]
                    .reverse()
                    .slice(0, 3)
                    .map((topic) => (
                      <div
                        key={topic.topic}
                        className="p-3 rounded-lg bg-amber-500/10 border border-amber-200/20 hover:border-amber-300/40 transition-colors"
                      >
                        <p className="text-sm font-medium text-amber-900 dark:text-amber-100">{topic.topic}</p>
                        <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                          Current: {Math.min(100, topic.strength)}% — Needs practice
                        </p>
                      </div>
                    ))}
                </div>

                {/* Strongest Areas */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Your Strengths</h4>
                  {analytics.topicStrengths.slice(0, 3).map((topic: any) => (
                    <div
                      key={topic.topic}
                      className="p-3 rounded-lg bg-green-500/10 border border-green-200/20 hover:border-green-300/40 transition-colors"
                    >
                      <p className="text-sm font-medium text-green-900 dark:text-green-100">{topic.topic}</p>
                      <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                        Mastered: {Math.min(100, topic.strength)}% — Keep it up!
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                <p className="text-sm text-muted-foreground">Take more tests to receive personalized recommendations</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
