"use client"

import { useEffect, useState } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { DataTable } from "@/components/dashboard/data-table"
import { getAdminStats, getAllStudents } from "@/lib/actions/admin"
import { Users, FileText, DollarSign, Activity, Loader2 } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"]

interface AdminStats {
  totalStudents: number
  activeStudents: number
  totalTests: number
  totalAttempts: number
  recentStudents: any[]
  monthlySignups: { month: string; count: number }[]
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [students, setStudents] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      try {
        const [statsData, studentsData] = await Promise.all([getAdminStats(), getAllStudents()])
        setStats(statsData)
        setStudents(studentsData)
      } catch (error) {
        console.error("Error loading admin data:", error)
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

  const testAttemptsByCategory = [
    { category: "Full Exams", attempts: Math.floor((stats?.totalAttempts || 0) * 0.4) },
    { category: "Subject Tests", attempts: Math.floor((stats?.totalAttempts || 0) * 0.35) },
    { category: "Topic Tests", attempts: Math.floor((stats?.totalAttempts || 0) * 0.25) },
  ]

  const subjectPerformance = [
    { subject: "General Studies", avgScore: 74 },
    { subject: "Reasoning", avgScore: 70 },
    { subject: "Mathematics", avgScore: 65 },
    { subject: "English", avgScore: 78 },
    { subject: "Hindi", avgScore: 80 },
    { subject: "Current Affairs", avgScore: 72 },
  ]

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
        <ChartCard title="Monthly Signups">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={stats?.monthlySignups || []}>
              <defs>
                <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="month" stroke="#888" fontSize={12} />
              <YAxis stroke="#888" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              <Area type="monotone" dataKey="count" stroke="#10b981" strokeWidth={2} fill="url(#colorSignups)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Test Attempts by Category">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={testAttemptsByCategory}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="attempts"
                nameKey="category"
                label={({ category, percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {testAttemptsByCategory.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Subject Performance */}
      <ChartCard title="Subject-wise Performance">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={subjectPerformance} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis type="number" domain={[0, 100]} stroke="#888" fontSize={12} />
            <YAxis dataKey="subject" type="category" width={100} stroke="#888" fontSize={11} />
            <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
            <Bar dataKey="avgScore" fill="#10b981" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

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
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.plan === "pro"
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
                {
                  key: "averageScore",
                  header: "Avg Score",
                  sortable: true,
                  render: (student: any) => (
                    <span
                      className={`font-medium ${
                        student.averageScore >= 80
                          ? "text-accent"
                          : student.averageScore >= 60
                            ? "text-amber-500"
                            : "text-destructive"
                      }`}
                    >
                      {student.averageScore || 0}%
                    </span>
                  ),
                },
                { key: "lastActive", header: "Last Active" },
              ]}
            />
          </div>
        </div>
      </ChartCard>
    </div>
  )
}
