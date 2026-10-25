import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// PAGE CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/ircc-india";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "India Leads IRCCs 2026 | Nagoya Protocol & MCQs";

const DESCRIPTION =
  "India leads global IRCC issuance under the Nagoya Protocol. Learn about 3,561 certificates, ABS, National Biodiversity Authority, CBD and MCQs in Hindi and English.";

const DESCRIPTION_HI =
  "नागोया प्रोटोकॉल के तहत IRCC जारी करने में भारत अग्रणी: 3,561 प्रमाणपत्र, ABS, राष्ट्रीय जैव विविधता प्राधिकरण, CBD, प्रमुख तथ्य और हिंदी-अंग्रेजी MCQ।";

const OFFICIAL_SOURCE =
  "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2247141&lang=1&reg=3";

const CBD_SOURCE =
  "https://absch.cbd.int/search/countries/";

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
    "Environment, Biodiversity, Nagoya Protocol, Access and Benefit-Sharing, Current Affairs, Competitive Examinations",

  keywords: [
    // PRIMARY
    "India IRCC 2026",
    "India IRCC Global Leader",
    "India IRCC Nagoya Protocol",
    "India Biodiversity Certificates 2026",
    "Internationally Recognized Certificates of Compliance",
    "Internationally Recognised Certificates of Compliance",
    "IRCC Full Form",
    "IRCC Meaning",
    "IRCC Current Affairs 2026",
    "IRCC India 3561",
    "India 3561 IRCC Certificates",
    "India Nagoya Protocol 2026",
    "IRCC Explained Hindi English",

    // HINDI
    "भारत IRCC 2026",
    "भारत जैव विविधता अनुपालन प्रमाणपत्र",
    "अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त अनुपालन प्रमाणपत्र",
    "भारत नागोया प्रोटोकॉल 2026",
    "IRCC का पूरा नाम",
    "IRCC क्या है",
    "जैव विविधता प्रमाणपत्र 2026",
    "आनुवंशिक संसाधन अनुपालन प्रमाणपत्र",
    "नागोया प्रोटोकॉल हिंदी",
    "जैव विविधता करेंट अफेयर्स 2026",
    "भारत जैव विविधता वैश्विक नेतृत्व",
    "जैव विविधता लाभ साझाकरण",

    // NAGOYA PROTOCOL
    "Nagoya Protocol 2010",
    "Nagoya Protocol Explained",
    "Nagoya Protocol Current Affairs",
    "Nagoya Protocol Access and Benefit Sharing",
    "Nagoya Protocol Genetic Resources",
    "Nagoya Protocol IRCC",
    "Nagoya Protocol CBD",
    "Nagoya Protocol UPSC",
    "Nagoya Protocol UKPSC",
    "Nagoya Protocol UKSSSC",
    "नागोया प्रोटोकॉल 2010",
    "नागोया प्रोटोकॉल उद्देश्य",
    "नागोया प्रोटोकॉल प्रश्न उत्तर",

    // ABS FRAMEWORK
    "Access and Benefit Sharing",
    "ABS Full Form Biodiversity",
    "ABS Framework India",
    "Access Benefit Sharing India",
    "Genetic Resource Benefit Sharing",
    "Fair and Equitable Benefit Sharing",
    "Biodiversity ABS Clearing House",
    "ABS Clearing House India",
    "Traditional Knowledge Benefit Sharing",
    "Prior Informed Consent",
    "Mutually Agreed Terms",
    "PIC and MAT Nagoya Protocol",
    "जैव विविधता पहुंच और लाभ साझाकरण",
    "पूर्व सूचित सहमति",
    "परस्पर सहमत शर्तें",

    // NBA
    "National Biodiversity Authority",
    "National Biodiversity Authority India",
    "NBA India 2003",
    "National Biodiversity Authority Chennai",
    "National Biodiversity Authority Functions",
    "NBA Nagoya Protocol",
    "NBA IRCC Certificates",
    "MoEFCC National Biodiversity Authority",
    "Biological Diversity Act 2002",
    "Biological Diversity Amendment Act 2023",
    "Biodiversity Management Committees",
    "State Biodiversity Boards",
    "राष्ट्रीय जैव विविधता प्राधिकरण",
    "राष्ट्रीय जैव विविधता प्राधिकरण चेन्नई",
    "जैविक विविधता अधिनियम 2002",

    // CBD
    "Convention on Biological Diversity",
    "CBD 1992",
    "Convention on Biological Diversity Rio Summit",
    "Rio Earth Summit 1992",
    "CBD Nagoya Protocol",
    "Cartagena Protocol 2000",
    "Nagoya vs Cartagena Protocol",
    "Biosafety Living Modified Organisms",
    "LMO Cartagena Protocol",
    "जैव विविधता सम्मेलन 1992",
    "रियो पृथ्वी सम्मेलन",
    "कार्टाजेना प्रोटोकॉल",

    // ENVIRONMENT
    "Biodiversity Conservation India",
    "Biopiracy Prevention",
    "Genetic Resources Conservation",
    "Traditional Knowledge Protection",
    "Sustainable Use of Biodiversity",
    "Biodiversity Governance India",
    "Environmental Agreements 2026",
    "Global Biodiversity Framework",
    "Biodiversity Current Affairs",
    "जैव विविधता संरक्षण",
    "जैव संसाधनों की चोरी",
    "पारंपरिक ज्ञान संरक्षण",

    // UKPSC
    "UKPSC IRCC 2026",
    "UKPSC Nagoya Protocol",
    "UKPSC Biodiversity Current Affairs",
    "UKPSC Environment Current Affairs 2026",
    "UKPSC National Biodiversity Authority",
    "UKPSC Biological Diversity Act",
    "UKPSC ABS Framework",
    "UKPSC Environment MCQ",
    "UKPSC Biodiversity GK",
    "UKPSC IRCC Questions",
    "UKPSC जैव विविधता 2026",

    // UKSSSC
    "UKSSSC IRCC 2026",
    "UKSSSC Nagoya Protocol",
    "UKSSSC Biodiversity Current Affairs",
    "UKSSSC Environment GK 2026",
    "UKSSSC National Biodiversity Authority",
    "UKSSSC IRCC MCQ",
    "UKSSSC Group C Environment",
    "UKSSSC Junior Assistant GK",
    "UKSSSC Biological Diversity Act",
    "UKSSSC जैव विविधता करेंट अफेयर्स",

    // UPSC
    "UPSC IRCC 2026",
    "UPSC Nagoya Protocol",
    "UPSC Environment and Ecology",
    "UPSC Access and Benefit Sharing",
    "UPSC Convention on Biological Diversity",
    "UPSC National Biodiversity Authority",
    "UPSC Biological Diversity Act",
    "UPSC Prelims Biodiversity",
    "UPSC GS Paper 3 Environment",
    "UPSC Biodiversity Current Affairs 2026",

    // SSC
    "SSC IRCC Current Affairs",
    "SSC Nagoya Protocol",
    "SSC CGL Environment GK",
    "SSC CHSL Biodiversity",
    "SSC GD Environment Questions",
    "SSC MTS General Awareness",
    "SSC National Biodiversity Authority",

    // HSSC CET
    "HSSC CET IRCC 2026",
    "HSSC CET Nagoya Protocol",
    "Haryana CET Biodiversity",
    "HSSC CET Environment Current Affairs",
    "HSSC CET Group C Environment",
    "HSSC CET Group D GK",
    "Haryana CET Biological Diversity Act",

    // UPPSC
    "UPPSC IRCC 2026",
    "UPPSC Nagoya Protocol",
    "UPPSC Biodiversity Current Affairs",
    "UPPSC National Biodiversity Authority",
    "UPPSC Biological Diversity Act",
    "UPPSC Environment MCQ 2026",
    "UPPSC CBD Nagoya Cartagena",

    // OTHER EXAMS
    "Railway NTPC Biodiversity",
    "RRB Group D Environment GK",
    "Banking Current Affairs Environment",
    "IBPS Environmental Awareness",
    "State PCS Nagoya Protocol",
    "State PSC Biodiversity Current Affairs",

    // AEO / PEOPLE ALSO ASK
    "What is IRCC",
    "What is the full form of IRCC",
    "Which country leads in issuing IRCCs",
    "How many IRCCs has India issued",
    "Which agreement established IRCC",
    "What is the Nagoya Protocol",
    "When was Nagoya Protocol adopted",
    "What is Access and Benefit Sharing",
    "What is Prior Informed Consent",
    "What are Mutually Agreed Terms",
    "What is the National Biodiversity Authority",
    "Where is National Biodiversity Authority headquarters",
    "What is the difference between Nagoya and Cartagena Protocol",
    "Why are IRCC certificates important",

    // PRACTICE
    "IRCC MCQ 2026",
    "Nagoya Protocol MCQ",
    "Biodiversity Current Affairs MCQ 2026",
    "National Biodiversity Authority MCQ",
    "IRCC Questions and Answers",
    "Environment Bilingual Study Notes",
    "Free Biodiversity Quiz 2026",
    "IRCC हिंदी MCQ",

    // BRAND
    "CET Test IRCC",
    "CET Test Environment Current Affairs",
    "CET Test Biodiversity",
    "cettest.site",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  // VERIFIED NEXT.JS GOOGLEBOT SYNTAX
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
      "India Leads IRCCs 2026 | Nagoya Protocol",

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
      "India's Global Leadership in Internationally Recognised Certificates of Compliance",

    abstract:
      "Bilingual educational notes on India's IRCC leadership under the Nagoya Protocol, Access and Benefit Sharing, Biological Diversity Act, National Biodiversity Authority and MCQs.",

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
      name: "Internationally Recognised Certificates of Compliance",
    },
    {
      "@type": "Thing",
      name: "Nagoya Protocol",
    },
    {
      "@type": "Thing",
      name: "Access and Benefit Sharing",
    },
    {
      "@type": "Thing",
      name: "Biodiversity Conservation",
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
    "India Leads Global IRCC Issuance Under the Nagoya Protocol",

  alternativeHeadline:
    "जैव विविधता अनुपालन प्रमाणपत्रों में भारत का वैश्विक नेतृत्व",

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
    "Environment and Ecology",
    "Biodiversity",
    "Nagoya Protocol",
    "International Environmental Agreements",
    "Current Affairs 2026",
  ],

  keywords: [
    "IRCC 2026",
    "Nagoya Protocol",
    "3561 Certificates",
    "Access and Benefit Sharing",
    "National Biodiversity Authority",
    "Biological Diversity Act",
  ],

  about: [
    {
      "@type": "Thing",
      name: "IRCC Under the Nagoya Protocol",
    },
    {
      "@type": "Thing",
      name: "Genetic Resource Access and Benefit Sharing",
    },
    {
      "@type": "Thing",
      name: "Biodiversity Compliance",
    },
  ],

  citation: [
    OFFICIAL_SOURCE,
    CBD_SOURCE,
  ],
};

// ======================================================
// LEARNING RESOURCE
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "India IRCC 2026 – Nagoya Protocol Notes and MCQs",

  alternateName: [
    "India's Global Leadership in IRCCs",
    "India Nagoya Protocol IRCC 2026",
    "भारत के जैव विविधता अनुपालन प्रमाणपत्र",
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
      name: "Nagoya Protocol",
    },
    {
      "@type": "Thing",
      name: "Access and Benefit Sharing",
    },
    {
      "@type": "Thing",
      name: "Convention on Biological Diversity",
    },
    {
      "@type": "Thing",
      name: "National Biodiversity Authority",
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
      name: "India IRCC 2026",
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
    articleSchema,
    learningResourceSchema,
    breadcrumbSchema,
  ],
};

// ======================================================
// NEXT.JS LAYOUT
// ======================================================

export default function IndiaIRCCLayout({
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