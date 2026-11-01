import type { Metadata } from "next"
import Link from "next/link"
import { BellRing, ExternalLink, ShieldCheck } from "lucide-react"
import { getExamAlerts } from "@/lib/exam-alerts"
import ExamAlertsBrowser from "@/components/exam-alerts-browser"
import ExamAlertsFaq from "@/components/exam-alerts-faq"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import Footer from "@/components/footer"
import PushNotificationControl from "@/components/push-notification-control"
import { getCurrentUser } from "@/lib/auth"
import { Sidebar } from "@/components/dashboard/sidebar"

// Authentication is request-specific. Cache alert fetching independently inside getExamAlerts
// when its data source and freshness guarantees permit it.
export const dynamic = "force-dynamic"

const SITE_URL = "https://cettest.site"
const PAGE_URL = `${SITE_URL}/exam-alerts`

export const metadata: Metadata = {
  title: "Government Exam Notifications | HSSC, SSC, RRB, UKSSSC",
  description: "Browse government exam notices for HSSC, HPSC, SSC, Railway RRB, UKSSSC and UKPSC. Find recruitment updates, results, admit cards and links to available official sources.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Government Exam Notifications | CET TEST",
    description: "Find recruitment notices, results, admit cards and exam updates with source links when available.",
    url: PAGE_URL, type: "website", siteName: "CET TEST", locale: "en_IN",
  },
  twitter: { card: "summary", title: "Government Exam Notifications | CET TEST", description: "Browse recruitment notices, results, admit cards and exam updates." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
}

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}

function sourceUrl(value: string | null | undefined): string | null {
  if (!value) return null
  try {
    const url = new URL(value)
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null
  } catch { return null }
}

export default async function ExamAlertsPage() {
  const [alerts, user] = await Promise.all([getExamAlerts(100), getCurrentUser()])
  const publicPage = !user
  const listItems = alerts.flatMap((alert, index) => {
    const url = sourceUrl(alert.sourceUrl)
    return url ? [{ "@type": "ListItem", position: index + 1, name: alert.title, url }] : []
  }).map((item, index) => ({ ...item, position: index + 1 }))

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL, name: "Government Exam Notifications | CET TEST",
        description: "Browse government exam notices and available source links for HSSC, HPSC, SSC, Railway RRB, UKSSSC and UKPSC.",
        inLanguage: "en-IN", isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@type": "ItemList", numberOfItems: listItems.length, itemListElement: listItems },
      },
      {
        "@type": "BreadcrumbList", "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Exam Alerts", item: PAGE_URL },
        ],
      },
    ],
  }

  return (
    <>
      {user ? <Sidebar type="student" user={user} /> : <FooterLinkNavbar />}
      <main className={user ? "min-h-screen bg-slate-50 text-slate-900 lg:pl-64" : "min-h-screen bg-slate-50 px-4 pb-12 pt-24 text-slate-900 sm:px-6 lg:px-8"}>
        <div className={user ? "mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pt-8" : "mx-auto max-w-7xl"}>
          {publicPage && <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500"><Link href="/" className="hover:text-primary">Home</Link><span aria-hidden="true" className="mx-2">/</span><span aria-current="page">Exam Alerts</span></nav>}
          <header className="mb-8 rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="w-fit rounded-xl bg-primary/10 p-3 text-primary"><BellRing aria-hidden="true" className="size-6" /></div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Recruitment and examination updates</p>
                <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Latest Government Exam Notifications</h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">Browse HSSC, HPSC, SSC, Railway RRB, UKSSSC and UKPSC notices, including recruitment updates, results, admit cards and exam schedules. Open the linked source when available to confirm official details.</p>
                <div className="mt-5 flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-3 text-xs leading-6 text-slate-600"><ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" /><span>CET TEST is an independent exam preparation website, not a government agency. Notices can change. Always confirm deadlines, eligibility and instructions on the relevant recruiting authority's official website.</span></div>
              </div>
            </div>
          </header>
          {/* <div className="mb-8"><PushNotificationControl /></div> */}
          <ExamAlertsBrowser alerts={alerts} />
          {publicPage && (
            <>
              <section aria-labelledby="about-exam-alerts" className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <h2 id="about-exam-alerts" className="text-xl font-bold text-slate-950 sm:text-2xl">How to use government exam alerts</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Choose a notice category, search for your exam or recruiting authority, and open the source link where available. Before applying or preparing for an examination, check the latest notice, eligibility conditions, application dates, admit-card instructions and any corrigendum published by the recruiting body.</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">For exam preparation, explore <Link className="font-semibold text-primary underline underline-offset-4" href="/mock-test">mock tests</Link> and <Link className="font-semibold text-primary underline underline-offset-4" href="/study-materials-hub">study materials</Link>. These are learning resources, not official recruitment notices.</p>
                <p className="mt-3 flex items-center gap-1 text-xs text-slate-500"><ExternalLink aria-hidden="true" className="size-3.5" /> External links are provided for reference; availability and accuracy depend on the source.</p>
              </section>
              <ExamAlertsFaq />
            </>
          )}
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      {publicPage && <Footer />}
    </>
  )
}
