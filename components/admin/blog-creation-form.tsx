"use client"

import { useState, useRef, useEffect } from "react"
import { createBlog, updateBlog } from "@/lib/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2, Upload, X } from "lucide-react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false, loading: () => <div>Loading editor...</div> })

interface BlogCreationFormProps {
  initialData?: {
    id: string
    title: string
    slug: string
    focus_keyword: string
    meta_title: string
    meta_description: string
    category: string
    tags: string[]
    featured_image_url?: string
    description: string
    status: "draft" | "published"
  }
}

const CATEGORIES = ["CET", "Current Affairs", "Study Tips", "Exam Guide", "Career Advice", "Technology"]

export function BlogCreationForm({ initialData }: BlogCreationFormProps) {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Form state
  const [title, setTitle] = useState(initialData?.title || "")
  const [slug, setSlug] = useState(initialData?.slug || "")
  const [focusKeyword, setFocusKeyword] = useState(initialData?.focus_keyword || "")
  const [metaTitle, setMetaTitle] = useState(initialData?.meta_title || "")
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || "")
  const [category, setCategory] = useState(initialData?.category || "")
  const [tagsInput, setTagsInput] = useState(initialData?.tags?.join(", ") || "")
  const [content, setContent] = useState(initialData?.description || "")
  const [status, setStatus] = useState<"draft" | "published">(initialData?.status || "draft")
  const [featuredImage, setFeaturedImage] = useState<string | null>(initialData?.featured_image_url || null)
  const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null)

  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-generate slug from title
  useEffect(() => {
    if (title && !initialData) {
      const generatedSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
      setSlug(generatedSlug)
    }
  }, [title, initialData])

  // Update meta title from title
  useEffect(() => {
    if (title && !initialData) {
      const shortened = title.substring(0, 60)
      setMetaTitle(shortened + (shortened.length < title.length ? "..." : ""))
    }
  }, [title, initialData])

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFeaturedImageFile(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        setFeaturedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeFeaturedImage = () => {
    setFeaturedImage(null)
    setFeaturedImageFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!title.trim()) newErrors.title = "Title is required"
    if (!slug.trim()) newErrors.slug = "Slug is required"
    if (!content.trim() || content.trim() === "<p><br></p>") newErrors.content = "Content is required"
    if (!category) newErrors.category = "Category is required"
    if (!metaTitle.trim()) newErrors.metaTitle = "Meta title is required"
    if (!metaDescription.trim()) newErrors.metaDescription = "Meta description is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the validation errors")
      return
    }

    setIsLoading(true)

    try {
      // Upload featured image if present
      let imageUrl = featuredImage
      if (featuredImageFile) {
        // For now, we'll use the data URL
        // In production, you'd upload to a cloud storage service
        imageUrl = featuredImage
      }

      const blogData = {
        title: title.trim(),
        slug: slug.trim(),
        focus_keyword: focusKeyword.trim(),
        meta_title: metaTitle.trim(),
        meta_description: metaDescription.trim(),
        category: category,
        tags: tagsInput
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
        featured_image_url: imageUrl || undefined,
        description: content,
        status: status,
      }

      let result
      if (initialData) {
        result = await updateBlog(initialData.id, blogData)
      } else {
        result = await createBlog(blogData)
      }

      if (result.success) {
        toast.success(initialData ? "Blog post updated successfully!" : "Blog post created successfully!")
        router.push("/admin/blog")
        router.refresh()
      } else {
        toast.error(result.error || "Failed to save blog post")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("An error occurred while saving the blog post")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isMounted) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <Card className="p-6 space-y-3">
            <div>
              <Label htmlFor="title" className="text-base font-semibold">
                Blog Title *
              </Label>
              <p className="text-xs text-muted-foreground mt-1">The main heading of your blog post</p>
            </div>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="text-lg"
            />
            {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
          </Card>

          {/* Slug */}
          <Card className="p-6 space-y-3">
            <div>
              <Label htmlFor="slug" className="text-base font-semibold">
                URL Slug *
              </Label>
              <p className="text-xs text-muted-foreground mt-1">Auto-generated from title, but you can edit it</p>
            </div>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="blog-post-url"
              className="font-mono"
            />
            {errors.slug && <p className="text-xs text-destructive">{errors.slug}</p>}
          </Card>

          {/* Focus Keyword */}
          <Card className="p-6 space-y-3">
            <div>
              <Label htmlFor="keyword" className="text-base font-semibold">
                Focus Keyword
              </Label>
              <p className="text-xs text-muted-foreground mt-1">Main keyword for SEO optimization</p>
            </div>
            <Input
              id="keyword"
              value={focusKeyword}
              onChange={(e) => setFocusKeyword(e.target.value)}
              placeholder="e.g., HSSC CET exam tips"
            />
          </Card>

          {/* Category & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-3">
              <div>
                <Label htmlFor="category" className="text-base font-semibold">
                  Category *
                </Label>
                <p className="text-xs text-muted-foreground mt-1">Post category</p>
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
            </Card>

            <Card className="p-6 space-y-3">
              <div>
                <Label htmlFor="status" className="text-base font-semibold">
                  Status
                </Label>
                <p className="text-xs text-muted-foreground mt-1">Publish or save as draft</p>
              </div>
              <Select value={status} onValueChange={(value: any) => setStatus(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </Card>
          </div>

          {/* Tags */}
          <Card className="p-6 space-y-3">
            <div>
              <Label htmlFor="tags" className="text-base font-semibold">
                Tags
              </Label>
              <p className="text-xs text-muted-foreground mt-1">Comma-separated tags (e.g., exam, tips, study)</p>
            </div>
            <Input
              id="tags"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="exam, tips, study, preparation"
            />
          </Card>

          {/* Featured Image */}
          <Card className="p-6 space-y-3">
            <div>
              <Label className="text-base font-semibold">Featured Image</Label>
              <p className="text-xs text-muted-foreground mt-1">Thumbnail image for the blog post</p>
            </div>
            {featuredImage ? (
              <div className="relative inline-block">
                <img src={featuredImage} alt="Featured" className="w-full max-w-xs h-auto rounded-lg" />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={removeFeaturedImage}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                <p className="font-medium text-foreground">Click to upload image</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WebP up to 5MB</p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFeaturedImageChange}
              className="hidden"
            />
          </Card>

          {/* Content */}
          <Card className="p-6 space-y-3">
            <div>
              <Label className="text-base font-semibold">Content *</Label>
              <p className="text-xs text-muted-foreground mt-1">Main blog post content with rich text editor</p>
            </div>
            <div className="border border-border rounded-lg overflow-hidden bg-white dark:bg-slate-950">
              <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    [{ color: [] }, { background: [] }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
                placeholder="Write your blog content here..."
                className="h-96"
              />
            </div>
            {errors.content && <p className="text-xs text-destructive">{errors.content}</p>}
          </Card>
        </div>

        {/* Right Column - SEO Preview & Meta */}
        <div className="space-y-6">
          {/* Submit Buttons */}
          <div className="space-y-2 sticky top-4">
            <Button type="submit" disabled={isLoading} className="w-full gap-2 h-11">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                initialData ? "Update Post" : "Create Post"
              )}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()} className="w-full bg-transparent">
              Cancel
            </Button>
          </div>

          {/* Meta Title */}
          <Card className="p-6 space-y-3">
            <Label className="text-base font-semibold">Meta Title *</Label>
            <div className="relative">
              <Input
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value.substring(0, 60))}
                placeholder="Meta title for search results"
                maxLength={60}
              />
              <p className="text-xs text-muted-foreground mt-2">{metaTitle.length}/60 characters</p>
            </div>
            {errors.metaTitle && <p className="text-xs text-destructive">{errors.metaTitle}</p>}
          </Card>

          {/* Meta Description */}
          <Card className="p-6 space-y-3">
            <Label className="text-base font-semibold">Meta Description *</Label>
            <div className="relative">
              <Textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value.substring(0, 160))}
                placeholder="Meta description for search results"
                maxLength={160}
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-2">{metaDescription.length}/160 characters</p>
            </div>
            {errors.metaDescription && <p className="text-xs text-destructive">{errors.metaDescription}</p>}
          </Card>

          {/* SEO Preview */}
          <Card className="p-6 space-y-3 bg-muted/50 border-primary/20">
            <Label className="text-base font-semibold">Google Preview</Label>
            <p className="text-xs text-muted-foreground mb-3">How your post appears in search results:</p>
            <div className="space-y-2 text-sm">
              <p className="text-primary font-medium truncate">{metaTitle || "Your meta title"}</p>
              <p className="text-muted-foreground text-xs">
                {metaDescription || "Your meta description will appear here"}
              </p>
              <p className="text-xs text-muted-foreground">
                example.com/blog/{slug || "your-slug"}
              </p>
            </div>
          </Card>

          {/* SEO Tips */}
          <Card className="p-6 space-y-3 border-amber-500/20 bg-amber-500/5">
            <h3 className="font-semibold text-sm">SEO Tips</h3>
            <ul className="text-xs space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span>•</span>
                <span>Meta title should be 50-60 characters for best display</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Meta description should be 150-160 characters</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Include focus keyword in title and content</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Use descriptive slug with hyphens</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Add relevant tags and categories</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </form>
  )
}
