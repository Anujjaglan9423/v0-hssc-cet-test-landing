
import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const SLUG = "unpaid-domestic-labour"

const PAGE_URL = `${SITE_URL}/current-affairs/by-topic/${SLUG}`

const TITLE =
  "Monetization of Unpaid Domestic Labour 2026 | Supreme Court Judgment, MCQs"

const DESCRIPTION =
  "Study the Supreme Court's 2026 ruling on the economic value of unpaid domestic labour in motor accident compensation cases. Read bilingual Hindi-English notes, important facts, and practice MCQs for competitive exams."

const KEYWORDS = [
  "Monetization of Unpaid Domestic Labour 2026",
  "Unpaid Domestic Labour Supreme Court Judgment",
  "Unpaid Domestic Work India",
  "Homemaker Notional Income 2026",
  "Homemaker Compensation Supreme Court",
  "30000 per month homemaker compensation",
  "Loss of Domestic Care",
  "Shishu Pal v Surjeet",
  "Motor Vehicles Act 1988",
  "Supreme Court Judgment June 2026",
  "Women and Labour Current Affairs",
  "Unpaid Care Work India",
  "Time Use Survey 2019",
  "NSO Time Use Survey",
  "Economic Value of Domestic Work",
  "Women's Unpaid Work",
  "Gender Equality Current Affairs",
  "Women Empowerment Current Affairs",
  "Current Affairs 2026",
  "Current Affairs for UPSC",
  "Current Affairs for SSC",
  "Current Affairs for HSSC CET",
  "UPPSC Current Affairs 2026",
  "Competitive Exam Current Affairs",
  "Current Affairs MCQ Hindi English",
  "अवैतनिक घरेलू श्रम",
  "अवैतनिक घरेलू श्रम का आर्थिक मूल्यांकन",
  "घरेलू कार्य का आर्थिक मूल्य",
  "गृहिणी मुआवजा सुप्रीम कोर्ट",
  "गृहिणी की अनुमानित आय",
  "महिलाओं का अवैतनिक कार्य",
  "घरेलू देखभाल की हानि",
  "सुप्रीम कोर्ट निर्णय 2026",
  "मोटर वाहन दुर्घटना मुआवजा",
  "महिला सशक्तिकरण करेंट अफेयर्स",
  "करेंट अफेयर्स 2026 हिंदी",
  "प्रतियोगी परीक्षा करेंट अफेयर्स",
  "एचएसएससी सीईटी करेंट अफेयर्स",
  "यूपीएससी करेंट अफेयर्स",
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
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "CET Test",
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
    "article:section": "Current Affairs",
    "article:tag":
      "Unpaid Domestic Labour, Supreme Court, Women and Labour, Current Affairs 2026",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,

  name: "CET Test",
  url: SITE_URL,

  description:
    "Free online competitive exam preparation platform offering current affairs, study materials, practice questions and mock tests.",
}

const websiteSchema = {
  "@context": "https://schema.org",
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
  "@context": "https://schema.org",
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
      name: "Monetization of Unpaid Domestic Labour 2026",
      item: PAGE_URL,
    },
  ],
}

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,

  url: PAGE_URL,

  name: TITLE,

  description: DESCRIPTION,

  inLanguage: ["en-IN", "hi-IN"],

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  about: {
    "@type": "Thing",
    name: "Economic valuation of unpaid domestic labour",
  },

  breadcrumb: {
    "@id": `${PAGE_URL}#breadcrumb`,
  },

  mainEntity: {
    "@id": `${PAGE_URL}#article`,
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,

  headline:
    "Monetization of Unpaid Domestic Labour: Supreme Court Judgment 2026",

  alternativeHeadline:
    "अवैतनिक घरेलू श्रम का आर्थिक मूल्यांकन: सुप्रीम कोर्ट का निर्णय 2026",

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
    "Women and Labour",
    "Supreme Court Judgments",
    "Social Justice",
  ],

  keywords: [
    "Unpaid Domestic Labour",
    "Homemaker Compensation",
    "Supreme Court 2026",
    "Loss of Domestic Care",
    "Motor Vehicles Act",
    "Time Use Survey",
  ],

  about: [
    {
      "@type": "Thing",
      name: "Unpaid domestic labour",
    },
    {
      "@type": "Thing",
      name: "Homemaker compensation",
    },
    {
      "@type": "Thing",
      name: "Motor accident compensation",
    },
    {
      "@type": "Thing",
      name: "Economic valuation of care work",
    },
  ],

  citation: [
    {
      "@type": "CreativeWork",
      name: "Supreme Court of India judgment dated 11 June 2026",
      url: "https://api.sci.gov.in/supremecourt/2025/49698/49698_2025_6_1504_71848_Judgement_11-Jun-2026.pdf",
    },
    {
      "@type": "Report",
      name: "Time Use in India 2019",
      author: {
        "@type": "GovernmentOrganization",
        name: "Ministry of Statistics and Programme Implementation",
      },
      url: "https://www.mospi.gov.in/sites/default/files/publication_reports/Report_TUS_2019_0.pdf",
    },
  ],

  isAccessibleForFree: true,

  educationalUse: [
    "Self-study",
    "Competitive examination preparation",
    "Practice and revision",
  ],
}

const learningResourceSchema = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Monetization of Unpaid Domestic Labour 2026 - Bilingual Current Affairs Notes and MCQs",

  description: DESCRIPTION,

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  learningResourceType: [
    "Study guide",
    "Current affairs notes",
    "Practice questions",
  ],

  educationalUse: [
    "Revision",
    "Exam preparation",
    "Self-assessment",
  ],

  educationalLevel: "Competitive examination preparation",

  teaches: [
    "Economic valuation of unpaid domestic labour",
    "Homemaker compensation in motor accident cases",
    "Loss of domestic care",
    "NSO Time Use Survey",
    "Gender equality and unpaid care work",
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
  ].map(({ ["@context"]: _context, ...schema }) => schema),
}

export default function UnpaidDomesticLabourLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {children}
    </>
  )
}
