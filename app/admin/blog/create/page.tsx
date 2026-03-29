import { BlogCreationForm } from "@/components/admin/blog-creation-form"

export default function CreateBlogPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Create New Blog Post</h1>
        <p className="text-muted-foreground mt-2">Create a new blog post with SEO optimization</p>
      </div>

      <BlogCreationForm />
    </div>
  )
}
