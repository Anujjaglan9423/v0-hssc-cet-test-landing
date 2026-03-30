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

     
                // 🔥 ONLY UI PART UPDATED (keep your logic same)

<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

  {/* 🔥 HERO SECTION PREMIUM */}
  <section className="relative overflow-hidden">
    {blog.featured_image_url && (
      <div className="absolute inset-0">
        <img
          src={blog.featured_image_url}
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
      </div>
    )}

    <div className="relative max-w-5xl mx-auto px-4 py-20 text-white">
      <Badge className="bg-white/20 text-white backdrop-blur">
        {blog.category}
      </Badge>

      <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
        {blog.title}
      </h1>

      <div className="flex flex-wrap gap-4 mt-6 text-sm opacity-90">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {formatDate(blog.created_at)}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {readTime}
        </span>
      </div>
    </div>
  </section>

  {/* 🔥 MAIN CONTENT */}
  <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-12 gap-10">

    {/* 🔥 LEFT CONTENT */}
    <div className="lg:col-span-8 space-y-8">

      {/* 💎 INTRO CARD */}
      <Card className="shadow-lg border-0 rounded-2xl">
        <CardContent className="p-6">
          <div
            className="prose max-w-none prose-lg"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </CardContent>
      </Card>

      {/* 🔥 CTA PREMIUM */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-2">
          🚀 Start Your CET Preparation Today!
        </h3>
        <p className="opacity-90 mb-4">
          Practice with free mock tests and boost your score faster.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Start Free Mock Test →
        </Button>
      </div>

      {/* 🔥 SHARE */}
      <div className="flex justify-between items-center border-t pt-6">
        <p className="text-sm text-muted-foreground">
          Found this helpful?
        </p>
        <ShareButtons title={blog.title} slug={slug} />
      </div>

    </div>

    {/* 🔥 RIGHT SIDEBAR */}
    <div className="lg:col-span-4 space-y-6 sticky top-24 h-fit">

      {/* 💎 QUICK NAV */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Quick Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">Introduction</li>
            <li className="hover:text-primary cursor-pointer">Syllabus</li>
            <li className="hover:text-primary cursor-pointer">Strategy</li>
          </ul>
        </CardContent>
      </Card>

      {/* 💎 RELATED */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Related Articles</h3>
          <div className="space-y-4">
            {relatedBlogs.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="flex gap-3 group">
                  <img
                    src={post.featured_image_url || ""}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <p className="text-sm group-hover:text-primary">
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 💎 CATEGORY */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags?.map((tag, i) => (
              <Badge key={i} className="bg-gray-100 hover:bg-primary hover:text-white">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  </div>
</div>

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
               
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
