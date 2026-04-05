"use client"

import { useEffect, useState } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { cn } from "@/lib/utils"
import { getStudentDashboard, getAvailableTests } from "@/lib/actions/student"
import { FileText, Trophy, Clock, Target, BookOpen, Zap, Loader2, RotateCcw, CheckCircle2 } from "lucide-react"
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

  const fullTests = tests.filter((t) => t.test_type === "full")
  const subjectTests = tests.filter((t) => t.test_type === "subject")
  const topicTests = tests.filter((t) => t.test_type === "topic")

  return (
    <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Welcome, Student!</h1>
          <p className="text-sm lg:text-base text-muted-foreground mt-1">Continue your preparation journey</p>
        </div>
        <Link href="/student/tests">
          <Button className="gap-2 w-full sm:w-auto cursor-pointer">
            <Zap className="w-4 h-4" />
            Start Test
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <StatsCard
          title="Tests Attempted"
          value={stats.testsAttempted}
          change="Keep practicing!"
          changeType="positive"
          icon={FileText}
          color="primary"
        />
        {/* Removed average score stat card */}
        <StatsCard
          title="Best Score"
          value={`${Math.min(stats.bestScore, 100)}%`}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <ChartCard title="Performance Trend">

          {/* Small helper text */}
          <p className="text-xs text-muted-foreground mb-3">
            Your score progression across recent tests
          </p>

          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={performanceTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>

              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>

              {/* Clean Grid */}
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                vertical={false}
              />

              {/* X Axis */}
              <XAxis
                dataKey="test"
                tickLine={false}
                axisLine={false}
                stroke="#9ca3af"
                fontSize={11}
              />

              {/* Y Axis */}
              <YAxis
                domain={[0, 100]}
                tickLine={false}
                axisLine={false}
                stroke="#9ca3af"
                fontSize={11}
              />

              {/* Tooltip */}
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  fontSize: "12px",
                  padding: "8px 10px",
                }}
                formatter={(value) => [`${value}%`, "Score"]}
                labelStyle={{ color: "#6b7280" }}
              />

              {/* Main Line */}
              <Area
                type="monotone"
                dataKey="score"
                stroke="#10b981"
                strokeWidth={2.5}
                fill="url(#colorScore)"
                dot={{ r: 3, strokeWidth: 2, fill: "#fff" }}
                activeDot={{ r: 6 }}
              />

            </AreaChart>
          </ResponsiveContainer>

          {/* Bottom Insight */}
          <div className="mt-3 text-xs text-muted-foreground">
            {performanceTrend?.length > 1 && (
              <span>
                Last Score:{" "}
                <span className="font-medium text-foreground">
                  {performanceTrend[performanceTrend.length - 1]?.score}%
                </span>
              </span>
            )}
          </div>

        </ChartCard>

        <ChartCard title="Subject-wise Performance">

          {/* Helper text */}
          <p className="text-xs text-muted-foreground mb-3">
            Your performance across different subjects
          </p>

          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={subjectPerformance}>

              {/* Clean Grid */}
              <PolarGrid stroke="#e5e7eb" />

              {/* Subject Labels */}
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#6b7280", fontSize: 11 }}
              />

              {/* Score Axis */}
              <PolarRadiusAxis
                domain={[0, 100]}
                tick={{ fill: "#9ca3af", fontSize: 10 }}
                axisLine={false}
              />

              {/* Radar */}
              <Radar
                name="Score"
                dataKey="score"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.2}
                strokeWidth={2}
              />

              {/* Tooltip */}
              <Tooltip
                formatter={(value) => [`${value}%`, "Score"]}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  fontSize: "12px",
                  padding: "8px 10px",
                }}
                labelStyle={{ color: "#6b7280" }}
              />

            </RadarChart>
          </ResponsiveContainer>

          {/* Bottom Insight */}
          <div className="mt-3 text-xs text-muted-foreground">
            {subjectPerformance?.length > 0 && (
              <>
                Strongest:{" "}
                <span className="font-medium text-foreground">
                  {
                    subjectPerformance.reduce((a: any, b: any) =>
                      a.score > b.score ? a : b
                    ).subject
                  }
                </span>
                {" • "}
                Weakest:{" "}
                <span className="font-medium text-foreground">
                  {
                    subjectPerformance.reduce((a: any, b: any) =>
                      a.score < b.score ? a : b
                    ).subject
                  }
                </span>
              </>
            )}
          </div>

        </ChartCard>
      </div>

      {/* Recent Tests & Recommended */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

        <ChartCard title="Recent Test Results">
          <div className="space-y-3">

            {recentResults.length > 0 ? (
              recentResults.map((result: any, idx: number) => (
                <div
                  key={result.id}
                  className="
            group flex items-center justify-between
            rounded-xl border border-border/60 bg-background/60 backdrop-blur
            p-3 lg:p-4
            transition-all duration-300
            hover:-translate-y-[1px]
            hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]
          "
                  style={{ animationDelay: `${idx * 80}ms` }}
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-3 min-w-0">

                    {/* Icon */}
                    <div
                      className={cn(
                        "w-10 h-10 lg:w-11 lg:h-11 rounded-lg flex items-center justify-center flex-shrink-0 border",
                        result.percentage >= 80 && "bg-green-50 text-green-600 border-green-200",
                        result.percentage >= 60 && result.percentage < 80 && "bg-amber-50 text-amber-600 border-amber-200",
                        result.percentage < 60 && "bg-red-50 text-red-600 border-red-200"
                      )}
                    >
                      <Trophy className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm lg:text-base truncate">
                        {result.test?.title || "Test"}
                      </p>

                      <p className="text-xs text-muted-foreground mt-0.5">
                        {new Date(result.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">

                    {/* Score */}
                    <p
                      className={cn(
                        "text-lg lg:text-xl font-semibold",
                        result.percentage >= 80 && "text-green-600",
                        result.percentage >= 60 && result.percentage < 80 && "text-amber-600",
                        result.percentage < 60 && "text-red-600"
                      )}
                    >
                      {result.marks}/{result.total_questions}
                    </p>

                    {/* Rank */}
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Rank #{result.rank || "-"}
                    </p>

                  </div>

                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <FileText className="w-10 h-10 mx-auto mb-3 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">
                  No tests attempted yet
                </p>
              </div>
            )}

            {/* Button */}
            <Link href="/student/results">
              <Button
                variant="outline"
                className="
          w-full mt-2 rounded-xl
          border-border/60
          hover:bg-muted/60
          transition cursor-pointer
        "
              >
                View All Results →
              </Button>
            </Link>

          </div>
        </ChartCard>

        <ChartCard title="Recommended Tests">
          <div className="space-y-3">

            {recommendedTests.length > 0 ? (
              recommendedTests.map((test: any, idx: number) => {
                const hasAttempted = test.user_attempt !== null

                return (
                  <div
                    key={test.id}
                    className="
              group flex items-center justify-between
              rounded-xl border border-border/60 bg-background/60 backdrop-blur
              p-3 lg:p-4
              transition-all duration-300
              hover:-translate-y-[1px]
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]
            "
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >

                    {/* LEFT */}
                    <div className="flex items-center gap-3 min-w-0">

                      {/* Icon */}
                      <div
                        className={cn(
                          "w-10 h-10 lg:w-11 lg:h-11 rounded-lg flex items-center justify-center border flex-shrink-0",
                          hasAttempted
                            ? "bg-green-50 text-green-600 border-green-200"
                            : "bg-muted text-foreground border-border"
                        )}
                      >
                        {hasAttempted ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <BookOpen className="w-5 h-5" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <p className="font-medium text-foreground text-sm lg:text-base line-clamp-1">
                          {test.title}
                        </p>

                        {hasAttempted ? (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Score:{" "}
                            <span className="font-medium text-green-600">
                              {test.user_attempt.score}/{test.user_attempt.totalQuestions}
                            </span>{" "}
                            ({test.user_attempt.percentage}%)
                          </p>
                        ) : (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {test.questions_count} Qs • {test.duration} min
                          </p>
                        )}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <Link href={`/take-test/${test.id}`}>
                      {hasAttempted ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="
                    rounded-lg border-border/60
                    text-green-600 hover:bg-green-600 hover:text-white
                    transition cursor-pointer
                  "
                        >
                          <RotateCcw className="w-3 h-3 mr-1" />
                          Retry
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="
                    rounded-lg
                    shadow-sm cursor-pointer
                  "
                        >
                          Start
                        </Button>
                      )}
                    </Link>

                  </div>
                )
              })
            ) : (
              <div className="text-center py-8">
                <BookOpen className="w-10 h-10 mx-auto mb-3 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">
                  No tests available
                </p>
              </div>
            )}

            {/* Bottom Button */}
            <Link href="/student/tests">
              <Button
                variant="outline"
                className="
          w-full mt-2 rounded-xl
          border-border/60
          hover:bg-muted/60 cursor-pointer
        "
              >
                Browse All Tests →
              </Button>
            </Link>

          </div>
        </ChartCard>
      </div>

      <ChartCard title="Quick Actions">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <Link href="/student/tests?tab=full">
            <div className="p-4 lg:p-6 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 text-center group cursor-pointer">
              <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-primary mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground text-sm lg:text-base">Full Mock Tests</p>
              <p className="text-xs text-muted-foreground">{fullTests.length} Available</p>
            </div>
          </Link>
          <Link href="/student/tests?tab=subject">
            <div className="p-4 lg:p-6 rounded-xl bg-accent/10 hover:bg-accent/20 transition-all duration-300 text-center group cursor-pointer">
              <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-accent mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground text-sm lg:text-base">Subject Tests</p>
              <p className="text-xs text-muted-foreground">{subjectTests.length} Available</p>
            </div>
          </Link>
          <Link href="/student/tests?tab=topic">
            <div className="p-4 lg:p-6 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 transition-all duration-300 text-center group cursor-pointer">
              <Target className="w-6 h-6 lg:w-8 lg:h-8 text-amber-500 mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground text-sm lg:text-base">Topic Tests</p>
              <p className="text-xs text-muted-foreground">{topicTests.length} Available</p>
            </div>
          </Link>
          <Link href="/student/practice">
            <div className="p-4 lg:p-6 rounded-xl bg-destructive/10 hover:bg-destructive/20 transition-all duration-300 text-center group cursor-pointer">
              <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-destructive mx-auto mb-2 lg:mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground text-sm lg:text-base">Quick Practice</p>
              <p className="text-xs text-muted-foreground">Unlimited</p>
            </div>
          </Link>
        </div>
      </ChartCard>
    </div>
  )
}
