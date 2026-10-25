import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/important-days-themes-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Important Days & Themes 2026 | Hindi & English";

const PAGE_DESCRIPTION =
  "Important Days and Themes 2026 from January to September in Hindi and English. Explore dates, significance, books and authors, and MCQs for UKPSC, UKSSSC, SSC and UPSC.";

const PAGE_DESCRIPTION_HI =
  "महत्वपूर्ण दिवस एवं थीम 2026: जनवरी से सितंबर तक के राष्ट्रीय और अंतरराष्ट्रीय दिवस, तिथियाँ, महत्व, पुस्तकें, लेखक और MCQ। UKPSC, UKSSSC, SSC, UPSC एवं अन्य परीक्षाओं के लिए।";

// -------------------------------------------------------
// SEO METADATA
// -------------------------------------------------------

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
    "Current Affairs, General Awareness, General Knowledge, Competitive Exam Preparation",

  // Keyword variations help document search intent.
  // Google does not use the meta keywords tag for ranking.
  keywords: [
    // PRIMARY KEYWORDS
    "Important Days and Themes 2026",
    "Important Days 2026",
    "Important Days 2026 with Themes",
    "Important Days and Dates 2026",
    "Important Days Current Affairs 2026",
    "Important Days GK 2026",
    "Important Days 2026 Hindi English",
    "National and International Days 2026",
    "International Days and Themes 2026",
    "National Days and Themes 2026",
    "Important Days 2026 for Competitive Exams",

    // HINDI KEYWORDS
    "महत्वपूर्ण दिवस 2026",
    "महत्वपूर्ण दिवस एवं थीम 2026",
    "महत्वपूर्ण दिवस और तिथियां 2026",
    "राष्ट्रीय एवं अंतरराष्ट्रीय दिवस 2026",
    "राष्ट्रीय और अंतरराष्ट्रीय दिवस 2026",
    "महत्वपूर्ण दिवस 2026 हिंदी में",
    "2026 के महत्वपूर्ण दिवस",
    "2026 के सभी महत्वपूर्ण दिवस",
    "महत्वपूर्ण दिवस और उनके विषय 2026",
    "महत्वपूर्ण दिवस एवं थीम हिंदी",
    "सामान्य ज्ञान महत्वपूर्ण दिवस 2026",
    "प्रतियोगी परीक्षा महत्वपूर्ण दिवस 2026",

    // MONTH-WISE SEARCHES
    "January Important Days 2026",
    "February Important Days 2026",
    "March Important Days 2026",
    "April Important Days 2026",
    "May Important Days 2026",
    "June Important Days 2026",
    "July Important Days 2026",
    "August Important Days 2026",
    "September Important Days 2026",
    "Month Wise Important Days 2026",
    "Important Days January to September 2026",
    "2026 Important Days Calendar",

    // MONTH-WISE HINDI
    "जनवरी 2026 महत्वपूर्ण दिवस",
    "फरवरी 2026 महत्वपूर्ण दिवस",
    "मार्च 2026 महत्वपूर्ण दिवस",
    "अप्रैल 2026 महत्वपूर्ण दिवस",
    "मई 2026 महत्वपूर्ण दिवस",
    "जून 2026 महत्वपूर्ण दिवस",
    "जुलाई 2026 महत्वपूर्ण दिवस",
    "अगस्त 2026 महत्वपूर्ण दिवस",
    "सितंबर 2026 महत्वपूर्ण दिवस",
    "माहवार महत्वपूर्ण दिवस 2026",

    // THEME-BASED SEARCHES
    "World Environment Day Theme 2026",
    "World Health Day Theme 2026",
    "World Water Day Theme 2026",
    "International Women's Day Theme 2026",
    "World Wetlands Day Theme 2026",
    "National Science Day Theme 2026",
    "International Yoga Day Theme 2026",
    "World Wildlife Day Theme 2026",
    "Earth Day Theme 2026",
    "World Cancer Day Theme 2026",

    // BOOKS AND AUTHORS
    "Books and Authors 2026",
    "Important Books and Authors 2026",
    "Books and Authors Current Affairs 2026",
    "Books and Authors GK 2026",
    "Famous Books and Writers 2026",
    "Books and Authors 2026 MCQ",
    "पुस्तकें और लेखक 2026",
    "प्रमुख पुस्तकें एवं लेखक 2026",
    "पुस्तक और लेखक सामान्य ज्ञान 2026",

    // UKPSC
    "UKPSC Important Days 2026",
    "UKPSC Current Affairs 2026",
    "UKPSC Important Days and Themes",
    "UKPSC Important Days GK",
    "UKPSC General Studies 2026",
    "UKPSC Books and Authors 2026",
    "UKPSC Important Days Questions",
    "UKPSC Exam Preparation 2026",
    "UKPSC महत्वपूर्ण दिवस 2026",

    // UKSSSC
    "UKSSSC Important Days 2026",
    "UKSSSC Current Affairs 2026",
    "UKSSSC Important Days and Themes",
    "UKSSSC Important Days GK",
    "UKSSSC Books and Authors",
    "UKSSSC Important Days MCQ",
    "UKSSSC Junior Assistant Current Affairs",
    "UKSSSC Group C GK",
    "UKSSSC महत्वपूर्ण दिवस 2026",

    // UPSC
    "UPSC Important Days 2026",
    "UPSC Current Affairs 2026",
    "UPSC Prelims Important Days",
    "UPSC General Studies Important Days",
    "UPSC Books and Authors 2026",

    // SSC
    "SSC Important Days 2026",
    "SSC CGL Important Days",
    "SSC CHSL Important Days",
    "SSC GD Important Days",
    "SSC MTS General Awareness",
    "SSC Important Days and Themes",
    "SSC Books and Authors 2026",

    // HSSC CET / HARYANA
    "HSSC CET Important Days 2026",
    "Haryana CET Important Days",
    "HSSC CET Current Affairs 2026",
    "Haryana CET GK 2026",
    "HSSC CET Group C GK",
    "HSSC CET Group D GK",
    "हरियाणा CET महत्वपूर्ण दिवस 2026",

    // OTHER EXAMS
    "UPPSC Important Days 2026",
    "UP Police Important Days",
    "Railway NTPC Important Days 2026",
    "RRB Group D Important Days",
    "Banking Exams Important Days 2026",
    "IBPS Important Days GK",
    "State PCS Important Days 2026",
    "Teaching Exams Important Days",
    "CTET General Awareness Important Days",

    // QUESTION-BASED / AEO KEYWORDS
    "What are the important days in 2026",
    "What are the themes of important days in 2026",
    "Which important days are asked in competitive exams",
    "When is World Hindi Day celebrated",
    "When is National Science Day celebrated",
    "When is World Environment Day celebrated",
    "When is International Yoga Day celebrated",
    "What is the difference between Hindi Diwas and World Hindi Day",
    "Why is World Wetlands Day celebrated",
    "Who are the authors of important books in 2026",

    // PRACTICE / STUDY INTENT
    "Important Days 2026 MCQ",
    "Important Days Quiz 2026",
    "Important Days Questions and Answers",
    "Important Days Practice Questions",
    "Important Days Revision Notes 2026",
    "Important Days Bilingual Notes",
    "Free Important Days GK Test",
    "Important Days Exam Preparation",

    // BRAND
    "CET Test Current Affairs",
    "CET Test Important Days",
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
      "Important Days & Themes 2026 | Dates, Themes & MCQs",

    description: PAGE_DESCRIPTION,

    locale: "en_IN",

    alternateLocale: ["hi_IN"],

    countryName: "India",
  },

  twitter: {
    card: "summary",

    title:
      "Important Days & Themes 2026 | CET Test",

    description: PAGE_DESCRIPTION,
  },

  other: {
    "content-language": "en-IN, hi-IN",

    "geo.region": "IN",

    "subject":
      "Important Days and Themes 2026, Current Affairs, General Knowledge",

    "educational-level":
      "Competitive Examination Preparation",

    "abstract":
      "Bilingual educational reference covering important national and international days from January to September 2026, their themes, historical significance, books and authors, and practice MCQs.",

    "description:hi": PAGE_DESCRIPTION_HI,
  },
};

