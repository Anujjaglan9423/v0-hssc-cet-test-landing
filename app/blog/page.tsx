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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            CET <span className="text-primary">TEST Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Expert tips, exam strategies, and study resources to help you ace all competitive exams.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                  {post.featured_image_url ? (
                    <img
                      src={post.featured_image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-muted flex items-center justify-center">
                      <FileText className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit">
                      {post.category}
                    </span>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                      {getExcerpt(post.description)}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {getReadTime(post.description)}
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
          ) : (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">No blog posts yet</h2>
              <p className="text-muted-foreground">Check back soon for expert tips and exam strategies!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
