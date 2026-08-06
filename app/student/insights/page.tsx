"use client"

import Link from "next/link"
import useSWR from "swr"
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileCheck2,
  Lightbulb,
  RefreshCw,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"

interface Attempt {
  id: string
  testId: string
  title: string
  testType: string
  subject: string
  topic: string
  score: number
  percentage: number
  totalQuestions: number
  correct: number
  wrong: number
  unanswered: number
  timeTakenSeconds: number
  completedAt: string
}

interface Report {
  overallSummary: string
  readinessScore: number
  trend: "improving" | "steady" | "needs attention"
  strengths: string[]
  focusAreas: string[]
  studyPlan: { title: string; action: string; duration: string }[]
  testInsights: { testId: string; diagnosis: string; recommendation: string; priority: "high" | "medium" | "low" }[]
  attempts?: Attempt[]
}

async function fetchInsights(url: string): Promise<Report> {
  const response = await fetch(url, { cache: "no-store" })
  const payload = await response.json()
  if (!response.ok) throw new Error(payload.error || "Unable to load insights")
  return payload
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value))
}

function formatDuration(seconds: number) {
  if (!seconds) return "—"
  const minutes = Math.floor(seconds / 60)
  return `${minutes} min`
}

function ReportSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="h-32 w-full rounded-2xl" />
      <div className="grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((item) => <Skeleton key={item} className="h-28 rounded-xl" />)}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    </div>
  )
}

function PriorityBadge({ priority }: { priority: "high" | "medium" | "low" }) {
  const label = priority === "high" ? "High priority" : priority === "medium" ? "Medium priority" : "On track"
  return <Badge variant={priority === "high" ? "destructive" : priority === "medium" ? "secondary" : "outline"}>{label}</Badge>
}

