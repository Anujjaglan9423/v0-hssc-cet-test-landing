"use client"

import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"
import { ChartCard } from "./chart-card"

// Lazy load chart components with loading skeleton
const LazyAreaChart = dynamic(
  () => import("./area-chart-content").then((mod) => mod.AreaChartContent),
  {
    ssr: false,
    loading: () => <ChartSkeleton />,
  }
)

const LazyPieChart = dynamic(
  () => import("./pie-chart-content").then((mod) => mod.PieChartContent),
  {
    ssr: false,
    loading: () => <ChartSkeleton />,
  }
)

const LazyBarChart = dynamic(
  () => import("./bar-chart-content").then((mod) => mod.BarChartContent),
  {
    ssr: false,
    loading: () => <ChartSkeleton />,
  }
)

function ChartSkeleton() {
  return (
    <div className="flex items-center justify-center h-64">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  )
}

interface MonthlySignupsChartProps {
  data: Array<{ month: string; count: number }>
}

export function MonthlySignupsChart({ data }: MonthlySignupsChartProps) {
  return (
    <ChartCard title="Monthly Signups">
      <LazyAreaChart data={data} />
    </ChartCard>
  )
}

interface TestAttemptsByCategoryChartProps {
  data: Array<{ category: string; attempts: number }>
}

export function TestAttemptsByCategoryChart({ data }: TestAttemptsByCategoryChartProps) {
  return (
    <ChartCard title="Test Attempts by Category">
      <LazyPieChart data={data} />
    </ChartCard>
  )
}

interface SubjectPerformanceChartProps {
  data: Array<{ subject: string; avgScore: number }>
}

export function SubjectPerformanceChart({ data }: SubjectPerformanceChartProps) {
  return (
    <ChartCard title="Subject-wise Performance">
      <LazyBarChart data={data} />
    </ChartCard>
  )
}
