import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Calendar, Clock, FileText } from "lucide-react"
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

      {/* Blog Post Content */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.created_at).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {getReadTime(post.description)}
            </span>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="text-xs bg-muted px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.featured_image_url ? (
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          ) : (
            <div className="w-full h-64 md:h-96 bg-muted flex items-center justify-center rounded-xl mb-8">
              <FileText className="w-20 h-20 text-muted-foreground" />
            </div>
          )}

          {/* SEO Meta Info */}
          <div className="mb-8 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Focus Keyword:</strong> {post.focus_keyword}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-code:bg-muted prose-code:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: post.description }} />
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Start Practicing?</h3>
            <p className="text-muted-foreground mb-4">
              Join thousands of students preparing for competitive exams with our comprehensive test series.
            </p>
            <Link href="/signup">
              <Button>Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
