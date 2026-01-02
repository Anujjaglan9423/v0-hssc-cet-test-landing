"use client"

import { useEffect, useState } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { getStudentDashboard, getAvailableTests } from "@/lib/actions/student"
import { FileText, Trophy, Clock, Target, BookOpen, Zap, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

export default function StudentDashboard() {
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [tests, setTests] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      try {
        const [dashboard, availableTests] = await Promise.all([getStudentDashboard(), getAvailableTests()])
        setDashboardData(dashboard)
        setTests(availableTests)
      } catch (error) {
        console.error("Error loading dashboard:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const stats = dashboardData?.stats || {
    testsAttempted: 0,
    averageScore: 0,
    bestScore: 0,
    totalTime: "0h",
  }

  const performanceTrend =
    dashboardData?.performanceTrend?.length > 0
      ? dashboardData.performanceTrend
      : [
          { test: "Test 1", score: 0 },
          { test: "Test 2", score: 0 },
        ]

  const subjectPerformance =
    dashboardData?.subjectPerformance?.length > 0
      ? dashboardData.subjectPerformance
      : [
          { subject: "General", score: 0 },
          { subject: "Reasoning", score: 0 },
        ]

  const recentResults = dashboardData?.recentResults || []
  const recommendedTests = tests.slice(0, 3)

  const examTests = tests.filter((t) => t.category === "exam")
  const subjectTests = tests.filter((t) => t.category === "subject")
  const topicTests = tests.filter((t) => t.category === "topic")

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header - Changed to generic greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome, Student!</h1>
          <p className="text-muted-foreground mt-1">Continue your preparation journey</p>
        </div>
        <Link href="/student/tests">
          <Button className="gap-2">
            <Zap className="w-4 h-4" />
            Start Test
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Tests Attempted"
          value={stats.testsAttempted}
          change="Keep practicing!"
          changeType="positive"
          icon={FileText}
          color="primary"
        />
        <StatsCard
          title="Average Score"
          value={`${stats.averageScore}%`}
          change={stats.averageScore >= 70 ? "Great job!" : "Keep improving!"}
          changeType={stats.averageScore >= 70 ? "positive" : "neutral"}
          icon={Target}
          color="accent"
        />
        <StatsCard
          title="Best Score"
          value={`${stats.bestScore}%`}
          change="Personal best"
          changeType="neutral"
          icon={Trophy}
          color="warning"
        />
        <StatsCard
          title="Study Time"
          value={stats.totalTime}
          change="This month"
          changeType="neutral"
          icon={Clock}
          color="primary"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Performance Trend">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceTrend}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="test" stroke="#888" />
              <YAxis stroke="#888" domain={[0, 100]} />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              <Area type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} fill="url(#colorScore)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Subject-wise Performance">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={subjectPerformance}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="subject" stroke="#888" fontSize={11} />
              <PolarRadiusAxis stroke="#888" domain={[0, 100]} />
              <Radar name="Score" dataKey="score" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Recent Tests & Recommended */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Recent Test Results">
          <div className="space-y-4">
            {recentResults.length > 0 ? (
              recentResults.map((result: any, idx: number) => (
                <div
                  key={result.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        result.score >= 80
                          ? "bg-accent/20 text-accent"
                          : result.score >= 60
                            ? "bg-amber-500/20 text-amber-500"
                            : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{result.test?.title || "Test"}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(result.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-2xl font-bold ${
                        result.score >= 80 ? "text-accent" : result.score >= 60 ? "text-amber-500" : "text-destructive"
                      }`}
                    >
                      {result.score}%
                    </p>
                    <p className="text-xs text-muted-foreground">Rank #{result.rank || "-"}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No tests attempted yet</p>
                <p className="text-sm">Start a test to see your results here</p>
              </div>
            )}
            <Link href="/student/results">
              <Button variant="outline" className="w-full bg-transparent">
                View All Results
              </Button>
            </Link>
          </div>
        </ChartCard>

        <ChartCard title="Recommended Tests">
          <div className="space-y-4">
            {recommendedTests.length > 0 ? (
              recommendedTests.map((test: any, idx: number) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-in fade-in slide-in-from-right-4"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{test.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {test.questions_count} Questions | {test.duration} min
                      </p>
                    </div>
                  </div>
                  <Link href={`/student/test/${test.id}`}>
                    <Button size="sm">Start</Button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No tests available</p>
              </div>
            )}
            <Link href="/student/tests">
              <Button variant="outline" className="w-full bg-transparent">
                Browse All Tests
              </Button>
            </Link>
          </div>
        </ChartCard>
      </div>

      {/* Quick Actions */}
      <ChartCard title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/student/tests?category=exam">
            <div className="p-6 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 text-center group cursor-pointer">
              <FileText className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground">Full Mock Tests</p>
              <p className="text-sm text-muted-foreground">{examTests.length} Available</p>
            </div>
          </Link>
          <Link href="/student/tests?category=subject">
            <div className="p-6 rounded-xl bg-accent/10 hover:bg-accent/20 transition-all duration-300 text-center group cursor-pointer">
              <BookOpen className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground">Subject Tests</p>
              <p className="text-sm text-muted-foreground">{subjectTests.length} Available</p>
            </div>
          </Link>
          <Link href="/student/tests?category=topic">
            <div className="p-6 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 transition-all duration-300 text-center group cursor-pointer">
              <Target className="w-8 h-8 text-amber-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground">Topic Tests</p>
              <p className="text-sm text-muted-foreground">{topicTests.length} Available</p>
            </div>
          </Link>
          <Link href="/student/practice">
            <div className="p-6 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-all duration-300 text-center group cursor-pointer">
              <Zap className="w-8 h-8 text-destructive mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground">Quick Practice</p>
              <p className="text-sm text-muted-foreground">Unlimited</p>
            </div>
          </Link>
        </div>
      </ChartCard>
    </div>
  )
}
