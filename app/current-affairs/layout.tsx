// app/current-affairs/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Monthly Current Affairs 2026 | Complete Bilingual Digest for Competitive Exams",
    description: "Download monthly current affairs 2026 PDF in English & Hindi. Complete coverage of national, international, economy, science & tech, environment news. Exam-oriented analysis for UPSC, SSC, Banking, HSSC, UKSSSC, and all state exams.",
    keywords: [
        "current affairs 2026",
        "monthly current affairs",
        "March 2026 current affairs",
        "April 2026 current affairs",
        "current affairs in Hindi",
        "मासिक करेंट अफेयर्स",
        "current affairs for competitive exams",
        "current affairs digest",
        "current affairs PDF download",
        "current affairs for UPSC",
        "current affairs for SSC",
        "current affairs for Banking",
        "current affairs for HSSC",
        "current affairs for UKSSSC",
        "current affairs for Haryana CET",
        "current affairs for Uttarakhand exams",
        "current affairs monthly compilation",
        "current affairs quiz",
        "important days 2026",
        "bilingual current affairs",
        "current affairs with static GK",
        "exam-oriented current affairs"
    ],
    authors: [{ name: "CET TEST" }, { name: "Chronos Intelligence Hub" }],
    creator: "CET TEST",
    publisher: "CET TEST",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
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
        title: "Monthly Current Affairs 2026 | Complete Bilingual Digest for Competitive Exams",
        description: "Free monthly current affairs digest in English & Hindi. Exam-oriented analysis, static GK, important days, and practice questions. Download PDF for UPSC, SSC, Banking, HSSC, UKSSSC.",
        url: "https://cettest.site/current-affairs",
        siteName: "CET TEST",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-current-affairs.jpg",
                width: 1200,
                height: 630,
                alt: "Monthly Current Affairs 2026 - Complete Bilingual Digest",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Monthly Current Affairs 2026 | Bilingual Digest",
        description: "12 months, 50+ topics, 80+ important days, 500+ practice questions. Available in English & Hindi. Free PDF downloads.",
        images: ["/og-current-affairs.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/current-affairs",
        languages: {
            'en': 'https://cettest.site/current-affairs',
            'hi': 'https://cettest.site/current-affairs?lang=hi',
        },
    },
    category: "current-affairs",
    classification: "Competitive Exam Current Affairs Resource - Bilingual",
}

