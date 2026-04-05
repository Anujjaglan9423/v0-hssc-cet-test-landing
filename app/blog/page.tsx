import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"
import Footer from "@/components/footer"
import { createClient } from "@/lib/supabase/server"
import type { Metadata } from "next"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

export const metadata: Metadata = {
  title: "Blog | Haryana CET, HSSC, SSC & Railway Exam Tips & Study Resources 2026",
  description:
    "Expert exam tips, study strategies, syllabus updates & preparation guides for Haryana CET, HSSC CET, SSC CGL, RRB NTPC & UKSSSC exams. Read the latest articles to boost your government job preparation.",
  keywords: [
    "Haryana CET exam tips 2026",
    "HSSC CET study guide",
    "SSC CGL preparation tips",
    "RRB NTPC study resources",
    "government job exam blog",
    "HSSC CET syllabus guide",
    "Haryana CET previous year analysis",
    "competitive exam preparation tips India",
    "UKSSSC exam strategy",
    "sarkari naukri preparation blog",
  ],
  alternates: {
    canonical: "https://cettest.site/blog",
  },
  openGraph: {
    title: "Blog | Haryana CET, HSSC, SSC & Railway Exam Tips 2026",
    description:
      "Expert tips, study strategies & syllabus updates for Haryana CET, HSSC CET, SSC, Railway & UKSSSC exams.",
    url: "https://cettest.site/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CET TEST Blog - Exam Tips & Study Resources" }],
  },
}

interface Blog {
  id: string
  title: string
  slug: string
  description: string
  status: string
  meta_title: string
  meta_description: string
  focus_keyword: string
  tags: string[]
  category: string
  featured_image_url: string | null
  created_at: string
}

async function getBlogs(): Promise<Blog[]> {
  const supabase = await createClient()

  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("status", "publish")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching blogs:", error)
    return []
  }

  return blogs || []
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, "")
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readTime} min read`
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function getExcerpt(html: string, maxLength: number = 150): string {
  const text = html.replace(/<[^>]*>/g, "")
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

export default async function BlogPage() {
  const blogs = await getBlogs()
  const categories = [...new Set(blogs.map(blog => blog.category).filter(Boolean))]

  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />

      {/* Premium Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Expert Resources & Insights</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Knowledge Hub for
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Exam Excellence
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Discover expert strategies, in-depth guides, and proven techniques to ace your competitive exams with confidence.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">{blogs.length}+</div>
                <div className="text-sm text-muted-foreground mt-1">Articles</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">{categories.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Categories</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">Free</div>
                <div className="text-sm text-muted-foreground mt-1">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      {blogs.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">All Articles</h2>
                <p className="text-muted-foreground mt-2">Browse our complete collection of exam preparation guides</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <span>{blogs.length} articles</span>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogs.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full border border-border/50 bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden group flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-muted">
                      {post.featured_image_url ? (
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                          <BookOpen className="w-12 h-12 text-primary/30" />
                        </div>
                      )}
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-5 sm:p-6 flex-1 flex flex-col">
                      {post.category && (
                        <Badge className="w-fit text-xs bg-primary/10 text-primary border-0 font-medium mb-3 px-3 py-1">
                          {post.category}
                        </Badge>
                      )}
                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {getExcerpt(post.description, 100)}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50 mt-auto">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(post.created_at)}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {calculateReadTime(post.description)}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {blogs.length === 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-12 h-12 text-primary/50" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">No articles yet</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We are working on creating helpful content for your exam preparation. Check back soon!
            </p>
            <Link href="/">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Premium CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative">
          <Card className="border border-primary/20 bg-gradient-to-br from-card to-card/80 overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    Ready to ace your exams?
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Join thousands of students preparing for competitive exams with our comprehensive test series and expert guidance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Link href="/signup">
                    <Button size="lg" className="gap-2 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FooterLinkFooter />
    </div>
  )
}
