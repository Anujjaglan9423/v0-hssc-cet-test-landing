"use client"

import { useEffect, useState, useCallback } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { getLoginSignupStats } from "@/lib/actions/admin"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LogIn, UserPlus, Activity, CalendarDays, Loader2 } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

interface Stats {
  date: string
  logins: number
  loginEvents: number
  signups: number
  trend: Array<{ date: string; label: string; logins: number; loginEvents: number; signups: number }>
}

// Today's date in IST as YYYY-MM-DD, matching the server-side day boundaries.
function istToday() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date())
}

export default function LoginActivityPage() {
  const today = istToday()
  const [date, setDate] = useState(today)
  const [stats, setStats] = useState<Stats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadStats = useCallback(async (selected: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await getLoginSignupStats(selected)
      setStats(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load login activity")
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadStats(date)
  }, [date, loadStats])

  const isToday = date === today
  const prettyDate = new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Login &amp; Signup Activity</h1>
          <p className="text-sm lg:text-base text-muted-foreground mt-1">
            Track how many users logged in and signed up on any given day
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="activity-date" className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5" />
            Select date
          </label>
          <div className="flex items-center gap-2">
            <Input
              id="activity-date"
              type="date"
              value={date}
              max={today}
              onChange={(e) => e.target.value && setDate(e.target.value)}
              className="w-full sm:w-48"
            />
            {!isToday && (
              <Button variant="outline" size="sm" onClick={() => setDate(today)}>
                Today
              </Button>
            )}
          </div>
        </div>
      </div>

      {error ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <p className="text-destructive text-lg font-semibold mb-2">Error loading activity</p>
            <p className="text-muted-foreground text-sm">{error}</p>
          </div>
        </div>
      ) : isLoading && !stats ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : stats ? (
        <div className={isLoading ? "opacity-60 transition-opacity" : "transition-opacity"}>
          <p className="text-sm text-muted-foreground mb-4">
            Showing activity for <span className="font-semibold text-foreground">{prettyDate}</span>
            {isToday && <span className="ml-2 text-primary font-medium">(Today)</span>}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-6">
            <StatsCard
              title="Users Logged In"
              value={stats.logins}
              change="Unique users on this day"
              changeType="positive"
              icon={LogIn}
              color="primary"
            />
            <StatsCard
              title="New Signups"
              value={stats.signups}
              change="Accounts created on this day"
              changeType="positive"
              icon={UserPlus}
              color="accent"
            />
            <StatsCard
              title="Total Login Sessions"
              value={stats.loginEvents}
              change="Includes repeat logins"
              changeType="neutral"
              icon={Activity}
              color="warning"
            />
          </div>

          <div className="mt-6 lg:mt-8">
            <ChartCard title="Last 14 Days Trend">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats.trend} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" fontSize={11} tickLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} allowDecimals={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "hsl(var(--muted))", opacity: 0.4 }}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Bar dataKey="logins" name="Logins" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={28} />
                  <Bar dataKey="signups" name="Signups" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={28} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      ) : null}
    </div>
  )
}
