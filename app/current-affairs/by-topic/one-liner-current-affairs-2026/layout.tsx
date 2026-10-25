import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/one-liner-current-affairs-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "One-Liner Current Affairs 2026 | 121 Q&A & MCQs";

const DESCRIPTION =
  "Practice 121 one-liner current affairs questions and answers for 2026, covering GK, economy, awards, science, schemes and international news. Free MCQs for SSC, UKPSC, UKSSSC and UPSC.";

const DESCRIPTION_HI =
  "वन लाइनर करेंट अफेयर्स 2026: सामान्य ज्ञान, अर्थव्यवस्था, पुरस्कार, विज्ञान, सरकारी योजनाएँ और अंतरराष्ट्रीय समाचार पर 121 प्रश्नोत्तर एवं MCQ।";

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
    "Current Affairs, General Knowledge, One-Liner Questions, Question Bank, Competitive Examination Preparation",

  keywords: [
    // PRIMARY
    "One Liner Current Affairs 2026",
    "Current Affairs One Liners 2026",
    "Current Affairs Questions Answers 2026",
    "Current Affairs Q&A 2026",
    "Current Affairs Question Bank 2026",
    "Important Current Affairs Questions 2026",
    "Daily Current Affairs One Liners",
    "Current Affairs GK Questions",
    "General Awareness Questions 2026",
    "Current Affairs Practice Questions",
    "Current Affairs 2026 MCQ",
    "Current Affairs Quiz 2026",
    "Free Current Affairs Questions 2026",

    // HINDI
    "वन लाइनर करेंट अफेयर्स 2026",
    "एक पंक्ति करेंट अफेयर्स प्रश्नोत्तर",
    "करेंट अफेयर्स प्रश्न उत्तर 2026",
    "समसामयिकी प्रश्नोत्तर 2026",
    "सामान्य ज्ञान प्रश्न उत्तर 2026",
    "महत्वपूर्ण करेंट अफेयर्स प्रश्न",
    "प्रतियोगी परीक्षा करेंट अफेयर्स",
    "वन लाइनर जीके 2026",
    "करेंट अफेयर्स MCQ हिंदी",
    "समसामयिकी 2026",
    "राष्ट्रीय एवं अंतरराष्ट्रीय करेंट अफेयर्स",
    "जनरल नॉलेज क्विज 2026",

    // TOPIC KEYWORDS
    "National Current Affairs 2026",
    "International Current Affairs 2026",
    "Economy Current Affairs 2026",
    "Banking Current Affairs 2026",
    "Science and Technology Current Affairs",
    "Government Schemes Current Affairs",
    "Awards and Honours 2026",
    "Sports Current Affairs 2026",
    "Environment Current Affairs 2026",
    "Defence Current Affairs 2026",
    "Important Persons in News 2026",
    "Important Places in News 2026",
    "International Organizations Current Affairs",
    "Books and Authors Current Affairs",

    // QUESTIONS FROM THE PAGE
    "Regional Meteorological Centre Lucknow 2026",
    "NFHS 6 Total Fertility Rate",
    "India Forex Reserves September 2026",
    "RBI Repo Rate June 2026",
    "University of Liverpool India Campus",
    "UPI NPI Nepal Remittance",
    "Bhadla Solar Park Rajasthan",
    "Sudarsan Pattnaik Sand Art 2026",
    "Lipulekh Pass India China Trade",
    "Indian Coast Guard Hovercraft H561",
    "India Ship Recycling 2025",
    "New Development Bank Uzbekistan",
    "Tripura Sarinda GI Tag",
    "Amarnath Yatra Project Hawk Eye",
    "International Booker Prize 2026",
    "Siang Upper Multipurpose Project",
    "TribeX Tribal Platform",
    "General Knowledge 2026 India",

    // UKPSC
    "UKPSC One Liner Current Affairs 2026",
    "UKPSC Current Affairs Questions",
    "UKPSC Current Affairs MCQ",
    "UKPSC General Studies 2026",
    "UKPSC GK Questions 2026",
    "UKPSC Current Affairs Hindi",
    "UKPSC National Current Affairs",
    "UKPSC International Current Affairs",
    "UKPSC Economy Current Affairs",
    "UKPSC Current Affairs Revision",

    // UKSSSC
    "UKSSSC One Liner Current Affairs 2026",
    "UKSSSC Current Affairs Questions",
    "UKSSSC Current Affairs MCQ",
    "UKSSSC Junior Assistant GK",
    "UKSSSC Group C Current Affairs",
    "UKSSSC General Knowledge",
    "UKSSSC Current Affairs Hindi",
    "UKSSSC Important Questions 2026",
    "UKSSSC Current Affairs Practice",
    "UKSSSC One Liner GK",

    // UPSC
    "UPSC One Liner Current Affairs 2026",
    "UPSC Current Affairs Questions",
    "UPSC Prelims Current Affairs 2026",
    "UPSC General Studies Current Affairs",
    "UPSC Current Affairs MCQ",
    "UPSC Current Affairs Revision",
    "UPSC Daily Current Affairs",
    "UPSC Important GK Questions",

    // SSC
    "SSC Current Affairs One Liners 2026",
    "SSC CGL Current Affairs Questions",
    "SSC CHSL Current Affairs MCQ",
    "SSC GD Current Affairs 2026",
    "SSC MTS Current Affairs",
    "SSC General Awareness Questions",
    "SSC Current Affairs GK",
    "SSC Current Affairs Practice Set",

    // HSSC CET
    "HSSC CET One Liner Current Affairs",
    "HSSC CET Current Affairs 2026",
    "Haryana CET Current Affairs Questions",
    "HSSC CET Group C Current Affairs",
    "HSSC CET Group D GK",
    "Haryana CET One Liner GK",
    "HSSC CET Current Affairs MCQ",
    "HSSC CET Important Questions",

    // UPPSC
    "UPPSC One Liner Current Affairs 2026",
    "UPPSC Current Affairs Questions",
    "UPPSC General Studies 2026",
    "UPPSC Current Affairs MCQ",
    "UPPSC Current Affairs Hindi",
    "UPPSC Important Current Affairs",
    "UPPSC General Knowledge Practice",

    // RAILWAY AND BANKING
    "RRB NTPC Current Affairs Questions",
    "Railway Group D Current Affairs",
    "RRB One Liner Current Affairs",
    "Banking Current Affairs 2026",
    "IBPS Current Affairs MCQ",
    "SBI Clerk Current Affairs",
    "SBI PO Current Affairs",
    "Bank Exam General Awareness",
    "State PCS Current Affairs",
    "Teaching Exams Current Affairs",

    // AEO / WH QUESTIONS
    "What are the important current affairs questions of 2026",
    "Which current affairs are asked in SSC exams",
    "How to prepare one liner current affairs",
    "What are the most important GK questions for UKSSSC",
    "Which questions are important for UKPSC",
    "What is the difference between GK and current affairs",
    "How to revise current affairs for competitive exams",
    "Where can I practice free current affairs MCQs",
    "What are the latest national current affairs",
    "What are the important international current affairs",
    "What is the best way to remember current affairs",
    "How to prepare current affairs in Hindi and English",

    // PRACTICE INTENT
    "Current Affairs Test 2026",
    "Current Affairs Online Quiz",
    "Free GK Quiz 2026",
    "Current Affairs Mock Test",
    "General Awareness Practice Questions",
    "Current Affairs Answer Key",
    "Current Affairs Revision Questions",
    "One Liner Current Affairs Practice",
    "Current Affairs Questions With Answers",
    "Current Affairs MCQ Free",

    // BRAND
    "CET Test Current Affairs",
    "CET Test One Liner GK",
    "CET Test Question Bank",
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
      "121 One-Liner Current Affairs Questions 2026",

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
      "One-Liner Current Affairs 2026 Questions and Answers",

    abstract:
      "A free educational question bank containing 121 one-liner current-affairs questions and answers plus interactive practice MCQs for Indian competitive examinations.",

    "description:hi": DESCRIPTION_HI,
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
    "Educational platform providing current affairs, general knowledge, study materials and mock tests for competitive exams.",
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
  "@type": "CollectionPage",

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
    "@id": `${PAGE_URL}#learning-resource`,
  },

  about: [
    {
      "@type": "Thing",
      name: "One-Liner Current Affairs",
    },
    {
      "@type": "Thing",
      name: "General Knowledge",
    },
    {
      "@type": "Thing",
      name: "Competitive Examination Preparation",
    },
  ],
};

