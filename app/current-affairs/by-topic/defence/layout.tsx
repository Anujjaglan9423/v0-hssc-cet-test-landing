
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://cettest.site";
const PAGE_PATH = "/current-affairs/by-topic/defence";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE =
  "Defence Current Affairs 2026: Notes, GK & MCQs | CET Test";

const DESCRIPTION =
  "Study Defence Current Affairs 2026: DRDO missiles, Indian Navy ships, military exercises, defence policies and technology. Free Hindi-English notes and MCQs for UKPSC, UKSSSC, UPSC, SSC, NDA and CDS.";

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
    // Primary SEO
    "Defence Current Affairs 2026",
    "Defense Current Affairs 2026",
    "Defence Current Affairs India",
    "Indian Defence Current Affairs",
    "Defence GK 2026",
    "Important Defence News 2026",
    "Defence Current Affairs Notes",
    "Defence Current Affairs Questions",
    "Defence Current Affairs MCQ",
    "Defence Current Affairs Hindi English",

    // Indian armed forces
    "Indian Army Current Affairs 2026",
    "Indian Navy Current Affairs 2026",
    "Indian Air Force Current Affairs 2026",
    "Indian Armed Forces GK",
    "Indian Military Modernization",
    "Indian Defence Capabilities",
    "India Defence Preparedness",
    "Indian Military Technology",
    "National Security India",
    "Defence Self Reliance India",

    // DRDO and defence technology
    "DRDO Current Affairs 2026",
    "DRDO Missile Systems",
    "Indian Defence Research",
    "Indigenous Defence Technology",
    "Make in India Defence",
    "Atmanirbhar Bharat Defence",
    "Air Defence Systems India",
    "Advanced Defence Technology India",

    // Missile systems
    "Astra Mk-1 Missile",
    "Astra Missile India",
    "Kusha Missile System",
    "Project Kusha",
    "Indian Air Defence Missile",
    "Surface to Air Missile India",
    "Beyond Visual Range Missile",
    "FGM-148 Javelin",
    "Javelin Anti Tank Guided Missile",
    "Indian Missile Systems 2026",
    "Missiles of India GK",

    // Netra and surveillance
    "Netra AEWC System",
    "Netra AEW&C",
    "Netra Surveillance Aircraft",
    "Indian Airborne Early Warning System",
    "DRDO Netra",
    "Centre for Airborne Systems",
    "CABS DRDO",
    "Embraer EMB 145I",
    "Indian Air Force Surveillance",
    "Airborne Early Warning and Control",

    // Indian Navy
    "Indian Navy Ships 2026",
    "INS Nipun",
    "INS Sanshodhak",
    "INS Malvan",
    "INS Aridaman",
    "INS Agray",
    "INS Taragiri",
    "INS Mahendragiri",
    "Indian Naval Warships",
    "Indian Navy Submarines",
    "Indian Navy Indigenous Ships",
    "Next Generation Offshore Patrol Vessel",
    "Shachi Offshore Patrol Vessel",
    "Indian Naval Capabilities",

    // Defence policy and diplomacy
    "VIJAY Roadmap",
    "RAKSHA Defence Diplomacy Roadmap",
    "PRAHAAR Counter Terrorism Policy",
    "India Defence Diplomacy",
    "India Counter Terrorism Policy",
    "Defence Reforms India",
    "Defence Cooperation India",
    "India Strategic Partnerships",
    "Indian Defence Policy 2026",

    // Military exercises
    "Defence Exercises 2026",
    "Military Exercises India 2026",
    "Joint Military Exercises 2026",
    "Indian Navy US Navy Exercise 2026",
    "India USA Defence Exercise",
    "Explosive Ordnance Disposal Exercise",
    "Colombo Security Conclave Exercise",
    "Colombo Security Conclave Table Top Exercise",
    "Important Military Exercises for Exams",
    "Bilateral Military Exercises India",
    "Multilateral Military Exercises India",

    // UKPSC exam keywords
    "Defence Current Affairs UKPSC 2026",
    "Defence GK UKPSC",
    "DRDO Current Affairs UKPSC",
    "Indian Army GK UKPSC",
    "Indian Navy GK UKPSC",
    "Military Exercises UKPSC",
    "Missile Systems UKPSC",
    "UKPSC Defence Notes",
    "UKPSC Defence MCQ",
    "UKPSC National Security Current Affairs",
    "UKPSC Science and Technology 2026",
    "UKPSC Prelims Defence Questions",
    "UKPSC Current Affairs 2026",

    // UKSSSC exam keywords
    "Defence Current Affairs UKSSSC 2026",
    "Defence GK UKSSSC",
    "DRDO Current Affairs UKSSSC",
    "Indian Army GK UKSSSC",
    "Indian Navy GK UKSSSC",
    "Military Exercises UKSSSC",
    "Missiles of India UKSSSC",
    "UKSSSC Defence Notes",
    "UKSSSC Defence MCQ",
    "UKSSSC General Knowledge Defence",
    "UKSSSC Current Affairs 2026",
    "UKSSSC Science GK",
    "UKSSSC National Security Questions",

    // Other competitive examinations
    "Defence Current Affairs UPSC",
    "Defence Current Affairs SSC",
    "Defence Current Affairs HSSC CET",
    "Defence Current Affairs NDA",
    "Defence Current Affairs CDS",
    "Defence Current Affairs AFCAT",
    "Defence Current Affairs CAPF",
    "Defence Current Affairs Railway Exams",
    "Defence Current Affairs State PSC",
    "Defence GK for Competitive Exams",
    "Defence One Liner Questions 2026",
    "Indian Defence Quiz 2026",
    "NDA Defence GK",
    "CDS Military Current Affairs",
    "AFCAT Defence Awareness",

    // People Also Ask / WH searches
    "what are the important defence current affairs of 2026",
    "what is Netra AEWC system",
    "who developed Netra AEWC",
    "what is Astra Mk-1 missile",
    "what is Kusha missile system",
    "which missiles are developed by DRDO",
    "what are the new Indian Navy ships in 2026",
    "what is INS Aridaman",
    "what is the VIJAY Roadmap",
    "what is RAKSHA defence diplomacy roadmap",
    "what is PRAHAAR counter terrorism policy",
    "which military exercises were held in 2026",
    "what are the important defence exercises for UPSC",
    "how does India develop indigenous defence technology",
    "why is defence modernization important for India",

    // Hindi primary
    "रक्षा करंट अफेयर्स 2026",
    "महत्वपूर्ण रक्षा करंट अफेयर्स",
    "भारत रक्षा समाचार 2026",
    "भारतीय सेना करंट अफेयर्स",
    "भारतीय नौसेना करंट अफेयर्स",
    "भारतीय वायुसेना करंट अफेयर्स",
    "रक्षा सामान्य ज्ञान 2026",
    "रक्षा प्रश्न उत्तर",
    "रक्षा करंट अफेयर्स MCQ",
    "भारत की मिसाइल प्रणाली",
    "DRDO मिसाइल",
    "अस्त्र मिसाइल",
    "कुश मिसाइल प्रणाली",
    "नेत्र एईडब्ल्यू एंड सी",
    "भारत के युद्धपोत",
    "भारतीय नौसेना के जहाज",
    "सैन्य अभ्यास 2026",
    "भारत के संयुक्त सैन्य अभ्यास",
    "भारत की रक्षा नीति",
    "रक्षा आत्मनिर्भरता",
    "राष्ट्रीय सुरक्षा भारत",

    // Hindi UKPSC / UKSSSC
    "रक्षा करंट अफेयर्स UKPSC",
    "रक्षा करंट अफेयर्स UKSSSC",
    "UKPSC रक्षा सामान्य ज्ञान",
    "UKSSSC रक्षा सामान्य ज्ञान",
    "UKPSC सैन्य अभ्यास",
    "UKSSSC सैन्य अभ्यास",
    "UKPSC मिसाइल प्रश्न",
    "UKSSSC मिसाइल प्रश्न",
    "UKPSC भारतीय सेना",
    "UKSSSC भारतीय सेना",
    "उत्तराखंड लोक सेवा आयोग रक्षा प्रश्न",
    "उत्तराखंड अधीनस्थ सेवा चयन आयोग रक्षा प्रश्न",
    "UKPSC करंट अफेयर्स 2026",
    "UKSSSC करंट अफेयर्स 2026",
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
        "Important Defence Current Affairs 2026: DRDO, Missiles, Naval Ships, Military Exercises and MCQs",

      description: DESCRIPTION,
      inLanguage: ["en-IN", "hi-IN"],

      articleSection: [
        "Current Affairs",
        "Defence",
        "National Security",
        "Science and Technology",
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
          name: "Indian Defence Current Affairs 2026",
          description:
            "Study notes on India's armed forces, defence technology, missile systems, naval vessels, security policy and military exercises.",
        },
        {
          "@type": "Thing",
          name: "Indian Defence Technology",
        },
        {
          "@type": "Thing",
          name: "Military Exercises",
        },
        {
          "@type": "Thing",
          name: "National Security",
        },
      ],

      mentions: [
        {
          "@type": "GovernmentOrganization",
          name: "Ministry of Defence, Government of India",
          url: "https://mod.gov.in/",
        },
        {
          "@type": "GovernmentOrganization",
          name: "Defence Research and Development Organisation",
          alternateName: "DRDO",
          url: "https://www.drdo.gov.in/",
        },
        {
          "@type": "Organization",
          name: "Indian Army",
        },
        {
          "@type": "Organization",
          name: "Indian Navy",
        },
        {
          "@type": "Organization",
          name: "Indian Air Force",
        },
        { "@type": "Thing", name: "Netra AEW&C System" },
        { "@type": "Thing", name: "Astra Mk-1 Missile" },
        { "@type": "Thing", name: "Kusha Missile System" },
        { "@type": "Thing", name: "VIJAY Roadmap" },
        { "@type": "Thing", name: "RAKSHA Defence Diplomacy Roadmap" },
        { "@type": "Thing", name: "PRAHAAR Counter-Terrorism Policy" },
        { "@type": "Thing", name: "FGM-148 Javelin" },
        { "@type": "Thing", name: "INS Nipun" },
        { "@type": "Thing", name: "INS Sanshodhak" },
        { "@type": "Thing", name: "INS Malvan" },
        { "@type": "Thing", name: "INS Aridaman" },
        { "@type": "Thing", name: "INS Agray" },
        { "@type": "Thing", name: "INS Taragiri" },
        { "@type": "Thing", name: "INS Mahendragiri" },
        {
          "@type": "Thing",
          name: "Colombo Security Conclave",
        },
        {
          "@type": "Thing",
          name: "India-US Naval Cooperation",
        },
        {
          "@type": "Thing",
          name: "Indian Military Modernization",
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
          name: "Defence Current Affairs 2026",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function DefenceCurrentAffairsLayout({
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
