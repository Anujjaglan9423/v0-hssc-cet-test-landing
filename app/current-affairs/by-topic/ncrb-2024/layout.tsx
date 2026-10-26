
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET Test";

const PAGE_PATH =
  "/current-affairs/by-topic/ncrb-2024";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "NCRB Report 2024: Crime in India, ADSI & MCQs | CET Test";

const PAGE_DESCRIPTION =
  "Study NCRB Crime in India and ADSI Report 2024, released in 2026. Explore cybercrime, crimes against women, SC/ST cases and suicide statistics with bilingual notes and MCQs for UPSC, UKPSC, UKSSSC, HSSC CET and SSC.";

const PAGE_TITLE_HI =
  "एनसीआरबी रिपोर्ट 2024: भारत में अपराध और ADSI";

const PAGE_DESCRIPTION_HI =
  "NCRB की भारत में अपराध रिपोर्ट 2024 और आकस्मिक मृत्यु एवं आत्महत्या रिपोर्ट (ADSI) 2024 के प्रमुख आँकड़े पढ़ें। साइबर अपराध, महिला सुरक्षा, SC/ST अपराध और आत्महत्या संबंधी तथ्य हिंदी-अंग्रेज़ी में जानें।";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  keywords: [
    // Primary keywords
    "NCRB Report 2024",
    "NCRB Report 2026",
    "NCRB Crime in India 2024",
    "NCRB Crime in India Report",
    "NCRB latest report",
    "latest NCRB data 2024",
    "NCRB data released 2026",
    "National Crime Records Bureau report",
    "Crime in India 2024",
    "Crime in India Report 2024",
    "Crime in India Report 2026",
    "ADSI Report 2024",
    "ADSI 2024",
    "Accidental Deaths and Suicides in India 2024",
    "NCRB 2024 key findings",
    "NCRB 2024 statistics",
    "NCRB 2024 current affairs",
    "NCRB Report 2024 MCQ",
    "NCRB report questions and answers",

    // Crime statistics
    "India crime statistics 2024",
    "India crime rate 2024",
    "NCRB overall crime rate",
    "NCRB cognisable crimes",
    "NCRB registered crimes 2024",
    "NCRB crime trends",
    "Indian crime data",
    "India crime statistics current affairs",
    "crime and governance current affairs",

    // Cybercrime
    "NCRB cybercrime 2024",
    "cybercrime cases India 2024",
    "cybercrime statistics India",
    "cybercrime rise 2024",
    "cyber fraud India 2024",
    "NCRB cybercrime 101928",
    "cybercrime current affairs 2026",
    "digital crime India",
    "online financial fraud statistics",

    // Crime against women
    "NCRB crimes against women 2024",
    "crime against women India 2024",
    "women safety statistics India",
    "domestic violence NCRB data",
    "cruelty by husband or relatives",
    "NCRB women crime rate",
    "women crime statistics 2024",

    // SC/ST
    "NCRB crimes against Scheduled Castes",
    "NCRB crimes against Scheduled Tribes",
    "SC ST crime statistics 2024",
    "atrocities against SC ST",
    "NCRB SC ST data",
    "crime against vulnerable groups India",

    // ADSI / suicides
    "ADSI suicide statistics 2024",
    "suicide rate India 2024",
    "NCRB suicides India 2024",
    "ADSI 170746",
    "farmer suicides India 2024",
    "agricultural labourer suicides",
    "farm sector suicides 2024",
    "daily wage worker suicides",
    "accidental deaths India 2024",
    "suicide statistics current affairs",

    // UPSC
    "NCRB Report 2024 UPSC",
    "NCRB data UPSC Prelims",
    "UPSC current affairs NCRB",
    "UPSC GS2 governance",
    "UPSC GS3 internal security",
    "UPSC cybercrime current affairs",
    "UPSC social issues current affairs",
    "UPSC crime statistics",
    "UPSC NCRB MCQ",

    // UKPSC
    "NCRB Report 2024 UKPSC",
    "UKPSC NCRB current affairs",
    "UKPSC current affairs 2026",
    "UKPSC social issues",
    "UKPSC cybercrime MCQ",
    "UKPSC Prelims NCRB data",
    "UKPSC RO ARO current affairs",
    "Uttarakhand PCS NCRB report",

    // UKSSSC
    "NCRB Report UKSSSC",
    "UKSSSC NCRB current affairs",
    "UKSSSC current affairs 2026",
    "UKSSSC crime data",
    "UKSSSC cybercrime current affairs",
    "UKSSSC Junior Assistant current affairs",
    "UKSSSC Patwari current affairs",
    "UKSSSC VDO current affairs",

    // HSSC CET
    "NCRB Report HSSC CET",
    "HSSC CET current affairs 2026",
    "HSSC CET national reports",
    "HSSC CET cybercrime",
    "Haryana CET NCRB",
    "HSSC Group C current affairs",
    "HSSC Group D current affairs",

    // SSC / Railway / Banking
    "NCRB Report SSC",
    "SSC CGL current affairs 2026",
    "SSC CHSL NCRB",
    "SSC GD general awareness",
    "RRB NTPC NCRB report",
    "Railway Group D current affairs",
    "banking current affairs cybercrime",
    "IBPS NCRB current affairs",

    // UPPSC / State PCS
    "UPPSC NCRB report 2024",
    "UPPSC current affairs 2026",
    "State PCS NCRB data",
    "PCS crime statistics",
    "State PSC national reports",

    // Hindi
    "एनसीआरबी रिपोर्ट 2024",
    "एनसीआरबी रिपोर्ट 2026",
    "भारत में अपराध रिपोर्ट 2024",
    "राष्ट्रीय अपराध रिकॉर्ड ब्यूरो",
    "राष्ट्रीय अपराध रिकॉर्ड ब्यूरो रिपोर्ट",
    "भारत में अपराध के आंकड़े 2024",
    "भारत में अपराध दर 2024",
    "भारत में साइबर अपराध 2024",
    "महिलाओं के विरुद्ध अपराध 2024",
    "अनुसूचित जाति के विरुद्ध अपराध",
    "अनुसूचित जनजाति के विरुद्ध अपराध",
    "भारत में आत्महत्या के आंकड़े",
    "किसानों की आत्महत्या 2024",
    "कृषि मजदूरों की आत्महत्या",
    "आकस्मिक मृत्यु एवं आत्महत्या रिपोर्ट",
    "एडीएसआई रिपोर्ट 2024",
    "एनसीआरबी महत्वपूर्ण प्रश्न",
    "एनसीआरबी रिपोर्ट MCQ",
    "यूपीएससी करेंट अफेयर्स 2026",
    "यूकेपीएससी करेंट अफेयर्स",
    "यूकेएसएसएससी करेंट अफेयर्स",
    "एचएसएससी सीईटी करेंट अफेयर्स",

    // AEO / WH / People Also Ask
    "what is NCRB",
    "what is the full form of NCRB",
    "what is NCRB Report 2024",
    "when was NCRB Report 2024 released",
    "what is Crime in India 2024 report",
    "what is ADSI report",
    "what is the full form of ADSI",
    "who publishes Crime in India report",
    "which ministry does NCRB work under",
    "how many cybercrime cases were registered in 2024",
    "what was India's crime rate in 2024",
    "what are the key findings of NCRB 2024",
    "how many suicides were reported in India in 2024",
    "what is the difference between NCRB and ADSI",
    "why is NCRB important for UPSC",
    "which NCRB statistics are important for UKPSC",
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
      "NCRB Report 2024: Crime in India & ADSI Statistics",

    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary",

    title:
      "NCRB Crime in India & ADSI 2024 | CET Test",

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
      name: "National Crime Records Bureau",
    },
    {
      "@type": "Thing",
      name: "Crime in India Report 2024",
    },
    {
      "@type": "Thing",
      name: "Accidental Deaths and Suicides in India 2024",
    },
    {
      "@type": "Thing",
      name: "Cybercrime in India",
    },
    {
      "@type": "Thing",
      name: "Crime Against Women",
    },
    {
      "@type": "Thing",
      name: "Indian Crime Statistics",
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
    "NCRB Crime in India and ADSI Report 2024: Key Findings, Statistics and MCQs",

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
    name: "NCRB Crime in India Report 2024",
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
    "Crime Statistics Study Material",
    "Practice MCQs",
  ],

  educationalLevel: "Competitive Examination",

  educationalUse: [
    "Exam Preparation",
    "Revision",
    "Self Study",
  ],

  teaches: [
    "National Crime Records Bureau",
    "Crime in India Report 2024",
    "ADSI Report 2024",
    "Cybercrime Statistics",
    "Crimes Against Women",
    "SC/ST Crime Statistics",
    "Suicide Statistics",
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
      name: "NCRB Report 2024",
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

export default function NCRB2024Layout({
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
