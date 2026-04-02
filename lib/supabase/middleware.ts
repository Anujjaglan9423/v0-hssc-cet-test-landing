import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  console.log("[v0] Middleware - allowing request through")
  return NextResponse.next({ request })
}
