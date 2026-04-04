import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react"
import Footer from "@/components/footer"
import { createClient } from "@/lib/supabase/server"
import type { Metadata } from "next"

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
  const featuredBlog = blogs[0]
  const remainingBlogs = blogs.slice(1)

  const categories = [...new Set(blogs.map(blog => blog.category).filter(Boolean))]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                CET <span className="text-primary">TEST</span>
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero - Minimal */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              CET TEST Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert insights, exam strategies, and study resources for competitive exams.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - Compact */}
      {featuredBlog && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link href={`/blog/${featuredBlog.slug}`}>
              <Card className="overflow-hidden border border-border/50 hover:border-border hover:shadow-md transition-all duration-300 group">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="relative h-48 sm:h-auto sm:col-span-2 overflow-hidden bg-muted">
                    {featuredBlog.featured_image_url ? (
                      <img
                        src={featuredBlog.featured_image_url}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-muted-foreground/20" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <CardContent className="p-5 sm:p-6 sm:col-span-3 flex flex-col justify-center">
                    <div className="space-y-3">
                      {featuredBlog.category && (
                        <Badge className="w-fit text-xs bg-primary/10 text-primary border border-primary/20 font-medium px-2 py-0.5">
                          {featuredBlog.category}
                        </Badge>
                      )}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight text-balance">
                        {featuredBlog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {getExcerpt(featuredBlog.description, 100)}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(featuredBlog.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {calculateReadTime(featuredBlog.description)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {remainingBlogs.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">All Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingBlogs.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full border border-border/50 bg-background hover:border-border hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      {post.featured_image_url ? (
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                          <BookOpen className="w-8 h-8 text-muted-foreground/20" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <CardContent className="p-5 flex-1 flex flex-col">
                      {post.category && (
                        <Badge className="w-fit text-xs bg-primary/10 text-primary border border-primary/20 font-medium mb-3 px-2.5 py-0.5">
                          {post.category}
                        </Badge>
                      )}
                      <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight flex-1">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {getExcerpt(post.description, 80)}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border/30 mt-auto">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-primary/50" />
                          {formatDate(post.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-primary/50" />
                          {calculateReadTime(post.description)}
                        </span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">No articles yet</h2>
            <p className="text-muted-foreground mb-8">
              We are working on creating helpful content for your exam preparation. Check back soon!
            </p>
            <Link href="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Join thousands of students preparing for competitive exams with our comprehensive test series.
              </p>
            </div>
            <div className="flex items-center">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
