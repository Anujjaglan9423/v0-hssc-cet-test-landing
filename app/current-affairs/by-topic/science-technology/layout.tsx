
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH = "/current-affairs/by-topic/science-technology";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const SITE_NAME = "CET Test";

const PAGE_TITLE =
  "Science & Technology Current Affairs 2026 | MCQs & Notes";

const PAGE_DESCRIPTION =
  "Study 18 Science and Technology current affairs topics for 2026 in Hindi and English. Explore space, AI, health, defence, environment and technology with MCQs for UKSSSC, UKPSC, HSSC CET, UPSC and SSC.";

const PAGE_TITLE_HI =
  "विज्ञान एवं प्रौद्योगिकी करेंट अफेयर्स 2026";

const PAGE_DESCRIPTION_HI =
  "विज्ञान एवं प्रौद्योगिकी करेंट अफेयर्स 2026 के 18 महत्वपूर्ण विषय हिंदी और अंग्रेज़ी में पढ़ें। अंतरिक्ष, एआई, रक्षा, स्वास्थ्य, पर्यावरण और तकनीक के नोट्स व MCQ का अभ्यास करें।";

// The following topics are taken from the uploaded page.
// They currently open through client-side state.
const TOPICS = [
  {
    id: "truenat-hpv",
    title: "Truenat HPV-HR Plus",
    category: "Health Technology",
  },
  {
    id: "bgp-hijacking",
    title: "BGP Hijacking and Telegram",
    category: "Cybersecurity",
  },
  {
    id: "varya-ai",
    title: "Varya AI Model",
    category: "Artificial Intelligence",
  },
  {
    id: "project-nimbus",
    title: "Project Nimbus",
    category: "Technology",
  },
  {
    id: "biochar",
    title: "Biochar",
    category: "Environment",
  },
  {
    id: "medical-cyclotron",
    title: "High-Energy Medical Cyclotron Project",
    category: "Medical Science",
  },
  {
    id: "mission-aagaman",
    title: "Mission Aagaman",
    category: "Science and Technology",
  },
  {
    id: "green-urea",
    title: "Green Urea",
    category: "Agricultural Technology",
  },
  {
    id: "i2sea-cable",
    title: "I-2SEA Submarine Cable",
    category: "Telecommunications",
  },
  {
    id: "gagan",
    title: "GAGAN",
    category: "Satellite Navigation",
  },
  {
    id: "earendil-1",
    title: "Eärendil-1 Satellite Mission",
    category: "Space Technology",
  },
  {
    id: "praxis-mission",
    title: "PRAXIS Mission",
    category: "Space Science",
  },
  {
    id: "qdenga-vaccine",
    title: "QDENGA Dengue Vaccine",
    category: "Health and Biotechnology",
  },
  {
    id: "cafe-3",
    title: "CAFE-III Norms",
    category: "Environment and Automobile Technology",
  },
  {
    id: "moon-base",
    title: "NASA Moon Base Programme",
    category: "Space Exploration",
  },
  {
    id: "mission-mitra",
    title: "Mission MITRA",
    category: "Science and Technology",
  },
  {
    id: "smile-mission",
    title: "SMILE Mission",
    category: "Science and Technology",
  },
  {
    id: "sfdr-tech",
    title: "Solid Fuel Ducted Ramjet Technology",
    category: "Defence Technology",
  },
] as const;

