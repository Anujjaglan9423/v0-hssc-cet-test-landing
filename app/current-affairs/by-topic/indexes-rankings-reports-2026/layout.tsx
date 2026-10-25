import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// WEBSITE CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/indexes-rankings-reports-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Indexes, Rankings & Reports 2026 | India's Rank";

const DESCRIPTION =
  "Explore indexes, rankings and reports 2026 in Hindi and English. Study India's ranks, report publishers, key findings and MCQs for UKPSC, UKSSSC, UPSC and SSC.";

const DESCRIPTION_HI =
  "सूचकांक, रैंकिंग एवं रिपोर्ट 2026: भारत की रैंक, प्रमुख वैश्विक सूचकांक, रिपोर्ट जारी करने वाली संस्थाएँ, महत्वपूर्ण तथ्य और प्रश्नोत्तर। UKPSC, UKSSSC, UPSC, SSC और HSSC CET की तैयारी के लिए।";

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
    "Current Affairs, General Knowledge, International Reports, Global Indexes, Competitive Examination Preparation",

  keywords: [
    // PRIMARY SEO KEYWORDS
    "Indexes Rankings and Reports 2026",
    "Indices Rankings and Reports 2026",
    "Indexes and Reports Current Affairs 2026",
    "Important Reports and Indexes 2026",
    "Global Index Rankings 2026",
    "International Reports 2026",
    "India Ranking in World 2026",
    "India Rank in Global Indexes 2026",
    "India Position in World Rankings",
    "Global Reports Current Affairs 2026",
    "Important Indexes for Competitive Exams",
    "Indexes Rankings Reports 2026 Hindi English",

    // HINDI KEYWORDS
    "सूचकांक रैंकिंग एवं रिपोर्ट 2026",
    "सूचकांक और रिपोर्ट 2026",
    "भारत की वैश्विक रैंकिंग 2026",
    "विश्व सूचकांक में भारत का स्थान 2026",
    "प्रमुख वैश्विक सूचकांक 2026",
    "प्रमुख रिपोर्ट और सूचकांक 2026",
    "अंतरराष्ट्रीय रिपोर्ट 2026",
    "भारत की रैंकिंग 2026",
    "महत्वपूर्ण सूचकांक 2026 हिंदी",
    "रिपोर्ट जारी करने वाली संस्थाएं 2026",
    "सामान्य ज्ञान सूचकांक 2026",
    "प्रतियोगी परीक्षा सूचकांक रिपोर्ट 2026",

    // GLOBAL PEACE INDEX
    "Global Peace Index 2026",
    "Global Peace Index 2026 India Rank",
    "GPI 2026 India Ranking",
    "Most Peaceful Country 2026",
    "Institute for Economics and Peace",
    "वैश्विक शांति सूचकांक 2026",
    "वैश्विक शांति सूचकांक में भारत का स्थान",

    // WORLD HAPPINESS REPORT
    "World Happiness Report 2026",
    "World Happiness Report 2026 India Rank",
    "Happiest Country in the World 2026",
    "World Happiness Ranking 2026",
    "विश्व प्रसन्नता रिपोर्ट 2026",
    "विश्व खुशहाली रिपोर्ट 2026",
    "विश्व खुशहाली सूचकांक में भारत की रैंक",

    // GLOBAL TERRORISM INDEX
    "Global Terrorism Index 2026",
    "Global Terrorism Index India Rank 2026",
    "GTI 2026 Ranking",
    "Global Terrorism Report 2026",
    "वैश्विक आतंकवाद सूचकांक 2026",

    // GLOBAL GENDER GAP REPORT
    "Global Gender Gap Report 2026",
    "Global Gender Gap Index India Rank 2026",
    "World Economic Forum Gender Gap 2026",
    "Gender Equality Ranking 2026",
    "वैश्विक लैंगिक अंतर रिपोर्ट 2026",
    "लैंगिक समानता सूचकांक भारत रैंक 2026",

    // PRESS FREEDOM
    "World Press Freedom Index 2026",
    "Press Freedom Index 2026 India Rank",
    "Reporters Without Borders Ranking 2026",
    "World Press Freedom Ranking 2026",
    "विश्व प्रेस स्वतंत्रता सूचकांक 2026",

    // ENVIRONMENT AND ENERGY
    "Environmental Performance Index 2026",
    "Environmental Performance Index India Rank",
    "Energy Transition Index 2026",
    "Energy Transition Index India Rank",
    "World Air Quality Report 2025",
    "Most Polluted Country 2025",
    "Clean Air Rankings India",
    "पर्यावरण प्रदर्शन सूचकांक 2026",
    "ऊर्जा संक्रमण सूचकांक 2026",
    "विश्व वायु गुणवत्ता रिपोर्ट 2025",

    // TOURISM AND LIVEABILITY
    "Travel and Tourism Development Index 2026",
    "Travel Tourism Index India Rank",
    "Global Liveability Index 2026",
    "Most Liveable City 2026",
    "Global Liveability Ranking 2026",
    "यात्रा एवं पर्यटन विकास सूचकांक 2026",
    "वैश्विक रहने योग्य शहर सूचकांक 2026",

    // UNIVERSITY AND EDUCATION RANKINGS
    "QS World University Rankings 2027",
    "QS University Rankings India 2027",
    "IIT Delhi QS Ranking 2027",
    "Top Universities in the World 2027",
    "क्यूएस विश्वविद्यालय रैंकिंग 2027",

    // CORRUPTION AND MILITARY
    "Corruption Perceptions Index 2025",
    "Corruption Perceptions Index India Rank",
    "Transparency International Ranking",
    "Global Firepower Ranking 2026",
    "Global Military Strength Ranking 2026",
    "India Military Power Rank 2026",
    "भ्रष्टाचार धारणा सूचकांक 2025",
    "वैश्विक सैन्य शक्ति रैंकिंग 2026",

    // INTERNATIONAL ORGANIZATIONS
    "World Economic Forum Reports",
    "NITI Aayog Reports 2026",
    "UN Reports 2026",
    "WHO Reports 2026",
    "FAO Reports 2026",
    "SIPRI Reports 2026",
    "UNICEF Reports 2026",
    "World Bank Reports 2026",
    "United Nations Reports Current Affairs",
    "Reports and Their Publishing Organizations",

    // INDIA SPECIFIC INDEXES
    "NITI Aayog Investment Friendliness Index 2026",
    "Fiscal Health Index 2026",
    "Export Preparedness Index 2024",
    "Panchayat Advancement Index 2.0",
    "LEADS 2025 Report",
    "Swachh Vayu Sarvekshan 2026",
    "Women and Men in India 2025",
    "NITI Aayog State Rankings 2026",
    "नीति आयोग रिपोर्ट 2026",
    "राजकोषीय स्वास्थ्य सूचकांक 2026",
    "निर्यात तैयारी सूचकांक 2024",
    "पंचायत उन्नति सूचकांक 2026",

    // UKPSC
    "UKPSC Indexes Rankings Reports 2026",
    "UKPSC Current Affairs 2026",
    "UKPSC Global Index Rankings",
    "UKPSC India Ranking Questions",
    "UKPSC Reports and Indexes MCQ",
    "UKPSC General Studies 2026",
    "UKPSC World Reports 2026",
    "UKPSC Important Indexes",
    "UKPSC सूचकांक रैंकिंग 2026",

    // UKSSSC
    "UKSSSC Indexes Rankings Reports 2026",
    "UKSSSC Current Affairs 2026",
    "UKSSSC Global Index Rankings",
    "UKSSSC India Ranking 2026",
    "UKSSSC General Knowledge",
    "UKSSSC Reports and Indexes MCQ",
    "UKSSSC Group C Current Affairs",
    "UKSSSC Junior Assistant GK",
    "UKSSSC Important Reports 2026",
    "UKSSSC सूचकांक और रिपोर्ट 2026",

    // UPSC
    "UPSC Reports and Indexes 2026",
    "UPSC Current Affairs Indexes 2026",
    "UPSC Prelims Reports and Indices",
    "UPSC International Reports 2026",
    "UPSC India Ranking in Global Reports",
    "UPSC Global Indices Current Affairs",

    // SSC
    "SSC Reports and Indexes 2026",
    "SSC CGL Important Indexes",
    "SSC CHSL Reports and Rankings",
    "SSC GD Current Affairs Rankings",
    "SSC MTS Important Reports",
    "SSC General Awareness Indexes",

    // HSSC CET
    "HSSC CET Reports and Indexes 2026",
    "HSSC CET Current Affairs",
    "Haryana CET India Rankings",
    "HSSC CET Group C GK",
    "HSSC CET Group D Current Affairs",
    "Haryana CET Reports and Indexes",

    // OTHER COMPETITIVE EXAMS
    "UPPSC Reports and Indexes 2026",
    "UP Police Current Affairs Rankings",
    "Railway NTPC Reports and Indexes",
    "RRB Group D Current Affairs",
    "Banking Current Affairs Reports 2026",
    "IBPS Reports and Indexes",
    "State PCS Current Affairs 2026",

    // AEO / WH-QUESTION KEYWORDS
    "What is India's rank in Global Peace Index 2026",
    "What is India's rank in World Happiness Report 2026",
    "Which country tops World Happiness Report 2026",
    "Who publishes Global Peace Index",
    "Who publishes Global Gender Gap Report",
    "What is India's rank in Press Freedom Index 2026",
    "Which organisation publishes Global Terrorism Index",
    "What is the Global Liveability Index",
    "Which organization releases QS World University Rankings",
    "Which reports are released by NITI Aayog",
    "What are the important indexes for UPSC",
    "What are the important rankings for UKPSC",

    // EXAM AND PRACTICE INTENT
    "Reports and Indexes MCQ 2026",
    "Indexes Rankings Reports Quiz",
    "Reports and Indexes Questions Answers",
    "India Rankings One Liner GK",
    "Current Affairs Reports Practice Questions",
    "Reports and Indexes Bilingual Notes",
    "Free Current Affairs Quiz 2026",
    "रैंकिंग और रिपोर्ट MCQ 2026",

    // BRAND
    "CET Test Current Affairs",
    "CET Test Reports and Indexes",
    "cettest.site",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "article",

    url: PAGE_URL,

    siteName: "CET Test",

    title:
      "Indexes, Rankings & Reports 2026 | India Rankings",

    description: DESCRIPTION,

    locale: "en_IN",

    alternateLocale: ["hi_IN"],

    countryName: "India",
  },

  twitter: {
    card: "summary",

    title:
      "Indexes, Rankings & Reports 2026 | CET Test",

    description: DESCRIPTION,
  },

  other: {
    "content-language": "en-IN, hi-IN",

    "geo.region": "IN",

    subject:
      "Indexes, Rankings, Reports and Current Affairs 2026",

    "educational-level":
      "Competitive Examination Preparation",

    abstract:
      "Bilingual educational notes on international indexes, global rankings, India's positions, report publishers, national rankings, one-liner questions and practice MCQs.",

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
    "Educational platform providing current affairs, general knowledge, study material and mock tests for competitive examinations.",
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
      name: "International Indexes and Rankings",
    },
    {
      "@type": "Thing",
      name: "India's Position in Global Rankings",
    },
    {
      "@type": "Thing",
      name: "International Reports",
    },
    {
      "@type": "Thing",
      name: "Indian Government Reports",
    },
    {
      "@type": "Thing",
      name: "Current Affairs 2026",
    },
  ],

  keywords:
    "Indexes Rankings Reports 2026, India Rankings, Global Indexes, UKPSC, UKSSSC, UPSC, SSC, HSSC CET",
};

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Indexes, Rankings & Reports 2026 – Bilingual Study Notes",

  alternateName: [
    "Indices, Rankings and Reports 2026",
    "India's Global Rankings 2026",
    "Important Reports and Indexes 2026",
    "सूचकांक, रैंकिंग एवं रिपोर्ट 2026",
    "भारत की वैश्विक रैंकिंग 2026",
  ],

  description: DESCRIPTION,

  url: PAGE_URL,

  inLanguage: ["en", "hi"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Study Guide",
    "Reference Material",
    "Practice Questions",
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
      name: "Global Peace Index",
    },
    {
      "@type": "Thing",
      name: "World Happiness Report",
    },
    {
      "@type": "Thing",
      name: "Global Gender Gap Report",
    },
    {
      "@type": "Thing",
      name: "World Press Freedom Index",
    },
    {
      "@type": "Thing",
      name: "NITI Aayog Reports",
    },
    {
      "@type": "Thing",
      name: "Global Rankings and Reports",
    },
  ],

  hasPart: [
    {
      "@type": "CreativeWork",

      name: "Topic-wise Reports and Indexes",

      url: `${PAGE_URL}#topic-index`,
    },
    {
      "@type": "CreativeWork",

      name: "One-Liner Questions and Answers",

      url: `${PAGE_URL}#one-liner-qa`,
    },
    {
      "@type": "CreativeWork",

      name: "Practice MCQs",

      url: PAGE_URL,
    },
  ],

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  isPartOf: {
    "@id": `${PAGE_URL}#webpage`,
  },
};

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

      name: "Indexes, Rankings & Reports 2026",

      item: PAGE_URL,
    },
  ],
};

