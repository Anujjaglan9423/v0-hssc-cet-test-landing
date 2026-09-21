import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const subscription = await request.json()
    if (!subscription?.endpoint || !subscription?.keys?.p256dh || !subscription?.keys?.auth) return NextResponse.json({ error: "Invalid subscription" }, { status: 400 })
    const supabase = createAdminClient()
    const { error } = await supabase.from("push_subscriptions").upsert({ endpoint: subscription.endpoint, p256dh: subscription.keys.p256dh, auth: subscription.keys.auth, updated_at: new Date().toISOString() }, { onConflict: "endpoint" })
    if (error) {
      console.error("[v0] Push subscription save failed:", error)
      return NextResponse.json({ error: "Unable to save subscription" }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Push subscription request failed:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
                    
