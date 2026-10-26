import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/ramsar-site-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "India's 101st Ramsar Site 2026: Glaw Lake & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Learn about Glaw Lake, India's 101st Ramsar Site in Arunachal Pradesh. Explore the Ramsar Convention, 100th site Surha Tal, Montreux Record, UP wetlands and bilingual MCQs for UKPSC, UKSSSC, SSC and UPSC."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords: [
    // Primary keywords
    "India 101st Ramsar Site 2026",
    "101st Ramsar Site India",
    "India's 101st Ramsar Site",
    "101st Ramsar Site 2026",
    "Glaw Lake Ramsar Site",
    "Glaw Lake Arunachal Pradesh",
    "Glaw Lake 2026 current affairs",
    "Glaw Lake Ramsar designation",
    "Arunachal Pradesh first Ramsar Site",
    "Kamlang Tiger Reserve Glaw Lake",

    // Ramsar Convention
    "Ramsar Convention",
    "Ramsar Convention 1971",
    "Ramsar Convention India",
    "Ramsar Convention Iran",
    "Wetlands of International Importance",
    "Ramsar Sites India 2026",
    "Ramsar Sites 2026 current affairs",
    "Ramsar Sites list India",
    "Ramsar Sites India PDF",
    "Ramsar Convention important facts",
    "World Wetlands Day",
    "Wetland Conservation India",

    // Important milestones
    "India 100th Ramsar Site",
    "100th Ramsar Site India 2026",
    "Jai Prakash Narayan Bird Sanctuary Ramsar",
    "Surha Tal Ramsar Site",
    "Surha Tal Ballia Uttar Pradesh",
    "100th Ramsar Site 5 June 2026",
    "India first Ramsar Sites",
    "Chilika Lake Ramsar Site",
    "Keoladeo National Park Ramsar",
    "Largest Ramsar Site India",
    "Sundarban Wetland Ramsar Site",
    "Smallest Ramsar Site India",

    // State-wise keywords
    "Ramsar Sites Uttar Pradesh 2026",
    "Uttar Pradesh Ramsar Sites list",
    "UP Ramsar Sites 2026",
    "Tamil Nadu Ramsar Sites 2026",
    "State with highest Ramsar Sites India",
    "Haiderpur Wetland Ramsar",
    "Bakhira Wildlife Sanctuary Ramsar",
    "Shekha Jheel Ramsar",
    "Patna Bird Sanctuary Ramsar",
    "Upper Ganga River Ramsar Site",
    "Sauj Jheel Ramsar Site",
    "Ramsar Sites Arunachal Pradesh",

    // Montreux Record
    "Montreux Record",
    "Montreux Record India",
    "Montreux Record Ramsar Sites",
    "Keoladeo National Park Montreux Record",
    "Loktak Lake Montreux Record",
    "Wetland Ecological Character",

    // Competitive exams
    "Ramsar Sites 2026 UPSC",
    "Ramsar Sites 2026 UKPSC",
    "Ramsar Sites 2026 UKSSSC",
    "Ramsar Sites 2026 HSSC CET",
    "Ramsar Sites 2026 SSC CGL",
    "Ramsar Sites 2026 SSC CHSL",
    "Ramsar Sites 2026 UPPSC",
    "Ramsar Sites 2026 UPSSSC",
    "Ramsar Sites 2026 Railway Exams",
    "Ramsar Sites Environment GK",
    "Ramsar Sites 2026 MCQ",
    "Ramsar Sites Current Affairs Questions",
    "Environment Current Affairs 2026",
    "Ecology and Environment UPSC",

    // Hindi
    "भारत का 101वाँ रामसर स्थल",
    "101वाँ रामसर स्थल 2026",
    "भारत का 101वां रामसर स्थल कौन सा है",
    "ग्लॉ झील रामसर स्थल",
    "ग्लॉ झील अरुणाचल प्रदेश",
    "अरुणाचल प्रदेश का पहला रामसर स्थल",
    "भारत का 100वाँ रामसर स्थल",
    "सुरहा ताल रामसर स्थल",
    "जय प्रकाश नारायण पक्षी अभयारण्य",
    "रामसर कन्वेंशन 1971",
    "भारत के रामसर स्थल 2026",
    "उत्तर प्रदेश के रामसर स्थल",
    "भारत में सर्वाधिक रामसर स्थल",
    "मॉन्ट्रो रिकॉर्ड",
    "रामसर स्थल सामान्य ज्ञान",
    "रामसर स्थल करेंट अफेयर्स",
    "रामसर स्थल प्रश्न उत्तर",

    // People Also Ask / WH questions
    "Which is India's 101st Ramsar Site",
    "Where is Glaw Lake located",
    "When was Glaw Lake declared a Ramsar Site",
    "Which state got its first Ramsar Site in 2026",
    "Which is India's 100th Ramsar Site",
    "Where is Surha Tal located",
    "How many Ramsar Sites are there in India in 2026",
    "Which state has the most Ramsar Sites",
    "What is the Ramsar Convention",
    "When did India join the Ramsar Convention",
    "What is the Montreux Record",
    "Which Indian wetlands are on the Montreux Record",
    "Which is India's largest Ramsar Site",
    "Why are Ramsar Sites important",

    // AI / educational searches
    "India 101st Ramsar Site explained",
    "Glaw Lake important facts",
    "Ramsar Convention explained in Hindi",
    "Ramsar Sites 2026 complete notes",
    "Ramsar Sites 2026 Hindi English",
    "Ramsar Sites bilingual study material",
    "Ramsar Sites 2026 practice MCQs",
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
          "Glaw Lake - India's 101st Ramsar Site 2026",
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
    "India's 101st Ramsar Site 2026 | भारत का 101वाँ रामसर स्थल",
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
    "India's 101st Ramsar Site 2026: Glaw Lake, Ramsar Convention, Wetlands and MCQs",

  alternativeHeadline:
    "भारत का 101वाँ रामसर स्थल 2026: ग्लॉ झील, रामसर कन्वेंशन और महत्वपूर्ण प्रश्न",

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
      name: "Glaw Lake",
    },
    {
      "@type": "Thing",
      name: "Ramsar Convention",
    },
    {
      "@type": "Thing",
      name: "Wetlands of International Importance",
    },
    {
      "@type": "Thing",
      name: "Montreux Record",
    },
    {
      "@type": "Thing",
      name: "Wetland Conservation",
    },
    {
      "@type": "Place",
      name: "Arunachal Pradesh, India",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "Environment and Ecology Revision",
    "Current Affairs Study",
    "General Knowledge",
  ],

  citation: [
    "https://www.ramsar.org/news/india-designates-glaw-lake-wetland-international-importance",
    "https://www.ramsar.org/news/thats-century-india-names-its-100th-wetland-international-importance",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2294036",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2328132",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "India's 101st Ramsar Site 2026 - Glaw Lake Notes and MCQs",

  description:
    "Bilingual environment current-affairs study material covering Glaw Lake, India's 100th and 101st Ramsar Sites, the Ramsar Convention, Montreux Record and state-wise wetlands.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  educationalLevel:
    "Competitive Examination Preparation",

  learningResourceType: [
    "Environment Study Notes",
    "Current Affairs",
    "General Knowledge",
    "Multiple Choice Questions",
  ],

  teaches: [
    "Glaw Lake and India's 101st Ramsar Site",
    "Ramsar Convention",
    "India's Ramsar Sites",
    "Montreux Record",
    "Wetland Conservation",
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
      name: "India's 101st Ramsar Site 2026",
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

export default function RamsarSiteLayout({
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