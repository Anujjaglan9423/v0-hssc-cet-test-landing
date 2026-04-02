// v3 - Complete bypass of Supabase authentication
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  // Pass all requests through without any authentication checks
  return NextResponse.next({ request })
}

