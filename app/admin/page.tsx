"use client"

import { useEffect, useState } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { DataTable } from "@/components/dashboard/data-table"
import { MonthlySignupsChart, TestAttemptsByCategoryChart, SubjectPerformanceChart } from "@/components/dashboard/lazy-charts"
import { batchAdminRequests } from "@/lib/actions/batch"
import { Users, FileText, DollarSign, Activity, Loader2 } from "lucide-react"

interface AdminStats {
  totalStudents: number
  activeStudents: number
  totalTests: number
  totalAttempts: number
  recentStudents: any[]
  monthlySignups: { month: string; count: number }[]
}

interface AnalyticsData {
  averageScore: number
  passRate: number
  completionRate: number
  totalAttempts: number
  testAttemptsByCategory: Array<{ category: string; attempts: number }>
  subjectPerformance: Array<{ subject: string; avgScore: number }>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [students, setStudents] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      setError(null)
      try {
        // Use batch endpoint to combine all three requests into one
        const batchedData = await batchAdminRequests([
          { key: "stats", type: "stats" },
          { key: "students", type: "students" },
          { key: "analytics", type: "analytics" },
        ])

        const statsResult = batchedData.stats
        const studentsResult = batchedData.students
        const analyticsResult = batchedData.analytics

        if (statsResult?.success) setStats(statsResult.data)
        if (studentsResult?.success) setStudents(studentsResult.data)
        if (analyticsResult?.success) setAnalytics(analyticsResult.data)
      } catch (error) {
        console.error("[v0] Error loading admin data:", error)
        setError(error instanceof Error ? error.message : "Failed to load data")
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

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-destructive text-lg font-semibold mb-2">Error loading dashboard</p>
          <p className="text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    )
  }

  if (!stats || !analytics) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">No data available</p>
      </div>
    )
  }

  const testAttemptsByCategory = analytics?.testAttemptsByCategory || []
  const subjectPerformance = analytics?.subjectPerformance || []

  return (
    <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Welcome back, Admin!</h1>
        <p className="text-sm lg:text-base text-muted-foreground mt-1">
          Here's what's happening with your platform today.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <StatsCard
          title="Total Students"
          value={(stats?.totalStudents || 0).toLocaleString()}
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          color="primary"
        />
        <StatsCard
          title="Active Students"
          value={(stats?.activeStudents || 0).toLocaleString()}
          change="+8% from last month"
          changeType="positive"
          icon={Activity}
          color="accent"
        />
        <StatsCard
          title="Total Tests"
          value={stats?.totalTests || 0}
          change="+5 new this week"
          changeType="positive"
          icon={FileText}
          color="warning"
        />
        <StatsCard
          title="Test Attempts"
          value={(stats?.totalAttempts || 0).toLocaleString()}
          change="+18% from last month"
          changeType="positive"
          icon={DollarSign}
          color="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <MonthlySignupsChart data={stats?.monthlySignups || []} />
        <TestAttemptsByCategoryChart data={testAttemptsByCategory} />
      </div>

      <SubjectPerformanceChart data={subjectPerformance} />

      <ChartCard title="Recent Students">
        <div className="overflow-x-auto -mx-4 lg:mx-0">
          <div className="min-w-[600px] lg:min-w-0 px-4 lg:px-0">
            <DataTable
              data={students.slice(0, 5)}
              searchKey="name"
              columns={[
                { key: "name", header: "Name", sortable: true },
                { key: "email", header: "Email" },
                {
                  key: "plan",
                  header: "Plan",
                  render: (student: any) => (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${student.plan === "pro"
                          ? "bg-primary/20 text-primary"
                          : student.plan === "basic"
                            ? "bg-amber-500/20 text-amber-500"
                            : "bg-muted text-muted-foreground"
                        }`}
                    >
                      {(student.plan || "free").toUpperCase()}
                    </span>
                  ),
                },
                { key: "testsAttempted", header: "Tests", sortable: true },
                { key: "lastActive", header: "Last Active" },
              ]}
            />
          </div>
        </div>
      </ChartCard>
    </div>
  )
}
