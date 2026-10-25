import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// PAGE CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/india-unsc-2028";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "India UNSC 2028–29 Campaign & SHANTI Vision";

const PAGE_DESCRIPTION =
  "India's UNSC 2028–29 campaign explained: SHANTI vision, Jaishankar's announcement, Security Council membership, election rules, India's eight terms and MCQs.";

const PAGE_DESCRIPTION_HI =
  "भारत का UNSC 2028–29 अभियान और SHANTI विजन: जयशंकर की घोषणा, संयुक्त राष्ट्र सुरक्षा परिषद की संरचना, चुनाव प्रक्रिया, भारत की आठ सदस्यताएँ और MCQ।";

const OFFICIAL_SOURCE =
  "https://www.mea.gov.in/speeches-statements?dtl%2F41462=";

// ======================================================
// SEO METADATA
// ======================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: PAGE_TITLE,
  },

  description: PAGE_DESCRIPTION,

  applicationName: "CET Test",

  authors: [
    {
      name: "CET Test",
      url: SITE_URL,
    },
  ],

  creator: "CET Test",
  publisher: "CET Test",
  category: "Education",

  classification:
    "International Relations, United Nations, Global Governance, Current Affairs, Competitive Examination Preparation",

  keywords: [
    // MAIN
    "India UNSC 2028 2029",
    "India UNSC Campaign 2028 29",
    "India UNSC 2028 29 Campaign",
    "India UNSC Non Permanent Seat 2028",
    "India United Nations Security Council 2028",
    "India UNSC Election 2028 2029",
    "India UNSC Candidature",
    "India UNSC Campaign 2026",
    "India SHANTI Vision 2026",
    "SHANTI Vision UNSC",
    "SHANTI Vision India",
    "India UNSC Current Affairs 2026",
    "India UNSC Campaign Hindi English",

    // HINDI
    "भारत UNSC 2028 29 अभियान",
    "भारत संयुक्त राष्ट्र सुरक्षा परिषद अभियान",
    "भारत UNSC अस्थायी सदस्यता 2028",
    "भारत की सुरक्षा परिषद सदस्यता",
    "भारत का शांति विजन",
    "SHANTI विजन 2026",
    "संयुक्त राष्ट्र सुरक्षा परिषद 2028 29",
    "संयुक्त राष्ट्र सुरक्षा परिषद में भारत",
    "भारत UNSC चुनाव 2028",
    "भारत UNSC करेंट अफेयर्स 2026",
    "संयुक्त राष्ट्र सुरक्षा परिषद हिंदी",
    "भारत की अस्थायी सदस्यता अभियान",

    // SHANTI
    "SHANTI Full Form UNSC",
    "SHANTI Vision Full Form",
    "Securing Holistic Advancement through Norms Trust and Integrity",
    "SHANTI Framework 2026",
    "Jaishankar SHANTI Vision",
    "India SHANTI Global Governance",
    "SHANTI Vision International Relations",
    "What is SHANTI Vision",
    "SHANTI Vision Explained",
    "SHANTI Full Form in Hindi",
    "SHANTI Vision UPSC",
    "SHANTI Vision UKPSC",
    "SHANTI Vision UKSSSC",
    "शांति विजन का पूरा नाम",
    "शांति विजन क्या है",

    // MINISTER
    "S Jaishankar UNSC Campaign",
    "S Jaishankar SHANTI Vision 2026",
    "External Affairs Minister UNSC 2028",
    "Jaishankar United Nations 2026",
    "India UNSC Campaign Launch July 2026",
    "India Foreign Policy 2026",
    "Indian Diplomacy 2026",

    // UNSC STRUCTURE
    "United Nations Security Council",
    "UNSC Members",
    "UNSC Permanent Members",
    "UNSC Non Permanent Members",
    "UNSC P5 Countries",
    "UNSC Veto Power",
    "Five Permanent Members of UNSC",
    "Ten Non Permanent Members",
    "UNSC Composition",
    "UNSC Election Procedure",
    "UNSC Two Year Term",
    "UNSC Two Thirds Majority",
    "UN General Assembly UNSC Election",
    "UN Security Council Reform",

    // INDIA HISTORY
    "India UNSC Membership History",
    "How Many Times India Elected to UNSC",
    "India Eight Times UNSC Member",
    "India UNSC 2021 2022",
    "India UNSC Previous Terms",
    "India Permanent Seat UNSC",
    "India UNSC Reform Demands",
    "India UN Peacekeeping",
    "India United Nations Contributions",
    "भारत कितनी बार UNSC सदस्य रहा",
    "भारत UNSC 2021 2022",
    "UNSC में भारत का इतिहास",

    // GLOBAL SOUTH
    "India Global South Diplomacy",
    "India Global South Representation",
    "United Nations Reform India",
    "India Multilateralism",
    "Rules Based International Order",
    "Global Governance Reform",
    "International Peace and Security",
    "India UN Peacekeeping Missions",
    "India G4 Nations",
    "G4 Countries UNSC Reform",
    "वैश्विक दक्षिण भारत",
    "संयुक्त राष्ट्र सुधार भारत",

    // UKPSC
    "UKPSC UNSC 2028 29",
    "UKPSC SHANTI Vision",
    "UKPSC International Relations 2026",
    "UKPSC United Nations GK",
    "UKPSC UNSC Current Affairs",
    "UKPSC UNSC Membership",
    "UKPSC International Organizations",
    "UKPSC General Studies 2026",
    "UKPSC UNSC MCQ",
    "UKPSC संयुक्त राष्ट्र सुरक्षा परिषद",

    // UKSSSC
    "UKSSSC UNSC 2028 29",
    "UKSSSC SHANTI Vision",
    "UKSSSC United Nations GK",
    "UKSSSC International Organizations",
    "UKSSSC Current Affairs 2026",
    "UKSSSC UNSC Questions",
    "UKSSSC Group C General Knowledge",
    "UKSSSC Junior Assistant Current Affairs",
    "UKSSSC UNSC MCQ",
    "UKSSSC संयुक्त राष्ट्र सुरक्षा परिषद",

    // UPSC
    "UPSC India UNSC 2028 29",
    "UPSC SHANTI Vision",
    "UPSC International Relations 2026",
    "UPSC GS Paper 2 International Relations",
    "UPSC United Nations Security Council",
    "UPSC UNSC Reforms",
    "UPSC India Permanent Seat UNSC",
    "UPSC Prelims United Nations",
    "UPSC UNSC Current Affairs",
    "UPSC Global South Diplomacy",

    // SSC
    "SSC UNSC Current Affairs 2026",
    "SSC CGL United Nations GK",
    "SSC CHSL UNSC Members",
    "SSC GD International Organizations",
    "SSC MTS United Nations Questions",
    "SSC UNSC Permanent Members",
    "SSC General Awareness 2026",
    "SSC UNSC MCQ",

    // HSSC CET
    "HSSC CET UNSC 2028",
    "HSSC CET SHANTI Vision",
    "HSSC CET International Organizations",
    "Haryana CET United Nations GK",
    "HSSC CET Group C Current Affairs",
    "HSSC CET Group D General Knowledge",
    "Haryana CET UNSC MCQ",

    // UPPSC
    "UPPSC India UNSC Campaign 2028",
    "UPPSC SHANTI Vision",
    "UPPSC International Relations 2026",
    "UPPSC United Nations Security Council",
    "UPPSC UNSC Current Affairs",
    "UPPSC International Organizations MCQ",

    // OTHER EXAMS
    "Railway NTPC United Nations GK",
    "RRB Group D UNSC Questions",
    "Banking Current Affairs International Organizations",
    "IBPS United Nations Current Affairs",
    "State PCS UNSC Current Affairs",
    "State PSC International Relations",

    // AEO / PEOPLE ALSO ASK
    "What is India's UNSC 2028 29 campaign",
    "When was India's UNSC campaign launched",
    "Who launched India's UNSC 2028 29 campaign",
    "What is SHANTI Vision",
    "What is the full form of SHANTI",
    "How many times India served on UNSC",
    "When was India last elected to UNSC",
    "How many permanent members are in UNSC",
    "How many non permanent members are in UNSC",
    "How are UNSC non permanent members elected",
    "Which countries have UNSC veto power",
    "Why does India want a permanent UNSC seat",
    "What is the role of UN Security Council",

    // PRACTICE
    "India UNSC 2028 MCQ",
    "UNSC Current Affairs Quiz 2026",
    "SHANTI Vision MCQ",
    "United Nations Questions and Answers",
    "UNSC General Knowledge Questions",
    "India UNSC Bilingual Notes",
    "International Relations MCQ 2026",
    "संयुक्त राष्ट्र सुरक्षा परिषद MCQ",

    // BRAND
    "CET Test UNSC Current Affairs",
    "CET Test SHANTI Vision",
    "CET Test International Relations",
    "cettest.site",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  // CORRECT GOOGLEBOT PARAMETERS
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
    url: PAGE_URL,

    siteName: "CET Test",

    title:
      "India UNSC 2028–29 Campaign | SHANTI Vision",

    description: PAGE_DESCRIPTION,

    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    countryName: "India",
  },

  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },

  other: {
    "content-language": "en-IN, hi-IN",

    "geo.region": "IN",

    subject:
      "India's UNSC 2028–29 Campaign and SHANTI Vision",

    abstract:
      "Bilingual educational notes explaining India's campaign for a 2028–29 United Nations Security Council non-permanent seat, SHANTI framework, UNSC structure, elections and past membership.",

    "description:hi": PAGE_DESCRIPTION_HI,
  },
};

