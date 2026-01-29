"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { getCurrentUser } from "@/lib/auth"

export interface StudyMaterial {
  id: string
  title: string
  description: string | null
  content_type: "pdf" | "image" | "youtube"
  file_url: string | null
  youtube_url: string | null
  created_by: string | null
  created_at: string
  updated_at: string
  is_active: boolean
}

// Get all active study materials (for public view)
export async function getActiveStudyMaterials(): Promise<StudyMaterial[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("study_materials")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching study materials:", error)
    return []
  }

  return data || []
}

// Get all study materials (for admin view)
export async function getAllStudyMaterials(): Promise<StudyMaterial[]> {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    return []
  }

  const { data, error } = await supabase
    .from("study_materials")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching study materials:", error)
    return []
  }

  return data || []
}

// Upload study material
export async function uploadStudyMaterial(
  material: Omit<StudyMaterial, "id" | "created_at" | "updated_at" | "created_by">,
  file?: File,
) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    return { success: false, error: "Unauthorized" }
  }

  let fileUrl = material.file_url

  // Upload file if provided
  if (file && material.content_type !== "youtube") {
    const fileName = `${Date.now()}-${file.name}`
    const { error: uploadError } = await supabase.storage
      .from("study-materials")
      .upload(fileName, file)

    if (uploadError) {
      console.error("Error uploading file:", uploadError)
      return { success: false, error: uploadError.message }
    }

    // Get public URL
    const { data } = supabase.storage.from("study-materials").getPublicUrl(fileName)
    fileUrl = data.publicUrl
  }

  // Insert into database
  const { data, error } = await supabase
    .from("study_materials")
    .insert({
      title: material.title,
      description: material.description,
      content_type: material.content_type,
      file_url: fileUrl,
      youtube_url: material.youtube_url,
      created_by: user.id,
      is_active: material.is_active,
    })
    .select()
    .single()

  if (error) {
    console.error("Error inserting study material:", error)
    return { success: false, error: error.message }
  }

  revalidatePath("/study-materials")
  revalidatePath("/admin/study-materials")
  return { success: true, data }
}

// Update study material
export async function updateStudyMaterial(
  id: string,
  updates: Partial<Omit<StudyMaterial, "id" | "created_at" | "created_by">>,
) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    return { success: false, error: "Unauthorized" }
  }

  const { data, error } = await supabase
    .from("study_materials")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating study material:", error)
    return { success: false, error: error.message }
  }

  revalidatePath("/study-materials")
  revalidatePath("/admin/study-materials")
  return { success: true, data }
}

// Delete study material
export async function deleteStudyMaterial(id: string) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    return { success: false, error: "Unauthorized" }
  }

  // Get the material first to delete associated file
  const { data: material, error: fetchError } = await supabase
    .from("study_materials")
    .select("*")
    .eq("id", id)
    .single()

  if (fetchError) {
    console.error("Error fetching material:", fetchError)
    return { success: false, error: fetchError.message }
  }

  // Delete file from storage if it exists
  if (material.file_url && material.content_type !== "youtube") {
    const fileName = material.file_url.split("/").pop()
    if (fileName) {
      await supabase.storage.from("study-materials").remove([fileName])
    }
  }

  // Delete from database
  const { error: deleteError } = await supabase.from("study_materials").delete().eq("id", id)

  if (deleteError) {
    console.error("Error deleting study material:", deleteError)
    return { success: false, error: deleteError.message }
  }

  revalidatePath("/study-materials")
  revalidatePath("/admin/study-materials")
  return { success: true }
}
