// app/current-affairs/by-topic/layout.tsx
import type { Metadata } from "next"
import Script from "next/script"

/* ============================================================
   METADATA — SEO / OG / Twitter / hreflang
   ============================================================ */
export const metadata: Metadata = {
  title:
    "Current Affairs by Topic 2026 | Bilingual Study Notes & MCQs for Competitive Exams",
  description:
    "Topic-wise current affairs 2026 in English & Hindi. BRICS Summit, SCO, Budget, NFHS-6, Artemis II, CAPF Act, FCRA and more. Exam-oriented notes with practice MCQs for UPSC, SSC, Banking, HSSC, UKSSSC.",
  keywords: [
    "current affairs by topic 2026",
    "topic wise current affairs",
    "BRICS Summit 2026 current affairs",
    "SCO Summit 2026 MCQ",
    "NFHS-6 current affairs",
    "Artemis II mission current affairs",
    "CAPF Act 2026 current affairs",
    "current affairs in Hindi topic wise",
    "विषयवार करेंट अफेयर्स 2026",
    "current affairs for HSSC CET",
    "current affairs for UKSSSC",
    "bilingual current affairs notes",
    "current affairs with MCQs",
  ],
  authors: [{ name: "CET TEST" }],
  creator: "CET TEST",
  publisher: "CET TEST",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Current Affairs by Topic 2026 | Bilingual Notes & MCQs",
    description:
      "41 topic-wise current affairs digests with bilingual content and practice MCQs. BRICS, SCO, Budget, Health, Environment and more.",
    url: "https://cettest.site/current-affairs/by-topic",
    siteName: "CET TEST",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://cettest.site/og-current-affairs-topic.jpg",
        width: 1200,
        height: 630,
        alt: "Current Affairs by Topic 2026 - Bilingual Study Notes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Affairs by Topic 2026 | Bilingual Notes & MCQs",
    description:
      "Topic-wise current affairs with MCQs. BRICS, SCO, Budget, Health, Environment. English & Hindi.",
    images: ["https://cettest.site/og-current-affairs-topic.jpg"],
    creator: "@cettest",
    site: "@cettest",
  },
  alternates: {
    canonical: "https://cettest.site/current-affairs/by-topic",
    languages: {
      en: "https://cettest.site/current-affairs/by-topic",
    },
  },
  category: "current-affairs",
}

/* ============================================================
   TOPIC DATA
   ============================================================ */
const TOPICS = [
  { slug: "brics-summit-2026", name: "18th BRICS Summit 2026 / 18वाँ BRICS शिखर सम्मेलन 2026" },
  { slug: "sco-summit-2026", name: "26th SCO Summit 2026 (Bishkek) / 26वाँ SCO शिखर सम्मेलन 2026 (बिश्केक)" },
  { slug: "nepal-flash-flood-2026", name: "Nepal Flash Flood 2026 / नेपाल फ्लैश फ्लड 2026" },
  { slug: "nfhs-6", name: "NFHS-6 (2023–24) / राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण-6" },
  { slug: "capf-act-2026", name: "CAPF Act, 2026 / CAPF अधिनियम, 2026" },
  { slug: "artemis-ii", name: "NASA Artemis II Mission / नासा आर्टेमिस II मिशन" },
  { slug: "nato-withdrawal", name: "US Withdrawal from NATO? / नाटो से अमेरिका की वापसी?" },
  { slug: "ircc-india", name: "India's Leadership in IRCCs / IRCCs में भारत का नेतृत्व" },
  { slug: "fcra-amendment-2026", name: "FCRA Amendment Bill, 2026 / FCRA संशोधन विधेयक, 2026" },
  { slug: "constitution-131st-amendment", name: "Constitution (131st Amendment) Bill, 2026 / संविधान (131वां संशोधन) विधेयक, 2026" },
  { slug: "posh-act", name: "PoSH Act, 2013 / PoSH अधिनियम, 2013" },
  { slug: "adi-shankaracharya", name: "Adi Shankaracharya & Advaita Vedanta / आदि शंकराचार्य और अद्वैत वेदांत" },
  { slug: "super-el-nino", name: "Super El Niño / सुपर अल नीनो" },
  { slug: "uae-exit-opec", name: "UAE Exits OPEC and OPEC+ / UAE का OPEC और OPEC+ से बाहर होना" },
  { slug: "ncrb-2024", name: "NCRB Crime in India & ADSI 2024 / NCRB अपराध और ADSI रिपोर्ट 2024" },
  { slug: "biodiversity-project", name: "MoEFCC–NBA Biodiversity Project / MoEFCC–NBA जैव विविधता परियोजना" },
  { slug: "ganga-expressway", name: "Ganga Expressway Project / गंगा एक्सप्रेसवे परियोजना" },
  { slug: "india-ndc-2035", name: "India's Updated NDCs 2031–2035 / भारत के संशोधित NDCs 2031–2035" },
  { slug: "abraham-accords", name: "The Abraham Accords / अब्राहम अकॉर्ड्स" },
  { slug: "ebola-outbreak-2026", name: "Ebola Outbreak — PHEIC / इबोला प्रकोप — PHEIC" },
  { slug: "semiconductor-roadmap", name: "Semiconductor Industry Roadmap / सेमीकंडक्टर इंडस्ट्री रोडमैप" },
  { slug: "srs-2024", name: "SRS Statistical Report 2024 / SRS सांख्यिकीय रिपोर्ट 2024" },
  { slug: "india-uae-agreements", name: "India–UAE Agreements 2026 / भारत–UAE समझौते 2026" },
  { slug: "india-nz-fta", name: "India–New Zealand FTA / भारत–न्यूज़ीलैंड FTA" },
  { slug: "seat-mission", name: "SEHAT Mission / SEHAT मिशन" },
  { slug: "vb-ram-g", name: "VB-G RAM G Act 2025 / VB-G RAM G अधिनियम 2025" },
  { slug: "somnath-amrut-parv", name: "Somnath Amrut Parv / सोमनाथ अमृत पर्व" },
  { slug: "coal-gasification", name: "Coal Gasification Scheme / कोयला गैसीकरण योजना" },
  { slug: "unpaid-domestic-labour", name: "Unpaid Domestic Labour / अवैतनिक घरेलू श्रम" },
  { slug: "g7-summit-2026", name: "G7 Summit 2026 (Évian) / G7 शिखर सम्मेलन 2026 (एवियन)" },
  { slug: "relos", name: "India–Russia RELOS / भारत–रूस RELOS" },
  { slug: "kishau-dam", name: "Kishau Multipurpose Dam / किशाउ बहुउद्देशीय बांध" },
  { slug: "project-ganga", name: "Project GANGA (UP) / प्रोजेक्ट गंगा (UP)" },
  { slug: "india-japan-summit", name: "16th India–Japan Summit / 16वां भारत-जापान शिखर सम्मेलन" },
  { slug: "sd-report-2026", name: "UN SD Report 2026 / UN सतत विकास रिपोर्ट 2026" },
  { slug: "isp-index", name: "Index of Services Production / सेवा उत्पादन सूचकांक" },
  { slug: "india-unsc-2028", name: "India UNSC 2028–29 & SHANTI / भारत UNSC 2028–29 & SHANTI" },
  { slug: "national-honour-amendment-2026", name: "Prevention of Insults to National Honour (Amendment) Bill, 2026 / राष्ट्रीय सम्मान के अपमान की रोकथाम (संशोधन) विधेयक, 2026" },
  { slug: "sarnath-unesco", name: "Sarnath — India's 45th UNESCO Site / सारनाथ — भारत का 45वां UNESCO स्थल" },
  { slug: "public-exams-amendment-2026", name: "Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026 / सार्वजनिक परीक्षा (अनुचित साधनों की रोकथाम) संशोधन विधेयक, 2026" },
  { slug: "tribunals-reforms-bill-2026", name: "Tribunals Reforms Bill, 2026 / न्यायाधिकरण सुधार विधेयक, 2026" },
]

