import Link from "next/link"
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import { articles, categories } from "@/lib/september-2026-data"

export default function September2026CurrentAffairsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FooterLinkNavbar />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="size-4" aria-hidden="true" />
          <Link href="/current-affairs" className="hover:text-primary">Current Affairs</Link>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span className="text-foreground">September 2026</span>
        </nav>

        <header className="mb-12 rounded-2xl border bg-card p-6 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Monthly Current Affairs Digest</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">September 2026 Current Affairs</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
            Browse exam-focused September 2026 study notes, key facts and revision questions
            for government-exam preparation. Select a topic to read its detailed summary.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="size-4" aria-hidden="true" />
            {articles.length} study topics across {categories.filter(category => articles.some(article => article.category === category.id)).length} categories
          </p>
        </header>

        <div id="topics" className="space-y-12">
          {categories.map(category => {
            const categoryArticles = articles.filter(article => article.category === category.id)
            if (categoryArticles.length === 0) return null
            return (
              <section key={category.id} aria-labelledby={`category-${category.id}`}>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h2 id={`category-${category.id}`} className="text-2xl font-bold">{category.name}</h2>
                  <span className="text-sm text-muted-foreground">{categoryArticles.length} topics</span>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryArticles.map(article => (
                    <article key={article.slug} className="flex h-full flex-col rounded-xl border bg-card p-5 transition-shadow hover:shadow-md">
                      <h3 className="text-lg font-semibold leading-snug">
                        <Link href={`/current-affairs/september-2026/${article.slug}`} className="hover:text-primary">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-muted-foreground">{article.summary}</p>
                      <Link href={`/current-affairs/september-2026/${article.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                        Read study notes <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <section id="practice" aria-labelledby="practice-title" className="mt-14 rounded-2xl border bg-card p-6 sm:p-8">
          <h2 id="practice-title" className="text-2xl font-bold">Revision practice</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Each study topic includes a review question to help check your understanding.
            Open a topic and find its “Check your understanding” section.
          </p>
          <Link href="#topics" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Explore study topics <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>
        <p className="mt-8 text-xs leading-6 text-muted-foreground">
          Editorial reference: Drishti IAS, Saraansh Monthly Current Affairs, September 2026.
          Verify important facts against primary and official sources before examination use.
        </p>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
