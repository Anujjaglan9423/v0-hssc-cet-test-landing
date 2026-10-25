import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/india-nz-fta";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "India–New Zealand FTA 2026: Key Features & MCQs";

const DESCRIPTION =
  "India–New Zealand FTA 2026 explained: signing date, 100% duty-free market access, India's tariff exclusions, $20 billion investment, Rules of Origin and MCQs.";

const DESCRIPTION_HI =
  "भारत-न्यूज़ीलैंड मुक्त व्यापार समझौता 2026: हस्ताक्षर तिथि, 100% शुल्क-मुक्त बाजार पहुंच, 70.03% टैरिफ लाइनें, डेयरी बहिष्करण, 20 अरब डॉलर निवेश और MCQ।";

const PIB_SOURCE =
  "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=158370&lang=1&reg=3";

const COMMERCE_SOURCE =
  "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2255914&lang=1&reg=3";

// ======================================================
// SEO METADATA
// ======================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

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
    "Current Affairs, International Trade, Indian Economy, Free Trade Agreements, Competitive Examinations",

  keywords: [
    // MAIN KEYWORDS
    "India New Zealand FTA 2026",
    "India New Zealand Free Trade Agreement",
    "India NZ FTA 2026",
    "India New Zealand Trade Deal 2026",
    "India New Zealand FTA Signed",
    "India New Zealand FTA April 2026",
    "India New Zealand FTA Key Features",
    "India New Zealand FTA Summary",
    "India New Zealand FTA Explained",
    "India New Zealand FTA Current Affairs",
    "India New Zealand FTA 2026 Hindi English",

    // HINDI
    "भारत न्यूजीलैंड मुक्त व्यापार समझौता 2026",
    "भारत न्यूजीलैंड FTA 2026",
    "भारत न्यूजीलैंड व्यापार समझौता",
    "भारत न्यूजीलैंड एफटीए",
    "भारत न्यूजीलैंड समझौता 2026",
    "भारत न्यूजीलैंड द्विपक्षीय व्यापार",
    "भारत न्यूजीलैंड आर्थिक संबंध",
    "भारत न्यूजीलैंड व्यापार समझौते की विशेषताएं",
    "भारत न्यूजीलैंड करेंट अफेयर्स 2026",
    "भारत न्यूजीलैंड FTA प्रश्न उत्तर",

    // IMPORTANT DATES AND PEOPLE
    "India New Zealand FTA Signing Date",
    "India NZ FTA 27 April 2026",
    "India NZ FTA New Delhi",
    "Piyush Goyal Todd McClay FTA",
    "India NZ FTA Implementation Date",
    "India NZ FTA October 2026",
    "India NZ FTA Entered Into Force",
    "India NZ FTA Negotiations",
    "India NZ FTA Trade Ministers",

    // TARIFF ACCESS
    "India New Zealand FTA Tariff Elimination",
    "India New Zealand 100 Percent Duty Free Access",
    "India NZ FTA 70.03 Percent Tariff Lines",
    "India NZ FTA 29.97 Percent Exclusion",
    "India New Zealand FTA Market Access",
    "India NZ FTA Zero Duty",
    "India NZ FTA Tariff Reduction",
    "India NZ FTA Export Benefits",
    "India New Zealand Preferential Tariffs",
    "India New Zealand Trade Liberalisation",

    // DAIRY AND EXCLUSIONS
    "India New Zealand FTA Dairy Exclusion",
    "India NZ FTA Exclusion List",
    "India New Zealand Dairy Products FTA",
    "India NZ FTA Agriculture Protection",
    "India NZ FTA Sensitive Sectors",
    "India NZ FTA Protected Products",
    "India New Zealand FTA Milk Cheese Butter",
    "India NZ FTA Dairy Imports",
    "भारत न्यूजीलैंड डेयरी उत्पाद बहिष्करण",
    "भारत न्यूजीलैंड FTA बहिष्करण सूची",

    // INVESTMENT
    "India New Zealand 20 Billion Investment",
    "India NZ FTA USD 20 Billion",
    "New Zealand Investment India 15 Years",
    "India New Zealand Investment Commitment",
    "India NZ FTA Investment Opportunities",
    "India New Zealand Economic Partnership",

    // RULES OF ORIGIN
    "India NZ FTA Rules of Origin",
    "Rules of Origin in Free Trade Agreement",
    "India New Zealand ROO",
    "Product Specific Rules of Origin",
    "FTA Trade Routing Prevention",
    "FTA Rules of Origin Explained",
    "What are Rules of Origin",
    "मूल उत्पत्ति के नियम FTA",

    // BENEFICIARY SECTORS
    "India NZ FTA MSME Benefits",
    "India NZ FTA Textile Exports",
    "India NZ FTA Leather Footwear",
    "India NZ FTA Gems Jewellery",
    "India NZ FTA Engineering Exports",
    "India NZ FTA Pharma",
    "India NZ FTA Agriculture",
    "India NZ FTA Services Trade",
    "India NZ FTA Skilled Professionals",
    "India NZ FTA Students",
    "India NZ FTA AYUSH Services",
    "India NZ FTA Traditional Medicine",

    // INTERNATIONAL TRADE CONCEPTS
    "Free Trade Agreement Explained",
    "What is FTA",
    "FTA Meaning in Economics",
    "India Bilateral Trade Agreements",
    "India Trade Policy 2026",
    "Tariff and Non Tariff Barriers",
    "Import Export Duties",
    "Economic Integration",
    "Trade Liberalisation India",
    "WTO and Free Trade Agreements",
    "Preferential Trade Agreements",
    "India Export Promotion",

    // UKPSC
    "UKPSC India New Zealand FTA 2026",
    "UKPSC Economy Current Affairs",
    "UKPSC International Trade",
    "UKPSC Free Trade Agreements",
    "UKPSC India Trade Deals 2026",
    "UKPSC FTA MCQ",
    "UKPSC General Studies Economy",
    "UKPSC Economic Current Affairs 2026",
    "UKPSC भारत न्यूजीलैंड FTA",

    // UKSSSC
    "UKSSSC India New Zealand FTA",
    "UKSSSC Economy Current Affairs 2026",
    "UKSSSC Free Trade Agreement",
    "UKSSSC International Trade GK",
    "UKSSSC Group C Economy",
    "UKSSSC Junior Assistant Current Affairs",
    "UKSSSC FTA Questions",
    "UKSSSC General Knowledge 2026",
    "UKSSSC भारत न्यूजीलैंड व्यापार समझौता",

    // UPSC
    "UPSC India New Zealand FTA 2026",
    "UPSC Free Trade Agreements",
    "UPSC Indian Economy Current Affairs",
    "UPSC International Trade 2026",
    "UPSC GS Paper 3 Economy",
    "UPSC India New Zealand Relations",
    "UPSC Rules of Origin",
    "UPSC Trade Agreements MCQ",
    "UPSC Prelims Economy Current Affairs",

    // SSC
    "SSC India New Zealand FTA",
    "SSC CGL Economy Current Affairs",
    "SSC CHSL International Trade",
    "SSC GD Current Affairs 2026",
    "SSC MTS Economy GK",
    "SSC Free Trade Agreements",
    "SSC General Awareness 2026",

    // HSSC CET
    "HSSC CET India New Zealand FTA",
    "HSSC CET Current Affairs 2026",
    "Haryana CET Economy GK",
    "HSSC CET Group C Economy",
    "HSSC CET Group D Current Affairs",
    "Haryana CET Trade Agreements",
    "HSSC CET Free Trade Agreement MCQ",

    // UPPSC
    "UPPSC India New Zealand FTA 2026",
    "UPPSC International Trade",
    "UPPSC Economy Current Affairs",
    "UPPSC Free Trade Agreement",
    "UPPSC FTA MCQ",
    "UPPSC Bilateral Trade Agreements",

    // OTHER EXAMS
    "Railway NTPC Economy Current Affairs",
    "RRB Group D Free Trade Agreement",
    "Banking Current Affairs Trade Agreements",
    "IBPS Economy Current Affairs",
    "State PCS International Trade",
    "State PSC Indian Economy",
    "Competitive Exams FTA 2026",

    // AEO / WH QUESTIONS
    "When was India New Zealand FTA signed",
    "Where was India New Zealand FTA signed",
    "Who signed India New Zealand FTA",
    "What is India New Zealand FTA",
    "What are the benefits of India New Zealand FTA",
    "Which products are excluded from India NZ FTA",
    "Does India NZ FTA include dairy products",
    "How much investment did New Zealand commit",
    "What percentage of tariff lines did India liberalise",
    "When did India New Zealand FTA enter into force",
    "What are Rules of Origin under FTA",
    "Why is India New Zealand FTA important",
    "How will India NZ FTA benefit MSMEs",

    // QUIZ AND STUDY
    "India New Zealand FTA MCQ",
    "India NZ FTA Questions and Answers",
    "India New Zealand FTA Quiz",
    "Free Trade Agreement MCQ 2026",
    "FTA Current Affairs Practice Questions",
    "India New Zealand FTA Bilingual Notes",
    "Economy Current Affairs MCQ 2026",
    "भारत न्यूजीलैंड FTA MCQ",

    // BRAND
    "CET Test India New Zealand FTA",
    "CET Test Economy Current Affairs",
    "cettest.site",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  // CORRECT GOOGLEBOT SYNTAX
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
      "India–New Zealand FTA 2026 | Key Features",

    description: DESCRIPTION,

    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    countryName: "India",
  },

  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },

  other: {
    "content-language": "en-IN, hi-IN",
    "geo.region": "IN",

    subject:
      "India New Zealand Free Trade Agreement 2026",

    abstract:
      "Bilingual educational notes covering the India-New Zealand Free Trade Agreement, tariff elimination, exclusion lists, investment commitments, Rules of Origin and practice MCQs.",

    "description:hi": DESCRIPTION_HI,
  },
};