const BASE_URL = "https://cettest.site"
const BASE_PATH = `${BASE_URL}/current-affairs/by-topic`

/* ============================================================
   LAYOUT
   ============================================================ */
export default function ByTopicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /* ---------- BreadcrumbList ---------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Current Affairs", item: `${BASE_URL}/current-affairs` },
      { "@type": "ListItem", position: 3, name: "By Topic", item: BASE_PATH },
    ],
  }

  /* ---------- ItemList ---------- */
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Current Affairs by Topic 2026",
    description:
      "Topic-wise current affairs digests with bilingual study notes and practice MCQs for UPSC, SSC, Banking, HSSC, UKSSSC and other competitive exams.",
    numberOfItems: TOPICS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    inLanguage: "en",
    itemListElement: TOPICS.map((topic, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: topic.name,
      url: `${BASE_PATH}/${topic.slug}`,
    })),
  }

  /* ---------- CollectionPage ---------- */
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Current Affairs by Topic 2026",
    description:
      "Bilingual topic-wise current affairs study notes with practice MCQs covering international relations, polity, economy, environment, science and technology.",
    url: BASE_PATH,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "CET TEST", url: BASE_URL },
    about: {
      "@type": "Thing",
      name: "Current Affairs",
      description:
        "Topic-wise compilation of important national and international events for competitive exam preparation",
    },
    audience: {
      "@type": "Audience",
      name: "Competitive Exam Aspirants",
      audienceType: "UPSC, SSC, Banking, Railways, State Government Exam Candidates",
      geographicArea: "India",
    },
    dateModified: new Date().toISOString(),
  }

  return (
    <>
      {/* ==================== ANALYTICS: GA4 ==================== */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W5ZGFTDCTP"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W5ZGFTDCTP', {
            page_path: '/current-affairs/by-topic',
            content_group: 'Current Affairs Topic Listing'
          });
        `}
      </Script>

      {/* ==================== BREADCRUMB SCHEMA ==================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ==================== ITEMLIST SCHEMA ==================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ==================== COLLECTIONPAGE SCHEMA ==================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      {/* ==================== META HINTS ==================== */}
      <meta name="theme-color" content="#4f46e5" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English, Hindi" />

      {/* ==================== PRINT STYLES ==================== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              .no-print { display: none !important; }
              body { background: white; color: black; }
              a { text-decoration: none; color: black; }
            }
          `,
        }}
      />

      {/* ==================== VISIBLE BREADCRUMB UI ==================== */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-2"
      >
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <a href={BASE_URL} className="hover:text-primary transition-colors">
              Home
            </a>
          </li>
          <li aria-hidden="true" className="text-muted-foreground/50">/</li>
          <li>
            <a
              href={`${BASE_URL}/current-affairs`}
              className="hover:text-primary transition-colors"
            >
              Current Affairs
            </a>
          </li>
          <li aria-hidden="true" className="text-muted-foreground/50">/</li>
          <li aria-current="page" className="text-foreground font-medium">
            By Topic
          </li>
        </ol>
      </nav>

      {children}
    </>
  )
}