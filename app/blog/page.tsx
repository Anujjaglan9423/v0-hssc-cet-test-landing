import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { BookOpen, ArrowLeft, Calendar, Clock, ArrowRight, FileText } from "lucide-react"
import Footer from "@/components/footer"
import { createClient } from "@/lib/supabase/server"

export default async function BlogPage() {
  const supabase = await createClient()

  const { data: posts = [] } = await supabase
    .from("blogs")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false })

  const getReadTime = (content: string) => {
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)
    return `${readTime} min read`
  }

  const getExcerpt = (content: string, maxLength = 150) => {
    const text = content.replace(/<[^>]*>/g, "")
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            CET <span className="text-primary">TEST Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Expert insights, proven exam strategies, and comprehensive study resources to help you excel in all competitive exams.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <>
              {/* Featured Post */}
              {posts[0] && (
                <div className="mb-20 group cursor-pointer">
                  <Link href={`/blog/${posts[0].slug}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        {posts[0].featured_image_url ? (
                          <img
                            src={posts[0].featured_image_url}
                            alt={posts[0].title}
                            className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-80 md:h-96 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                            <FileText className="w-20 h-20 text-muted-foreground opacity-20" />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="mb-4 flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm font-medium text-primary uppercase tracking-wider">Featured</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight text-balance group-hover:text-primary transition-colors">
                          {posts[0].title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {getExcerpt(posts[0].description, 200)}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {new Date(posts[0].created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            {getReadTime(posts[0].description)}
                          </span>
                        </div>
                        <div className="mt-8">
                          <Button size="lg" className="group/btn">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Grid Posts */}
              {posts.length > 1 && (
                <>
                  <div className="my-12 border-t border-border/50" />
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <Card className="border-border bg-card hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
                          <div className="relative overflow-hidden h-56 bg-muted">
                            {post.featured_image_url ? (
                              <img
                                src={post.featured_image_url}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FileText className="w-12 h-12 text-muted-foreground opacity-30" />
                              </div>
                            )}
                          </div>
                          <CardHeader className="pb-2">
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit">
                              {post.category}
                            </span>
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col">
                            <h3 className="text-xl font-serif font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-1 leading-relaxed">
                              {getExcerpt(post.description)}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {getReadTime(post.description)}
                              </span>
                            </div>
                            <div className="mt-6 flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                              Read More
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">No blog posts yet</h2>
              <p className="text-muted-foreground">Check back soon for expert tips and exam strategies!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
