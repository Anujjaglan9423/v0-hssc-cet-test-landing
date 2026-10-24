// import Image from "next/image"
// import Link from "next/link"
// import type { Metadata } from "next"
// import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react"
// import { notFound } from "next/navigation"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import FooterLinkNavbar from "@/components/footer-link-navbar"
// import FooterLinkFooter from "@/components/footer-link-footer"
// import { getBlogWords, getStaticBlog, staticBlogs } from "@/lib/blog-data"

// type PageProps = { params: Promise<{ slug: string }> }
// const SITE_URL = "https://cettest.site"

// export function generateStaticParams() {
//   return staticBlogs.map((blog) => ({ slug: blog.slug }))
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const blog = getStaticBlog((await params).slug)
//   if (!blog) return { title: "Article Not Found" }

//   return {
//     title: blog.title,
//     description: blog.excerpt,
//     keywords: blog.tags,
//     authors: [{ name: blog.author }],
//     category: blog.category,
//     alternates: { canonical: `${SITE_URL}/blog/${blog.slug}` },
//     openGraph: {
//       type: "article",
//       url: `${SITE_URL}/blog/${blog.slug}`,
//       title: blog.title,
//       description: blog.excerpt,
//       siteName: "CET TEST",
//       locale: "en_IN",
//       publishedTime: blog.date,
//       authors: [blog.author],
//       tags: blog.tags,
//       images: [{ url: blog.image, alt: blog.title }],
//     },
//     twitter: { card: "summary_large_image", title: blog.title, description: blog.excerpt, images: [blog.image] },
//     robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
//   }
// }

