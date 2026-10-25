import type { Metadata } from "next"
import type { ReactNode } from "react"

const SITE_URL = "https://cettest.site"

const PAGE_PATH =
  "/current-affairs/by-topic/scheme-2026"

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const SITE_NAME = "CET Test"

const PAGE_TITLE =
  "Government Schemes 2026: 35 Important Schemes & MCQs | CET Test"

const PAGE_DESCRIPTION =
  "Study 35 important government schemes and initiatives of 2026 in Hindi and English. Get ministry details, key facts and one-liner questions for UKSSSC, UKPSC, HSSC CET, UPSC, SSC and State PCS exams."

const PAGE_TITLE_HI =
  "महत्वपूर्ण सरकारी योजनाएँ एवं पहलें 2026"

const PAGE_DESCRIPTION_HI =
  "सरकारी योजनाएँ 2026 के 35 महत्वपूर्ण विषय हिंदी और अंग्रेज़ी में पढ़ें। मंत्रालय, मुख्य तथ्य, महत्वपूर्ण प्रश्नोत्तर और UKSSSC, UKPSC, HSSC CET, UPSC, SSC एवं राज्य PCS परीक्षाओं की तैयारी के लिए अध्ययन सामग्री।"

// The IDs below correspond to sections in your existing page.
// They are anchors on ONE page, not 35 separate URLs.
const schemeTopics = [
  {
    id: "mission-rangeen-machhli-2031",
    name: "Mission Rangeen Machhli 2031",
  },
  {
    id: "pradhan-mantri-matsya-sampada-yojana",
    name: "Pradhan Mantri Matsya Sampada Yojana",
  },
  {
    id: "project-shikhar",
    name: "Project Shikhar",
  },
  {
    id: "bharat-vann-green-initiative",
    name: "Bharat Vann Green Initiative",
  },
  {
    id: "pmsma",
    name: "Pradhan Mantri Surakshit Matritva Abhiyan",
  },
  {
    id: "oilseeds-kisaan-mitra",
    name: "Oilseeds Kisaan Mitra",
  },
  {
    id: "wt-marut-portal",
    name: "WT-MARUT Portal",
  },
  {
    id: "bharati-programme",
    name: "BHARATI Programme",
  },
  {
    id: "nirbhay-chetna",
    name: "Nirbhay Chetna",
  },
  {
    id: "suman-roadmap-2030",
    name: "SUMAN Roadmap 2030",
  },
  {
    id: "saras-shakti-collection",
    name: "SARAS Shakti Collection",
  },
  {
    id: "pmfme-scheme",
    name: "PMFME Scheme",
  },
  {
    id: "daanveer-initiative",
    name: "DAANVEER Initiative",
  },
  {
    id: "dweepti-yojana",
    name: "DWEEPTI Yojana",
  },
  {
    id: "atmanirbhar-panchayat-samarth-portal",
    name: "Atmanirbhar Panchayat and SAMARTH Portal",
  },
  {
    id: "corporate-mitra-scheme",
    name: "Corporate Mitra Scheme",
  },
  {
    id: "mission-golden-spice",
    name: "Mission Golden Spice",
  },
  {
    id: "project-sarathi",
    name: "Project SARATHI",
  },
  {
    id: "samudra-manthan-scheme",
    name: "Samudra Manthan Scheme",
  },
  {
    id: "e-samudra-portal",
    name: "E-Samudra Portal",
  },
  {
    id: "pm-surya-sarovar-yojana",
    name: "Pradhan Mantri Surya Sarovar Yojana",
  },
  {
    id: "gobardhan-national-circular-bioenergy-scheme",
    name: "GOBARdhan National Circular Bioenergy Scheme",
  },
  {
    id: "parivartan-scheme",
    name: "PARIVARTAN Scheme",
  },
  {
    id: "garbhini-mitra-course",
    name: "Garbhini Mitra Course",
  },
  {
    id: "national-hpv-vaccination-campaign",
    name: "National HPV Vaccination Campaign",
  },
  {
    id: "samriddh-gram-phygital-services",
    name: "Samriddh Gram Phygital Services",
  },
  {
    id: "she-mart-initiative",
    name: "SHE-MART Initiative",
  },
  {
    id: "bhavya-initiatives",
    name: "BHAVYA Initiatives",
  },
  {
    id: "pm-rahat-scheme",
    name: "PM RAHAT Scheme",
  },
  {
    id: "sardar-vallabhbhai-patel-employment-industrial-zone",
    name: "Sardar Vallabhbhai Patel Employment and Industrial Zone",
  },
  {
    id: "sampoornata-abhiyan-2-0",
    name: "Sampoornata Abhiyan 2.0",
  },
  {
    id: "bharat-vistaar",
    name: "Bharat-VISTAAR",
  },
  {
    id: "bharat-taxi",
    name: "Bharat Taxi",
  },
  {
    id: "vibrant-villages-programme-ii",
    name: "Vibrant Villages Programme II",
  },
  {
    id: "pragati-initiative",
    name: "PRAGATI Initiative",
  },
] as const

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  classification:
    "Educational Study Material, Government Schemes, Current Affairs, Competitive Exam Preparation",

  keywords: [
    // Primary SEO
    "government schemes 2026",
    "important government schemes 2026",
    "government schemes and initiatives 2026",
    "new government schemes 2026",
    "latest government schemes 2026",
    "Indian government schemes 2026",
    "central government schemes 2026",
    "government yojana 2026",
    "government schemes current affairs",
    "government schemes current affairs 2026",
    "government schemes notes",
    "government schemes PDF",
    "government schemes in Hindi",
    "government schemes in English",
    "government schemes bilingual notes",
    "government schemes MCQ 2026",
    "government schemes questions and answers",
    "government schemes one liner questions",

    // UKSSSC
    "UKSSSC government schemes 2026",
    "UKSSSC current affairs 2026",
    "UKSSSC government schemes notes",
    "UKSSSC schemes MCQ",
    "UKSSSC exam preparation",
    "UKSSSC Junior Assistant current affairs",
    "UKSSSC Patwari current affairs",
    "UKSSSC VDO current affairs",
    "UKSSSC important yojana 2026",

    // UKPSC
    "UKPSC government schemes 2026",
    "UKPSC current affairs 2026",
    "UKPSC government schemes notes",
    "UKPSC schemes MCQ",
    "UKPSC Prelims current affairs",
    "UKPSC RO ARO current affairs",
    "Uttarakhand PCS current affairs",
    "Uttarakhand competitive exam current affairs",

    // HSSC CET
    "HSSC CET government schemes 2026",
    "HSSC CET current affairs 2026",
    "Haryana CET government schemes",
    "HSSC CET Group C current affairs",
    "HSSC CET Group D current affairs",
    "Haryana government exam preparation",
    "Haryana current affairs 2026",

    // UPSC & State PCS
    "UPSC government schemes 2026",
    "UPSC Prelims government schemes",
    "UPSC current affairs 2026",
    "UPPSC government schemes 2026",
    "State PCS government schemes",
    "PSC government schemes notes",
    "important schemes for competitive exams",
    "government schemes for civil services",

    // SSC, Railway & Banking
    "SSC government schemes 2026",
    "SSC CGL government schemes",
    "SSC CHSL current affairs",
    "SSC GD government schemes",
    "Railway Group D current affairs",
    "RRB NTPC government schemes",
    "banking exam government schemes",
    "IBPS current affairs 2026",
    "SBI Clerk current affairs",

    // Topic-specific terms
    "Mission Rangeen Machhli 2031",
    "Pradhan Mantri Matsya Sampada Yojana",
    "Project Shikhar",
    "Bharat Vann Green Initiative",
    "Pradhan Mantri Surakshit Matritva Abhiyan",
    "Oilseeds Kisaan Mitra",
    "WT MARUT Portal",
    "BHARATI Programme",
    "Nirbhay Chetna",
    "SUMAN Roadmap 2030",
    "SARAS Shakti Collection",
    "PMFME Scheme",
    "DAANVEER Initiative",
    "DWEEPTI Yojana",
    "Atmanirbhar Panchayat Programme",
    "SAMARTH Portal",
    "Corporate Mitra Scheme",
    "Mission Golden Spice",
    "Project SARATHI",
    "Samudra Manthan Scheme",
    "E Samudra Portal",
    "PM Surya Sarovar Yojana",
    "GOBARdhan Scheme",
    "PARIVARTAN Scheme",
    "Garbhini Mitra Course",
    "HPV Vaccination Campaign",
    "Samriddh Gram Phygital Services",
    "SHE MART Initiative",
    "BHAVYA Initiatives",
    "PM RAHAT Scheme",
    "Sampoornata Abhiyan 2.0",
    "Bharat VISTAAR",
    "Bharat Taxi",
    "Vibrant Villages Programme II",
    "PRAGATI Initiative",

    // Hindi searches
    "सरकारी योजनाएं 2026",
    "सरकारी योजनाएँ 2026",
    "महत्वपूर्ण सरकारी योजनाएं 2026",
    "नई सरकारी योजनाएं 2026",
    "केंद्र सरकार की योजनाएं 2026",
    "भारत सरकार की योजनाएं",
    "सरकारी योजनाएं करंट अफेयर्स",
    "सरकारी योजनाएं प्रश्न उत्तर",
    "सरकारी योजनाएं वन लाइनर",
    "सरकारी योजनाओं के महत्वपूर्ण प्रश्न",
    "सरकारी योजना किस मंत्रालय से संबंधित है",
    "यूकेएसएसएससी करंट अफेयर्स 2026",
    "यूकेपीएससी करंट अफेयर्स 2026",
    "एचएसएससी सीईटी करंट अफेयर्स",
    "प्रतियोगी परीक्षा सरकारी योजनाएं",

    // WH / People Also Ask searches
    "what are the important government schemes of 2026",
    "which government schemes are important for UPSC",
    "which schemes are important for UKSSSC",
    "which schemes are important for UKPSC",
    "what is Bharat VISTAAR",
    "what is PMFME scheme",
    "what is PMMSY",
    "who launched Bharat VISTAAR",
    "when was PMSMA launched",
    "which ministry implements PMMSY",
    "how to prepare government schemes for competitive exams",
    "where to study government schemes in Hindi",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

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

    siteName: SITE_NAME,

    title:
      "Government Schemes 2026 | 35 Important Schemes in Hindi & English",

    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Government Schemes 2026 – Important Notes & Q&A",

    description: PAGE_DESCRIPTION,
  },

  other: {
    "content-language": "en-IN, hi-IN",
    "target-audience":
      "UKSSSC, UKPSC, HSSC CET, UPSC, SSC, UPPSC, Railway, Banking, State PCS Aspirants",
    "subject":
      "Indian Government Schemes and Initiatives 2026",
  },
}

