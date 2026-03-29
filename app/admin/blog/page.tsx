"use client"

import { useState, useEffect } from "react"
import { getAllBlogs, deleteBlog } from "@/lib/actions/admin"
import { Button } from "@/components/ui/button"
import { FileText, Trash2, AlertTriangle, Loader2, Plus, Eye, Edit2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from "next/link"

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [blogToDelete, setBlogToDelete] = useState<any | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    loadBlogs()
  }, [])

  async function loadBlogs() {
    setIsLoading(true)
    try {
      const data = await getAllBlogs()
      setBlogs(data)
    } catch (error) {
      console.error("Error loading blogs:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteBlog = async () => {
    if (!blogToDelete) return
    setIsDeleting(true)
    try {
      const result = await deleteBlog(blogToDelete.id)
      if (result.success) {
        setBlogs((prev) => prev.filter((b) => b.id !== blogToDelete.id))
      }
    } catch (error) {
      console.error("Error deleting blog:", error)
    } finally {
      setIsDeleting(false)
      setShowDeleteModal(false)
      setBlogToDelete(null)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const publishedBlogs = blogs.filter((b) => b.status === "published")
  const draftBlogs = blogs.filter((b) => b.status === "draft")

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Management</h1>
          <p className="text-muted-foreground mt-1">Create and manage blog posts</p>
        </div>
        <Link href="/admin/blog/create">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create Blog Post
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{publishedBlogs.length}</p>
            <p className="text-sm text-muted-foreground">Published Posts</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <FileText className="w-7 h-7 text-amber-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{draftBlogs.length}</p>
            <p className="text-sm text-muted-foreground">Draft Posts</p>
          </div>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="space-y-6">
        {/* Published Blogs */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/50">
            <h2 className="font-semibold text-foreground">Published Posts ({publishedBlogs.length})</h2>
          </div>
          {publishedBlogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Title</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Published</th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {publishedBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          {blog.featured_image_url && (
                            <img
                              src={blog.featured_image_url}
                              alt={blog.title}
                              className="w-12 h-12 rounded object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium text-foreground">{blog.title}</p>
                            <p className="text-xs text-muted-foreground">Slug: {blog.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/blog/${blog.slug}`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Link href={`/admin/blog/${blog.id}/edit`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => {
                              setBlogToDelete(blog)
                              setShowDeleteModal(true)
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-12 text-center text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No published posts yet</p>
            </div>
          )}
        </div>

        {/* Draft Blogs */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/50">
            <h2 className="font-semibold text-foreground">Draft Posts ({draftBlogs.length})</h2>
          </div>
          {draftBlogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Title</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Created</th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {draftBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          {blog.featured_image_url && (
                            <img
                              src={blog.featured_image_url}
                              alt={blog.title}
                              className="w-12 h-12 rounded object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium text-foreground">{blog.title}</p>
                            <p className="text-xs text-muted-foreground">Slug: {blog.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-600 dark:text-amber-400">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/admin/blog/${blog.id}/edit`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                              <Edit2 className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => {
                              setBlogToDelete(blog)
                              setShowDeleteModal(true)
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-12 text-center text-muted-foreground">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No draft posts yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              Delete Blog Post
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{blogToDelete?.title}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setShowDeleteModal(false)} className="bg-transparent">
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteBlog} disabled={isDeleting} className="gap-2">
              {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
              Delete Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