// ======================================================
// LEARNING RESOURCE
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "One-Liner Current Affairs Q&A 2026 – Question Bank",

  alternateName: [
    "Current Affairs One Liners 2026",
    "Current Affairs Questions and Answers 2026",
    "वन लाइनर करेंट अफेयर्स 2026",
    "एक पंक्ति समसामयिकी प्रश्नोत्तर",
  ],

  description: DESCRIPTION,

  url: PAGE_URL,

  inLanguage: ["en", "hi"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Question Bank",
    "Study Guide",
    "Practice Questions",
    "Self Assessment",
  ],

  educationalUse: [
    "Self Study",
    "Exam Preparation",
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
      name: "Current Affairs 2026",
    },
    {
      "@type": "Thing",
      name: "General Knowledge",
    },
    {
      "@type": "Thing",
      name: "Indian Economy",
    },
    {
      "@type": "Thing",
      name: "National and International News",
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
// QUESTION BANK ITEM LIST
// ======================================================

// High-level list: avoids duplicating every Q&A as
// separate schema entries in this layout.

const questionBankSchema = {
  "@type": "ItemList",

  "@id": `${PAGE_URL}#question-bank`,

  name:
    "One-Liner Current Affairs Questions and Answers 2026",

  description:
    "Collection of 121 one-liner current affairs questions and answers extracted from study material, plus interactive practice MCQs.",

  numberOfItems: 121,

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "National Current Affairs",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "International Current Affairs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Economy and Banking",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Science and Technology",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Awards and Sports",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Government Schemes",
    },
  ],
};

// ======================================================
// BREADCRUMBS
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
      name: "One-Liner Current Affairs 2026",
      item: PAGE_URL,
    },
  ],
};

// ======================================================
// JSON-LD
// ======================================================

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    webpageSchema,
    learningResourceSchema,
    questionBankSchema,
    breadcrumbSchema,
  ],
};

// ======================================================
// NEXT.JS LAYOUT
// ======================================================

export default function OneLinerCurrentAffairsLayout({
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