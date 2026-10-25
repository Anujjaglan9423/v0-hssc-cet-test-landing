import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/national-international-current-affairs-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Nano News 2026 | Current Affairs in Hindi & English";

const DESCRIPTION =
  "Nano News 2026: bilingual current affairs covering government schemes, REC-PFC merger, Zojila Tunnel, nine core industries, international summits and MCQs for competitive exams.";

const DESCRIPTION_HI =
  "नैनो न्यूज़ 2026: सरकारी योजनाएँ, REC-PFC विलय, ज़ोजिला सुरंग, नौ कोर उद्योग, राष्ट्रीय-अंतरराष्ट्रीय घटनाएँ और प्रतियोगी परीक्षाओं के लिए हिंदी-अंग्रेजी MCQ।";

// Verified official source references
const SOURCES = [
  "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2279256&lang=1&reg=48",
  "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2286615",
  "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2270063&lang=1&reg=6",
];

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
    "Current Affairs, General Knowledge, National News, International Affairs, Indian Economy, Competitive Exam Preparation",

  keywords: [
    // PRIMARY
    "Nano News 2026",
    "Current Affairs Nano News 2026",
    "Nano Current Affairs 2026",
    "Current Affairs 2026",
    "Current Affairs 2026 Hindi English",
    "Important Current Affairs 2026",
    "National Current Affairs 2026",
    "International Current Affairs 2026",
    "Current Affairs Topic Wise 2026",
    "Current Affairs One Liners 2026",
    "Current Affairs Revision Notes 2026",
    "Competitive Exams Current Affairs 2026",

    // HINDI
    "नैनो न्यूज 2026",
    "नैनो करंट अफेयर्स 2026",
    "समसामयिकी 2026",
    "करेंट अफेयर्स 2026 हिंदी",
    "राष्ट्रीय करेंट अफेयर्स 2026",
    "अंतरराष्ट्रीय करेंट अफेयर्स 2026",
    "महत्वपूर्ण घटनाएं 2026",
    "सामान्य ज्ञान 2026",
    "मासिक करंट अफेयर्स 2026",
    "विषयवार करेंट अफेयर्स 2026",
    "प्रतियोगी परीक्षा समसामयिकी",
    "करेंट अफेयर्स प्रश्न उत्तर 2026",

    // REC-PFC
    "REC PFC Merger 2026",
    "REC Power Finance Corporation Merger",
    "PFC REC Merger Current Affairs",
    "Power Sector Financing India",
    "Maharatna Companies India",
    "REC Limited PFC News 2026",
    "आरईसी पीएफसी विलय 2026",

    // INFRASTRUCTURE
    "Zojila Tunnel 2026",
    "Zojila Tunnel Project",
    "Zojila Tunnel Baltal Minamarg",
    "Zojila Tunnel NH1",
    "NHIDCL Zojila Tunnel",
    "Land Port Management System",
    "Vinimay Portal 2026",
    "LPMS India",
    "Integrated Check Posts India",
    "Zojila Tunnel Current Affairs",
    "जोजिला सुरंग परियोजना",
    "विनिमय पोर्टल",

    // COAL AND INDUSTRY
    "Coal Gasification Mission 2026",
    "Coal to Ammonium Nitrate Project",
    "Lakhanpur Coal Project Odisha",
    "Index of Core Industries 2026",
    "Nine Core Industries India",
    "ICI Base Year 2022 23",
    "Iron Ore Ninth Core Industry",
    "Electricity Weightage Core Industries",
    "Index of Industrial Production",
    "India Industrial Growth 2026",
    "नौ प्रमुख कोर उद्योग",
    "कोयला गैसीकरण मिशन",
    "औद्योगिक उत्पादन सूचकांक",

    // GOVERNANCE
    "Right to Walk on Footpaths India",
    "Supreme Court Pedestrian Rights",
    "Article 19 Freedom of Movement",
    "Article 21 Right to Life",
    "ADR Report Chief Ministers",
    "Association for Democratic Reforms",
    "Air Suvidha 2.0",
    "Air Suvidha Health Declaration",
    "National Makhana Board",
    "PM CARES Fund",
    "मुख्यमंत्री एडीआर रिपोर्ट",
    "फुटपाथ पर चलने का अधिकार",
    "राष्ट्रीय मखाना बोर्ड",

    // TECHNOLOGY
    "SEMICON India 2026",
    "Bharat Innovates 2026",
    "India Semiconductor Mission",
    "AI Training India 2026",
    "VivaTech 2026",
    "World AI Cooperation Organization",
    "Technology Current Affairs 2026",
    "Artificial Intelligence Current Affairs",
    "India Innovation Current Affairs",

    // INTERNATIONAL RELATIONS
    "India Nepal Border Dispute 2026",
    "India Nepal Boundary",
    "BRICS Space Economy",
    "BRICS New Development Bank",
    "Bonn Climate Conference 2026",
    "NATO Ankara Summit 2026",
    "India UK CETA 2026",
    "India MERCOSUR PTA",
    "Raisina Dialogue 2026",
    "World Circular Economy Forum 2026",
    "UNCCD COP17",
    "SAWEN 2026",
    "International Summits 2026",
    "Global Agreements 2026",
    "अंतरराष्ट्रीय सम्मेलन 2026",
    "भारत नेपाल सीमा विवाद",

    // ENVIRONMENT
    "Bonn Climate Conference",
    "UNCCD COP17 2026",
    "FAO Committee on Forestry 2026",
    "World Circular Economy Forum",
    "Green Economy 2026",
    "Blue Economy India",
    "Climate Change Current Affairs 2026",
    "Environment Current Affairs 2026",

    // UKPSC
    "UKPSC Nano News 2026",
    "UKPSC Current Affairs 2026",
    "UKPSC Current Affairs Hindi",
    "UKPSC National Current Affairs",
    "UKPSC International Relations",
    "UKPSC Economy Current Affairs",
    "UKPSC Government Schemes 2026",
    "UKPSC Environment Current Affairs",
    "UKPSC Topic Wise Current Affairs",
    "UKPSC Current Affairs MCQ",

    // UKSSSC
    "UKSSSC Nano News 2026",
    "UKSSSC Current Affairs 2026",
    "UKSSSC Current Affairs Hindi",
    "UKSSSC Group C Current Affairs",
    "UKSSSC Junior Assistant Current Affairs",
    "UKSSSC General Knowledge 2026",
    "UKSSSC National Current Affairs",
    "UKSSSC Government Schemes",
    "UKSSSC Current Affairs MCQ",
    "UKSSSC One Liner Current Affairs",

    // UPSC
    "UPSC Nano Current Affairs 2026",
    "UPSC Current Affairs 2026",
    "UPSC Prelims Current Affairs",
    "UPSC GS Paper 2 Current Affairs",
    "UPSC GS Paper 3 Current Affairs",
    "UPSC Economy Current Affairs",
    "UPSC International Relations",
    "UPSC Environment Current Affairs",
    "UPSC Government Schemes 2026",
    "UPSC Current Affairs MCQ",

    // SSC
    "SSC Current Affairs 2026",
    "SSC CGL Current Affairs",
    "SSC CHSL Current Affairs",
    "SSC GD Current Affairs",
    "SSC MTS Current Affairs",
    "SSC General Awareness 2026",
    "SSC Important Current Affairs",
    "SSC Current Affairs One Liners",

    // HSSC CET
    "HSSC CET Current Affairs 2026",
    "Haryana CET Current Affairs",
    "HSSC CET Group C Current Affairs",
    "HSSC CET Group D GK",
    "HSSC CET Nano News",
    "Haryana CET General Knowledge",
    "HSSC CET Current Affairs Quiz",

    // UPPSC
    "UPPSC Current Affairs 2026",
    "UPPSC Nano News 2026",
    "UPPSC National Current Affairs",
    "UPPSC International Current Affairs",
    "UPPSC General Studies",
    "UPPSC Government Schemes",
    "UPPSC Economy Current Affairs",
    "UPPSC Current Affairs MCQ",

    // OTHER EXAMS
    "Railway NTPC Current Affairs 2026",
    "RRB Group D Current Affairs",
    "Banking Current Affairs 2026",
    "IBPS Current Affairs",
    "State PCS Current Affairs",
    "State PSC General Knowledge",
    "Teaching Exam Current Affairs",

    // AEO / WH SEARCHES
    "What are the important current affairs of 2026",
    "What is REC PFC merger",
    "What is the Zojila Tunnel Project",
    "What is the Vinimay Portal",
    "What is the Land Port Management System",
    "How many core industries are there in India",
    "What is the ninth core industry",
    "What is the new base year of Index of Core Industries",
    "What is the National Makhana Board",
    "What is Air Suvidha 2.0",
    "What is the India UK CETA",
    "What is the BRICS New Development Bank",
    "Which current affairs are important for UKPSC",
    "How to prepare current affairs for UKSSSC",

    // QUIZ
    "Nano News 2026 MCQ",
    "Current Affairs 2026 MCQ",
    "Current Affairs Questions and Answers",
    "Current Affairs Bilingual Quiz",
    "Current Affairs Practice Test",
    "Current Affairs Revision 2026",
    "GK Quiz 2026",
    "Free Current Affairs Test",
    "समसामयिकी MCQ 2026",

    // BRAND
    "CET Test Nano News",
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
      "Nano News 2026 | National & International Current Affairs",

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
      "Nano News 2026, National and International Current Affairs",

    abstract:
      "Bilingual current affairs digest covering PDF pages 113–132, including Indian economy, government initiatives, infrastructure, international agreements, environment and competitive-exam practice questions.",

    "description:hi": DESCRIPTION_HI,
  },
};

