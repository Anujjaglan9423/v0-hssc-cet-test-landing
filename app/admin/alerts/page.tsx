"use client"

import { useState } from "react"
import {
  BellRing,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Globe2,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Play,
  RefreshCw,
  Send,
  Settings2,
  ShieldAlert,
  Smartphone,
  Wifi,
  XCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sources = [
  { name: "HSSC", url: "hssc.gov.in", status: "Healthy", checked: "Today, 02:00 AM", found: 2 },
  { name: "UKSSSC", url: "sssc.uk.gov.in", status: "Healthy", checked: "Today, 02:01 AM", found: 1 },
  { name: "UKPSC", url: "psc.uk.gov.in", status: "Healthy", checked: "Today, 02:02 AM", found: 0 },
  { name: "HPSC", url: "hpsc.gov.in", status: "Needs review", checked: "Yesterday, 02:00 AM", found: 0 },
]

const notices = [
  { title: "Group C Recruitment 2026", source: "HSSC", type: "Recruitment", date: "13 Sep 2026", status: "Published", recipients: "12,486" },
  { title: "Junior Assistant Exam Date", source: "UKSSSC", type: "Exam date", date: "13 Sep 2026", status: "Published", recipients: "8,204" },
  { title: "Assistant Professor Answer Key", source: "HPSC", type: "Answer key", date: "12 Sep 2026", status: "Published", recipients: "4,921" },
]

export default function ExamAlertsPage() {
  const [running, setRunning] = useState(false)
  const [lastRun, setLastRun] = useState("Today at 02:02 AM")

  const runScraper = () => {
    setRunning(true)
    window.setTimeout(() => {
      setRunning(false)
      setLastRun("Just now")
    }, 900)
  }

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary"><BellRing className="h-4 w-4" /> High priority automation</div>
          <h1 className="text-3xl font-bold tracking-tight">Exam Alerts</h1>
          <p className="mt-1 max-w-2xl text-muted-foreground">Government websites se new notices detect karke students ko automatically notify karein.</p>
        </div>
        <Button onClick={runScraper} disabled={running} className="gap-2"><Play className="h-4 w-4" />{running ? "Checking sources..." : "Run check now"}</Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Sources monitored", "4", Globe2, "All configured"],
          ["New notices today", "3", ShieldAlert, "+2 since yesterday"],
          ["Students notified", "25,611", Send, "Across all channels"],
          ["Last run", lastRun, Clock3, "Daily at 02:00 AM"],
        ].map(([label, value, Icon, caption]) => {
          const StatIcon = Icon as typeof Globe2
          return <Card key={label as string}><CardContent className="p-5"><div className="flex items-start justify-between"><div><p className="text-sm text-muted-foreground">{label}</p><p className="mt-2 text-2xl font-bold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{caption}</p></div><div className="rounded-xl bg-primary/10 p-2.5 text-primary"><StatIcon className="h-5 w-5" /></div></div></CardContent></Card>
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Card><CardHeader className="flex flex-row items-center justify-between"><div><CardTitle>Source health</CardTitle><p className="mt-1 text-sm text-muted-foreground">Automated daily checks across official websites</p></div><Button variant="outline" size="sm" onClick={runScraper} className="gap-2"><RefreshCw className="h-4 w-4" />Refresh</Button></CardHeader><CardContent className="space-y-3">{sources.map((source) => <div key={source.name} className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><div className="rounded-lg bg-muted p-2"><Wifi className="h-4 w-4" /></div><div><p className="font-semibold">{source.name}</p><p className="text-xs text-muted-foreground">{source.url} · {source.checked}</p></div></div><div className="flex items-center gap-3"><span className="text-sm text-muted-foreground">{source.found} new</span><Badge variant={source.status === "Healthy" ? "secondary" : "destructive"} className="gap-1">{source.status === "Healthy" ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}{source.status}</Badge><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></div></div>)}</CardContent></Card>

        <Card><CardHeader><CardTitle>Notification channels</CardTitle><p className="mt-1 text-sm text-muted-foreground">Auto-publish delivery status</p></CardHeader><CardContent className="space-y-4">{[[Mail, "Email", "12,486 delivered", "Connected"], [MessageCircle, "Telegram", "8,204 delivered", "Connected"], [Smartphone, "WhatsApp", "4,921 delivered", "Setup required"]].map(([Icon, label, detail, status]) => { const ChannelIcon = Icon as typeof Mail; return <div key={label as string} className="flex items-center gap-3"><div className="rounded-lg bg-muted p-2"><ChannelIcon className="h-4 w-4" /></div><div className="min-w-0 flex-1"><p className="text-sm font-medium">{label}</p><p className="truncate text-xs text-muted-foreground">{detail}</p></div><span className={status === "Connected" ? "text-xs text-emerald-600" : "text-xs text-amber-600"}>{status}</span></div> })}<Button variant="outline" className="mt-2 w-full gap-2"><Settings2 className="h-4 w-4" />Manage channels</Button></CardContent></Card>
      </div>

      <Card><CardHeader className="flex flex-row items-center justify-between"><div><CardTitle>Recently published notices</CardTitle><p className="mt-1 text-sm text-muted-foreground">New items are auto-published after source verification</p></div><Button variant="ghost" size="sm" className="gap-2">View all <ExternalLink className="h-4 w-4" /></Button></CardHeader><CardContent><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="border-b text-xs uppercase text-muted-foreground"><tr><th className="pb-3 font-medium">Notice</th><th className="pb-3 font-medium">Source</th><th className="pb-3 font-medium">Type</th><th className="pb-3 font-medium">Published</th><th className="pb-3 font-medium">Reach</th><th className="pb-3 font-medium">Status</th></tr></thead><tbody>{notices.map((notice) => <tr key={notice.title} className="border-b last:border-0"><td className="py-4 font-medium">{notice.title}</td><td className="py-4">{notice.source}</td><td className="py-4 text-muted-foreground">{notice.type}</td><td className="py-4 text-muted-foreground">{notice.date}</td><td className="py-4">{notice.recipients}</td><td className="py-4"><Badge variant="secondary" className="gap-1"><CheckCircle2 className="h-3 w-3" />{notice.status}</Badge></td></tr>)}</tbody></table></div></CardContent></Card>

      <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm"><ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" /><p className="text-muted-foreground"><span className="font-semibold text-foreground">Preview mode:</span> Integrations and environment variables are not connected, so this dashboard currently shows the workflow UI with sample status data. Connect Supabase, Vercel Cron, and notification providers to enable live scraping and delivery.</p></div>
    </div>
  )
}
