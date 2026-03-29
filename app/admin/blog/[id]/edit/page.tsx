import { createClient } from "@/lib/supabase/server"
import { BlogCreationForm } from "@/components/admin/blog-creation-form"
import { notFound } from "next/navigation"

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: blog, error } = await supabase.from("blogs").select("*").eq("id", id).single()

  if (error || !blog) {
    notFound()
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Edit Blog Post</h1>
        <p className="text-muted-foreground mt-2">Update your blog post and SEO settings</p>
      </div>

      <BlogCreationForm initialData={blog} />
    </div>
  )
}
