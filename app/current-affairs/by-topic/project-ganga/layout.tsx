import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/project-ganga"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "Project GANGA 2026 UP: Launch, Benefits & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Learn about UP Project GANGA 2026: full form, launch date, broadband connectivity, 20 lakh households, Digital Service Providers, jobs and MCQs in Hindi-English for UKPSC, UKSSSC, HSSC CET, SSC and UPPSC."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords: [
    // Primary SEO
    "Project GANGA 2026",
    "Project GANGA Uttar Pradesh",
    "Project Ganga UP 2026",
    "UP Project Ganga",
    "Project GANGA full form",
    "Project GANGA launched",
    "Project GANGA launch date",
    "Project GANGA 2026 current affairs",
    "Project GANGA 2026 PDF",
    "Project GANGA 2026 MCQ",
    "Project GANGA questions and answers",

    // Full form
    "Government Assisted Network for Growth and Advancement",
    "Government Assisted Network for Growth & Advancement",
    "GANGA full form Uttar Pradesh",
    "Project GANGA meaning",
    "What is Project GANGA",

    // Government and location
    "Yogi Adityanath Project GANGA",
    "Project GANGA Lucknow",
    "UP Government Project GANGA",
    "Uttar Pradesh broadband scheme 2026",
    "Uttar Pradesh digital connectivity initiative",
    "Uttar Pradesh State Transformation Commission",
    "OneOTT Project GANGA",
    "Hinduja Group Project GANGA",

    // Major facts
    "Project GANGA 20 lakh households",
    "Project GANGA broadband coverage",
    "Project GANGA rural broadband",
    "Project GANGA high speed internet",
    "Project GANGA 8000 10000 DSP",
    "Project GANGA Digital Service Providers",
    "Project GANGA one lakh jobs",
    "Project GANGA women entrepreneurs",
    "Project GANGA financial assistance",
    "Project GANGA CM Yuva Scheme",
    "Project GANGA 5 lakh loan",
    "Project GANGA GangaFiber",

    // Digital India
    "Digital India Uttar Pradesh",
    "Digital Uttar Pradesh 2026",
    "Digital inclusion in rural India",
    "Rural internet connectivity India",
    "Broadband infrastructure Uttar Pradesh",
    "Digital entrepreneurship UP",
    "Village broadband scheme",
    "Digital education Uttar Pradesh",
    "Telemedicine rural Uttar Pradesh",
    "Smart agriculture digital connectivity",

    // Competitive examinations
    "Project GANGA for UKSSSC",
    "Project GANGA for UKPSC",
    "Project GANGA for HSSC CET",
    "Project GANGA for SSC CGL",
    "Project GANGA for SSC CHSL",
    "Project GANGA for UPSC",
    "Project GANGA for UPPSC",
    "Project GANGA for UPSSSC",
    "Project GANGA for UP Police",
    "Project GANGA for Railway Exams",
    "Uttar Pradesh government schemes 2026",
    "UP Current Affairs 2026",
    "UP GK 2026",
    "Government Schemes 2026 MCQ",

    // Hindi
    "प्रोजेक्ट गंगा 2026",
    "प्रोजेक्ट गंगा उत्तर प्रदेश",
    "उत्तर प्रदेश प्रोजेक्ट गंगा",
    "प्रोजेक्ट गंगा का पूरा नाम",
    "प्रोजेक्ट गंगा योजना",
    "प्रोजेक्ट गंगा किसने शुरू किया",
    "प्रोजेक्ट गंगा कहाँ शुरू हुआ",
    "प्रोजेक्ट गंगा कब शुरू हुआ",
    "प्रोजेक्ट गंगा के उद्देश्य",
    "प्रोजेक्ट गंगा के लाभ",
    "प्रोजेक्ट गंगा ब्रॉडबैंड योजना",
    "प्रोजेक्ट गंगा रोजगार",
    "प्रोजेक्ट गंगा करेंट अफेयर्स",
    "प्रोजेक्ट गंगा प्रश्न उत्तर",
    "प्रोजेक्ट गंगा सामान्य ज्ञान",
    "उत्तर प्रदेश सरकारी योजनाएँ 2026",

    // People Also Ask / WH searches
    "What is Project GANGA in Uttar Pradesh",
    "What is the full form of Project GANGA",
    "Who launched Project GANGA",
    "When was Project GANGA launched",
    "Where was Project GANGA launched",
    "What is the main objective of Project GANGA",
    "How many households will Project GANGA connect",
    "How many jobs will Project GANGA create",
    "What is a Digital Service Provider under Project GANGA",
    "How does Project GANGA support women entrepreneurs",
    "Which scheme provides loans under Project GANGA",
    "Why is Project GANGA important for Digital India",

    // AI and educational intent
    "Project GANGA 2026 explained",
    "Project GANGA important facts",
    "Project GANGA bilingual notes",
    "Project GANGA Hindi English",
    "Project GANGA complete study notes",
    "Project GANGA exam preparation",
    "Project GANGA 2026 important questions",
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
          "Project GANGA 2026 Uttar Pradesh - Launch, Benefits and MCQs",
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
    "Project GANGA 2026 Uttar Pradesh | प्रोजेक्ट गंगा 2026",
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
    "Project GANGA 2026 Uttar Pradesh: Full Form, Launch Date, Objectives, Benefits and MCQs",

  alternativeHeadline:
    "प्रोजेक्ट गंगा 2026: पूरा नाम, शुरुआत, उद्देश्य, लाभ एवं महत्वपूर्ण प्रश्न",

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
      name: "Project GANGA",
    },
    {
      "@type": "Thing",
      name: "Government Assisted Network for Growth and Advancement",
    },
    {
      "@type": "Thing",
      name: "Rural Broadband Connectivity",
    },
    {
      "@type": "Thing",
      name: "Digital India",
    },
    {
      "@type": "Thing",
      name: "Digital Entrepreneurship",
    },
    {
      "@type": "Place",
      name: "Uttar Pradesh, India",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "Current Affairs Revision",
    "Government Schemes Study",
    "General Knowledge",
  ],

  citation: [
    "https://www.projectganga.in/",
    "https://www.transform.up.gov.in/assets/reports/mou/oneott.pdf",
    "https://hgs.com/press-releases/uttar-pradesh-chief-minister-shri-yogi-adityanath-flags-off-project-ganga-initiative-in-association-with-hgss-broadband-vertical-to-connect-20-lakh-households/",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Project GANGA 2026 - Uttar Pradesh Current Affairs Notes and MCQs",

  description:
    "Bilingual study material covering Project GANGA's full form, launch, rural broadband coverage, Digital Service Providers, employment targets and multiple-choice questions.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  educationalLevel:
    "Competitive Examination Preparation",

  learningResourceType: [
    "Current Affairs",
    "Government Scheme Notes",
    "Study Material",
    "Multiple Choice Questions",
  ],

  teaches: [
    "Project GANGA Full Form",
    "Uttar Pradesh Digital Connectivity",
    "Rural Broadband Infrastructure",
    "Digital Service Providers",
    "Government Employment Initiatives",
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
      name: "Project GANGA 2026",
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

export default function ProjectGangaLayout({
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