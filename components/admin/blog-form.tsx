"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertCircle, Upload, X } from "lucide-react"

interface FormData {
  title: string
  slug: string
  focusKeyword: string
  metaTitle: string
  metaDescription: string
  category: string
  tags: string[]
  description: string
  status: "draft" | "publish"
  featuredImage: File | null
  featuredImagePreview: string | null
}

interface FormErrors {
  [key: string]: string
}

interface BlogFormProps {
  onDataChange?: (data: {
    metaTitle: string
    metaDescription: string
    slug: string
    focusKeyword: string
  }) => void
}

const categories = ["CET", "SSC", "RAILWAY", "STATE EXAM", "Current Affairs", "Study Tips"]

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
}

export function BlogForm({ onDataChange }: BlogFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    slug: "",
    focusKeyword: "",
    metaTitle: "",
    metaDescription: "",
    category: "",
    tags: [],
    description: "",
    status: "draft",
    featuredImage: null,
    featuredImagePreview: null,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [tagInput, setTagInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    const newSlug = generateSlug(title)
    setFormData(prev => ({
      ...prev,
      title,
      slug: newSlug,
    }))
    onDataChange?.({ metaTitle: "", metaDescription: "", slug: newSlug, focusKeyword: "" })
    if (errors.title) {
      setErrors(prev => ({ ...prev, title: "" }))
    }
  }

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const slug = e.target.value
    setFormData(prev => ({
      ...prev,
      slug,
    }))
    onDataChange?.({
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      slug,
      focusKeyword: formData.focusKeyword,
    })
    if (errors.slug) {
      setErrors(prev => ({ ...prev, slug: "" }))
    }
  }

  const handleMetaTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= 60) {
      setFormData(prev => ({
        ...prev,
        metaTitle: value,
      }))
      onDataChange?.({
        metaTitle: value,
        metaDescription: formData.metaDescription,
        slug: formData.slug,
        focusKeyword: formData.focusKeyword,
      })
    }
  }

  const handleMetaDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 160) {
      setFormData(prev => ({
        ...prev,
        metaDescription: value,
      }))
      onDataChange?.({
        metaTitle: formData.metaTitle,
        metaDescription: value,
        slug: formData.slug,
        focusKeyword: formData.focusKeyword,
      })
    }
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setFormData(prev => ({
      ...prev,
      description: value,
    }))
    if (errors.description) {
      setErrors(prev => ({ ...prev, description: "" }))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          featuredImage: file,
          featuredImagePreview: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setFormData(prev => ({
      ...prev,
      featuredImage: null,
      featuredImagePreview: null,
    }))
  }

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput("")
    }
  }

  const handleRemoveTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }))
  }

  const handleKeyPressTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }
    if (!formData.slug.trim()) {
      newErrors.slug = "Slug is required"
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description/Content is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("title", formData.title)
      formDataToSend.append("slug", formData.slug)
      formDataToSend.append("description", formData.description)
      formDataToSend.append("category", formData.category)
      formDataToSend.append("tags", formData.tags.join(","))
      formDataToSend.append("focusKeyword", formData.focusKeyword)
      formDataToSend.append("metaTitle", formData.metaTitle)
      formDataToSend.append("metaDescription", formData.metaDescription)
      formDataToSend.append("status", formData.status)

      if (formData.featuredImage) {
        formDataToSend.append("featuredImage", formData.featuredImage)
      }

      console.log("[v0] Submitting blog post:", formData.title)

      const response = await fetch("/api/blogs", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create blog post")
      }

      const result = await response.json()
      console.log("[v0] Blog post created successfully:", result)

      // Show success message
      alert(`Blog post "${formData.title}" created as ${formData.status}!`)

      // Reset form
      setFormData({
        title: "",
        slug: "",
        focusKeyword: "",
        metaTitle: "",
        metaDescription: "",
        category: "",
        tags: [],
        description: "",
        status: "draft",
        featuredImage: null,
        featuredImagePreview: null,
      })
      setTagInput("")
    } catch (error) {
      console.error("[v0] Error creating blog post:", error)
      alert(`Error: ${error instanceof Error ? error.message : "Failed to create blog post"}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <Card>
        <CardHeader>
          <CardTitle>Post Title</CardTitle>
          <CardDescription>The main title of your blog post</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="Enter blog post title"
              value={formData.title}
              onChange={handleTitleChange}
              className={errors.title ? "border-destructive" : ""}
            />
            {errors.title && (
              <div className="flex items-center gap-2 text-destructive text-sm mt-2">
                <AlertCircle className="w-4 h-4" />
                {errors.title}
              </div>
            )}
            <p className="text-muted-foreground text-sm mt-2">
              Create a compelling title that clearly describes your content
            </p>
          </div>

          <div>
            <Label htmlFor="slug">Slug *</Label>
            <Input
              id="slug"
              placeholder="url-friendly-slug"
              value={formData.slug}
              onChange={handleSlugChange}
              className={errors.slug ? "border-destructive" : ""}
            />
            {errors.slug && (
              <div className="flex items-center gap-2 text-destructive text-sm mt-2">
                <AlertCircle className="w-4 h-4" />
                {errors.slug}
              </div>
            )}
            <p className="text-muted-foreground text-sm mt-2">
              Auto-generated from title, but you can customize it for better SEO
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Featured Image */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Image</CardTitle>
          <CardDescription>Upload a cover image for your blog post</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.featuredImagePreview ? (
            <div className="relative w-full">
              <img
                src={formData.featuredImagePreview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg border border-border"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={handleRemoveImage}
              >
                <X className="w-4 h-4 mr-2" />
                Remove
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <Label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="font-medium text-foreground">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 5MB</p>
              </Label>
            </div>
          )}
          <p className="text-muted-foreground text-sm">
            Use high-quality images to improve engagement and SEO
          </p>
        </CardContent>
      </Card>

      {/* SEO Fields */}
      <Card>
        <CardHeader>
          <CardTitle>SEO Optimization</CardTitle>
          <CardDescription>Optimize your post for search engines</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="focusKeyword">Focus Keyword</Label>
            <Input
              id="focusKeyword"
              placeholder="e.g., competitive exam tips"
              value={formData.focusKeyword}
              onChange={e =>
                setFormData(prev => ({
                  ...prev,
                  focusKeyword: e.target.value,
                }))
              }
            />
            <p className="text-muted-foreground text-sm mt-2">
              The primary keyword your post should rank for. Focus keyword helps SEO ranking and
              content optimization
            </p>
          </div>

          <div>
            <Label htmlFor="metaTitle">
              Meta Title ({formData.metaTitle.length}/60)
            </Label>
            <Input
              id="metaTitle"
              placeholder="How your page appears in search results"
              value={formData.metaTitle}
              onChange={handleMetaTitleChange}
              maxLength={60}
            />
            <p className="text-muted-foreground text-sm mt-2">
              Keep it under 60 characters for optimal display in search results
            </p>
          </div>

          <div>
            <Label htmlFor="metaDescription">
              Meta Description ({formData.metaDescription.length}/160)
            </Label>
            <Textarea
              id="metaDescription"
              placeholder="Brief description shown in search results"
              value={formData.metaDescription}
              onChange={handleMetaDescriptionChange}
              maxLength={160}
              rows={3}
            />
            <p className="text-muted-foreground text-sm mt-2">
              Write a compelling description (60-160 characters) that appears in search results
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Category & Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Organization</CardTitle>
          <CardDescription>Categorize and tag your content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={value => {
              setFormData(prev => ({
                ...prev,
                category: value,
              }))
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-muted-foreground text-sm mt-2">
              Choose the most relevant category for your post
            </p>
          </div>

          <div>
            <Label htmlFor="tags">Tags</Label>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  id="tags"
                  placeholder="Add tags (press Enter to add)"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyPress={handleKeyPressTag}
                />
                <Button
                  type="button"
                  onClick={handleAddTag}
                  variant="outline"
                >
                  Add Tag
                </Button>
              </div>
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(index)}
                        className="hover:text-primary/70"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Add multiple tags to improve discoverability and content organization
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
          <CardDescription>Write your blog post content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="description">Description / Content *</Label>
            <Textarea
              id="description"
              placeholder="Write your blog post content here. Support for rich formatting coming soon."
              value={formData.description}
              onChange={handleDescriptionChange}
              rows={10}
              className={`resize-none font-mono text-sm ${errors.description ? "border-destructive" : ""}`}
            />
            {errors.description && (
              <div className="flex items-center gap-2 text-destructive text-sm mt-2">
                <AlertCircle className="w-4 h-4" />
                {errors.description}
              </div>
            )}
            <p className="text-muted-foreground text-sm mt-2">
              Write clear, engaging content that provides value to your readers. Include your focus
              keyword naturally throughout the content
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Status & Submit */}
      <Card>
        <CardHeader>
          <CardTitle>Publication Status</CardTitle>
          <CardDescription>Choose how to save your blog post</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={value => {
              setFormData(prev => ({
                ...prev,
                status: value as "draft" | "publish",
              }))
            }}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="publish">Publish</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-muted-foreground text-sm mt-2">
              Save as draft to edit later, or publish to make it live immediately
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Creating..." : `Save as ${formData.status === "draft" ? "Draft" : "Published"}`}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData({
                  title: "",
                  slug: "",
                  focusKeyword: "",
                  metaTitle: "",
                  metaDescription: "",
                  category: "",
                  tags: [],
                  description: "",
                  status: "draft",
                  featuredImage: null,
                  featuredImagePreview: null,
                })
                setTagInput("")
                setErrors({})
              }}
            >
              Clear Form
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
