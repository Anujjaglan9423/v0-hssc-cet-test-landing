import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Tag,
  ArrowRight,
} from "lucide-react"
import { ShareButtons } from "@/components/blog/share-buttons"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import type { Metadata } from "next"

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
  updated_at: string
}

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const supabase = await createClient()
    
    const { data: blog, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("status", "publish")
      .single()
    
    if (error || !blog) {
      return null
    }
    
    return blog
  } catch (error) {
    console.error("[v0] Failed to fetch blog:", error)
    return null
  }
}

async function getRelatedBlogs(category: string, currentSlug: string): Promise<Blog[]> {
  try {
    const supabase = await createClient()
    
    const { data: blogs } = await supabase
      .from("blogs")
      .select("*")
      .eq("status", "publish")
      .eq("category", category)
      .neq("slug", currentSlug)
      .limit(3)
    
    return blogs || []
  } catch (error) {
    console.error("[v0] Failed to fetch related blogs:", error)
    return []
  }
}

async function getRecentBlogs(currentSlug: string): Promise<Blog[]> {
  try {
    const supabase = await createClient()
    
    const { data: blogs } = await supabase
      .from("blogs")
      .select("*")
      .eq("status", "publish")
      .neq("slug", currentSlug)
      .order("created_at", { ascending: false })
      .limit(4)
    
    return blogs || []
  } catch (error) {
    console.error("[v0] Failed to fetch recent blogs:", error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlog(slug)
  
  if (!blog) {
    return {
      title: "Blog Not Found | CET TEST",
    }
  }
  
  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.description?.slice(0, 160),
    keywords: blog.tags?.join(", "),
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.description?.slice(0, 160),
      images: blog.featured_image_url ? [blog.featured_image_url] : [],
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.description?.slice(0, 160),
      images: blog.featured_image_url ? [blog.featured_image_url] : [],
    },
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
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = blog.category ? await getRelatedBlogs(blog.category, slug) : []
  const recentBlogs = await getRecentBlogs(slug)
  const readTime = calculateReadTime(blog.description)

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
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Articles
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Featured Image */}
        {blog.featured_image_url && (
          <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
            <img
              src={blog.featured_image_url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Title Section */}
        <div className={`relative ${blog.featured_image_url ? "-mt-48 md:-mt-64" : "pt-12"} z-20`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${blog.featured_image_url ? "bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10" : ""}`}>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
                {blog.category && (
                  <>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-primary">{blog.category}</span>
                  </>
                )}
              </nav>

              {/* Category Badge */}
              {blog.category && (
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  {blog.category}
                </Badge>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">CET TEST Team</p>
                    <p className="text-xs text-muted-foreground">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4" />
                  {formatDate(blog.created_at)}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </div>
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {blog.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none 
                  prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-20
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-muted-foreground prose-li:leading-relaxed
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                  prose-img:rounded-xl prose-img:shadow-lg
                  prose-ul:my-4 prose-ol:my-4
                "
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Found this helpful?</h3>
                    <p className="text-sm text-muted-foreground">Share it with your friends preparing for exams</p>
                  </div>
                  <ShareButtons title={blog.title} slug={slug} />
                </div>
              </div>

              {/* CTA Section */}
              <Card className="mt-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Ready to Start Practicing?
                      </h3>
                      <p className="text-muted-foreground">
                        Join thousands of students preparing for competitive exams with our comprehensive test series and study materials.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/signup">
                        <Button size="lg" className="w-full sm:w-auto">
                          Start Free Trial
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents - Placeholder for JS enhancement */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Quick Navigation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Scroll through the article to explore all sections and tips covered in this guide.
                    </p>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((post) => (
                          <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="block group"
                          >
                            <div className="flex gap-3">
                              {post.featured_image_url && (
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                                  <img
                                    src={post.featured_image_url}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                  {post.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {formatDate(post.created_at)}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Recent Posts */}
                {recentBlogs.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">Recent Articles</h3>
                      <div className="space-y-3">
                        {recentBlogs.map((post, index) => (
                          <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="flex items-start gap-3 group"
                          >
                            <span className="text-lg font-bold text-primary/40 group-hover:text-primary transition-colors">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {calculateReadTime(post.description)}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Popular Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {["CET", "Current Affairs", "Study Tips", "Mathematics", "English", "Reasoning"].map((cat) => (
                        <Badge
                          key={cat}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