// ------------------------------------------------------------------
// Structured data: SEO, AEO and machine-readable educational content
// ------------------------------------------------------------------

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
}

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ["en-IN", "hi-IN"],
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
}

const webPageSchema = {
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#webpage`,

  url: PAGE_URL,

  name: PAGE_TITLE,

  alternateName: PAGE_TITLE_HI,

  description: PAGE_DESCRIPTION,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  about: [
    {
      "@type": "Thing",
      name: "Indian Government Schemes 2026",
    },
    {
      "@type": "Thing",
      name: "Government Initiatives and Current Affairs",
    },
    {
      "@type": "Thing",
      name: "Competitive Examination Preparation",
    },
  ],

  mainEntity: {
    "@id": `${PAGE_URL}#learning-resource`,
  },

  hasPart: schemeTopics.map((topic) => ({
    "@type": "WebPageElement",
    "@id": `${PAGE_URL}#${topic.id}`,
    name: topic.name,
    url: `${PAGE_URL}#${topic.id}`,
  })),
}

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name: PAGE_TITLE,

  alternateName: PAGE_TITLE_HI,

  description: PAGE_DESCRIPTION_HI,

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Study Notes",
    "Current Affairs",
    "Exam Preparation Guide",
    "Questions and Answers",
  ],

  educationalLevel: [
    "Competitive Examination",
    "General Studies",
  ],

  educationalUse: [
    "Exam Preparation",
    "Revision",
    "Self Study",
  ],

  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType:
      "UPSC, UKPSC, UKSSSC, HSSC CET, SSC, UPPSC, Railway, Banking and State PCS aspirants",
  },

  teaches: [
    "Important Government Schemes of India",
    "Government Initiatives 2026",
    "Ministries and Implementing Agencies",
    "Current Affairs for Competitive Exams",
  ],

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },
}

const itemListSchema = {
  "@type": "ItemList",

  "@id": `${PAGE_URL}#topic-list`,

  name: "35 Important Government Schemes and Initiatives 2026",

  numberOfItems: schemeTopics.length,

  itemListOrder: "https://schema.org/ItemListOrderAscending",

  itemListElement: schemeTopics.map((topic, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: topic.name,
    url: `${PAGE_URL}#${topic.id}`,
  })),
}

const breadcrumbSchema = {
  "@type": "BreadcrumbList",

  "@id": `${PAGE_URL}#breadcrumbs`,

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
      name: "Government Schemes & Initiatives 2026",
      item: PAGE_URL,
    },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    learningResourceSchema,
    itemListSchema,
    breadcrumbSchema,
  ],
}

export default function GovernmentSchemesLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
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