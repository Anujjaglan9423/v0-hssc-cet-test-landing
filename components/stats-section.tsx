import { BookOpen, ChartNoAxesCombined, ClipboardCheck, RotateCcw } from "lucide-react"

const highlights = [
  { icon: ClipboardCheck, title: "Choose a test", description: "Select an exam or topic that matches your current study goal." },
  { icon: BookOpen, title: "Attempt carefully", description: "Practise with timed questions and read the explanation after submitting." },
  { icon: ChartNoAxesCombined, title: "Review performance", description: "Use accuracy and time indicators to find topics that need attention." },
  { icon: RotateCcw, title: "Repeat with purpose", description: "Return to difficult topics and measure progress through another attempt." },
]

export default function StatsSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-16" aria-labelledby="practice-cycle-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 id="practice-cycle-title" className="text-2xl font-bold text-foreground md:text-3xl">A practice cycle you can follow</h2>
          <p className="mt-2 text-muted-foreground">Each part of the platform is designed to support a useful study habit, not just another score.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon
            return <article key={item.title} className="rounded-2xl border border-border bg-card p-5"><div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon aria-hidden="true" /></div><h3 className="font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p></article>
          })}
        </div>
      </div>
    </section>
  )
}
