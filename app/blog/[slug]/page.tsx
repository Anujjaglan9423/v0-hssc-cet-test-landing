import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Calendar, Clock, FileText, Share2, Bookmark } from "lucide-react"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: post } = await supabase.from("blogs").select("*").eq("slug", slug).eq("status", "published").single()

  if (!post) {
    notFound()
  }

  const getReadTime = (content: string) => {
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)
    return `${readTime} min read`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
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
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-background border-b border-border/50">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-tight text-balance">
            {post.title}
          </h1>

          {/* Meta Info - Enhanced */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-border/50">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <time dateTime={post.created_at}>{new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>{getReadTime(post.description)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Share">
                <Share2 className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Save">
                <Bookmark className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image - Premium */}
          <div className="mb-16">
            {post.featured_image_url ? (
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={post.featured_image_url}
                  alt={post.title}
                  className="w-full h-96 md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center rounded-2xl shadow-lg">
                <FileText className="w-24 h-24 text-muted-foreground opacity-30" />
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-xl max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-8 prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-foreground prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded prose-blockquote:text-muted-foreground prose-blockquote:font-semibold">
                <div dangerouslySetInnerHTML={{ __html: post.description }} />
              </div>

              {/* SEO Meta - Subtle */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Focus Keyword:</span> <span className="font-mono text-primary">{post.focus_keyword}</span>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA Card - Premium */}
              <div className="sticky top-20 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 backdrop-blur-sm">
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">Ready to Ace Your Exams?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Join thousands of students using our comprehensive test series and study materials.
                </p>
                <Link href="/signup" className="block">
                  <Button className="w-full" size="lg">
                    Start Free Trial
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  No credit card required
                </p>
              </div>

              {/* Info Card */}
              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border/50">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">About This Post</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <span className="text-xs uppercase text-foreground font-semibold">Reading Time</span>
                    <p className="mt-1">{getReadTime(post.description)}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase text-foreground font-semibold">Published</span>
                    <p className="mt-1">{new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Posts CTA */}
          <div className="mt-20 pt-12 border-t border-border/50">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 text-center">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Explore More Articles</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover more expert tips, exam strategies, and study resources to help you prepare for all competitive exams.
              </p>
              <Link href="/blog">
                <Button variant="outline" size="lg">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
