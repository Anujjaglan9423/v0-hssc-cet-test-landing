import type React from "react"
import { getCurrentUser } from "@/lib/auth"
import { AdminLayoutClient } from "@/components/admin-layout-client"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  // User is guaranteed to exist and be admin (middleware handles redirect)
  // But we still need to fetch user data for the layout
  if (!user) {
    return null
  }

  return <AdminLayoutClient user={user}>{children}</AdminLayoutClient>
}