// ======================================================
// STRUCTURED DATA
// ======================================================

const organizationSchema = {
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: "CET Test",
  url: SITE_URL,

  description:
    "Educational platform offering current affairs, general knowledge, study materials and mock tests for competitive exams.",
};

const websiteSchema = {
  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: "CET Test",
  url: SITE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const webpageSchema = {
  "@type": "WebPage",

  "@id": `${PAGE_URL}#webpage`,

  url: PAGE_URL,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  inLanguage: ["en-IN", "hi-IN"],

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntity: {
    "@id": `${PAGE_URL}#article`,
  },

  about: [
    {
      "@type": "Thing",
      name: "India's UNSC 2028–29 Campaign",
    },
    {
      "@type": "Thing",
      name: "SHANTI Vision",
    },
    {
      "@type": "Organization",
      name: "United Nations Security Council",
    },
    {
      "@type": "Thing",
      name: "United Nations Reform",
    },
  ],
};

// ======================================================
// ARTICLE SCHEMA
// ======================================================

const articleSchema = {
  "@type": "Article",

  "@id": `${PAGE_URL}#article`,

  headline:
    "India's UNSC 2028–29 Campaign and SHANTI Vision Explained",

  alternativeHeadline:
    "भारत का UNSC 2028–29 अभियान और शांति विजन",

  description: PAGE_DESCRIPTION,
  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },

  author: {
    "@id": `${SITE_URL}/#organization`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  isAccessibleForFree: true,

  articleSection: [
    "International Relations",
    "United Nations",
    "UN Security Council",
    "India's Foreign Policy",
    "Current Affairs 2026",
  ],

  keywords: [
    "India UNSC Campaign 2028–29",
    "SHANTI Vision",
    "UNSC Non-Permanent Membership",
    "United Nations Security Council",
    "India UNSC Membership History",
  ],

  about: [
    {
      "@type": "Thing",
      name: "India's UNSC Candidature 2028–29",
    },
    {
      "@type": "Thing",
      name: "SHANTI Framework",
    },
    {
      "@type": "Thing",
      name: "UNSC Elections",
    },
    {
      "@type": "Thing",
      name: "Multilateral Diplomacy",
    },
  ],

  citation: [
    OFFICIAL_SOURCE,
  ],
};

// ======================================================
// EDUCATIONAL RESOURCE SCHEMA
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "India UNSC 2028–29 and SHANTI Vision – Study Notes and MCQs",

  alternateName: [
    "India UNSC Campaign 2028–29",
    "India SHANTI Vision 2026",
    "भारत का UNSC अभियान 2028–29",
    "भारत का शांति विजन",
  ],

  description: PAGE_DESCRIPTION,

  url: PAGE_URL,

  inLanguage: ["en", "hi"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Study Notes",
    "Reference Material",
    "Practice Questions",
  ],

  educationalUse: [
    "Exam Preparation",
    "Self Study",
    "Revision",
    "Assessment",
  ],

  educationalLevel:
    "Competitive Examination Preparation",

  interactivityType: "mixed",

  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",

    audienceType:
      "UKPSC, UKSSSC, UPSC, SSC, HSSC CET, UPPSC, Railway, Banking and State PCS aspirants",
  },

  about: [
    {
      "@type": "Thing",
      name: "United Nations Security Council",
    },
    {
      "@type": "Thing",
      name: "SHANTI Vision",
    },
    {
      "@type": "Thing",
      name: "India's Foreign Policy",
    },
  ],

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  isPartOf: {
    "@id": `${PAGE_URL}#webpage`,
  },
};

// ======================================================
// BREADCRUMB SCHEMA
// ======================================================

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
      name: "India UNSC 2028–29 Campaign",
      item: PAGE_URL,
    },
  ],
};

// ======================================================
// COMBINED JSON-LD
// ======================================================

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
};

// ======================================================
// NEXT.JS LAYOUT
// ======================================================

export default function IndiaUNSCLayout({
  children,
}: {
  children: ReactNode;
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
  );
}