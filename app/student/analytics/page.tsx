"use client"

import { useState, useEffect } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ChartCard } from "@/components/dashboard/chart-card"
import { getStudentAnalytics } from "@/lib/actions/student"
import { Target, TrendingUp, Clock, Award, Brain, Zap, Loader2 } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
} from "recharts"

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]

interface AnalyticsData {
  overallScore: number
  accuracyRate: number
  avgTimePerQuestion: number
  currentStreak: number
  bestStreak: number
  performanceTrend: Array<{ week: string; score: number; time: number }>
  subjectPerformance: Array<{ subject: string; score: number; tests: number }>
  topicStrengths: Array<{ topic: string; strength: number }>
  totalCorrect: number
  totalWrong: number
  totalAttempted: number
}

export default function StudentAnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadAnalytics() {
      try {
        const analytics = await getStudentAnalytics()
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
        <p className="text-muted-foreground">No analytics data available. Take some tests first!</p>
      </div>
    )
  }

  const weakestSubject =
    data.subjectPerformance.length > 0
      ? data.subjectPerformance.reduce((min, s) => (s.score < min.score ? s : min), data.subjectPerformance[0])
      : null
  const strongestTopic = data.topicStrengths.length > 0 ? data.topicStrengths[0] : null

  return (
    <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">My Analytics</h1>
        <p className="text-sm lg:text-base text-muted-foreground mt-1">Detailed analysis of your performance</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        <StatsCard
          title="Overall Score"
          value={`${data.overallScore}%`}
          change="Average across all tests"
          changeType="neutral"
          icon={Target}
          color="primary"
        />
        <StatsCard
          title="Accuracy Rate"
          value={`${data.accuracyRate}%`}
          change={`${data.totalCorrect}/${data.totalAttempted} correct`}
          changeType="positive"
          icon={TrendingUp}
          color="accent"
        />
        <StatsCard
          title="Avg Time/Question"
          value={`${data.avgTimePerQuestion}s`}
          change="Seconds per question"
          changeType="neutral"
          icon={Clock}
          color="warning"
        />
        <StatsCard
          title="Current Streak"
          value={`${data.currentStreak} days`}
          change={`Best: ${data.bestStreak} days`}
          changeType="neutral"
          icon={Zap}
          color="primary"
        />
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <ChartCard title="Performance Trend">
          {data.performanceTrend.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data.performanceTrend}>
                <defs>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="week" stroke="#888" fontSize={11} />
                <YAxis stroke="#888" domain={[0, 100]} fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
                <Area type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} fill="url(#colorPerf)" />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[250px] text-muted-foreground text-sm">
              Take more tests to see your trend
            </div>
          )}
        </ChartCard>

        <ChartCard title="Subject-wise Performance">
          {data.subjectPerformance.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart data={data.subjectPerformance}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" stroke="#888" fontSize={10} />
                <PolarRadiusAxis stroke="#888" domain={[0, 100]} fontSize={10} />
                <Radar name="Score" dataKey="score" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              </RadarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[250px] text-muted-foreground text-sm">
              No subject data available
            </div>
          )}
        </ChartCard>
      </div>

      {/* Subject Details */}
      {data.subjectPerformance.length > 0 && (
        <ChartCard title="Subject-wise Score Breakdown">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.subjectPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis type="number" domain={[0, 100]} stroke="#888" fontSize={11} />
              <YAxis dataKey="subject" type="category" width={80} stroke="#888" fontSize={10} />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
              <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                {data.subjectPerformance.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      )}

      {/* Topic Strength & Time */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <ChartCard title="Topic-wise Strength">
          {data.topicStrengths.length > 0 ? (
            <div className="space-y-3 lg:space-y-4">
              {data.topicStrengths.map((topic) => (
                <div key={topic.topic} className="space-y-1.5 lg:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs lg:text-sm font-medium text-foreground truncate pr-2">{topic.topic}</span>
                    <span
                      className={`text-xs lg:text-sm font-bold flex-shrink-0 ${
                        topic.strength >= 80
                          ? "text-accent"
                          : topic.strength >= 60
                            ? "text-amber-500"
                            : "text-destructive"
                      }`}
                    >
                      {topic.strength}%
                    </span>
                  </div>
                  <div className="h-2 lg:h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        topic.strength >= 80 ? "bg-accent" : topic.strength >= 60 ? "bg-amber-500" : "bg-destructive"
                      }`}
                      style={{ width: `${topic.strength}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[200px] text-muted-foreground text-sm">
              No topic data available
            </div>
          )}
        </ChartCard>

        <ChartCard title="Time Efficiency Trend">
          {data.performanceTrend.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={data.performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="week" stroke="#888" fontSize={11} />
                <YAxis stroke="#888" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px" }} />
                <Line
                  type="monotone"
                  dataKey="time"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: "#3b82f6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-[220px] text-muted-foreground text-sm">
              Take more tests to see time trend
            </div>
          )}
          <p className="text-xs text-muted-foreground text-center mt-2">
            Average seconds per question (lower is better)
          </p>
        </ChartCard>
      </div>

      <ChartCard title="Personalized Recommendations">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          <div className="p-4 lg:p-6 rounded-xl bg-destructive/10 border border-destructive/20">
            <Brain className="w-6 h-6 lg:w-8 lg:h-8 text-destructive mb-2 lg:mb-3" />
            <h4 className="font-semibold text-foreground mb-1 lg:mb-2 text-sm lg:text-base">Focus Area</h4>
            <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3">
              {weakestSubject
                ? `${weakestSubject.subject} needs improvement. Score: ${weakestSubject.score}%`
                : "Take more tests to identify focus areas"}
            </p>
            <p className="text-xs text-destructive font-medium">Practice 20 questions daily</p>
          </div>
          <div className="p-4 lg:p-6 rounded-xl bg-accent/10 border border-accent/20">
            <Award className="w-6 h-6 lg:w-8 lg:h-8 text-accent mb-2 lg:mb-3" />
            <h4 className="font-semibold text-foreground mb-1 lg:mb-2 text-sm lg:text-base">Strength</h4>
            <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3">
              {strongestTopic
                ? `${strongestTopic.topic} is your strongest topic. Score: ${strongestTopic.strength}%`
                : "Take more tests to identify strengths"}
            </p>
            <p className="text-xs text-accent font-medium">Maintain with weekly revision</p>
          </div>
          <div className="p-4 lg:p-6 rounded-xl bg-primary/10 border border-primary/20">
            <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-primary mb-2 lg:mb-3" />
            <h4 className="font-semibold text-foreground mb-1 lg:mb-2 text-sm lg:text-base">Speed Tip</h4>
            <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3">
              {data.avgTimePerQuestion > 60
                ? "Your average time is high. Try timed practice tests."
                : "Great speed! Keep practicing to maintain it."}
            </p>
            <p className="text-xs text-primary font-medium">Try speed tests daily</p>
          </div>
        </div>
      </ChartCard>
    </div>
  )
}
