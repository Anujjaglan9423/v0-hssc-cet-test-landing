import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// CONFIG
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/india-uae-agreements";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "India–UAE Agreements 2026: Key Outcomes & MCQs";

const DESCRIPTION =
  "India–UAE agreements 2026 explained: Modi's Abu Dhabi visit, 30-million-barrel strategic oil storage proposal, 8-exaflop AI project and Vadinar ship repair hub. Hindi and English MCQs.";

const DESCRIPTION_HI =
  "भारत–UAE समझौते 2026: मोदी की अबू धाबी यात्रा, 30 मिलियन बैरल रणनीतिक तेल भंडारण, 8 एक्साफ्लॉप AI सुपरकंप्यूटर, वाडिनार जहाज मरम्मत और MCQ।";

const PMO_SOURCE =
  "https://www.pmindia.gov.in/en/news_updates/list-of-outcomes-pms-visit-to-the-uae/";

const PIB_SOURCE =
  "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=158628&id=158628&lang=1&reg=22";

// ======================================================
// METADATA
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
    "Current Affairs, International Relations, India-UAE Bilateral Relations, Energy Security, Artificial Intelligence, Competitive Exams",

  keywords: [
    // PRIMARY KEYWORDS
    "India UAE Agreements 2026",
    "India UAE Bilateral Agreements 2026",
    "India UAE Relations 2026",
    "India UAE Summit 2026",
    "India UAE Strategic Partnership 2026",
    "India UAE Current Affairs 2026",
    "Modi UAE Visit 2026",
    "PM Modi Abu Dhabi Visit May 2026",
    "India UAE Agreements May 2026",
    "India UAE Key Agreements 2026",
    "India UAE MoU 2026",
    "India UAE Bilateral Cooperation",
    "India UAE Agreements 2026 Hindi English",

    // HINDI KEYWORDS
    "भारत यूएई समझौते 2026",
    "भारत UAE द्विपक्षीय समझौते",
    "भारत यूएई संबंध 2026",
    "भारत यूएई रणनीतिक साझेदारी",
    "मोदी अबू धाबी यात्रा 2026",
    "भारत यूएई वर्तमान मामले 2026",
    "भारत यूएई ऊर्जा सहयोग",
    "भारत यूएई तेल भंडारण समझौता",
    "भारत यूएई कृत्रिम बुद्धिमत्ता सहयोग",
    "भारत यूएई जहाज मरम्मत समझौता",
    "भारत यूएई समझौते हिंदी में",
    "भारत यूएई समसामयिकी 2026",

    // LEADERS AND SUMMIT
    "Narendra Modi UAE Visit 2026",
    "Modi Mohamed bin Zayed Meeting",
    "Sheikh Mohamed bin Zayed India UAE",
    "India UAE Abu Dhabi Meeting 2026",
    "India UAE Leaders Meeting May 2026",
    "India UAE Joint Statement 2026",
    "India UAE Strategic Dialogue",
    "India UAE Economic Cooperation",

    // STRATEGIC PETROLEUM RESERVES
    "India UAE Strategic Petroleum Reserves",
    "India UAE SPR Agreement 2026",
    "ADNOC India Oil Storage 2026",
    "India UAE 30 Million Barrels",
    "India UAE Crude Oil Storage Agreement",
    "ADNOC ISPRL Agreement",
    "Indian Strategic Petroleum Reserves Limited",
    "India Strategic Oil Reserves",
    "UAE Oil Storage in India",
    "India Energy Security 2026",
    "Strategic Petroleum Reserve Current Affairs",
    "रणनीतिक पेट्रोलियम भंडार भारत",
    "भारत 30 मिलियन बैरल तेल भंडारण",

    // LPG
    "India UAE LPG Cooperation",
    "India UAE LPG Supply Agreement",
    "ADNOC Indian Oil Agreement",
    "IOCL ADNOC LPG Agreement",
    "India LPG Imports UAE",
    "India UAE Energy Partnership",
    "भारत यूएई एलपीजी आपूर्ति",
    "भारत यूएई ऊर्जा सुरक्षा",

    // AI SUPERCOMPUTER
    "India UAE AI Supercomputer 2026",
    "India UAE 8 Exaflop Supercomputer",
    "8 Exaflop AI Cluster India",
    "C-DAC G42 Partnership",
    "India UAE Sovereign AI Infrastructure",
    "India AI Mission UAE",
    "India UAE Supercomputing Agreement",
    "G42 India AI Supercomputer",
    "Cerebras India Supercomputer",
    "MBZUAI India Cooperation",
    "Artificial Intelligence Current Affairs 2026",
    "भारत यूएई 8 एक्साफ्लॉप सुपरकंप्यूटर",
    "भारत एआई मिशन",

    // MARITIME
    "India UAE Maritime Cooperation 2026",
    "Cochin Shipyard Drydocks World Agreement",
    "CSL Drydocks World 2026",
    "Vadinar Ship Repair Hub",
    "Vadinar Gujarat Ship Repair",
    "India UAE Offshore Fabrication",
    "India UAE Shipping Cooperation",
    "India Maritime Infrastructure 2026",
    "Cochin Shipyard Current Affairs",
    "Drydocks World Dubai India",
    "वाडिनार जहाज मरम्मत केंद्र",
    "कोचीन शिपयार्ड ड्राइडॉक्स वर्ल्ड",

    // CEPA
    "India UAE CEPA 2022",
    "India UAE Comprehensive Economic Partnership Agreement",
    "India UAE Free Trade Agreement",
    "India UAE Bilateral Trade",
    "India UAE CEPA Benefits",
    "India UAE Trade Relations 2026",
    "India UAE Economic Partnership",
    "भारत यूएई व्यापक आर्थिक साझेदारी समझौता",

    // UKPSC
    "UKPSC India UAE Agreements 2026",
    "UKPSC International Relations 2026",
    "UKPSC Current Affairs 2026",
    "UKPSC Energy Security",
    "UKPSC Strategic Petroleum Reserves",
    "UKPSC AI Current Affairs",
    "UKPSC India UAE Relations",
    "UKPSC Defence and Economy Current Affairs",
    "UKPSC India UAE MCQ",
    "UKPSC भारत यूएई समझौते",

    // UKSSSC
    "UKSSSC India UAE Agreements",
    "UKSSSC Current Affairs 2026",
    "UKSSSC India UAE Relations",
    "UKSSSC Energy Security GK",
    "UKSSSC Artificial Intelligence GK",
    "UKSSSC Group C Current Affairs",
    "UKSSSC Junior Assistant Current Affairs",
    "UKSSSC International Relations",
    "UKSSSC India UAE MCQ",
    "UKSSSC भारत यूएई समझौते 2026",

    // UPSC
    "UPSC India UAE Relations 2026",
    "UPSC India UAE Agreements",
    "UPSC International Relations",
    "UPSC GS Paper 2 India UAE",
    "UPSC Energy Security India",
    "UPSC Strategic Petroleum Reserves",
    "UPSC AI Governance",
    "UPSC Maritime Cooperation",
    "UPSC India UAE CEPA",
    "UPSC Prelims Current Affairs 2026",

    // SSC
    "SSC India UAE Agreements 2026",
    "SSC CGL Current Affairs 2026",
    "SSC CHSL International Relations",
    "SSC GD Current Affairs",
    "SSC MTS General Awareness",
    "SSC Important Agreements 2026",
    "SSC India UAE MCQ",

    // HSSC CET
    "HSSC CET India UAE Agreements",
    "HSSC CET Current Affairs 2026",
    "Haryana CET International Relations",
    "HSSC CET Group C GK",
    "HSSC CET Group D Current Affairs",
    "HSSC CET Important Agreements",
    "Haryana CET India UAE Relations",

    // UPPSC
    "UPPSC India UAE Agreements 2026",
    "UPPSC International Relations 2026",
    "UPPSC Energy Security",
    "UPPSC Artificial Intelligence Current Affairs",
    "UPPSC India UAE Relations",
    "UPPSC Bilateral Agreements MCQ",

    // OTHER EXAMS
    "Railway NTPC International Agreements",
    "RRB Group D Current Affairs 2026",
    "Banking Current Affairs International Relations",
    "IBPS Current Affairs 2026",
    "State PCS India UAE Agreements",
    "State PSC Current Affairs",

    // PEOPLE ALSO ASK / WH KEYWORDS
    "What are the India UAE agreements of 2026",
    "When did Modi visit UAE in 2026",
    "Where did India UAE leaders meet in 2026",
    "What is India's Strategic Petroleum Reserve",
    "What is the India UAE 30 million barrel agreement",
    "Who signed the India UAE oil storage agreement",
    "What is the 8 Exaflop AI supercomputer project",
    "Which companies are involved in India UAE AI cooperation",
    "What is the Vadinar ship repair project",
    "What is India UAE CEPA",
    "Why is UAE important for India's energy security",
    "How does India benefit from UAE cooperation",

    // QUIZ AND STUDY
    "India UAE Agreements 2026 MCQ",
    "India UAE Relations Questions and Answers",
    "India UAE Current Affairs Quiz",
    "India UAE Agreements Hindi MCQ",
    "International Agreements Current Affairs 2026",
    "India UAE Bilingual Study Notes",
    "Free Current Affairs MCQ 2026",

    // BRAND
    "CET Test India UAE Agreements",
    "CET Test International Relations",
    "CET Test Current Affairs",
    "cettest.site",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  // Correct Next.js Googlebot directive names
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
      "India–UAE Agreements 2026 | Energy, AI & Maritime",

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
      "India-UAE Bilateral Agreements 2026",

    abstract:
      "Bilingual educational notes covering India-UAE cooperation in strategic petroleum reserves, LPG, AI supercomputing, maritime infrastructure and CEPA.",

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
      name: "India-UAE Bilateral Relations",
    },
    {
      "@type": "Thing",
      name: "Strategic Petroleum Reserves",
    },
    {
      "@type": "Thing",
      name: "Artificial Intelligence Cooperation",
    },
    {
      "@type": "Thing",
      name: "Maritime Infrastructure",
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
    "India-UAE Bilateral Agreements 2026: Energy, AI and Maritime Cooperation",

  alternativeHeadline:
    "भारत–UAE द्विपक्षीय समझौते 2026",

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
    "International Relations",
    "India-UAE Relations",
    "Energy Security",
    "Artificial Intelligence",
    "Maritime Cooperation",
    "Current Affairs 2026",
  ],

  keywords: [
    "India-UAE Agreements 2026",
    "Strategic Petroleum Reserves",
    "30 Million Barrels",
    "8 Exaflop Supercomputer",
    "C-DAC G42 Partnership",
    "Vadinar Ship Repair",
    "India-UAE CEPA",
  ],

  about: [
    {
      "@type": "Thing",
      name: "India-UAE Strategic Partnership",
    },
    {
      "@type": "Thing",
      name: "Crude Oil Strategic Storage",
    },
    {
      "@type": "Thing",
      name: "Sovereign AI Infrastructure",
    },
    {
      "@type": "Thing",
      name: "Ship Repair Cooperation",
    },
  ],

  citation: [
    PMO_SOURCE,
    PIB_SOURCE,
  ],
};

// ======================================================
// EDUCATIONAL RESOURCE SCHEMA
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "India-UAE Agreements 2026 – Study Notes and MCQs",

  alternateName: [
    "India UAE Bilateral Agreements 2026",
    "India UAE Strategic Partnership 2026",
    "भारत यूएई द्विपक्षीय समझौते 2026",
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
      name: "India-UAE Relations",
    },
    {
      "@type": "Thing",
      name: "Energy Security",
    },
    {
      "@type": "Thing",
      name: "Artificial Intelligence",
    },
    {
      "@type": "Thing",
      name: "International Agreements",
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
      name: "India-UAE Agreements 2026",
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

export default function IndiaUAEAgreementsLayout({
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