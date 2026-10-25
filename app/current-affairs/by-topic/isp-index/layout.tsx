import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/isp-index";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Index of Services Production (ISP) 2026 | MCQs";

const DESCRIPTION =
  "Index of Services Production (ISP) 2026 explained: MoSPI's monthly trial index, 2024–25 base year, 19 services subsectors, 60% coverage and ISP vs IIP. Hindi-English MCQs.";

const DESCRIPTION_HI =
  "सेवा उत्पादन सूचकांक (ISP) 2026: MoSPI का मासिक परीक्षण सूचकांक, आधार वर्ष 2024–25, 19 सेवा उपक्षेत्र, लगभग 60% कवरेज, ISP और IIP में अंतर तथा MCQ।";

const MOSPI_SOURCE =
  "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2284450&lang=1&reg=48";

const MOSPI_FAQ =
  "https://www.mospi.gov.in/uploads/latestReleases/latest_release_1782292366710_eef9114f-767b-4f72-a868-2bc185b33507_Press_Release-_FAQs_on_Index_of_Services_Production_%281%29.pdf";

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
    "Indian Economy, Economic Indicators, Statistics, Current Affairs, General Studies, Competitive Examination Preparation",

  keywords: [
    // PRIMARY KEYWORDS
    "Index of Services Production 2026",
    "ISP 2026 India",
    "India ISP Index 2026",
    "Index of Services Production",
    "Index of Service Production",
    "ISP Full Form Economics",
    "ISP India MoSPI",
    "India Services Production Index",
    "MoSPI Services Index 2026",
    "India Monthly Services Index",
    "ISP Current Affairs 2026",
    "ISP Index Explained",
    "Index of Services Production Hindi English",

    // HINDI KEYWORDS
    "सेवा उत्पादन सूचकांक 2026",
    "भारत सेवा उत्पादन सूचकांक",
    "आईएसपी सूचकांक 2026",
    "सेवा क्षेत्र उत्पादन सूचकांक",
    "सेवा क्षेत्र का मासिक सूचकांक",
    "सेवा उत्पादन सूचकांक क्या है",
    "ISP का पूरा नाम",
    "भारत सेवा क्षेत्र सांख्यिकी",
    "भारतीय अर्थव्यवस्था सेवा क्षेत्र",
    "सेवा उत्पादन सूचकांक हिंदी",
    "आर्थिक संकेतक करेंट अफेयर्स 2026",
    "सेवा क्षेत्र सामान्य ज्ञान",

    // KEY FACTS
    "ISP Base Year 2024 25",
    "ISP Base Year India",
    "ISP Released 14 July 2026",
    "ISP April 2026 Trial Release",
    "First Index of Services Production India",
    "ISP 19 Services Sub Sectors",
    "ISP 60 Percent Services Coverage",
    "ISP Monthly Release Date",
    "ISP 29th of Every Month",
    "ISP Trial Index",
    "ISP Formal Services Sector",
    "National Statistics Office ISP",
    "Ministry of Statistics ISP",
    "MoSPI NSO ISP",

    // SERVICES SECTOR
    "India Services Sector Index",
    "Formal Services Sector India",
    "Services Output Growth India",
    "Monthly Services Output Indicator",
    "Services Sector Economic Performance",
    "India Services Sector Statistics",
    "Services Sector GVA",
    "Services Sector Growth 2026",
    "Economic Activity Indicators India",
    "Service Producing Industries",
    "सेवा क्षेत्र की वृद्धि",
    "भारत का औपचारिक सेवा क्षेत्र",

    // ISP VS IIP
    "ISP vs IIP",
    "Difference Between ISP and IIP",
    "Index of Industrial Production",
    "Index of Industrial Production 2026",
    "IIP and ISP Comparison",
    "Services Production vs Industrial Production",
    "IIP Measures Industrial Output",
    "ISP Measures Services Output",
    "ISP IIP Difference Hindi",
    "ISP और IIP में अंतर",
    "औद्योगिक उत्पादन सूचकांक",
    "सेवा और औद्योगिक उत्पादन",

    // ECONOMIC INDICATORS
    "WPI CPI IIP ISP",
    "WPI vs CPI vs IIP vs ISP",
    "Wholesale Price Index",
    "Consumer Price Index",
    "Index of Industrial Production",
    "Index of Services Production",
    "Economic Indicators India 2026",
    "Indian Economy Statistics 2026",
    "Price Index vs Production Index",
    "CPI WPI IIP ISP MCQ",
    "थोक मूल्य सूचकांक",
    "उपभोक्ता मूल्य सूचकांक",
    "आर्थिक सूचकांक 2026",

    // SECTOR COVERAGE
    "ISP Wholesale Trade",
    "ISP Retail Trade",
    "ISP Accommodation and Food",
    "ISP Railway Transport",
    "ISP Road Transport",
    "ISP Air Transport",
    "ISP Water Transport",
    "ISP Warehousing",
    "ISP Real Estate",
    "ISP Administrative Services",
    "ISP Services Sub Sectors",
    "India Services Index 19 Sectors",

    // UKPSC
    "UKPSC ISP 2026",
    "UKPSC Index of Services Production",
    "UKPSC Economy Current Affairs 2026",
    "UKPSC Indian Economy",
    "UKPSC Economic Indicators",
    "UKPSC WPI CPI IIP ISP",
    "UKPSC MoSPI Current Affairs",
    "UKPSC ISP MCQ",
    "UKPSC General Studies Economy",
    "UKPSC सेवा उत्पादन सूचकांक",

    // UKSSSC
    "UKSSSC ISP 2026",
    "UKSSSC Index of Services Production",
    "UKSSSC Economy Current Affairs",
    "UKSSSC Economic Indicators",
    "UKSSSC WPI CPI IIP ISP",
    "UKSSSC Group C Economy",
    "UKSSSC Junior Assistant GK",
    "UKSSSC General Knowledge 2026",
    "UKSSSC ISP Questions",
    "UKSSSC सेवा उत्पादन सूचकांक 2026",

    // UPSC
    "UPSC ISP 2026",
    "UPSC Index of Services Production",
    "UPSC Indian Economy Current Affairs",
    "UPSC Economic Indicators 2026",
    "UPSC GS Paper 3 Economy",
    "UPSC IIP vs ISP",
    "UPSC Services Sector",
    "UPSC Prelims Economy 2026",
    "UPSC MoSPI Statistics",
    "UPSC ISP MCQ",

    // SSC
    "SSC ISP Current Affairs",
    "SSC CGL Indian Economy",
    "SSC CHSL Economic Indicators",
    "SSC GD Economy GK",
    "SSC MTS General Awareness",
    "SSC WPI CPI IIP ISP",
    "SSC Economy Current Affairs 2026",

    // HSSC CET
    "HSSC CET ISP 2026",
    "HSSC CET Index of Services Production",
    "HSSC CET Economy Current Affairs",
    "Haryana CET Economic Indicators",
    "HSSC CET Group C Economy",
    "HSSC CET Group D GK",
    "HSSC CET WPI CPI IIP",
    "Haryana CET सेवा उत्पादन सूचकांक",

    // UPPSC
    "UPPSC ISP 2026",
    "UPPSC Index of Services Production",
    "UPPSC Economy Current Affairs",
    "UPPSC Economic Indicators 2026",
    "UPPSC WPI CPI IIP ISP",
    "UPPSC MoSPI Current Affairs",
    "UPPSC ISP MCQ",

    // OTHER EXAMS
    "Railway NTPC Economic Indicators",
    "RRB Group D Indian Economy",
    "Banking Current Affairs Economic Indicators",
    "IBPS Indian Economy GK",
    "State PCS ISP 2026",
    "State PSC Economy Current Affairs",
    "Competitive Exams Economy MCQ",

    // PEOPLE ALSO ASK / WH WORDS
    "What is Index of Services Production",
    "What is the full form of ISP",
    "Who releases ISP in India",
    "When was ISP first released",
    "What is the base year of ISP",
    "How many subsectors are covered by ISP",
    "What percentage of services sector does ISP cover",
    "What is the frequency of ISP",
    "What is the difference between ISP and IIP",
    "Why was ISP introduced in India",
    "Which ministry publishes the ISP",
    "What does ISP measure",
    "Does ISP cover informal services",
    "How is ISP different from CPI and WPI",

    // PRACTICE
    "ISP 2026 MCQ",
    "Index of Services Production MCQ",
    "ISP Questions and Answers",
    "Indian Economy MCQ 2026",
    "WPI CPI IIP ISP Quiz",
    "Services Sector Current Affairs Quiz",
    "ISP Bilingual Study Notes",
    "Free Economy Quiz 2026",
    "सेवा उत्पादन सूचकांक MCQ",

    // BRAND
    "CET Test ISP 2026",
    "CET Test Indian Economy",
    "CET Test Current Affairs",
    "cettest.site",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  // CORRECT NEXT.JS GOOGLEBOT DIRECTIVES
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
      "Index of Services Production (ISP) 2026 | India",

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
      "Index of Services Production 2026, Indian Economy and Services Sector Statistics",

    abstract:
      "Bilingual educational notes on India's Index of Services Production, covering MoSPI, NSO, the 2024–25 base year, monthly trial releases, 19 services subsectors and comparison with IIP, WPI and CPI.",

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
    "Educational platform offering current affairs, general knowledge, study materials and mock tests for competitive examinations.",
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
      name: "Index of Services Production",
    },
    {
      "@type": "Thing",
      name: "Indian Services Sector",
    },
    {
      "@type": "Thing",
      name: "Economic Statistics",
    },
    {
      "@type": "Thing",
      name: "Index of Industrial Production",
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
    "Index of Services Production (ISP) 2026: Base Year, Coverage and MCQs",

  alternativeHeadline:
    "सेवा उत्पादन सूचकांक 2026: आधार वर्ष, प्रमुख तथ्य एवं प्रश्न",

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
    "Economic Indicators",
    "Services Sector",
    "National Statistics Office",
    "Current Affairs 2026",
  ],

  keywords: [
    "Index of Services Production",
    "ISP 2026",
    "MoSPI",
    "NSO",
    "Base Year 2024–25",
    "19 Services Sub-sectors",
    "ISP vs IIP",
  ],

  about: [
    {
      "@type": "Thing",
      name: "Monthly Services Production Statistics",
    },
    {
      "@type": "Thing",
      name: "Services Sector Output",
    },
    {
      "@type": "Thing",
      name: "Formal Services Economy",
    },
  ],

  citation: [
    MOSPI_SOURCE,
    MOSPI_FAQ,
  ],
};

// ======================================================
// LEARNING RESOURCE
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Index of Services Production 2026 – Bilingual Notes and MCQs",

  alternateName: [
    "ISP India 2026",
    "India Services Production Index",
    "सेवा उत्पादन सूचकांक 2026",
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
      name: "Indian Economy",
    },
    {
      "@type": "Thing",
      name: "Index of Services Production",
    },
    {
      "@type": "Thing",
      name: "Index of Industrial Production",
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
// BREADCRUMB
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
      name: "Index of Services Production",
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

export default function ISPLayout({
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