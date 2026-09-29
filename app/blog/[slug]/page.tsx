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

export function generateStaticParams() { return staticBlogs.map((blog) => ({ slug: blog.slug })) }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = getStaticBlog((await params).slug)
  if (!blog) return { title: "Article Not Found | CET TEST" }
  return { title: `${blog.title} | CET TEST`, description: blog.excerpt, alternates: { canonical: `https://cettest.site/blog/${blog.slug}` } }
}

export default async function BlogPostPage({ params }: PageProps) {
  const blog = getStaticBlog((await params).slug)
  if (!blog) notFound()
  const related = staticBlogs.filter((item) => item.slug !== blog.slug).slice(0, 3)

  return <div className="min-h-screen bg-background"><FooterLinkNavbar /><main>
    <section className="border-b border-border/60 px-4 py-10 sm:px-6 lg:px-8 lg:py-16"><div className="mx-auto max-w-6xl">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"><ArrowLeft /> Back to all guides</Link>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center"><div><Badge className="mb-5">{blog.category}</Badge><h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight text-foreground sm:text-5xl">{blog.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{blog.excerpt}</p><div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"><span className="flex items-center gap-2"><User /> {blog.author}</span><span className="flex items-center gap-2"><Calendar /> {blog.date}</span><span className="flex items-center gap-2"><Clock /> {blog.readTime}</span></div></div><img src={blog.image} alt="" className="h-64 w-full rounded-2xl object-cover shadow-lg lg:h-80" /></div>
    </div></section>
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]"><article className="max-w-3xl"><div className="mb-10 rounded-xl border border-primary/20 bg-primary/5 p-5"><p className="text-sm font-semibold text-primary">In this guide</p><p className="mt-2 text-sm leading-6 text-muted-foreground">A practical read for aspirants who want a clearer routine, stronger revision and better exam-day decisions.</p></div>{blog.sections.map((section) => <section key={section.heading} className="mb-12"><h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-foreground sm:text-3xl">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-muted-foreground">{paragraph}</p>)}{section.bullets && <ul className="mt-5 flex flex-col gap-3 rounded-xl bg-muted/50 p-5 text-muted-foreground">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 leading-7"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />{bullet}</li>)}</ul>}{section.table && <div className="mt-6 overflow-x-auto rounded-xl border border-border"><table className="w-full min-w-[620px] border-collapse text-left text-sm"><caption className="border-b border-border bg-muted/40 px-4 py-3 text-left font-semibold text-foreground">{section.table.caption}</caption><thead className="bg-primary/10 text-foreground"><tr>{section.table.headers.map((header) => <th key={header} scope="col" className="px-4 py-3 font-semibold">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={`${section.heading}-${rowIndex}`} className="border-t border-border/70"><th scope="row" className="px-4 py-3 font-medium text-foreground">{row[0]}</th>{row.slice(1).map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 leading-6 text-muted-foreground">{cell}</td>)}</tr>)}</tbody></table></div>}</section>)}<div className="border-t border-border pt-8"><div className="flex flex-wrap gap-2">{blog.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div></div></article><aside className="lg:sticky lg:top-24 lg:self-start"><Card><CardContent className="p-6"><BookOpen className="text-primary" /><h2 className="mt-4 text-lg font-bold text-foreground">More for aspirants</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Continue with another focused guide and keep your preparation moving.</p><div className="mt-5 flex flex-col gap-4">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="group text-sm font-semibold leading-5 text-foreground hover:text-primary">{item.title}<span className="mt-1 flex items-center gap-1 text-xs font-medium text-primary">Read article <ArrowRight /></span></Link>)}</div></CardContent></Card></aside></div></section>
    <section className="px-4 pb-16 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"><h2 className="text-2xl font-bold text-foreground">Ready to test your preparation?</h2><p className="mt-2 text-muted-foreground">Apply what you learned with focused practice and mock tests.</p><Link href="/" className="mt-5"><Button>Start practising <ArrowRight data-icon="inline-end" /></Button></Link></div></section>
  </main><FooterLinkFooter /></div>
}