// ======================================================
// TOPIC CHAPTERS
// ======================================================

const chapterTitles = [
  "REC–PFC Merger, Vinimay & Zojila Tunnel",
  "Zojila Execution, Coal-to-Ammonium Nitrate & Footpath Rights",
  "Air Suvidha 2.0, ADR Report & Core Industries",
  "Nine Core Industries & Shakti ki Saptadhara",
  "Shakti ki Saptadhara & PM CARES Fund",
  "National Makhana Board & Passive Euthanasia",
  "Euthanasia Law, ANTF Conference & SEMICON India",
  "Bharat Innovates, Millet Export & India–Nepal Boundary",
  "Nepal Border Map, EU Return Regulation & VivaTech",
  "BRICS Space Economy & Bonn Climate Conference",
  "Operation Amistad, Flamingo Revolution & Seychelles",
  "ILO Convention No. 193 & NATO Ankara Summit",
  "US–Saudi 123 Agreement & India–UK CETA",
  "WAICO, Makkah Defence Pact & BRICS NDB",
  "UNCCD COP17 & SAVE America Act",
  "Raisina Dialogue & World Circular Economy Forum",
  "Greenland Security Agreement & P4M Summit",
  "P4M, V4+India & SAWEN",
  "SAWEN, FAO Forestry & India–MERCOSUR PTA",
  "India–MERCOSUR Preferential Trade Agreement",
];

