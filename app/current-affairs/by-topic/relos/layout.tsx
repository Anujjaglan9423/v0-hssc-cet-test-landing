import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/relos"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "India-Russia RELOS Pact 2026: Full Form, Details & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Understand the India-Russia RELOS Agreement: full form, signing date, logistics support, military cooperation, comparison with LEMOA and bilingual MCQs for UPSC, UKPSC, UKSSSC, SSC and HSSC CET."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords: [
    // Primary keywords
    "India Russia RELOS Agreement",
    "India Russia RELOS Pact",
    "RELOS Agreement 2026",
    "RELOS Pact 2026",
    "India Russia Logistics Agreement",
    "RELOS full form",
    "RELOS meaning",
    "Reciprocal Exchange of Logistics Agreement",
    "Reciprocal Exchange of Logistics Support",
    "India Russia Defence Agreement 2026",
    "India Russia Military Logistics Pact",
    "RELOS current affairs 2026",
    "RELOS Agreement PDF",
    "RELOS MCQ",

    // Important dates
    "RELOS signing date",
    "RELOS February 2025",
    "RELOS 18 February 2025",
    "RELOS January 2026",
    "RELOS operational date",
    "India Russia RELOS Moscow",
    "RELOS ratification Russia",

    // Agreement features
    "RELOS key provisions",
    "RELOS military logistics support",
    "RELOS reciprocal logistics",
    "RELOS naval cooperation",
    "RELOS airbase access",
    "RELOS military facilities",
    "RELOS joint military exercises",
    "RELOS port calls",
    "RELOS humanitarian assistance",
    "RELOS disaster relief",
    "RELOS troop deployment provisions",
    "RELOS temporary military deployment",
    "RELOS India Russia strategic partnership",

    // Comparisons
    "RELOS vs LEMOA",
    "RELOS vs COMCASA",
    "RELOS vs BECA",
    "LEMOA Agreement 2016",
    "COMCASA Agreement 2018",
    "BECA Agreement 2020",
    "India US Foundational Agreements",
    "India Defence Logistics Agreements",
    "India Russia vs India US Logistics Pact",

    // International relations
    "India Russia Relations 2026",
    "India Russia Strategic Partnership",
    "India Russia Defence Cooperation",
    "India Russia Military Cooperation",
    "India Foreign Policy Current Affairs",
    "India Bilateral Defence Agreements",
    "India Russia Geopolitics",
    "India Russia Current Affairs 2026",

    // Examination searches
    "RELOS Agreement UPSC",
    "RELOS Agreement UKPSC",
    "RELOS Agreement UKSSSC",
    "RELOS Agreement HSSC CET",
    "RELOS Agreement SSC CGL",
    "RELOS Agreement SSC CHSL",
    "RELOS Agreement UPPSC",
    "RELOS Agreement Railway Exams",
    "RELOS Agreement State PCS",
    "Defence Current Affairs 2026",
    "International Relations Current Affairs 2026",
    "Important Defence Agreements 2026",
    "RELOS important questions",
    "RELOS GK questions",

    // Hindi
    "भारत रूस RELOS समझौता",
    "भारत रूस लॉजिस्टिक्स समझौता",
    "रेलोस समझौता 2026",
    "RELOS का पूरा नाम",
    "RELOS समझौता क्या है",
    "भारत रूस रक्षा समझौता 2026",
    "पारस्परिक लॉजिस्टिक्स विनिमय समझौता",
    "भारत रूस सैन्य सहयोग",
    "भारत रूस सामरिक साझेदारी",
    "RELOS समझौते के प्रावधान",
    "RELOS और LEMOA में अंतर",
    "RELOS करेंट अफेयर्स 2026",
    "RELOS सामान्य ज्ञान",
    "RELOS प्रश्न उत्तर",

    // People Also Ask / WH search queries
    "What is the RELOS Agreement",
    "What is the full form of RELOS",
    "Which countries signed RELOS",
    "When was RELOS signed",
    "Where was RELOS signed",
    "When did RELOS enter into force",
    "What is the purpose of RELOS",
    "What facilities does RELOS cover",
    "Does RELOS allow military deployment",
    "Does RELOS establish permanent military bases",
    "What is the difference between RELOS and LEMOA",
    "What is LEMOA agreement",
    "Why is RELOS important for India",
    "How does RELOS affect India Russia relations",

    // AEO / AI / educational
    "RELOS Agreement explained",
    "RELOS Agreement simple explanation",
    "RELOS Agreement 2026 important facts",
    "RELOS Agreement bilingual notes",
    "RELOS Agreement Hindi English",
    "RELOS Agreement questions and answers",
    "RELOS Agreement exam preparation",
  ],

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
        alt:
          "India-Russia RELOS Agreement - Defence Logistics Pact 2026",
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
  name:
    "India-Russia RELOS Pact 2026 | भारत-रूस RELOS समझौता",
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

  headline:
    "India-Russia RELOS Pact 2026: Full Form, Signing Date, Logistics Cooperation and MCQs",

  alternativeHeadline:
    "भारत-रूस RELOS समझौता 2026: पूरा नाम, हस्ताक्षर, प्रावधान एवं महत्वपूर्ण प्रश्न",

  description: PAGE_DESCRIPTION,

  url: PAGE_URL,

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },

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
      name: "India-Russia RELOS Agreement",
    },
    {
      "@type": "Thing",
      name: "Reciprocal Exchange of Logistics",
    },
    {
      "@type": "Thing",
      name: "Military Logistics Cooperation",
    },
    {
      "@type": "Thing",
      name: "India-Russia Defence Relations",
    },
    {
      "@type": "Thing",
      name: "LEMOA Agreement",
    },
    {
      "@type": "Thing",
      name: "International Relations",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "Defence Current Affairs",
    "International Relations Revision",
    "General Knowledge",
  ],

  citation: [
    "https://en.kremlin.ru/acts/news/78748",
    "https://claws.co.in/relos-and-the-evolving-architecture-of-india-russia-relations/",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "India-Russia RELOS Agreement - Bilingual Notes and MCQs",

  description:
    "English and Hindi study material about the India-Russia defence logistics agreement, signing and implementation dates, military support provisions and comparisons with other logistics agreements.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  educationalLevel:
    "Competitive Examination Preparation",

  learningResourceType: [
    "Defence Current Affairs",
    "International Relations Notes",
    "Study Material",
    "Multiple Choice Questions",
  ],

  teaches: [
    "RELOS Agreement",
    "India-Russia Defence Cooperation",
    "Reciprocal Military Logistics",
    "India's Defence Agreements",
    "LEMOA, COMCASA and BECA",
  ],

  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },

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
      name: "India-Russia RELOS Pact",
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

export default function RELOSLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {children}
    </>
  )
}