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
}

async function getRelatedBlogs(category: string, currentSlug: string): Promise<Blog[]> {
  const supabase = await createClient()
  
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .eq("status", "publish")
    .eq("category", category)
    .neq("slug", currentSlug)
    .limit(3)
  
  return blogs || []
}

async function getRecentBlogs(currentSlug: string): Promise<Blog[]> {
  const supabase = await createClient()
  
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .eq("status", "publish")
    .neq("slug", currentSlug)
    .order("created_at", { ascending: false })
    .limit(4)
  
  return blogs || []
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
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-foreground">
                CET <span className="text-primary">TEST</span>
              </span>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">All Articles</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12">
        {/* Featured Image with Overlay */}
        {blog.featured_image_url ? (
          <div className="w-full h-80 sm:h-96 lg:h-[550px] relative mb-8 sm:mb-12">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
            <img
              src={blog.featured_image_url}
              alt={blog.title}
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-white/10" />
          </div>
        ) : null}
        
        {/* Title Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            {blog.category && (
              <>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-primary font-medium">{blog.category}</span>
              </>
            )}
          </nav>

          {/* Category Badge */}
          {blog.category && (
            <div className="mb-4 sm:mb-6">
              <Badge className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full font-medium">
                {blog.category}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6 sm:mb-8">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">CET TEST Team</p>
                <p className="text-xs text-muted-foreground">Author</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/60" />
                {formatDate(blog.created_at)}
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <span className="text-border">•</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary/60" />
                {readTime}
              </div>
            </div>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-6 sm:mt-8">
              {blog.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-muted/60 hover:bg-muted text-foreground/80 px-2.5 sm:px-3 py-1 rounded-full transition-colors cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <article className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Article Content */}
              <div
                className="prose prose-base sm:prose-lg max-w-none 
                  prose-headings:text-foreground prose-headings:font-bold prose-headings:scroll-mt-20
                  prose-h2:text-2xl sm:text-3xl prose-h2:mt-12 sm:prose-h2:mt-14 prose-h2:mb-5 sm:prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4 sm:prose-h2:pl-5
                  prose-h3:text-xl sm:text-2xl prose-h3:mt-8 sm:prose-h3:mt-10 prose-h3:mb-4 sm:prose-h3:mb-5 prose-h3:font-semibold
                  prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold
                  prose-p:text-muted-foreground prose-p:leading-relaxed sm:prose-p:leading-loose prose-p:mb-4 sm:prose-p:mb-5
                  prose-li:text-muted-foreground prose-li:leading-relaxed sm:prose-li:leading-loose prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-em:text-muted-foreground prose-em:italic
                  prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-2 transition-all
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 sm:prose-blockquote:py-5 prose-blockquote:px-4 sm:prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:my-6 prose-blockquote:text-foreground prose-blockquote:font-medium
                  prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-code:text-foreground/90
                  prose-pre:bg-muted prose-pre:border prose-pre:border-border/50 prose-pre:rounded-lg
                  prose-img:rounded-xl prose-img:shadow-xl prose-img:my-6 sm:prose-img:my-8 prose-img:border prose-img:border-border/50
                  prose-ul:my-5 sm:prose-ul:my-6 prose-ul:space-y-2
                  prose-ol:my-5 sm:prose-ol:my-6 prose-ol:space-y-2
                  prose-table:my-6 prose-td:px-3 prose-td:py-2 prose-th:px-3 prose-th:py-2 prose-th:font-semibold prose-th:bg-muted/50
                "
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              {/* Share Section */}
              <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-border/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">Found this helpful?</h3>
                    <p className="text-sm text-muted-foreground">Share it with your friends preparing for exams</p>
                  </div>
                  <div className="flex-shrink-0">
                    <ShareButtons title={blog.title} slug={slug} />
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <Card className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-primary/15 via-primary/8 to-primary/5 border border-primary/20 overflow-hidden hover:border-primary/40 transition-all shadow-lg hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-balance">
                        Ready to Start Practicing?
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        Join thousands of students preparing for competitive exams with our comprehensive test series and study materials.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link href="/signup" className="flex-shrink-0">
                        <Button size="lg" className="w-full sm:w-auto text-base font-semibold gap-2 shadow-lg hover:shadow-xl">
                          Start Free Trial
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6 sm:space-y-8">
                {/* Quick Navigation */}
                <Card className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2 text-base sm:text-lg">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Quick Navigation
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Scroll through the article to explore all sections and key insights covered in this comprehensive guide.
                    </p>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                  <Card className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-5 sm:p-6">
                      <h3 className="font-bold text-foreground mb-5 text-base sm:text-lg">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((post) => (
                          <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="block group"
                          >
                            <div className="flex gap-3">
                              {post.featured_image_url && (
                                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden flex-shrink-0 bg-muted ring-1 ring-border/50">
                                  <img
                                    src={post.featured_image_url}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                  {post.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-2">
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
                  <Card className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-5 sm:p-6">
                      <h3 className="font-bold text-foreground mb-5 text-base sm:text-lg">Latest Articles</h3>
                      <div className="space-y-4">
                        {recentBlogs.map((post, index) => (
                          <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="flex items-start gap-4 group p-3 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <span className="text-xl sm:text-2xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors flex-shrink-0 w-6 text-center">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1.5">
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
                <Card className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5 sm:p-6">
                    <h3 className="font-bold text-foreground mb-5 text-base sm:text-lg">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {["CET", "Current Affairs", "Study Tips", "Mathematics", "English", "Reasoning"].map((cat) => (
                        <Badge
                          key={cat}
                          variant="secondary"
                          className="cursor-pointer text-xs sm:text-sm bg-muted/60 hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all px-2.5 py-1 rounded-full font-medium"
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
