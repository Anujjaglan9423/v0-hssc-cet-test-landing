import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

// Auth cache: Map<token, { role: string, expiry: number }>
// Stores auth decisions at edge to avoid repeated database lookups
const authCache = new Map<
  string,
  {
    role: "admin" | "student"
    userId: string
    expiry: number
  }
>()

/**
 * Validates and caches auth decisions at the edge
 * Reduces database queries by caching auth decisions for 5 minutes (300,000 ms)
 * Cache TTL: 5 minutes to balance security and performance
 */
function validateAuthFromCache(
  token: string,
  now: number,
): { role: "admin" | "student"; userId: string } | null {
  const cached = authCache.get(token)
  if (cached && cached.expiry > now) {
    return { role: cached.role, userId: cached.userId }
  }
  // Clear expired cache entries
  if (cached) {
    authCache.delete(token)
  }
  return null
}

function setCacheAuth(
  token: string,
  role: "admin" | "student",
  userId: string,
  ttlMs: number = 300000, // 5 minutes
) {
  authCache.set(token, {
    role,
    userId,
    expiry: Date.now() + ttlMs,
  })
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

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

  const isPublicRoute = publicRoutes.some((route) => {
    if (route === "/") return pathname === "/"
    if (route === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/")
    if (route === "/demo") return pathname === "/demo" || pathname.startsWith("/demo/")
    return pathname === route || pathname.startsWith(route + "/")
  })

  // For protected routes, verify authentication
  if (!isPublicRoute) {
    const authToken = request.cookies.get("auth_token")?.value

    try {
      let user = null
      let userRole: "admin" | "student" | null = null
      const now = Date.now()

      if (authToken) {
        // Check edge cache first (Phase 3 optimization)
        const cachedAuth = validateAuthFromCache(authToken, now)
        if (cachedAuth) {
          userRole = cachedAuth.role
          user = { role: cachedAuth.role, id: cachedAuth.userId }
        } else {
          // Cache miss - fetch from database
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
                  cookiesToSet.forEach(({ name, value, options }) =>
                    supabaseResponse.cookies.set(name, value, options),
                  )
                },
              },
            },
          )

          // Get session from our sessions table - select only needed fields
          const { data: session } = await supabase
            .from("sessions")
            .select("user_id, expires_at")
            .eq("token", authToken)
            .maybeSingle()

          if (session && new Date(session.expires_at) > new Date()) {
            // Get user from our users table - select only id and role (reduces payload)
            const { data: userData } = await supabase
              .from("users")
              .select("id, email, role")
              .eq("id", session.user_id)
              .maybeSingle()

            if (userData) {
              user = userData
              userRole = userData.role as "admin" | "student"
              // Cache the auth decision for 5 minutes
              setCacheAuth(authToken, userRole, userData.id)
            }
          }
        }
      }

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
    } catch (error) {
      console.error("[v0] Middleware auth error:", error)
      // On error, redirect unauthenticated users to login for protected routes
      if (pathname.startsWith("/admin") || pathname.startsWith("/student")) {
        const url = request.nextUrl.clone()
        url.pathname = "/login"
        return NextResponse.redirect(url)
      }
    }
  }

  return supabaseResponse
}
