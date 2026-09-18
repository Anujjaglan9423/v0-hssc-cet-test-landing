"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { getStudentAnalytics } from "@/lib/actions/student"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ArrowRight, BookOpen, CheckCircle2, Clock3, Loader2, Target, TrendingDown, TrendingUp, Trophy, XCircle } from "lucide-react"

const formatTime = (seconds = 0) => `${Math.floor(seconds / 60)}m ${seconds % 60}s`
const formatDate = (date?: string) => date ? new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—"

export default function StudentAnalyticsPage() {
  const [analytics, setAnalytics] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAllTopics, setShowAllTopics] = useState(false)
  const [rankPage, setRankPage] = useState(1)
  const rankPageSize = 10

  useEffect(() => {
    getStudentAnalytics().then(setAnalytics).catch((err) => setError(err instanceof Error ? err.message : "Failed to load analytics")).finally(() => setLoading(false))
  }, [])

  const topics = analytics?.topicStrengths || []
  const weakTopics = useMemo(() => [...topics].sort((a, b) => a.strength - b.strength).slice(0, 3), [topics])
  const strongTopics = useMemo(() => [...topics].sort((a, b) => b.strength - a.strength).slice(0, 3), [topics])
  const rankings = analytics?.testRankings || []
  const visibleRankings = rankings.slice((rankPage - 1) * rankPageSize, rankPage * rankPageSize)
  const pageCount = Math.max(1, Math.ceil(rankings.length / rankPageSize))
  const recommendation = weakTopics[0]
  const trend = analytics?.performanceTrend || []
  const latestTrend = trend.at(-1)
  const previousTrend = trend.at(-2)
  const trendNote = latestTrend && previousTrend && latestTrend.score > previousTrend.score && latestTrend.accuracy < previousTrend.accuracy
    ? "Your score increased, but accuracy dipped. Slow down and review mistakes."
    : latestTrend && previousTrend && latestTrend.score < previousTrend.score && latestTrend.accuracy > previousTrend.accuracy
      ? "Accuracy improved while your score dipped. Attempt more questions next time."
      : "Score and accuracy are moving together. Keep building consistency."

  if (loading) return <div className="flex min-h-[400px] items-center justify-center"><Loader2 className="size-8 animate-spin text-primary" /></div>
  if (error) return <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-6 text-destructive">Error: {error}</div>
  if (!analytics) return <div className="py-12 text-center text-muted-foreground">Take a test to unlock your analytics.</div>

  return <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 bg-muted/20 px-4 py-6 pb-12 sm:px-6 lg:px-8">
    <header className="flex flex-col gap-1 border-b pb-5"><p className="text-sm font-medium text-primary">Student progress</p><h1 className="text-3xl font-semibold tracking-tight">Your Analytics</h1><p className="text-muted-foreground">Know what went wrong, then practice with purpose.</p></header>

    {recommendation && <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background shadow-sm"><CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between"><div><Badge variant="secondary" className="mb-2">Recommended next step</Badge><h2 className="text-xl font-semibold">Your {recommendation.topic} accuracy is {recommendation.strength}%.</h2><p className="mt-1 text-sm text-muted-foreground">Complete a focused practice test to turn this weak area into a strength.</p></div><Button asChild><Link href={recommendation.testId ? `/student/test/${recommendation.testId}` : `/student/tests?topic=${encodeURIComponent(recommendation.topic)}`}>Practice {recommendation.topic}<ArrowRight data-icon="inline-end" /></Link></Button></CardContent></Card>}

    <section aria-labelledby="overview-title"><div className="mb-4"><h2 id="overview-title" className="text-xl font-semibold">Performance overview</h2><p className="text-sm text-muted-foreground">Your score includes negative marking where applicable.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {[{ label: "Overall score", value: `${analytics.overallScore || 0}%`, note: "Average score" }, { label: "Accuracy", value: `${analytics.accuracyRate || 0}%`, note: `${analytics.accuracyDisplay || "0/0"} correct ÷ attempted` }, { label: "Attempt rate", value: `${analytics.attemptRate || 0}%`, note: `${analytics.totalAttempted || 0} ÷ ${analytics.totalQuestions || 0} questions` }, { label: "Avg time / question", value: `${analytics.avgTimePerQuestion || 0}s`, note: "Across completed tests" }, { label: "Tests completed", value: analytics.testsCompleted || 0, note: "Keep your streak going" }].map((metric) => <Card key={metric.label} className="shadow-sm"><CardContent className="p-5"><p className="text-sm text-muted-foreground">{metric.label}</p><p className="mt-2 text-2xl font-semibold">{metric.value}</p><p className="mt-1 text-xs text-muted-foreground">{metric.note}</p></CardContent></Card>)}
    </div></section>

    <Card><CardHeader><CardTitle className="flex items-center gap-2"><Trophy className="size-5 text-amber-500" />All-India rank</CardTitle><CardDescription>Recent test performance and your position among attempts.</CardDescription></CardHeader><CardContent><div className="overflow-x-auto rounded-lg border"><table className="w-full min-w-[900px] text-sm"><thead className="bg-muted/50 text-left text-muted-foreground"><tr>{["Test", "Date", "Score", "Accuracy", "Rank", "Percentile", "Time taken", "Action"].map((heading) => <th key={heading} className="px-4 py-3 font-medium">{heading}</th>)}</tr></thead><tbody className="divide-y">{visibleRankings.map((item: any, index: number) => <tr key={`${item.testId}-${index}`} className="hover:bg-muted/30"><td className="max-w-[220px] truncate px-4 py-3 font-medium">{item.test}</td><td className="px-4 py-3 text-muted-foreground">{formatDate(item.date)}</td><td className="px-4 py-3">{item.score}%</td><td className="px-4 py-3">{item.accuracy}%</td><td className="px-4 py-3 font-semibold">#{item.rank}</td><td className="px-4 py-3">{item.percentile}th</td><td className="px-4 py-3">{formatTime(item.timeTaken)}</td><td className="px-4 py-3"><Button asChild variant="outline" size="sm"><Link href={`/student/results/${item.attemptId}`}>View result</Link></Button></td></tr>)}</tbody></table></div>{rankings.length > 0 && <div className="mt-4 flex items-center justify-between text-sm"><span className="text-muted-foreground">Showing {(rankPage - 1) * rankPageSize + 1}–{Math.min(rankPage * rankPageSize, rankings.length)} of {rankings.length}</span><div className="flex items-center gap-2"><Button variant="outline" size="sm" disabled={rankPage === 1} onClick={() => setRankPage((p) => p - 1)}>Previous</Button><span className="text-muted-foreground">Page {rankPage} of {pageCount}</span><Button variant="outline" size="sm" disabled={rankPage === pageCount} onClick={() => setRankPage((p) => p + 1)}>Next</Button></div></div>}</CardContent></Card>

    <Card><CardHeader><CardTitle>Recent test performance</CardTitle><CardDescription>Score and accuracy trends across your latest tests.</CardDescription></CardHeader><CardContent><ResponsiveContainer width="100%" height={280}><LineChart data={trend}><CartesianGrid strokeDasharray="3 3" className="stroke-border" /><XAxis dataKey="week" /><YAxis domain={[0, 100]} /><Tooltip /><Legend /><Line type="monotone" dataKey="score" name="Score" stroke="hsl(var(--primary))" strokeWidth={3} /><Line type="monotone" dataKey="accuracy" name="Accuracy" stroke="#10b981" strokeWidth={3} /></LineChart></ResponsiveContainer><div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">{latestTrend && previousTrend && latestTrend.score !== previousTrend.score ? (latestTrend.score > previousTrend.score ? <TrendingUp className="mt-0.5 size-4 text-emerald-500" /> : <TrendingDown className="mt-0.5 size-4 text-amber-500" />) : <Target className="mt-0.5 size-4" />}{trendNote}</div></CardContent></Card>

    <div className="grid gap-6 lg:grid-cols-2"><Card><CardHeader><CardTitle>Subject performance</CardTitle><CardDescription>Accuracy, attempts, and average time by subject.</CardDescription></CardHeader><CardContent className="flex flex-col gap-5">{(analytics.subjectPerformance || []).map((subject: any) => <div key={subject.subject} className="flex flex-col gap-2"><div className="flex items-center justify-between gap-4"><span className="font-medium">{subject.subject}</span><span className="text-sm text-muted-foreground">{subject.accuracy ?? subject.score}% · {subject.attempted ?? subject.tests ?? 0} attempted · {subject.avgTime ?? analytics.avgTimePerQuestion ?? 0}s avg</span></div><Progress value={subject.accuracy ?? subject.score ?? 0} /></div>)}</CardContent></Card><Card><CardHeader><CardTitle>Weak areas</CardTitle><CardDescription>Sorted by lowest accuracy and error count.</CardDescription></CardHeader><CardContent className="flex flex-col gap-3">{weakTopics.map((topic: any) => <div key={topic.topic} className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-medium">{topic.topic}</p><p className="mt-1 text-sm text-muted-foreground">{topic.wrong ?? "Several"} wrong out of {topic.attempted ?? "your"} attempted · {topic.strength}% accuracy</p></div><Button asChild variant="outline" size="sm"><Link href={topic.testId ? `/student/test/${topic.testId}` : `/student/tests?topic=${encodeURIComponent(topic.topic)}`}>{topic.testId ? "Practice this test" : `Practice ${topic.topic}`}</Link></Button></div></div>)}</CardContent></Card></div>

    <div className="grid gap-6 lg:grid-cols-2"><Card><CardHeader><CardTitle>Strengths</CardTitle><CardDescription>Your top topics right now.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">{(showAllTopics ? topics : strongTopics).map((topic: any) => <div key={topic.topic} className="flex items-center gap-3"><CheckCircle2 className="size-4 shrink-0 text-emerald-500" /><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><span className="truncate font-medium">{topic.topic}</span><span className="text-sm text-muted-foreground">{topic.strength}%</span></div><Progress value={topic.strength} /></div></div>)}{topics.length > 3 && <Button variant="ghost" onClick={() => setShowAllTopics((value) => !value)}>{showAllTopics ? "Show top 3" : `View all ${topics.length} topics`}</Button>}</CardContent></Card><Card><CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="size-5" />Review mistakes</CardTitle><CardDescription>Group your wrong answers by topic and learn from the explanation.</CardDescription></CardHeader><CardContent className="flex flex-col gap-3">{(analytics.mistakeReview || []).slice(0, 5).map((mistake: any) => <details key={mistake.id} className="rounded-lg border p-4"><summary className="cursor-pointer font-medium">{mistake.topic}: {mistake.question}</summary><div className="mt-3 flex flex-col gap-2 text-sm"><p className="flex items-center gap-2 text-destructive"><XCircle className="size-4" />Selected: {mistake.selectedAnswer}</p><p className="flex items-center gap-2 text-emerald-600"><CheckCircle2 className="size-4" />Correct: {mistake.correctAnswer}</p><p className="text-muted-foreground">{mistake.explanation}</p></div></details>)}{(!analytics.mistakeReview || analytics.mistakeReview.length === 0) && <p className="text-sm text-muted-foreground">No mistakes to review yet. Great work.</p>}<Button asChild variant="outline"><Link href="/student/tests">Review wrong answers <ArrowRight data-icon="inline-end" /></Link></Button></CardContent></Card></div>
  </main>
}
