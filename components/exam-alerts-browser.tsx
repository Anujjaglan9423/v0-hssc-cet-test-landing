"use client"

import { useState } from "react"
import type { ExamAlert } from "@/lib/exam-alerts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, MapPin, TrainFront, GraduationCap } from "lucide-react"

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

function getVerifiedDetails(alert: ExamAlert) {
  const text = alert.description ?? ""
  const details = text.split(/[\n;]/).map((part) => part.trim()).filter((part) => /^(opening date|start date|application start|last date|closing date|end date|application fee|exam fee|fee|notice date|published|important dates?)/i.test(part))
  return details.length ? details : []
}

function getSummary(alert: ExamAlert) {
  const description = alert.description?.trim()
  if (description && !/official update discovered|data fetched|supabase/i.test(description)) return description.split(/[\n;]/).filter((part) => !/^(notice date|opening date|start date|application start|last date|closing date|end date|application fee|exam fee|fee|important dates?)/i.test(part.trim())).join("; ")
  return `${alert.authority} notification for ${alert.title.replace(new RegExp(`^${alert.authority}:\\s*`, "i"), "")}. Check the official notice for eligibility, dates and application instructions.`
}

function AlertCard({ alert }: { alert: ExamAlert }) {
  const noticeDate = getNoticeDate(alert)
  const verifiedDetails = getVerifiedDetails(alert)
  return <Card><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between"><div className="min-w-0"><div className="mb-2 flex flex-wrap items-center gap-2"><Badge variant="secondary">{alert.authority}</Badge>{noticeDate && <span className="text-xs text-muted-foreground">Notice date: {noticeDate}</span>}</div><h3 className="text-lg font-semibold">{alert.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{getSummary(alert)}</p>{verifiedDetails.length > 0 && <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">{verifiedDetails.map((detail) => { const [label, ...value] = detail.split(/:\s*/) ; return <div key={detail} className="rounded-lg bg-muted/50 px-3 py-2"><dt className="font-medium">{label}</dt><dd className="text-muted-foreground">{value.join(": ")}</dd></div> })}</dl>}</div><Link href={alert.sourceUrl || `/blog/${alert.slug}`} target={alert.sourceUrl ? "_blank" : undefined} rel={alert.sourceUrl ? "noreferrer" : undefined} className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline">Official notice <ExternalLink className="h-4 w-4" /></Link></CardContent></Card>
}

export default function ExamAlertsBrowser({ alerts }: { alerts: ExamAlert[] }) {
  const availableSections = sections.filter((item) => alerts.some((alert) => alert.categoryKey === item.id))
  const [active, setActive] = useState(availableSections[0]?.id ?? "haryana")
  const section = availableSections.find((item) => item.id === active) ?? availableSections[0] ?? sections[0]
  const sectionAlerts = alerts.filter((alert) => alert.categoryKey === section.id)

  return <div>
    {availableSections.length > 0 && <div role="tablist" aria-label="Exam alert categories" className="grid grid-cols-2 gap-2 rounded-2xl border bg-card/60 p-2 sm:grid-cols-4">
      {availableSections.map((item) => <button key={item.id} type="button" role="tab" aria-selected={active === item.id} onClick={() => setActive(item.id)} className={`rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${active === item.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{item.label}<span className="mt-1 block text-xs font-normal opacity-80">{alerts.filter((alert) => alert.categoryKey === item.id).length} live</span></button>)}
    </div>}
    <section aria-labelledby={`${section.id}-heading`} className="mt-8"><details open className="group rounded-2xl border bg-card/50 p-4 shadow-sm sm:p-5"><summary className="flex cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden"><div className="rounded-xl bg-primary/10 p-3 text-primary"><section.icon className="h-5 w-5" /></div><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-4"><div><h2 id={`${section.id}-heading`} className="text-2xl font-bold">{section.title}</h2><p className="mt-1 text-sm text-muted-foreground">{section.description}</p></div><span aria-hidden="true" className="text-2xl leading-none text-muted-foreground transition-transform group-open:rotate-180">⌄</span></div><p className="mt-3 text-xs font-medium text-primary">{sectionAlerts.length} live {sectionAlerts.length === 1 ? "notice" : "notices"}</p></div></summary><div className="mt-5 space-y-4 border-t pt-5">{sectionAlerts.length ? sectionAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} />) : <Card><CardContent className="py-10 text-center text-sm text-muted-foreground">No published {section.title} notices found in the live database.</CardContent></Card>}</div></details></section>
  </div>
}
