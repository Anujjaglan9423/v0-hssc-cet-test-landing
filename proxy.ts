import { updateSession } from "@/lib/supabase/middleware"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function proxy(request: NextRequest) {
  const response = await updateSession(request)

  // ============================================
  // AGGRESSIVE CACHING FOR STATIC CONTENT
  // ============================================

  const pathname = request.nextUrl.pathname

  // Static pages that rarely change - cache for 24 hours at edge
  const staticPages = ["/about", "/contact", "/careers", "/privacy-policy", "/refund-policy", "/terms-of-service"]
  if (staticPages.some((page) => pathname === page)) {
    response.headers.set("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800")
  }

  // Blog pages - cache for 1 hour, revalidate for 7 days
  if (pathname.startsWith("/blog")) {
    response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=604800")
  }

  // Landing page - cache for 10 minutes, revalidate for 24 hours
  if (pathname === "/") {
    response.headers.set("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400")
  }

  // Public demo pages - cache for 1 hour
  if (pathname.startsWith("/demo")) {
    response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400")
  }

  // ============================================
  // PROTECTED ROUTES - EDGE AUTH CACHING (Phase 3)
  // ============================================
  // Protected routes use edge-cached auth decisions (5 min TTL in middleware)
  // to avoid repeated database queries. Cache headers prevent browser caching
  // but auth state is validated at edge before reaching compute.
  if (pathname.startsWith("/admin") || pathname.startsWith("/student")) {
    response.headers.set("Cache-Control", "private, no-cache, no-store, must-revalidate")
    // Add header to indicate auth was validated at edge
    response.headers.set("X-Auth-Edge-Validated", "true")
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
