import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/sarnath-unesco"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_TITLE =
  "Sarnath: India's 45th UNESCO Site 2026 & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Study Sarnath, India's 45th UNESCO World Heritage Site in 2026. Learn its history, Buddha's first sermon, Dhamek Stupa, Ashokan Lion Capital and bilingual MCQs for UPSC, UKPSC, UKSSSC, HSSC CET and SSC."

const PAGE_IMAGE = `${SITE_URL}/og-image.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  keywords: [
    // Primary SEO keywords
    "Sarnath UNESCO World Heritage Site 2026",
    "Sarnath 45th UNESCO World Heritage Site",
    "India 45th UNESCO World Heritage Site",
    "India's 45th World Heritage Site",
    "Ancient Buddhist Site of Sarnath",
    "Sarnath World Heritage Site",
    "Sarnath UNESCO 2026",
    "Sarnath UNESCO current affairs",
    "Sarnath UNESCO PDF",
    "Sarnath UNESCO MCQ",
    "Sarnath UNESCO questions and answers",

    // Location and designation
    "Sarnath Varanasi Uttar Pradesh",
    "Sarnath World Heritage Site location",
    "Sarnath UNESCO inscription date",
    "Sarnath 25 July 2026",
    "48th World Heritage Committee",
    "48th UNESCO session Busan",
    "UNESCO Busan 2026 India",
    "India UNESCO Heritage Sites 2026",
    "World Heritage Sites in Uttar Pradesh",

    // Buddhism and history
    "Sarnath Buddhist History",
    "Sarnath Gautama Buddha",
    "Buddha First Sermon Sarnath",
    "Dharmachakra Pravartana",
    "Setting in Motion of the Wheel of Dharma",
    "Four Noble Truths Buddhism",
    "Buddhist Pilgrimage Sites India",
    "Dhamek Stupa Sarnath",
    "Ashoka Pillar Sarnath",
    "Ashokan Lion Capital",
    "National Emblem of India Sarnath",
    "Sarnath Archaeological Site",
    "Sarnath Ancient Buddhist Monuments",
    "Bodh Gaya vs Sarnath",

    // UNESCO information
    "UNESCO World Heritage Sites India",
    "UNESCO World Heritage Sites India 2026",
    "45 UNESCO World Heritage Sites India",
    "37 Cultural 7 Natural 1 Mixed UNESCO India",
    "UNESCO Cultural Heritage India",
    "UNESCO World Heritage Convention",
    "UNESCO World Heritage Committee",
    "UNESCO Heritage Sites List India",
    "Khangchendzonga Mixed World Heritage Site",
    "UNESCO Tentative List India",
    "UNESCO Heritage GK",

    // Competitive exams
    "Sarnath UNESCO UPSC",
    "Sarnath UNESCO UKPSC",
    "Sarnath UNESCO UKSSSC",
    "Sarnath UNESCO HSSC CET",
    "Sarnath UNESCO SSC CGL",
    "Sarnath UNESCO SSC CHSL",
    "Sarnath UNESCO UPPSC",
    "Sarnath UNESCO UPSSSC",
    "Sarnath UNESCO Railway Exams",
    "Sarnath UNESCO State PCS",
    "Art and Culture Current Affairs 2026",
    "Buddhist History Current Affairs",
    "Ancient Indian History MCQ",
    "UNESCO Sites 2026 MCQ",
    "Uttar Pradesh Current Affairs 2026",

    // Hindi keywords
    "सारनाथ यूनेस्को विश्व धरोहर स्थल 2026",
    "भारत का 45वाँ यूनेस्को विश्व धरोहर स्थल",
    "सारनाथ भारत का 45वाँ यूनेस्को स्थल",
    "सारनाथ विश्व धरोहर स्थल",
    "सारनाथ का इतिहास",
    "सारनाथ वाराणसी उत्तर प्रदेश",
    "सारनाथ में बुद्ध का प्रथम उपदेश",
    "धर्मचक्र प्रवर्तन",
    "धमेख स्तूप सारनाथ",
    "अशोक स्तंभ सारनाथ",
    "भारत का राष्ट्रीय प्रतीक",
    "यूनेस्को विश्व धरोहर स्थल भारत 2026",
    "भारत के विश्व धरोहर स्थल",
    "सारनाथ करेंट अफेयर्स",
    "सारनाथ सामान्य ज्ञान",
    "सारनाथ प्रश्न उत्तर",
    "प्राचीन भारत का इतिहास",
    "बौद्ध धर्म सामान्य ज्ञान",

    // People Also Ask / WH
    "Which is India's 45th UNESCO World Heritage Site",
    "When was Sarnath added to UNESCO World Heritage List",
    "Where is Sarnath located",
    "What is Sarnath famous for",
    "Where did Gautama Buddha give his first sermon",
    "Where did Gautama Buddha attain enlightenment",
    "What is Dharmachakra Pravartana",
    "Why is Sarnath important in Buddhism",
    "What is the significance of Dhamek Stupa",
    "Where was the Ashokan Lion Capital found",
    "How many UNESCO World Heritage Sites does India have",
    "How many cultural heritage sites are in India",
    "What happened at the 48th World Heritage Committee session",
    "Why was Sarnath included in UNESCO World Heritage List",

    // AI / AEO learning intent
    "Sarnath UNESCO explained",
    "Sarnath important facts for exams",
    "Sarnath UNESCO Hindi English notes",
    "Sarnath Buddhist history explained",
    "Sarnath 2026 bilingual current affairs",
    "Sarnath UNESCO exam preparation",
    "Sarnath UNESCO practice questions",
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
          "Sarnath - India's 45th UNESCO World Heritage Site 2026",
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
    "Sarnath - India's 45th UNESCO World Heritage Site",
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
    "Sarnath - India's 45th UNESCO World Heritage Site 2026: History, Significance and MCQs",

  alternativeHeadline:
    "सारनाथ - भारत का 45वाँ यूनेस्को विश्व धरोहर स्थल: इतिहास, महत्व एवं प्रश्न",

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
      "@type": "Place",
      name: "Sarnath",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Thing",
      name: "UNESCO World Heritage",
    },
    {
      "@type": "Thing",
      name: "Buddhist History",
    },
    {
      "@type": "Thing",
      name: "Dharmachakra Pravartana",
    },
    {
      "@type": "Thing",
      name: "Ashokan Lion Capital",
    },
    {
      "@type": "Thing",
      name: "Indian Cultural Heritage",
    },
  ],

  educationalUse: [
    "Competitive Examination Preparation",
    "Ancient Indian History",
    "Art and Culture Revision",
    "Current Affairs Study",
  ],

  citation: [
    "https://whc.unesco.org/en/list/927/",
    "https://www.unesco.org/en/articles/ancient-buddhist-site-sarnath-inscribed-unesco-world-heritage-list",
    "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289399",
  ],
}

const learningResourceSchema = {
  "@type": "LearningResource",
  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Sarnath UNESCO World Heritage Site 2026 - Bilingual Notes and MCQs",

  description:
    "Hindi and English study material on the Ancient Buddhist Site of Sarnath, UNESCO inscription, Buddha's first sermon, Dhamek Stupa, Ashokan Lion Capital and exam questions.",

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  educationalLevel:
    "Competitive Examination Preparation",

  learningResourceType: [
    "History Study Notes",
    "Art and Culture",
    "Current Affairs",
    "Multiple Choice Questions",
  ],

  teaches: [
    "Ancient Buddhist Site of Sarnath",
    "UNESCO World Heritage Sites in India",
    "Buddha's First Sermon",
    "Dharmachakra Pravartana",
    "Ashokan Lion Capital",
    "Buddhist Heritage",
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
      name: "Sarnath UNESCO World Heritage Site 2026",
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

export default function SarnathLayout({
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