import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  // If Supabase is not configured, allow all public routes through
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase credentials are missing, skip all middleware logic
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.next({ request })
  }

  // If we get here, Supabase is configured - implement auth logic
  const pathname = request.nextUrl.pathname

  // Allow public access to these routes without checking authentication
  const publicRoutes = [
    "/",
    "/login",
    "/signup",
    "/about",
    "/contact",
    "/careers",
    "/blog",
    "/privacy-policy",
    "/refund-policy",
    "/terms-of-service",
    "/demo",
  ]

  const isPublicRoute = publicRoutes.some(route => {
    if (route === "/") return pathname === "/"
    if (route === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/")
    if (route === "/demo") return pathname === "/demo" || pathname.startsWith("/demo/")
    return pathname === route || pathname.startsWith(route + "/")
  })

  // Allow all /exams routes as public
  if (pathname.startsWith("/exams")) {
    return NextResponse.next({ request })
  }

  // For protected routes, redirect to login if not authenticated
  if (!isPublicRoute) {
    const authToken = request.cookies.get("auth_token")?.value
    
    if (!authToken) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next({ request })
}
