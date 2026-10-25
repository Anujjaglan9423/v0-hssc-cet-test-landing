import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// PAGE CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/india-ndc-2035";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "India NDC 2035: 47%, 60% & Carbon Sink Targets";

const PAGE_DESCRIPTION =
  "India's updated NDC 2031–2035 explained: 47% emissions-intensity reduction, 60% non-fossil power capacity and 3.5–4.0 billion tonnes carbon sink. Hindi, English and MCQs.";

const PAGE_DESCRIPTION_HI =
  "भारत के संशोधित NDC लक्ष्य 2031–2035: उत्सर्जन तीव्रता में 47% कमी, गैर-जीवाश्म विद्युत क्षमता 60%, कार्बन सिंक 3.5–4.0 अरब टन। हिंदी-अंग्रेजी नोट्स और MCQ।";

const GOVERNMENT_SOURCE =
  "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2245209&lang=1&reg=3";

const UNFCCC_SOURCE =
  "https://unfccc.int/sites/default/files/2026-04/INDIA%20NDC%202031-35.pdf";

// ======================================================
// NEXT.JS METADATA
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
    "Environment, Climate Change, Current Affairs, General Studies, Competitive Examination Preparation",

  keywords: [
    // PRIMARY
    "India NDC 2035",
    "India NDC 2031 2035",
    "India Updated NDC 2026",
    "India Revised NDC 2035",
    "India New Climate Targets 2035",
    "India Nationally Determined Contributions 2035",
    "India Nationally Determined Contribution 2026",
    "India Climate Commitments 2035",
    "India Climate Policy 2026",
    "India NDC 2035 Current Affairs",
    "India NDC Targets Explained",
    "India NDC 2035 Hindi English",

    // HINDI
    "भारत के संशोधित NDC लक्ष्य 2035",
    "भारत का राष्ट्रीय स्तर पर निर्धारित योगदान",
    "भारत के जलवायु लक्ष्य 2035",
    "भारत की जलवायु नीति 2026",
    "भारत के नए जलवायु लक्ष्य",
    "राष्ट्रीय स्तर पर निर्धारित योगदान 2031 2035",
    "भारत NDC 2035 हिंदी",
    "भारत के उत्सर्जन कटौती लक्ष्य",
    "भारत के गैर जीवाश्म ऊर्जा लक्ष्य",
    "भारत का कार्बन सिंक लक्ष्य",
    "जलवायु परिवर्तन करेंट अफेयर्स 2026",
    "पर्यावरण समसामयिकी 2026",

    // NDC TARGETS
    "India 47 Percent Emissions Intensity Target",
    "India Emissions Intensity 2035",
    "India 60 Percent Non Fossil Capacity Target",
    "India Non Fossil Power Capacity 2035",
    "India Carbon Sink Target 2035",
    "India 3.5 to 4 Billion Tonnes Carbon Sink",
    "India Climate Targets 47 60 2035",
    "India NDC Three Key Targets",
    "India GDP Emissions Intensity Reduction",
    "India Forest and Tree Cover Carbon Sink",
    "47 प्रतिशत उत्सर्जन तीव्रता",
    "60 प्रतिशत गैर जीवाश्म विद्युत क्षमता",
    "3.5 से 4 अरब टन कार्बन सिंक",

    // UNFCCC AND PARIS AGREEMENT
    "UNFCCC India NDC 2035",
    "Paris Agreement India NDC",
    "Nationally Determined Contributions Explained",
    "What is NDC",
    "What is UNFCCC",
    "UNFCCC COP1 Berlin 1995",
    "Paris Agreement COP21",
    "Paris Agreement Climate Targets",
    "Global Warming 1.5 Degrees",
    "Global Warming Below 2 Degrees",
    "India Paris Agreement Commitments",
    "पेरिस समझौता और भारत",
    "यूएनएफसीसीसी क्या है",
    "एनडीसी क्या है",
    "पहली जलवायु COP सम्मेलन",

    // NET ZERO
    "India Net Zero 2070",
    "India Net Zero Target",
    "India Long Term Climate Strategy",
    "Viksit Bharat 2047 Climate Goals",
    "India Green Growth 2047",
    "India Sustainable Development Goals",
    "भारत नेट जीरो 2070",
    "विकसित भारत 2047 जलवायु लक्ष्य",
    "भारत की हरित विकास नीति",

    // GOVERNMENT INITIATIVES
    "National Green Hydrogen Mission",
    "PM Surya Ghar Muft Bijli Yojana",
    "Mission LiFE India",
    "Lifestyle for Environment",
    "National Action Plan on Climate Change",
    "NAPCC 2008",
    "India Renewable Energy Policy",
    "India Clean Energy Transition",
    "India Solar Energy Mission",
    "PLI Green Energy Schemes",
    "राष्ट्रीय हरित हाइड्रोजन मिशन",
    "पीएम सूर्य घर योजना",
    "मिशन लाइफ",
    "राष्ट्रीय जलवायु परिवर्तन कार्य योजना",

    // UKPSC
    "UKPSC India NDC 2035",
    "UKPSC Environment Current Affairs 2026",
    "UKPSC Climate Change Current Affairs",
    "UKPSC NDC Targets",
    "UKPSC Paris Agreement",
    "UKPSC UNFCCC Notes",
    "UKPSC Environment MCQ 2026",
    "UKPSC General Studies Environment",
    "UKPSC Climate Policy 2026",
    "UKPSC भारत के NDC लक्ष्य",

    // UKSSSC
    "UKSSSC India NDC 2035",
    "UKSSSC Environment Current Affairs 2026",
    "UKSSSC Climate Change GK",
    "UKSSSC India Climate Targets",
    "UKSSSC Environment MCQ",
    "UKSSSC Group C Environment",
    "UKSSSC Junior Assistant Current Affairs",
    "UKSSSC General Knowledge 2026",
    "UKSSSC Paris Agreement Questions",
    "UKSSSC जलवायु परिवर्तन 2026",

    // UPSC
    "UPSC India NDC 2035",
    "UPSC India Updated NDC 2026",
    "UPSC Environment and Ecology",
    "UPSC Climate Change 2026",
    "UPSC Prelims NDC Targets",
    "UPSC GS Paper 3 Environment",
    "UPSC Paris Agreement",
    "UPSC UNFCCC Current Affairs",
    "UPSC Net Zero India 2070",
    "UPSC Climate Commitments India",

    // SSC
    "SSC India NDC 2035",
    "SSC Environment Current Affairs 2026",
    "SSC CGL Climate Change",
    "SSC CHSL Environment GK",
    "SSC GD Environment Questions",
    "SSC MTS Current Affairs 2026",
    "SSC Paris Agreement Questions",
    "SSC General Awareness Climate",

    // HSSC CET
    "HSSC CET NDC 2035",
    "HSSC CET Environment Current Affairs",
    "Haryana CET Climate Change GK",
    "HSSC CET Group C Environment",
    "HSSC CET Group D Current Affairs",
    "HSSC CET India Climate Targets",
    "Haryana CET Environmental Studies",

    // UPPSC
    "UPPSC India NDC 2035",
    "UPPSC Environment Current Affairs 2026",
    "UPPSC Climate Change 2026",
    "UPPSC NDC MCQ",
    "UPPSC Paris Agreement",
    "UPPSC General Studies Environment",
    "UPPSC Climate Policy India",

    // OTHER EXAMS
    "Railway NTPC Environment Current Affairs",
    "RRB Group D Environment GK",
    "Banking Current Affairs Climate 2026",
    "IBPS Environment Current Affairs",
    "State PCS Climate Change",
    "State PSC India NDC",
    "Competitive Exams Environment GK",

    // AEO / PEOPLE ALSO ASK
    "What are India's updated NDC targets for 2035",
    "What is India's emissions intensity target for 2035",
    "What is India's non fossil power target by 2035",
    "What is India's carbon sink target by 2035",
    "What does NDC stand for",
    "Why are NDCs important",
    "When did India announce its new NDC targets",
    "Who submits NDCs under the Paris Agreement",
    "What is the difference between NDC and net zero",
    "What is emissions intensity of GDP",
    "When was the first UNFCCC COP held",
    "What is India's net zero target year",

    // PRACTICE AND STUDY INTENT
    "India NDC 2035 MCQ",
    "India NDC 2035 Questions and Answers",
    "NDC 2035 Quiz",
    "India Climate Goals MCQ",
    "Paris Agreement MCQ 2026",
    "Environment Current Affairs Quiz 2026",
    "Climate Change Bilingual Study Notes",
    "NDC Targets UPSC Prelims Questions",
    "भारत NDC 2035 MCQ",
    "जलवायु परिवर्तन प्रश्न उत्तर",

    // BRAND
    "CET Test Environment Current Affairs",
    "CET Test NDC 2035",
    "CET Test Climate Change Notes",
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
      "India's Updated NDC 2035 | Climate Targets Explained",

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
      "India's Updated Nationally Determined Contribution 2031–2035",

    abstract:
      "Bilingual competitive-exam study notes covering India's 2035 NDC commitments, emissions intensity, non-fossil installed power capacity, carbon sinks, UNFCCC, Paris Agreement and climate policy.",

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
    "Educational platform providing current affairs, general knowledge, study material and mock tests for competitive examination preparation.",
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
      name: "Nationally Determined Contributions",
    },
    {
      "@type": "Thing",
      name: "India's Climate Policy",
    },
    {
      "@type": "Thing",
      name: "United Nations Framework Convention on Climate Change",
    },
    {
      "@type": "Thing",
      name: "Paris Agreement",
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
    "India's Updated NDCs 2031–2035: Key Targets, UNFCCC and MCQs",

  alternativeHeadline:
    "भारत के संशोधित राष्ट्रीय स्तर पर निर्धारित योगदान 2031–2035",

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
    "Climate Change",
    "Environment and Ecology",
    "India's Climate Commitments",
    "International Climate Agreements",
    "Current Affairs 2026",
  ],

  keywords: [
    "India NDC 2035",
    "Nationally Determined Contributions",
    "47% Emissions Intensity Reduction",
    "60% Non-Fossil Installed Power Capacity",
    "3.5–4.0 Billion Tonnes Carbon Sink",
    "Paris Agreement",
    "UNFCCC",
  ],

  about: [
    {
      "@type": "Thing",
      name: "India's Nationally Determined Contribution 2031–2035",
    },
    {
      "@type": "Thing",
      name: "Emissions Intensity of GDP",
    },
    {
      "@type": "Thing",
      name: "Non-Fossil Fuel Installed Power Capacity",
    },
    {
      "@type": "Thing",
      name: "Forest and Tree Cover Carbon Sink",
    },
  ],

  citation: [
    GOVERNMENT_SOURCE,
    UNFCCC_SOURCE,
  ],
};

