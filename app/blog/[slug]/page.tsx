'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RichTextDisplay } from '@/components/admin/rich-text-display'
import {
  BookOpen,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ChevronRight,
  Zap,
  ArrowRight,
} from 'lucide-react'
import Footer from '@/components/footer'

// Related articles data - same as blog list
const allBlogPosts = [
  {
    slug: 'top-10-tips-crack-competitive-exam-first-attempt',
    title: 'Top 10 Tips to Crack Any Competitive Exam in First Attempt',
    excerpt: 'Learn proven strategies from toppers who cleared competitive exams with flying colors.',
    image: '/success-tips-study-motivation.jpg',
    category: 'Tips & Tricks',
  },
  {
    slug: 'current-affairs-competitive-exams-2026',
    title: 'Important Current Affairs for Competitive Exams 2026',
    excerpt: 'Stay updated with the most important current affairs topics expected in competitive exams 2026.',
    image: '/current-affairs-news.jpg',
    category: 'Current Affairs',
  },
  {
    slug: 'haryana-gk-districts-history-culture',
    title: 'Haryana GK: Districts, History & Culture',
    excerpt: 'Complete guide to Haryana General Knowledge covering districts, history, culture.',
    image: '/haryana-culture-heritage.jpg',
    category: 'State GK',
  },
  {
    slug: 'math-shortcuts-quick-calculation-tricks',
    title: 'Math Shortcuts: Quick Calculation Tricks for All Exams',
    excerpt: 'Master these mathematical shortcuts to solve quantitative aptitude questions faster.',
    image: '/mathematics-calculation.jpg',
    category: 'Mathematics',
  },
]

interface DisplayPost {
  title: string
  content: string
  date: string
  readTime: string
  category: string
  image: string
  author: string
}

export default function BlogDetailWrapper({ params }: { params: Promise<{ slug: string }> }) {
  const [paramsData, setParamsData] = useState<{ slug: string } | null>(null)

  // Unwrap params
  Promise.resolve(params).then(setParamsData)

  if (!paramsData) return <div>Loading...</div>

  return <BlogDetailPage slug={paramsData.slug} />
}

function BlogDetailPage({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Mock display post for demo
  const displayPost: DisplayPost = {
    title: 'Competitive Exams 2026: Complete Syllabus and Exam Pattern',
    date: 'Dec 15, 2025',
    readTime: '8 min read',
    category: 'Exam Guide',
    image: '/exam-syllabus-study-guide.jpg',
    author: 'CET TEST Team',
    content: `
      <h2>Competitive Exam Patterns 2026</h2>
      <p>Competitive exams have different structures depending on the exam type...</p>
      <h3>Common Exam Structures</h3>
      <ul>
        <li><strong>Total Questions:</strong> Varies by exam (80-100 typically)</li>
        <li><strong>Total Marks:</strong> Same as questions in most exams</li>
      </ul>
    `,
  }

  // Get related posts
  const relatedPosts = useMemo(() => {
    return allBlogPosts.filter((post) => post.slug !== slug).slice(0, 3)
  }, [slug])

  // Table of contents
  const tableOfContents = [
    { id: 'exam-patterns', title: 'Competitive Exam Patterns' },
    { id: 'exam-structures', title: 'Common Exam Structures' },
    { id: 'subject-distribution', title: 'Subject-wise Distribution' },
    { id: 'syllabus-coverage', title: 'Detailed Syllabus Coverage' },
  ]

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnTwitter = () => {
    const text = `Check out: ${displayPost.title}`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`
    window.open(url, '_blank')
  }

  const shareOnLinkedin = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
    window.open(url, '_blank')
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{displayPost.category}</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{displayPost.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{displayPost.author}</p>
                <p className="text-xs text-muted-foreground">Expert Contributor</p>
              </div>
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{displayPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{displayPost.readTime}</span>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={shareOnTwitter}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </button>
              <button
                onClick={shareOnLinkedin}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </button>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                title="Copy link"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-12">
        <img
          src={displayPost.image || '/placeholder.svg'}
          alt={displayPost.title}
          className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Main Content with Sidebar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                          activeSection === item.id
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>

                  {/* Author Bio Card */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{displayPost.author}</p>
                        <p className="text-xs text-muted-foreground">Expert in competitive exam preparation</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Dedicated to helping students master competitive exams with proven strategies and comprehensive study resources.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow Author
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="max-w-3xl">
              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <RichTextDisplay content={displayPost.content} />
              </div>

              {/* Key Takeaways */}
              <Card className="border-primary/30 bg-primary/5 mb-12">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        Understand your exam pattern thoroughly before starting preparation
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        Create a realistic study schedule covering all subjects proportionally
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">
                        Practice regularly with mock tests to improve accuracy and speed
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Primary CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Excel in Your Exam?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of successful students using our comprehensive test series and expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/tests" className="flex-1">
                    <Button className="w-full">Start Free Trial</Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Get Expert Advice
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                        <Card className="border-border hover:border-primary/50 hover:shadow-lg transition-all">
                          <CardContent className="p-5 flex gap-5">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-24 h-24 rounded-lg object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <p className="text-xs font-semibold text-primary mb-1">{post.category}</p>
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                  {post.title}
                                </h4>
                              </div>
                              <div className="flex items-center gap-2 text-primary">
                                <span className="text-sm font-medium">Read More</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3">Get Weekly Study Tips</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to get expert tips, exam strategies, and the latest current affairs delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
            />
            <Button className="whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
