"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import useSWR, { mutate } from "swr"
import type { StudyMaterial } from "@/lib/types"
import { Upload, Trash2, Loader2, Link as LinkIcon, File, Image as ImageIcon } from "lucide-react"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function AdminStudyMaterialsPage() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    material_type: "link" as "link" | "pdf" | "image",
    content: "",
    file_url: "",
    category: "general_info" as "study_material" | "general_info",
  })

  const { data: materials = [], error: materialsError, isLoading: isMaterialsLoading } = useSWR<StudyMaterial[]>(
    "/api/study-materials/admin",
    fetcher,
    { revalidateOnFocus: false }
  )

  // Debug errors
  if (materialsError) {
    console.log("[v0] Error fetching materials:", materialsError)
  }

  const handleReset = () => {
    setFormData({
      title: "",
      description: "",
      material_type: "link",
      content: "",
      file_url: "",
      category: "general_info",
    })
    setEditingId(null)
  }

  const handleOpenDialog = (material?: StudyMaterial) => {
    if (material) {
      setEditingId(material.id)
      setFormData({
        title: material.title,
        description: material.description || "",
        material_type: material.material_type,
        content: material.content,
        file_url: material.file_url || "",
        category: material.category,
      })
    } else {
      handleReset()
    }
    setIsOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setIsOpenDialog(false)
    handleReset()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = editingId ? `/api/study-materials/${editingId}` : "/api/study-materials/admin"
      const method = editingId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to save material")
      }

      await mutate("/api/study-materials/admin")
      handleCloseDialog()
      console.log("[v0] Study material saved successfully")
    } catch (error) {
      console.error("[v0] Error saving material:", error)
      alert(error instanceof Error ? error.message : "Failed to save material")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this material?")) return

    try {
      const response = await fetch(`/api/study-materials/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete material")
      await mutate("/api/study-materials/admin")
      console.log("[v0] Material deleted successfully")
    } catch (error) {
      console.error("[v0] Error deleting material:", error)
      alert(error instanceof Error ? error.message : "Failed to delete material")
    }
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case "pdf":
        return <File className="w-4 h-4" />
      case "image":
        return <ImageIcon className="w-4 h-4" />
      case "link":
        return <LinkIcon className="w-4 h-4" />
      default:
        return <LinkIcon className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Study Materials</h1>
          <p className="text-muted-foreground mt-2">Upload and manage study resources for students</p>
        </div>
        <Button onClick={() => handleOpenDialog()} size="lg" className="gap-2">
          <Upload className="w-4 h-4" />
          Upload Material
        </Button>
      </div>

      {/* Upload Dialog */}
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Study Material" : "Upload Study Material"}</DialogTitle>
            <DialogDescription>
              Add a new study resource (link, PDF, or image) for students to access
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title *</label>
              <Input
                placeholder="e.g., Chemistry Chapter 1 Notes"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                placeholder="Brief description of the material"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={2}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Material Type *</label>
                <Select
                  value={formData.material_type}
                  onValueChange={(value: any) => setFormData({ ...formData, material_type: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="link">External Link</SelectItem>
                    <SelectItem value="pdf">PDF File</SelectItem>
                    <SelectItem value="image">Image</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Category</label>
                <Select
                  value={formData.category}
                  onValueChange={(value: any) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general_info">General Information</SelectItem>
                    <SelectItem value="study_material">Study Material</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                {formData.material_type === "link" ? "URL *" : "URL/File Path *"}
              </label>
              <Input
                placeholder={formData.material_type === "link" ? "https://example.com" : "/path/to/file"}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
              />
            </div>

            {formData.material_type !== "link" && (
              <div>
                <label className="text-sm font-medium">File Storage URL (optional)</label>
                <Input
                  placeholder="URL where the file is stored"
                  value={formData.file_url}
                  onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
                />
              </div>
            )}

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {editingId ? "Update" : "Upload"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Materials List */}
      <div className="grid gap-4">
        {isMaterialsLoading ? (
          <Card className="p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-muted-foreground" />
          </Card>
        ) : materials.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No study materials uploaded yet</p>
          </Card>
        ) : (
          materials.map((material) => (
            <Card key={material.id} className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1 text-muted-foreground">{getIconForType(material.material_type)}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{material.title}</h3>
                    {material.description && <p className="text-sm text-muted-foreground mt-1">{material.description}</p>}
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary capitalize">
                        {material.material_type}
                      </span>
                      <span className={`px-2 py-1 rounded-full ${
                        material.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}>
                        {material.is_active ? "Active" : "Inactive"}
                      </span>
                      <span className="text-muted-foreground">
                        {new Date(material.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenDialog(material)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(material.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
