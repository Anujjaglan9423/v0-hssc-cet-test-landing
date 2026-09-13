import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import { CommunityPage } from "@/components/community/community-page"
import { StudentLayoutClient } from "@/components/student-layout-client"

// This page must check the user's session/auth state server-side (or via middleware) before rendering. Unauthenticated users should be redirected to /login with a returnUrl back to /community, so after logging in they land back here automatically.
export default async function CommunityRoute() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(`/login?returnUrl=${encodeURIComponent("/community")}`)
  }

  if (user.role !== "student") {
    redirect("/admin")
  }

  return <StudentLayoutClient user={user}><CommunityPage currentUser={{ id: user.id, name: user.full_name, avatarUrl: user.avatar_url }} /></StudentLayoutClient>
}
