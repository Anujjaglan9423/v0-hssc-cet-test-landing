import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/posh-act"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "PoSH Act 2013: Key Provisions, ICC, SHe-Box & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Learn PoSH Act 2013 in Hindi and English: workplace sexual harassment law, Internal Committee, complaint procedure, Vishaka Guidelines, SHe-Box and MCQs for UPSC, UKPSC, UKSSSC, SSC and HSSC CET."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords: [
    // Primary SEO
    "PoSH Act 2013",
    "POSH Act 2013",
    "POSH Act 2013 explained",
    "POSH Act 2013 summary",
    "POSH Act 2013 notes",
    "POSH Act 2013 PDF",
    "POSH Act 2013 important questions",
    "POSH Act 2013 MCQ",
    "POSH Act 2013 current affairs 2026",

    // Full act name
    "Sexual Harassment of Women at Workplace Act 2013",
    "Sexual Harassment Prevention Prohibition Redressal Act",
    "Prevention of Sexual Harassment at Workplace India",
    "Workplace Sexual Harassment Law India",
    "Workplace Harassment Act India",

    // Important provisions
    "POSH Act key provisions",
    "POSH Act Internal Committee",
    "POSH Act ICC",
    "POSH Act IC",
    "POSH Act Local Committee",
    "POSH Act complaint procedure",
    "POSH Act complaint time limit",
    "POSH Act three months complaint",
    "POSH Act 10 employees rule",
    "POSH Act employer responsibilities",
    "POSH Act applicability",
    "POSH Act unorganised sector",
    "POSH Act inquiry procedure",
    "POSH Act penalties",
    "POSH Act women rights",

    // Constitutional and historical background
    "Vishaka Guidelines 1997",
    "Vishaka vs State of Rajasthan",
    "Vishaka Guidelines and POSH Act",
    "Article 14 POSH Act",
    "Article 15 POSH Act",
    "Article 21 workplace harassment",
    "Constitutional rights of women India",

    // SHe-Box
    "SHe-Box Portal",
    "SHe-Box Portal India",
    "SHe-Box Ministry of Women and Child Development",
    "SHe-Box sexual harassment complaint",
    "SHe-Box online complaint portal",
    "Ministry of Women and Child Development POSH",

    // Current affairs
    "POSH Act 2026 current affairs",
    "POSH Act news 2026",
    "TCS Nashik POSH case 2026",
    "TCS Nashik workplace harassment case",
    "POSH Act compliance India 2026",

    // Exam keywords
    "POSH Act for UPSC",
    "POSH Act for UKPSC",
    "POSH Act for UKSSSC",
    "POSH Act for HSSC CET",
    "POSH Act for SSC CGL",
    "POSH Act for SSC CHSL",
    "POSH Act for UPPSC",
    "POSH Act for State PCS",
    "POSH Act for Railway Exams",
    "POSH Act GK questions",
    "POSH Act competitive exam notes",
    "Women and Law Current Affairs",
    "Indian Polity Current Affairs 2026",

    // Hindi
    "पॉश अधिनियम 2013",
    "पॉश एक्ट 2013",
    "कार्यस्थल पर महिलाओं का यौन उत्पीड़न अधिनियम",
    "कार्यस्थल यौन उत्पीड़न कानून 2013",
    "पॉश अधिनियम के प्रमुख प्रावधान",
    "आंतरिक शिकायत समिति",
    "स्थानीय शिकायत समिति",
    "कार्यस्थल यौन उत्पीड़न शिकायत प्रक्रिया",
    "विशाखा दिशानिर्देश 1997",
    "शी बॉक्स पोर्टल",
    "पॉश एक्ट 2013 प्रश्न उत्तर",
    "पॉश एक्ट 2013 सामान्य ज्ञान",
    "पॉश अधिनियम 2013 करेंट अफेयर्स",

    // People Also Ask
    "What is POSH Act 2013",
    "What is the full form of POSH",
    "When was POSH Act enacted",
    "Who does POSH Act apply to",
    "How many employees require an Internal Committee",
    "What is an Internal Committee under POSH Act",
    "Who heads the Internal Committee under POSH",
    "How to file a complaint under POSH Act",
    "What is the time limit for POSH complaint",
    "What is SHe-Box portal",
    "Which ministry manages SHe-Box",
    "What are Vishaka Guidelines",
    "Why was POSH Act introduced",
    "How is POSH Act linked to Article 21",

    // AI / Learning intent
    "POSH Act 2013 in simple language",
    "POSH Act explained in Hindi",
    "POSH Act explained in English",
    "POSH Act bilingual notes",
    "POSH Act questions with answers",
    "POSH Act exam preparation",
    "POSH Act complete study guide",
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
        alt: "PoSH Act 2013 - Key Provisions and MCQs",
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
  name: "PoSH Act 2013 | पॉश अधिनियम 2013",
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
    "PoSH Act 2013: Key Provisions, Internal Committee, Vishaka Guidelines and MCQs",

  alternativeHeadline:
    "पॉश अधिनियम 2013: प्रमुख प्रावधान, शिकायत समिति, विशाखा दिशानिर्देश एवं प्रश्न",

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
      name: "PoSH Act 2013",
    },
    {
      "@type": "Thing",
      name: "Workplace Sexual Harassment Prevention",
    },
    {
      "@type": "Thing",
      name: "Internal Committee",
    },
    {
      "@type": "Thing",
      name: "Vishaka Guidelines",
    },
    {
      "@type": "Thing",
      name: "SHe-Box Portal",
    },
    {
      "@type": "Thing",
      name: "Women's Rights in India",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "Indian Polity Revision",
    "Legal Awareness",
    "Current Affairs Study",
  ],

  citation: [
    "https://shebox.wcd.gov.in/",
    "https://shebox.wcd.gov.in/legalprovision",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2227013",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name: "PoSH Act 2013 - Bilingual Notes and MCQs",

  description:
    "Hindi and English study notes on workplace sexual harassment prevention law, Internal Committees, complaint procedures, Vishaka Guidelines and SHe-Box.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  educationalLevel:
    "Competitive Examination Preparation",

  learningResourceType: [
    "Study Notes",
    "Indian Polity",
    "Legal Awareness",
    "Multiple Choice Questions",
  ],

  teaches: [
    "PoSH Act 2013",
    "Workplace Sexual Harassment Prevention",
    "Internal and Local Committees",
    "Complaint Procedure",
    "Vishaka Guidelines",
    "SHe-Box Portal",
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
      name: "PoSH Act 2013",
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

export default function PoshActLayout({
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