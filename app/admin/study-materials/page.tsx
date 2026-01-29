"use client"

import { useState, useEffect } from "react"
import { getStudyMaterials, deleteStudyMaterial } from "@/lib/actions/admin"
import StudyMaterialsForm from "@/components/admin/study-materials-form"
import { Trash2, FileText, Image, Play, BookOpen, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StudyMaterial {
  id: string
  type: string
  title: string
  description?: string
  file_url?: string
  video_url?: string
  is_active: boolean
  created_at: string
}

export default function ManageStudyMaterialsPage() {
  const [materials, setMaterials] = useState<StudyMaterial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)

  useEffect(() => {
    loadMaterials()
  }, [])

  const loadMaterials = async () => {
    try {
      setLoading(true)
      const data = await getStudyMaterials()
      setMaterials(data)
    } catch (err) {
      setError("Failed to load materials")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (materialId: string) => {
    if (!confirm("Are you sure you want to delete this material?")) return

    try {
      setDeleting(materialId)
      await deleteStudyMaterial(materialId)
      setMaterials(materials.filter((m) => m.id !== materialId))
    } catch (err) {
      setError("Failed to delete material")
      console.error(err)
    } finally {
      setDeleting(null)
    }
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

  const getTypeColor = (type: string) => {
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
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manage Study Materials</h1>
        <p className="text-gray-600 mt-2">Upload and manage study materials, syllabus, and resources for students</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <p className="font-semibold">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Upload Form */}
      <div className="max-w-2xl">
        <StudyMaterialsForm />
      </div>

      {/* Materials List */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Uploaded Materials</h2>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : materials.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No materials uploaded yet</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {materials.map((material) => (
              <div
                key={material.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(material.type)}`}>
                        {getIcon(material.type)}
                        {getTypeLabel(material.type)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 break-words">{material.title}</h3>
                    {material.description && (
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{material.description}</p>
                    )}

                    <div className="mt-3 flex flex-wrap gap-3">
                      {material.file_url && (
                        <a
                          href={material.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium truncate"
                        >
                          View File
                        </a>
                      )}
                      {material.video_url && (
                        <a
                          href={material.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                        >
                          Watch Video
                        </a>
                      )}
                      <span className="text-xs text-gray-500">
                        {new Date(material.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(material.id)}
                    disabled={deleting === material.id}
                    className="mt-1 p-2 text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
                    title="Delete material"
                  >
                    {deleting === material.id ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Trash2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
