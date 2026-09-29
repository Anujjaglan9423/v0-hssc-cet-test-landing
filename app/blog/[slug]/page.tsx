import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import { getBlogWords, getStaticBlog, staticBlogs } from "@/lib/blog-data"

type PageProps = { params: Promise<{ slug: string }> }
const SITE_URL = "https://cettest.site"

export function generateStaticParams() {
  return staticBlogs.map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = getStaticBlog((await params).slug)
  if (!blog) return { title: "Article Not Found" }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,
    authors: [{ name: blog.author }],
    category: blog.category,
    alternates: { canonical: `${SITE_URL}/blog/${blog.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${blog.slug}`,
      title: blog.title,
      description: blog.excerpt,
      siteName: "CET TEST",
      locale: "en_IN",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
      images: [{ url: blog.image, alt: blog.title }],
    },
    twitter: { card: "summary_large_image", title: blog.title, description: blog.excerpt, images: [blog.image] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const blog = getStaticBlog((await params).slug)
  if (!blog) notFound()
  const related = staticBlogs.filter((item) => item.slug !== blog.slug).slice(0, 3)
  const wordCount = getBlogWords(blog)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: [`${SITE_URL}${blog.image}`],
    author: { "@type": "Organization", name: blog.author, url: SITE_URL },
    publisher: { "@type": "Organization", name: "CET TEST", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` } },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: `${SITE_URL}/blog/${blog.slug}`,
    inLanguage: "en-IN",
    articleSection: blog.category,
    keywords: blog.tags.join(", "),
    wordCount,
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "CET TEST", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Exam Blogs", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: blog.title, item: `${SITE_URL}/blog/${blog.slug}` },
    ],
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FooterLinkNavbar />
      <main>
        <section className="border-b border-border/60 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <Link href="/blog" className="inline-flex max-w-full items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft aria-hidden="true" className="size-4 shrink-0" /> <span>Back to all guides</span>
            </Link>
            <div className="mt-8 grid min-w-0 gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-10">
              <div className="min-w-0">
                <Badge className="mb-4">{blog.category}</Badge>
                <h1 className="max-w-3xl break-words text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">{blog.title}</h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{blog.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-muted-foreground sm:mt-8 sm:gap-5 sm:text-sm">
                  <span className="inline-flex items-center gap-2"><User aria-hidden="true" className="size-4 shrink-0" /> {blog.author}</span>
                  <span className="inline-flex items-center gap-2"><Calendar aria-hidden="true" className="size-4 shrink-0" /> {blog.date}</span>
                  <span className="inline-flex items-center gap-2"><Clock aria-hidden="true" className="size-4 shrink-0" /> {blog.readTime}</span>
                </div>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg sm:aspect-[5/3] lg:aspect-[4/3]">
                <Image src={blog.image} alt={`${blog.title} cover`} fill sizes="(max-width: 1024px) 100vw, 380px" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            <article className="min-w-0 max-w-3xl">
              <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:mb-10 sm:p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary"><BookOpen aria-hidden="true" className="size-4" /> In this guide</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">A practical read for aspirants who want a clearer routine, stronger revision and better exam-day decisions.</p>
              </div>
              {blog.sections.map((section) => (
                <section key={section.heading} className="mb-10 min-w-0 sm:mb-12">
                  <h2 className="break-words border-l-4 border-primary pl-3 text-xl font-bold leading-snug text-foreground sm:pl-4 sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[15px] leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">{paragraph}</p>)}
                  {section.bullets && <ul className="mt-5 flex flex-col gap-3 rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground sm:p-5 sm:text-base">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 leading-7"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" /> <span>{bullet}</span></li>)}</ul>}
                  {section.table && <div className="mt-6 max-w-full overflow-x-auto rounded-xl border border-border overscroll-x-contain"><table className="w-full min-w-[560px] border-collapse text-left text-xs sm:text-sm"><caption className="border-b border-border bg-muted/40 px-3 py-3 text-left font-semibold text-foreground sm:px-4">{section.table.caption}</caption><thead className="bg-primary/10 text-foreground"><tr>{section.table.headers.map((header) => <th key={header} scope="col" className="px-3 py-3 font-semibold sm:px-4">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={`${section.heading}-${rowIndex}`} className="border-t border-border/70"><th scope="row" className="px-3 py-3 align-top font-medium text-foreground sm:px-4">{row[0]}</th>{row.slice(1).map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className="px-3 py-3 align-top leading-6 text-muted-foreground sm:px-4">{cell}</td>)}</tr>)}</tbody></table></div>}
                </section>
              ))}
              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted-foreground">Keep learning with CET TEST practice sets and mock tests.</p><Link href="/"><Button className="w-full sm:w-auto">Start practising <ArrowRight data-icon="inline-end" /></Button></Link></div>
            </article>

            <aside className="min-w-0 lg:sticky lg:top-6 lg:self-start">
              <Card><CardContent className="p-5"><p className="text-sm font-semibold text-foreground">More exam guides</p><div className="mt-4 flex flex-col gap-4">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-lg border border-border p-3 transition-colors hover:border-primary/50"><p className="text-sm font-semibold leading-5 text-foreground">{item.title}</p><p className="mt-1 text-xs text-muted-foreground">{item.readTime}</p></Link>)}</div><Link href="/blog" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">View all blogs <ArrowRight aria-hidden="true" className="size-4" /></Link></CardContent></Card>
            </aside>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8"><div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8"><h2 className="text-xl font-bold text-foreground sm:text-2xl">Ready to test your preparation?</h2><p className="mt-2 text-sm text-muted-foreground sm:text-base">Apply what you learned with focused practice and mock tests.</p><Link href="/" className="mt-5 w-full sm:w-auto"><Button className="w-full sm:w-auto">Start practising <ArrowRight data-icon="inline-end" /></Button></Link></div></section>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
