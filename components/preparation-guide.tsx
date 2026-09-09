import Link from "next/link"
import { ArrowRight, BookOpenCheck, ChartNoAxesCombined, FileSearch } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    title: "Start with the exam pattern",
    description: "Read the syllabus and marking scheme before choosing a test. This helps you practise the right subjects instead of collecting random questions.",
    href: "/syllabus",
    link: "Browse syllabi",
  },
  {
    icon: BookOpenCheck,
    title: "Practise in small, regular sessions",
    description: "Begin with topic-wise questions, then move to timed full-length tests. After each attempt, review incorrect and skipped answers.",
    href: "/study-materials",
    link: "Open study materials",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Use results to plan the next session",
    description: "Compare accuracy, time spent, and topic-level performance. A result is useful when it changes what you revise next.",
    href: "/mock-test",
    link: "Try a mock test",
  },
]

export default function PreparationGuide() {
  return (
    <section className="border-y border-border bg-muted/30 py-20" aria-labelledby="preparation-guide-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">A practical starting point</p>
          <h2 id="preparation-guide-title" className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">How to use CET TEST effectively</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Good preparation is more than taking a large number of tests. Follow a simple cycle: understand the exam, practise deliberately, and review your mistakes.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <article key={step.title} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon aria-hidden="true" /></div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{step.description}</p>
                <Link href={step.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{step.link}<ArrowRight aria-hidden="true" /></Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function EditorialNote() {
  return (
    <section className="py-16" aria-labelledby="editorial-note-title">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 id="editorial-note-title" className="text-2xl font-bold text-foreground">Our content standard</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">CET TEST is an independent practice platform. We aim to explain questions clearly, keep exam guidance separate from official notifications, and review time-sensitive material before publishing updates. Always confirm dates, eligibility, and rules with the relevant recruiting authority.</p>
        <Link href="/about" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">Read about our editorial approach <ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

