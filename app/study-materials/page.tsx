"use client"

import { useEffect, useState } from "react"

const studyGuidance = [
  {
    title: "How to use these resources",
    text: "Start with the syllabus for your target exam, choose one topic at a time, and finish a short practice set after reading. Record incorrect answers and revisit the underlying concept instead of memorising an answer key.",
  },
  {
    title: "A practical weekly revision routine",
    text: "Reserve five days for topic study and question practice, one day for a timed mixed test, and one day for error review. Keep a dated notebook of formulas, Haryana facts, vocabulary, and questions that you repeatedly miss.",
  },
  {
    title: "Use official information for decisions",
    text: "Study notes are for preparation. Exam dates, vacancies, eligibility, syllabus changes, fees, and application instructions can change, so confirm them on the relevant HSSC, NTA, SSC, RRB, or UKSSSC website before applying.",
  },
]
import { getActiveStudyMaterials, StudyMaterial } from "@/lib/actions/study-materials"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Image, Video, Download, ExternalLink, Loader2 } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import AdPlacement from "@/components/ad-placement"

export default function StudyMaterialsPage() {
  const [materials, setMaterials] = useState<StudyMaterial[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "pdf" | "image" | "youtube">("all")

  useEffect(() => {
    loadMaterials()
  }, [])

  async function loadMaterials() {
    setLoading(true)
    try {
      const data = await getActiveStudyMaterials()
      setMaterials(data)
    } catch (error) {
      console.error("Error loading materials:", error)
      setMaterials([])
    } finally {
      setLoading(false)
    }
  }

  const filteredMaterials =
    filter === "all" ? materials : materials.filter((m) => m.content_type === filter)

  const getIcon = (type: "pdf" | "image" | "youtube") => {
    switch (type) {
      case "pdf":
        return <FileText className="w-5 h-5" />
      case "image":
        return <Image className="w-5 h-5" />
      case "youtube":
        return <Video className="w-5 h-5" />
    }
  }

  const getLabel = (type: "pdf" | "image" | "youtube") => {
    switch (type) {
      case "pdf":
        return "PDF"
      case "image":
        return "Image"
      case "youtube":
        return "YouTube Video"
    }
  }

  return (
    <>
      <FooterLinkNavbar />
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Study Materials</h1>
            <p className="text-xl text-muted-foreground">
              Access our comprehensive collection of study resources to enhance your exam preparation
            </p>
          </div>

          <AdPlacement className="mb-8" />

          <section className="mb-12 grid gap-6 md:grid-cols-3" aria-label="Study guidance">
            {studyGuidance.map((item) => (
              <article key={item.title} className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </section>

          <section className="mb-12 rounded-xl border bg-muted/30 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-foreground">What you will find here</h2>
            <p className="max-w-3xl leading-7 text-muted-foreground">
              This library is intended to complement—not replace—the official notification and syllabus for your examination. Materials may include topic notes, revision PDFs, diagrams, and explanatory videos. Each item should state its topic and purpose clearly so you can choose the right resource for your current stage of preparation.
            </p>
          </section>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              size="sm"
            >
              All Materials
            </Button>
            <Button
              variant={filter === "pdf" ? "default" : "outline"}
              onClick={() => setFilter("pdf")}
              size="sm"
              className="gap-2"
            >
              <FileText className="w-4 h-4" />
              PDFs
            </Button>
            <Button
              variant={filter === "image" ? "default" : "outline"}
              onClick={() => setFilter("image")}
              size="sm"
              className="gap-2"
            >
              <Image className="w-4 h-4" />
              Images
            </Button>
            <Button
              variant={filter === "youtube" ? "default" : "outline"}
              onClick={() => setFilter("youtube")}
              size="sm"
              className="gap-2"
            >
              <Video className="w-4 h-4" />
              Videos
            </Button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Loading study materials...</p>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredMaterials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No study materials found.</p>
            </div>
          )}

          {/* Materials Grid */}
          {!loading && filteredMaterials.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material) => (
                <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 flex flex-col h-full">
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-4 text-primary">
                      {getIcon(material.content_type)}
                      <span className="text-sm font-medium">{getLabel(material.content_type)}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {material.title}
                    </h3>

                    {/* Description */}
                    {material.description && (
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                        {material.description}
                      </p>
                    )}

                    {/* Date */}
                    <p className="text-xs text-muted-foreground mb-4">
                      {new Date(material.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    {/* Action Button */}
                    {material.content_type === "youtube" && material.youtube_url ? (
                      <Button
                        asChild
                        variant="default"
                        className="w-full gap-2"
                      >
                        <a href={material.youtube_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Watch Video
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
                          Download
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled className="w-full">
                        Not Available
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <FooterLinkFooter />
    </>
  )
}
