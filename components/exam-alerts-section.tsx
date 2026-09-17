import Link from "next/link"
import { BellRing, ArrowRight } from "lucide-react"
import { getExamAlerts } from "@/lib/exam-alerts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function getPlainText(value: string | null) {
  return value?.replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim() || null
}

export default async function ExamAlertsSection() {
  const alerts = await getExamAlerts(3)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="exam-alerts-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"><BellRing className="h-4 w-4" /> Exam alerts</div><h2 id="exam-alerts-heading" className="text-3xl font-bold tracking-tight">Latest government exam updates</h2><p className="mt-2 text-muted-foreground">Live published updates from our database.</p></div><Link href="/exam-alerts" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View all <ArrowRight className="h-4 w-4" /></Link></div>
        {alerts.length === 0 ? <Card><CardContent className="py-10 text-center text-sm text-muted-foreground">No published exam alerts yet.</CardContent></Card> : <div className="grid gap-4 md:grid-cols-3">{alerts.map((alert) => <Card key={alert.id}><CardContent className="p-5"><div className="flex items-center justify-between gap-3"><Badge variant="secondary">{alert.category || "Exam update"}</Badge><time className="text-xs text-muted-foreground" dateTime={alert.createdAt}>{new Date(alert.createdAt).toLocaleDateString("en-IN")}</time></div><h3 className="mt-4 font-semibold leading-6">{alert.title}</h3>{getPlainText(alert.description) && <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{getPlainText(alert.description)}</p>}<Link href={`/blog/${alert.slug}`} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">Read details</Link></CardContent></Card>)}</div>}
      </div>
    </section>
  )
}
