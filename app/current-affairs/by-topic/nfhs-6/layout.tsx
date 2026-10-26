
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET Test";

const PAGE_PATH = "/current-affairs/by-topic/nfhs-6";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "NFHS-6 Report 2023–24: Key Findings & MCQs | CET Test";

const PAGE_DESCRIPTION =
  "Explore NFHS-6 Report 2023–24, released in 2026. Study India's fertility rate, institutional deliveries, stunting, health insurance and women's internet use with Hindi-English notes and MCQs for UPSC, UKPSC, UKSSSC and HSSC CET.";

const PAGE_TITLE_HI =
  "राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण-6 (NFHS-6)";

const PAGE_DESCRIPTION_HI =
  "NFHS-6 (2023–24) के प्रमुख निष्कर्ष पढ़ें। भारत की कुल प्रजनन दर, संस्थागत प्रसव, बच्चों में ठिगनापन, स्वास्थ्य बीमा और महिलाओं के इंटरनेट उपयोग के आँकड़े हिंदी-अंग्रेज़ी में जानें।";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  keywords: [
    // Primary SEO
    "NFHS-6",
    "NFHS 6",
    "NFHS-6 Report",
    "NFHS-6 Report 2023-24",
    "NFHS 6 Report 2026",
    "National Family Health Survey 6",
    "National Family Health Survey 2023-24",
    "National Family Health Survey 2026",
    "NFHS-6 latest report",
    "NFHS-6 key findings",
    "NFHS-6 important facts",
    "NFHS-6 data",
    "NFHS-6 statistics",
    "NFHS-6 dashboard",
    "NFHS-6 fact sheet",
    "NFHS-6 current affairs 2026",
    "NFHS-6 MCQ",
    "NFHS-6 questions and answers",
    "NFHS-6 Hindi notes",
    "NFHS-6 English notes",

    // Health indicators
    "India Total Fertility Rate 2024",
    "India TFR 2.0",
    "Total Fertility Rate NFHS-6",
    "replacement fertility rate India",
    "institutional deliveries NFHS-6",
    "institutional births India 90.6",
    "maternal health India",
    "child health India 2024",
    "stunting rate India 2024",
    "child stunting 29.3 percent",
    "child nutrition NFHS-6",
    "severe wasting NFHS-6",
    "malnutrition in India 2024",
    "NFHS health insurance 60.2",
    "health insurance coverage India",
    "women internet use NFHS-6",
    "female internet usage India",
    "reproductive health India",
    "family planning indicators",
    "antenatal care coverage India",
    "public health indicators",
    "health and nutrition current affairs",

    // Survey and government
    "Ministry of Health and Family Welfare NFHS",
    "MoHFW NFHS-6",
    "International Institute for Population Sciences",
    "IIPS NFHS-6",
    "National Health Mission",
    "SDG health indicators",
    "population health survey India",
    "government health reports 2026",
    "important reports and indices 2026",

    // UPSC
    "NFHS-6 UPSC",
    "NFHS-6 UPSC Prelims",
    "UPSC NFHS-6 current affairs",
    "UPSC population studies",
    "UPSC health indicators",
    "UPSC social issues current affairs",
    "UPSC maternal child health",
    "UPSC GS2 health",
    "UPSC demographic transition",
    "UPSC fertility rate India",

    // UKPSC
    "NFHS-6 UKPSC",
    "UKPSC NFHS-6 current affairs",
    "UKPSC health current affairs 2026",
    "UKPSC important reports",
    "UKPSC fertility rate",
    "UKPSC Prelims health statistics",
    "UKPSC RO ARO current affairs",
    "Uttarakhand PCS NFHS",

    // UKSSSC
    "NFHS-6 UKSSSC",
    "UKSSSC current affairs 2026",
    "UKSSSC health reports",
    "UKSSSC national surveys",
    "UKSSSC important statistics",
    "UKSSSC Junior Assistant current affairs",
    "UKSSSC Patwari current affairs",
    "UKSSSC VDO current affairs",

    // HSSC CET
    "NFHS-6 HSSC CET",
    "HSSC CET NFHS report",
    "HSSC CET current affairs 2026",
    "HSSC CET health indicators",
    "Haryana CET important reports",
    "HSSC Group C current affairs",
    "HSSC Group D current affairs",

    // SSC / Railway / Banking
    "NFHS-6 SSC",
    "SSC CGL health current affairs",
    "SSC CHSL government reports",
    "SSC GD general awareness",
    "RRB NTPC NFHS",
    "Railway Group D current affairs",
    "banking current affairs 2026",

    // UPPSC / State PCS
    "NFHS-6 UPPSC",
    "UPPSC current affairs 2026",
    "State PCS health current affairs",
    "State PSC NFHS-6",
    "PCS demographic indicators",

    // Hindi
    "राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण 6",
    "राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण 2023-24",
    "एनएफएचएस 6 रिपोर्ट",
    "एनएफएचएस 6 रिपोर्ट 2026",
    "NFHS-6 के प्रमुख निष्कर्ष",
    "भारत की कुल प्रजनन दर",
    "कुल प्रजनन दर 2.0",
    "प्रतिस्थापन प्रजनन दर",
    "भारत में संस्थागत प्रसव",
    "मातृ एवं शिशु स्वास्थ्य",
    "बच्चों में ठिगनापन",
    "भारत में कुपोषण",
    "भारत में स्वास्थ्य बीमा कवरेज",
    "महिलाओं का इंटरनेट उपयोग",
    "भारत की स्वास्थ्य रिपोर्ट 2026",
    "महत्वपूर्ण सरकारी रिपोर्ट",
    "एनएफएचएस महत्वपूर्ण प्रश्न",
    "यूकेपीएससी करेंट अफेयर्स",
    "यूकेएसएसएससी करेंट अफेयर्स",
    "एचएसएससी सीईटी करेंट अफेयर्स",

    // AEO / WH / People Also Ask
    "what is NFHS-6",
    "what is the full form of NFHS",
    "when was NFHS-6 released",
    "who conducts NFHS-6",
    "which ministry releases NFHS",
    "what are the key findings of NFHS-6",
    "what is India's TFR in NFHS-6",
    "what is the replacement fertility rate",
    "what is the institutional delivery rate in NFHS-6",
    "what is the stunting rate in NFHS-6",
    "what percentage of households have health insurance in NFHS-6",
    "how many women use internet in India according to NFHS-6",
    "what is the difference between NFHS-5 and NFHS-6",
    "why is NFHS-6 important for UPSC",
    "which NFHS-6 indicators are important for UKPSC",
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
      "NFHS-6 Report 2023–24: India's Health Indicators & MCQs",

    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary",

    title:
      "NFHS-6 Report 2023–24 | CET Test",

    description: PAGE_DESCRIPTION,
  },
};

