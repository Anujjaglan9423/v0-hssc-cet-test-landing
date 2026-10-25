import type { Metadata } from "next";
import type { ReactNode } from "react";

// ======================================================
// PAGE CONFIGURATION
// ======================================================

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/india-japan-summit";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "16th India-Japan Summit 2026 | Key Outcomes & MCQs";

const PAGE_DESCRIPTION =
  "16th India-Japan Annual Summit 2026 in New Delhi: dates, Modi-Takaichi meeting, UNICORN project, defence ties, FOIP, clean energy and MCQs in Hindi and English.";

const PAGE_DESCRIPTION_HI =
  "16वां भारत-जापान वार्षिक शिखर सम्मेलन 2026: नई दिल्ली में आयोजन, मोदी-ताकाइची बैठक, UNICORN रक्षा परियोजना, हिंद-प्रशांत सहयोग, स्वच्छ ऊर्जा, प्रमुख समझौते और हिंदी-अंग्रेजी MCQ।";

// ======================================================
// SEO METADATA
// ======================================================

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
    "Current Affairs, International Relations, India-Japan Bilateral Relations, Defence Cooperation, Competitive Examination Preparation",

  keywords: [
    // PRIMARY KEYWORDS
    "16th India Japan Annual Summit 2026",
    "India Japan Summit 2026",
    "India Japan Annual Summit 2026",
    "16th India Japan Summit",
    "India Japan Summit 2026 New Delhi",
    "India Japan Summit July 2026",
    "India Japan Bilateral Summit 2026",
    "India Japan Relations 2026",
    "India Japan Current Affairs 2026",
    "India Japan Summit 2026 Outcomes",
    "India Japan Summit 2026 Key Highlights",
    "India Japan Summit 2026 Agreements",
    "India Japan Summit 2026 Hindi English",

    // HINDI KEYWORDS
    "16वां भारत जापान वार्षिक शिखर सम्मेलन 2026",
    "भारत जापान शिखर सम्मेलन 2026",
    "भारत जापान संबंध 2026",
    "भारत जापान द्विपक्षीय संबंध",
    "भारत जापान समझौते 2026",
    "भारत जापान रक्षा सहयोग 2026",
    "भारत जापान वार्षिक सम्मेलन नई दिल्ली",
    "भारत जापान अंतरराष्ट्रीय संबंध",
    "भारत जापान समसामयिकी 2026",
    "भारत जापान शिखर सम्मेलन MCQ",
    "भारत जापान साझेदारी 2026",

    // SUMMIT DETAILS
    "16th India Japan Summit Date",
    "16th India Japan Summit Venue",
    "India Japan Summit 2026 Location",
    "India Japan Summit 1 to 3 July 2026",
    "India Japan Leaders Meeting 2 July 2026",
    "Narendra Modi Sanae Takaichi Summit",
    "Sanae Takaichi India Visit 2026",
    "Japanese Prime Minister India Visit 2026",
    "Modi Takaichi Bilateral Meeting",
    "India Japan Joint Statement 2026",

    // INTERNATIONAL RELATIONS
    "India Japan Strategic Partnership",
    "India Japan Special Strategic Global Partnership",
    "India Japan Diplomatic Relations",
    "India Japan Foreign Policy 2026",
    "India Japan Bilateral Cooperation",
    "India Japan Indo Pacific Cooperation",
    "India Japan Regional Security",
    "India Japan Strategic Convergence",
    "India Japan Economic Cooperation",

    // UNICORN PROJECT
    "UNICORN Project India Japan",
    "UNICORN Defence Project 2026",
    "India Japan UNICORN Agreement",
    "Unified Complex Radio Antenna",
    "UNICORN Naval Antenna System",
    "India Japan Defence Technology",
    "India Japan Naval Cooperation",
    "Japan India Military Technology Cooperation",
    "UNICORN Project Current Affairs",
    "UNICORN Project UPSC",
    "यूनिकॉर्न परियोजना भारत जापान",
    "यूनिफाइड कॉम्प्लेक्स रेडियो एंटीना",

    // DEFENCE COOPERATION
    "India Japan Defence Cooperation 2026",
    "India Japan Defence Agreement",
    "India Japan Military Exercises",
    "JIMEX Exercise",
    "Dharma Guardian Exercise",
    "Veer Guardian Exercise",
    "Malabar Naval Exercise",
    "India Japan 2 Plus 2 Dialogue",
    "India Japan Maritime Security",
    "India Japan Defence Partnership",
    "भारत जापान संयुक्त सैन्य अभ्यास",

    // INDO-PACIFIC
    "Free and Open Indo Pacific",
    "FOIP India Japan",
    "Indo Pacific Oceans Initiative",
    "IPOI India Japan",
    "MAHASAGAR Doctrine",
    "MAHASAGAR Policy 2025",
    "SAGAR Policy India",
    "Quad Cooperation India Japan",
    "India Japan Indo Pacific Strategy",
    "हिंद प्रशांत क्षेत्र भारत जापान",
    "महासागर सिद्धांत",
    "सागर नीति भारत",

    // CLEAN ENERGY AND INFRASTRUCTURE
    "India Japan Clean Energy Cooperation",
    "India Japan Biogas Initiative",
    "India Japan CBG Initiative",
    "India Japan Green Energy Cooperation",
    "India Japan AI Cooperation 2026",
    "India Japan Next Generation Mobility Partnership",
    "India Japan NGMP",
    "India Japan Infrastructure Cooperation",
    "India Japan Transport Cooperation",
    "India Japan Critical Minerals Cooperation",

    // UKPSC
    "UKPSC India Japan Summit 2026",
    "UKPSC International Relations 2026",
    "UKPSC Current Affairs 2026",
    "UKPSC India Japan Relations",
    "UKPSC Foreign Policy Questions",
    "UKPSC Defence Current Affairs",
    "UKPSC Summit and Conferences 2026",
    "UKPSC India Japan MCQ",
    "UKPSC भारत जापान शिखर सम्मेलन",

    // UKSSSC
    "UKSSSC India Japan Summit 2026",
    "UKSSSC Current Affairs 2026",
    "UKSSSC International Relations",
    "UKSSSC Important Summits 2026",
    "UKSSSC Defence Current Affairs",
    "UKSSSC General Knowledge 2026",
    "UKSSSC Group C Current Affairs",
    "UKSSSC Junior Assistant GK",
    "UKSSSC India Japan Relations MCQ",
    "UKSSSC भारत जापान संबंध 2026",

    // UPSC
    "UPSC India Japan Relations 2026",
    "UPSC India Japan Summit 2026",
    "UPSC International Relations",
    "UPSC Prelims India Japan",
    "UPSC GS Paper 2 India Japan",
    "UPSC India Japan Defence Cooperation",
    "UPSC Indo Pacific Strategy",
    "UPSC India Japan Current Affairs",
    "UPSC UNICORN Project",

    // SSC
    "SSC India Japan Summit 2026",
    "SSC CGL Current Affairs 2026",
    "SSC CHSL Current Affairs",
    "SSC GD International Summits",
    "SSC Important Summits 2026",
    "SSC General Awareness India Japan",

    // HSSC CET
    "HSSC CET India Japan Summit",
    "HSSC CET Current Affairs 2026",
    "Haryana CET International Relations",
    "HSSC CET Group C GK",
    "HSSC CET Group D Current Affairs",
    "Haryana CET Important Summits 2026",

    // UPPSC AND OTHER EXAMS
    "UPPSC India Japan Summit 2026",
    "UPPSC International Relations",
    "UPPSC Defence Current Affairs",
    "UP Police Current Affairs",
    "Railway NTPC Important Summits",
    "RRB Group D Current Affairs",
    "Banking Current Affairs Summits 2026",
    "State PCS International Relations",
    "State PSC India Japan Summit",

    // AEO / PEOPLE ALSO ASK
    "When was the 16th India Japan Summit held",
    "Where was the 16th India Japan Summit held",
    "Who attended the India Japan Summit 2026",
    "What were the outcomes of India Japan Summit 2026",
    "What is the UNICORN Project",
    "What is the purpose of UNICORN",
    "What is the Free and Open Indo Pacific",
    "What is the MAHASAGAR Doctrine",
    "Which military exercises are conducted by India and Japan",
    "What is the India Japan Special Strategic Partnership",
    "Why is Japan important for India",
    "How does India cooperate with Japan in defence",

    // MCQ AND LEARNING SEARCHES
    "India Japan Summit 2026 MCQ",
    "India Japan Relations MCQ",
    "India Japan Summit Questions and Answers",
    "India Japan Defence Cooperation Quiz",
    "UNICORN Project MCQ",
    "India Japan Summit Bilingual Notes",
    "India Japan Current Affairs Questions",
    "International Relations Quiz 2026",
    "Free Current Affairs MCQ 2026",

    // BRAND
    "CET Test India Japan Summit",
    "CET Test International Relations",
    "CET Test Current Affairs",
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
      "16th India-Japan Summit 2026 | Key Highlights",

    description: PAGE_DESCRIPTION,

    locale: "en_IN",

    alternateLocale: ["hi_IN"],

    countryName: "India",
  },

  twitter: {
    card: "summary",

    title:
      "16th India-Japan Annual Summit 2026 | CET Test",

    description: PAGE_DESCRIPTION,
  },

  other: {
    "content-language": "en-IN, hi-IN",

    "geo.region": "IN",

    subject:
      "16th India-Japan Annual Summit 2026, International Relations and Defence Cooperation",

    "educational-level":
      "Competitive Examination Preparation",

    abstract:
      "Bilingual educational notes on the 16th India-Japan Annual Summit held in New Delhi in July 2026, including bilateral cooperation, UNICORN, Indo-Pacific strategy and practice questions.",

    "description:hi": PAGE_DESCRIPTION_HI,
  },
};

