import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Image from "next/image"
import { staticBlogs } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Exam Preparation Blog | CET TEST",
  description: "Practical Haryana CET, HSSC and government exam preparation guides for aspirants.",
  alternates: { canonical: "https://cettest.site/blog" },
  openGraph: { title: "Exam Preparation Blog | CET TEST", description: "Practical Haryana CET, UKSSSC and state exam preparation guides.", url: "https://cettest.site/blog", type: "website" },
  twitter: { card: "summary_large_image", title: "Exam Preparation Blog | CET TEST", description: "Practical state exam preparation guides for aspirants." },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />
      <main>
        <section className="relative overflow-hidden border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute -left-24 top-0 size-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 gap-2 rounded-full px-4 py-2 text-primary"><Sparkles /> Aspirant&apos;s Knowledge Hub</Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Study smarter. <span className="text-primary">Score better.</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Clear, practical guidance for Haryana CET and government exam aspirants—from daily study plans to the final day strategy.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
              <div><p className="text-3xl font-bold text-foreground">{staticBlogs.length}</p><p className="text-sm text-muted-foreground">Guides</p></div>
              <div><p className="text-3xl font-bold text-foreground">100%</p><p className="text-sm text-muted-foreground">Free to read</p></div>
              <div><p className="text-3xl font-bold text-foreground">Exam-ready</p><p className="text-sm text-muted-foreground">Advice</p></div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-sm font-semibold uppercase tracking-wider text-primary">Learn with purpose</p><h2 className="mt-2 text-3xl font-bold text-foreground">Latest exam guides</h2></div>
              <p className="text-sm text-muted-foreground">Read, revise and apply one idea at a time.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {staticBlogs.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
                  <Card className="group flex h-full flex-col overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                    <div className={`relative overflow-hidden bg-muted ${index === 0 ? "h-64" : "h-48"}`}><Image src={post.image} alt={post.imageAlt} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"} className="object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" /><Badge className="absolute bottom-4 left-4 bg-background/90 text-foreground hover:bg-background">{post.category}</Badge></div>
                    <CardContent className="flex flex-1 flex-col gap-4 p-6"><h3 className={`${index === 0 ? "text-2xl" : "text-xl"} font-bold leading-tight text-foreground transition-colors group-hover:text-primary`}>{post.title}</h3><p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p><div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><Calendar /> {post.date}</span><span className="flex items-center gap-1.5"><Clock /> {post.readTime}</span></div><span className="flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight /></span></CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-12"><BookOpen className="mx-auto text-primary" /><h2 className="mt-4 text-2xl font-bold text-foreground">Turn reading into practice</h2><p className="mx-auto mt-2 max-w-xl text-muted-foreground">Use these strategies with timed quizzes and mock tests to build the confidence you need on exam day.</p><Link href="/" className="mt-6 inline-block"><Button>Explore CET Test Series <ArrowRight data-icon="inline-end" /></Button></Link></div>
          </div>
        </section>
      </main>
      <FooterLinkFooter />
    </div>
  )
}