export default function CurrentAffairsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().toLocaleString('default', { month: 'long' })

    return (
        <>
            {/* ==================== ORGANIZATION SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "CET TEST",
                        url: "https://cettest.site",
                        logo: "https://cettest.site/logo.png",
                        sameAs: [
                            "https://www.instagram.com/cet__test",
                            "https://t.me/cettest",
                        ],
                        description: "India's leading online exam preparation platform for competitive exams including UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and state-level exams.",
                        email: "support@cettest.site",
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "IN",
                        },
                    }),
                }}
            />

            {/* ==================== WEBSITE SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "CET TEST",
                        url: "https://cettest.site",
                        description: "Comprehensive exam preparation platform for government job aspirants",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: {
                                "@type": "EntryPoint",
                                urlTemplate: "https://cettest.site/search?q={search_term_string}",
                            },
                            "query-input": "required name=search_term_string",
                        },
                        inLanguage: ["en", "hi"],
                    }),
                }}
            />

            {/* ==================== BREADCRUMB SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://cettest.site",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Current Affairs",
                                item: "https://cettest.site/current-affairs",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== ITEM LIST SCHEMA - ALL MONTHS ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Monthly Current Affairs 2026",
                        description: "Complete collection of monthly current affairs digests for competitive exam preparation",
                        numberOfItems: 15,
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "January 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/january-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "February 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/february-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "March 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/march-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                name: "April 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/april-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 5,
                                name: "May 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/may-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 6,
                                name: "June 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/june-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 7,
                                name: "July 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/july-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 8,
                                name: "August 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/august-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 9,
                                name: "September 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/september-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 10,
                                name: "October 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/october-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 11,
                                name: "November 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/november-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 12,
                                name: "December 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/december-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 13,
                                name: "October 2025 Current Affairs",
                                url: "https://cettest.site/current-affairs/october-2025",
                            },
                            {
                                "@type": "ListItem",
                                position: 14,
                                name: "November 2025 Current Affairs",
                                url: "https://cettest.site/current-affairs/november-2025",
                            },
                            {
                                "@type": "ListItem",
                                position: 15,
                                name: "December 2025 Current Affairs",
                                url: "https://cettest.site/current-affairs/december-2025",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== ITEM LIST SCHEMA - ALL TOPIC-WISE CURRENT AFFAIRS ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Topic-Wise Current Affairs 2026",
                        description: "Topic-wise bilingual current affairs notes and practice questions for competitive examinations.",
                        numberOfItems: 54,
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "18th BRICS Summit 2026", alternateName: "18वाँ BRICS शिखर सम्मेलन 2026", url: "https://cettest.site/current-affairs/by-topic/brics-summit-2026" },
                            { "@type": "ListItem", position: 2, name: "26th SCO Summit 2026 (Bishkek)", alternateName: "26वाँ SCO शिखर सम्मेलन 2026 (बिश्केक)", url: "https://cettest.site/current-affairs/by-topic/sco-summit-2026" },
                            { "@type": "ListItem", position: 3, name: "Nepal Flash Flood 2026", alternateName: "नेपाल फ्लैश फ्लड 2026", url: "https://cettest.site/current-affairs/by-topic/nepal-flash-flood-2026" },
                            { "@type": "ListItem", position: 4, name: "NFHS-6 (2023–24)", alternateName: "राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण-6", url: "https://cettest.site/current-affairs/by-topic/nfhs-6" },
                            { "@type": "ListItem", position: 5, name: "CAPF Act, 2026", alternateName: "CAPF अधिनियम, 2026", url: "https://cettest.site/current-affairs/by-topic/capf-act-2026" },
                            { "@type": "ListItem", position: 6, name: "NASA Artemis II Mission", alternateName: "नासा आर्टेमिस II मिशन", url: "https://cettest.site/current-affairs/by-topic/artemis-ii" },
                            { "@type": "ListItem", position: 7, name: "US Withdrawal from NATO?", alternateName: "नाटो से अमेरिका की वापसी?", url: "https://cettest.site/current-affairs/by-topic/nato-withdrawal" },
                            { "@type": "ListItem", position: 8, name: "India's Leadership in IRCCs", alternateName: "IRCCs में भारत का नेतृत्व", url: "https://cettest.site/current-affairs/by-topic/ircc-india" },
                            { "@type": "ListItem", position: 9, name: "FCRA Amendment Bill, 2026", alternateName: "FCRA संशोधन विधेयक, 2026", url: "https://cettest.site/current-affairs/by-topic/fcra-amendment-2026" },
                            { "@type": "ListItem", position: 10, name: "Constitution (131st Amendment) Bill, 2026", alternateName: "संविधान (131वां संशोधन) विधेयक, 2026", url: "https://cettest.site/current-affairs/by-topic/constitution-131st-amendment" },
                            { "@type": "ListItem", position: 11, name: "PoSH Act, 2013", alternateName: "PoSH अधिनियम, 2013", url: "https://cettest.site/current-affairs/by-topic/posh-act" },
                            { "@type": "ListItem", position: 12, name: "Adi Shankaracharya & Advaita Vedanta", alternateName: "आदि शंकराचार्य और अद्वैत वेदांत", url: "https://cettest.site/current-affairs/by-topic/adi-shankaracharya" },
                            { "@type": "ListItem", position: 13, name: "Super El Niño", alternateName: "सुपर अल नीनो", url: "https://cettest.site/current-affairs/by-topic/super-el-nino" },
                            { "@type": "ListItem", position: 14, name: "UAE Exits OPEC and OPEC+", alternateName: "UAE का OPEC और OPEC+ से बाहर होना", url: "https://cettest.site/current-affairs/by-topic/uae-exit-opec" },
                            { "@type": "ListItem", position: 15, name: "NCRB Crime in India & ADSI 2024", alternateName: "NCRB अपराध और ADSI रिपोर्ट 2024", url: "https://cettest.site/current-affairs/by-topic/ncrb-2024" },
                            { "@type": "ListItem", position: 16, name: "MoEFCC–NBA Biodiversity Project", alternateName: "MoEFCC–NBA जैव विविधता परियोजना", url: "https://cettest.site/current-affairs/by-topic/biodiversity-project" },
                            { "@type": "ListItem", position: 17, name: "Ganga Expressway Project", alternateName: "गंगा एक्सप्रेसवे परियोजना", url: "https://cettest.site/current-affairs/by-topic/ganga-expressway" },
                            { "@type": "ListItem", position: 18, name: "India's Updated NDCs 2031–2035", alternateName: "भारत के संशोधित NDCs 2031–2035", url: "https://cettest.site/current-affairs/by-topic/india-ndc-2035" },
                            { "@type": "ListItem", position: 19, name: "The Abraham Accords", alternateName: "अब्राहम अकॉर्ड्स", url: "https://cettest.site/current-affairs/by-topic/abraham-accords" },
                            { "@type": "ListItem", position: 20, name: "Ebola Outbreak — PHEIC", alternateName: "इबोला प्रकोप — PHEIC", url: "https://cettest.site/current-affairs/by-topic/ebola-outbreak-2026" },
                            { "@type": "ListItem", position: 21, name: "Semiconductor Industry Roadmap", alternateName: "सेमीकंडक्टर इंडस्ट्री रोडमैप", url: "https://cettest.site/current-affairs/by-topic/semiconductor-roadmap" },
                            { "@type": "ListItem", position: 22, name: "SRS Statistical Report 2024", alternateName: "SRS सांख्यिकीय रिपोर्ट 2024", url: "https://cettest.site/current-affairs/by-topic/srs-2024" },
                            { "@type": "ListItem", position: 23, name: "India–UAE Agreements 2026", alternateName: "भारत–UAE समझौते 2026", url: "https://cettest.site/current-affairs/by-topic/india-uae-agreements" },
                            { "@type": "ListItem", position: 24, name: "India–New Zealand FTA", alternateName: "भारत–न्यूज़ीलैंड FTA", url: "https://cettest.site/current-affairs/by-topic/india-nz-fta" },
                            { "@type": "ListItem", position: 25, name: "SEHAT Mission", alternateName: "SEHAT मिशन", url: "https://cettest.site/current-affairs/by-topic/seat-mission" },
                            { "@type": "ListItem", position: 26, name: "VB-G RAM G Act 2025", alternateName: "VB-G RAM G अधिनियम 2025", url: "https://cettest.site/current-affairs/by-topic/vb-ram-g" },
                            { "@type": "ListItem", position: 27, name: "Somnath Amrut Parv", alternateName: "सोमनाथ अमृत पर्व", url: "https://cettest.site/current-affairs/by-topic/somnath-amrut-parv" },
                            { "@type": "ListItem", position: 28, name: "Coal Gasification Scheme", alternateName: "कोयला गैसीकरण योजना", url: "https://cettest.site/current-affairs/by-topic/coal-gasification" },
                            { "@type": "ListItem", position: 29, name: "Unpaid Domestic Labour", alternateName: "अवैतनिक घरेलू श्रम", url: "https://cettest.site/current-affairs/by-topic/unpaid-domestic-labour" },
                            { "@type": "ListItem", position: 30, name: "G7 Summit 2026 (Évian)", alternateName: "G7 शिखर सम्मेलन 2026", url: "https://cettest.site/current-affairs/by-topic/g7-summit-2026" },
                            { "@type": "ListItem", position: 31, name: "India–Russia RELOS", alternateName: "भारत–रूस RELOS", url: "https://cettest.site/current-affairs/by-topic/relos" },
                            { "@type": "ListItem", position: 32, name: "Kishau Multipurpose Dam", alternateName: "किशाउ बहुउद्देशीय बांध", url: "https://cettest.site/current-affairs/by-topic/kishau-dam" },
                            { "@type": "ListItem", position: 33, name: "Project GANGA (UP)", alternateName: "प्रोजेक्ट गंगा (UP)", url: "https://cettest.site/current-affairs/by-topic/project-ganga" },
                            { "@type": "ListItem", position: 34, name: "16th India–Japan Summit", alternateName: "16वां भारत-जापान शिखर सम्मेलन", url: "https://cettest.site/current-affairs/by-topic/india-japan-summit" },
                            { "@type": "ListItem", position: 35, name: "UN SD Report 2026", alternateName: "UN सतत विकास रिपोर्ट 2026", url: "https://cettest.site/current-affairs/by-topic/sd-report-2026" },
                            { "@type": "ListItem", position: 36, name: "Index of Services Production", alternateName: "सेवा उत्पादन सूचकांक", url: "https://cettest.site/current-affairs/by-topic/isp-index" },
                            { "@type": "ListItem", position: 37, name: "India UNSC 2028–29 & SHANTI", alternateName: "भारत UNSC 2028-29 & SHANTI", url: "https://cettest.site/current-affairs/by-topic/india-unsc-2028" },
                            { "@type": "ListItem", position: 38, name: "Prevention of Insults to National Honour (Amendment) Bill, 2026", alternateName: "राष्ट्रीय सम्मान के अपमान की रोकथाम (संशोधन) विधेयक, 2026", url: "https://cettest.site/current-affairs/by-topic/national-honour-amendment-2026" },
                            { "@type": "ListItem", position: 39, name: "Sarnath — India's 45th UNESCO Site", alternateName: "सारनाथ — भारत का 45वां UNESCO स्थल", url: "https://cettest.site/current-affairs/by-topic/sarnath-unesco" },
                            { "@type": "ListItem", position: 40, name: "Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026", alternateName: "सार्वजनिक परीक्षा (अनुचित साधनों की रोकथाम) संशोधन विधेयक, 2026", url: "https://cettest.site/current-affairs/by-topic/public-exams-amendment-2026" },
                            { "@type": "ListItem", position: 41, name: "Tribunals Reforms Bill, 2026", alternateName: "न्यायाधिकरण सुधार विधेयक, 2026", url: "https://cettest.site/current-affairs/by-topic/tribunals-reforms-bill-2026" },
                            { "@type": "ListItem", position: 42, name: "India's 101st Ramsar Site 2026", alternateName: "भारत का 101वाँ रामसर स्थल 2026", url: "https://cettest.site/current-affairs/by-topic/india-101st-ramsar-site-2026" },
                            { "@type": "ListItem", position: 43, name: "23rd Commonwealth Games 2026 – India's Performance", alternateName: "23वें राष्ट्रमंडल खेल 2026 – भारत का प्रदर्शन", url: "https://cettest.site/current-affairs/by-topic/commonwealth-games-2026" },
                            { "@type": "ListItem", position: 44, name: "Padma Awards 2026 – Complete List & Important Facts", alternateName: "पद्म पुरस्कार 2026 – संपूर्ण सूची एवं महत्वपूर्ण तथ्य", url: "https://cettest.site/current-affairs/by-topic/padma-awards-2026" },
                            { "@type": "ListItem", position: 45, name: "National & International Current Affairs 2026", alternateName: "राष्ट्रीय एवं अंतरराष्ट्रीय समसामयिकी 2026", url: "https://cettest.site/current-affairs/by-topic/national-international-current-affairs-2026" },
                            { "@type": "ListItem", position: 46, name: "Important Government Schemes & Initiatives 2026", alternateName: "महत्वपूर्ण सरकारी योजनाएँ एवं पहलें 2026", url: "https://cettest.site/current-affairs/by-topic/scheme-2026" },
                            { "@type": "ListItem", position: 47, name: "Science & Technology", alternateName: "विज्ञान एवं प्रौद्योगिकी", url: "https://cettest.site/current-affairs/by-topic/science-technology-2026" },
                            { "@type": "ListItem", position: 48, name: "Defence Current Affairs", alternateName: "रक्षा समसामयिकी", url: "https://cettest.site/current-affairs/by-topic/defence" },
                            { "@type": "ListItem", position: 49, name: "Awards & Honours", alternateName: "पुरस्कार एवं सम्मान", url: "https://cettest.site/current-affairs/by-topic/awards-honours-2026" },
                            { "@type": "ListItem", position: 50, name: "Sports Current Affairs", alternateName: "खेल समसामयिकी", url: "https://cettest.site/current-affairs/by-topic/sports" },
                            { "@type": "ListItem", position: 51, name: "Indexes, Rankings & Reports", alternateName: "सूचकांक, रैंकिंग एवं रिपोर्ट", url: "https://cettest.site/current-affairs/by-topic/indexes-rankings-reports-2026" },
                            { "@type": "ListItem", position: 52, name: "Important Days & Themes", alternateName: "महत्वपूर्ण दिवस एवं थीम", url: "https://cettest.site/current-affairs/by-topic/important-days-themes-2026" },
                            { "@type": "ListItem", position: 53, name: "Persons in News", alternateName: "चर्चित व्यक्ति", url: "https://cettest.site/current-affairs/by-topic/persons-in-news-2026" },
                            { "@type": "ListItem", position: 54, name: "One-Liner Current Affairs Q&A", alternateName: "एक-पंक्ति करेंट अफेयर्स प्रश्नोत्तर", url: "https://cettest.site/current-affairs/by-topic/one-liner-current-affairs-2026" },
                        ],
                    }),
                }}
            />

            {/* ==================== MAIN FAQ SCHEMA - SINGLE INSTANCE ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How should I prepare current affairs for competitive exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Focus on the last 6-8 months with special attention to government schemes, international relations, economic developments, and state-specific news. Our monthly digests provide exam-oriented analysis with static GK and practice questions.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which months are most important for current affairs?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The last 6 months before your exam are most important. For exams in mid-2026, focus on January-June 2026 with special attention to Union Budget, Economic Survey, and major international summits.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are these current affairs available in Hindi?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes! All our current affairs digests are available in both English and Hindi. You can toggle between languages using the language switcher on each page.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many questions can I expect from current affairs in exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "In most competitive exams, current affairs constitute 15-25% of the general awareness section. This typically ranges from 10-30 questions depending on the exam pattern.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide practice questions for current affairs?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, each monthly digest includes practice MCQs. Additionally, you can attempt our full-length current affairs quizzes in the mock test section for comprehensive preparation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are these digests useful for state exams like HSSC and UKSSSC?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Absolutely! Our digests cover both national and state-level news. We include state-specific current affairs, government schemes, and important regional developments for Haryana and Uttarakhand exams.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "प्रतियोगी परीक्षाओं के लिए करेंट अफेयर्स की तैयारी कैसे करें?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "पिछले 6-8 महीनों पर ध्यान केंद्रित करें, विशेष रूप से सरकारी योजनाओं, अंतर्राष्ट्रीय संबंधों, आर्थिक विकास और राज्य-विशिष्ट समाचारों पर। हमारे मासिक डाइजेस्ट परीक्षा-उन्मुख विश्लेषण प्रदान करते हैं।",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "क्या ये करेंट अफेयर्स हिंदी में उपलब्ध हैं?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "हाँ! हमारे सभी करेंट अफेयर्स डाइजेस्ट अंग्रेजी और हिंदी दोनों में उपलब्ध हैं। आप प्रत्येक पृष्ठ पर भाषा स्विचर का उपयोग करके भाषा बदल सकते हैं।",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "क्या ये डाइजेस्ट HSSC और UKSSSC जैसी राज्य परीक्षाओं के लिए उपयोगी हैं?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "बिल्कुल! हमारे डाइजेस्ट राष्ट्रीय और राज्य-स्तरीय दोनों समाचारों को कवर करते हैं। हम हरियाणा और उत्तराखंड परीक्षाओं के लिए राज्य-विशिष्ट करेंट अफेयर्स शामिल करते हैं।",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== COLLECTION PAGE SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Monthly Current Affairs Collection 2026",
                        description: "Complete collection of monthly current affairs digests for competitive exam preparation including UPSC, SSC, Banking, Railways, HSSC, and UKSSSC.",
                        url: "https://cettest.site/current-affairs",
                        inLanguage: ["en", "hi"],
                        hasPart: [
                            {
                                "@type": "CreativeWork",
                                name: "March 2026 Current Affairs",
                                description: "16th Finance Commission, QUAD Summit, RBI Digital Rupee, ISRO NISAR, 5 new Ramsar sites",
                                url: "https://cettest.site/current-affairs/march-2026",
                            },
                            {
                                "@type": "CreativeWork",
                                name: "February 2026 Current Affairs",
                                description: "Union Budget, Economic Survey, Monetary Policy, Defense Deals",
                                url: "https://cettest.site/current-affairs/february-2026",
                            },
                            {
                                "@type": "CreativeWork",
                                name: "January 2026 Current Affairs",
                                description: "Republic Day, Startup India Initiatives, Defense Exports, Climate Summit",
                                url: "https://cettest.site/current-affairs/january-2026",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== WEB PAGE SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Monthly Current Affairs 2026 | Bilingual Digest",
                        description: "Complete monthly current affairs resource for competitive examinations. Available in English and Hindi with exam-oriented analysis, static GK, important days, and practice questions.",
                        url: "https://cettest.site/current-affairs",
                        inLanguage: ["en", "hi"],
                        datePublished: "2026-01-01T00:00:00+05:30",
                        dateModified: new Date().toISOString().replace('Z', '+05:30'),
                        primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: "https://cettest.site/og-current-affairs.jpg",
                            width: 1200,
                            height: 630,
                        },
                        about: {
                            "@type": "Thing",
                            name: "Current Affairs",
                            description: "Monthly compilation of important national and international events for competitive exam preparation",
                        },
                        audience: {
                            "@type": "Audience",
                            name: "Competitive Exam Aspirants",
                            audienceType: "UPSC, SSC, Banking, Railways, State Government Exam Candidates",
                            geographicArea: "India",
                        },
                        educationalLevel: "Graduate",
                        keywords: "current affairs, monthly digest, competitive exams, UPSC, SSC, Banking, HSSC, UKSSSC",
                    }),
                }}
            />

            {/* ==================== EDUCATIONAL OCCUPATIONAL PROGRAM SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        name: "Current Affairs Preparation Program 2026",
                        description: "Comprehensive monthly current affairs preparation program for government job aspirants",
                        educationalProgramMode: "Self-Paced Study",
                        timeToComplete: "P12M",
                        occupationalCategory: "Government Services",
                        provider: {
                            "@type": "Organization",
                            name: "CET TEST",
                            url: "https://cettest.site",
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "March 2026 Current Affairs",
                                description: "5 major topics including 16th Finance Commission, QUAD Summit, RBI Digital Rupee, ISRO NISAR, and 5 new Ramsar sites",
                                courseCode: "CA-MAR-2026",
                            },
                            {
                                "@type": "Course",
                                name: "Monthly Current Affairs Series",
                                description: "Complete year-long current affairs coverage with bilingual content and exam-oriented analysis",
                                courseCode: "CA-2026",
                            },
                        ],
                        teaches: [
                            "National Affairs",
                            "International Relations",
                            "Economy & Banking",
                            "Science & Technology",
                            "Environment & Ecology",
                            "Sports & Awards",
                            "Important Days",
                            "Static GK",
                        ],
                        educationalCredentialAwarded: "Current Affairs Mastery Certification",
                    }),
                }}
            />

            {/* ==================== HOW TO SCHEMA - PREPARATION GUIDE ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "How to Master Current Affairs for Competitive Exams",
                        description: "Step-by-step guide to effectively prepare current affairs for government job examinations",
                        totalTime: "P30D",
                        estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: "0",
                        },
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Read Monthly Digests",
                                text: "Read our comprehensive monthly current affairs digests covering all important events with exam-oriented analysis.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Focus on State-Specific News",
                                text: "For state exams like HSSC and UKSSSC, pay special attention to state government schemes, history, culture, and current developments.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Practice MCQs Regularly",
                                text: "Take our topic-wise and full-length current affairs quizzes to test your knowledge and improve speed.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Review Static GK Connections",
                                text: "Connect current events with static GK topics like geography, history, polity, and economy for better retention.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Revise Important Days",
                                text: "Memorize important national and international days with their themes and historical significance.",
                            },
                        ],
                        tool: [
                            {
                                "@type": "HowToTool",
                                name: "CET TEST Mobile App",
                            },
                            {
                                "@type": "HowToTool",
                                name: "Monthly PDF Downloads",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== VIDEO SCHEMA - WITH PROPER TIMEZONE ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        name: "How to Prepare Current Affairs for Competitive Exams",
                        description: "Expert tips and strategies for mastering current affairs for UPSC, SSC, Banking, HSSC, and UKSSSC exams",
                        thumbnailUrl: "https://cettest.site/video-thumbnail.jpg",
                        uploadDate: "2026-01-01T10:00:00+05:30",
                        duration: "PT15M",
                        embedUrl: "https://www.youtube.com/embed/your-video-id",
                        interactionStatistic: {
                            "@type": "InteractionCounter",
                            interactionType: "https://schema.org/WatchAction",
                            userInteractionCount: 10000,
                        },
                    }),
                }}
            />

            {/* ==================== ANALYTICS & VERIFICATION ==================== */}
            {/* Google Analytics - Add your GA4 code */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-W5ZGFTDCTP"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-W5ZGFTDCTP');
                    `,
                }}
            />

            {/* ==================== CONTENT SECURITY POLICY META ==================== */}
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#4f46e5" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* ==================== OPEN GRAPH OPTIMIZATION ==================== */}
            <meta property="og:locale" content="en_IN" />
            <meta property="og:locale:alternate" content="hi_IN" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="CET TEST" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Monthly Current Affairs 2026 - Complete Bilingual Digest for Competitive Exams" />

            {/* ==================== TWITTER CARD OPTIMIZATION ==================== */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@cettest" />
            <meta name="twitter:creator" content="@cettest" />
            <meta name="twitter:image:alt" content="Monthly Current Affairs 2026 - Bilingual Digest" />

            {/* ==================== GEO TAGS ==================== */}
            <meta name="geo.region" content="IN" />
            <meta name="geo.placename" content="India" />
            <meta name="author" content="CET TEST" />
            <meta name="copyright" content="CET TEST" />
            <meta name="language" content="English, Hindi" />
            <meta name="rating" content="General" />
            <meta name="distribution" content="Global" />

            {/* ==================== CUSTOM STYLES FOR PRINT ==================== */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @media print {
                        .no-print {
                            display: none !important;
                        }
                        body {
                            background: white;
                            color: black;
                        }
                        a {
                            text-decoration: none;
                            color: black;
                        }
                        .rounded-xl, .rounded-2xl {
                            border-radius: 0 !important;
                        }
                        .shadow-lg, .shadow-md, .shadow-sm {
                            box-shadow: none !important;
                        }
                    }
                `,
            }} />

            {children}
        </>
    )
}