import type React from "react"
import { getCurrentUser } from "@/lib/auth"
import { StudentLayoutClient } from "@/components/student-layout-client"

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  // User is guaranteed to exist and be student (middleware handles redirect)
  // But we still need to fetch user data for the layout
  if (!user) {
    return null
  }

  return <StudentLayoutClient user={user}>{children}</StudentLayoutClient>
}
