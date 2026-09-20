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
// Dynamic Supabase import intentionally disabled while editorial content is static.
// import { createAdminClient } from "@/lib/supabase/server"
import type { Metadata } from "next"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

interface Blog {
  id: string
  title: string
  slug: string
  description: string
  content?: string
  status?: string
  meta_title?: string
  meta_description?: string
  focus_keyword?: string
  tags?: string[]
  category: string
  featured_image_url: string | null
  created_at: string
  updated_at?: string
}

interface PageProps {
  params: Promise<{ slug: string }>
}

const staticBlogs: Blog[] = [
  {
    id: "cet-preparation-plan",
    title: "How to build a practical Haryana CET preparation plan",
    slug: "haryana-cet-preparation-plan",
    description: "A subject-wise plan for steady preparation.",
    content: `<h2>Start with the official syllabus</h2><p>Before choosing a mock test, read the latest official notification and syllabus. Make a checklist of subjects, note the marking scheme, and confirm the examination language and eligibility requirements.</p><h2>Use a weekly study cycle</h2><p>Divide your week between concept learning, Haryana GK, quantitative practice, reasoning, language revision, and one timed mock test. Keep one session for reviewing mistakes rather than only attempting new questions.</p><h2>Review every test</h2><p>After a test, classify each mistake as a knowledge gap, calculation error, reading error, or time-management issue. Revisit the relevant topic and attempt similar questions after a short interval.</p><h2>A realistic daily routine</h2><ul><li>Read one focused topic and make brief notes.</li><li>Attempt 20 to 30 practice questions without guessing blindly.</li><li>Record incorrect answers in a revision notebook.</li><li>End the session by revising yesterday's notes.</li></ul><p>Consistency and honest review are more useful than collecting many unfinished resources.</p>`,
    category: "Haryana CET", featured_image_url: "/current-affairs-news.jpg", created_at: "2026-09-10T00:00:00.000Z", tags: ["HSSC", "Study Strategy"],
  },
  {
    id: "mock-test-mistakes",
    title: "Five common mock-test mistakes and how to correct them",
    slug: "common-mock-test-mistakes",
    description: "Learn how to turn practice tests into focused revision.",
    content: `<h2>Why mock-test review matters</h2><p>A score is only one part of a practice test. The real value comes from understanding why an answer was wrong and what action will prevent the same mistake.</p><h2>Common mistakes</h2><ol><li><strong>Starting without instructions:</strong> check the time limit, marks, and negative marking before you begin.</li><li><strong>Spending too long on one question:</strong> mark it for review and protect time for questions you can solve confidently.</li><li><strong>Guessing without a reason:</strong> attempt only when you can eliminate options or the official marking scheme supports it.</li><li><strong>Ignoring incorrect answers:</strong> write the correct method and revise the underlying topic.</li><li><strong>Taking tests without a plan:</strong> schedule tests after topic study so the result has a clear learning purpose.</li></ol><h2>Build a mistake log</h2><p>Write the question topic, your selected answer, the correct answer, and the reason for the error. Review this log every few days.</p>`,
    category: "Study Strategy", featured_image_url: "/current-affairs-news.jpg", created_at: "2026-09-07T00:00:00.000Z", tags: ["Practice", "Revision"],
  },
  {
    id: "haryana-gk-revision",
    title: "Haryana GK revision checklist for competitive exams",
    slug: "haryana-gk-revision-checklist",
    description: "Organise Haryana history, geography, culture, administration, economy, and current affairs.",
    content: `<h2>Build your Haryana GK checklist</h2><p>Organise your notes into fixed sections instead of reading disconnected facts. This makes revision measurable and helps you identify missing areas.</p><h2>Core sections</h2><ul><li>History, important sites, movements, and personalities.</li><li>Districts, rivers, soils, agriculture, climate, and geography.</li><li>Folk traditions, festivals, language, sports, and cultural institutions.</li><li>State administration, constitutional offices, schemes, and public institutions.</li><li>Economy, industries, crops, transport, and major development projects.</li><li>Recent state appointments, awards, schemes, and official announcements.</li></ul><h2>How to revise</h2><p>Study one section, answer a short practice set, and then explain the topic in your own words. Always verify changing facts against an official source before relying on them.</p>`,
    category: "Haryana GK", featured_image_url: "/current-affairs-news.jpg", created_at: "2026-09-03T00:00:00.000Z", tags: ["Haryana", "GK"],
  },
]

