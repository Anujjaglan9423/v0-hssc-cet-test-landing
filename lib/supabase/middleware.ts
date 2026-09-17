import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  // Authentication is resolved once by the protected route layout. The previous
  // middleware implementation performed two Supabase queries before every admin
  // page request, then the layout queried the same session again.
  return NextResponse.next({ request })
}
