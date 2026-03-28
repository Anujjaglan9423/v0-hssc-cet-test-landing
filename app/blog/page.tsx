"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, ArrowLeft, Calendar, Clock, ArrowRight, Search, Zap, TrendingUp } from "lucide-react"
import Footer from "@/components/footer"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
}

// Fallback posts for when database is empty
const fallbackPosts: BlogPost[] = [
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
  {
    slug: "haryana-gk-districts-history-culture",
    title: "Haryana GK: Districts, History & Culture",
    excerpt: "Complete guide to Haryana General Knowledge covering districts, history, culture, and important facts.",
    date: "Nov 28, 2025",
    readTime: "12 min read",
    category: "State GK",
    image: "/haryana-culture-heritage.jpg",
  },
  {
    slug: "math-shortcuts-quick-calculation-tricks",
    title: "Math Shortcuts: Quick Calculation Tricks for All Exams",
    excerpt:
      "Master these mathematical shortcuts to solve quantitative aptitude questions faster in any competitive exam.",
    date: "Nov 20, 2025",
    readTime: "7 min read",
    category: "Mathematics",
    image: "/mathematics-calculation.jpg",
  },
  {
    slug: "english-grammar-rules-competitive-aspirant",
    title: "English Grammar Rules Every Competitive Aspirant Must Know",
    excerpt: "Essential English grammar rules and common errors to avoid in all competitive exam English sections.",
    date: "Nov 15, 2025",
    readTime: "9 min read",
    category: "English",
    image: "/english-grammar-learning.jpg",
  },
]

const categories = ["All", "Exam Guide", "Tips & Tricks", "Current Affairs", "State GK", "Mathematics", "English"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const posts = fallbackPosts

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const featuredPost = posts[0]
  const recentPosts = filteredPosts.slice(0, 6)

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
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Expert Resources for Success</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Exams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore comprehensive guides, proven strategies, and insider tips to excel in competitive exams.
            </p>
          </div>

          {/* Featured Post - Large Card */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="block group mb-12">
              <Card className="overflow-hidden border-border hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-sm font-bold text-primary uppercase tracking-wider">Featured Article</span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4 line-clamp-3">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )}
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base bg-background border-border rounded-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {recentPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">No articles found matching your search.</p>
              <Button onClick={() => { setSelectedCategory("All"); setSearchQuery("") }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`} className="group">
                    <Card className="border-border bg-card h-full overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <div className="mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors flex-grow">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">Never Miss an Update</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest study tips, exam strategies, and current affairs delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background border-border rounded-lg"
            />
            <Button className="whitespace-nowrap">Subscribe Now</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">We&apos;ll never share your email. Unsubscribe at any time.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
