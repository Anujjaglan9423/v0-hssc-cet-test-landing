"use client"

import { MessageCircle } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

const WHATSAPP_URL = "https://wa.me/917291849546"

export function WhatsAppFloat() {
  const { user, isLoading } = useAuth()

  if (isLoading || user) {
    return null
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CET TEST on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-background/80 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle aria-hidden="true" className="size-7" strokeWidth={2.25} />
      <span className="sr-only">Chat with CET TEST on WhatsApp</span>
    </a>
  )
}
