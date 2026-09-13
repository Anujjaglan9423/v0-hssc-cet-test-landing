import Link from "next/link"
import type { Metadata } from "next"
import { BellRing, ExternalLink, MapPin } from "lucide-react"
import { getExamAlerts, type ExamAlert } from "@/lib/exam-alerts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import Footer from "@/components/footer"

export const revalidate = 300

export const metadata: Metadata = {
  title: "Haryana & Uttarakhand Exam Alerts 2026 | HSSC, HPSC, UKSSSC, UKPSC",
  description: "Live government exam notifications for Haryana and Uttarakhand from HSSC, HPSC, UKSSSC and UKPSC official websites.",
  keywords: ["Haryana exam alerts", "Uttarakhand exam alerts", "HSSC notification", "HPSC notification", "UKSSSC notification", "UKPSC notification"],
  alternates: { canonical: "/exam-alerts" },
  openGraph: { title: "Haryana & Uttarakhand Exam Alerts", description: "Track live official exam notifications by state.", type: "website" },
}

function AlertCard({ alert }: { alert: ExamAlert }) {
  return <Card><CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between"><div><div className="mb-2 flex flex-wrap items-center gap-2"><Badge variant="secondary">{alert.authority}</Badge><span className="text-xs text-muted-foreground">{new Date(alert.createdAt).toLocaleDateString("en-IN")}</span></div><h3 className="text-lg font-semibold">{alert.title}</h3>{alert.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{alert.description}</p>}</div><Link href={alert.sourceUrl || `/blog/${alert.slug}`} target={alert.sourceUrl ? "_blank" : undefined} rel={alert.sourceUrl ? "noreferrer" : undefined} className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline">Official notice <ExternalLink className="h-4 w-4" /></Link></CardContent></Card>
}

function RegionSection({ title, description, alerts }: { title: string; description: string; alerts: ExamAlert[] }) {
  const regionId = title.replaceAll(" ", "-").toLowerCase()

  return <section aria-labelledby={regionId} className="mt-10"><details open className="group rounded-2xl border bg-card/50 p-4 shadow-sm sm:p-5"><summary className="flex cursor-pointer list-none items-start gap-3 [&::-webkit-details-marker]:hidden"><div className="rounded-xl bg-primary/10 p-3 text-primary"><MapPin className="h-5 w-5" /></div><div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-4"><div><h2 id={regionId} className="text-2xl font-bold">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{description}</p></div><span aria-hidden="true" className="text-2xl leading-none text-muted-foreground transition-transform group-open:rotate-180">⌄</span></div><p className="mt-3 text-xs font-medium text-primary">{alerts.length} live {alerts.length === 1 ? "notice" : "notices"}</p></div></summary><div className="mt-5 border-t pt-5">{alerts.length ? <div className="space-y-4">{alerts.map((alert) => <AlertCard key={alert.id} alert={alert} />)}</div> : <Card><CardContent className="py-10 text-center text-sm text-muted-foreground">No published {title} notices found in the live database.</CardContent></Card>}</div></details></section>
}

export default async function ExamAlertsPage() {
  const alerts = await getExamAlerts(100)
  const fetchedAt = new Date()
  const haryana = alerts.filter((alert) => alert.region === "Haryana")
  const uttarakhand = alerts.filter((alert) => alert.region === "Uttarakhand")
  const itemList = alerts.map((alert, index) => ({ "@type": "ListItem", position: index + 1, name: alert.title, url: alert.sourceUrl || `/blog/${alert.slug}` }))

  return <><FooterLinkNavbar /><main className="min-h-screen bg-background px-4 pb-16 pt-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl"><header className="mb-8"><div className="flex items-start gap-3"><div className="rounded-xl bg-primary/10 p-3 text-primary"><BellRing className="h-6 w-6" /></div><div><p className="text-sm font-semibold text-primary">Live official updates</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Haryana & Uttarakhand Exam Alerts</h1><p className="mt-2 max-w-3xl text-muted-foreground">Find verified government exam notifications by state. We fetch published records from Supabase; each notice links to its official government source.</p><p className="mt-3 text-xs text-muted-foreground">Data fetched from Supabase at {fetchedAt.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })} IST</p></div></div></header><RegionSection title="Haryana Exam Alerts" description="HSSC and HPSC notifications for Haryana government examinations." alerts={haryana} /><RegionSection title="Uttarakhand Exam Alerts" description="UKSSSC and UKPSC notifications for Uttarakhand government examinations." alerts={uttarakhand} /></div></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", name: "Haryana and Uttarakhand Exam Alerts", description: "Live official government exam notifications by state.", url: "/exam-alerts" }, { "@type": "ItemList", name: "Latest exam alerts", itemListElement: itemList }, { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Where do these exam alerts come from?", acceptedAnswer: { "@type": "Answer", text: "Alerts are collected from official Haryana and Uttarakhand government recruitment websites and stored in the live database." } }, { "@type": "Question", name: "How often are alerts updated?", acceptedAnswer: { "@type": "Answer", text: "The scheduled scraper checks the official sources daily, with the current database fetch time shown on this page." } }] }] }) }} /><Footer /></>
}