// ======================================================
// SCHEMA.ORG STRUCTURED DATA
// ======================================================

const organizationSchema = {
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: "CET Test",
  url: SITE_URL,

  description:
    "Educational platform offering current affairs, study material, general knowledge and mock tests for competitive examinations.",
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
  name: TITLE,
  description: DESCRIPTION,

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
      name: "India-New Zealand Free Trade Agreement",
    },
    {
      "@type": "Thing",
      name: "International Trade",
    },
    {
      "@type": "Thing",
      name: "Tariff Liberalisation",
    },
    {
      "@type": "Thing",
      name: "Rules of Origin",
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
    "India-New Zealand Free Trade Agreement 2026: Features, Exclusions and MCQs",

  alternativeHeadline:
    "भारत-न्यूज़ीलैंड मुक्त व्यापार समझौता 2026",

  description: DESCRIPTION,
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
    "Indian Economy",
    "International Trade",
    "Free Trade Agreements",
    "India-New Zealand Relations",
    "Current Affairs 2026",
  ],

  keywords: [
    "India-New Zealand FTA 2026",
    "100% Duty-Free Access",
    "70.03% Tariff Lines",
    "USD 20 Billion Investment",
    "Rules of Origin",
    "India-New Zealand Bilateral Trade",
  ],

  about: [
    {
      "@type": "Thing",
      name: "India-New Zealand Free Trade Agreement",
    },
    {
      "@type": "Thing",
      name: "Tariff Elimination",
    },
    {
      "@type": "Thing",
      name: "Import Exclusion List",
    },
    {
      "@type": "Thing",
      name: "Rules of Origin",
    },
  ],

  citation: [
    PIB_SOURCE,
    COMMERCE_SOURCE,
  ],
};

// ======================================================
// LEARNING RESOURCE SCHEMA
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "India-New Zealand FTA 2026 – Bilingual Study Notes and MCQs",

  alternateName: [
    "India NZ Free Trade Agreement 2026",
    "India New Zealand Trade Deal 2026",
    "भारत न्यूजीलैंड मुक्त व्यापार समझौता",
  ],

  description: DESCRIPTION,

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
      name: "Free Trade Agreements",
    },
    {
      "@type": "Thing",
      name: "Indian Economy",
    },
    {
      "@type": "Thing",
      name: "International Trade",
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
      name: "India-New Zealand FTA 2026",
      item: PAGE_URL,
    },
  ],
};

// ======================================================
// COMBINED SCHEMA
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

export default function IndiaNewZealandFTALayout({
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