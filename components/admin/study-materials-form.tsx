"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createStudyMaterial } from "@/lib/actions/admin"
import { FileUp, AlertCircle, Check } from "lucide-react"

export default function StudyMaterialsForm() {
  const [type, setType] = useState("general-info")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [videoUrl, setVideoUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/webp"]
      if (!validTypes.includes(selectedFile.type)) {
        setError("Only PDF and image files (JPG, PNG, WEBP) are allowed")
        return
      }
      setFile(selectedFile)
      setError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      if (!type || !title) {
        throw new Error("Type and title are required")
      }

      if (type === "video" && !videoUrl) {
        throw new Error("Video URL is required for video materials")
      }

      if ((type === "pdf" || type === "image") && !file) {
        throw new Error("File upload is required for PDF and image materials")
      }

      console.log("[v0] Submitting form with type:", type, "title:", title, "videoUrl:", videoUrl)

      const formData = new FormData()
      formData.append("type", type)
      formData.append("title", title)
      formData.append("description", description)
      if (file) formData.append("file", file)
      if (videoUrl) formData.append("videoUrl", videoUrl)

      console.log("[v0] FormData prepared, calling createStudyMaterial...")
      await createStudyMaterial(formData)

      setSuccess(true)
      setTitle("")
      setDescription("")
      setFile(null)
      setVideoUrl("")
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to upload material"
      console.log("[v0] Error:", errorMessage)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900">Upload Study Material</h2>

      {/* Type Selection */}
      <div className="space-y-2">
        <Label htmlFor="type" className="text-base font-semibold">
          Material Type
        </Label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="general-info">General Information (Syllabus, Books, etc)</option>
          <option value="pdf">Study Material - PDF</option>
          <option value="image">Study Material - Image</option>
          <option value="video">Study Material - Video Link</option>
        </select>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-base font-semibold">
          Title
        </Label>
        <Input
          id="title"
          placeholder="e.g., Chemistry Syllabus 2024, Biology Notes Chapter 5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="h-10"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-base font-semibold">
          Description (Optional)
        </Label>
        <textarea
          id="description"
          placeholder="Add any additional details about this material"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24 resize-none"
        />
      </div>

      {/* File Upload or Video URL */}
      {type === "video" ? (
        <div className="space-y-2">
          <Label htmlFor="videoUrl" className="text-base font-semibold">
            Video URL
          </Label>
          <Input
            id="videoUrl"
            type="url"
            placeholder="https://youtube.com/watch?v=..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="h-10"
          />
          <p className="text-sm text-gray-500">Paste YouTube or other video platform URLs</p>
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="file" className="text-base font-semibold">
            Upload File
          </Label>
          <div className="relative">
            <input
              id="file"
              type="file"
              accept={type === "pdf" ? ".pdf" : "image/*"}
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="file"
              className="block w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-500 transition"
            >
              <FileUp className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">
                {type === "pdf" ? "PDF files up to 50MB" : "Images (JPG, PNG, WEBP) up to 20MB"}
              </p>
              {file && <p className="text-sm text-green-600 mt-2">✓ {file.name}</p>}
            </label>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <AlertCircle className="h-5 w-5" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <Check className="h-5 w-5" />
          <span className="text-sm">Material uploaded successfully!</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Study Material"}
      </Button>
    </form>
  )
}