// export default async function BlogPostPage({ params }: PageProps) {
//   const blog = getStaticBlog((await params).slug)
//   if (!blog) notFound()
//   const related = staticBlogs.filter((item) => item.slug !== blog.slug).slice(0, 3)
//   const wordCount = getBlogWords(blog)
//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: blog.title,
//     description: blog.excerpt,
//     image: [`${SITE_URL}${blog.image}`],
//     author: { "@type": "Organization", name: blog.author, url: SITE_URL },
//     publisher: { "@type": "Organization", name: "CET TEST", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` } },
//     datePublished: blog.date,
//     dateModified: blog.date,
//     mainEntityOfPage: `${SITE_URL}/blog/${blog.slug}`,
//     inLanguage: "en-IN",
//     articleSection: blog.category,
//     keywords: blog.tags.join(", "),
//     wordCount,
//     isAccessibleForFree: true,
//     about: { "@type": "Thing", name: `${blog.category} exam preparation` },
//     audience: { "@type": "EducationalAudience", educationalRole: "student" },
//     speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "article p"] },
//   }
//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "CET TEST", item: SITE_URL },
//       { "@type": "ListItem", position: 2, name: "Exam Blogs", item: `${SITE_URL}/blog` },
//       { "@type": "ListItem", position: 3, name: blog.title, item: `${SITE_URL}/blog/${blog.slug}` },
//     ],
//   }

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-background">
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
//       <FooterLinkNavbar />
//       <main>
//         <section className="border-b border-border/60 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="mx-auto max-w-6xl">
//             <Link href="/blog" className="inline-flex max-w-full items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
//               <ArrowLeft aria-hidden="true" className="size-4 shrink-0" /> <span>Back to all guides</span>
//             </Link>
//             <div className="mt-8 grid min-w-0 gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-10">
//               <div className="min-w-0">
//                 <Badge className="mb-4">{blog.category}</Badge>
//                 <h1 className="max-w-3xl break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">{blog.title}</h1>
//                 <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{blog.excerpt}</p>
//                 <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-muted-foreground sm:mt-8 sm:gap-5 sm:text-sm">
//                   <span className="inline-flex items-center gap-2"><User aria-hidden="true" className="size-4 shrink-0" /> {blog.author}</span>
//                   <span className="inline-flex items-center gap-2"><Calendar aria-hidden="true" className="size-4 shrink-0" /> {blog.date}</span>
//                   <span className="inline-flex items-center gap-2"><Clock aria-hidden="true" className="size-4 shrink-0" /> {blog.readTime}</span>
//                 </div>
//               </div>
//               <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg sm:aspect-[5/3] lg:aspect-[4/3]">
//                 <Image src={blog.image} alt={`${blog.title} cover`} fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover" priority />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//           <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
//             <article className="min-w-0 max-w-3xl break-words [overflow-wrap:anywhere]">
//               <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:mb-10 sm:p-5">
//                 <p className="flex items-center gap-2 text-sm font-semibold text-primary"><BookOpen aria-hidden="true" className="size-4" /> In this guide</p>
//                 <p className="mt-2 text-sm leading-6 text-muted-foreground">A practical read for aspirants who want a clearer routine, stronger revision and better exam-day decisions.</p>
//               </div>
//               {blog.sections.map((section) => (
//                 <section key={section.heading} className="mb-10 min-w-0 sm:mb-12">
//                   <h2 className="break-words border-l-4 border-primary pl-3 text-xl font-bold leading-snug text-foreground sm:pl-4 sm:text-3xl">{section.heading}</h2>
//                   {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[15px] leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">{paragraph}</p>)}
//                   {section.bullets && <ul className="mt-5 flex flex-col gap-3 rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground sm:p-5 sm:text-base">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 leading-7"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" /> <span>{bullet}</span></li>)}</ul>}
//                   {section.table && <div className="mt-6 max-w-full overflow-x-auto rounded-xl border border-border overscroll-x-contain"><table className="w-full min-w-[500px] border-collapse text-left text-xs sm:min-w-0 sm:text-sm"><caption className="border-b border-border bg-muted/40 px-3 py-3 text-left font-semibold text-foreground sm:px-4">{section.table.caption}</caption><thead className="bg-primary/10 text-foreground"><tr>{section.table.headers.map((header) => <th key={header} scope="col" className="px-3 py-3 font-semibold sm:px-4">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={`${section.heading}-${rowIndex}`} className="border-t border-border/70"><th scope="row" className="px-3 py-3 align-top font-medium text-foreground sm:px-4">{row[0]}</th>{row.slice(1).map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className="px-3 py-3 align-top leading-6 text-muted-foreground sm:px-4">{cell}</td>)}</tr>)}</tbody></table></div>}
//                 </section>
//               ))}
//               <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted-foreground">Keep learning with CET TEST practice sets and mock tests.</p><Link href="/"><Button className="w-full sm:w-auto">Start practising <ArrowRight data-icon="inline-end" /></Button></Link></div>
//             </article>

//             <aside className="min-w-0 lg:sticky lg:top-6 lg:self-start">
//               <Card><CardContent className="p-5"><p className="text-sm font-semibold text-foreground">More exam guides</p><div className="mt-4 flex flex-col gap-4">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-lg border border-border p-3 transition-colors hover:border-primary/50"><p className="text-sm font-semibold leading-5 text-foreground">{item.title}</p><p className="mt-1 text-xs text-muted-foreground">{item.readTime}</p></Link>)}</div><Link href="/blog" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">View all blogs <ArrowRight aria-hidden="true" className="size-4" /></Link></CardContent></Card>
//             </aside>
//           </div>
//         </section>

//         <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8"><div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground sm:text-2xl">Ready to test your preparation?</h2><p className="mt-2 text-sm text-muted-foreground sm:text-base">Apply what you learned with focused practice and mock tests.</p><Link href="/" className="mt-5 w-full sm:w-auto"><Button className="w-full sm:w-auto">Start practising <ArrowRight data-icon="inline-end" /></Button></Link></div></section>
//       </main>
//       <FooterLinkFooter />
//     </div>
//   )
// }


