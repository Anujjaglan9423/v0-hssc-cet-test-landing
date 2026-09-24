import Link from "next/link"
import {
  ArrowRight,
  BookOpenCheck,
  FileText,
  Landmark,
  Newspaper,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import AdPlacement from "@/components/ad-placement"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const examGuides = [
  { name: "HSSC", href: "/exams/hssc-cet" },
  { name: "SSC", href: "/exams/ssc" },
  { name: "Railway", href: "/exams/railway" },
  { name: "UKSSSC", href: "/exams/uksssc" },
]

const faqItems = [
  {
    question: "What exams does the CETTest study material hub cover?",
    answer: "The hub brings together preparation resources for HSSC, SSC, Railway, UKSSSC, and other government and competitive exams in India.",
  },
  {
    question: "What study material is available for HSSC and other government exams?",
    answer: "You can find exam syllabi, subject-wise preparation guidance, current affairs, Haryana GK, and links to focused exam resources.",
  },
  {
    question: "Is this study material useful for SSC and Railway exams?",
    answer: "Yes. The study hub is designed for SSC and Railway aspirants as well as HSSC, UKSSSC, and other government exam candidates.",
  },
  {
    question: "How should I use this government exam study hub?",
    answer: "Start with your exam syllabus, follow relevant current affairs, strengthen general knowledge, and revise consistently using the linked preparation resources.",
  },
]

const studySections = [
  {
    number: "01",
    title: "Syllabus",
    description: "Explore complete syllabi, subjects, weightage, and preparation direction for competitive government exams.",
    href: "/syllabus",
    icon: FileText,
    eyebrow: "Build your roadmap",
  },
  {
    number: "02",
    title: "Current Affairs",
    description: "Keep your preparation sharp with relevant monthly updates for government and competitive exams.",
    href: "/current-affairs",
    icon: Newspaper,
    eyebrow: "Stay up to date",
  },
  {
    number: "03",
    title: "Haryana GK",
    description: "Strengthen your state-focused preparation with Haryana history, geography, culture, and more.",
    href: "/haryana-gk",
    icon: Landmark,
    eyebrow: "Know your state",
  },
]

export default function StudyMaterialsHubPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://cettest.site/study-materials-hub#webpage",
        url: "https://cettest.site/study-materials-hub",
        name: "HSSC, SSC, Railway and UKSSSC Study Material",
        description: "Study material, syllabus, current affairs, and GK resources for government exam preparation in India.",
        inLanguage: "en-IN",
        about: examGuides.map((exam) => ({ "@type": "Thing", name: exam.name })),
      },
      {
        "@type": "ItemList",
        name: "Government exam preparation resources",
        itemListElement: examGuides.map((exam, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${exam.name} exam preparation`,
          url: `https://cettest.site${exam.href}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  }

  return (
    <> 
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main className="overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 px-6 py-12 text-white shadow-2xl shadow-slate-950/25 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full bg-amber-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 size-[28rem] rounded-full bg-blue-500/15 blur-3xl" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                <Sparkles aria-hidden="true" />
                Government exam preparation
              </div>
              <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl sm:leading-[1.05]">
                Your focused path to a stronger preparation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                One place for the essential resources you need to prepare with clarity, consistency, and confidence for government exams across India.
              </p>
            </div>
            <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-right backdrop-blur sm:block">
              <ShieldCheck className="ml-auto size-8 text-amber-300" aria-hidden="true" />
              <p className="mt-8 text-sm font-medium text-slate-300">Prepare with purpose</p>
              <p className="mt-1 text-2xl font-semibold text-white">Learn. Revise. Qualify.</p>
            </div>
          </div>
        </section>

        <AdPlacement className="my-8" />

        <section className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your preparation toolkit</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose your next step</h2>
            </div>
            <BookOpenCheck className="hidden size-10 text-primary/30 sm:block" aria-hidden="true" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {studySections.map((section) => {
              const Icon = section.icon
              return (
                <Link key={section.title} href={section.href} className="group rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                  <Card className="relative h-full overflow-hidden rounded-3xl border-border/70 bg-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10">
                    <div className="absolute right-5 top-5 text-4xl font-semibold tracking-tighter text-muted-foreground/15">{section.number}</div>
                    <CardHeader className="p-7 pb-5">
                      <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                        <Icon aria-hidden="true" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{section.eyebrow}</p>
                      <CardTitle className="mt-3 text-2xl tracking-tight">{section.title}</CardTitle>
                      <CardDescription className="mt-2 text-base leading-7">{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-7 pt-2">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
                        Explore section
                        <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl" aria-labelledby="faq-heading">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Quick answers</p>
            <h2 id="faq-heading" className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Government exam preparation FAQs
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Find clear answers about study material for HSSC, SSC, Railway, UKSSSC, and other government exams.
            </p>
          </div>
          <div className="divide-y divide-border rounded-3xl border border-border/70 bg-card px-6 sm:px-8">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <FooterLinkFooter />
    </div>
    </>
  )
}
