"use client"

import { useAuth } from "@/lib/auth-context"

const WHATSAPP_URL = "https://wa.me/917291849546?text=I%20want%20to%20start%20preparing%20for%20competitive%20government%20exams."

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
      className="whatsapp-float fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-background/80 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8 fill-current" role="img">
        <path d="M16 3.2a12.7 12.7 0 0 0-10.9 19.2L3.3 28.8l6.6-1.7A12.7 12.7 0 1 0 16 3.2Zm0 23.1a10.4 10.4 0 0 1-5.3-1.4l-.4-.2-3.9 1 1-3.8-.3-.4A10.4 10.4 0 1 1 16 26.3Zm5.7-7.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.4 8.4 0 0 1-2.5-1.5 9.3 9.3 0 0 1-1.7-2.1c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6s0-.4-.1-.6c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.6 1.1 3 1.2 3.2a11.4 11.4 0 0 0 4.4 4.3c.6.3 1.1.5 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4s-.3-.2-.6-.3Z" />
      </svg>
      <span className="sr-only">Chat with CET TEST on WhatsApp</span>
    </a>
  )
}
