import Link from "next/link"
import { BellRing, ExternalLink } from "lucide-react"
import { getExamAlerts } from "@/lib/exam-alerts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import Footer from "@/components/footer"

export const revalidate = 300

export default async function ExamAlertsPage() {
  const alerts = await getExamAlerts()
  const fetchedAt = new Date()

  return (
    <>
      <FooterLinkNavbar />
      <main className="min-h-screen bg-background px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-start gap-3">
          <div className="rounded-xl bg-primary/10 p-3 text-primary"><BellRing className="h-6 w-6" /></div>
          <div>
            <p className="text-sm font-semibold text-primary">Live updates</p>
            <h1 className="text-3xl font-bold tracking-tight">Exam Alerts & Notifications</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">Published updates from the website database. No sample or placeholder notices are shown.</p>
            <p className="mt-3 text-xs text-muted-foreground">Data fetched from Supabase at {fetchedAt.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })} IST</p>
          </div>
        </div>

        {alerts.length === 0 ? (
          <Card><CardContent className="py-16 text-center"><p className="font-semibold">No published exam alerts yet</p><p className="mt-2 text-sm text-muted-foreground">When an alert is published in Supabase, it will appear here automatically.</p></CardContent></Card>
        ) : (
          <div className="space-y-4">{alerts.map((alert) => <Card key={alert.id}><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between"><div><div className="mb-2 flex flex-wrap items-center gap-2"><Badge variant="secondary">{alert.category || "Exam update"}</Badge><span className="text-xs text-muted-foreground">{new Date(alert.createdAt).toLocaleDateString("en-IN")}</span></div><h2 className="text-lg font-semibold">{alert.title}</h2>{alert.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{alert.description}</p>}</div><Link href={`/blog/${alert.slug}`} className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline">Read update <ExternalLink className="h-4 w-4" /></Link></CardContent></Card>)}</div>
        )}
      </div>
      </main>
      <Footer />
    </>
  )
}
