import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/padma-awards-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "Padma Awards 2026: Full List, Winners & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Padma Awards 2026: Explore 131 awards, Padma Vibhushan, Bhushan and Shri winners, Uttar Pradesh awardees, Hindi-English notes and MCQs for UKPSC, UKSSSC, HSSC CET, SSC and UPSC."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

const keywords = [
  // Primary keywords
  "Padma Awards 2026",
  "Padma Awards 2026 full list",
  "Padma Awards 2026 winners list",
  "Padma Awards 2026 current affairs",
  "Padma Awards 2026 PDF",
  "Padma Awards 2026 questions and answers",

  // Award categories
  "Padma Vibhushan 2026",
  "Padma Bhushan 2026",
  "Padma Shri 2026",
  "Padma Vibhushan 2026 winners",
  "Padma Bhushan 2026 winners",
  "Padma Shri 2026 winners",
  "Padma Awards 2026 category wise list",

  // Important facts
  "Padma Awards 2026 total awards",
  "131 Padma Awards 2026",
  "5 Padma Vibhushan 2026",
  "13 Padma Bhushan 2026",
  "113 Padma Shri 2026",
  "Padma Awards 2026 women awardees",
  "Padma Awards 2026 posthumous winners",
  "Padma Awards 2026 state wise list",

  // Uttar Pradesh
  "Padma Awards 2026 Uttar Pradesh",
  "UP Padma Awards 2026 winners",
  "Uttar Pradesh Padma Shri 2026",
  "N Rajam Padma Vibhushan 2026",

  // Important personalities
  "Dharmendra Padma Vibhushan 2026",
  "Mammootty Padma Bhushan 2026",
  "Alka Yagnik Padma Bhushan 2026",
  "Shibu Soren Padma Bhushan 2026",
  "Rohit Sharma Padma Shri 2026",
  "Mirabai Chanu Padma Awards",
  "Padma Awards 2026 important personalities",

  // Examination keywords
  "Padma Awards 2026 for UKSSSC",
  "Padma Awards 2026 for UKPSC",
  "Padma Awards 2026 for HSSC CET",
  "Padma Awards 2026 for SSC CGL",
  "Padma Awards 2026 for SSC CHSL",
  "Padma Awards 2026 for UPSC",
  "Padma Awards 2026 for UPPSC",
  "Padma Awards 2026 for railway exams",
  "Padma Awards 2026 for state PSC",
  "Padma Awards 2026 GK",
  "Padma Awards 2026 MCQ",
  "Padma Awards 2026 mock test",

  // Hindi keywords
  "पद्म पुरस्कार 2026",
  "पद्म पुरस्कार 2026 सूची",
  "पद्म पुरस्कार 2026 विजेता",
  "पद्म पुरस्कार 2026 सम्पूर्ण सूची",
  "पद्म विभूषण 2026 सूची",
  "पद्म भूषण 2026 सूची",
  "पद्म श्री 2026 सूची",
  "पद्म पुरस्कार 2026 सामान्य ज्ञान",
  "पद्म पुरस्कार 2026 करेंट अफेयर्स",
  "पद्म पुरस्कार 2026 प्रश्न उत्तर",
  "पद्म पुरस्कार 2026 उत्तर प्रदेश",

  // WH / People Also Ask search intent
  "Who won Padma Awards in 2026",
  "Who received Padma Vibhushan in 2026",
  "Who received Padma Bhushan in 2026",
  "Who received Padma Shri in 2026",
  "How many Padma Awards were announced in 2026",
  "How many Padma Vibhushan awards were given in 2026",
  "Which state received the most Padma Awards in 2026",
  "What are the three categories of Padma Awards",
  "Why are Padma Awards given",
  "When are Padma Awards announced",

  // Learning intent
  "Padma Awards 2026 explained",
  "Padma Awards 2026 important facts",
  "Padma Awards 2026 bilingual notes",
  "Padma Awards 2026 Hindi English",
  "Padma Awards 2026 exam preparation",
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords,

  authors: [
    {
      name: "CET Test",
      url: SITE_URL,
    },
  ],

  creator: "CET Test",

  publisher: "CET Test",

  category: "Education",

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "CET Test",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: PAGE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Padma Awards 2026 - Winners, Categories and MCQs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
}

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "CET Test",
  url: SITE_URL,
}

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "CET Test",
  url: SITE_URL,
  inLanguage: ["en-IN", "hi-IN"],
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
}

const webpageSchema = {
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Padma Awards 2026 | पद्म पुरस्कार 2026",
  description: PAGE_DESCRIPTION,
  inLanguage: ["en-IN", "hi-IN"],
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  breadcrumb: {
    "@id": `${PAGE_URL}#breadcrumb`,
  },
  mainEntity: {
    "@id": `${PAGE_URL}#article`,
  },
}

const articleSchema = {
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Padma Awards 2026: Winners, Full List and Exam MCQs",
  alternativeHeadline:
    "पद्म पुरस्कार 2026: विजेता, सूची और महत्वपूर्ण प्रश्न",
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },
  url: PAGE_URL,
  inLanguage: ["en-IN", "hi-IN"],

  author: {
    "@id": `${SITE_URL}/#organization`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  about: [
    {
      "@type": "Thing",
      name: "Padma Awards 2026",
    },
    {
      "@type": "Thing",
      name: "Padma Vibhushan",
    },
    {
      "@type": "Thing",
      name: "Padma Bhushan",
    },
    {
      "@type": "Thing",
      name: "Padma Shri",
    },
    {
      "@type": "Thing",
      name: "Indian Civilian Awards",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "General Knowledge",
    "Current Affairs Revision",
  ],

  citation: [
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2218547",
    "https://www.padmaawards.gov.in/Document/pdf/Notifications/PadmaAwards/PadmaAwards2026.pdf",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name: "Padma Awards 2026 Current Affairs Notes and MCQs",

  description:
    "Bilingual Padma Awards 2026 study notes covering award categories, selected winners, Uttar Pradesh awardees and practice questions.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  educationalLevel: [
    "Competitive Exam Preparation",
  ],

  learningResourceType: [
    "Study Notes",
    "Current Affairs",
    "Multiple Choice Questions",
  ],

  teaches: [
    "Padma Awards 2026",
    "Padma Vibhushan Awardees",
    "Padma Bhushan Awardees",
    "Padma Shri Awardees",
    "Awards and Honours Current Affairs",
  ],

  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },

  isAccessibleForFree: true,

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
}

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Current Affairs",
      item: `${SITE_URL}/current-affairs`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Topic Wise Current Affairs",
      item: `${SITE_URL}/current-affairs/by-topic`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Padma Awards 2026",
      item: PAGE_URL,
    },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    webpageSchema,
    articleSchema,
    learningResourceSchema,
    breadcrumbSchema,
  ],
}

export default function PadmaAwardsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {children}
    </>
  )
}