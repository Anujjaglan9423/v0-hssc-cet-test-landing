// import Link from "next/link"
// import type { Metadata } from "next"
// import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import FooterLinkNavbar from "@/components/footer-link-navbar"
// import FooterLinkFooter from "@/components/footer-link-footer"
// import { staticBlogs } from "@/lib/blog-data"

// export const metadata: Metadata = {
//   title: "Exam Preparation Blog | CET TEST",
//   description: "Practical Haryana CET, HSSC and government exam preparation guides for aspirants.",
//   alternates: { canonical: "https://cettest.site/blog" },
// }

// export default function BlogPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       <FooterLinkNavbar />
//       <main>
//         <section className="relative overflow-hidden border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
//           <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
//           <div className="absolute -left-24 top-0 size-72 rounded-full bg-primary/15 blur-3xl" />
//           <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-accent/10 blur-3xl" />
//           <div className="relative mx-auto max-w-4xl text-center">
//             <Badge variant="secondary" className="mb-6 gap-2 rounded-full px-4 py-2 text-primary"><Sparkles /> Aspirant&apos;s Knowledge Hub</Badge>
//             <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Study smarter. <span className="text-primary">Score better.</span></h1>
//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Clear, practical guidance for Haryana CET and government exam aspirants—from daily study plans to the final day strategy.</p>
//             <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
//               <div><p className="text-3xl font-bold text-foreground">{staticBlogs.length}</p><p className="text-sm text-muted-foreground">Guides</p></div>
//               <div><p className="text-3xl font-bold text-foreground">100%</p><p className="text-sm text-muted-foreground">Free to read</p></div>
//               <div><p className="text-3xl font-bold text-foreground">Exam-ready</p><p className="text-sm text-muted-foreground">Advice</p></div>
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//           <div className="mx-auto max-w-6xl">
//             <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//               <div><p className="text-sm font-semibold uppercase tracking-wider text-primary">Learn with purpose</p><h2 className="mt-2 text-3xl font-bold text-foreground">Latest exam guides</h2></div>
//               <p className="text-sm text-muted-foreground">Read, revise and apply one idea at a time.</p>
//             </div>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {staticBlogs.map((post, index) => (
//                 <Link key={post.slug} href={`/blog/${post.slug}`} className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
//                   <Card className="group flex h-full flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
//                     <div className={`relative overflow-hidden bg-muted ${index === 0 ? "h-64" : "h-48"}`}><img src={post.image} alt="" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" /><Badge className="absolute bottom-4 left-4 bg-background/90 text-foreground hover:bg-background">{post.category}</Badge></div>
//                     <CardContent className="flex flex-1 flex-col gap-4 p-6"><h3 className={`${index === 0 ? "text-2xl" : "text-xl"} font-bold leading-tight text-foreground transition-colors group-hover:text-primary`}>{post.title}</h3><p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p><div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><Calendar /> {post.date}</span><span className="flex items-center gap-1.5"><Clock /> {post.readTime}</span></div><span className="flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight /></span></CardContent>
//                   </Card>
//                 </Link>
//               ))}
//             </div>
//             <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-12"><BookOpen className="mx-auto text-primary" /><h2 className="mt-4 text-2xl font-bold text-foreground">Turn reading into practice</h2><p className="mx-auto mt-2 max-w-xl text-muted-foreground">Use these strategies with timed quizzes and mock tests to build the confidence you need on exam day.</p><Link href="/" className="mt-6 inline-block"><Button>Explore CET Test Series <ArrowRight data-icon="inline-end" /></Button></Link></div>
//           </div>
//         </section>
//       </main>
//       <FooterLinkFooter />
//     </div>
//   )
// }


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
import { staticBlogs } from "@/lib/blog-data"

const siteUrl = "https://cettest.site"
const pageUrl = `${siteUrl}/blog`
const pageTitle = "Government Exam Preparation Blog | HSSC CET, SSC & More"
const pageDescription =
  "Read free government exam preparation guides, study plans and revision tips for Haryana HSSC CET, SSC, Railway and UKSSSC on CET TEST."

export const metadata: Metadata = {
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
    // Set an image only when the corresponding file exists in /public.
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
  robots: { index: true, follow: true },
}

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
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-3.5" aria-hidden="true" />
                {post.readTime}
              </span>
            )}
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
