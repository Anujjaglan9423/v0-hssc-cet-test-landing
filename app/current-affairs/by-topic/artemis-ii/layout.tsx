
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/artemis-ii";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "NASA Artemis II Mission 2026: Crew, Facts & MCQs | CET Test";

const DESCRIPTION =
  "Explore NASA Artemis II Mission 2026: launch, crew, SLS rocket, Orion spacecraft, lunar flyby, records and splashdown. Free Hindi-English notes and MCQs.";

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
    "Artemis II",
    "Artemis 2",
    "NASA Artemis II",
    "NASA Artemis 2",
    "Artemis II mission 2026",
    "NASA Artemis II mission",
    "Artemis II mission explained",
    "Artemis II mission summary",
    "Artemis II latest updates",

    // Mission details
    "Artemis II launch date",
    "Artemis II splashdown date",
    "Artemis II crew",
    "Artemis II astronauts",
    "Artemis II mission objectives",
    "Artemis II achievements",
    "Artemis II lunar flyby",
    "Artemis II Moon mission",
    "Artemis II distance record",
    "Artemis II mission timeline",
    "Artemis II trajectory",
    "Artemis II free return trajectory",
    "Artemis II Pacific Ocean splashdown",

    // Technology
    "NASA Space Launch System",
    "SLS rocket",
    "Orion spacecraft",
    "Orion crew capsule",
    "Artemis spacecraft",
    "NASA Moon exploration",
    "human spaceflight",
    "deep space exploration",

    // Astronauts
    "Reid Wiseman",
    "Victor Glover",
    "Christina Koch",
    "Jeremy Hansen",
    "Artemis II four astronauts",
    "first woman on Artemis lunar mission",

    // Exam preparation
    "Artemis II UPSC",
    "Artemis II SSC",
    "Artemis II HSSC CET",
    "Artemis II MCQ",
    "Artemis II GK questions",
    "Artemis II questions and answers",
    "NASA Artemis mission current affairs",
    "space technology current affairs 2026",
    "science and technology UPSC 2026",
    "space missions competitive exams",

    // Comparison and related topics
    "Artemis I vs Artemis II",
    "Artemis II vs Artemis III",
    "Artemis III mission 2027",
    "Artemis IV Moon landing 2028",
    "Apollo 17 vs Artemis II",
    "NASA Artemis program timeline",

    // WH / People Also Ask queries
    "what is Artemis II mission",
    "when was Artemis II launched",
    "who are the Artemis II astronauts",
    "where was Artemis II launched",
    "why was Artemis II important",
    "which rocket launched Artemis II",
    "how many astronauts were on Artemis II",
    "how far did Artemis II travel",
    "how long was Artemis II mission",
    "did Artemis II land on the Moon",
    "where did Artemis II splash down",
    "what is the difference between Artemis I and II",
    "what is the next mission after Artemis II",

    // Hindi SEO keywords
    "आर्टेमिस II मिशन",
    "आर्टेमिस 2 मिशन",
    "नासा आर्टेमिस मिशन",
    "आर्टेमिस II मिशन 2026",
    "आर्टेमिस II मिशन क्या है",
    "आर्टेमिस II लॉन्च तारीख",
    "आर्टेमिस II के अंतरिक्ष यात्री",
    "आर्टेमिस II के उद्देश्य",
    "आर्टेमिस II की उपलब्धियां",
    "आर्टेमिस II मिशन सामान्य ज्ञान",
    "आर्टेमिस II करंट अफेयर्स",
    "आर्टेमिस मिशन प्रश्न उत्तर",
    "नासा चंद्र मिशन 2026",
    "ओरियन अंतरिक्ष यान",
    "स्पेस लॉन्च सिस्टम रॉकेट",
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
        "NASA Artemis II Mission 2026: Crew, Launch, Lunar Flyby and Key Facts",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      articleSection: [
        "Current Affairs",
        "Science and Technology",
        "Space Exploration",
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
          "@type": "Event",
          name: "Artemis II Mission",
          description:
            "NASA's crewed lunar flyby mission launched on April 1, 2026, and completed on April 10, 2026.",
          startDate: "2026-04-01",
          endDate: "2026-04-10",
          location: {
            "@type": "Place",
            name: "Kennedy Space Center, Florida, USA",
          },
        },
        {
          "@type": "Thing",
          name: "NASA Artemis Program",
          sameAs:
            "https://www.nasa.gov/humans-in-space/artemis/",
        },
        {
          "@type": "Thing",
          name: "Human Spaceflight",
        },
        {
          "@type": "Thing",
          name: "Lunar Exploration",
        },
      ],
      mentions: [
        {
          "@type": "Organization",
          name: "NASA",
          sameAs: "https://www.nasa.gov/",
        },
        {
          "@type": "Organization",
          name: "Canadian Space Agency",
          sameAs: "https://www.asc-csa.gc.ca/",
        },
        {
          "@type": "Person",
          name: "Reid Wiseman",
        },
        {
          "@type": "Person",
          name: "Victor Glover",
        },
        {
          "@type": "Person",
          name: "Christina Koch",
        },
        {
          "@type": "Person",
          name: "Jeremy Hansen",
        },
        {
          "@type": "Thing",
          name: "Space Launch System",
        },
        {
          "@type": "Thing",
          name: "Orion Spacecraft",
        },
        {
          "@type": "Thing",
          name: "Lunar Free-Return Trajectory",
        },
        {
          "@type": "Thing",
          name: "Artemis III",
        },
        {
          "@type": "Thing",
          name: "Artemis IV",
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
          name: "NASA Artemis II Mission 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function ArtemisIILayout({
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
