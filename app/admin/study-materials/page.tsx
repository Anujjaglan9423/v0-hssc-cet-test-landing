"use client"

import { useEffect, useState } from "react"
import { getAllStudyMaterials, uploadStudyMaterial, deleteStudyMaterial, updateStudyMaterial, StudyMaterial } from "@/lib/actions/study-materials"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Image, Video, Trash2, Check, X, Loader2, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AdminStudyMaterialsPage() {
  const [materials, setMaterials] = useState<StudyMaterial[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content_type: "pdf" as "pdf" | "image" | "youtube",
    youtube_url: "",
    file: null as File | null,
  })

  useEffect(() => {
    loadMaterials()
  }, [])

  async function loadMaterials() {
    setLoading(true)
    try {
      const data = await getAllStudyMaterials()
      setMaterials(data)
    } catch (error) {
      console.error("Error loading materials:", error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setUploading(true)

    try {
      const result = await uploadStudyMaterial(
        {
          title: formData.title,
          description: formData.description,
          content_type: formData.content_type,
          youtube_url: formData.content_type === "youtube" ? formData.youtube_url : null,
          file_url: formData.content_type === "youtube" ? formData.youtube_url : null,
          is_active: true,
        },
        formData.file || undefined,
      )

      if (result.success) {
        setFormData({
          title: "",
          description: "",
          content_type: "pdf",
          youtube_url: "",
          file: null,
        })
        setIsOpen(false)
        await loadMaterials()
      } else {
        alert("Error uploading material: " + result.error)
      }
    } catch (error) {
      console.error("Error uploading:", error)
      alert("Error uploading material")
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this material?")) {
      try {
        const result = await deleteStudyMaterial(id)
        if (result.success) {
          await loadMaterials()
        } else {
          alert("Error deleting material: " + result.error)
        }
      } catch (error) {
        console.error("Error deleting:", error)
        alert("Error deleting material")
      }
    }
  }

  async function handleToggleActive(id: string, isActive: boolean) {
    try {
      const result = await updateStudyMaterial(id, { is_active: !isActive })
      if (result.success) {
        await loadMaterials()
      }
    } catch (error) {
      console.error("Error updating:", error)
    }
  }

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Study Materials</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Material
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Study Material</DialogTitle>
              <DialogDescription>Add a new study material for students</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  required
                  placeholder="Material title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  placeholder="Material description (optional)"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select
                  value={formData.content_type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      content_type: e.target.value as "pdf" | "image" | "youtube",
                    })
                  }
                  className="w-full border border-input rounded-md px-3 py-2 bg-background"
                >
                  <option value="pdf">PDF</option>
                  <option value="image">Image</option>
                  <option value="youtube">YouTube Video</option>
                </select>
              </div>

              {formData.content_type === "youtube" ? (
                <div>
                  <label className="block text-sm font-medium mb-1">YouTube URL</label>
                  <Input
                    required
                    type="url"
                    placeholder="https://youtube.com/watch?v=..."
                    value={formData.youtube_url}
                    onChange={(e) => setFormData({ ...formData, youtube_url: e.target.value })}
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Upload {formData.content_type.toUpperCase()}
                  </label>
                  <Input
                    required
                    type="file"
                    accept={formData.content_type === "pdf" ? ".pdf" : "image/*"}
                    onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                  />
                </div>
              )}

              <Button type="submit" disabled={uploading} className="w-full gap-2">
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  "Upload Material"
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading materials...</p>
          </div>
        </div>
      ) : materials.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground text-lg mb-4">No study materials uploaded yet</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Your First Material
              </Button>
            </DialogTrigger>
          </Dialog>
        </Card>
      ) : (
        <div className="grid gap-4">
          {materials.map((material) => (
            <Card key={material.id} className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1 text-primary">{getIcon(material.content_type)}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{material.title}</h3>
                    {material.description && (
                      <p className="text-sm text-muted-foreground mt-1">{material.description}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(material.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {material.file_url && material.content_type !== "youtube" && (
                    <a
                      href={material.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      View
                    </a>
                  )}
                  {material.youtube_url && (
                    <a
                      href={material.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      View
                    </a>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleToggleActive(material.id, material.is_active)}
                    title={material.is_active ? "Deactivate" : "Activate"}
                  >
                    {material.is_active ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <X className="w-4 h-4 text-red-500" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(material.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
