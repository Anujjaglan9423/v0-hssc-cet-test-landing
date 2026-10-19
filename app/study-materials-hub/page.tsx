// import Link from "next/link"
// import {
//   ArrowRight,
//   BookOpenCheck,
//   FileText,
//   Landmark,
//   Newspaper,
//   ShieldCheck,
//   Sparkles,
//   Trophy,
// } from "lucide-react"
// import FooterLinkNavbar from "@/components/footer-link-navbar"
// import FooterLinkFooter from "@/components/footer-link-footer"
// import AdPlacement from "@/components/ad-placement"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// const examGuides = [
//   { name: "HSSC", href: "/exams/hssc-cet" },
//   { name: "SSC", href: "/exams/ssc" },
//   { name: "Railway", href: "/exams/railway" },
//   { name: "UKSSSC", href: "/exams/uksssc" },
// ]

// const faqItems = [
//   {
//     question: "What exams does the CETTest study material hub cover?",
//     answer: "The hub brings together preparation resources for HSSC, SSC, Railway, UKSSSC, and other government and competitive exams in India.",
//   },
//   {
//     question: "What study material is available for HSSC and other government exams?",
//     answer: "You can find exam syllabi, subject-wise preparation guidance, current affairs, Haryana GK, and links to focused exam resources.",
//   },
//   {
//     question: "Is this study material useful for SSC and Railway exams?",
//     answer: "Yes. The study hub is designed for SSC and Railway aspirants as well as HSSC, UKSSSC, and other government exam candidates.",
//   },
//   {
//     question: "How should I use this government exam study hub?",
//     answer: "Start with your exam syllabus, follow relevant current affairs, strengthen general knowledge, and revise consistently using the linked preparation resources.",
//   },
// ]

// const studySections = [
//   {
//     number: "01",
//     title: "Syllabus",
//     description: "Explore complete syllabi, subjects, weightage, and preparation direction for competitive government exams.",
//     href: "/syllabus",
//     icon: FileText,
//     eyebrow: "Build your roadmap",
//   },
//   {
//     number: "02",
//     title: "Current Affairs",
//     description: "Keep your preparation sharp with relevant monthly updates for government and competitive exams.",
//     href: "/current-affairs",
//     icon: Newspaper,
//     eyebrow: "Stay up to date",
//   },
//   {
//     number: "03",
//     title: "Haryana GK",
//     description: "Strengthen your state-focused preparation with Haryana history, geography, culture, and more.",
//     href: "/haryana-gk",
//     icon: Landmark,
//     eyebrow: "Know your state",
//   },
//   {
//     number: "04",
//     title: "Asian Games 2026",
//     description: "Revise India’s medal tally, flag bearers, winners, and exam-oriented current-affairs MCQs.",
//     href: "/study-materials-hub/asian-games-2026",
//     icon: Trophy,
//     eyebrow: "Current affairs spotlight",
//   },
// ]

// export default function StudyMaterialsHubPage() {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "WebPage",
//         "@id": "https://cettest.site/study-materials-hub#webpage",
//         url: "https://cettest.site/study-materials-hub",
//         name: "HSSC, SSC, Railway and UKSSSC Study Material",
//         description: "Study material, syllabus, current affairs, and GK resources for government exam preparation in India.",
//         inLanguage: "en-IN",
//         about: examGuides.map((exam) => ({ "@type": "Thing", name: exam.name })),
//       },
//       {
//         "@type": "ItemList",
//         name: "Government exam preparation resources",
//         itemListElement: examGuides.map((exam, index) => ({
//           "@type": "ListItem",
//           position: index + 1,
//           name: `${exam.name} exam preparation`,
//           url: `https://cettest.site${exam.href}`,
//         })),
//       },
//       {
//         "@type": "FAQPage",
//         mainEntity: faqItems.map((item) => ({
//           "@type": "Question",
//           name: item.question,
//           acceptedAnswer: { "@type": "Answer", text: item.answer },
//         })),
//       },
//     ],
//   }

//   return (
//     <> 
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
//     <div className="min-h-screen bg-background">
//       <FooterLinkNavbar />
//       <main className="overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
//         <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 px-6 py-12 text-white shadow-2xl shadow-slate-950/25 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
//           <div className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full bg-amber-400/15 blur-3xl" />
//           <div className="pointer-events-none absolute -bottom-48 left-1/3 size-[28rem] rounded-full bg-blue-500/15 blur-3xl" />
//           <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
//             <div className="max-w-3xl">
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
//                 <Sparkles aria-hidden="true" />
//                 Government exam preparation
//               </div>
//               <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl sm:leading-[1.05]">
//                 Your focused path to a stronger preparation.
//               </h1>
//               <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
//                 One place for the essential resources you need to prepare with clarity, consistency, and confidence for government exams across India.
//               </p>
//             </div>
//             <div className="hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-right backdrop-blur sm:block">
//               <ShieldCheck className="ml-auto size-8 text-amber-300" aria-hidden="true" />
//               <p className="mt-8 text-sm font-medium text-slate-300">Prepare with purpose</p>
//               <p className="mt-1 text-2xl font-semibold text-white">Learn. Revise. Qualify.</p>
//             </div>
//           </div>
//         </section>

