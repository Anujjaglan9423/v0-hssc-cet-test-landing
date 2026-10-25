
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH =
  "/current-affairs/by-topic/awards-honours-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Awards & Honours 2026: Winners List, GK & MCQs | CET Test";

const DESCRIPTION =
  "Study Awards and Honours Current Affairs 2026 with national and international winners, award categories, Hindi-English GK notes, one-liners and free MCQs.";

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
    // Primary keywords
    "Awards and Honours 2026",
    "Awards and Honors 2026",
    "Awards and Honours Current Affairs 2026",
    "Awards 2026 winners list",
    "Important Awards 2026",
    "National and International Awards 2026",
    "Awards and Honours GK",
    "Awards and Honours notes",

    // Exam preparation
    "Awards and Honours UPSC 2026",
    "Awards and Honours SSC 2026",
    "Awards and Honours HSSC CET",
    "Awards and Honours banking exams",
    "Awards and Honours Railway exams",
    "Awards and Honours MCQ 2026",
    "Awards and Honours questions and answers",
    "Awards and Honours one liner 2026",
    "Awards 2026 current affairs quiz",
    "Important awards for competitive exams",
    "Static GK awards and honours",

    // Indian awards
    "National Film Awards 2026",
    "Sahitya Akademi Awards 2025",
    "Jnanpith Award 2025",
    "Saraswati Samman 2025",
    "Dadasaheb Phalke Award",
    "Ashoka Chakra 2026",
    "BCCI Naman Awards 2026",
    "National e-Governance Awards 2026",
    "Subhash Chandra Bose Aapda Prabandhan Puraskar",
    "Indian Athletics Awards 2025",

    // International awards
    "Oscars 2026 winners",
    "98th Academy Awards winners",
    "International Booker Prize 2026",
    "Pulitzer Prize 2026",
    "Ramon Magsaysay Award 2026",
    "Laureus World Sports Awards 2026",
    "Whitley Awards 2026",
    "Dirac Medal 2026",
    "Food Planet Prize 2026",
    "Miss World 2026",
    "The Earth Prize 2026",

    // Award categories
    "Literary awards 2026",
    "Sports awards 2026",
    "Film awards 2026",
    "Science awards 2026",
    "Environment awards 2026",
    "Gallantry awards India",
    "International literary awards",
    "Indian civilian awards",
    "Government awards India 2026",

    // People Also Ask and WH searches
    "who won major awards in 2026",
    "what are the important awards of 2026",
    "which awards are important for UPSC",
    "who won the Oscars 2026",
    "who won the International Booker Prize 2026",
    "who received the Jnanpith Award 2025",
    "what is the highest cinema award in India",
    "what is the Ashoka Chakra award",
    "which award is known as Green Oscar",
    "who won the Pulitzer Prize 2026",
    "how to remember awards and winners for exams",
    "where can I practice awards and honours MCQs",

    // Hindi keywords
    "पुरस्कार एवं सम्मान 2026",
    "पुरस्कार और सम्मान करंट अफेयर्स",
    "महत्वपूर्ण पुरस्कार 2026",
    "राष्ट्रीय पुरस्कार 2026",
    "अंतरराष्ट्रीय पुरस्कार 2026",
    "पुरस्कार विजेताओं की सूची 2026",
    "पुरस्कार और सम्मान सामान्य ज्ञान",
    "पुरस्कार और सम्मान प्रश्न उत्तर",
    "पुरस्कार और सम्मान MCQ",
    "पुरस्कार और सम्मान वन लाइनर",
    "ज्ञानपीठ पुरस्कार 2025",
    "साहित्य अकादमी पुरस्कार 2025",
    "ऑस्कर पुरस्कार 2026",
    "पुलित्जर पुरस्कार 2026",
    "अंतरराष्ट्रीय बुकर पुरस्कार 2026",
    "अशोक चक्र पुरस्कार 2026",
    "खेल पुरस्कार 2026",
    "फिल्म पुरस्कार 2026",
    "प्रतियोगी परीक्षा पुरस्कार और सम्मान",
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
        "Awards and Honours Current Affairs 2026: Winners, Notes and MCQs",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      articleSection: [
        "Current Affairs",
        "Awards and Honours",
        "General Knowledge",
        "Competitive Exam Preparation",
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
          name: "Awards and Honours 2026",
          description:
            "National and international awards, award categories, recipients and examination-oriented general knowledge.",
        },
        {
          "@type": "Thing",
          name: "Current Affairs",
        },
        {
          "@type": "Thing",
          name: "Competitive Examinations",
        },
      ],

      mentions: [
        {
          "@type": "Thing",
          name: "National Film Awards",
        },
        {
          "@type": "Thing",
          name: "Jnanpith Award",
        },
        {
          "@type": "Thing",
          name: "Sahitya Akademi Award",
        },
        {
          "@type": "Thing",
          name: "Academy Awards",
        },
        {
          "@type": "Thing",
          name: "International Booker Prize",
        },
        {
          "@type": "Thing",
          name: "Pulitzer Prize",
        },
        {
          "@type": "Thing",
          name: "Ramon Magsaysay Award",
        },
        {
          "@type": "Thing",
          name: "Ashoka Chakra",
        },
        {
          "@type": "Thing",
          name: "Laureus World Sports Awards",
        },
        {
          "@type": "Thing",
          name: "Whitley Awards",
        },
        {
          "@type": "Thing",
          name: "Saraswati Samman",
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
          name: "Awards and Honours 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function AwardsHonours2026Layout({
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
