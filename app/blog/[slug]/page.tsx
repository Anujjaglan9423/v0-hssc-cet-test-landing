import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ArrowLeft, Calendar, Clock, User, Share2, MessageCircle, Heart } from "lucide-react"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

interface BlogPostDB {
  id: string
  title: string
  description: string
  meta_description: string
  category: string
  featured_image_url: string | null
  created_at: string
  status: string
  meta_title?: string
  tags?: string[]
}

const fallbackPosts: Record<
  string,
  {
    title: string
    content: string
    date: string
    readTime: string
    category: string
    image: string
    author: string
  }
> = {
  "competitive-exams-2026-complete-syllabus-exam-pattern": {
    title: "Competitive Exams 2026: Complete Syllabus and Exam Pattern",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    category: "Exam Guide",
    image: "/exam-syllabus-study-guide.jpg",
    author: "CET TEST Team",
    content: `<h2>Competitive Exam Patterns 2026</h2><p>Competitive exams have different structures depending on the exam type. Understanding the pattern is crucial for effective preparation.</p>`,
  },
}

async function getBlogPost(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000"

    const response = await fetch(`${baseUrl}/api/blogs?slug=${slug}`, {
      next: { revalidate: 60 },
    })

    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error("[v0] Failed to fetch blog:", error)
  }

  return null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Blog Post",
      description: "Read our latest blog post",
    }
  }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.description.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.meta_description,
      images: post.featured_image_url ? [{ url: post.featured_image_url }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  const fallbackPost = fallbackPosts[slug as keyof typeof fallbackPosts]

  if (!post && !fallbackPost) {
    notFound()
  }

  const displayPost = post
    ? {
        title: post.title,
        content: post.description,
        date: new Date(post.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        readTime: "5 min read",
        category: post.category || "General",
        image: post.featured_image_url || "/placeholder.svg",
        author: "CET TEST Team",
      }
    : {
        title: fallbackPost!.title,
        content: fallbackPost!.content,
        date: fallbackPost!.date,
        readTime: fallbackPost!.readTime,
        category: fallbackPost!.category,
        image: fallbackPost!.image,
        author: fallbackPost!.author,
      }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground hidden sm:block">CET TEST</span>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Featured Image */}
      <div className="relative h-96 sm:h-[500px] overflow-hidden bg-muted">
        <img
          src={displayPost.image || "/placeholder.svg"}
          alt={displayPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">{displayPost.category}</span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {displayPost.date}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-4 h-4" />
              {displayPost.readTime}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {displayPost.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 pt-6 border-t border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
            <div>
              <p className="font-semibold text-foreground">{displayPost.author}</p>
              <p className="text-sm text-muted-foreground">Expert Educator</p>
            </div>
          </div>
        </div>

        {/* Share & Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 pb-12 border-b border-border">
          <Button variant="outline" size="sm" className="gap-2">
            <Heart className="w-4 h-4" />
            <span className="hidden sm:inline">Like</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Comment</span>
          </Button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16">
          <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: displayPost.content
                .split("\n")
                .map((p: string) => (p.trim() ? `<p>${p}</p>` : ""))
                .join(""),
            }}
          />
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-12 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Excel in Your Exams?</h3>
          <p className="text-muted-foreground mb-6">
            Get access to comprehensive study materials, mock tests, and expert guidance to crack your competitive exams.
          </p>
          <Link href="/register">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Button>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12" />

        {/* Author Bio Card */}
        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-lg font-bold text-foreground mb-4">About the Author</h3>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-lg">{displayPost.author}</p>
                <p className="text-sm text-muted-foreground mb-3">Expert Educator & CET TEST Contributor</p>
                <p className="text-foreground mb-4">
                  Passionate about helping students prepare effectively for competitive exams with proven strategies and detailed content.
                </p>
                <Link href="#follow">
                  <Button variant="outline" size="sm">
                    Follow Author
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>

      {/* Related Posts Section */}
      <section className="bg-card/50 py-16 border-t border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Tips & Tricks", "Current Affairs", "Exam Guide"].map((category, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="h-40 bg-muted" />
                <CardContent className="p-6">
                  <span className="text-xs font-bold text-primary uppercase">{category}</span>
                  <h3 className="font-bold text-foreground mt-2 line-clamp-2 hover:text-primary transition-colors">
                    Strategies for {category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    Master the essential concepts and techniques needed to excel.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">Get Weekly Study Tips</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for exam strategies, current affairs updates, and insider tips delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
