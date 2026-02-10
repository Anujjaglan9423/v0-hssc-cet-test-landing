import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "HSSC CET Test | Free HSSC CET Mock Tests & Haryana Exam Preparation | CET TEST",
  description:
    "Free HSSC CET mock tests and preparation platform for Haryana Staff Selection Commission exams. Practice 10,000+ questions, get detailed analytics, expert solutions for CET, Police, Group D & Haryana recruitment exams. 50,000+ students trust us.",
  keywords: "HSSC CET test, HSSC CET mock test, Haryana exam preparation, CET exam, free mock tests, HSSC exam, Haryana HSSC, CET preparation, Haryana jobs, staff selection commission, online test series, CET mock exam, HSSC practice papers",
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
    title: "HSSC CET Test - Free Mock Tests & Haryana Exam Preparation",
    description: "Prepare for HSSC CET exam with free mock tests. 10,000+ practice questions, detailed analytics & expert solutions for Haryana competitive exams.",
    siteName: "CET TEST",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HSSC CET Test - Haryana Exam Preparation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSSC CET Test - Free Mock Tests & Preparation",
    description: "Practice free HSSC CET mock tests for Haryana exams with detailed solutions and analytics",
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
        <meta name="description" content="Free HSSC CET mock tests and preparation platform for Haryana Staff Selection Commission exams. 10,000+ practice questions for CET, Police, Group D." />
        <meta name="keywords" content="HSSC CET test, HSSC CET mock test, Haryana exam, free mock tests, CET preparation, HSSC exam preparation" />
        <meta name="author" content="CET TEST" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "CET TEST",
              "url": "https://cettest.site",
              "logo": "https://cettest.site/logo.png",
              "description": "Free HSSC CET mock tests and preparation platform for Haryana Staff Selection Commission exams",
              "sameAs": [
                "https://www.facebook.com/cettest",
                "https://twitter.com/cettest",
                "https://www.instagram.com/cettest"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Student Support",
                "email": "support@cettest.site",
                "areaServed": "IN"
              },
              "educationalLevel": "Competitive Exams",
              "teaches": [
                {
                  "@type": "Thing",
                  "name": "HSSC CET Exam Preparation",
                  "description": "Preparation for Haryana Staff Selection Commission CET exam"
                },
                {
                  "@type": "Thing",
                  "name": "Haryana Police Exam",
                  "description": "Practice questions for Haryana Police recruitment exam"
                },
                {
                  "@type": "Thing",
                  "name": "Group D Exam",
                  "description": "Group D exam preparation for Haryana recruitment"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "CET TEST - HSSC CET Mock Test Platform",
              "url": "https://cettest.site",
              "description": "Free online HSSC CET mock tests and Haryana exam preparation platform",
              "applicationCategory": "EducationalApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free mock tests for HSSC CET exam preparation"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "5000",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
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