import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Clock3, ExternalLink } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import { getBlogReadTime, getRelatedBlogs, getStaticBlog, staticBlogs } from "@/lib/blog-data"

const SITE_URL = "https://cettest.site"
type PageProps = { params: Promise<{ slug: string }> }

type Blog = NonNullable<ReturnType<typeof getStaticBlog>>

function absoluteUrl(value: string) {
  return new URL(value, SITE_URL).toString()
}

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}

function formatDate(iso: string) {
  // Stable output across server time zones.
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`))
}

function headingId(heading: string, index: number) {
  const slug = heading.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  return `section-${index + 1}-${slug || "guide"}`
}

export function generateStaticParams() {
  return staticBlogs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = getStaticBlog(slug)
  if (!blog) return { title: "Article Not Found", robots: { index: false, follow: false } }
  const url = `${SITE_URL}/blog/${blog.slug}`
  const image = blog.image ? absoluteUrl(blog.image) : undefined
  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,
    authors: [{ name: blog.author }],
    category: blog.category,
    alternates: { canonical: url },
    openGraph: {
      type: "article", url, siteName: "CET TEST", locale: "en_IN",
      title: blog.title, description: blog.excerpt,
      publishedTime: blog.date,
      ...(blog.updatedAt ? { modifiedTime: blog.updatedAt } : {}),
      authors: [blog.author], tags: blog.tags,
      ...(image ? { images: [{ url: image, alt: blog.imageAlt || blog.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title, description: blog.excerpt,
      ...(image ? { images: [image] } : {}),
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  }
}

function ArticleTable({ table }: { table: NonNullable<Blog["sections"][number]["table"]> }) {
  return (
    <div className="mt-6 max-w-full overflow-x-auto rounded-xl border border-border" role="region" aria-label={table.caption} tabIndex={0}>
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="border-b border-border bg-muted/60 px-4 py-3 text-left font-semibold text-foreground">{table.caption}</caption>
        <thead className="bg-muted/40"><tr>{table.headers.map((header, index) => <th key={`${header}-${index}`} scope="col" className="px-4 py-3 font-semibold text-foreground">{header}</th>)}</tr></thead>
        <tbody>{table.rows.map((row, index) => (
          <tr key={index} className="border-t border-border/70">
            {row.map((cell, cellIndex) => cellIndex === 0
              ? <th key={cellIndex} scope="row" className="px-4 py-3 align-top font-medium text-foreground">{cell}</th>
              : <td key={cellIndex} className="px-4 py-3 align-top leading-6 text-muted-foreground">{cell}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </div>
  )
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const blog = getStaticBlog(slug)
  if (!blog) notFound()
  const related = getRelatedBlogs(blog)
  const url = `${SITE_URL}/blog/${blog.slug}`
  const image = blog.image ? absoluteUrl(blog.image) : undefined
  const articleId = `${url}#article`
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": articleId,
        headline: blog.title, description: blog.excerpt,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        ...(image ? { image: [image] } : {}),
        datePublished: blog.date,
        ...(blog.updatedAt ? { dateModified: blog.updatedAt } : {}),
        author: { "@type": "Organization", name: blog.author },
        publisher: { "@type": "Organization", name: "CET TEST", url: SITE_URL },
        inLanguage: "en-IN", articleSection: blog.category,
        keywords: blog.tags.join(", "), isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: blog.title, item: url },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(structuredData) }} />
      <FooterLinkNavbar />
      <main id="main-content" className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-full truncate text-foreground" aria-current="page">{blog.title}</span>
          </nav>
          <header className="grid items-center gap-8 border-b border-border pb-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
            <div className="min-w-0">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-primary">{blog.category} · CET TEST Blog</p>
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">{blog.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{blog.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">By {blog.author}</span>
                <span className="inline-flex items-center gap-2"><CalendarDays className="size-4" aria-hidden="true" /><time dateTime={blog.date}>{formatDate(blog.date)}</time></span>
                <span className="inline-flex items-center gap-2"><Clock3 className="size-4" aria-hidden="true" />{getBlogReadTime(blog)}</span>
              </div>
              {blog.updatedAt && <p className="mt-2 text-xs text-muted-foreground">Updated <time dateTime={blog.updatedAt}>{formatDate(blog.updatedAt)}</time></p>}
            </div>
            {blog.image && (
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted lg:aspect-[4/3]">
                <Image src={blog.image} alt={blog.imageAlt || `${blog.category} preparation guide illustration`} fill priority sizes="(max-width: 1024px) 100vw, 380px" className="object-cover" />
              </div>
            )}
          </header>

          <div className="grid min-w-0 gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-6">
            <article className="min-w-0 max-w-3xl">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
                <div className="flex items-center gap-2 font-semibold text-foreground"><BookOpen className="size-5 text-primary" aria-hidden="true" />In this guide</div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{blog.excerpt}</p>
                <ol className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  {blog.sections.map((section, index) => <li key={index}><a href={`#${headingId(section.heading, index)}`} className="inline-flex items-start gap-2 font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><span className="text-muted-foreground">{String(index + 1).padStart(2, "0")}.</span>{section.heading}</a></li>)}
                </ol>
              </div>

              {blog.sections.map((section, index) => (
                <section id={headingId(section.heading, index)} key={index} aria-labelledby={`${headingId(section.heading, index)}-title`} className="mt-12 scroll-mt-28">
                  <h2 id={`${headingId(section.heading, index)}-title`} className="text-balance border-l-4 border-primary pl-4 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="mt-5 text-base leading-8 text-muted-foreground">{paragraph}</p>)}
                  {section.bullets && section.bullets.length > 0 && <ul className="mt-6 list-disc space-y-3 rounded-xl bg-muted/40 px-8 py-5 text-base leading-7 text-muted-foreground marker:text-primary">{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}</ul>}
                  {section.table && <ArticleTable table={section.table} />}
                </section>
              ))}

              {blog.sources && blog.sources.length > 0 && (
                <section aria-labelledby="sources-heading" className="mt-12 border-t border-border pt-7">
                  <h2 id="sources-heading" className="text-xl font-bold text-foreground">Sources and further reading</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Check the latest official notification for exam dates, eligibility and marking rules.</p>
                  <ul className="mt-4 space-y-3">{blog.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">{source.label}<ExternalLink className="size-3.5" aria-hidden="true" /></a></li>)}</ul>
                </section>
              )}
              <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground">Put this guide into practice</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">Use a free mock test to identify weak topics, practise under time limits and review your answers.</p>
                <Link href="/mock-test" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Explore free mock tests <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </article>

            <aside aria-label="More preparation resources" className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-5">
                <h2 className="font-bold text-foreground">Related exam guides</h2>
                <ul className="mt-4 space-y-3">{related.map((item) => <li key={item.slug}><Link href={`/blog/${item.slug}`} className="block rounded-lg border border-border/70 p-3 transition-colors hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"><span className="block text-xs font-semibold text-primary">{item.category}</span><span className="mt-1 block text-sm font-semibold leading-6 text-foreground">{item.title}</span><span className="mt-1 block text-xs text-muted-foreground">{getBlogReadTime(item)}</span></Link></li>)}</ul>
                <Link href="/blog" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">All preparation guides <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
              <div className="mt-5 rounded-2xl border border-border bg-card p-5">
                <h2 className="font-bold text-foreground">Explore more</h2>
                <div className="mt-4 grid gap-3 text-sm font-medium text-primary">
                  <Link href="/study-materials-hub" className="hover:underline">Study materials and syllabus</Link>
                  <Link href="/mock-test" className="hover:underline">Free government exam mock tests</Link>
                </div>
              </div>
            </aside>
          </div>
          <Link href="/blog" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="size-4" aria-hidden="true" /> Back to all guides</Link>
        </div>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
