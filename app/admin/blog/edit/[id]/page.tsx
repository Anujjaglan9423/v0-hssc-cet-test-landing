"use client"

import { useState, useEffect, use } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowLeft,
  Save,
  Eye,
  Loader2,
  Upload,
  X,
  Search,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { BlogEditor } from "@/components/admin/blog-editor"

const CATEGORIES = [
  "CET",
  "Current Affairs",
  "Study Tips",
  "Exam Guide",
  "Mathematics",
  "English",
  "Reasoning",
  "General Knowledge",
  "Haryana GK",
  "SSC",
  "Railway",
]

interface FormErrors {
  title?: string
  slug?: string
  description?: string
}

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [errors, setErrors] = useState<FormErrors>({})

  // Form state
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [focusKeyword, setFocusKeyword] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState("")
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null)
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("draft")

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`)
        if (response.ok) {
          const data = await response.json()
          const blog = data.blog

          setTitle(blog.title || "")
          setSlug(blog.slug || "")
          setFocusKeyword(blog.focus_keyword || "")
          setMetaTitle(blog.meta_title || "")
          setMetaDescription(blog.meta_description || "")
          setCategory(blog.category || "")
          setTags(blog.tags?.join(", ") || "")
          setFeaturedImagePreview(blog.featured_image_url || null)
          setDescription(blog.description || "")
          setStatus(blog.status || "draft")
        }
      } catch (error) {
        console.error("Error fetching blog:", error)
      } finally {
        setFetching(false)
      }
    }

    fetchBlog()
  }, [id])

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFeaturedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setFeaturedImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFeaturedImage(null)
    setFeaturedImagePreview(null)
  }

  // Validation
  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!slug.trim()) {
      newErrors.slug = "Slug is required"
    } else if (!/^[a-z0-9-]+$/.test(slug)) {
      newErrors.slug = "Slug can only contain lowercase letters, numbers, and hyphens"
    }

    if (!description.trim() || description === "<p></p>") {
      newErrors.description = "Description/Content is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setLoading(true)

    try {
      let featuredImageUrl = featuredImagePreview

      // Upload new image if present
      if (featuredImage) {
        const formData = new FormData()
        formData.append("file", featuredImage)

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (uploadResponse.ok) {
          const uploadData = await uploadResponse.json()
          featuredImageUrl = uploadData.url
        }
      }

      // Update blog post
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          description,
          status,
          meta_title: metaTitle || title,
          meta_description: metaDescription,
          focus_keyword: focusKeyword,
          tags: tags.split(",").map(t => t.trim()).filter(Boolean),
          category,
          featured_image_url: featuredImageUrl,
        }),
      })

      if (response.ok) {
        router.push("/admin/blog")
      } else {
        const data = await response.json()
        if (data.error === "Slug already exists") {
          setErrors({ slug: "This slug is already in use" })
        }
      }
    } catch (error) {
      console.error("Error updating blog:", error)
    } finally {
      setLoading(false)
    }
  }

  // SEO Analysis
  const getSEOScore = () => {
    let score = 0
    const checks = []

    if (title.length >= 30 && title.length <= 60) {
      score += 20
      checks.push({ text: "Title length is optimal (30-60 chars)", passed: true })
    } else {
      checks.push({ text: "Title should be 30-60 characters", passed: false })
    }

    if (metaDescription.length >= 120 && metaDescription.length <= 160) {
      score += 20
      checks.push({ text: "Meta description length is optimal (120-160 chars)", passed: true })
    } else {
      checks.push({ text: "Meta description should be 120-160 characters", passed: false })
    }

    if (focusKeyword && title.toLowerCase().includes(focusKeyword.toLowerCase())) {
      score += 20
      checks.push({ text: "Focus keyword found in title", passed: true })
    } else if (focusKeyword) {
      checks.push({ text: "Add focus keyword to title", passed: false })
    }

    if (focusKeyword && metaDescription.toLowerCase().includes(focusKeyword.toLowerCase())) {
      score += 20
      checks.push({ text: "Focus keyword found in meta description", passed: true })
    } else if (focusKeyword) {
      checks.push({ text: "Add focus keyword to meta description", passed: false })
    }

    if (featuredImagePreview) {
      score += 20
      checks.push({ text: "Featured image added", passed: true })
    } else {
      checks.push({ text: "Add a featured image", passed: false })
    }

    return { score, checks }
  }

  const seoAnalysis = getSEOScore()

  if (fetching) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/admin/blog")} className="cursor-pointer">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Edit Blog Post</h1>
            <p className="text-muted-foreground mt-1">Update your blog article</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="publish">Published</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSubmit} disabled={loading} className="cursor-pointer">
            {loading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save Changes
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Update the main details for your blog post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter blog post title"
                    className={errors.title ? "border-destructive" : ""}
                  />
                  {errors.title && (
                    <p className="text-sm text-destructive">{errors.title}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">
                    Slug <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm">/blog/</span>
                    <Input
                      id="slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                      placeholder="blog-post-url"
                      className={errors.slug ? "border-destructive" : ""}
                    />
                  </div>
                  {errors.slug && (
                    <p className="text-sm text-destructive">{errors.slug}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="tag1, tag2, tag3"
                    />
                    <p className="text-xs text-muted-foreground">Separate tags with commas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
                <CardDescription>Upload a cover image for your blog post</CardDescription>
              </CardHeader>
              <CardContent>
                {featuredImagePreview ? (
                  <div className="relative">
                    <img
                      src={featuredImagePreview}
                      alt="Featured preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 cursor-pointer"
                      onClick={removeImage}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">Click to upload image</span>
                    <span className="text-xs text-muted-foreground mt-1">PNG, JPG, WebP up to 5MB</span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Content <span className="text-destructive">*</span>
                </CardTitle>
                <CardDescription>Write your blog post content using the rich text editor</CardDescription>
              </CardHeader>
              <CardContent>
                <BlogEditor
                  content={description}
                  onChange={setDescription}
                  placeholder="Start writing your blog post..."
                />
                {errors.description && (
                  <p className="text-sm text-destructive mt-2">{errors.description}</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  SEO Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="focusKeyword">Focus Keyword</Label>
                  <Input
                    id="focusKeyword"
                    value={focusKeyword}
                    onChange={(e) => setFocusKeyword(e.target.value)}
                    placeholder="Enter focus keyword"
                  />
                  <p className="text-xs text-muted-foreground">
                    The main keyword you want to rank for
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaTitle">
                    Meta Title
                    <span className="text-muted-foreground ml-2">
                      ({metaTitle.length}/60)
                    </span>
                  </Label>
                  <Input
                    id="metaTitle"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value.slice(0, 60))}
                    placeholder="SEO title (defaults to post title)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaDescription">
                    Meta Description
                    <span className="text-muted-foreground ml-2">
                      ({metaDescription.length}/160)
                    </span>
                  </Label>
                  <Textarea
                    id="metaDescription"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value.slice(0, 160))}
                    placeholder="Brief description for search engines"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Google Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Google Preview
                </CardTitle>
                <CardDescription>How your post will appear in search results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/50 rounded-lg space-y-1">
                  <p className="text-primary text-sm truncate">
                    cettest.com/blog/{slug || "your-post-slug"}
                  </p>
                  <h4 className="text-foreground font-medium truncate">
                    {metaTitle || title || "Your Blog Post Title"}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {metaDescription || "Add a meta description to see how it will appear in Google search results..."}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SEO Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  SEO Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${seoAnalysis.score >= 80 ? "bg-accent/20 text-accent" :
                      seoAnalysis.score >= 50 ? "bg-yellow-500/20 text-yellow-600" :
                        "bg-destructive/20 text-destructive"
                    }`}>
                    {seoAnalysis.score}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {seoAnalysis.score >= 80 ? "Great!" :
                        seoAnalysis.score >= 50 ? "Good" : "Needs Work"}
                    </p>
                    <p className="text-xs text-muted-foreground">SEO Score</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {seoAnalysis.checks.map((check, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      {check.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span className={check.passed ? "text-foreground" : "text-muted-foreground"}>
                        {check.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
