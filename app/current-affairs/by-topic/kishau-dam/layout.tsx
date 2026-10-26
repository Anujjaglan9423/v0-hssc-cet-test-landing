
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET Test";

const PAGE_PATH =
  "/current-affairs/by-topic/kishau-dam";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Kishau Multipurpose Dam 2026: River, States & MCQs";

const DESCRIPTION =
  "Learn about Kishau Multipurpose Dam 2026 on the Tons River: location, six participating states, 660 MW capacity and 90% central funding. Read Hindi-English notes and MCQs for UKSSSC, UKPSC, UPSC, HSSC CET and SSC.";

const TITLE_HI =
  "किशाऊ बहुउद्देशीय बांध परियोजना 2026";

const DESCRIPTION_HI =
  "किशाऊ बहुउद्देशीय बांध परियोजना 2026 के महत्वपूर्ण तथ्य पढ़ें। टोंस नदी, हिमाचल प्रदेश-उत्तराखंड सीमा, छह राज्य, 660 मेगावाट क्षमता और 90% केंद्रीय सहायता के बारे में जानें। UKSSSC, UKPSC, UPSC और HSSC CET के लिए प्रश्नोत्तर।";

// -----------------------------------------------------
// SEO METADATA
// -----------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: TITLE,

  description: DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  keywords: [
    // Primary SEO
    "Kishau Multipurpose Dam",
    "Kishau Multipurpose Dam 2026",
    "Kishau Dam Project",
    "Kishau Dam current affairs",
    "Kishau Dam latest news",
    "Kishau Multipurpose Project",
    "Kishau hydropower project",
    "Kishau Dam agreement 2026",
    "Kishau Dam six states",
    "Kishau Dam location",
    "Kishau Dam river",
    "Kishau Dam capacity",
    "Kishau Dam funding",
    "Kishau Dam 660 MW",
    "Kishau Dam 90 percent funding",
    "Kishau Dam MCQ",
    "Kishau Dam questions answers",
    "Kishau Dam study notes",

    // Geography
    "Tons River Dam",
    "Tons River Yamuna tributary",
    "Upper Yamuna Basin",
    "Upper Yamuna River Basin projects",
    "Himachal Pradesh Uttarakhand Dam",
    "Yamuna Basin water projects",
    "Indian multipurpose dam projects",
    "hydropower projects in India",
    "water resource current affairs",
    "important dams of India",
    "dams and rivers current affairs",

    // UKSSSC
    "Kishau Dam UKSSSC",
    "Kishau Multipurpose Dam UKSSSC",
    "UKSSSC current affairs 2026",
    "UKSSSC geography current affairs",
    "UKSSSC important dams",
    "UKSSSC dam river questions",
    "UKSSSC Junior Assistant current affairs",
    "UKSSSC Patwari geography",
    "UKSSSC VDO current affairs",

    // UKPSC
    "Kishau Dam UKPSC",
    "Kishau Multipurpose Project UKPSC",
    "UKPSC current affairs 2026",
    "UKPSC Uttarakhand geography",
    "UKPSC river valley projects",
    "UKPSC important dams",
    "UKPSC Prelims current affairs",
    "UKPSC RO ARO current affairs",
    "Uttarakhand PCS geography",

    // HSSC CET
    "Kishau Dam HSSC CET",
    "Kishau Multipurpose Dam Haryana",
    "HSSC CET current affairs 2026",
    "HSSC CET geography questions",
    "Haryana CET important dams",
    "HSSC Group C current affairs",
    "HSSC Group D current affairs",
    "Haryana water sharing projects",

    // UPSC / UPPSC / State PCS
    "Kishau Dam UPSC",
    "Kishau Multipurpose Dam UPSC Prelims",
    "UPSC river valley projects",
    "UPSC hydropower projects",
    "UPSC environment current affairs",
    "UPSC geography dams",
    "UPPSC Kishau Dam",
    "UPPSC PCS geography",
    "State PCS important dams",

    // SSC / Railway
    "Kishau Dam SSC",
    "SSC CGL dams and rivers",
    "SSC CHSL geography",
    "SSC GD important dams",
    "RRB NTPC dams and rivers",
    "Railway Group D geography",
    "important dams and rivers MCQ",

    // Hindi SEO
    "किशाऊ बहुउद्देशीय बांध",
    "किशाऊ बांध परियोजना 2026",
    "किशाऊ बांध किस नदी पर है",
    "किशाऊ बांध कहां स्थित है",
    "किशाऊ बांध किस राज्य में है",
    "किशाऊ बांध की क्षमता",
    "किशाऊ बांध के लाभ",
    "किशाऊ बांध समझौता 2026",
    "किशाऊ बांध छह राज्य",
    "किशाऊ बांध टोंस नदी",
    "किशाऊ बांध 660 मेगावाट",
    "किशाऊ परियोजना केंद्र सरकार",
    "किशाऊ बांध महत्वपूर्ण प्रश्न",
    "उत्तराखंड के प्रमुख बांध",
    "हिमाचल प्रदेश के प्रमुख बांध",
    "भारत के प्रमुख बांध और नदियाँ",
    "यूकेएसएसएससी करेंट अफेयर्स 2026",
    "यूकेपीएससी करेंट अफेयर्स 2026",
    "एचएसएससी सीईटी करेंट अफेयर्स",

    // AEO / WH / People Also Ask
    "what is Kishau Multipurpose Dam",
    "where is Kishau Dam located",
    "which river is Kishau Dam built on",
    "which states benefit from Kishau Dam",
    "how many states are involved in Kishau Dam",
    "what is the capacity of Kishau Dam",
    "who funds Kishau Multipurpose Dam",
    "when was Kishau Dam agreement signed",
    "why is Kishau Dam important",
    "how will Kishau Dam benefit Delhi",
    "is Kishau Dam a national project",
    "what is the purpose of Kishau Dam",
    "how is Kishau Dam related to Yamuna River",
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
      "Kishau Multipurpose Dam 2026 | Complete Notes & MCQs",

    description: DESCRIPTION,
  },

  twitter: {
    card: "summary",

    title:
      "Kishau Multipurpose Dam 2026 – River, States & MCQs",

    description: DESCRIPTION,
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

  name: TITLE,

  alternateName: TITLE_HI,

  description: DESCRIPTION,

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
      name: "Kishau Multipurpose Dam Project",
    },
    {
      "@type": "Thing",
      name: "Tons River",
    },
    {
      "@type": "Thing",
      name: "Upper Yamuna Basin",
    },
    {
      "@type": "Thing",
      name: "Indian Hydropower Projects",
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
    "Kishau Multipurpose Dam Project 2026: Location, River, States and Funding",

  alternativeHeadline: TITLE_HI,

  description: DESCRIPTION,

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

  about: {
    "@type": "Thing",
    name: "Kishau Multipurpose Project",
  },

  isAccessibleForFree: true,
};

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name: TITLE,

  alternateName: TITLE_HI,

  description: DESCRIPTION_HI,

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Current Affairs Notes",
    "Geography Study Material",
    "Infrastructure Study Notes",
    "Practice MCQs",
  ],

  educationalLevel: "Competitive Examination",

  educationalUse: [
    "Exam Preparation",
    "Revision",
    "Self Study",
  ],

  teaches: [
    "Kishau Multipurpose Dam",
    "Tons River and Yamuna Basin",
    "Hydropower Projects",
    "Indian River Valley Projects",
    "Water Resource Management",
  ],

  audience: {
    "@type": "EducationalAudience",

    educationalRole: "student",

    audienceType:
      "UKSSSC, UKPSC, UPSC, HSSC CET, SSC, UPPSC and State PCS aspirants",
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
      name: "Kishau Multipurpose Dam",
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

export default function KishauDamLayout({
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
