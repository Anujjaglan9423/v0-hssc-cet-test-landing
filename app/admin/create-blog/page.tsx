"use client"

import { useState } from "react"
import { BlogForm } from "@/components/admin/blog-form"
import { SEOPreview } from "@/components/admin/seo-preview"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateBlogPage() {
  const [previewData, setPreviewData] = useState({
    metaTitle: "",
    metaDescription: "",
    slug: "",
    focusKeyword: "",
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="mb-8">
        <Link href="/admin">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Admin
          </Button>
        </Link>

        <div>
          <h1 className="text-3xl font-bold text-foreground">Create Blog Post</h1>
          <p className="text-muted-foreground mt-2">
            Create and publish new blog posts with built-in SEO optimization and preview
          </p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Form (2 columns) */}
        <div className="lg:col-span-2">
          <BlogForm onDataChange={setPreviewData} />
        </div>

        {/* Right Column - SEO Preview & Tips (1 column) */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <SEOPreview
              metaTitle={previewData.metaTitle}
              metaDescription={previewData.metaDescription}
              slug={previewData.slug}
              focusKeyword={previewData.focusKeyword}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
