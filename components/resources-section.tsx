import { getStudyMaterials } from "@/lib/actions/admin"
import { FileText, Image, Play, BookOpen } from "lucide-react"
import Link from "next/link"

export default async function ResourcesSection() {
  const materials = await getStudyMaterials()

  const groupedMaterials = {
    "general-info": materials.filter((m) => m.type === "general-info"),
    pdf: materials.filter((m) => m.type === "pdf"),
    image: materials.filter((m) => m.type === "image"),
    video: materials.filter((m) => m.type === "video"),
  }

  if (materials.length === 0) {
    return null
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-5 h-5" />
      case "image":
        return <Image className="w-5 h-5" />
      case "video":
        return <Play className="w-5 h-5" />
      default:
        return <BookOpen className="w-5 h-5" />
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-red-100 text-red-700"
      case "image":
        return "bg-blue-100 text-blue-700"
      case "video":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-green-100 text-green-700"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "pdf":
        return "PDF"
      case "image":
        return "Image"
      case "video":
        return "Video"
      default:
        return "Info"
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Study Resources & Materials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access syllabus, books, study notes, and video materials to excel in your exams
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {[
            { id: "general-info", label: "General Info", count: groupedMaterials["general-info"].length },
            { id: "pdf", label: "PDFs", count: groupedMaterials.pdf.length },
            { id: "image", label: "Images", count: groupedMaterials.image.length },
            { id: "video", label: "Videos", count: groupedMaterials.video.length },
          ].map((tab) => (
            <div
              key={tab.id}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-medium text-sm"
            >
              {tab.label} <span className="ml-1 font-bold">({tab.count})</span>
            </div>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.id}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 p-6"
            >
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getTypeBadgeColor(material.type)}`}>
                  {getIcon(material.type)}
                  {getTypeLabel(material.type)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{material.title}</h3>

              {/* Description */}
              {material.description && (
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{material.description}</p>
              )}

              {/* Action Button */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                {material.file_url ? (
                  <a
                    href={material.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
                  >
                    {material.type === "pdf" ? "Download PDF" : "View Image"}
                  </a>
                ) : material.video_url ? (
                  <a
                    href={material.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm"
                  >
                    Watch Video
                  </a>
                ) : null}
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-3">
                {new Date(material.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {materials.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No study materials available yet</p>
          </div>
        )}
      </div>
    </section>
  )
}