//         <AdPlacement className="my-8" />

//         <section className="mx-auto max-w-6xl">
//           <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your preparation toolkit</p>
//               <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose your next step</h2>
//             </div>
//             <BookOpenCheck className="hidden size-10 text-primary/30 sm:block" aria-hidden="true" />
//           </div>

//           <div className="grid gap-5 md:grid-cols-3">
//             {studySections.map((section) => {
//               const Icon = section.icon
//               return (
//                 <Link key={section.title} href={section.href} className="group rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
//                   <Card className="relative h-full overflow-hidden rounded-3xl border-border/70 bg-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10">
//                     <div className="absolute right-5 top-5 text-4xl font-semibold tracking-tighter text-muted-foreground/15">{section.number}</div>
//                     <CardHeader className="p-7 pb-5">
//                       <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
//                         <Icon aria-hidden="true" />
//                       </div>
//                       <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{section.eyebrow}</p>
//                       <CardTitle className="mt-3 text-2xl tracking-tight">{section.title}</CardTitle>
//                       <CardDescription className="mt-2 text-base leading-7">{section.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent className="p-7 pt-2">
//                       <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
//                         Explore section
//                         <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
//                       </span>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               )
//             })}
//           </div>
//         </section>

//         <section className="mx-auto mt-16 max-w-4xl" aria-labelledby="faq-heading">
//           <div className="mb-8 text-center">
//             <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Quick answers</p>
//             <h2 id="faq-heading" className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
//               Government exam preparation FAQs
//             </h2>
//             <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
//               Find clear answers about study material for HSSC, SSC, Railway, UKSSSC, and other government exams.
//             </p>
//           </div>
//           <div className="divide-y divide-border rounded-3xl border border-border/70 bg-card px-6 sm:px-8">
//             {faqItems.map((item) => (
//               <details key={item.question} className="group py-5">
//                 <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
//                   {item.question}
//                 </summary>
//                 <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{item.answer}</p>
//               </details>
//             ))}
//           </div>
//         </section>
//       </main>
//       <FooterLinkFooter />
//     </div>
//     </>
//   )
// }


import type { Metadata } from "next"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight, BookOpen, BookOpenCheck, ChevronRight,
  ClipboardList, FileText, GraduationCap, Landmark, Mountain,
  Newspaper, ShieldCheck, TrainFront, Trophy,
} from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import AdPlacement from "@/components/ad-placement"

const SITE_URL = "https://cettest.site"
const PATH = "/study-materials-hub"
const PAGE_URL = `${SITE_URL}${PATH}`

export const metadata: Metadata = {
  title: "Free Study Material for HSSC CET, SSC, Railway & UKSSSC | CET TEST",
  description:
    "Explore government exam study resources for Haryana HSSC CET, SSC, Railway RRB and Uttarakhand UKSSSC. Find syllabus guides, current affairs, Haryana GK and practice tests.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "CET TEST",
    title: "Government Exam Study Material | CET TEST",
    description: "Explore HSSC CET, SSC, Railway and UKSSSC study guides, syllabus resources, current affairs and Haryana GK.",
  },
  twitter: { card: "summary", title: "Government Exam Study Material | CET TEST" },
  robots: { index: true, follow: true },
}

type Resource = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  label: string
}

// Keep these links in sync with the actual routes in your app.
const examGuides: Resource[] = [
  { title: "Haryana HSSC CET", description: "Explore Haryana CET and HSSC exam preparation resources.", href: "/exams/hssc-cet", icon: GraduationCap, label: "Haryana exams" },
  { title: "SSC Exams", description: "Find preparation guidance for SSC competitive examinations.", href: "/exams/ssc", icon: ClipboardList, label: "Central exams" },
  { title: "Railway RRB", description: "Explore Railway recruitment exam preparation resources.", href: "/exams/railway", icon: TrainFront, label: "Railway exams" },
  { title: "Uttarakhand UKSSSC", description: "Prepare with resources relevant to Uttarakhand recruitment exams.", href: "/exams/uksssc", icon: Mountain, label: "Uttarakhand exams" },
]

const studySections: Resource[] = [
  { title: "Exam Syllabus", description: "Start with subjects, topics and syllabus guidance before planning your revision.", href: "/syllabus", icon: FileText, label: "Plan your preparation" },
  { title: "Current Affairs", description: "Browse current-affairs coverage and identify topics relevant to your examination.", href: "/current-affairs", icon: Newspaper, label: "Stay informed" },
  { title: "Haryana GK", description: "Review Haryana history, geography, culture and other state-focused topics.", href: "/haryana-gk", icon: Landmark, label: "State knowledge" },
  { title: "Asian Games 2026", description: "Explore the Asian Games 2026 topic page for exam-focused sports current affairs.", href: "/study-materials-hub/asian-games-2026", icon: Trophy, label: "Featured topic" },
  { title: "September 2026 Current Affairs", description: "Revise September 2026 news, government schemes, economy, science, environment and international affairs with topic-wise notes and practice MCQs.", href: "/current-affairs/september-2026", icon: Newspaper, label: "Monthly current affairs" },
]