// -------------------------------------------------------
// STRUCTURED DATA - JSON-LD
// -------------------------------------------------------

const organizationSchema = {
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: "CET Test",

  url: SITE_URL,

  description:
    "Educational platform offering current affairs, general knowledge, study materials and mock tests for competitive examination preparation.",
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
    "@id": `${PAGE_URL}#learning-resource`,
  },

  about: [
    {
      "@type": "Thing",
      name: "Important Days and Themes 2026",
    },
    {
      "@type": "Thing",
      name: "National and International Observances",
    },
    {
      "@type": "Thing",
      name: "Books and Authors 2026",
    },
    {
      "@type": "Thing",
      name: "Competitive Examination Current Affairs",
    },
  ],

  keywords:
    "Important Days 2026, Themes 2026, National Days, International Days, Books and Authors, UKSSSC, UKPSC, UPSC, SSC, HSSC CET",
};

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "Important Days & Themes 2026 – Bilingual Study Notes",

  alternateName: [
    "Important Days and Dates 2026",
    "National and International Days 2026",
    "महत्वपूर्ण दिवस एवं थीम 2026",
    "राष्ट्रीय एवं अंतरराष्ट्रीय दिवस 2026",
  ],

  description: PAGE_DESCRIPTION,

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

  typicalAgeRange: "16-",

  audience: {
    "@type": "EducationalAudience",

    educationalRole: "student",

    audienceType:
      "UKSSSC, UKPSC, UPSC, SSC, HSSC CET, UPPSC, Railway, Banking and State PCS aspirants",
  },

  about: [
    {
      "@type": "Thing",
      name: "Important Days 2026",
    },
    {
      "@type": "Thing",
      name: "Important Days and Themes",
    },
    {
      "@type": "Thing",
      name: "National and International Days",
    },
    {
      "@type": "Thing",
      name: "Books and Authors",
    },
    {
      "@type": "Thing",
      name: "Current Affairs",
    },
  ],

  hasPart: [
    {
      "@type": "CreativeWork",
      name: "Month-wise Important Days 2026",
      url: `${PAGE_URL}#topic-index`,
    },
    {
      "@type": "CreativeWork",
      name: "Books and Authors 2026",
      url: `${PAGE_URL}#books-authors`,
    },
    {
      "@type": "CreativeWork",
      name: "Important Days Practice MCQs",
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

      name: "Important Days & Themes 2026",

      item: PAGE_URL,
    },
  ],
};

