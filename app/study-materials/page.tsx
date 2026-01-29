"use client"

import useSWR from "swr"
import type { StudyMaterial } from "@/lib/types"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { File, Image as ImageIcon, Link as LinkIcon, Loader2, Download, Eye } from "lucide-react"

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    console.log("[v0] API error:", res.status, res.statusText)
    throw new Error(`API error: ${res.status}`)
  }
  return res.json()
}

export default function StudyMaterialsPage() {
  const { data: materials = [], isLoading, error } = useSWR<StudyMaterial[]>(
    "/api/study-materials",
    fetcher,
    { revalidateOnFocus: false }
  )

  if (error) {
    console.log("[v0] Error loading study materials:", error)
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Study Materials & Resources</h1>
          <p className="text-destructive mb-4">Error loading study materials: {error.message}</p>
          <p className="text-muted-foreground">Please try refreshing the page.</p>
        </div>
      </div>
    )
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case "pdf":
        return <File className="w-5 h-5" />
      case "image":
        return <ImageIcon className="w-5 h-5" />
      case "link":
        return <LinkIcon className="w-5 h-5" />
      default:
        return <LinkIcon className="w-5 h-5" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "study_material":
        return "Study Material"
      case "general_info":
        return "General Information"
      default:
        return "Resource"
    }
  }

  const groupedMaterials = materials.reduce((acc, material) => {
    const category = material.category
    if (!acc[category]) acc[category] = []
    acc[category].push(material)
    return acc
  }, {} as Record<string, StudyMaterial[]>)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Study Materials & Resources</h1>
          <p className="text-lg text-muted-foreground">
            Access all study materials, notes, PDFs, and important information compiled by our team
          </p>
        </div>

        {error && (
          <Card className="p-8 border-destructive bg-destructive/5">
            <div className="text-center">
              <p className="text-lg text-destructive font-semibold mb-2">Error loading study materials</p>
              <p className="text-muted-foreground mb-4">{error instanceof Error ? error.message : "Unknown error"}</p>
              <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
          </Card>
        )}

        {!isLoading && !error && materials.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">No study materials available yet</p>
            <p className="text-muted-foreground mt-2">Check back soon for resources</p>
          </Card>
        )}

        {!isLoading && !error && materials.length > 0 && (
          <div className="space-y-8">
            {Object.entries(groupedMaterials).map(([category, categoryMaterials]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4 capitalize">{getCategoryLabel(category)}</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryMaterials.map((material) => (
                    <Card key={material.id} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {getIconForType(material.material_type)}
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">
                          {new Date(material.created_at).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{material.title}</h3>

                      {material.description && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{material.description}</p>
                      )}

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground capitalize">
                          {material.material_type}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {material.material_type === "link" ? (
                          <Button
                            asChild
                            variant="default"
                            className="w-full gap-2"
                          >
                            <a href={material.content} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4" />
                              View Resource
                            </a>
                          </Button>
                        ) : material.file_url ? (
                          <Button
                            asChild
                            variant="default"
                            className="w-full gap-2"
                          >
                            <a href={material.file_url} target="_blank" rel="noopener noreferrer">
                              <Download className="w-4 h-4" />
                              Download {material.material_type.toUpperCase()}
                            </a>
                          </Button>
                        ) : (
                          <Button
                            asChild
                            variant="default"
                            className="w-full gap-2"
                          >
                            <a href={material.content} target="_blank" rel="noopener noreferrer">
                              <Download className="w-4 h-4" />
                              Access Resource
                            </a>
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
