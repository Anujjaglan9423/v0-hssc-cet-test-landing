
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET Test";

const PAGE_PATH =
  "/current-affairs/by-topic/national-honour-amendment-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "National Honour Amendment Bill 2026: Vande Mataram & MCQs";

const PAGE_DESCRIPTION =
  "Study the Prevention of Insults to National Honour (Amendment) Bill, 2026. Learn about Vande Mataram, Section 3 of the 1971 Act, penalties, key facts and bilingual MCQs for UKSSSC, UKPSC, UPSC, HSSC CET and SSC.";

const PAGE_TITLE_HI =
  "राष्ट्रीय सम्मान अपमान निवारण संशोधन विधेयक 2026";

const PAGE_DESCRIPTION_HI =
  "राष्ट्रीय सम्मान के अपमान की रोकथाम (संशोधन) विधेयक 2026 के महत्वपूर्ण तथ्य पढ़ें। वन्दे मातरम्, राष्ट्रगीत, राष्ट्रीय गान, धारा 3, दंड प्रावधान और UKSSSC, UKPSC, UPSC, HSSC CET के लिए प्रश्नोत्तर।";

// ------------------------------------------------------
// SEO METADATA
// ------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  classification:
    "Indian Polity, Current Affairs, Indian Constitution, Competitive Examination Study Material",

  keywords: [
    // Primary keywords
    "Prevention of Insults to National Honour Amendment Bill 2026",
    "National Honour Amendment Bill 2026",
    "National Honour Bill 2026",
    "Prevention of Insults to National Honour Act 1971",
    "National Honour Act 1971 amendment",
    "national honour amendment current affairs",
    "Vande Mataram Amendment Bill 2026",
    "Vande Mataram legal protection 2026",
    "Vande Mataram National Song",
    "National Song protection law India",
    "Section 3 National Honour Act",
    "Section 3 Amendment Bill 2026",
    "Indian national song law",
    "Indian national anthem law",
    "national symbols of India",
    "national symbols current affairs 2026",

    // Legislation
    "National Honour Bill provisions",
    "National Honour Bill punishment",
    "National Honour Bill penalties",
    "Vande Mataram punishment provisions",
    "national song legal protection",
    "national anthem and national song difference",
    "Jana Gana Mana and Vande Mataram",
    "Indian Parliament bills 2026",
    "important bills 2026",
    "important amendments 2026",
    "Indian polity current affairs 2026",
    "constitutional current affairs 2026",
    "parliament current affairs 2026",

    // Vande Mataram history
    "Vande Mataram history",
    "Vande Mataram composer",
    "Bankim Chandra Chatterjee",
    "Bankim Chandra Chattopadhyay",
    "Anandamath 1882",
    "Vande Mataram Swadeshi Movement",
    "Swadeshi Movement 1905",
    "national song of India history",
    "Vande Mataram 150 years",

    // UKSSSC
    "UKSSSC current affairs 2026",
    "UKSSSC polity current affairs",
    "UKSSSC Indian Constitution",
    "UKSSSC important bills 2026",
    "UKSSSC Vande Mataram questions",
    "UKSSSC Junior Assistant current affairs",
    "UKSSSC Patwari polity",
    "UKSSSC VDO polity questions",

    // UKPSC
    "UKPSC current affairs 2026",
    "UKPSC Indian polity",
    "UKPSC Constitution current affairs",
    "UKPSC important amendments",
    "UKPSC Prelims 2026 current affairs",
    "UKPSC RO ARO polity",
    "Uttarakhand PCS current affairs",
    "UKPSC national symbols of India",

    // HSSC CET
    "HSSC CET current affairs 2026",
    "HSSC CET Indian polity",
    "HSSC CET important bills",
    "HSSC CET Constitution questions",
    "Haryana CET current affairs",
    "HSSC Group C current affairs",
    "HSSC Group D polity questions",
    "HSSC CET Vande Mataram",

    // UPSC / UPPSC / PCS
    "UPSC National Honour Amendment Bill",
    "UPSC Prelims 2026 current affairs",
    "UPSC polity current affairs 2026",
    "UPSC Indian Parliament bills",
    "UPSC national symbols",
    "UPSC Vande Mataram history",
    "UPPSC current affairs 2026",
    "UPPSC PCS polity questions",
    "State PCS national honour act",

    // SSC / Railway / Banking
    "SSC current affairs 2026",
    "SSC CGL Indian polity",
    "SSC CHSL Constitution questions",
    "SSC GD national symbols",
    "RRB NTPC Indian polity",
    "Railway Group D current affairs",
    "Banking awareness current affairs",

    // Hindi keywords
    "राष्ट्रीय सम्मान संशोधन विधेयक 2026",
    "राष्ट्रीय सम्मान अपमान निवारण अधिनियम",
    "राष्ट्रीय सम्मान के अपमान की रोकथाम अधिनियम 1971",
    "राष्ट्रीय सम्मान संशोधन बिल 2026",
    "वन्दे मातरम् कानून 2026",
    "वंदे मातरम संरक्षण विधेयक",
    "राष्ट्रगीत वन्दे मातरम्",
    "राष्ट्रगान जन गण मन",
    "राष्ट्रगीत और राष्ट्रगान में अंतर",
    "वन्दे मातरम् के रचयिता",
    "बंकिम चंद्र चट्टोपाध्याय",
    "आनंदमठ 1882",
    "स्वदेशी आंदोलन 1905",
    "राष्ट्रीय सम्मान कानून धारा 3",
    "राष्ट्रीय सम्मान विधेयक की सजा",
    "भारतीय राजव्यवस्था करेंट अफेयर्स",
    "भारतीय संविधान महत्वपूर्ण प्रश्न",
    "यूकेएसएसएससी राजव्यवस्था",
    "यूकेपीएससी संविधान प्रश्न",
    "एचएसएससी सीईटी करेंट अफेयर्स",

    // AEO / WH / People Also Ask
    "what is National Honour Amendment Bill 2026",
    "what is Prevention of Insults to National Honour Act",
    "what is Section 3 of National Honour Act",
    "when was National Honour Amendment Bill 2026 passed",
    "why was National Honour Act amended",
    "what is the punishment for preventing Vande Mataram",
    "who wrote Vande Mataram",
    "when was Vande Mataram written",
    "which book contains Vande Mataram",
    "what is the difference between national anthem and national song",
    "how does the amendment protect Vande Mataram",
    "which movement popularised Vande Mataram",
    "is Vande Mataram India's national song",
    "what are important polity current affairs for UKPSC 2026",
    "which bills are important for UPSC 2026",
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
      "National Honour Amendment Bill 2026 | Vande Mataram",

    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary",

    title:
      "National Honour Amendment Bill 2026 – Notes & MCQs",

    description: PAGE_DESCRIPTION,
  },
};

