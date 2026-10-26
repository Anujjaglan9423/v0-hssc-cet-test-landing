import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/public-exams-amendment-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "Public Examinations Amendment Act 2026: Penalties & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Study the Public Examinations Amendment Act 2026: paper leak penalties, 60-day investigations, fast-track courts, fines and Hindi-English MCQs for UPSC, SSC, UKPSC, UKSSSC, UPPSC and HSSC CET."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords: [
    // Primary SEO
    "Public Examinations Amendment Act 2026",
    "Public Examinations Amendment Bill 2026",
    "Public Examinations Prevention of Unfair Means Amendment 2026",
    "Public Examinations Act 2024",
    "Public Examinations Act 2026",
    "Anti Paper Leak Act 2026",
    "Anti Paper Leak Law India",
    "Exam Cheating Prevention Law India",
    "Public Examinations Amendment 2026 PDF",
    "Public Examinations Amendment 2026 MCQ",

    // Core provisions
    "Public Examinations Amendment Act 2026 provisions",
    "Public Examinations Amendment Act 2026 penalties",
    "Paper Leak Punishment India 2026",
    "Exam Fraud Penalties 2026",
    "Question Paper Leak Law",
    "OMR Sheet Tampering Punishment",
    "Organised Exam Fraud Punishment",
    "Paper Leak Fine 2026",
    "Public Examinations 5 to 10 years imprisonment",
    "Public Examinations 50 lakh fine",
    "Exam Fraud 10 crore fine",
    "Exam Service Provider Penalties",
    "Public Examinations Service Provider Debarment",
    "Special Task Force Exam Fraud",
    "60 Day Investigation Exam Fraud",
    "Special Fast Track Courts Exam Fraud",
    "Exam Fraud Three Month Trial",
    "Public Examinations Appeal Procedure",

    // Legislative timeline
    "Public Examinations Amendment Bill 2026 Lok Sabha",
    "Public Examinations Amendment Bill 2026 Rajya Sabha",
    "Public Examinations Amendment Bill 2026 Presidential Assent",
    "Public Examinations Amendment Bill 2026 31 July",
    "Public Examinations Amendment Act 2026 Gazette",
    "NEET UG 2026 Paper Leak",
    "NEET 2026 Exam Reforms",

    // Competitive examinations
    "Public Examinations Act for UPSC",
    "Public Examinations Act for SSC",
    "Public Examinations Act for UKPSC",
    "Public Examinations Act for UKSSSC",
    "Public Examinations Act for UPPSC",
    "Public Examinations Act for UPSSSC",
    "Public Examinations Act for HSSC CET",
    "Public Examinations Act for Railway Exams",
    "Public Examinations Act for Banking Exams",
    "Polity Current Affairs 2026",
    "Important Bills and Acts 2026",
    "Government Exam Current Affairs 2026",
    "Indian Parliament Bills 2026",
    "Public Examinations Act GK Questions",

    // Hindi keywords
    "सार्वजनिक परीक्षा संशोधन अधिनियम 2026",
    "सार्वजनिक परीक्षा संशोधन विधेयक 2026",
    "सार्वजनिक परीक्षा अनुचित साधनों की रोकथाम अधिनियम",
    "सार्वजनिक परीक्षा अधिनियम 2024",
    "पेपर लीक कानून 2026",
    "पेपर लीक पर सजा",
    "परीक्षा में धोखाधड़ी कानून",
    "सार्वजनिक परीक्षा संशोधन विधेयक के प्रावधान",
    "पेपर लीक जुर्माना 2026",
    "परीक्षा धोखाधड़ी जांच समय सीमा",
    "फास्ट ट्रैक कोर्ट परीक्षा",
    "सार्वजनिक परीक्षा अधिनियम प्रश्न उत्तर",
    "सार्वजनिक परीक्षा अधिनियम करेंट अफेयर्स",
    "सार्वजनिक परीक्षा अधिनियम सामान्य ज्ञान",

    // People Also Ask / WH keywords
    "What is the Public Examinations Amendment Act 2026",
    "What changed in the Public Examinations Act 2026",
    "When was the Public Examinations Amendment Bill passed",
    "When did the President assent to the Amendment Act 2026",
    "What is the punishment for a paper leak in India",
    "What is the maximum fine for exam fraud",
    "What is the investigation time limit for exam fraud",
    "What are Special Fast Track Courts under the Act",
    "Which examinations are covered by the Public Examinations Act",
    "How does the 2026 amendment differ from the 2024 Act",
    "Why was the Public Examinations Act amended in 2026",

    // AEO and AI/LLM intent
    "Public Examinations Amendment Act 2026 explained",
    "2024 vs 2026 Public Examinations Act comparison",
    "Public Examinations Amendment 2026 simple explanation",
    "Public Examinations Amendment 2026 Hindi English",
    "Public Examinations Amendment 2026 bilingual notes",
    "Public Examinations Amendment 2026 questions answers",
    "Public Examinations Amendment 2026 exam preparation",
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
          "Public Examinations Amendment Act 2026 - Penalties, Provisions and MCQs",
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
    "Public Examinations Amendment Act 2026 | सार्वजनिक परीक्षा संशोधन अधिनियम 2026",
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
    "Public Examinations Amendment Act 2026: New Penalties, Fast-Track Courts, Investigation Timeline and MCQs",

  alternativeHeadline:
    "सार्वजनिक परीक्षा संशोधन अधिनियम 2026: नए दंड, फास्ट ट्रैक अदालतें एवं महत्वपूर्ण प्रश्न",

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
      name:
        "Public Examinations (Prevention of Unfair Means) Amendment Act, 2026",
    },
    {
      "@type": "Thing",
      name:
        "Public Examinations (Prevention of Unfair Means) Act, 2024",
    },
    {
      "@type": "Thing",
      name: "Question Paper Leaks",
    },
    {
      "@type": "Thing",
      name: "Examination Fraud",
    },
    {
      "@type": "Thing",
      name: "Special Fast Track Courts",
    },
    {
      "@type": "Thing",
      name: "Indian Legislative Reforms",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "Indian Polity Revision",
    "Current Affairs Revision",
    "Legal Awareness",
  ],

  citation: [
    "https://egazette.gov.in/WriteReadData/2026/275035.pdf",
    "https://sansad.in/getFile/BillsTexts/LSBillTexts/Asintroduced/AS%20INTRO7272026121928PM.pdf?source=legislation",
    "https://www.pib.gov.in/FactsheetDetails.aspx?Id=150800",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Public Examinations Amendment Act 2026 - Bilingual Study Notes and MCQs",

  description:
    "English and Hindi examination notes covering amendments to the 2024 public examinations law, penalties for unfair means, investigation timelines, fast-track courts and practice MCQs.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  educationalLevel:
    "Competitive Examination Preparation",

  learningResourceType: [
    "Study Notes",
    "Current Affairs",
    "Indian Polity",
    "Multiple Choice Questions",
  ],

  teaches: [
    "Public Examinations Act 2024",
    "Public Examinations Amendment Act 2026",
    "Paper Leak Penalties",
    "Investigation and Trial Timelines",
    "Special Fast Track Courts",
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
      name: "Public Examinations Amendment Act 2026",
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

export default function PublicExaminationsLayout({
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