// ======================================================
// LEARNING RESOURCE SCHEMA
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "India NDC 2035 – Bilingual Study Notes and MCQs",

  alternateName: [
    "India's Updated NDCs 2031–2035",
    "India Climate Targets 2035",
    "India Nationally Determined Contribution 2035",
    "भारत के जलवायु लक्ष्य 2035",
    "भारत के संशोधित NDC लक्ष्य",
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
      name: "Nationally Determined Contributions",
    },
    {
      "@type": "Thing",
      name: "Climate Change",
    },
    {
      "@type": "Thing",
      name: "Paris Agreement",
    },
    {
      "@type": "Thing",
      name: "Net Zero Emissions",
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
// VERIFIED CLIMATE TARGETS - DATASET SCHEMA
// ======================================================

const ndcTargetsSchema = {
  "@type": "Dataset",

  "@id": `${PAGE_URL}#ndc-targets`,

  name:
    "India Nationally Determined Contribution Targets for 2035",

  description:
    "India's three principal 2035 NDC targets covering emissions intensity, installed non-fossil electricity capacity, and carbon sink creation.",

  inLanguage: "en",

  variableMeasured: [
    {
      "@type": "PropertyValue",

      name: "Reduction in GDP Emissions Intensity",

      value: 47,

      unitText: "Percent",

      description:
        "Reduction by 2035 relative to 2005 emissions intensity.",
    },
    {
      "@type": "PropertyValue",

      name: "Non-Fossil Installed Electricity Capacity",

      value: 60,

      unitText: "Percent",

      description:
        "Target share of cumulative installed electric power capacity by 2035.",
    },
    {
      "@type": "PropertyValue",

      name: "Additional Carbon Sink",

      minValue: 3.5,

      maxValue: 4.0,

      unitText:
        "Billion tonnes CO2 equivalent",

      description:
        "Carbon sink through forest and tree cover by 2035, relative to the 2005 baseline.",
    },
  ],

  isBasedOn: UNFCCC_SOURCE,

  citation: [
    GOVERNMENT_SOURCE,
    UNFCCC_SOURCE,
  ],
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

      name: "India NDC 2035",

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
    ndcTargetsSchema,
    breadcrumbSchema,
  ],
};

// ======================================================
// NEXT.JS LAYOUT
// ======================================================

export default function IndiaNDC2035Layout({
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