// -------------------------------------------------------
// SEO METADATA
// -------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  classification:
    "Science and Technology, Current Affairs, Competitive Examination Study Material",

  keywords: [
    // Primary SEO
    "science and technology current affairs 2026",
    "science technology current affairs",
    "science and technology 2026",
    "science current affairs 2026",
    "technology current affairs 2026",
    "latest science and technology news 2026",
    "important science and technology topics 2026",
    "science and technology notes 2026",
    "science and technology MCQ 2026",
    "science and technology questions answers",
    "science and technology current affairs Hindi",
    "science and technology current affairs English",
    "science technology bilingual notes",
    "science and technology one liner questions",
    "science current affairs quiz",
    "science technology study material",
    "science technology general knowledge",

    // UKSSSC
    "UKSSSC science current affairs 2026",
    "UKSSSC science and technology",
    "UKSSSC technology current affairs",
    "UKSSSC science notes",
    "UKSSSC science MCQ",
    "UKSSSC Junior Assistant science",
    "UKSSSC Patwari science current affairs",
    "UKSSSC VDO science questions",
    "UKSSSC competitive exam science",

    // UKPSC
    "UKPSC science and technology 2026",
    "UKPSC science current affairs",
    "UKPSC technology current affairs",
    "UKPSC prelims science and technology",
    "UKPSC science MCQ",
    "UKPSC general science notes",
    "Uttarakhand PCS science current affairs",
    "Uttarakhand government exam science",
    "UKPSC RO ARO science questions",

    // HSSC CET
    "HSSC CET science current affairs 2026",
    "HSSC CET science and technology",
    "HSSC CET general science",
    "Haryana CET science questions",
    "Haryana CET technology current affairs",
    "HSSC Group C science MCQ",
    "HSSC Group D science notes",
    "HSSC CET 2026 science preparation",

    // UPSC and State PCS
    "UPSC science and technology 2026",
    "UPSC Prelims science technology",
    "UPSC science and technology notes",
    "UPSC current affairs science 2026",
    "UPSC space technology current affairs",
    "UPSC biotechnology current affairs",
    "UPSC defence technology current affairs",
    "UPPSC science and technology",
    "State PCS science current affairs",
    "civil services science current affairs",

    // SSC, Railway and Banking
    "SSC science current affairs 2026",
    "SSC CGL general science",
    "SSC CHSL science questions",
    "SSC GD science MCQ",
    "RRB NTPC science current affairs",
    "Railway Group D general science",
    "banking science current affairs",
    "competitive exams science 2026",

    // Science topics
    "artificial intelligence current affairs 2026",
    "AI current affairs for UPSC",
    "space technology current affairs",
    "ISRO current affairs 2026",
    "NASA current affairs 2026",
    "defence technology current affairs",
    "cybersecurity current affairs",
    "biotechnology current affairs",
    "medical science current affairs",
    "environmental technology 2026",
    "green technology current affairs",
    "satellite navigation current affairs",

    // Page topics
    "Truenat HPV HR Plus",
    "HPV test India",
    "BGP hijacking",
    "Border Gateway Protocol",
    "Varya AI Model",
    "Project Nimbus",
    "Biochar",
    "High Energy Medical Cyclotron",
    "Mission Aagaman",
    "Green Urea",
    "I-2SEA Submarine Cable",
    "GAGAN navigation system",
    "Eärendil-1 satellite",
    "PRAXIS NASA Mission",
    "QDENGA dengue vaccine",
    "CAFE III norms",
    "NASA Moon Base",
    "Mission MITRA",
    "SMILE Mission",
    "Solid Fuel Ducted Ramjet",
    "SFDR technology",

    // Hindi
    "विज्ञान और प्रौद्योगिकी करेंट अफेयर्स 2026",
    "विज्ञान एवं प्रौद्योगिकी 2026",
    "साइंस एंड टेक्नोलॉजी करेंट अफेयर्स",
    "विज्ञान करेंट अफेयर्स",
    "विज्ञान और तकनीक के महत्वपूर्ण प्रश्न",
    "सामान्य विज्ञान प्रश्न उत्तर",
    "विज्ञान और प्रौद्योगिकी नोट्स",
    "विज्ञान और तकनीक MCQ",
    "अंतरिक्ष विज्ञान करेंट अफेयर्स",
    "कृत्रिम बुद्धिमत्ता करेंट अफेयर्स",
    "रक्षा प्रौद्योगिकी करेंट अफेयर्स",
    "यूकेएसएसएससी विज्ञान करेंट अफेयर्स",
    "यूकेपीएससी विज्ञान करेंट अफेयर्स",
    "एचएसएससी सीईटी सामान्य विज्ञान",
    "यूपीएससी विज्ञान और प्रौद्योगिकी",
    "प्रतियोगी परीक्षा विज्ञान प्रश्न",

    // AEO / WH searches
    "what are important science technology current affairs 2026",
    "which science topics are important for UPSC 2026",
    "what is Truenat HPV HR Plus",
    "what is BGP hijacking",
    "how does BGP hijacking work",
    "what is biochar",
    "what is GAGAN navigation system",
    "how does GAGAN work",
    "what is solid fuel ducted ramjet",
    "what is SFDR technology",
    "what are CAFE III norms",
    "what is QDENGA vaccine",
    "which science topics are important for UKPSC",
    "how to prepare science current affairs for UKSSSC",
    "where to study science current affairs in Hindi",
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
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: SITE_NAME,

    title:
      "Science & Technology Current Affairs 2026 | CET Test",

    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary",

    title:
      "Science and Technology Current Affairs 2026",

    description: PAGE_DESCRIPTION,
  },

  other: {
    "content-language": "en-IN, hi-IN",

    "target-audience":
      "UKSSSC, UKPSC, HSSC CET, UPSC, SSC, UPPSC, Railway, Banking and State PCS Aspirants",

    subject:
      "Science and Technology Current Affairs 2026",

    "educational-level":
      "Competitive Examination Preparation",
  },
};

// -------------------------------------------------------
// STRUCTURED DATA
// -------------------------------------------------------

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
  "@type": "CollectionPage",

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
      name: "Science and Technology Current Affairs 2026",
    },
    {
      "@type": "Thing",
      name: "Space Science and Satellite Technology",
    },
    {
      "@type": "Thing",
      name: "Artificial Intelligence and Cybersecurity",
    },
    {
      "@type": "Thing",
      name: "Medical Science and Biotechnology",
    },
    {
      "@type": "Thing",
      name: "Defence and Environmental Technology",
    },
  ],

  mainEntity: {
    "@id": `${PAGE_URL}#learning-resource`,
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
    "Science and Technology Study Material",
    "Practice MCQs",
    "Exam Preparation Resource",
  ],

  educationalUse: [
    "Self Study",
    "Exam Preparation",
    "Revision",
    "Practice",
  ],

  educationalLevel: [
    "Competitive Examination",
    "General Studies",
  ],

  teaches: [
    "Science and Technology Current Affairs",
    "Space Technology",
    "Artificial Intelligence",
    "Cybersecurity",
    "Biotechnology",
    "Defence Technology",
    "Environmental Technology",
  ],

  audience: {
    "@type": "EducationalAudience",

    educationalRole: "student",

    audienceType:
      "UKSSSC, UKPSC, HSSC CET, UPSC, SSC, UPPSC, Railway, Banking and State PCS aspirants",
  },

  provider: {
    "@id": `${SITE_URL}/#organization`,
  },

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },
};

const itemListSchema = {
  "@type": "ItemList",

  "@id": `${PAGE_URL}#topic-list`,

  name: "18 Science and Technology Current Affairs Topics 2026",

  numberOfItems: TOPICS.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  // These are entries in the current client-side topic selector.
  // They are NOT independent URLs.
  itemListElement: TOPICS.map((topic, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: topic.title,

    description: topic.category,
  })),
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
      name: "Science and Technology Current Affairs 2026",
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
    learningResourceSchema,
    itemListSchema,
    breadcrumbSchema,
  ],
};

export default function ScienceTechnologyLayout({
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
