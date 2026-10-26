
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET Test";

const PAGE_PATH =
  "/current-affairs/by-topic/nato-withdrawal";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "US Withdrawal from NATO 2026: Article 5, 13 & MCQs";

const PAGE_DESCRIPTION =
  "Could the US leave NATO? Study the 2026 withdrawal debate, NATO Article 5 and Article 13, 32 members, headquarters and key facts. Bilingual notes and MCQs for UKSSSC, UKPSC, UPSC, HSSC CET and SSC.";

const PAGE_TITLE_HI =
  "नाटो से अमेरिका की संभावित वापसी 2026";

const PAGE_DESCRIPTION_HI =
  "क्या अमेरिका NATO छोड़ सकता है? नाटो के अनुच्छेद 5 और 13, सदस्य देशों, मुख्यालय, सामूहिक रक्षा और अमेरिकी वापसी की बहस को हिंदी-अंग्रेज़ी में समझें। प्रतियोगी परीक्षाओं के लिए नोट्स व MCQ।";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  keywords: [
    // Primary SEO
    "US withdrawal from NATO 2026",
    "USA withdrawal from NATO",
    "United States NATO withdrawal",
    "US leaving NATO",
    "Can US withdraw from NATO",
    "Will America leave NATO",
    "NATO withdrawal debate 2026",
    "NATO current affairs 2026",
    "NATO latest developments 2026",
    "NATO international relations",
    "NATO foreign policy",
    "NATO defence alliance",

    // NATO facts
    "North Atlantic Treaty Organization",
    "NATO full form",
    "NATO headquarters",
    "NATO headquarters Brussels",
    "NATO established 1949",
    "Washington Treaty 1949",
    "NATO 32 member countries",
    "NATO newest members",
    "Finland NATO 2023",
    "Sweden NATO 2024",
    "NATO formation history",
    "NATO member countries 2026",
    "NATO collective defence",
    "NATO collective security",

    // Article 5
    "NATO Article 5",
    "NATO Article 5 collective defence",
    "NATO Article 5 explained",
    "Article 5 September 11 attacks",
    "NATO Article 5 2001",
    "NATO Article 5 invocation",
    "NATO mutual defence clause",
    "NATO Article 5 UPSC",

    // Article 13
    "NATO Article 13",
    "NATO Article 13 withdrawal",
    "NATO withdrawal procedure",
    "How can a country leave NATO",
    "NATO withdrawal notice",
    "North Atlantic Treaty Article 13",
    "NATO exit rules",
    "NATO one year withdrawal notice",
    "Article 5 vs Article 13 NATO",

    // International relations
    "US Europe NATO relations",
    "transatlantic security",
    "NATO defence spending",
    "NATO European allies",
    "international organisations current affairs",
    "global security alliances",
    "military alliances current affairs",
    "international relations current affairs 2026",
    "world politics current affairs 2026",

    // UKSSSC
    "UKSSSC NATO current affairs",
    "UKSSSC international organisations",
    "UKSSSC current affairs 2026",
    "UKSSSC world organisations MCQ",
    "UKSSSC NATO headquarters",
    "UKSSSC Junior Assistant current affairs",
    "UKSSSC Patwari international GK",
    "UKSSSC VDO current affairs",

    // UKPSC
    "UKPSC NATO current affairs",
    "UKPSC international relations",
    "UKPSC international organisations",
    "UKPSC current affairs 2026",
    "UKPSC NATO Article 5",
    "UKPSC NATO Article 13",
    "UKPSC Prelims international relations",
    "UKPSC RO ARO current affairs",
    "Uttarakhand PCS international GK",

    // HSSC CET
    "HSSC CET NATO",
    "HSSC CET international organisations",
    "HSSC CET current affairs 2026",
    "HSSC CET NATO headquarters",
    "Haryana CET world GK",
    "HSSC Group C NATO questions",
    "HSSC Group D current affairs",

    // UPSC / State PCS
    "UPSC NATO current affairs 2026",
    "UPSC NATO Article 5",
    "UPSC NATO Article 13",
    "UPSC NATO withdrawal",
    "UPSC international relations",
    "UPSC Prelims NATO questions",
    "UPSC GS2 international relations",
    "UPSC global security alliances",
    "UPPSC NATO current affairs",
    "UPPSC international organisations",
    "State PCS NATO MCQ",

    // SSC / Railway / Banking
    "SSC NATO headquarters",
    "SSC CGL international organisations",
    "SSC CHSL world GK",
    "SSC GD NATO questions",
    "RRB NTPC NATO",
    "Railway Group D international organisations",
    "Banking exam NATO current affairs",

    // Hindi
    "नाटो से अमेरिका की वापसी 2026",
    "क्या अमेरिका नाटो छोड़ सकता है",
    "नाटो क्या है",
    "नाटो का पूरा नाम",
    "नाटो का मुख्यालय कहां है",
    "नाटो के सदस्य देश",
    "नाटो के 32 सदस्य देश",
    "नाटो अनुच्छेद 5",
    "नाटो अनुच्छेद 13",
    "नाटो सामूहिक रक्षा",
    "नाटो से बाहर निकलने की प्रक्रिया",
    "नाटो की स्थापना कब हुई",
    "नाटो के नवीनतम सदस्य",
    "अंतरराष्ट्रीय संगठन करेंट अफेयर्स",
    "विश्व राजनीति करेंट अफेयर्स 2026",
    "अंतरराष्ट्रीय संबंध महत्वपूर्ण प्रश्न",
    "यूकेएसएसएससी नाटो करेंट अफेयर्स",
    "यूकेपीएससी अंतरराष्ट्रीय संगठन",
    "एचएसएससी सीईटी नाटो प्रश्न",

    // AEO / WH / People Also Ask
    "what is NATO",
    "what does NATO stand for",
    "when was NATO founded",
    "where is NATO headquarters",
    "how many NATO members are there",
    "which countries joined NATO recently",
    "what is NATO Article 5",
    "what is NATO Article 13",
    "what is the difference between NATO Article 5 and 13",
    "can the United States withdraw from NATO",
    "how does a country withdraw from NATO",
    "why is the US considering leaving NATO",
    "has NATO Article 5 ever been invoked",
    "who invoked NATO Article 5 in 2001",
    "is NATO a military alliance",
    "why is NATO important for UPSC",
    "which NATO questions are important for UKPSC",
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
      "US Withdrawal from NATO? 2026 Current Affairs & MCQs",

    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary",

    title:
      "US Withdrawal from NATO 2026 | CET Test",

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
      name: "North Atlantic Treaty Organization",
    },
    {
      "@type": "Thing",
      name: "US-NATO Relations",
    },
    {
      "@type": "Thing",
      name: "North Atlantic Treaty Article 5",
    },
    {
      "@type": "Thing",
      name: "North Atlantic Treaty Article 13",
    },
    {
      "@type": "Thing",
      name: "International Relations",
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
    "US Withdrawal from NATO in 2026: Withdrawal Rules, Article 5, Article 13 and Important Questions",

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
    name: "NATO and US Withdrawal Debate",
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
    "International Relations Study Material",
    "International Organisations",
    "Practice MCQs",
  ],

  educationalLevel: "Competitive Examination",

  educationalUse: [
    "Exam Preparation",
    "Self Study",
    "Revision",
  ],

  teaches: [
    "NATO Formation and History",
    "North Atlantic Treaty",
    "NATO Article 5",
    "NATO Article 13",
    "NATO Membership",
    "US-NATO Relations",
  ],

  audience: {
    "@type": "EducationalAudience",

    educationalRole: "student",

    audienceType:
      "UKSSSC, UKPSC, UPSC, HSSC CET, SSC, UPPSC, Railway and State PCS aspirants",
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
      name: "US Withdrawal from NATO 2026",
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

export default function NATOWithdrawalLayout({
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
