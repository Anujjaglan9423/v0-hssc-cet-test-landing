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
  const staticPages = ["/about", "/contact", "/careers", "/privacy-policy", "/terms-of-service"]
    // const staticPages = ["/about", "/contact", "/careers", "/privacy-policy", "/refund-policy", "/terms-of-service"]
  if (staticPages.some(page => pathname === page)) {
    response.headers.set("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=604800")
  }
  
  // Blog pages - cache for 1 hour, revalidate for 7 days
  if (pathname.startsWith("/blog")) {
    response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=604800")
  }
  
  // Avoid replaying HTML from a previous deployment against newer client bundles.
  if (pathname === "/") {
    response.headers.set("Cache-Control", "no-store")
  }
  
  // Public demo pages - cache for 1 hour
  if (pathname.startsWith("/demo")) {
    response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400")
  }
  
  // Protected routes - no caching
  if (pathname.startsWith("/admin") || pathname.startsWith("/student")) {
    response.headers.set("Cache-Control", "private, no-cache, no-store, must-revalidate")
  }
  
  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
