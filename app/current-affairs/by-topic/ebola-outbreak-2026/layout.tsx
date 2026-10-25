
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/ebola-outbreak-2026";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Ebola Outbreak 2026: WHO PHEIC, Facts & MCQs | CET Test";

const DESCRIPTION =
  "Learn about the 2026 Ebola outbreak, WHO PHEIC declaration, Bundibugyo virus, DRC, Uganda and transmission. Free Hindi-English notes and MCQs for UKPSC, UKSSSC and UPSC.";

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
    "Ebola Outbreak 2026",
    "Ebola Virus Outbreak 2026",
    "Ebola Current Affairs 2026",
    "Ebola Disease 2026",
    "Ebola Virus Disease",
    "EVD",
    "Ebola 2026 explained",
    "Ebola 2026 news",
    "Ebola 2026 study notes",

    // Outbreak information
    "Bundibugyo Ebola Outbreak 2026",
    "Bundibugyo Virus Disease",
    "Bundibugyo Ebolavirus",
    "Ebola DRC 2026",
    "Ebola Uganda 2026",
    "Ebola Ituri Province",
    "Ebola Central Africa 2026",
    "WHO Ebola Outbreak 2026",
    "WHO Ebola PHEIC 2026",
    "Ebola Public Health Emergency",
    "Africa CDC Ebola Emergency",
    "Public Health Emergency of Continental Security",

    // Science and health
    "Ebola Virus Transmission",
    "How Ebola Spreads",
    "Ebola Zoonotic Disease",
    "Ebola Symptoms",
    "Ebola Incubation Period",
    "Ebola Prevention",
    "Ebola Vaccines",
    "Ebola Treatment",
    "Ebola Case Fatality Rate",
    "Ebola Natural Reservoir",
    "Ebola Fruit Bats",
    "Ebola Virus Species",
    "Ebola Virus History",
    "Ebola First Outbreak 1976",
    "Difference Between Ebola Virus Species",
    "Ebola Disease Control",
    "Emerging Infectious Diseases",
    "Zoonotic Diseases Current Affairs",

    // WHO and global health
    "World Health Organization",
    "WHO PHEIC",
    "PHEIC Full Form",
    "Public Health Emergency of International Concern",
    "International Health Regulations",
    "IHR 2005",
    "Africa Centres for Disease Control and Prevention",
    "Africa CDC",
    "Global Health Emergencies",
    "Disease Surveillance",
    "Outbreak Response",

    // UKPSC keywords
    "Ebola Outbreak 2026 UKPSC",
    "Ebola Virus UKPSC",
    "Ebola UKPSC Current Affairs",
    "Ebola UKPSC Notes",
    "Ebola UKPSC MCQ",
    "WHO PHEIC UKPSC",
    "UKPSC Science and Technology 2026",
    "UKPSC Health Current Affairs",
    "UKPSC Biology GK",
    "UKPSC Prelims Disease Questions",
    "UKPSC International Organizations GK",

    // UKSSSC keywords
    "Ebola Outbreak 2026 UKSSSC",
    "Ebola Virus UKSSSC",
    "Ebola UKSSSC Current Affairs",
    "Ebola UKSSSC Notes",
    "Ebola UKSSSC MCQ",
    "WHO PHEIC UKSSSC",
    "UKSSSC Science GK",
    "UKSSSC Biology GK",
    "UKSSSC Disease Current Affairs",
    "UKSSSC General Science 2026",
    "UKSSSC Health Questions",

    // Other competitive examinations
    "Ebola Outbreak 2026 UPSC",
    "Ebola Outbreak 2026 SSC",
    "Ebola Outbreak 2026 HSSC CET",
    "Ebola Virus Railway Exams",
    "Ebola State PSC",
    "Ebola Current Affairs MCQ",
    "Ebola Questions and Answers",
    "Biology Current Affairs 2026",
    "Health and Science Current Affairs",
    "WHO Current Affairs UPSC",
    "Disease Outbreak GK 2026",
    "International Health Current Affairs",
    "Ebola Notes for Competitive Exams",

    // People Also Ask / WH searches
    "what is Ebola Virus Disease",
    "what caused Ebola outbreak 2026",
    "where did Ebola outbreak 2026 occur",
    "when did WHO declare Ebola PHEIC",
    "what is Bundibugyo virus",
    "how does Ebola spread",
    "is Ebola an airborne disease",
    "is Ebola a zoonotic disease",
    "what are the symptoms of Ebola",
    "what is the incubation period of Ebola",
    "how can Ebola be prevented",
    "what is the treatment for Ebola",
    "is there a vaccine for Bundibugyo Ebola",
    "what is the meaning of PHEIC",
    "what is the role of Africa CDC",
    "when was Ebola first discovered",
    "why is Ebola dangerous",

    // Hindi keywords
    "इबोला प्रकोप 2026",
    "इबोला वायरस 2026",
    "इबोला वायरस रोग",
    "इबोला क्या है",
    "इबोला वायरस कैसे फैलता है",
    "इबोला वायरस के लक्षण",
    "इबोला वायरस का इलाज",
    "इबोला वायरस की रोकथाम",
    "इबोला वायरस का टीका",
    "बुंडीबुग्यो वायरस",
    "इबोला महामारी 2026",
    "विश्व स्वास्थ्य संगठन इबोला",
    "WHO सार्वजनिक स्वास्थ्य आपातकाल",
    "PHEIC क्या है",
    "जूनोटिक रोग क्या है",
    "इबोला करंट अफेयर्स 2026",
    "इबोला सामान्य ज्ञान",
    "इबोला प्रश्न उत्तर",
    "इबोला MCQ",

    // Hindi exam searches
    "इबोला वायरस UKPSC",
    "इबोला वायरस UKSSSC",
    "UKPSC स्वास्थ्य करंट अफेयर्स",
    "UKSSSC स्वास्थ्य करंट अफेयर्स",
    "UKPSC जीव विज्ञान सामान्य ज्ञान",
    "UKSSSC जीव विज्ञान सामान्य ज्ञान",
    "UKPSC विज्ञान करंट अफेयर्स 2026",
    "UKSSSC विज्ञान करंट अफेयर्स 2026",
    "उत्तराखंड लोक सेवा आयोग विज्ञान प्रश्न",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग विज्ञान प्रश्न",
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
        "Ebola Outbreak 2026: WHO PHEIC, Bundibugyo Virus, Transmission and MCQs",

      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Health and Science",
        "Biology",
        "Global Health",
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
          "@type": "MedicalCondition",
          name: "Ebola Virus Disease",
          alternateName: "EVD",
          description:
            "A severe viral disease transmitted through direct contact with infected bodily fluids or contaminated materials.",
        },
        {
          "@type": "Thing",
          name: "Bundibugyo Virus Disease Outbreak 2026",
        },
        {
          "@type": "Thing",
          name: "Public Health Emergency of International Concern",
          alternateName: "PHEIC",
        },
        {
          "@type": "Thing",
          name: "Zoonotic Diseases",
        },
      ],

      mentions: [
        {
          "@type": "Organization",
          name: "World Health Organization",
          alternateName: "WHO",
          url: "https://www.who.int/",
        },
        {
          "@type": "Organization",
          name: "Africa Centres for Disease Control and Prevention",
          alternateName: "Africa CDC",
          url: "https://africacdc.org/",
        },
        {
          "@type": "Country",
          name: "Democratic Republic of the Congo",
        },
        {
          "@type": "Country",
          name: "Uganda",
        },
        {
          "@type": "Place",
          name: "Ituri Province, Democratic Republic of the Congo",
        },
        {
          "@type": "Thing",
          name: "Bundibugyo Virus",
        },
        {
          "@type": "Thing",
          name: "Ebola Virus Transmission",
        },
        {
          "@type": "Thing",
          name: "International Health Regulations",
        },
        {
          "@type": "Thing",
          name: "Disease Surveillance",
        },
        {
          "@type": "Thing",
          name: "Outbreak Prevention and Control",
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
          name: "Ebola Outbreak 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function EbolaOutbreak2026Layout({
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
