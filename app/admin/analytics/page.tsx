"use client"

import { useState, useEffect } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { getAdminAnalytics } from "@/lib/actions/admin"
import { TrendingUp, Target, Award, CheckCircle, Loader2 } from "lucide-react"
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
  Radar,
} from "recharts"

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]

interface AnalyticsData {
  averageScore: number
  passRate: number
  completionRate: number
  totalAttempts: number
  weeklyActivity: Array<{ day: string; attempts: number; users: number }>
  scoreDistribution: Array<{ range: string; count: number }>
  subjectPerformance: Array<{ subject: string; avgScore: number }>
  monthlySignups: Array<{ month: string; count: number }>
  testAttemptsByCategory: Array<{ category: string; attempts: number }>
}

export default function AdminAnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadAnalytics() {
      try {
        const analytics = await getAdminAnalytics()
        setData(analytics)
      } catch (error) {
        console.error("Error loading analytics:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadAnalytics()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No analytics data available</p>
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
        <p className="text-muted-foreground mt-1">Detailed insights into platform performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Average Score"
          value={`${data.averageScore}%`}
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

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Weekly Activity">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.weeklyActivity}>
              <defs>
                <linearGradient id="colorAttempts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              <Area type="monotone" dataKey="attempts" stroke="#10b981" fill="url(#colorAttempts)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Score Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.scoreDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="range" stroke="#888" />
              <YAxis stroke="#888" />
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Subject Performance Radar">
          {data.subjectPerformance.length > 0 ? (
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={data.subjectPerformance}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" stroke="#888" fontSize={12} />
                <PolarRadiusAxis stroke="#888" domain={[0, 100]} />
                <Radar name="Avg Score" dataKey="avgScore" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              </RadarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[350px] text-muted-foreground">
              No subject data available
            </div>
          )}
        </ChartCard>

        <ChartCard title="Monthly Signups Trend">
          {data.monthlySignups.length > 0 ? (
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={data.monthlySignups}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: "#10b981" }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[350px] text-muted-foreground">
              No signup data available
            </div>
          )}
        </ChartCard>
      </div>

      {/* Test Category Breakdown */}
      <ChartCard title="Test Attempts by Category">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.testAttemptsByCategory.map((item, idx) => (
            <div
              key={item.category}
              className="p-6 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${COLORS[idx]}20` }}
              >
                <Target className="w-6 h-6" style={{ color: COLORS[idx] }} />
              </div>
              <h4 className="text-lg font-semibold text-foreground">{item.category}</h4>
              <p className="text-3xl font-bold mt-2" style={{ color: COLORS[idx] }}>
                {item.attempts.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Total Attempts</p>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  )
}
