import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RichTextDisplay } from "@/components/admin/rich-text-display"
import { BookOpen, ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Copy, ChevronRight, Zap, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"
import { Metadata } from "next"

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

const relatedArticles = [
  {
    slug: "top-10-tips-crack-competitive-exam-first-attempt",
    title: "Top 10 Tips to Crack Any Competitive Exam in First Attempt",
    excerpt: "Learn proven strategies from toppers who cleared competitive exams with flying colors.",
    image: "/success-tips-study-motivation.jpg",
    category: "Tips & Tricks",
  },
  {
    slug: "current-affairs-competitive-exams-2026",
    title: "Important Current Affairs for Competitive Exams 2026",
    excerpt: "Stay updated with the most important current affairs topics expected in competitive exams 2026.",
    image: "/current-affairs-news.jpg",
    category: "Current Affairs",
  },
  {
    slug: "haryana-gk-districts-history-culture",
    title: "Haryana GK: Districts, History & Culture",
    excerpt: "Complete guide to Haryana General Knowledge covering districts, history, culture.",
    image: "/haryana-culture-heritage.jpg",
    category: "State GK",
  },
]

const fallbackContent = {
  "competitive-exams-2026-complete-syllabus-exam-pattern": {
    title: "Competitive Exams 2026: Complete Syllabus and Exam Pattern",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    category: "Exam Guide",
    image: "/exam-syllabus-study-guide.jpg",
    author: "CET TEST Team",
    content: `<h2>Competitive Exam Patterns 2026</h2><p>Competitive exams have different structures depending on the exam type. Understanding the pattern is crucial for effective preparation.</p><h3>Common Exam Structures</h3><ul><li><strong>Total Questions:</strong> Varies by exam (80-100 typically)</li><li><strong>Duration:</strong> 60-120 minutes depending on exam</li></ul>`,
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug.replace(/-/g, " ")} | CET TEST Blog`,
    description: "Read our comprehensive blog post on competitive exams preparation.",
  }
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post: BlogPostDB | null = null
  let displayPost = fallbackContent[slug as keyof typeof fallbackContent]

  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000"
    const response = await fetch(`${baseUrl}/api/blogs?slug=${slug}`, {
      next: { revalidate: 60 },
    })

    if (response.ok) {
      post = await response.json()
      if (post) {
        displayPost = {
          title: post.title,
          content: post.description,
          date: new Date(post.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          readTime: "5 min read",
          category: post.category || "General",
          image: post.featured_image_url || "/placeholder.svg",
          author: "CET TEST Team",
        }
      }
    }
  } catch (error) {
    console.error("[v0] Failed to fetch blog:", error)
  }

  if (!displayPost) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase">{displayPost.category}</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{displayPost.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {displayPost.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {displayPost.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {displayPost.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <img
            src={displayPost.image || "/placeholder.svg"}
            alt={displayPost.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <RichTextDisplay content={displayPost.content} />
            </article>

            {/* CTA Section */}
            <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Master Your Exams?</h3>
                    <p className="text-muted-foreground mb-6">
                      Join thousands of students preparing with our comprehensive test series and expert guidance.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/register">
                        <Button size="lg">
                          Start Free Trial
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg">
                        Get Expert Advice
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Share Section */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </h3>
                <div className="space-y-3">
                  <ShareButton icon={Twitter} label="Twitter" onClick={() => {}} />
                  <ShareButton icon={Linkedin} label="LinkedIn" onClick={() => {}} />
                  <ShareButton icon={Copy} label="Copy Link" onClick={() => {}} />
                </div>
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{displayPost.author}</h4>
                    <p className="text-sm text-muted-foreground mb-4">Expert educator helping students excel in competitive exams with proven strategies and comprehensive resources.</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{article.category}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">Get Weekly Study Tips</h2>
          <p className="text-muted-foreground mb-6">Subscribe to receive exam tips, study strategies, and resources directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ShareButton({ icon: Icon, label, onClick }: { icon: any; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors text-foreground text-sm font-medium"
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  )
}
