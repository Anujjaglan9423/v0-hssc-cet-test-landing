import Link from "next/link"
import {
  ArrowRight,
  BookOpenCheck,
  FileText,
  Landmark,
  Newspaper,
  Sparkles,
} from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import AdPlacement from "@/components/ad-placement"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const studySections = [
  {
    title: "Syllabus",
    description: "Explore exam-wise syllabi, subject weightage, patterns, and preparation guidance.",
    href: "/syllabus",
    icon: FileText,
    eyebrow: "Plan your preparation",
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "Current Affairs",
    description: "Stay updated with monthly national, international, and Haryana-focused current affairs.",
    href: "/current-affairs",
    icon: Newspaper,
    eyebrow: "Stay exam-ready",
    accent: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
  {
    title: "Haryana GK",
    description: "Revise Haryana history, geography, culture, administration, schemes, and more.",
    href: "/haryana-gk",
    icon: Landmark,
    eyebrow: "Master your state GK",
    accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
]

export default function StudyMaterialsHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-muted/60 px-6 py-12 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                <Sparkles aria-hidden="true" />
                Your preparation library
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Study smarter for every Haryana government exam
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Find the right resource for your next study session. Start with the syllabus, build awareness with current affairs, or strengthen your Haryana GK.
              </p>
            </div>
          </div>

          <AdPlacement className="my-8" />

          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Choose a subject</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">What do you want to study?</h2>
            </div>
            <BookOpenCheck className="hidden size-9 text-muted-foreground/50 sm:block" aria-hidden="true" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {studySections.map((section) => {
              const Icon = section.icon
              return (
                <Link key={section.title} href={section.href} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl">
                  <Card className="h-full border-border/80 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-lg">
                    <CardHeader>
                      <div className={`mb-4 flex size-12 items-center justify-center rounded-2xl ${section.accent}`}>
                        <Icon aria-hidden="true" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{section.eyebrow}</p>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      <CardDescription className="text-base leading-7">{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-2 font-semibold text-primary">
                        Explore {section.title}
                        <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Looking for uploaded PDFs and videos? Visit the <Link href="/study-materials" className="font-medium text-primary underline-offset-4 hover:underline">full study materials collection</Link>.
          </p>
        </section>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
