import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "CET TEST - Haryana CET, HSSC, SSC, Railway & UKSSSC Free Mock Tests 2026",
  description:
    "India's #1 free online mock test platform for Haryana CET, HSSC CET, HSSC Police Constable, HSSSC Group D, SSC CGL, SSC CHSL, Railway RRB NTPC, Group D & UKSSSC. Attempt unlimited practice tests with instant results, detailed analytics & previous year papers. Start free preparation today!",
  keywords: [
    // Haryana Exams - Primary Focus
    "Haryana CET mock test 2026",
    "HSSC CET free online test",
    "HSSC CET mock test series",
    "Haryana CET exam preparation",
    "HSSC Police Constable mock test",
    "Haryana Police Constable exam 2026",
    "HSSSC Group D mock test",
    "Haryana Group D exam preparation",
    "HSSC CET previous year papers",
    "Haryana sarkari naukri exam",
    "HSSC exam preparation 2026",
    "Haryana government job exam",
    "HSSC CET syllabus 2026",
    "Haryana CET online test series",
    // SSC Exams - Secondary Focus
    "SSC CGL mock test 2026",
    "SSC CHSL free online test",
    "SSC MTS practice test",
    "SSC exam preparation 2026",
    "SSC CGL previous year papers",
    // Railway Exams
    "RRB NTPC mock test 2026",
    "Railway Group D free test",
    "RRB NTPC exam preparation",
    "Railway exam online practice",
    // UKSSSC
    "UKSSSC mock test 2026",
    "Uttarakhand state exam preparation",
    "UK VDO Patwari test series",
    // Generic
    "free mock test 2026",
    "government job exam preparation",
    "competitive exam test series India",
  ],
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
    title: "CET TEST - Haryana CET, HSSC, SSC, Railway & UKSSSC Free Mock Tests 2026",
    description:
      "Free online mock tests for Haryana CET, HSSC CET, HSSC Police Constable, HSSSC Group D, SSC CGL, Railway RRB NTPC & UKSSSC. Practice with real exam pattern, instant results & detailed performance analytics.",
    siteName: "CET TEST",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CET TEST - Free Mock Tests for Haryana CET, HSSC, SSC, Railway & UKSSSC 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CET TEST - Haryana CET, HSSC, SSC, Railway Free Mock Tests 2026",
    description:
      "Attempt free mock tests for Haryana CET, HSSC CET, Police Constable, SSC, Railway & UKSSSC with detailed analytics and instant results",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CET TEST",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "google-site-verification": "lm_5SF7FbX7_uM8Ze3BkTudNFttvMjDieo6Tz0hQqEY",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
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
