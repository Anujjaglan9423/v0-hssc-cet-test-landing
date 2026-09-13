"use client"

import Link from "next/link"
import { Bell, CalendarDays, ExternalLink, Mail, Search, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { examAlerts, sourceMeta, type ExamAlert } from "@/lib/alerts-data"

function AlertCard({ alert }: { alert: ExamAlert }) {
  return (
    <Card className="border-border/70 bg-card/80 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={sourceMeta[alert.source].color}>{alert.source}</Badge>
            <Badge variant="outline">{alert.category}</Badge>
            {alert.urgent && <Badge variant="destructive">High priority</Badge>}
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">{alert.publishedAt}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-snug text-foreground">{alert.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{alert.summary}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground"><CalendarDays className="size-4 text-primary" />{alert.deadline}</span>
          <Button variant="outline" size="sm" asChild>
            <a href={alert.link} target="_blank" rel="noreferrer">Official notice <ExternalLink data-icon="inline-end" /></a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function LatestAlertBanner() {
  const alert = examAlerts[0]
  return (
    <section className="border-y border-primary/15 bg-primary/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3"><div className="mt-0.5 rounded-full bg-primary p-2 text-primary-foreground"><Bell className="size-4" /></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">New exam alert</p><p className="mt-1 text-sm font-semibold text-foreground">{alert.title}</p></div></div>
        <Button variant="outline" size="sm" asChild><Link href="/alerts">View all alerts</Link></Button>
      </div>
    </section>
  )
}

export default function ExamAlerts({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-10" : "py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"><Sparkles className="size-4" />Live notification desk</div><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Never miss an exam update</h2><p className="mt-3 max-w-2xl text-muted-foreground">We monitor HSSC, UKSSSC, UKPSC and HPSC notices so you can focus on preparation instead of checking four websites every day.</p></div>
          {!compact && <Button variant="outline" asChild><Link href="#subscribe"><Mail data-icon="inline-start" />Get email alerts</Link></Button>}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">{examAlerts.slice(0, compact ? 2 : examAlerts.length).map((alert) => <AlertCard key={alert.id} alert={alert} />)}</div>
        {compact && <div className="mt-6 text-center"><Button variant="link" asChild><Link href="/alerts">See all alerts <ExternalLink data-icon="inline-end" /></Link></Button></div>}
      </div>
    </section>
  )
}

export function AlertsPageContent() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10"><Badge className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground">Automated exam desk</Badge><h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Government exam alerts, in one place.</h1><p className="mt-4 max-w-2xl text-primary-foreground/80">Fresh notices, admit cards, answer keys and calendars from the official state commission websites.</p></div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" placeholder="Search alerts, exams or commissions" /></div><Button variant="outline">All sources</Button></div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">{examAlerts.map((alert) => <AlertCard key={alert.id} alert={alert} />)}</div>
        <Card id="subscribe" className="mt-12 border-primary/20 bg-primary/[0.05]"><CardHeader><CardTitle className="flex items-center gap-2"><ShieldCheck className="size-5 text-primary" />Choose how you get alerts</CardTitle></CardHeader><CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm text-muted-foreground">Email and in-app alerts will be available when notification delivery is connected. This preview shows the planned experience.</p><Button asChild><Link href="/signup">Create free account</Link></Button></CardContent></Card>
      </div>
    </main>
  )
}
