import { withPageMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  FileText,
  GraduationCap,
} from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import { getBlogReadTime, staticBlogs } from "@/lib/blog-data"

const siteUrl = "https://cettest.site"
const pageUrl = `${siteUrl}/blog`
const pageTitle = "Government Exam Preparation Blog | HSSC CET, SSC & More"
const pageDescription =
  "Read free government exam preparation guides, study plans and revision tips for Haryana HSSC CET, SSC, Railway and UKSSSC on CET TEST."

export const metadata: Metadata = withPageMetadata({
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "CET TEST",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", alt: "CET TEST government exam preparation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: { index: true, follow: true },
}, "/blog")

// Preserve the original data order: date display strings may not be ISO-sortable.
const posts = staticBlogs
const categories = Array.from(new Set(posts.map((post) => post.category).filter(Boolean)))

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}

function PostCard({
  post,
  featured = false,
}: {
  post: (typeof staticBlogs)[number]
  featured?: boolean
}) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary/50">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col focus-visible:outline-none"
        aria-label={`Read ${post.title}`}
      >
        <div className={`relative overflow-hidden bg-muted ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          {post.image ? (
            <Image
              src={post.image}
              alt=""
              fill
              priority={featured}
              sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
              className="object-cover transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground" aria-hidden="true">
              <BookOpen className="size-12" />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-primary">
            <span className="rounded-full bg-primary/10 px-3 py-1">{post.category}</span>
          </div>
          <h3 className={`font-semibold tracking-tight text-foreground group-hover:text-primary ${featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-xs text-muted-foreground">
            {post.date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5" aria-hidden="true" />
                {post.date}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5" aria-hidden="true" />
              {getBlogReadTime(post)}
            </span>
          </div>
          <span className="mt-4 inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary">
            Read guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  )
}

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${pageUrl}#articles` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#articles`,
        name: "CET TEST preparation articles",
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: post.title,
          url: `${siteUrl}/blog/${encodeURIComponent(post.slug)}`,
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FooterLinkNavbar />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }}
        />
        <section className="border-b border-border/70 bg-muted/30 px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary focus-visible:underline">Home</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span aria-current="page" className="text-foreground">Blog</span>
            </nav>
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <GraduationCap className="size-4" aria-hidden="true" /> CET TEST Knowledge Hub
              </p>
              <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Government Exam Preparation Blog &amp; Study Guides
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Practical study plans, revision strategies and exam preparation advice for Haryana HSSC CET, SSC, Railway and UKSSSC aspirants.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-border bg-background px-4 py-2">{posts.length} {posts.length === 1 ? "guide" : "guides"}</span>
                <span className="rounded-full border border-border bg-background px-4 py-2">Free to read</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="guides-heading" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Preparation library</p>
                <h2 id="guides-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Explore preparation guides</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">Browse exam-focused articles and turn useful strategies into daily practice.</p>
            </div>

            {categories.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2" aria-label="Topics covered">
                {categories.map((category) => (
                  <span key={category} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {category}
                  </span>
                ))}
              </div>
            )}

            {posts.length === 0 ? (
              <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center">
                <FileText className="mx-auto size-10 text-muted-foreground" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">Guides coming soon</h3>
                <p className="mt-2 text-sm text-muted-foreground">In the meantime, explore our free mock tests and study resources.</p>
                <Link href="/mock-test" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                  Explore mock tests <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <div key={post.slug} className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
                    <PostCard post={post} featured={index === 0} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section aria-labelledby="how-to-use-heading" className="border-t border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">A practical study library</p>
              <h2 id="how-to-use-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">How to use these exam guides</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                A blog post is useful when it changes what you do next. Use the guides to build a small, repeatable preparation system instead of collecting more resources. Start with the official notification, choose the topics that match your target exam, and then practise under time pressure.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-bold text-primary">01 · Understand</p>
                <h3 className="mt-3 text-lg font-semibold">Begin with the syllabus</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Note the subjects, question pattern, marking rules, eligibility and important dates from the latest official notice before making a timetable.</p>
              </article>
              <article className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-bold text-primary">02 · Practise</p>
                <h3 className="mt-3 text-lg font-semibold">Turn topics into questions</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">After every concept, solve a focused set. Mark questions that were slow, guessed or wrong so your next revision has a clear purpose.</p>
              </article>
              <article className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-bold text-primary">03 · Improve</p>
                <h3 className="mt-3 text-lg font-semibold">Use mocks as feedback</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Review accuracy, time and skipped questions after each mock. Repair the weakest topic before taking another full test.</p>
              </article>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-7">
                <h3 className="text-xl font-semibold">What you will find here</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Haryana CET:</span> state GK, syllabus planning, revision cycles and common preparation mistakes.</li>
                  <li><span className="font-semibold text-foreground">UKSSSC:</span> Uttarakhand GK, post-wise planning, general subjects and final-month strategy.</li>
                  <li><span className="font-semibold text-foreground">Government exams:</span> daily routines, mock analysis, active recall and exam-day decisions.</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-7">
                <h3 className="text-xl font-semibold">A simple weekly workflow</h3>
                <ol className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Monday–Thursday:</span> learn one concept and practise it the same day.</li>
                  <li><span className="font-semibold text-foreground">Friday:</span> revise notes and solve mixed questions from the week.</li>
                  <li><span className="font-semibold text-foreground">Weekend:</span> take a timed test, analyse errors and plan the next week.</li>
                </ol>
              </article>
            </div>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <h3 className="text-xl font-semibold">Keep the official notification as your final authority</h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">Exam patterns, eligibility, dates and marking schemes can change by recruitment and post. These guides explain preparation methods; always compare exam-specific facts with the latest notice before applying or finalising your strategy.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="study-next-heading" className="border-t border-border bg-muted/30 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 id="study-next-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">Turn what you read into exam practice</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                Start with your exam syllabus, revise the important topics, and use timed mock tests to check your understanding. The first mock test in each exam section is available without signing up.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/mock-test" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Explore free mock tests <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/study-materials-hub" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Study materials <BookOpen className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
