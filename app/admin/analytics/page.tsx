"use client"

import { useState, useEffect } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { getAdminAnalytics } from "@/lib/actions/admin"
import { TrendingUp, Target, Award, CheckCircle, Loader2, Users, UserPlus, LogIn, UserX, Download, ChevronLeft, ChevronRight } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]

interface AnalyticsData {
  averageScore: number
  passRate: number
  completionRate: number
  totalAttempts: number
  totalSignups: number
  totalLogins: number
  repeatedUsers: number
  dailyActivity: Array<{ date: string; day: string; signups: number; logins: number; attempts: number }>
  weeklyActivity: Array<{ day: string; attempts: number; users: number }>
  scoreDistribution: Array<{ range: string; count: number }>
  subjectPerformance: Array<{ subject: string; avgScore: number }>
  monthlySignups: Array<{ month: string; count: number }>
  testAttemptsByCategory: Array<{ category: string; attempts: number }>
  inactiveUsers: Array<{ id: string; name: string; email: string; phone: string | null; signupDate: string; lastLogin: string | null }>
}

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() - 29)
    return date.toISOString().slice(0, 10)
  })
  const [endDate, setEndDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [inactivePage, setInactivePage] = useState(1)
  const inactivePageSize = 10

  useEffect(() => {
    async function loadAnalytics() {
      try {
        // console.log("[v0] Loading analytics...")
        setIsLoading(true)
        const analytics = await getAdminAnalytics(startDate, endDate)
        // console.log("[v0] Analytics loaded:", analytics)
        setData(analytics)
        setInactivePage(1)
      } catch (error) {
        // console.error("[v0] Error loading analytics:", error)
        setError(error instanceof Error ? error.message : "Failed to load analytics")
      } finally {
        setIsLoading(false)
      }
    }
    loadAnalytics()
  }, [startDate, endDate])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-destructive text-lg font-semibold mb-2">Error loading analytics</p>
          <p className="text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    )
  }

  const inactiveTotalPages = Math.max(1, Math.ceil((data?.inactiveUsers.length ?? 0) / inactivePageSize))
  const inactivePageUsers = data?.inactiveUsers.slice((inactivePage - 1) * inactivePageSize, inactivePage * inactivePageSize) ?? []

  function exportInactiveUsers() {
    if (!data?.inactiveUsers.length) return
    const escapeCsv = (value: string) => `"${value.replaceAll('"', '""')}"`
    const rows = [
      ["Name", "Email", "Mobile", "Last active date"],
      ...data.inactiveUsers.map((user) => [user.name, user.email, user.phone || "", user.lastLogin || "Never logged in"]),
    ]
    const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n")
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    const link = document.createElement("a")
    link.href = url
    link.download = `inactive-users-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No analytics data available</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Analytics Dashboard</h1>
        <p className="text-sm lg:text-base text-muted-foreground mt-1">Detailed insights into platform performance</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end gap-3 rounded-xl border border-border bg-card p-4">
        <div className="flex-1">
          <label htmlFor="analytics-start" className="text-xs font-medium text-muted-foreground">From date</label>
          <input id="analytics-start" type="date" value={startDate} max={endDate} onChange={(event) => setStartDate(event.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <div className="flex-1">
          <label htmlFor="analytics-end" className="text-xs font-medium text-muted-foreground">To date</label>
          <input id="analytics-end" type="date" value={endDate} min={startDate} max={new Date().toISOString().slice(0, 10)} onChange={(event) => setEndDate(event.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <p className="text-xs text-muted-foreground sm:pb-2">Cards update for this range. Graphs remain on the last 30 days.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <StatsCard
          title="Average Score"
          value={`${Math.min(100, data.averageScore)}%`}
          change="Based on all attempts"
          changeType="neutral"
          icon={Target}
          color="primary"
        />
        <StatsCard
          title="Pass Rate"
          value={`${data.passRate}%`}
          change="Score >= 60%"
          changeType="positive"
          icon={CheckCircle}
          color="accent"
        />
        <StatsCard
          title="Completion Rate"
          value={`${data.completionRate}%`}
          change="Tests completed"
          changeType="positive"
          icon={Award}
          color="warning"
        />
        <StatsCard
          title="Total Attempts"
          value={data.totalAttempts.toLocaleString()}
          change="All time"
          changeType="neutral"
          icon={TrendingUp}
          color="primary"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-6">
        <StatsCard title="User Signups" value={data.totalSignups.toLocaleString()} change="All student accounts" changeType="positive" icon={UserPlus} color="accent" />
        <StatsCard title="User Logins" value={data.totalLogins.toLocaleString()} change="Successful sessions" changeType="neutral" icon={LogIn} color="primary" />
        <StatsCard title="Test Attempts" value={data.totalAttempts.toLocaleString()} change="Selected date range" changeType="neutral" icon={Users} color="warning" />
        <StatsCard title="Repeated Users" value={data.repeatedUsers.toLocaleString()} change="Users with 2+ attempts" changeType="neutral" icon={Users} color="warning" />
      </div>

      <ChartCard title="Inactive Users — No Login in 10 Days">
        {data.inactiveUsers.length > 0 ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">{data.inactiveUsers.length} users have not logged in for 10 or more days.</p>
              <button type="button" onClick={exportInactiveUsers} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-muted" aria-label="Export inactive users as CSV">
                <Download className="h-4 w-4" aria-hidden="true" />
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="border-b border-border bg-muted/40 text-xs text-muted-foreground">
                  <tr>
                    <th className="px-3 py-3 font-medium">User</th>
                    <th className="px-3 py-3 font-medium">Mobile number</th>
                    <th className="px-3 py-3 font-medium">Signup date</th>
                    <th className="px-3 py-3 font-medium">Last login</th>
                  </tr>
                </thead>
                <tbody>
                  {inactivePageUsers.map((user) => (
                    <tr key={user.id} className="border-b border-border/60 last:border-0">
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <UserX className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                          <div>
                            <p className="font-medium text-foreground">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">{user.phone || "Not provided"}</td>
                      <td className="px-3 py-3 text-muted-foreground">{new Date(user.signupDate).toLocaleDateString()}</td>
                      <td className="px-3 py-3 text-muted-foreground">{user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : "Never logged in"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between gap-3 text-sm">
              <p className="text-muted-foreground">Page {inactivePage} of {inactiveTotalPages} · 10 entries per page</p>
              <div className="flex gap-2">
                <button type="button" onClick={() => setInactivePage((page) => Math.max(1, page - 1))} disabled={inactivePage === 1} className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50" aria-label="Previous page">
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Previous
                </button>
                <button type="button" onClick={() => setInactivePage((page) => Math.min(inactiveTotalPages, page + 1))} disabled={inactivePage === inactiveTotalPages} className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50" aria-label="Next page">
                  Next <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex min-h-32 items-center justify-center text-sm text-muted-foreground">No users have been inactive for 10 or more days.</div>
        )}
      </ChartCard>

      <ChartCard title="Daily Users & Test Attempts — Last 30 Days">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.dailyActivity} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#888" fontSize={10} interval={4} />
            <YAxis stroke="#888" fontSize={11} allowDecimals={false} />
            <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
            <Line type="monotone" dataKey="signups" name="Signups" stroke="#10b981" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="logins" name="Logins" stroke="#3b82f6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="attempts" name="Test attempts" stroke="#f59e0b" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <ChartCard title="Weekly Activity">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data.weeklyActivity}>
              <defs>
                <linearGradient id="colorAttempts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#888" fontSize={11} />
              <YAxis stroke="#888" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              <Area type="monotone" dataKey="attempts" stroke="#10b981" fill="url(#colorAttempts)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Score Distribution">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.scoreDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="range" stroke="#888" fontSize={10} />
              <YAxis stroke="#888" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {data.scoreDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <ChartCard title="Subject Performance Radar">
          {data.subjectPerformance.length > 0 ? (
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={data.subjectPerformance}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" stroke="#888" fontSize={10} />
                <PolarRadiusAxis stroke="#888" domain={[0, 100]} fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              </RadarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[280px] text-muted-foreground text-sm">
              No subject data available
            </div>
          )}
        </ChartCard>

        <ChartCard title="Monthly Signups Trend">
          {data.monthlySignups.length > 0 ? (
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={data.monthlySignups}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" fontSize={11} />
                <YAxis stroke="#888" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#10b981" }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[280px] text-muted-foreground text-sm">
              No signup data available
            </div>
          )}
        </ChartCard>
      </div>

      <ChartCard title="Test Attempts by Category">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {data.testAttemptsByCategory.map((item, idx) => (
            <div
              key={item.category}
              className="p-4 lg:p-6 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-all duration-300"
            >
              <div
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl mb-3 lg:mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${COLORS[idx]}20` }}
              >
                <Target className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: COLORS[idx] }} />
              </div>
              <h4 className="text-base lg:text-lg font-semibold text-foreground">{item.category}</h4>
              <p className="text-2xl lg:text-3xl font-bold mt-1 lg:mt-2" style={{ color: COLORS[idx] }}>
                {item.attempts.toLocaleString()}
              </p>
              <p className="text-xs lg:text-sm text-muted-foreground mt-1">Total Attempts</p>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  )
}