// ======================================================
// ORGANIZATION
// ======================================================

const organizationSchema = {
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: "CET Test",
  url: SITE_URL,

  description:
    "Educational platform providing current affairs, general knowledge, study materials and mock tests for competitive examinations.",
};

// ======================================================
// WEBSITE
// ======================================================

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

// ======================================================
// WEBPAGE
// ======================================================

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
      name: "Current Affairs 2026",
    },
    {
      "@type": "Thing",
      name: "Indian Economy",
    },
    {
      "@type": "Thing",
      name: "Government Policies and Schemes",
    },
    {
      "@type": "Thing",
      name: "International Relations",
    },
    {
      "@type": "Thing",
      name: "Infrastructure Development",
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
    "Nano News 2026 – Bilingual Current Affairs Study Notes",

  alternateName: [
    "Current Affairs 2026 Nano News",
    "National and International Current Affairs Digest",
    "नैनो न्यूज़ 2026",
    "समसामयिकी 2026",
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
      name: "National Current Affairs",
    },
    {
      "@type": "Thing",
      name: "International Current Affairs",
    },
    {
      "@type": "Thing",
      name: "Economy and Infrastructure",
    },
    {
      "@type": "Thing",
      name: "Environment and Technology",
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
// CHAPTER ITEM LIST
// ======================================================

const chapterListSchema = {
  "@type": "ItemList",

  "@id": `${PAGE_URL}#chapters`,

  name:
    "Nano News 2026 – Current Affairs Topics",

  description:
    "Twenty sections covering current affairs topics transcribed from PDF pages 113 to 132.",

  numberOfItems: chapterTitles.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement: chapterTitles.map(
    (chapter, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: chapter,
    })
  ),
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
      name: "Nano News 2026",
      item: PAGE_URL,
    },
  ],
};

// ======================================================
// SCHEMA GRAPH
// ======================================================

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    learningResourceSchema,
    chapterListSchema,
    breadcrumbSchema,
  ],
};

// ======================================================
// NEXT.JS LAYOUT
// ======================================================

export default function NanoNewsLayout({
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