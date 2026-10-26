import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/persons-in-news-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "Persons in News 2026: Appointments, Obituaries & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Study Persons in News 2026 in Hindi and English: important appointments, defence chiefs, world leaders, famous personalities, obituaries and MCQs for UKSSSC, UKPSC, HSSC CET, SSC and UPSC."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords: [
    // Primary SEO keywords
    "Persons in News 2026",
    "Person in News 2026",
    "Important Persons in News 2026",
    "Famous Personalities in News 2026",
    "Persons in News Current Affairs 2026",
    "Persons in News 2026 PDF",
    "Persons in News 2026 Questions Answers",
    "Persons in News 2026 MCQ",
    "Persons in News 2026 GK",

    // Appointments
    "Important Appointments 2026",
    "New Appointments 2026 India",
    "Appointments and Resignations 2026",
    "Government Appointments 2026",
    "Important Appointments Current Affairs",
    "Defence Appointments 2026",
    "Chief of Army Staff 2026",
    "Chief of Naval Staff 2026",
    "NITI Aayog CEO 2026",
    "NITI Aayog Vice Chairman 2026",
    "IndiaAI Mission CEO 2026",
    "FATF Vice President 2026",
    "GSI Director General 2026",

    // Important people covered on the page
    "Dhiraj Seth Army Chief 2026",
    "Krishna Swaminathan Navy Chief",
    "Anurag Jain NITI Aayog",
    "Ashok Kumar Lahiri NITI Aayog",
    "Vivek Aggarwal FATF",
    "Kunal Shah WhatsApp",
    "B Ravindran UN AI Panel",
    "Bhawana Kanth Fighter Combat Leader",
    "Varsha Ashok Aglawe GSI",
    "Sanae Takaichi Japan",
    "Andy Burnham UK Prime Minister",
    "Khalilur Rahman UNGA",
    "Bimal N Patel ITLOS",

    // Obituaries
    "Important Obituaries 2026",
    "Famous Personalities Died in 2026",
    "Obituary Current Affairs 2026",
    "Important Deaths 2026 Current Affairs",
    "Asha Bhosle 2026",
    "Teejan Bai Current Affairs",
    "Madhav Gadgil Current Affairs",

    // Exam-oriented
    "Persons in News 2026 UKSSSC",
    "Persons in News 2026 UKPSC",
    "Persons in News 2026 HSSC CET",
    "Persons in News 2026 SSC CGL",
    "Persons in News 2026 SSC CHSL",
    "Persons in News 2026 UPSC",
    "Persons in News 2026 UPPSC",
    "Persons in News 2026 Railway Exams",
    "Important Appointments for UKSSSC",
    "Important Appointments for UKPSC",
    "Persons in News for Competitive Exams",
    "Current Affairs 2026 for Government Exams",
    "Monthly Current Affairs 2026",
    "One Liner Current Affairs 2026",

    // Hindi keywords
    "चर्चित व्यक्ति 2026",
    "समाचारों में चर्चित व्यक्ति 2026",
    "महत्वपूर्ण व्यक्ति 2026",
    "महत्वपूर्ण नियुक्तियाँ 2026",
    "नई नियुक्तियाँ 2026",
    "नियुक्ति एवं इस्तीफा 2026",
    "महत्वपूर्ण निधन 2026",
    "प्रसिद्ध व्यक्तियों का निधन 2026",
    "चर्चित व्यक्ति 2026 सामान्य ज्ञान",
    "चर्चित व्यक्ति 2026 प्रश्न उत्तर",
    "चर्चित व्यक्ति 2026 करेंट अफेयर्स",
    "चर्चित व्यक्ति 2026 MCQ",

    // People Also Ask / WH questions
    "Who is the Chief of Army Staff of India in 2026",
    "Who is the Chief of Naval Staff in 2026",
    "Who became CEO of NITI Aayog in 2026",
    "Who is the Vice Chairman of NITI Aayog in 2026",
    "Who heads WhatsApp in 2026",
    "Who is the President of UNGA 81st session",
    "Who became Prime Minister of the UK in 2026",
    "Who is the first woman Fighter Combat Leader",
    "Who became the first woman Director General of GSI",
    "Which famous personalities died in 2026",
    "What are the most important appointments of 2026",
    "Which persons in news are important for UKSSSC",
    "How to prepare Persons in News for competitive exams",

    // AI search / answer intent
    "Persons in News 2026 explained",
    "Persons in News 2026 complete notes",
    "Important Persons in News 2026 Hindi English",
    "Persons in News 2026 bilingual notes",
    "Persons in News 2026 topic wise study material",
    "Appointments 2026 with explanations",
    "Persons in News 2026 practice questions",
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
          "Persons in News 2026 - Appointments, Obituaries and MCQs",
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

// Organization schema
const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "CET Test",
  url: SITE_URL,
}

// Website schema
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

// Webpage schema
const webpageSchema = {
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name:
    "Persons in News 2026 | चर्चित व्यक्ति 2026",
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

// Article schema
const articleSchema = {
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,

  headline:
    "Persons in News 2026: Important Appointments, Personalities, Obituaries and MCQs",

  alternativeHeadline:
    "चर्चित व्यक्ति 2026: महत्वपूर्ण नियुक्तियाँ, व्यक्तित्व, निधन एवं प्रश्न",

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
      name: "Persons in News 2026",
    },
    {
      "@type": "Thing",
      name: "Important Appointments 2026",
    },
    {
      "@type": "Thing",
      name: "Defence Appointments",
    },
    {
      "@type": "Thing",
      name: "International Leadership",
    },
    {
      "@type": "Thing",
      name: "Obituaries 2026",
    },
    {
      "@type": "Thing",
      name: "Competitive Examination Current Affairs",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "General Knowledge",
    "Current Affairs Revision",
  ],
}

// Learning resource schema
const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Persons in News 2026 - Bilingual Current Affairs Notes and MCQs",

  description:
    "English and Hindi study material covering important appointments, defence and government officials, international personalities, obituaries and multiple-choice questions.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  educationalLevel: "Competitive Examination Preparation",

  learningResourceType: [
    "Study Notes",
    "Current Affairs",
    "Practice Questions",
    "Multiple Choice Questions",
  ],

  teaches: [
    "Important Appointments in 2026",
    "Defence Leadership",
    "Government and International Appointments",
    "Famous Personalities in News",
    "Important Obituaries",
  ],

  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
}

// Breadcrumb schema
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
      name: "Persons in News 2026",
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

export default function PersonsInNewsLayout({
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