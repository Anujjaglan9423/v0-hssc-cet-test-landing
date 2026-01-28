import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "CET TEST - HSSC, CET, Mock Tests & Haryana Exams | Free Online Practice",
  description:
    "India's #1 online test series platform for HSSC, CET, SSC, Railway, and Haryana exams. Practice free mock tests, get detailed analytics, performance tracking, and expert-crafted question papers. Prepare for Haryana competitive exams with confidence.",
  keywords: "HSSC, CET, mock test, Haryana exam, competitive exam, SSC, Railway, online test series, HSSC exam preparation, CET exam prep, free mock tests, Haryana recruitment",
  generator: "v0.app",
  manifest: "/manifest.json",
  metadataBase: new URL("https://cettest.site"),
  alternates: {
    canonical: "https://cettest.site",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cettest.site",
    title: "CET TEST - Master HSSC, CET & Haryana Competitive Exams",
    description: "Free online mock tests and exam preparation for HSSC, CET, and all Haryana competitive exams. Practice unlimited tests with detailed analytics.",
    siteName: "CET TEST",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CET TEST - Competitive Exam Preparation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CET TEST - HSSC & CET Exam Preparation",
    description: "Practice free mock tests for HSSC, CET, and Haryana exams with detailed analytics",
    images: ["/logo.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CET TEST",
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f172a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="lm_5SF7FbX7_uM8Ze3BkTudNFttvMjDieo6Tz0hQqEY" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CET TEST" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {
                    // Service worker registration failed, app will still work
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <PWAInstallPrompt />
        <Analytics />
      </body>
    </html>
  )
}
