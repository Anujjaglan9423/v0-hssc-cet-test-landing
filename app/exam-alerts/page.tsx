import Link from "next/link"
import type { Metadata } from "next"
import { BellRing } from "lucide-react"
import { getExamAlerts } from "@/lib/exam-alerts"
import ExamAlertsBrowser from "@/components/exam-alerts-browser"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import Footer from "@/components/footer"

export const revalidate = 300

export const metadata: Metadata = {
  title: "Exam Alerts 2026 | Haryana, Uttarakhand, Railway & SSC",
  description: "Live government exam notifications for Haryana, Uttarakhand, Railway and SSC from official recruitment websites.",
  keywords: ["Haryana exam alerts", "Uttarakhand exam alerts", "Railway exam alerts", "SSC exam alerts", "HSSC notification", "HPSC notification", "UKSSSC notification", "UKPSC notification", "RRB notification", "SSC notification"],
  alternates: { canonical: "/exam-alerts" },
  openGraph: { title: "Haryana & Uttarakhand Exam Alerts", description: "Track live official exam notifications by state.", type: "website" },
}

export default async function ExamAlertsPage() {
  const alerts = await getExamAlerts(100)
  const fetchedAt = new Date()
  const itemList = alerts.map((alert, index) => ({ "@type": "ListItem", position: index + 1, name: alert.title, url: alert.sourceUrl || `/blog/${alert.slug}` }))

  return <><FooterLinkNavbar /><main className="min-h-screen bg-background px-4 pb-16 pt-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl"><header className="mb-8"><div className="flex items-start gap-3"><div className="rounded-xl bg-primary/10 p-3 text-primary"><BellRing className="h-6 w-6" /></div><div><p className="text-sm font-semibold text-primary">Live official updates</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Government Exam Alerts</h1><p className="mt-2 max-w-3xl text-muted-foreground">Find verified government exam notifications by category. We fetch published records from Supabase; each notice links to its official government source.</p><p className="mt-3 text-xs text-muted-foreground">Data fetched from Supabase at {fetchedAt.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })} IST</p></div></div></header><ExamAlertsBrowser alerts={alerts} /></div></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", name: "Haryana and Uttarakhand Exam Alerts", description: "Live official government exam notifications by state.", url: "/exam-alerts" }, { "@type": "ItemList", name: "Latest exam alerts", itemListElement: itemList }, { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Where do these exam alerts come from?", acceptedAnswer: { "@type": "Answer", text: "Alerts are collected from official Haryana and Uttarakhand government recruitment websites and stored in the live database." } }, { "@type": "Question", name: "How often are alerts updated?", acceptedAnswer: { "@type": "Answer", text: "The scheduled scraper checks the official sources daily, with the current database fetch time shown on this page." } }] }] }) }} /><Footer /></>
}