// ------------------------------------------------------
// SCHEMA.ORG STRUCTURED DATA
// ------------------------------------------------------

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
      name: "Prevention of Insults to National Honour Amendment Bill 2026",
    },
    {
      "@type": "Thing",
      name: "Prevention of Insults to National Honour Act 1971",
    },
    {
      "@type": "Thing",
      name: "Vande Mataram",
    },
    {
      "@type": "Thing",
      name: "Indian National Symbols",
    },
    {
      "@type": "Thing",
      name: "Indian Parliament",
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
    "Prevention of Insults to National Honour (Amendment) Bill, 2026: Provisions, Vande Mataram and MCQs",

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
    name: "National Honour Amendment Bill 2026",
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
    "Indian Polity Study Material",
    "Legislation Study Notes",
    "Practice MCQs",
  ],

  educationalLevel: "Competitive Examination",

  educationalUse: [
    "Exam Preparation",
    "Revision",
    "Self Study",
  ],

  teaches: [
    "National Honour Amendment Bill 2026",
    "Prevention of Insults to National Honour Act 1971",
    "Indian National Anthem and National Song",
    "Vande Mataram History",
    "Indian Parliament and Legislation",
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
      name: "National Honour Amendment Bill 2026",
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

export default function NationalHonourLayout({
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
