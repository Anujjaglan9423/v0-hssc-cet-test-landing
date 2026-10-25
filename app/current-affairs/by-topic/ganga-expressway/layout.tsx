
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/ganga-expressway";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Ganga Expressway 2026: Route, 594 KM, Facts & MCQs | CET Test";

const DESCRIPTION =
  "Learn about Ganga Expressway 2026: 594-km Meerut–Prayagraj route, 12 districts, inauguration, cost and IAF airstrip. Free Hindi-English notes and MCQs for UKPSC, UKSSSC and UPPSC.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: TITLE,
  },

  description: DESCRIPTION,

  applicationName: "CET Test",
  creator: "CET Test",
  publisher: "CET Test",
  category: "Education",

  keywords: [
    // Primary SEO keywords
    "Ganga Expressway",
    "Ganga Expressway 2026",
    "Ganga Expressway Project",
    "Ganga Expressway Uttar Pradesh",
    "Ganga Expressway Inauguration",
    "Ganga Expressway Current Affairs",
    "Ganga Expressway Explained",
    "Ganga Expressway Project Details",
    "Ganga Expressway GK",

    // Project details
    "Ganga Expressway 594 km",
    "Ganga Expressway Route",
    "Ganga Expressway Map",
    "Ganga Expressway Meerut Prayagraj",
    "Ganga Expressway Inauguration Date",
    "Ganga Expressway 29 April 2026",
    "Ganga Expressway Project Cost",
    "Ganga Expressway 36230 Crore",
    "Ganga Expressway Length",
    "Ganga Expressway District List",
    "Ganga Expressway 12 Districts",
    "Ganga Expressway Six Lane",
    "Ganga Expressway Greenfield Project",
    "Ganga Expressway Access Controlled",
    "Ganga Expressway Completion",
    "Ganga Expressway Infrastructure",

    // Route and locations
    "Meerut to Prayagraj Expressway",
    "Bijauli Meerut",
    "Judapur Dandu Prayagraj",
    "Ganga Expressway Meerut",
    "Ganga Expressway Hapur",
    "Ganga Expressway Bulandshahr",
    "Ganga Expressway Amroha",
    "Ganga Expressway Sambhal",
    "Ganga Expressway Budaun",
    "Ganga Expressway Shahjahanpur",
    "Ganga Expressway Hardoi",
    "Ganga Expressway Unnao",
    "Ganga Expressway Raebareli",
    "Ganga Expressway Pratapgarh",
    "Ganga Expressway Prayagraj",

    // Defence and infrastructure
    "Ganga Expressway Emergency Landing Strip",
    "Ganga Expressway IAF Airstrip",
    "Shahjahanpur Emergency Landing Facility",
    "3.5 KM Emergency Airstrip",
    "Indian Air Force Expressway Landing",
    "Defence Infrastructure India",
    "Greenfield Expressway India",
    "DBFOT Model",
    "PPP Infrastructure Model",
    "UPEIDA Ganga Expressway",

    // Uttar Pradesh expressways
    "Uttar Pradesh Expressways",
    "UP Expressway Projects 2026",
    "Purvanchal Expressway",
    "Bundelkhand Expressway",
    "Yamuna Expressway",
    "Agra Lucknow Expressway",
    "Gorakhpur Link Expressway",
    "Longest Expressway Uttar Pradesh",
    "Expressway Current Affairs 2026",

    // UKPSC
    "Ganga Expressway UKPSC",
    "Ganga Expressway 2026 UKPSC",
    "Ganga Expressway UKPSC Notes",
    "Ganga Expressway UKPSC MCQ",
    "UKPSC Infrastructure Current Affairs",
    "UKPSC Government Projects 2026",
    "UKPSC Geography Current Affairs",
    "UKPSC Indian Economy GK",
    "UKPSC Prelims Infrastructure Questions",

    // UKSSSC
    "Ganga Expressway UKSSSC",
    "Ganga Expressway 2026 UKSSSC",
    "Ganga Expressway UKSSSC Notes",
    "Ganga Expressway UKSSSC MCQ",
    "UKSSSC Infrastructure GK",
    "UKSSSC Current Affairs 2026",
    "UKSSSC Geography GK",
    "UKSSSC Important Government Projects",
    "UKSSSC National Infrastructure Questions",

    // UPPSC and UP exams
    "Ganga Expressway UPPSC",
    "Ganga Expressway UPPCS",
    "Ganga Expressway UPSSSC",
    "Ganga Expressway UP Police",
    "Ganga Expressway UP GK",
    "Uttar Pradesh Current Affairs 2026",
    "Uttar Pradesh Geography GK",
    "UPPSC Infrastructure Current Affairs",
    "UPSSSC Ganga Expressway MCQ",

    // Other competitive exams
    "Ganga Expressway UPSC",
    "Ganga Expressway SSC",
    "Ganga Expressway HSSC CET",
    "Ganga Expressway Railway Exams",
    "Ganga Expressway State PSC",
    "Ganga Expressway MCQ",
    "Ganga Expressway Questions and Answers",
    "Infrastructure Current Affairs 2026",
    "Indian Government Projects GK",
    "Indian Geography Current Affairs",
    "Road Infrastructure UPSC",
    "Highway Projects India 2026",

    // People Also Ask / WH searches
    "what is Ganga Expressway",
    "where does Ganga Expressway start",
    "where does Ganga Expressway end",
    "when was Ganga Expressway inaugurated",
    "who inaugurated Ganga Expressway",
    "how long is Ganga Expressway",
    "how many districts does Ganga Expressway pass through",
    "which districts are covered by Ganga Expressway",
    "what is the cost of Ganga Expressway",
    "what is the route of Ganga Expressway",
    "what is the emergency landing strip on Ganga Expressway",
    "who developed Ganga Expressway",
    "what is a greenfield expressway",
    "what is the difference between greenfield and brownfield projects",
    "why is Ganga Expressway important for Uttar Pradesh",

    // Hindi primary keywords
    "गंगा एक्सप्रेसवे",
    "गंगा एक्सप्रेसवे 2026",
    "गंगा एक्सप्रेसवे परियोजना",
    "गंगा एक्सप्रेसवे का उद्घाटन",
    "गंगा एक्सप्रेसवे की लंबाई",
    "गंगा एक्सप्रेसवे का मार्ग",
    "गंगा एक्सप्रेसवे नक्शा",
    "गंगा एक्सप्रेसवे कितने किलोमीटर है",
    "गंगा एक्सप्रेसवे किन जिलों से होकर गुजरता है",
    "गंगा एक्सप्रेसवे 12 जिले",
    "गंगा एक्सप्रेसवे की लागत",
    "मेरठ से प्रयागराज एक्सप्रेसवे",
    "गंगा एक्सप्रेसवे शाहजहांपुर हवाई पट्टी",
    "उत्तर प्रदेश एक्सप्रेसवे",
    "गंगा एक्सप्रेसवे करंट अफेयर्स",
    "गंगा एक्सप्रेसवे सामान्य ज्ञान",
    "गंगा एक्सप्रेसवे प्रश्न उत्तर",
    "गंगा एक्सप्रेसवे MCQ",

    // Hindi exam keywords
    "गंगा एक्सप्रेसवे UKPSC",
    "गंगा एक्सप्रेसवे UKSSSC",
    "गंगा एक्सप्रेसवे UPPSC",
    "गंगा एक्सप्रेसवे UPSSSC",
    "UKPSC करंट अफेयर्स 2026",
    "UKSSSC करंट अफेयर्स 2026",
    "UPPSC करंट अफेयर्स 2026",
    "UKPSC भूगोल सामान्य ज्ञान",
    "UKSSSC भूगोल सामान्य ज्ञान",
    "UPPSC उत्तर प्रदेश सामान्य ज्ञान",
    "उत्तराखंड लोक सेवा आयोग इंफ्रास्ट्रक्चर",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग करंट अफेयर्स",
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
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "CET Test",
    locale: "en_IN",
    title: TITLE,
    description: DESCRIPTION,
  },

  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "CET Test",
        url: SITE_URL,
      },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#article`,
      },
    },

    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },

      headline:
        "Ganga Expressway Project 2026: Inauguration, Route, Districts, Cost and MCQs",

      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Infrastructure",
        "Uttar Pradesh",
        "Indian Geography",
        "Indian Economy",
        "General Knowledge",
      ],

      educationalUse: "Exam Preparation",
      learningResourceType: "Study Notes",
      isAccessibleForFree: true,

      publisher: {
        "@type": "Organization",
        name: "CET Test",
        url: SITE_URL,
      },

      about: [
        {
          "@type": "Thing",
          name: "Ganga Expressway",
          description:
            "A 594-kilometre, access-controlled greenfield expressway connecting Meerut and Prayagraj in Uttar Pradesh, India.",
        },
        {
          "@type": "Thing",
          name: "Uttar Pradesh Road Infrastructure",
        },
        {
          "@type": "Thing",
          name: "Greenfield Expressway",
        },
        {
          "@type": "Thing",
          name: "Infrastructure Development India",
        },
      ],

      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "Uttar Pradesh Expressways Industrial Development Authority",
          alternateName: "UPEIDA",
          url: "https://upeida.up.gov.in/",
        },
        {
          "@type": "GovernmentOrganization",
          name: "Government of Uttar Pradesh",
          url: "https://up.gov.in/",
        },
        {
          "@type": "Place",
          name: "Meerut, Uttar Pradesh",
        },
        {
          "@type": "Place",
          name: "Prayagraj, Uttar Pradesh",
        },
        {
          "@type": "Place",
          name: "Shahjahanpur, Uttar Pradesh",
        },
        {
          "@type": "Place",
          name: "Hardoi, Uttar Pradesh",
        },
        {
          "@type": "Thing",
          name: "Emergency Landing Facility",
        },
        {
          "@type": "Organization",
          name: "Indian Air Force",
        },
        {
          "@type": "Thing",
          name: "Public Private Partnership",
        },
        {
          "@type": "Thing",
          name: "Design Build Finance Operate Transfer",
          alternateName: "DBFOT",
        },
        {
          "@type": "Thing",
          name: "Purvanchal Expressway",
        },
        {
          "@type": "Thing",
          name: "Bundelkhand Expressway",
        },
        {
          "@type": "Thing",
          name: "Yamuna Expressway",
        },
      ],
    },

    {
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
          name: "Ganga Expressway Project 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function GangaExpresswayLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      {children}
    </>
  );
}