export default function StudentInsightsPage() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Report>("/api/student/insights", fetchInsights, {
    revalidateOnFocus: false,
  })

  const attempts = data?.attempts ?? []
  const average = attempts.length ? Math.round(attempts.reduce((sum, attempt) => sum + attempt.percentage, 0) / attempts.length) : 0
  const trendIcon = data?.trend === "improving" ? TrendingUp : data?.trend === "needs attention" ? TrendingDown : Activity
  const TrendIcon = trendIcon
  const insightById = new Map((data?.testInsights ?? []).map((insight) => [insight.testId, insight]))

  if (isLoading) return <ReportSkeleton />

  if (error) {
    return (
      <Card className="mx-auto flex max-w-xl flex-col items-center gap-4 p-8 text-center">
        <CircleAlert className="size-10 text-destructive" aria-hidden="true" />
        <div className="flex flex-col gap-1">
          <CardTitle>Insights are temporarily unavailable</CardTitle>
          <CardDescription>{error.message}</CardDescription>
        </div>
        <Button onClick={() => void mutate()} disabled={isValidating}>
          <RefreshCw data-icon="inline-start" className={isValidating ? "animate-spin" : ""} /> Try again
        </Button>
      </Card>
    )
  }

  if (!data || attempts.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary"><Sparkles className="size-5" aria-hidden="true" /><span className="text-sm font-semibold">AI-powered coaching</span></div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">AI Study Insights</h1>
          <p className="max-w-2xl text-pretty text-muted-foreground">Your test history becomes a focused study plan. Take a test to generate your first report.</p>
        </header>
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"><BrainCircuit className="size-8" aria-hidden="true" /></div>
            <div className="flex flex-col gap-2"><h2 className="text-xl font-semibold">Your learning report starts here</h2><p className="max-w-md text-sm leading-6 text-muted-foreground">Complete any mock, subject, or topic test and we&apos;ll surface your strengths, weak areas, and the next best study action.</p></div>
            <Button asChild><Link href="/student/tests">Browse test series <ArrowRight data-icon="inline-end" /></Link></Button>
          </CardContent>
        </Card>
        <PreviewBlock />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary"><Sparkles className="size-5" aria-hidden="true" /><span className="text-sm font-semibold">Personalized for your preparation</span></div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">AI Study Insights</h1>
          <p className="max-w-2xl text-pretty text-muted-foreground">A clear read on every attempt, so you always know what to revise next.</p>
        </div>
        <Button variant="outline" onClick={() => void mutate()} disabled={isValidating} aria-label="Refresh AI study insights">
          <RefreshCw data-icon="inline-start" className={isValidating ? "animate-spin" : ""} /> Refresh report
        </Button>
      </header>

      <Card className="overflow-hidden border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><BrainCircuit className="size-7" aria-hidden="true" /></div>
          <div className="flex flex-1 flex-col gap-2"><div className="flex flex-wrap items-center gap-2"><Badge variant="secondary">Latest report</Badge><span className="text-xs text-muted-foreground">Based on {attempts.length} completed {attempts.length === 1 ? "test" : "tests"}</span></div><p className="max-w-3xl text-pretty text-sm leading-6 text-foreground">{data.overallSummary}</p></div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><TrendIcon className="size-4 text-primary" aria-hidden="true" /> {data.trend}</div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard icon={Target} label="Readiness score" value={`${Math.round(data.readinessScore)}%`} detail="AI estimate from your history" />
        <MetricCard icon={FileCheck2} label="Tests analyzed" value={String(attempts.length)} detail="Every completed attempt" />
        <MetricCard icon={Activity} label="Average score" value={`${average}%`} detail="Across your test history" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><CheckCircle2 className="size-5 text-primary" aria-hidden="true" /> What you&apos;re doing well</CardTitle><CardDescription>Patterns your recent attempts show as strengths.</CardDescription></CardHeader>
          <CardContent className="flex flex-col gap-3">{data.strengths.map((strength) => <div key={strength} className="flex items-start gap-3 rounded-xl bg-primary/5 p-3 text-sm leading-6"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{strength}</span></div>)}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Target className="size-5 text-primary" aria-hidden="true" /> Focus next</CardTitle><CardDescription>High-value areas to strengthen now.</CardDescription></CardHeader>
          <CardContent className="flex flex-col gap-3">{data.focusAreas.map((area) => <div key={area} className="flex items-start gap-3 rounded-xl border border-border p-3 text-sm leading-6"><ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{area}</span></div>)}</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="size-5 text-primary" aria-hidden="true" /> Your next study plan</CardTitle><CardDescription>Simple actions generated from your performance patterns.</CardDescription></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{data.studyPlan.map((step, index) => <div key={`${step.title}-${index}`} className="flex gap-3 rounded-xl border border-border p-4"><div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">{index + 1}</div><div className="flex min-w-0 flex-col gap-1"><div className="flex items-center justify-between gap-2"><p className="font-semibold text-foreground">{step.title}</p><Badge variant="outline">{step.duration}</Badge></div><p className="text-sm leading-6 text-muted-foreground">{step.action}</p></div></div>)}</CardContent>
      </Card>

      <PreviewBlock />

      <section className="flex flex-col gap-4" aria-labelledby="test-intelligence-heading">
        <div><h2 id="test-intelligence-heading" className="text-xl font-semibold tracking-tight">Test-by-test intelligence</h2><p className="text-sm text-muted-foreground">A useful takeaway from every completed attempt.</p></div>
        <div className="flex flex-col gap-4">{attempts.map((attempt) => { const insight = insightById.get(attempt.testId) ?? { diagnosis: `You scored ${Math.round(attempt.percentage)}% on this attempt.`, recommendation: "Review missed questions and retry after focused practice.", priority: "medium" as const }; return <Card key={attempt.id} className="overflow-hidden"><CardContent className="flex flex-col gap-5 p-5 lg:flex-row lg:items-start lg:justify-between"><div className="flex min-w-0 flex-1 flex-col gap-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="flex min-w-0 flex-col gap-1"><h3 className="truncate font-semibold text-foreground">{attempt.title}</h3><div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground"><span className="flex items-center gap-1"><CalendarDays className="size-3.5" aria-hidden="true" /> {formatDate(attempt.completedAt)}</span><span className="flex items-center gap-1"><Clock3 className="size-3.5" aria-hidden="true" /> {formatDuration(attempt.timeTakenSeconds)}</span><span>{attempt.subject} · {attempt.topic}</span></div></div><PriorityBadge priority={insight.priority} /></div><div className="flex flex-col gap-2"><p className="text-sm leading-6 text-foreground">{insight.diagnosis}</p><p className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"><ArrowRight className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" /> {insight.recommendation}</p></div></div><div className="flex w-full flex-col gap-2 lg:w-40 lg:items-end"><div className="flex items-center justify-between text-sm lg:w-full"><span className="text-muted-foreground">Score</span><span className="font-bold text-foreground">{Math.round(attempt.percentage)}%</span></div><Progress value={attempt.percentage} aria-label={`${attempt.title} score ${Math.round(attempt.percentage)} percent`} /><p className="text-xs text-muted-foreground">{attempt.correct}/{attempt.totalQuestions} correct</p></div></CardContent></Card> })}</div>
      </section>
    </div>
  )
}

function MetricCard({ icon: Icon, label, value, detail }: { icon: typeof Target; label: string; value: string; detail: string }) {
  return <Card><CardContent className="flex items-center gap-4 p-5"><div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></div><div className="min-w-0"><p className="text-sm text-muted-foreground">{label}</p><p className="text-2xl font-bold tracking-tight text-foreground">{value}</p><p className="truncate text-xs text-muted-foreground">{detail}</p></div></CardContent></Card>
}

function PreviewBlock() {
  return <Card className="border-border/70 bg-muted/30"><CardHeader className="pb-3"><CardTitle className="text-base">Why this report matters</CardTitle><CardDescription>Turn raw scores into a smarter preparation loop.</CardDescription></CardHeader><CardContent className="grid gap-3 md:grid-cols-3"><PreviewItem icon={FileCheck2} title="Every test analyzed" text="See the story across full, subject, and topic tests." /><PreviewItem icon={Target} title="Weak areas surfaced" text="Find the concepts that deserve your next revision block." /><PreviewItem icon={ArrowRight} title="Next study action" text="Leave each report with a practical step, not just a score." /></CardContent></Card>
}

function PreviewItem({ icon: Icon, title, text }: { icon: typeof FileCheck2; title: string; text: string }) {
  return <div className="flex gap-3 rounded-xl bg-background p-3"><Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><div className="flex flex-col gap-1"><p className="text-sm font-semibold">{title}</p><p className="text-xs leading-5 text-muted-foreground">{text}</p></div></div>
}
