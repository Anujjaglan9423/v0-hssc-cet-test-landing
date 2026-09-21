import webpush from "web-push"
import { createAdminClient } from "@/lib/supabase/server"

type PushMessage = {
  title: string
  body: string
  url: string
}

async function sendPushMessage(message: PushMessage) {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const privateKey = process.env.VAPID_PRIVATE_KEY
  const subject = process.env.VAPID_SUBJECT
  if (!publicKey || !privateKey || !subject) return { sent: 0, skipped: true }
  webpush.setVapidDetails(subject, publicKey, privateKey)
  const supabase = createAdminClient()
  const { data: subscriptions } = await supabase.from("push_subscriptions").select("id,endpoint,p256dh,auth")
  let sent = 0
  for (const subscription of subscriptions ?? []) {
    try {
      await webpush.sendNotification(
        { endpoint: subscription.endpoint, keys: { p256dh: subscription.p256dh, auth: subscription.auth } },
        JSON.stringify(message),
      )
      sent += 1
    } catch (error: unknown) {
      const statusCode = (error as { statusCode?: number })?.statusCode
      if (statusCode === 404 || statusCode === 410) await supabase.from("push_subscriptions").delete().eq("id", subscription.id)
      else console.error("[v0] Push delivery failed:", error)
    }
  }
  return { sent, skipped: false }
}

export function notifyExamAlert(title: string, url = "/exam-alerts") {
  return sendPushMessage({
    title: "New exam alert",
    body: `${title}. Tap to read the latest exam update and important dates.`,
    url,
  })
}

export function notifyDailyPractice() {
  return sendPushMessage({
    title: "Your daily CET practice test is ready",
    body: "Take a quick 10-question mock test today and strengthen your exam preparation.",
    url: "/mock-test",
  })
}
                    
