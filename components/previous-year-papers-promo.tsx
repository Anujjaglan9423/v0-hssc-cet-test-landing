import Link from "next/link"
import { ArrowRight, Files, ShieldCheck } from "lucide-react"

export default function PreviousYearPapersPromo() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="previous-papers-promo-title">
      <Link
        href="/previous-year-papers"
        className="group flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40 hover:bg-muted/30 sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div className="flex items-start gap-4 sm:items-center">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Files aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-primary">Free question library</p>
            <h2 id="previous-papers-promo-title" className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">Browse previous year papers by exam category</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Explore available exams, subjects and topics. Preview or download PDFs without signing in.</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><ShieldCheck aria-hidden="true" className="size-4" />Open access · No login required</span>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform group-hover:translate-x-0.5">
          View question papers <ArrowRight aria-hidden="true" className="size-4" />
        </span>
      </Link>
    </section>
  )
}