// The page contains these month sections.
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
];

const monthListSchema = {
  "@type": "ItemList",

  "@id": `${PAGE_URL}#months`,

  name:
    "Important Days and Themes 2026 – Month-wise List",

  description:
    "Month-wise reference to important national and international days from January to September 2026.",

  numberOfItems: monthNames.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement: monthNames.map((month, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: `${month} 2026 Important Days and Themes`,

    url: `${PAGE_URL}#${month.toLowerCase()}`,
  })),
};

const booksSchema = {
  "@type": "ItemList",

  "@id": `${PAGE_URL}#books`,

  name: "Important Books and Authors",

  description:
    "Books and authors referenced in the Important Days and Themes study material.",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Book",
        name: "Karuna: The Power of Compassion",
        author: {
          "@type": "Person",
          name: "Kailash Satyarthi",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Book",
        name: "Why Bharat Matters",
        author: {
          "@type": "Person",
          name: "S. Jaishankar",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Book",
        name: "Why the Constitution Matters: Selected Speeches",
        author: {
          "@type": "Person",
          name: "D. Y. Chandrachud",
        },
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    webpageSchema,
    learningResourceSchema,
    breadcrumbSchema,
    monthListSchema,
    booksSchema,
  ],
};

// -------------------------------------------------------
// PAGE LAYOUT
// -------------------------------------------------------

export default function ImportantDaysThemesLayout({
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