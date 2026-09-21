"use client"

import { useState } from "react"
import { Bell, BellOff, CheckCircle2 } from "lucide-react"

function urlBase64ToUint8Array(value: string) {
  const padding = "=".repeat((4 - (value.length % 4)) % 4)
  const base64 = (value + padding).replace(/-/g, "+").replace(/_/g, "/")
  return Uint8Array.from(atob(base64), (character) => character.charCodeAt(0))
}

export default function PushNotificationControl({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "enabled" | "blocked" | "error">("idle")

  async function enableNotifications() {
    if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
      setStatus("error")
      return
    }
    setStatus("loading")
    try {
      const permission = await Notification.requestPermission()
      if (permission !== "granted") {
        setStatus("blocked")
        return
      }
      const registration = await navigator.serviceWorker.register("/service-worker.js")
      const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      if (!publicKey) throw new Error("Push notifications are not configured")
      const subscription = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(publicKey) })
      const response = await fetch("/api/notifications/subscribe", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(subscription) })
      if (!response.ok) throw new Error("Unable to save subscription")
      setStatus("enabled")
    } catch {
      setStatus("error")
    }
  }

  if (status === "enabled") return <div className="flex items-center gap-2 text-sm font-medium text-emerald-700"><CheckCircle2 className="size-4" aria-hidden="true" /> Exam alerts enabled</div>

  return <div className={compact ? "" : "rounded-xl border border-primary/20 bg-primary/[0.04] p-4"}>
    {!compact && <div className="mb-3"><p className="font-semibold text-slate-900">Never miss a new exam alert</p><p className="mt-1 text-sm text-muted-foreground">Allow browser notifications for important government exam updates. You can turn them off anytime in browser settings.</p></div>}
    <button type="button" onClick={enableNotifications} disabled={status === "loading"} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-wait disabled:opacity-60">
      {status === "blocked" ? <BellOff className="size-4" aria-hidden="true" /> : <Bell className="size-4" aria-hidden="true" />}
      {status === "loading" ? "Enabling…" : status === "blocked" ? "Notifications blocked" : status === "error" ? "Try notifications again" : "Enable exam alerts"}
    </button>
  </div>
}

export { PushNotificationControl }
                    
