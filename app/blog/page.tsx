import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BookOpen, ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"

interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  featured_image_url: string | null
  created_at: string
  status: string
}

// Fallback posts for when database is empty
const fallbackPosts = [
  {
    slug: "competitive-exams-2026-complete-syllabus-exam-pattern",
    title: "Competitive Exams 2026: Complete Syllabus and Exam Pattern",
    excerpt:
      "Everything you need to know about Haryana CET, SSC, Railway, and Uttarakhand exam patterns, marking scheme, and detailed syllabus breakdown.",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    category: "Exam Guide",
    image: "/exam-syllabus-study-guide.jpg",
  },
  {
    slug: "top-10-tips-crack-competitive-exam-first-attempt",
    title: "Top 10 Tips to Crack Any Competitive Exam in First Attempt",
    excerpt:
      "Learn proven strategies from toppers who cleared competitive exams with flying colors. Expert tips inside!",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    category: "Tips & Tricks",
    image: "/success-tips-study-motivation.jpg",
  },
  {
    slug: "current-affairs-competitive-exams-2026",
    title: "Important Current Affairs for Competitive Exams 2026",
    excerpt: "Stay updated with the most important current affairs topics expected in competitive exams 2026.",
    date: "Dec 5, 2025",
    readTime: "10 min read",
    category: "Current Affairs",
    image: "/current-affairs-news.jpg",
  },
]

export default async function BlogPage() {
  let posts = fallbackPosts
  let dbPosts: BlogPost[] = []

  try {
    // Fetch published blogs from API
    const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL : 'http://localhost:3000'}/api/blogs`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (response.ok) {
      dbPosts = await response.json()
      console.log("[v0] Fetched blog posts from database:", dbPosts.length)

      // Convert database posts to display format
      if (dbPosts.length > 0) {
        posts = dbPosts.map((post) => ({
          slug: post.slug,
          title: post.title,
          excerpt: post.description.substring(0, 150) + "...",
          date: new Date(post.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          readTime: "5 min read", // Could be calculated based on content
          category: post.category || "General",
          image: post.featured_image_url || "/placeholder.svg",
        }))
      }
    }
  } catch (error) {
    console.error("[v0] Failed to fetch blogs:", error)
    // Use fallback posts
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            CET TEST <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Expert tips, exam strategies, and study resources to help you ace all competitive exams.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <CardHeader className="pb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit">
                      {post.category}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="w-full mt-4 group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
