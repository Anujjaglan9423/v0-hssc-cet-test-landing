
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const SITE_NAME = "CET Test";

const PAGE_PATH = "/current-affairs/by-topic/sports";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Sports Current Affairs 2026: Winners, Records & MCQs | CET Test";

const PAGE_DESCRIPTION =
  "Study Sports Current Affairs 2026 in Hindi and English. Explore 18 topics covering ICC cricket, IPL, FIFA World Cup, Grand Slams, Khelo India and more, with winners, records, one-liners and MCQs for UKSSSC, UKPSC, HSSC CET, UPSC and SSC.";

const PAGE_TITLE_HI =
  "खेल करेंट अफेयर्स 2026: विजेता, रिकॉर्ड और महत्वपूर्ण प्रश्न";

const topics = [
  {
    slug: "grand-slam-tennis-2026",
    name: "Grand Slam Tennis Championships 2026",
  },
  {
    slug: "icc-mens-t20-world-cup-2026",
    name: "ICC Men's T20 World Cup 2026",
  },
  {
    slug: "icc-u19-world-cup-2026",
    name: "ICC Under-19 Men's Cricket World Cup 2026",
  },
  {
    slug: "icc-womens-t20-2026",
    name: "ICC Women's T20 World Cup 2026",
  },
  {
    slug: "womens-t20-asia-cup-2026",
    name: "Women's T20 Asia Cup 2026",
  },
  {
    slug: "adca-deaf-cricket",
    name: "ADCA T20I Asia Cup 2026",
  },
  {
    slug: "vijay-hazare-trophy",
    name: "Vijay Hazare Trophy 2025–26",
  },
  {
    slug: "ranji-trophy",
    name: "Ranji Trophy 2025–26",
  },
  {
    slug: "ipl-2026",
    name: "Indian Premier League 2026",
  },
  {
    slug: "saff-womens-2026",
    name: "SAFF Women's Championship 2026",
  },
  {
    slug: "time100-sports-2026",
    name: "TIME100 Most Influential People in Sports 2026",
  },
  {
    slug: "fifa-world-cup-2026",
    name: "FIFA World Cup 2026",
  },
  {
    slug: "khelo-india-tribal",
    name: "Khelo India Tribal Games 2026",
  },
  {
    slug: "khelo-india-winter",
    name: "Khelo India Winter Games 2026",
  },
  {
    slug: "squash-world-cup",
    name: "Squash World Cup 2025",
  },
  {
    slug: "hockey-junior-world-cup",
    name: "FIH Men's Junior Hockey World Cup 2025",
  },
  {
    slug: "yogasana-championship",
    name: "World Yogasana Sports Championship 2026",
  },
  {
    slug: "singapore-open-badminton",
    name: "Singapore Open 2026 Badminton",
  },
] as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  category: "Education",

  keywords: [
    // Primary SEO
    "sports current affairs 2026",
    "sports current affairs 2026 in Hindi",
    "sports current affairs 2026 in English",
    "important sports current affairs 2026",
    "latest sports current affairs",
    "sports current affairs questions and answers",
    "sports current affairs MCQ 2026",
    "sports current affairs one liner",
    "sports general knowledge 2026",
    "sports GK questions 2026",
    "sports winners 2026",
    "sports championships 2026",
    "sports awards 2026",
    "sports records 2026",
    "sports tournaments 2026",
    "sports current affairs notes",
    "sports current affairs quiz",
    "sports current affairs for competitive exams",

    // UKSSSC
    "UKSSSC sports current affairs 2026",
    "UKSSSC sports GK",
    "UKSSSC sports questions",
    "UKSSSC sports MCQ",
    "UKSSSC Junior Assistant sports current affairs",
    "UKSSSC Patwari sports questions",
    "UKSSSC VDO sports current affairs",
    "Uttarakhand government exam sports GK",

    // UKPSC
    "UKPSC sports current affairs 2026",
    "UKPSC sports GK",
    "UKPSC sports questions",
    "UKPSC sports MCQ",
    "UKPSC Prelims sports current affairs",
    "UKPSC RO ARO sports current affairs",
    "Uttarakhand PCS sports current affairs",

    // HSSC CET
    "HSSC CET sports current affairs 2026",
    "HSSC CET sports GK",
    "Haryana CET sports current affairs",
    "Haryana CET sports questions",
    "HSSC Group C sports current affairs",
    "HSSC Group D sports questions",
    "HSSC CET 2026 sports MCQ",

    // UPSC / State PCS
    "UPSC sports current affairs 2026",
    "UPSC Prelims sports questions",
    "UPSC sports awards",
    "UPSC international sports events",
    "UPPSC sports current affairs",
    "State PCS sports current affairs",
    "sports current affairs for civil services",

    // SSC / Railway / Banking
    "SSC sports current affairs 2026",
    "SSC CGL sports GK",
    "SSC CHSL sports questions",
    "SSC GD sports current affairs",
    "RRB NTPC sports current affairs",
    "Railway Group D sports GK",
    "Banking exam sports current affairs",
    "IBPS sports current affairs",

    // Cricket
    "ICC T20 World Cup 2026 winner",
    "ICC Men's T20 World Cup 2026",
    "ICC Women's T20 World Cup 2026",
    "ICC U19 World Cup 2026",
    "IPL 2026 winner",
    "IPL 2026 orange cap",
    "IPL 2026 purple cap",
    "Ranji Trophy 2025 26 winner",
    "Vijay Hazare Trophy 2025 26 winner",
    "Women's T20 Asia Cup 2026",
    "ADCA T20I Asia Cup 2026",
    "cricket current affairs 2026",

    // Football / Tennis / Other sports
    "FIFA World Cup 2026 winner",
    "FIFA World Cup 2026 final",
    "FIFA World Cup 2026 host countries",
    "Australian Open 2026 winners",
    "French Open 2026 winners",
    "Wimbledon 2026 winners",
    "Grand Slam winners 2026",
    "SAFF Women's Championship 2026",
    "Khelo India Tribal Games 2026",
    "Khelo India Winter Games 2026",
    "Squash World Cup 2025",
    "Junior Hockey World Cup 2025",
    "World Yogasana Championship 2026",
    "Singapore Open badminton 2026",

    // Hindi
    "खेल करेंट अफेयर्स 2026",
    "खेल समसामयिकी 2026",
    "खेल सामान्य ज्ञान 2026",
    "खेलों के महत्वपूर्ण प्रश्न",
    "खेल करेंट अफेयर्स प्रश्न उत्तर",
    "खेलों के विजेता 2026",
    "खेल प्रतियोगिताएं 2026",
    "क्रिकेट करेंट अफेयर्स 2026",
    "फुटबॉल विश्व कप 2026",
    "टी20 विश्व कप 2026 विजेता",
    "आईपीएल 2026 विजेता",
    "टेनिस ग्रैंड स्लैम विजेता 2026",
    "खेलो इंडिया 2026",
    "यूकेएसएसएससी खेल करेंट अफेयर्स",
    "यूकेपीएससी खेल करेंट अफेयर्स",
    "एचएसएससी सीईटी खेल प्रश्न",
    "यूपीएससी खेल सामान्य ज्ञान",

    // AEO / People Also Ask / WH terms
    "who won ICC T20 World Cup 2026",
    "who won FIFA World Cup 2026",
    "who won IPL 2026",
    "who won Australian Open 2026",
    "who won Wimbledon 2026",
    "who won French Open 2026",
    "which country hosted FIFA World Cup 2026",
    "what are important sports current affairs 2026",
    "which sports current affairs are important for UKSSSC",
    "how to prepare sports current affairs for UKPSC",
    "where can I study sports current affairs in Hindi",
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
      "Sports Current Affairs 2026 – Winners, Records & MCQs",
    description: PAGE_DESCRIPTION,
  },

  twitter: {
    card: "summary",
    title: "Sports Current Affairs 2026 | CET Test",
    description: PAGE_DESCRIPTION,
  },
};

