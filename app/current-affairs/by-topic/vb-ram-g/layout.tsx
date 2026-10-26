
import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const SLUG = "vb-g-ram-g"

const PAGE_URL = `${SITE_URL}/current-affairs/by-topic/${SLUG}`

const TITLE =
  "VB-G RAM G Act 2025: 125 Days Employment Guarantee, Features & MCQs"

const DESCRIPTION =
  "Learn about VB-G RAM G Act 2025, effective 1 July 2026, replacing MGNREGA. Explore 125-day rural employment guarantee, funding pattern, key provisions, Hindi-English notes and free MCQs."

const KEYWORDS = [
  "VB-G RAM G Act 2025",
  "VB G RAM G Act 2026",
  "VB-G RAM G full form",
  "Viksit Bharat Guarantee for Rozgar and Ajeevika Mission",
  "Viksit Bharat G RAM G Act",
  "VB-G RAM G vs MGNREGA",
  "MGNREGA replacement 2026",
  "Rural Employment Guarantee Act 2025",
  "125 days employment guarantee",
  "125 days rural employment",
  "VB-G RAM G funding pattern",
  "VB-G RAM G 60 40",
  "VB-G RAM G 90 10",
  "VB-G RAM G normative allocation",
  "Rural Development Current Affairs",
  "Ministry of Rural Development",
  "Viksit Bharat 2047",
  "Gram Panchayat Employment Scheme",
  "Rural Infrastructure Development",
  "VB-G RAM G MCQ",
  "VB-G RAM G Act notes",
  "MGNREGA 2005",
  "Current Affairs 2026",
  "UPSC Current Affairs 2026",
  "SSC Current Affairs 2026",
  "HSSC CET Current Affairs",
  "UPPSC Current Affairs",
  "State PCS Current Affairs",
  "Indian Polity Current Affairs",
  "Government Schemes Current Affairs",
  "विकसित भारत जी राम जी अधिनियम",
  "विकसित भारत रोजगार गारंटी अधिनियम",
  "वीबी जी राम जी अधिनियम 2025",
  "125 दिन रोजगार गारंटी",
  "मनरेगा नया कानून 2026",
  "मनरेगा और विकसित भारत जी राम जी अंतर",
  "ग्रामीण रोजगार गारंटी",
  "ग्रामीण विकास करेंट अफेयर्स",
  "सरकारी योजना करेंट अफेयर्स 2026",
  "करेंट अफेयर्स हिंदी",
  "प्रतियोगी परीक्षा करेंट अफेयर्स",
]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: TITLE,

  description: DESCRIPTION,

  applicationName: "CET Test",

  keywords: KEYWORDS,

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "CET Test",
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
  },

  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },

  category: "Education",

  other: {
    "content-language": "en-IN, hi-IN",
    "article:section": "Government Schemes and Current Affairs",
    "article:tag":
      "VB-G RAM G Act, MGNREGA, Rural Development, Employment Guarantee, Current Affairs",
  },
}

const organizationSchema = {
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,

  name: "CET Test",
  url: SITE_URL,

  description:
    "Free competitive examination preparation platform offering current affairs, study materials, practice questions and mock tests.",
}

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  name: "CET Test",
  url: SITE_URL,

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: ["en-IN", "hi-IN"],
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
      name: "VB-G RAM G Act, 2025",
      item: PAGE_URL,
    },
  ],
}

const webpageSchema = {
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,

  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,

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
    "VB-G RAM G Act 2025: Features, Employment Guarantee and MGNREGA Comparison",

  alternativeHeadline:
    "विकसित भारत जी राम जी अधिनियम 2025: 125 दिन रोजगार गारंटी, मुख्य प्रावधान और प्रश्न",

  description: DESCRIPTION,

  url: PAGE_URL,

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },

  author: {
    "@id": `${SITE_URL}/#organization`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: ["en-IN", "hi-IN"],

  articleSection: [
    "Current Affairs",
    "Government Schemes",
    "Rural Development",
    "Employment and Livelihood",
  ],

  keywords: [
    "VB-G RAM G Act 2025",
    "MGNREGA",
    "Rural Employment Guarantee",
    "125 Days Employment",
    "Viksit Bharat 2047",
  ],

  about: [
    {
      "@type": "Thing",
      name: "Viksit Bharat Guarantee for Rozgar and Ajeevika Mission (Gramin) Act, 2025",
    },
    {
      "@type": "Thing",
      name: "Rural employment guarantee in India",
    },
    {
      "@type": "Thing",
      name: "Mahatma Gandhi National Rural Employment Guarantee Act, 2005",
    },
    {
      "@type": "Thing",
      name: "Rural infrastructure and livelihood development",
    },
  ],

  citation: [
    {
      "@type": "WebPage",
      name: "Ministry of Rural Development - Commencement of VB-G RAM G Act",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259703",
    },
    {
      "@type": "WebPage",
      name: "Government FAQs on the VB-G RAM G Act, 2025",
      url: "https://www.pib.gov.in/FaqDetails.aspx?ModuleId=4&NoteId=158511&lang=1&reg=3",
    },
  ],

  isAccessibleForFree: true,

  educationalUse: [
    "Self-study",
    "Competitive exam preparation",
    "Revision",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name: "VB-G RAM G Act 2025 - Bilingual Notes and Practice MCQs",

  description: DESCRIPTION,

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  learningResourceType: [
    "Study guide",
    "Current affairs notes",
    "Practice questions",
  ],

  educationalUse: [
    "Exam preparation",
    "Self-assessment",
    "Revision",
  ],

  educationalLevel: "Competitive examination preparation",

  teaches: [
    "VB-G RAM G Act 2025",
    "125 days statutory employment guarantee",
    "Comparison between MGNREGA and VB-G RAM G",
    "Centre-State funding pattern",
    "Normative allocations",
    "Rural infrastructure development",
    "Employment rights and unemployment allowance",
  ],

  isAccessibleForFree: true,

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },
}

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    webpageSchema,
    articleSchema,
    learningResourceSchema,
  ],
}

export default function VBRAMGLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {children}
    </>
  )
}