// ======================================================
// STRUCTURED DATA
// ======================================================

const organizationSchema = {
  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: "CET Test",

  url: SITE_URL,

  description:
    "Educational platform providing current affairs, general knowledge, study materials and mock tests for competitive examination preparation.",
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
  "@type": "WebPage",

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
    "@id": `${PAGE_URL}#article`,
  },

  about: [
    {
      "@type": "Event",
      name: "16th India-Japan Annual Summit",
    },
    {
      "@type": "Thing",
      name: "India-Japan Bilateral Relations",
    },
    {
      "@type": "Thing",
      name: "Defence Cooperation",
    },
    {
      "@type": "Thing",
      name: "Indo-Pacific Security",
    },
  ],
};

// ======================================================
// ARTICLE SCHEMA
// ======================================================

const articleSchema = {
  "@type": "Article",

  "@id": `${PAGE_URL}#article`,

  headline:
    "16th India-Japan Annual Summit 2026: Key Outcomes, UNICORN and MCQs",

  alternativeHeadline:
    "16वां भारत-जापान वार्षिक शिखर सम्मेलन 2026",

  description: PAGE_DESCRIPTION,

  inLanguage: ["en-IN", "hi-IN"],

  url: PAGE_URL,

  mainEntityOfPage: {
    "@id": `${PAGE_URL}#webpage`,
  },

  author: {
    "@id": `${SITE_URL}/#organization`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  isAccessibleForFree: true,

  articleSection: [
    "International Relations",
    "India-Japan Relations",
    "Defence Cooperation",
    "Indo-Pacific Strategy",
    "Current Affairs",
  ],

  keywords: [
    "16th India-Japan Summit",
    "UNICORN Project",
    "FOIP",
    "MAHASAGAR",
    "India-Japan Defence Cooperation",
    "International Relations 2026",
  ],

  about: [
    {
      "@type": "Event",
      "@id": `${PAGE_URL}#summit`,
    },
    {
      "@type": "Thing",
      name: "Unified Complex Radio Antenna",
    },
    {
      "@type": "Thing",
      name: "Free and Open Indo-Pacific",
    },
    {
      "@type": "Thing",
      name: "Next Generation Mobility Partnership",
    },
  ],

  citation: [
    "https://www.pmindia.gov.in/en/news_updates/16th-india-japan-annual-summit-joint-statement/",
    "https://www.mofa.go.jp/files/101054198.pdf",
  ],
};

// ======================================================
// EVENT SCHEMA
// ======================================================

const summitSchema = {
  "@type": "Event",

  "@id": `${PAGE_URL}#summit`,

  name: "16th India-Japan Annual Summit",

  description:
    "Bilateral summit between India and Japan held in New Delhi from 1 to 3 July 2026, with the leaders' meeting on 2 July.",

  startDate: "2026-07-01",

  endDate: "2026-07-03",

  eventStatus:
    "https://schema.org/EventScheduled",

  eventAttendanceMode:
    "https://schema.org/OfflineEventAttendanceMode",

  location: {
    "@type": "Place",

    name: "New Delhi",

    address: {
      "@type": "PostalAddress",

      addressLocality: "New Delhi",

      addressCountry: "IN",
    },
  },

  about: [
    {
      "@type": "Thing",
      name: "India-Japan Special Strategic and Global Partnership",
    },
    {
      "@type": "Thing",
      name: "Defence Technology Cooperation",
    },
    {
      "@type": "Thing",
      name: "Clean Energy Cooperation",
    },
    {
      "@type": "Thing",
      name: "Artificial Intelligence Cooperation",
    },
  ],

  organizer: [
    {
      "@type": "GovernmentOrganization",
      name: "Government of India",
    },
    {
      "@type": "GovernmentOrganization",
      name: "Government of Japan",
    },
  ],
};

// ======================================================
// EDUCATIONAL RESOURCE SCHEMA
// ======================================================

const learningResourceSchema = {
  "@type": "LearningResource",

  "@id": `${PAGE_URL}#learning-resource`,

  name:
    "16th India-Japan Summit 2026 – Bilingual Study Notes and MCQs",

  description:
    "Exam preparation notes covering the India-Japan Summit, UNICORN, bilateral defence cooperation, Indo-Pacific strategy and practice MCQs.",

  url: PAGE_URL,

  inLanguage: ["en", "hi"],

  isAccessibleForFree: true,

  learningResourceType: [
    "Study Notes",
    "Practice Questions",
    "Current Affairs",
  ],

  educationalUse: [
    "Exam Preparation",
    "Self Study",
    "Revision",
    "Assessment",
  ],

  educationalLevel:
    "Competitive Examination Preparation",

  interactivityType: "mixed",

  audience: {
    "@type": "EducationalAudience",

    educationalRole: "student",

    audienceType:
      "UKPSC, UKSSSC, UPSC, SSC, HSSC CET, UPPSC, Railway, Banking and State PCS aspirants",
  },

  about: {
    "@id": `${PAGE_URL}#summit`,
  },

  isPartOf: {
    "@id": `${PAGE_URL}#webpage`,
  },

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

// ======================================================
// BREADCRUMB SCHEMA
// ======================================================

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

      name: "16th India-Japan Summit 2026",

      item: PAGE_URL,
    },
  ],
};

// ======================================================
// COMBINED JSON-LD
// ======================================================

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    organizationSchema,
    websiteSchema,
    webpageSchema,
    articleSchema,
    summitSchema,
    learningResourceSchema,
    breadcrumbSchema,
  ],
};

// ======================================================
// NEXT.JS LAYOUT
// ======================================================

export default function IndiaJapanSummitLayout({
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