// -----------------------------------------------------
// STRUCTURED DATA
// -----------------------------------------------------

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ["en-IN", "hi-IN"],

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const webPageSchema = {
  "@type": "WebPage",

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
      name: "National Family Health Survey-6",
    },
    {
      "@type": "Thing",
      name: "Maternal and Child Health",
    },
    {
      "@type": "Thing",
      name: "Total Fertility Rate",
    },
    {
      "@type": "Thing",
      name: "Child Nutrition and Stunting",
    },
    {
      "@type": "Thing",
      name: "Health Insurance Coverage",
    },
    {
      "@type": "Thing",
      name: "Public Health Statistics in India",
    },
  ],

  mainEntity: {
    "@id": `${PAGE_URL}#learning-resource`,
  },
};

const articleSchema = {
  "@type": "Article",

  "@id": `${PAGE_URL}#article`,

  headline:
    "National Family Health Survey-6 (NFHS-6) 2023–24: Key Findings, Statistics and MCQs",

  alternativeHeadline: PAGE_TITLE_HI,

  description: PAGE_DESCRIPTION,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  author: {
    "@id": `${SITE_URL}/#organization`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },

  about: {
    "@type": "Thing",
    name: "NFHS-6 Report 2023–24",
  },
};

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
    "Current Affairs Notes",
    "Government Report Summary",
    "Public Health Study Material",
    "Practice MCQs",
  ],

  educationalLevel: "Competitive Examination",

  educationalUse: [
    "Exam Preparation",
    "Revision",
    "Self Study",
  ],

  teaches: [
    "National Family Health Survey",
    "NFHS-6 Key Findings",
    "Total Fertility Rate",
    "Institutional Deliveries",
    "Child Nutrition",
    "Health Insurance Coverage",
    "Women's Digital Access",
  ],

  audience: {
    "@type": "EducationalAudience",

    educationalRole: "student",

    audienceType:
      "UPSC, UKPSC, UKSSSC, HSSC CET, SSC, UPPSC, Railway and State PCS aspirants",
  },

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },
};

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
      name: "NFHS-6 Report 2023–24",
      item: PAGE_URL,
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    articleSchema,
    learningResourceSchema,
    breadcrumbSchema,
  ],
};

export default function NFHS6Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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