// ======================================================
// TOPIC-WISE INDEX SCHEMA
// ======================================================

const reportTopics = [
  {
    name: "Global Peace Index 2026",
    slug: "global-peace-index",
  },
  {
    name: "World Happiness Report 2026",
    slug: "world-happiness-report",
  },
  {
    name: "Global Terrorism Index 2026",
    slug: "global-terrorism-index",
  },
  {
    name: "Global Gender Gap Report 2026",
    slug: "global-gender-gap",
  },
  {
    name: "Travel & Tourism Development Index 2026",
    slug: "travel-tourism-index",
  },
  {
    name: "Energy Transition Index 2026",
    slug: "energy-transition-index",
  },
  {
    name: "Environmental Performance Index 2026",
    slug: "environment-performance-index",
  },
  {
    name: "World Press Freedom Index 2026",
    slug: "press-freedom-index",
  },
  {
    name: "Corruption Perceptions Index 2025",
    slug: "corruption-perceptions",
  },
  {
    name: "Global Firepower Military Strength Ranking 2026",
    slug: "global-firepower",
  },
  {
    name: "Global Liveability Index 2026",
    slug: "global-liveability",
  },
  {
    name: "QS World University Rankings 2027",
    slug: "qs-world-university",
  },
  {
    name: "India's Next Growth Frontier Report",
    slug: "india-next-growth-frontier",
  },
  {
    name: "SOFI Report 2026",
    slug: "sofi-report",
  },
  {
    name: "World Air Quality Report 2025",
    slug: "world-air-quality",
  },
  {
    name: "Swachh Vayu Sarvekshan Awards 2026",
    slug: "swachh-vayu",
  },
  {
    name: "SIPRI Arms Transfers Report",
    slug: "sipri-arms-transfers",
  },
  {
    name: "The World's Cities in 2025 Report",
    slug: "worlds-cities-report",
  },
  {
    name: "NITI Aayog Investment Friendliness Index 2026",
    slug: "investment-friendliness",
  },
  {
    name: "LEADS 2025 Report",
    slug: "leads-2025",
  },
  {
    name: "Panchayat Advancement Index 2.0",
    slug: "pai-2-0",
  },
  {
    name: "Women and Men in India 2025",
    slug: "women-men-india",
  },
  {
    name: "Export Preparedness Index 2024",
    slug: "export-preparedness",
  },
  {
    name: "Fiscal Health Index 2026",
    slug: "fiscal-health-index",
  },
];

const itemListSchema = {
  "@type": "ItemList",

  "@id": `${PAGE_URL}#report-list`,

  name: "Important Indexes, Rankings and Reports",

  description:
    "Topic-wise reference list of international and Indian indexes, rankings and reports included in the study material.",

  numberOfItems: reportTopics.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement: reportTopics.map((topic, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: topic.name,

    url: `${PAGE_URL}#${topic.slug}`,
  })),
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
    learningResourceSchema,
    breadcrumbSchema,
    itemListSchema,
  ],
};

// ======================================================
// NEXT.JS LAYOUT
// ======================================================

export default function IndexesRankingsReportsLayout({
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