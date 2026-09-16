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

function AlertCard({ alert }: { alert: ExamAlert }) {
  return <Card><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between"><div><div className="mb-2 flex flex-wrap items-center gap-2"><Badge variant="secondary">{alert.authority}</Badge><span className="text-xs text-muted-foreground">Added on {new Date(alert.createdAt).toLocaleDateString("en-IN")}</span></div><h3 className="text-lg font-semibold">{alert.title}</h3>{alert.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{alert.description}</p>}</div><Link href={alert.sourceUrl || `/blog/${alert.slug}`} target={alert.sourceUrl ? "_blank" : undefined} rel={alert.sourceUrl ? "noreferrer" : undefined} className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline">Official notice <ExternalLink className="h-4 w-4" /></Link></CardContent></Card>
}

export default function ExamAlertsBrowser({ alerts }: { alerts: ExamAlert[] }) {
  const alertCounts = Object.fromEntries(sections.map((item) => [item.id, alerts.filter((alert) => alert.categoryKey === item.id).length])) as Record<(typeof sections)[number]["id"], number>
  const availableSections = sections.filter((item) => alertCounts[item.id] > 0)
  const [active, setActive] = useState(availableSections[0]?.id ?? "")
  const section = availableSections.find((item) => item.id === active) ?? availableSections[0]

  if (!section) {
    return <Card><CardContent className="py-10 text-center text-sm text-muted-foreground">No published exam alerts found.</CardContent></Card>
  }

  const sectionAlerts = alerts.filter((alert) => alert.categoryKey === section.id)

  return <div>
    <div role="tablist" aria-label="Exam alert categories" className={`grid gap-2 rounded-2xl border bg-card/60 p-2 ${availableSections.length === 1 ? "grid-cols-1" : availableSections.length === 2 ? "grid-cols-2" : availableSections.length === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
      {availableSections.map((item) => <button key={item.id} type="button" role="tab" aria-selected={active === item.id} onClick={() => setActive(item.id)} className={`rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${active === item.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{item.label}<span className="mt-1 block text-xs font-normal opacity-80">{alertCounts[item.id]} live</span></button>)}
    </div>
    <section aria-labelledby={`${section.id}-heading`} className="mt-8"><details open className="group rounded-2xl border bg-card/50 p-4 shadow-sm sm:p-5"><summary className="flex cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden"><div className="rounded-xl bg-primary/10 p-3 text-primary"><section.icon className="h-5 w-5" /></div><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-4"><div><h2 id={`${section.id}-heading`} className="text-2xl font-bold">{section.title}</h2><p className="mt-1 text-sm text-muted-foreground">{section.description}</p></div><span aria-hidden="true" className="text-2xl leading-none text-muted-foreground transition-transform group-open:rotate-180">⌄</span></div><p className="mt-3 text-xs font-medium text-primary">{sectionAlerts.length} live {sectionAlerts.length === 1 ? "notice" : "notices"}</p></div></summary><div className="mt-5 space-y-4 border-t pt-5">{sectionAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} />)}</div></details></section>
  </div>
}
