"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Lightbulb } from "lucide-react"

interface SEOPreviewProps {
  metaTitle: string
  metaDescription: string
  slug: string
  focusKeyword: string
}

export function SEOPreview({
  metaTitle,
  metaDescription,
  slug,
  focusKeyword,
}: SEOPreviewProps) {
  const siteUrl = "cettest.com"
  const displayUrl = `${siteUrl}/blog/${slug || "your-slug"}`

  return (
    <div className="space-y-6">
      {/* Google Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Google Search Preview
          </CardTitle>
          <CardDescription>How your post appears in search results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-4 border border-border space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Title</p>
              <h3 className="text-lg text-primary font-medium cursor-pointer hover:underline">
                {metaTitle || "Your meta title will appear here"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {metaTitle.length}/60 characters
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">URL</p>
              <p className="text-sm text-green-700 dark:text-green-400">{displayUrl}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="text-sm text-foreground line-clamp-2">
                {metaDescription || "Your meta description will appear here"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {metaDescription.length}/160 characters
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex gap-2">
            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-300">
              <p className="font-medium">Tip:</p>
              <p>Write a clear, compelling meta title and description to increase click-through rates from search results.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            SEO Tips
          </CardTitle>
          <CardDescription>Best practices for better search rankings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="mt-1">
                  1
                </Badge>
              </div>
              <div>
                <p className="font-medium text-sm">Focus Keyword</p>
                {focusKeyword ? (
                  <p className="text-sm text-muted-foreground">
                    Focus keyword: <span className="font-semibold text-foreground">"{focusKeyword}"</span>
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Add a focus keyword to optimize your content for specific search terms
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="mt-1">
                  2
                </Badge>
              </div>
              <div>
                <p className="font-medium text-sm">Meta Title Length</p>
                <p className="text-sm text-muted-foreground">
                  Current: {metaTitle.length} characters (Recommended: 50-60)
                </p>
                {metaTitle.length > 60 ? (
                  <p className="text-xs text-destructive mt-1">
                    ⚠️ Your title is too long and may be cut off in search results
                  </p>
                ) : metaTitle.length < 30 ? (
                  <p className="text-xs text-amber-600 mt-1">
                    💡 Consider making your title more descriptive
                  </p>
                ) : (
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    ✓ Good length for search results
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="mt-1">
                  3
                </Badge>
              </div>
              <div>
                <p className="font-medium text-sm">Meta Description Length</p>
                <p className="text-sm text-muted-foreground">
                  Current: {metaDescription.length} characters (Recommended: 120-160)
                </p>
                {metaDescription.length > 160 ? (
                  <p className="text-xs text-destructive mt-1">
                    ⚠️ Your description will be truncated in search results
                  </p>
                ) : metaDescription.length < 80 ? (
                  <p className="text-xs text-amber-600 mt-1">
                    💡 Write a more detailed description to attract more clicks
                  </p>
                ) : (
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    ✓ Good length for search results
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="mt-1">
                  4
                </Badge>
              </div>
              <div>
                <p className="font-medium text-sm">URL Structure</p>
                <p className="text-sm text-muted-foreground">
                  Keep slugs short, descriptive, and keyword-rich
                </p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  ✓ Your slug: <span className="font-mono">{slug || "your-slug"}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="mt-1">
                  5
                </Badge>
              </div>
              <div>
                <p className="font-medium text-sm">Content Optimization</p>
                <p className="text-sm text-muted-foreground">
                  Include your focus keyword in the title, meta description, and first paragraph
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Publishing Checklist</CardTitle>
          <CardDescription>Before you publish, make sure everything is ready</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <input type="checkbox" id="check1" className="rounded" defaultChecked={false} />
              <label htmlFor="check1" className="cursor-pointer">
                Title is compelling and under 60 characters
              </label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="check2" className="rounded" defaultChecked={false} />
              <label htmlFor="check2" className="cursor-pointer">
                Meta description is 120-160 characters
              </label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="check3" className="rounded" defaultChecked={false} />
              <label htmlFor="check3" className="cursor-pointer">
                Featured image is uploaded and relevant
              </label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="check4" className="rounded" defaultChecked={false} />
              <label htmlFor="check4" className="cursor-pointer">
                Focus keyword appears in content naturally
              </label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="check5" className="rounded" defaultChecked={false} />
              <label htmlFor="check5" className="cursor-pointer">
                Content is well-structured with clear headings
              </label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" id="check6" className="rounded" defaultChecked={false} />
              <label htmlFor="check6" className="cursor-pointer">
                Category and tags are properly assigned
              </label>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
