
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/coal-gasification";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Coal Gasification Scheme 2026: ₹37,500 Cr, MCQs | CET Test";

const DESCRIPTION =
  "Learn India's Coal/Lignite Gasification Scheme 2026, ₹37,500 crore outlay, 75 MT target, syngas and incentives. Free Hindi-English MCQs for UKPSC, UKSSSC and UPSC.";

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
    "Coal Gasification Scheme 2026",
    "Coal Lignite Gasification Scheme",
    "Surface Coal Gasification Scheme 2026",
    "Scheme for Promotion of Surface Coal Lignite Gasification Projects",
    "India Coal Gasification Scheme",
    "Coal Gasification India 2026",
    "Coal Gasification Current Affairs",
    "Coal Gasification Explained",

    // Scheme details
    "Coal Gasification 37500 Crore Scheme",
    "Coal Gasification Scheme 37500 crore",
    "Coal Gasification Cabinet Approval 2026",
    "Coal Gasification Scheme May 2026",
    "Coal Gasification Scheme Financial Incentive",
    "Coal Gasification 20 Percent Incentive",
    "Coal Gasification 75 Million Tonnes",
    "Coal Gasification 100 MT Target",
    "Coal Gasification Target 2030",
    "Coal Linkage 30 Years",
    "Coal Gasification Investment India",
    "Ministry of Coal Gasification Scheme",

    // Mission and technology
    "National Coal Gasification Mission",
    "National Coal Gasification Mission 2021",
    "NCGM India",
    "Coal Gasification Process",
    "Lignite Gasification Process",
    "Surface Coal Gasification",
    "Syngas Production",
    "What is Syngas",
    "Synthesis Gas CO H2",
    "Coal to Chemicals",
    "Coal to Methanol",
    "Coal to Ammonia",
    "Coal to Urea",
    "Synthetic Natural Gas",
    "Clean Coal Technology",
    "Coal Gasification Technology",
    "Coal Gasification Energy Security",
    "Import Substitution India",

    // UKPSC keywords
    "Coal Gasification Scheme UKPSC",
    "Coal Gasification 2026 UKPSC",
    "Coal Gasification UKPSC Notes",
    "Coal Gasification UKPSC MCQ",
    "Coal Gasification UKPSC Current Affairs",
    "Coal Gasification UKPSC Prelims",
    "UKPSC Science and Technology",
    "UKPSC Economy Current Affairs",
    "UKPSC Energy Policy Notes",
    "UKPSC Government Schemes 2026",
    "UKPSC Environment Current Affairs",

    // UKSSSC keywords
    "Coal Gasification Scheme UKSSSC",
    "Coal Gasification 2026 UKSSSC",
    "Coal Gasification UKSSSC Notes",
    "Coal Gasification UKSSSC MCQ",
    "Coal Gasification UKSSSC Current Affairs",
    "UKSSSC Science GK",
    "UKSSSC Energy Current Affairs",
    "UKSSSC Government Schemes",
    "UKSSSC General Knowledge 2026",
    "UKSSSC Current Affairs Questions",
    "Uttarakhand Government Exam Current Affairs",

    // Other competitive examinations
    "Coal Gasification Scheme UPSC",
    "Coal Gasification Scheme SSC",
    "Coal Gasification Scheme HSSC CET",
    "Coal Gasification Scheme Railway Exams",
    "Coal Gasification Scheme State PSC",
    "Coal Gasification MCQ",
    "Coal Gasification Questions and Answers",
    "Energy Current Affairs 2026",
    "Government Schemes 2026",
    "Indian Economy Current Affairs",
    "Science Technology Current Affairs 2026",
    "Coal Sector Reforms UPSC",
    "Energy Security UPSC",
    "Coal Gasification Notes for Competitive Exams",

    // WH questions / People Also Ask
    "what is coal gasification",
    "what is the coal gasification scheme 2026",
    "when was coal gasification scheme approved",
    "who launched coal gasification scheme",
    "what is the budget of coal gasification scheme",
    "what is the coal gasification target by 2030",
    "what is the purpose of coal gasification",
    "how does coal gasification work",
    "what is syngas made of",
    "what is the difference between coal combustion and gasification",
    "why is coal gasification important for India",
    "how does coal gasification reduce import dependence",
    "what are the products of coal gasification",
    "which ministry implements coal gasification scheme",
    "what is the National Coal Gasification Mission",

    // Hindi primary keywords
    "कोयला गैसीकरण योजना 2026",
    "कोयला लिग्नाइट गैसीकरण योजना",
    "सतही कोयला गैसीकरण योजना",
    "कोयला गैसीकरण क्या है",
    "कोयला गैसीकरण योजना के उद्देश्य",
    "कोयला गैसीकरण योजना का बजट",
    "37500 करोड़ कोयला गैसीकरण योजना",
    "राष्ट्रीय कोयला गैसीकरण मिशन",
    "कोयला गैसीकरण लक्ष्य 2030",
    "सिनगैस क्या है",
    "सिनगैस का उत्पादन",
    "कोयला गैसीकरण प्रक्रिया",
    "भारत की ऊर्जा सुरक्षा",
    "स्वच्छ कोयला प्रौद्योगिकी",
    "कोयला गैसीकरण करंट अफेयर्स",
    "कोयला गैसीकरण सामान्य ज्ञान",
    "कोयला गैसीकरण प्रश्न उत्तर",
    "कोयला गैसीकरण MCQ",

    // Hindi UKPSC / UKSSSC searches
    "कोयला गैसीकरण योजना UKPSC",
    "कोयला गैसीकरण योजना UKSSSC",
    "UKPSC करंट अफेयर्स 2026",
    "UKSSSC करंट अफेयर्स 2026",
    "UKPSC सरकारी योजनाएं",
    "UKSSSC सरकारी योजनाएं",
    "UKPSC विज्ञान और प्रौद्योगिकी",
    "UKSSSC विज्ञान सामान्य ज्ञान",
    "उत्तराखंड लोक सेवा आयोग करंट अफेयर्स",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग करंट अफेयर्स",
    "UKPSC ऊर्जा नीति प्रश्न",
    "UKSSSC ऊर्जा योजना प्रश्न",
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
        "Coal/Lignite Gasification Scheme 2026: Budget, Objectives, Targets and MCQs",

      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Indian Economy",
        "Energy",
        "Science and Technology",
        "Government Schemes",
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
          "@type": "GovernmentService",
          name: "Scheme for Promotion of Surface Coal/Lignite Gasification Projects",
          description:
            "Government of India scheme approved in May 2026 with an outlay of ₹37,500 crore to promote surface coal and lignite gasification projects.",
          provider: {
            "@type": "GovernmentOrganization",
            name: "Ministry of Coal, Government of India",
          },
        },
        {
          "@type": "Thing",
          name: "Coal Gasification",
        },
        {
          "@type": "Thing",
          name: "Lignite Gasification",
        },
        {
          "@type": "Thing",
          name: "National Coal Gasification Mission",
        },
        {
          "@type": "Thing",
          name: "Energy Security",
        },
      ],

      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "Ministry of Coal",
          url: "https://coal.nic.in/",
        },
        {
          "@type": "GovernmentOrganization",
          name: "Government of India",
          url: "https://www.india.gov.in/",
        },
        {
          "@type": "Thing",
          name: "Synthesis Gas",
          alternateName: "Syngas",
        },
        {
          "@type": "Thing",
          name: "Carbon Monoxide",
        },
        {
          "@type": "Thing",
          name: "Hydrogen",
        },
        {
          "@type": "Thing",
          name: "Methanol",
        },
        {
          "@type": "Thing",
          name: "Ammonia",
        },
        {
          "@type": "Thing",
          name: "Urea",
        },
        {
          "@type": "Thing",
          name: "Synthetic Natural Gas",
        },
        {
          "@type": "Thing",
          name: "Import Substitution",
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
          name: "Coal/Lignite Gasification Scheme",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function CoalGasificationLayout({
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
