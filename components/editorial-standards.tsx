import Link from "next/link"

export default function EditorialStandards() {
  return (
    <section className="border-y bg-muted/30 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How we maintain quality</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Study information should be useful, clear, and verifiable.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            CET TEST publishes exam guidance and practice material for learning purposes. We explain the purpose of each resource, avoid promises about selection or rank, and update exam details when an official notice changes them.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          <p><strong className="text-foreground">Sources:</strong> official commission notices and published exam information are preferred for dates, vacancies, eligibility, and pattern.</p>
          <p><strong className="text-foreground">Transparency:</strong> practice questions are educational material, not official question papers or a guarantee of exam success.</p>
          <p><strong className="text-foreground">Feedback:</strong> if you find an outdated or incorrect detail, use the <Link className="text-primary underline underline-offset-4" href="/contact">contact page</Link> so it can be reviewed.</p>
        </div>
      </div>
    </section>
  )
}

export function ExamDisclaimer() {
  return (
    <p className="mx-auto max-w-3xl px-4 text-center text-sm leading-6 text-muted-foreground sm:px-6">
      Exam dates, vacancies, eligibility, syllabus, and marking rules can change. Always confirm the latest information on the relevant official commission website before applying or making decisions.
    </p>
  )
}
