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
  try {
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
  } catch (error) {
    console.error("[v0] Failed to fetch blogs:", error)
    return []
  }
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

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-primary/2 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Knowledge Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            CET TEST <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Expert tips, exam strategies, and study resources to help you ace competitive exams like HSSC CET, SSC, Railway, and Uttarakhand exams.
          </p>
          
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <span className="text-sm text-muted-foreground">Popular topics:</span>
              {categories.slice(0, 6).map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      {featuredBlog && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">Featured Article</h2>
            <Link href={`/blog/${featuredBlog.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto md:min-h-[400px] overflow-hidden bg-muted">
                    {featuredBlog.featured_image_url ? (
                      <img
                        src={featuredBlog.featured_image_url}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-muted-foreground/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                  </div>
                  <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                    {featuredBlog.category && (
                      <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                        {featuredBlog.category}
                      </Badge>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                      {featuredBlog.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3 text-pretty">
                      {getExcerpt(featuredBlog.description, 200)}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredBlog.created_at)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {calculateReadTime(featuredBlog.description)}
                      </span>
                    </div>
                    <Button className="w-fit group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {remainingBlogs.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
              <span className="text-sm text-muted-foreground">{blogs.length} articles</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {remainingBlogs.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      {post.featured_image_url ? (
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-muted-foreground/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardHeader className="pb-2">
                      {post.category && (
                        <Badge className="w-fit text-xs bg-primary/10 text-primary border-primary/20">
                          {post.category}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {getExcerpt(post.description, 100)}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
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

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay Updated with Exam Tips
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest study tips, exam strategies, and important updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Link href="/signup" className="flex-1 sm:flex-initial">
              <Button size="lg" className="w-full">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
