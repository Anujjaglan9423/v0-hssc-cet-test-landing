import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "CET TEST - SSC, Railway, UKSSSC, HSSC Mock Tests | Free Online Practice 2026",
  description:
    "India's leading online test series for SSC CGL, SSC CHSL, SSC MTS, Railway RRB NTPC, Group D, UKSSSC, Uttarakhand State Exams, HSSC CET, Haryana Police & Clerk exams. Practice free mock tests with detailed analytics, previous year papers, topic-wise tests & instant results. Start your government job preparation today!",
  keywords: [
    "SSC CGL mock test",
    "SSC CHSL preparation",
    "SSC MTS online test",
    "Railway RRB NTPC mock test",
    "Railway Group D test series",
    "RRB ALP exam preparation",
    "UKSSSC mock test",
    "Uttarakhand state exam",
    "UK VDO test series",
    "Uttarakhand Patwari exam",
    "HSSC CET mock test",
    "Haryana Police exam",
    "Haryana Clerk test series",
    "HSSC Group D preparation",
    "free online mock tests",
    "government job preparation",
    "competitive exam test series",
    "previous year papers",
    "topic wise practice tests",
    "exam preparation 2026",
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
    title: "CET TEST - SSC, Railway, Uttarakhand & Haryana Exam Preparation",
    description:
      "Free online mock tests for SSC CGL/CHSL/MTS, Railway RRB NTPC/Group D, UKSSSC Uttarakhand exams, HSSC CET & Haryana state exams. Practice unlimited tests with detailed performance analytics.",
    siteName: "CET TEST",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CET TEST - Government Exam Preparation Platform for SSC, Railway, Uttarakhand & Haryana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CET TEST - SSC, Railway, UKSSSC & HSSC Exam Preparation",
    description:
      "Practice free mock tests for SSC, Railway, Uttarakhand & Haryana government exams with detailed analytics and instant results",
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
    icon: "/icon.png",
    apple: "/apple-icon.png",
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
