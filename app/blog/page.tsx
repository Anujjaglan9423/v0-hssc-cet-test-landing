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

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border border-primary/20 text-xs sm:text-sm font-medium px-3 py-1">
                Blog & Resources
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                CET TEST Blog
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Expert tips, exam strategies, and study resources to help you ace competitive exams like HSSC CET, SSC, Railway, and Uttarakhand exams.
              </p>
            </div>
            
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">Categories:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 5).map((category) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="cursor-pointer text-xs bg-muted/70 hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all px-2.5 py-1 rounded-full"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredBlog && (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-6 sm:mb-8">Featured Article</h2>
            <Link href={`/blog/${featuredBlog.slug}`}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border/50 group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[320px] overflow-hidden bg-muted lg:col-span-2">
                    {featuredBlog.featured_image_url ? (
                      <img
                        src={featuredBlog.featured_image_url}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-muted-foreground/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:hidden" />
                  </div>
                  <CardContent className="p-6 sm:p-8 lg:p-8 flex flex-col justify-between lg:col-span-1">
                    {featuredBlog.category && (
                      <Badge className="w-fit mb-4 bg-primary/15 text-primary border border-primary/30 text-xs font-semibold px-3 py-1">
                        {featuredBlog.category}
                      </Badge>
                    )}
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance leading-tight">
                        {featuredBlog.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-2 text-sm sm:text-base text-pretty">
                        {getExcerpt(featuredBlog.description, 150)}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary/60" />
                          {formatDate(featuredBlog.created_at)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-primary/60" />
                          {calculateReadTime(featuredBlog.description)}
                        </span>
                      </div>
                      <Button className="w-full sm:w-fit group/btn text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Latest Articles</h2>
              <span className="text-xs sm:text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">{blogs.length} articles</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
              {remainingBlogs.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full border border-border/50 bg-background hover:border-border hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col">
                    <div className="relative h-40 sm:h-44 overflow-hidden bg-muted">
                      {post.featured_image_url ? (
                        <img
                          src={post.featured_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                          <BookOpen className="w-8 h-8 text-muted-foreground/20" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4 sm:p-5 flex-1 flex flex-col">
                      {post.category && (
                        <Badge className="w-fit text-xs bg-primary/10 text-primary border border-primary/20 font-medium mb-3 px-2.5 py-0.5">
                          {post.category}
                        </Badge>
                      )}
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug flex-1">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                        {getExcerpt(post.description, 85)}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/30">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-primary/50" />
                          {formatDate(post.created_at)}
                        </span>
                        <span className="flex items-center gap-1.5">
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

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/8 to-primary/4 border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border border-primary/30 text-xs sm:text-sm font-medium">
            Get Exclusive Content
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Never Miss an Important Update
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Get the latest study tips, exam strategies, admit cards, and important updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <Link href="/signup" className="flex-1 sm:flex-initial">
              <Button size="lg" className="w-full gap-2 text-base font-semibold">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
