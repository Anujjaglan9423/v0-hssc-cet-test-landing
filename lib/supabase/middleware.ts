import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const authToken = request.cookies.get("auth_token")?.value

  // Create Supabase client for database queries only
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  let user = null
  let userRole = null

  if (authToken) {
    // Get session from our sessions table
    const { data: session } = await supabase
      .from("sessions")
      .select("user_id, expires_at")
      .eq("token", authToken)
      .maybeSingle()

    if (session && new Date(session.expires_at) > new Date()) {
      // Get user from our users table
      const { data: userData } = await supabase
        .from("users")
        .select("id, email, role")
        .eq("id", session.user_id)
        .maybeSingle()

      if (userData) {
        user = userData
        userRole = userData.role
      }
    }
  }

  const pathname = request.nextUrl.pathname

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      return NextResponse.redirect(url)
    }
    if (userRole !== "admin") {
      const url = request.nextUrl.clone()
      url.pathname = "/student"
      return NextResponse.redirect(url)
    }
  }

  // Protect student routes
  if (pathname.startsWith("/student")) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      return NextResponse.redirect(url)
    }
    if (userRole !== "student") {
      const url = request.nextUrl.clone()
      url.pathname = "/admin"
      return NextResponse.redirect(url)
    }
  }

  // Redirect logged-in users from login/signup to their dashboard
  if ((pathname === "/login" || pathname === "/signup") && user) {
    const url = request.nextUrl.clone()
    url.pathname = userRole === "admin" ? "/admin" : "/student"
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
