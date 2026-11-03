"use client"

import { useAuth } from "@/lib/auth-context"

const INSTAGRAM_URL = "https://www.instagram.com/cet__test/"

export function InstagramFloat() {
  const { user, isLoading } = useAuth()

  if (isLoading || user) {
    return null
  }

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow CET TEST on Instagram"
      className="instagram-float fixed bottom-24 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#833ab4] via-[#e1306c] to-[#f77737] text-white shadow-lg ring-4 ring-background/80 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8 fill-none stroke-current" role="img">
        <rect width="17" height="17" x="3.5" y="3.5" rx="4.5" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
      </svg>
      <span className="sr-only">Follow CET TEST on Instagram</span>
    </a>
  )
}