const steps = [
  { number: "01", title: "Check your syllabus", description: "Identify the topics that apply to your target exam. Refer to the recruiting body's official notification for the final syllabus." },
  { number: "02", title: "Study topic by topic", description: "Build fundamentals, revise general knowledge and follow current affairs relevant to the exam." },
  { number: "03", title: "Practise and review", description: "Attempt timed mock tests, review incorrect answers and focus on topics that need improvement." },
]

const faqItems = [
  { question: "Which exams are covered by the study materials hub?", answer: "The hub links to resources for Haryana HSSC CET, SSC, Railway RRB and Uttarakhand UKSSSC exams, alongside general syllabus, current affairs and Haryana GK pages." },
  { question: "Where should I start my government exam preparation?", answer: "Begin with the official syllabus for your chosen exam. Then create a topic-wise study plan, revise regularly and use practice tests to check your understanding." },
  { question: "Can I practise mock tests on CET TEST?", answer: "Yes. Visit the mock tests section to browse available exams. The first test in each exam section can be attempted without signing up; additional tests require a free account." },
  { question: "Is the syllabus on this site an official notification?", answer: "No. CET TEST is a preparation resource. Always verify eligibility, dates, exam pattern and syllabus details with the relevant official recruitment authority." },
]

function ResourceCard({ resource, number }: { resource: Resource; number?: string }) {
  const Icon = resource.icon
  return (
    <Link href={resource.href} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
      <div className="mb-6 flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary"><Icon className="h-6 w-6" aria-hidden="true" /></span>
        {number && <span className="text-xs font-semibold tracking-widest text-muted-foreground">{number}</span>}
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">{resource.label}</span>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{resource.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{resource.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore resource <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" /></span>
    </Link>
  )
}

export default function StudyMaterialsHubPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Government Exam Study Material | CET TEST",
        description: metadata.description,
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Study Materials Hub", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        name: "Government exam preparation guides",
        itemListElement: examGuides.map((exam, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: exam.title,
          url: `${SITE_URL}${exam.href}`,
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <FooterLinkNavbar />
      <main id="main-content" className="pb-20 pt-24 sm:pt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground focus-visible:underline">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span aria-current="page" className="text-foreground">Study Materials</span>
          </nav>

          <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-indigo-400 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200">
                <BookOpenCheck className="h-4 w-4" aria-hidden="true" /> Government exam preparation
              </span>
              <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-tight">Study Material for HSSC CET, SSC, Railway &amp; UKSSSC</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">Explore exam guides, syllabus resources, current affairs and general knowledge in one organized place. Build a practical study plan and practise at your own pace.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#exam-guides" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Explore exam guides <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                <Link href="/mock-test" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Browse free mock tests</Link>
              </div>
            </div>
          </header>

          <section id="exam-guides" aria-labelledby="exam-heading" className="scroll-mt-24 py-14 sm:py-20">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Study library</p>
              <h2 id="resources-heading" className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">Essential preparation resources</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">Use these sections to understand the syllabus, revise important topics and follow relevant updates.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {studySections.map((section, index) => <ResourceCard key={section.href} resource={section} number={String(index + 1).padStart(2, "0")} />)}
            </div>
          </section>

          <section aria-labelledby="resources-heading" className="border-t border-border py-14 sm:py-20">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Explore by examination</p>
              <h2 id="exam-heading" className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">Choose the exam you're preparing for</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">Start with exam-specific guidance, then use the syllabus and practice resources that match your target recruitment examination.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {examGuides.map((exam, index) => <ResourceCard key={exam.href} resource={exam} number={String(index + 1).padStart(2, "0")} />)}
            </div>

          </section>

          <section aria-labelledby="plan-heading" className="rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10 sm:py-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Preparation roadmap</p>
              <h2 id="plan-heading" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">How to use these study materials</h2>
              <p className="mt-3 leading-7 text-muted-foreground">A consistent routine works best when it follows your exam's actual syllabus and gives you time to practise and review.</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-start gap-3 text-sm leading-7 text-muted-foreground">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p>Exam dates, eligibility rules, patterns and syllabus requirements may change. Always confirm them on the relevant official recruitment website.</p>
            </div>
          </section>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <AdPlacement className="my-4" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="faq-heading" className="mx-auto max-w-4xl py-10 sm:py-14">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Helpful answers</p>
              <h2 id="faq-heading" className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Frequently asked questions</h2>
            </div>
            <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {faqItems.map((item) => (
                <details key={item.question} className="group px-5 py-5 sm:px-7">
                  <summary className="cursor-pointer rounded-sm pr-4 text-base font-semibold leading-7 marker:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{item.question}</summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="cta-heading" className="mt-6 flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-sm font-medium text-primary"><BookOpen className="h-4 w-4" aria-hidden="true" /> Put your preparation into practice</div>
              <h2 id="cta-heading" className="mt-2 text-2xl font-bold tracking-tight">Ready to test what you've learned?</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">Browse available mock tests and attempt the first test in an exam section without registration.</p>
            </div>
            <Link href="/mock-test" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Explore mock tests <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </section>
        </div>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
