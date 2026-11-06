"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, MessageCircleWarning } from "lucide-react"
import { getStudentQuestionReports } from "@/lib/actions/question-reports"

const labels: Record<string, string> = { open: "Open", in_review: "In review", resolved: "Resolved", dismissed: "Dismissed" }
export default function StudentReportsPage() {
  const [reports, setReports] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => { getStudentQuestionReports().then(setReports).finally(() => setLoading(false)) }, [])
  if (loading) return <div className="min-h-[50vh] flex items-center justify-center"><Loader2 className="animate-spin" /></div>
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">My Reported Questions</h1><p className="text-muted-foreground mt-1">Only reports submitted by you appear here.</p></div>{reports.length === 0 ? <Card className="p-10 text-center"><MessageCircleWarning className="mx-auto mb-3 text-muted-foreground" /><p className="text-muted-foreground">You have not reported any questions yet.</p></Card> : <div className="space-y-4">{reports.map((r) => <Card key={r.id} className="p-5 space-y-3"><div className="flex items-start justify-between gap-4"><div><p className="font-semibold">{r.test?.title || "Test"}</p><p className="text-sm text-muted-foreground mt-1">{r.question?.question_text}</p></div><Badge variant={r.status === "resolved" ? "default" : "outline"}>{labels[r.status]}</Badge></div><p className="text-sm"><span className="font-medium">Reason:</span> {r.reason}</p>{r.details && <p className="text-sm text-muted-foreground">{r.details}</p>}{r.admin_response && <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 text-sm"><p className="font-medium text-primary mb-1">Admin response</p><p>{r.admin_response}</p></div>}</Card>)}</div>}</div>
}