// --------------------------------------------------
// STRUCTURED DATA
// --------------------------------------------------

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
      name: "Sports Current Affairs 2026",
    },
    {
      "@type": "Thing",
      name: "Cricket Championships",
    },
    {
      "@type": "Thing",
      name: "Football World Cup",
    },
    {
      "@type": "Thing",
      name: "Grand Slam Tennis",
    },
    {
      "@type": "Thing",
      name: "Indian Sports and Khelo India",
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

  description: PAGE_DESCRIPTION,

  url: PAGE_URL,

  inLanguage: ["en-IN", "hi-IN"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Current Affairs",
    "Sports Study Notes",
    "Practice MCQs",
    "One-Liner Questions",
  ],

  educationalUse: [
    "Exam Preparation",
    "Revision",
    "Self Study",
    "Practice",
  ],

  educationalLevel: "Competitive Examination",

  teaches: [
    "Sports Current Affairs 2026",
    "International Sports Championships",
    "Sports Winners and Records",
    "Cricket and Football Tournaments",
    "Khelo India Games",
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

  "@id": `${PAGE_URL}#topic-index`,

  name: "18 Sports Current Affairs Topics",

  numberOfItems: topics.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement: topics.map((topic, index) => ({
    "@type": "ListItem",

    position: index + 1,

    name: topic.name,

    // Matches the IDs in your existing TopicCard component.
    // These are section anchors, not separate pages.
    url: `${PAGE_URL}#${topic.slug}`,
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
      name: "Sports Current Affairs 2026",
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

export default function SportsCurrentAffairsLayout({
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
