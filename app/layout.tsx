import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import Script from "next/script"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

// ============================================
// SITE CONFIGURATION
// ============================================
const SITE_URL = "https://cettest.site"
const SITE_NAME = "CET TEST"
const INSTAGRAM_HANDLE = "cet__test"
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`
const SUPPORT_EMAIL = "anujjaglan9423@gmail.com"
const SUPPORT_PHONE = "+917291849546"
const SUPPORT_PHONE_DISPLAY = "7291849546"

// ============================================
// SEO, AEO & GEO OPTIMIZED METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "CET TEST - Free Mock Tests for Haryana CET, HSSC, SSC, Railway, UKSSSC & All Govt Exams 2026",
    template: "%s | CET TEST - India's #1 Free Mock Test Platform"
  },

  description: "India's most comprehensive free online mock test platform for Haryana CET, HSSC CET, HSSC Police Constable, HSSSC Group D, SSC CGL, SSC CHSL, SSC MTS, Railway RRB NTPC, Railway Group D, UKSSSC, and all government job exams. Attempt unlimited practice tests with instant results, detailed analytics, all-India rank, previous year papers & performance insights. Start your 100% free preparation today!",

  keywords: [
    // ===== HARYANA EXAMS =====
    "Haryana CET mock test 2026",
    "HSSC CET free online test",
    "HSSC CET mock test series",
    "Haryana CET exam preparation",
    "HSSC Police Constable mock test",
    "Haryana Police Constable exam 2026",
    "HSSSC Group D mock test",
    "Haryana Group D exam preparation",
    "HSSC CET previous year papers",
    "Haryana CET online test series",
    "HSSC CET 2026 free mock test",
    "HSSC CET syllabus 2026",

    // ===== SSC EXAMS =====
    "SSC CGL mock test 2026",
    "SSC CHSL free online test",
    "SSC MTS practice test 2026",
    "SSC CPO mock test",
    "SSC GD constable mock test",
    "SSC JE online test series",
    "SSC exam preparation 2026",
    "SSC CGL previous year papers",
    "SSC CHSL tier 1 mock test",
    "SSC free mock test",

    // ===== RAILWAY EXAMS =====
    "RRB NTPC mock test 2026",
    "Railway Group D free test",
    "RRB NTPC exam preparation",
    "Railway exam online practice",
    "RRB JE mock test",
    "RRB ALP practice test",
    "Railway RRB free mock test",
    "RRB NTPC previous year paper",

    // ===== UKSSSC EXAMS =====
    "UKSSSC mock test 2026",
    "Uttarakhand state exam preparation",
    "UKSSSC VDO mock test",
    "UKSSSC Patwari test series",
    "UKSSSC Forest Guard mock test",
    "UKSSSC Group C online test",
    "UKSSSC previous year papers",

    // ===== OTHER STATE EXAMS =====
    "UPSSSC mock test",
    "BPSC exam preparation",
    "MPPSC online test",
    "Rajasthan CET mock test",
    "Bihar SSC mock test",
    "Jharkhand SSC practice test",

    // ===== TEACHING EXAMS =====
    "CTET mock test 2026",
    "HTET free online test",
    "KVS PRT mock test",
    "NVS teacher exam preparation",
    "DSSSB TGT mock test",
    "REET practice test",
    "UPTET online test series",

    // ===== BANKING EXAMS =====
    "IBPS PO mock test 2026",
    "SBI PO free online test",
    "IBPS Clerk practice test",
    "RBI assistant mock test",
    "Bank exam preparation 2026",

    // ===== DEFENCE EXAMS =====
    "NDA mock test 2026",
    "CDS free online test",
    "AFCAT practice test",
    "Airforce Group X mock test",
    "Navy SSR online test",
    "Army GD exam preparation",

    // ===== OTHER GOVT EXAMS =====
    "LIC AAO mock test",
    "GIC AM exam preparation",
    "ESIC SSO online test",
    "FCI manager mock test",
    "AIIMS nursing officer exam",

    // ===== AEO (ANSWER ENGINE OPTIMIZATION) - QUESTION BASED =====
    "how to crack SSC CGL in first attempt",
    "best strategy for RRB NTPC 2026",
    "how to prepare for Haryana CET exam",
    "what is HSSC CET exam pattern",
    "how many attempts for railway exam",
    "best free mock test for government exams",
    "which exam is easy to crack in India",
    "how to prepare for bank po exam at home",
    "what is the syllabus of SSC CHSL",
    "how to get government job without coaching",
    "best website for competitive exam preparation",
    "how to check mock test performance",
    "what is good score in RRB NTPC",
    "how to improve speed in SSC exam",
    "how many questions in HSSC CET",
    "is SSC CGL tough to crack",

    // ===== GENERIC GOVT JOB KEYWORDS =====
    "government job exam preparation",
    "competitive exam test series India",
    "free mock test 2026 all exams",
    "online practice test for govt jobs",
    "sarkari exam preparation app",
    "best mock test website in India",
    "previous year paper with solution",
    "exam analysis and rank predictor",
  ],

  authors: [{ name: "CET TEST", url: SITE_URL }],
  creator: "CET TEST",
  publisher: "CET TEST",

  generator: "CET TEST Platform",
  manifest: "/manifest.json",

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: SITE_URL,
    title: "CET TEST - Free Mock Tests for Haryana CET, HSSC, SSC, Railway, UKSSSC & All Govt Exams 2026",
    description: "India's #1 free mock test platform for all government job exams including SSC, Railway, Banking, Teaching, Defence, State PSC & more. Unlimited practice tests with instant results, all-India rank & detailed analytics.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CET TEST - Free Mock Tests for All Government Exams 2026",
      },
    ],
    emails: [SUPPORT_EMAIL],
    phoneNumbers: [SUPPORT_PHONE],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "CET TEST - Free Mock Tests for All Government Exams 2026 | SSC, Railway, Banking, Haryana CET",
    description: "Unlimited free mock tests for SSC CGL, RRB NTPC, Haryana CET, Banking, Teaching, Defence & more. Get instant results, all-India rank & performance analytics.",
    images: ["/og-image.png"],
    site: INSTAGRAM_URL,
    creator: INSTAGRAM_HANDLE,
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

  verification: {
    google: "lm_5SF7FbX7_uM8Ze3BkTudNFttvMjDieo6Tz0hQqEY",
  },

  category: "Education",
  classification: "Government Exam Preparation, Mock Tests, Online Education",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
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

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: "#0f172a",
  viewportFit: "cover",
}

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  // ============================================
  // COMPREHENSIVE STRUCTURED DATA FOR ALL EXAMS
  // ============================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description: "India's largest free online mock test platform for all government job competitive exams including SSC, Railway, Banking, Teaching, Defence, Haryana CET, UKSSSC, and state-level exams.",

    // Contact Information
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SUPPORT_PHONE,
      email: SUPPORT_EMAIL,
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    sameAs: [
      INSTAGRAM_URL,
    ],

    // Search action for site search
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },

    // Free offering
    offers: {
      "@type": "Offer",
      category: "Free Educational Service",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/OnlineOnly",
      eligibleRegion: {
        "@type": "Country",
        name: "IN",
      },
    },

    // ===== AEO: FAQ SECTION FOR ALL EXAMS =====
    mainEntity: [
      // SSC Exams FAQ
      {
        "@type": "Question",
        name: "What is SSC CGL exam and how to prepare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SSC CGL (Combined Graduate Level) is a national-level exam for Group B and Group C posts. Prepare using our free mock tests covering Tier 1 and Tier 2 patterns with detailed solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Is SSC CHSL easy to crack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SSC CHSL requires strategic preparation. Our free mock tests help you understand the pattern, manage time, and identify weak areas with detailed performance analytics.",
        },
      },

      // Railway Exams FAQ
      {
        "@type": "Question",
        name: "How to prepare for RRB NTPC exam 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prepare for RRB NTPC with our free mock tests covering CBT 1 and CBT 2 patterns. Practice with previous year papers and get all-India rank to assess your preparation.",
        },
      },
      {
        "@type": "Question",
        name: "What is the exam pattern for Railway Group D?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Railway Group D exam has 100 questions on Mathematics, General Intelligence, General Science, and General Awareness. Practice our free mock tests aligned with latest pattern.",
        },
      },

      // Haryana Exams FAQ
      {
        "@type": "Question",
        name: "What is Haryana CET exam and eligibility?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haryana Common Eligibility Test (CET) is conducted by HSSC for Group C and Group D posts in Haryana. Eligibility includes 10th/12th/Graduation as per post requirement.",
        },
      },
      {
        "@type": "Question",
        name: "How to prepare for HSSC CET for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prepare for HSSC CET with our unlimited free mock tests, previous year papers, and detailed performance analytics. Track your progress and compare with other aspirants.",
        },
      },

      // Banking Exams FAQ
      {
        "@type": "Question",
        name: "How to prepare for IBPS PO exam at home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prepare for IBPS PO using our free mock tests covering Prelims and Mains. Practice reasoning, quantitative aptitude, English, and general awareness sections.",
        },
      },
      {
        "@type": "Question",
        name: "What is the syllabus for SBI PO 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SBI PO syllabus includes Reasoning, Quantitative Aptitude, English Language, General Awareness, and Computer Knowledge. Access our free section-wise tests.",
        },
      },

      // Teaching Exams FAQ
      {
        "@type": "Question",
        name: "How to crack CTET exam in first attempt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Crack CTET with our free mock tests covering Paper 1 (Class 1-5) and Paper 2 (Class 6-8). Practice child development, pedagogy, subject-specific questions.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between CTET and HTET?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CTET is central eligibility test for teaching across India, while HTET is specific to Haryana state. Both exams have similar patterns but HTET has state-specific content.",
        },
      },

      // Defence Exams FAQ
      {
        "@type": "Question",
        name: "How to prepare for NDA exam after 12th?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prepare for NDA with our free mock tests covering Mathematics and General Ability Test. Practice with previous year papers and get detailed solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What is the selection process for CDS exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CDS selection includes written exam (English, GK, Elementary Mathematics for IMA/INA/AFA, plus Physics/Chemistry for Navy) followed by SSB interview.",
        },
      },

      // General FAQs
      {
        "@type": "Question",
        name: "Is CET TEST really free for all exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CET TEST is 100% free for all exams including SSC, Railway, Banking, Teaching, Defence, Haryana CET, UKSSSC, and all state-level exams.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact CET TEST for support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact us via email at anujjaglan9423@gmail.com or phone at 7291849546 for any queries or support. We respond within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Which exams are covered on CET TEST?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CET TEST covers over 50+ exams including SSC CGL, SSC CHSL, SSC MTS, RRB NTPC, Railway Group D, Haryana CET, HSSC CET, Police Constable, UKSSSC, IBPS PO, SBI PO, CTET, HTET, NDA, CDS, and more.",
        },
      },
    ],

    // ===== AEO: HOW-TO SECTION =====
    hasPart: {
      "@type": "HowTo",
      name: "How to Start Your Free Mock Test on CET TEST",
      step: [
        {
          "@type": "HowToStep",
          name: "Choose Your Exam",
          text: "Select from over 50+ government exams including SSC, Railway, Banking, Teaching, Defence, and State exams.",
        },
        {
          "@type": "HowToStep",
          name: "Select a Test",
          text: "Choose from full-length mock tests, sectional tests, or previous year papers.",
        },
        {
          "@type": "HowToStep",
          name: "Attempt the Test",
          text: "Take the test online with real exam interface and timer.",
        },
        {
          "@type": "HowToStep",
          name: "Analyze Performance",
          text: "Get instant results, detailed solutions, and performance analytics including all-India rank.",
        },
      ],
    },
  }

  return (
    <html lang="en-IN" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        {/* ===== BASE META TAGS ===== */}
        <meta charSet="utf-8" />

        {/* ===== GEO TARGETING FOR ALL INDIA ===== */}
        <meta name="geo.country" content="IN" />
        <meta name="target_state_haryana" content="Haryana" />
        <meta name="target_state_uttarakhand" content="Uttarakhand" />
        <meta name="target_state_rajasthan" content="Rajasthan" />
        <meta name="target_state_uttar_pradesh" content="Uttar Pradesh" />
        <meta name="target_state_bihar" content="Bihar" />
        <meta name="target_state_madhya_pradesh" content="Madhya Pradesh" />

        {/* ===== LANGUAGE TARGETING ===== */}
        <meta name="language" content="English, Hindi" />
        <meta name="target_country" content="India" />
        <meta name="audience" content="students, government job aspirants, competitive exam candidates, graduates, postgraduates" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />

        {/* ===== AUTHOR & OWNERSHIP ===== */}
        <meta name="author" content="CET TEST" />
        <meta name="owner" content="CET TEST" />
        <meta name="copyright" content={`${new Date().getFullYear()} CET TEST`} />

        {/* ===== EXAM COVERAGE META ===== */}
        <meta name="exams-covered" content="SSC CGL, SSC CHSL, SSC MTS, RRB NTPC, Railway Group D, Haryana CET, HSSC CET, Police Constable, UKSSSC, IBPS PO, SBI PO, CTET, HTET, NDA, CDS, TET, UPSSSC, BPSC, MPPSC, REET, UPTET, DSSSB, KVS, NVS, LIC, GIC, FCI, ESIC, AIIMS, and more" />
        <meta name="features" content="free mock tests, unlimited attempts, instant results, detailed analytics, all-india rank, previous year papers, performance tracking" />

        {/* ===== ADDITIONAL SEO META ===== */}
        <meta name="google-site-verification" content="lm_5SF7FbX7_uM8Ze3BkTudNFttvMjDieo6Tz0hQqEY" />

        {/* ===== PWA & APPLE META ===== */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

        {/* ===== SOCIAL MEDIA - INSTAGRAM ===== */}
        <meta property="og:see_also" content={INSTAGRAM_URL} />
        <meta name="instagram:creator" content={INSTAGRAM_HANDLE} />
        <meta name="instagram:official" content="true" />

        {/* ===== CONTACT INFORMATION META ===== */}
        <meta name="contact-email" content={SUPPORT_EMAIL} />
        <meta name="contact-phone" content={SUPPORT_PHONE_DISPLAY} />
        <meta name="support-hours" content="9 AM - 9 PM IST, Monday to Saturday" />

        {/* ===== FAVICON & ICONS ===== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* ===== PRELOAD & PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://vercel.live" />

        {/* ===== STRUCTURED DATA (JSON-LD) FOR SEO/AEO ===== */}
        <Script
          id="structured-data-main"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="afterInteractive"
        />

        {/* ===== SERVICE WORKER REGISTRATION ===== */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch((err) => {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </head>

      <body className={`${inter.className} antialiased`}>
        {children}
        {/* PWA Install Prompt */}
        <PWAInstallPrompt />
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}