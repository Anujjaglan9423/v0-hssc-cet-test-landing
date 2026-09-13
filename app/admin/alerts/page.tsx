import Link from "next/link"
import { BellRing, ExternalLink } from "lucide-react"
import { getExamAlerts } from "@/lib/exam-alerts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const revalidate = 300

export default async function AdminExamAlertsPage() {
  const alerts = await getExamAlerts(50)

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center gap-3"><div className="rounded-xl bg-primary/10 p-3 text-primary"><BellRing className="h-6 w-6" /></div><div><h1 className="text-3xl font-bold tracking-tight">Exam Alerts</h1><p className="mt-1 text-muted-foreground">Live published alerts loaded from Supabase.</p></div></div>
      <Card><CardHeader><CardTitle>{alerts.length} published alerts</CardTitle></CardHeader><CardContent>{alerts.length === 0 ? <div className="py-12 text-center"><p className="font-semibold">No published alerts found</p><p className="mt-2 text-sm text-muted-foreground">Create a published blog entry in Supabase to make it available here and on the homepage.</p></div> : <div className="space-y-3">{alerts.map((alert) => <div key={alert.id} className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"><div><div className="mb-1 flex items-center gap-2"><Badge variant="secondary">{alert.category || "Exam update"}</Badge><span className="text-xs text-muted-foreground">{new Date(alert.createdAt).toLocaleDateString("en-IN")}</span></div><p className="font-semibold">{alert.title}</p></div><Link href={`/blog/${alert.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Open <ExternalLink className="h-4 w-4" /></Link></div>)}</div>}</CardContent></Card>
      <p className="text-sm text-muted-foreground">Scraping and outbound delivery are not enabled in this build because no scraper or notification provider has been configured. This page intentionally shows only database records.</p>
    </div>
  )
}
