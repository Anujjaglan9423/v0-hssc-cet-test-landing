"use client"

import { useState } from "react"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trash2, Edit2, Plus, Loader2 } from "lucide-react"
import { toast } from "sonner"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function StudyMaterialsPage() {
  const { data: materials = [], mutate } = useSWR("/api/admin/study-materials", fetcher)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    material_type: "link",
    content: "",
    file_url: "",
    category: "general_info",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const method = editingId ? "PUT" : "POST"
      const payload = editingId ? { ...formData, id: editingId } : formData

      const response = await fetch("/api/admin/study-materials/manage", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error("Failed to save")

      toast.success(editingId ? "Material updated" : "Material added")
      setFormData({
        title: "",
        description: "",
        material_type: "link",
        content: "",
        file_url: "",
        category: "general_info",
      })
      setEditingId(null)
      mutate()
    } catch (error) {
      toast.error("Error saving material")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this material?")) return

    try {
      const response = await fetch(`/api/admin/study-materials/manage?id=${id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to delete")

      toast.success("Material deleted")
      mutate()
    } catch (error) {
      toast.error("Error deleting material")
    }
  }

  const handleEdit = (material: any) => {
    setFormData(material)
    setEditingId(material.id)
  }

  const handleCancel = () => {
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Study Materials</h1>
        <p className="text-muted-foreground">Manage study materials, PDFs, links, and resources</p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Material" : "Add New Material"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title *</label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Chemistry Notes Chapter 1"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <Input
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Type *</label>
              <select
                value={formData.material_type}
                onChange={(e) => setFormData({ ...formData, material_type: e.target.value })}
                className="w-full px-3 py-2 border rounded-md bg-background"
              >
                <option value="link">Link</option>
                <option value="pdf">PDF</option>
                <option value="image">Image</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border rounded-md bg-background"
              >
                <option value="general_info">General Information</option>
                <option value="study_material">Study Material</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Content/URL *</label>
            <Input
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="URL or content"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">File URL (for PDFs/Images)</label>
            <Input
              value={formData.file_url}
              onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
              placeholder="Direct file download URL"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {editingId ? "Update Material" : "Add Material"}
            </Button>
            {editingId && (
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Materials List</h2>
        <div className="space-y-2">
          {materials.length === 0 ? (
            <Card className="p-6 text-center text-muted-foreground">No materials yet</Card>
          ) : (
            materials.map((material: any) => (
              <Card key={material.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{material.title}</h3>
                    {material.description && <p className="text-sm text-muted-foreground">{material.description}</p>}
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-secondary px-2 py-1 rounded">
                        {material.material_type}
                      </span>
                      <span className="text-xs bg-secondary px-2 py-1 rounded">
                        {material.category}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        material.is_active ? "bg-green-100 text-green-800" : "bg-gray-100"
                      }`}>
                        {material.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(material)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
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
    </div>
  )
}