function getBlog(slug: string): Blog | null {
  return staticBlogs.find((blog) => blog.slug === slug) || null
}

function getRelatedBlogs(category: string, currentSlug: string): Blog[] {
  return staticBlogs.filter((blog) => blog.category === category && blog.slug !== currentSlug).slice(0, 3)
}

function getRecentBlogs(currentSlug: string): Blog[] {
  return staticBlogs.filter((blog) => blog.slug !== currentSlug).slice(0, 4)
}

// Revalidate blog pages every 1 hour - cached at CDN for 1 hour, stale for 24h
export const revalidate = 3600
// Dynamic rendering is not needed while blog articles are hardcoded.
export const dynamic = "force-static"

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
      images: blog.featured_image_url && !blog.featured_image_url.includes("gov.in") ? [blog.featured_image_url] : [],
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.description?.slice(0, 160),
      images: blog.featured_image_url && !blog.featured_image_url.includes("gov.in") ? [blog.featured_image_url] : [],
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
  const readTime = calculateReadTime(blog.content || blog.description)
  const isExamAlert = blog.category === "Exam Alert"
  const sourceUrl = isExamAlert && blog.featured_image_url?.startsWith("http") ? blog.featured_image_url : null
  const authority = blog.tags?.find((tag) => ["HSSC", "HPSC", "UKSSSC", "UKPSC", "SSC", "Railway"].includes(tag)) || "Official recruitment authority"
  const safeImageUrl = blog.featured_image_url && !blog.featured_image_url.includes("gov.in") && !blog.featured_image_url.includes(".pdf") && !isExamAlert ? blog.featured_image_url : "/current-affairs-news.jpg"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <FooterLinkNavbar />

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Title Section */}
            <div>
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
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-6 sm:mb-8">
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

            {/* Featured Image with Overlay */}
            <div className="hidden lg:block">
                <div className="sticky top-24 w-full h-80 relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-10" />
                  <img
                    src={safeImageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-border/50" />
                </div>
              </div>
          </div>

          {/* Mobile Image - Below Title */}
          <div className="lg:hidden mt-8 sm:mt-12">
              <div className="w-full h-64 sm:h-72 relative rounded-lg sm:rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-10" />
                <img
                  src={safeImageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-lg sm:rounded-xl ring-1 ring-border/50" />
              </div>
            </div>
          {isExamAlert && (
            <div className="mt-8 lg:mt-0 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-card p-5 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 text-primary"><BookOpen className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wide">Official exam notice</span></div>
              <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">{authority} notification details</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">This page summarizes the latest notice published for {authority}. Check the official source for the notification PDF, eligibility, dates, vacancies, syllabus and application instructions.</p>
              {sourceUrl && <a href={sourceUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto">Open official notice <ArrowRight className="h-4 w-4" /></a>}
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
                  prose-h2:text-xl sm:text-2xl prose-h2:mt-12 sm:prose-h2:mt-14 prose-h2:mb-5 sm:prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4 sm:prose-h2:pl-5
                  prose-h3:text-lg sm:text-xl prose-h3:mt-8 sm:prose-h3:mt-10 prose-h3:mb-4 sm:prose-h3:mb-5 prose-h3:font-semibold
                  prose-h4:text-base sm:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold
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
                dangerouslySetInnerHTML={{ __html: blog.content || `<h2>${blog.title}</h2><p>${blog.description}</p>` }}
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
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 text-balance">
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
              <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-24">
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
                              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden flex-shrink-0 bg-muted ring-1 ring-border/50">
                                <img
                                  src={post.featured_image_url && !post.featured_image_url.includes("gov.in") && !post.featured_image_url.includes(".pdf") ? post.featured_image_url : "/current-affairs-news.jpg"}
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
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

      <FooterLinkFooter />
    </div>
  )
}
