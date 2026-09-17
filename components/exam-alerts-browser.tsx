"use client"

import type { ExamAlert } from "@/lib/exam-alerts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, TrainFront, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

const sections = [
  { id: "haryana", label: "Haryana", title: "Haryana Exam Alerts", description: "HSSC and HPSC notifications for Haryana government examinations.", icon: MapPin },
  { id: "uttarakhand", label: "Uttarakhand", title: "Uttarakhand Exam Alerts", description: "UKSSSC and UKPSC notifications for Uttarakhand government examinations.", icon: MapPin },
  { id: "railway", label: "Railway", title: "Railway Exam Alerts", description: "Live recruitment and examination notices from official Railway Recruitment Board sources.", icon: TrainFront },
  { id: "ssc", label: "SSC", title: "SSC Exam Alerts", description: "Live recruitment and examination notices from the official Staff Selection Commission source.", icon: GraduationCap },
] as const

function getNoticeDate(alert: ExamAlert) {
  const value = `${alert.title}\n${alert.description ?? ""}`
  const match = value.match(/(?:notice date|published|date)\s*[:\-]?\s*(\d{4}[/-]\d{1,2}[/-]\d{1,2}|\d{1,2}[/-]\d{1,2}[/-]20\d{2}|\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+20\d{2})/i) ?? value.match(/\b(\d{4}-\d{2}-\d{2}|\d{1,2}[/-]\d{1,2}[/-]20\d{2}|\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+20\d{2})\b/i)
  if (!match) return null
  const parsed = new Date(match[1].replaceAll("/", "-"))
  return Number.isNaN(parsed.getTime()) ? match[1] : parsed.toLocaleDateString("en-IN")
}

function getSummary(alert: ExamAlert) {
  const description = alert.description?.trim()
  if (description && !/official update discovered|data fetched|supabase/i.test(description)) return description.split(/[\n;]/).filter(Boolean)[0]
  return `${alert.authority} notification. Open this notice for eligibility, dates and application instructions.`
}

function AlertCard({ alert }: { alert: ExamAlert }) {
  const noticeDate = getNoticeDate(alert)
  return (
    <Card className="group overflow-hidden transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
      <CardContent className="p-0">
        <Link href={`/blog/${alert.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
          <div className="border-l-4 border-primary px-5 py-5 sm:px-6">
            <div className="mb-3 flex flex-wrap items-center gap-2"><Badge variant="secondary">{alert.authority}</Badge>{noticeDate && <span className="text-xs text-muted-foreground">Notice date: {noticeDate}</span>}</div>
            <h3 className="text-lg font-semibold leading-snug group-hover:text-primary">{alert.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{getSummary(alert)}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Read full notice <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </div>
        </Link>
        {alert.sourceUrl && <div className="flex items-center justify-between border-t bg-muted/30 px-5 py-2.5 text-xs sm:px-6"><span className="text-muted-foreground">Official source available</span><a href={alert.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">Open source <ExternalLink className="h-3.5 w-3.5" /></a></div>}
      </CardContent>
    </Card>
  )
}

export default function ExamAlertsBrowser({ alerts }: { alerts: ExamAlert[] }) {
  const availableSections = sections.filter((item) => alerts.some((alert) => alert.categoryKey === item.id))
  return (
    <div className="flex flex-col gap-8">
      <nav aria-label="Exam alert categories" className="grid grid-cols-2 gap-2 rounded-2xl border bg-card/60 p-2 sm:grid-cols-4">
        {sections.map((item) => { const count = alerts.filter((alert) => alert.categoryKey === item.id).length; return <a key={item.id} href={`#${item.id}`} className="rounded-xl px-3 py-3 text-center text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"><span>{item.label}</span><span className="mt-1 block text-xs font-normal">{count} {count === 1 ? "notice" : "notices"}</span></a> })}
      </nav>
      {availableSections.map((section) => { const sectionAlerts = alerts.filter((alert) => alert.categoryKey === section.id); return <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-24"><div className="mb-4 flex items-start gap-3 border-b pb-4"><div className="rounded-xl bg-primary/10 p-3 text-primary"><section.icon className="h-5 w-5" /></div><div><h2 id={`${section.id}-heading`} className="text-2xl font-bold">{section.title}</h2><p className="mt-1 text-sm text-muted-foreground">{section.description}</p><p className="mt-2 text-xs font-medium text-primary">{sectionAlerts.length} live {sectionAlerts.length === 1 ? "notice" : "notices"}</p></div></div><div className="grid gap-4 lg:grid-cols-2">{sectionAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} />)}</div></section> })}
    </div>
  )
}
