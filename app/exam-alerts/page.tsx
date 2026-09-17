import type { Metadata } from "next"
import { BellRing } from "lucide-react"
import { getExamAlerts } from "@/lib/exam-alerts"
import ExamAlertsBrowser from "@/components/exam-alerts-browser"
import ExamAlertsFaq from "@/components/exam-alerts-faq"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import Footer from "@/components/footer"

export const revalidate = 300
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Latest Government Exam Alerts 2026: HSSC, UKSSSC, SSC, Railway Notifications | CET TEST",
  description: "Live government exam notifications for State and central government exam notifications from public service commissions, staff selection boards, Railway RRB, SSC, UPSC, IBPS, NTA and other official recruiting agencies. Verified links to official sources, updated daily.",
  alternates: { canonical: "https://cettest.site/exam-alerts" },
  openGraph: { title: "Latest Government Exam Alerts 2026 | CET TEST", description: "Live, verified government exam notifications for Haryana, Uttarakhand, Railway and SSC — updated daily with official source links.", type: "website", url: "https://cettest.site/exam-alerts" },
  twitter: { card: "summary", title: "Latest Government Exam Alerts 2026 | CET TEST", description: "Live, verified government exam notifications for Haryana, Uttarakhand, Railway and SSC." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
}

export default async function ExamAlertsPage() {
  const alerts = await getExamAlerts(100)
  const fetchedAt = new Date()
  const siteUrl = "https://cettest.site"
  const itemList = alerts.map((alert, index) => {
    const officialDate = alert.title.match(/\b(\d{4}-\d{2}-\d{2}|\d{1,2}[/-]\d{1,2}[/-]20\d{2}|\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+20\d{2})\b/i)?.[1]
    const item = { "@type": "Article", headline: alert.title, publisher: { "@type": "GovernmentOrganization", name: alert.authority }, url: alert.sourceUrl || `${siteUrl}/blog/${alert.slug}`, about: alert.title, ...(officialDate ? { datePublished: officialDate, dateModified: officialDate } : {}) }
    return { "@type": "ListItem", position: index + 1, item }
  })
  const examNames = [...new Set(alerts.map((alert) => alert.title.replace(/^(HSSC|HPSC|UKSSSC|UKPSC|Railway|SSC):\s*/i, "")).filter(Boolean))]
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${siteUrl}/exam-alerts#webpage`, name: "Latest Government Exam Alerts 2026", headline: "Haryana, Uttarakhand, Railway RRB and SSC Exam Alerts", description: "Official government exam notifications with source links and latest updates.", url: `${siteUrl}/exam-alerts`, inLanguage: "en-IN", isPartOf: { "@id": `${siteUrl}/#website` }, dateModified: fetchedAt.toISOString() },
    { "@type": "CollectionPage", name: "Latest Government Exam Alerts", url: `${siteUrl}/exam-alerts`, about: ["Haryana government exams", "Uttarakhand government exams", "Railway RRB exams", "SSC exams"], mainEntity: { "@type": "ItemList", numberOfItems: itemList.length, itemListElement: itemList } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Exam Alerts", item: `${siteUrl}/exam-alerts` }] },
    { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Where do these exam alerts come from?", acceptedAnswer: { "@type": "Answer", text: "Exam alerts are collected from official HSSC, HPSC, UKSSSC, UKPSC, Railway RRB and SSC sources. Every listing includes an official source link when available." } }, { "@type": "Question", name: "Which exams are listed on this page?", acceptedAnswer: { "@type": "Answer", text: `The page lists the latest notices found for Haryana, Uttarakhand, Railway RRB and SSC exams, including ${examNames.slice(0, 20).join(", ")}.` } }, { "@type": "Question", name: "How often are exam alerts updated?", acceptedAnswer: { "@type": "Answer", text: "The official sources are checked by a scheduled sync, and the latest database fetch time is shown on this page." } }] }
  ] }

  return <><FooterLinkNavbar /><main className="min-h-screen bg-white px-3 pb-16 pt-24 text-slate-900 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><header className="mb-8"><div className="flex items-start gap-3"><div className="rounded-xl bg-primary/10 p-3 text-primary"><BellRing className="h-6 w-6" /></div><div><p className="text-sm font-semibold text-primary">Live official updates</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Government Exam Alerts</h1><p className="mt-2 max-w-3xl text-muted-foreground">Find verified government exam notifications by category. Each notice links to its official government source.</p><p className="mt-3 text-xs text-muted-foreground">Verified updates from official government sources · Last updated: {fetchedAt.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })} IST</p></div></div></header><ExamAlertsBrowser alerts={alerts} /><ExamAlertsFaq /></div></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><Footer /></>
}
