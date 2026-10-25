
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";

const PAGE_PATH =
  "/current-affairs/by-topic/biodiversity-project";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "MoEFCC–NBA Biodiversity Project 2025–2030: Notes & MCQs | CET Test";

const DESCRIPTION =
  "Learn about the MoEFCC–NBA 5-year biodiversity project (2025–2030), GEF–UNDP funding, Tamil Nadu, Meghalaya, ABS and conservation goals. Free Hindi-English MCQs.";

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
    "MoEFCC NBA Biodiversity Project",
    "MoEFCC NBA 5 Year Biodiversity Project",
    "Biodiversity Project 2025-2030",
    "India Biodiversity Conservation Project",
    "National Biodiversity Authority Project",
    "Biodiversity Conservation India",
    "Biodiversity Current Affairs 2026",

    // Project-specific keywords
    "Strengthening Institutional Capacities for Securing Biodiversity Conservation Commitments",
    "MoEFCC biodiversity project",
    "NBA biodiversity project",
    "GEF UNDP biodiversity project",
    "Biodiversity conservation Tamil Nadu",
    "Biodiversity conservation Meghalaya",
    "Sathyamangalam biodiversity project",
    "Garo Hills biodiversity project",
    "UNDP India biodiversity",
    "GEF biodiversity grant India",

    // Organizations
    "Ministry of Environment Forest and Climate Change",
    "MoEFCC",
    "National Biodiversity Authority",
    "NBA India",
    "Global Environment Facility",
    "GEF",
    "United Nations Development Programme",
    "UNDP",
    "Convention on Biological Diversity",
    "CBD",

    // Important concepts
    "Biological Diversity Act 2002",
    "Biodiversity governance",
    "Biodiversity Management Committees",
    "Biodiversity conservation policies India",
    "Access and Benefit Sharing",
    "ABS biodiversity",
    "Nagoya Protocol 2010",
    "Cartagena Protocol 2000",
    "Kunming Montreal Global Biodiversity Framework",
    "KMGBF 2022",
    "30x30 biodiversity target",
    "National Biodiversity Strategy and Action Plan",
    "NBSAP India",
    "Gram Panchayat Development Plan biodiversity",

    // Protected areas
    "Mudumalai Tiger Reserve",
    "Sathyamangalam Tiger Reserve",
    "Nokrek Biosphere Reserve",
    "Balpakram National Park",
    "Siju Wildlife Sanctuary",

    // Competitive exam keywords
    "Biodiversity UPSC notes",
    "Environment and Ecology UPSC",
    "Biodiversity SSC GK",
    "Biodiversity HSSC CET",
    "MoEFCC NBA project MCQ",
    "GEF UNDP MCQ",
    "Biodiversity current affairs questions",
    "Environment current affairs 2026",
    "Environmental science general knowledge",
    "Biodiversity conservation MCQ",
    "UPSC Prelims biodiversity",
    "Environment and Ecology competitive exams",

    // People Also Ask / WH questions
    "what is the MoEFCC NBA biodiversity project",
    "when was the five year biodiversity project launched",
    "what is the objective of the biodiversity project",
    "which states are covered under the biodiversity project",
    "who funds the MoEFCC NBA biodiversity project",
    "what is the role of UNDP in biodiversity conservation",
    "what is the Global Environment Facility",
    "when was GEF established",
    "what is the National Biodiversity Authority",
    "what is Access and Benefit Sharing",
    "what is the 30x30 biodiversity target",
    "what is the Nagoya Protocol",
    "how does biodiversity conservation benefit communities",
    "why is biodiversity conservation important in India",

    // Hindi SEO keywords
    "जैव विविधता परियोजना 2025-2030",
    "MoEFCC NBA जैव विविधता परियोजना",
    "पांच वर्षीय जैव विविधता परियोजना",
    "भारत में जैव विविधता संरक्षण",
    "राष्ट्रीय जैव विविधता प्राधिकरण",
    "जैव विविधता संरक्षण क्या है",
    "जैव विविधता परियोजना के उद्देश्य",
    "जैव विविधता करंट अफेयर्स 2026",
    "पर्यावरण और पारिस्थितिकी सामान्य ज्ञान",
    "जैव विविधता अधिनियम 2002",
    "वैश्विक पर्यावरण सुविधा",
    "जैव विविधता 30x30 लक्ष्य",
    "नागोया प्रोटोकॉल",
    "जैव विविधता प्रश्न उत्तर",
    "जैव विविधता MCQ",
    "पर्यावरण UPSC नोट्स",
    "जैव विविधता HSSC CET",
    "तमिलनाडु और मेघालय जैव विविधता परियोजना",
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
        "MoEFCC–NBA Five-Year Biodiversity Project 2025–2030: Objectives, Funding, States and MCQs",
      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],
      articleSection: [
        "Current Affairs",
        "Environment and Ecology",
        "Biodiversity Conservation",
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
          name: "MoEFCC–NBA Five-Year Biodiversity Project",
          description:
            "A biodiversity conservation initiative focused on institutional capacity, local governance and community-based conservation.",
        },
        {
          "@type": "Thing",
          name: "Biodiversity Conservation",
        },
        {
          "@type": "Thing",
          name: "Access and Benefit Sharing",
        },
        {
          "@type": "Thing",
          name: "Environmental Governance",
        },
      ],

      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "Ministry of Environment, Forest and Climate Change",
          url: "https://moef.gov.in/",
        },
        {
          "@type": "GovernmentOrganization",
          name: "National Biodiversity Authority",
          url: "https://nbaindia.org/",
        },
        {
          "@type": "Organization",
          name: "Global Environment Facility",
          url: "https://www.thegef.org/",
        },
        {
          "@type": "Organization",
          name: "United Nations Development Programme",
          url: "https://www.undp.org/",
        },
        {
          "@type": "Thing",
          name: "Biological Diversity Act, 2002",
        },
        {
          "@type": "Thing",
          name: "Kunming-Montreal Global Biodiversity Framework",
        },
        {
          "@type": "Thing",
          name: "Nagoya Protocol",
        },
        {
          "@type": "Thing",
          name: "30 by 30 Biodiversity Target",
        },
        {
          "@type": "Place",
          name: "Tamil Nadu, India",
        },
        {
          "@type": "Place",
          name: "Meghalaya, India",
        },
        {
          "@type": "Place",
          name: "Sathyamangalam Tiger Reserve",
        },
        {
          "@type": "Place",
          name: "Garo Hills",
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
          name: "MoEFCC–NBA Biodiversity Project",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function BiodiversityProjectLayout({
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
