// app/haryana-gk-study-material/layout.tsx
import type { Metadata, Viewport } from "next";

// ============================================
// 1. ENHANCED METADATA (SEO + GEO OPTIMIZED)
// ============================================
export const metadata: Metadata = {
    // Primary Title with Power Words & Numbers
    title: "Haryana GK Complete Syllabus 2026: 33 Chapters PDF | HSSC CET Group C 25 Marks",

    // Description optimized for Google SGE / Bing Chat (GEO)
    description:
        "Master Haryana GK for HSSC CET Group C 2026. Download 33-chapter complete syllabus PDF covering History, Geography, Culture, Animal Husbandry, Polity, Sports & Current Affairs. Separate 25-mark section with topic-wise breakdown, previous year questions, and mock tests. Free study material for Haryana Police, Patwari, Clerk, and all HSSC exams.",

    // Keywords extended for long-tail & question-based queries (AEO)
    keywords: [
        // Primary & Secondary
        "Haryana GK syllabus 2026", "HSSC CET Haryana GK", "Haryana GK 33 chapters",
        "Haryana GK 25 marks", "Haryana GK PDF download", "Haryana CET Group C GK",
        "Haryana history for CET", "Haryana geography", "Haryana culture festivals",
        "Haryana sports awards", "HSSC CET preparation", "Haryana Police Animal Husbandry GK",
        "Animal Husbandry Haryana", "Haryana Police GK",

        // AEO: Question-based long-tail keywords
        "how many marks in Haryana GK for CET", "which chapters in Haryana GK",
        "Haryana GK important topics for CET 2026", "Haryana GK previous year questions",
        "Haryana GK mock test free", "Haryana GK online test series",
        "best book for Haryana GK", "Haryana GK trick to remember",
        "Haryana current affairs 2026", "Haryana CET cut off marks",

        // GEO: Conversational & Generative AI phrases
        "complete Haryana GK guide", "step by step Haryana GK syllabus",
        "everything about Haryana for CET", "Haryana GK one liner",
        "Haryana GK for competitive exams", "HSSC previous year paper analysis",
        "Haryana GK in Hindi and English", "bilingual Haryana GK study material"
    ],

    authors: [{ name: "CET TEST", url: "https://cettest.site" }],
    creator: "CET TEST",
    publisher: "CET TEST",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    // Advanced Robots directives for maximum indexing
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
            notranslate: false,
        },
        nocache: false,
    },

    // Open Graph optimized for higher CTR
    openGraph: {
        title: "📚 Haryana GK Complete Syllabus 2026: 33 Chapters PDF | HSSC CET Group C",
        description:
            "✅ 25 Marks Separate Section | ✅ 33 Chapters with Topic-wise Breakdown | ✅ History, Geography, Culture, Polity, Animal Husbandry, Sports, Current Affairs | ✅ Free PDF Download for HSSC CET, Haryana Police, Patwari & Clerk Exams",
        url: "https://cettest.site/haryana-gk",
        siteName: "CET TEST | Haryana Govt Exam Prep",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-haryana-gk-2026.jpg",
                width: 1200,
                height: 630,
                alt: "Haryana GK 2026 Syllabus - 33 Chapters for HSSC CET Group C - 25 Marks Section - Free PDF Download",
                type: "image/jpeg",
            },
        ],
        emails: ["anujjaglan9423@gmail.com"],
        phoneNumbers: ["+91 7291849546"],
    },

    // Twitter Card optimized for engagement
    twitter: {
        card: "summary_large_image",
        title: "Haryana GK Complete Syllabus 2026 | 33 Chapters PDF | HSSC CET",
        description: "25 marks separate section. Free 33-chapter PDF covering History, Geography, Culture, Animal Husbandry, Polity, Sports & Current Affairs. Download now for CET Group C.",
        images: ["/twitter-haryana-gk-2026.jpg"],
        creator: "@cet__test",
        site: "@cet__test",
    },

    // Canonical & Alternate URLs
    alternates: {
        canonical: "https://cettest.site/haryana-gk",
        languages: {
            "en-IN": "https://cettest.site/haryana-gk",
            "hi-IN": "https://cettest.site/hi/haryana-gk",
        },
    },

    // Additional SEO tags
    category: "Government Exam Preparation",
    classification: "HSSC CET Study Material | Haryana GK Syllabus 2026",

    // App Links for mobile
    appLinks: {
        web: {
            url: "https://cettest.site/haryana-gk",
            should_fallback: true,
        },
    },

    // Archive & other metadata
    archives: ["https://cettest.site/haryana-gk-previous-papers"],
    assets: ["https://cettest.site/assets/haryana-gk"],
};

// Viewport configuration (Mobile SEO)
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

// ============================================
// 2. LAYOUT COMPONENT WITH ADVANCED STRUCTURED DATA
// ============================================
export default function HaryanaGKStudyMaterialLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Base URL for all schemas
    const baseUrl = "https://cettest.site";
    const currentUrl = "https://cettest.site/haryana-gk";
    const socialMedia = "cet__test";
    const email = "anujjaglan9423@gmail.com";
    const phone = "+917291849546";

    // Current year for dynamic content
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* 1. Course Schema (Enhanced for GEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "@id": `${currentUrl}#course`,
                        name: "Complete Haryana GK for HSSC CET Group C 2026",
                        description: "33-chapter comprehensive course covering entire Haryana GK syllabus (25 marks) for HSSC CET, Haryana Police, Patwari, and all Haryana government exams. Includes History, Geography, Polity, Economy, Culture, Sports, Animal Husbandry, Current Affairs with topic-wise tests and PDF notes.",
                        provider: {
                            "@type": "Organization",
                            name: "CET TEST",
                            url: baseUrl,
                            logo: `${baseUrl}/logo.png`,
                            sameAs: [
                                `https://instagram.com/${socialMedia}`,
                                `https://twitter.com/${socialMedia}`,
                            ],
                            email: email,
                            telephone: phone,
                        },
                        hasCourseInstance: {
                            "@type": "CourseInstance",
                            courseMode: ["online", "mixed"],
                            courseWorkload: "P3M",
                            startDate: "2026-01-01",
                            endDate: "2026-12-31",
                            instructor: {
                                "@type": "Person",
                                name: "Anuj Jaglan",
                                email: email,
                                telephone: phone,
                            },
                        },
                        educationalLevel: "Secondary School to Graduate",
                        teaches: [
                            "Haryana Ancient History (Siswal Culture, Indus Valley)",
                            "Haryana Medieval History (Chauhan Dynasty, Mughal Period)",
                            "Haryana Modern History (1857 Revolt, Freedom Fighters)",
                            "Haryana Geography (Geological Structure, Rivers, Climate)",
                            "Haryana Polity & Administration",
                            "Haryana Economy (Agriculture, Animal Husbandry, Industries)",
                            "Haryana Art, Culture & Heritage (Fairs, Festivals, Music, Dance)",
                            "Haryana Sports & Awards (Phogat Sisters, Neeraj Chopra)",
                            "Animal Husbandry in Haryana (Murrah Buffalo, Livestock Census)",
                            "Panchayati Raj in Haryana (3-tier system)",
                            "Haryana Transport & Communication",
                            "Haryana Judiciary (High Court, District Courts)",
                            "Haryana Current Affairs 2026",
                            "Haryana Social Welfare Schemes (Beti Bachao, Ladli Scheme)",
                            "Famous Personalities of Haryana",
                        ],
                        totalTime: "PT90H",
                        numberOfCredits: 25,
                        keywords: "Haryana GK, HSSC CET, Haryana Police, Animal Husbandry, Haryana Syllabus",
                        offers: {
                            "@type": "Offer",
                            price: 0,
                            priceCurrency: "INR",
                            availability: "https://schema.org/OnlineOnly",
                            url: currentUrl,
                        },
                    }),
                }}
            />

            {/* 2. EducationalOccupationalProgram Schema (For AEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        "@id": `${currentUrl}#program`,
                        name: "HSSC CET Group C Haryana GK Preparation Program",
                        description: "A comprehensive 33-chapter program designed to help candidates score full 25 marks in the Haryana GK section of HSSC CET Group C exam, as well as other Haryana government exams like Haryana Police, Patwari, Gram Sachiv, Clerk, and Canal Patwari.",
                        programType: "Exam Preparation",
                        timeToComplete: "P3M",
                        occupationalCategory: "Government Jobs - Haryana Staff Selection Commission",
                        occupationalCredentialAwarded: "HSSC CET Group C Qualification",
                        programPrerequisites: "10+2 Pass or Graduate",
                        provider: {
                            "@type": "Organization",
                            name: "CET TEST",
                            url: baseUrl,
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: phone,
                                contactType: "customer service",
                                email: email,
                                availableLanguage: ["English", "Hindi"],
                            },
                        },
                        hasCourse: [
                            { "@type": "Course", name: "Haryana Current Affairs 2026" },
                            { "@type": "Course", name: "Haryana Basic Information & Formation" },
                            { "@type": "Course", name: "Haryana Ancient & Medieval History" },
                            { "@type": "Course", name: "Haryana Modern History & Freedom Struggle" },
                            { "@type": "Course", name: "Haryana Geography & Environment" },
                            { "@type": "Course", name: "Haryana Economy & Animal Husbandry" },
                            { "@type": "Course", name: "Haryana Polity & Administrative Structure" },
                            { "@type": "Course", name: "Haryana Art, Culture & Heritage" },
                            { "@type": "Course", name: "Haryana Sports & Awards" },
                            { "@type": "Course", name: "Haryana Social Welfare Schemes" },
                            { "@type": "Course", name: "Haryana Judiciary & Panchayati Raj" },
                            { "@type": "Course", name: "Famous Personalities of Haryana" },
                        ],
                        financialAidEligible: false,
                        numberOfCredits: 25,
                        typicalCreditsPerTerm: 25,
                        termLength: "One Time Purchase - Free",
                        totalCost: 0,
                    }),
                }}
            />

            {/* 3. FAQ Schema with 12+ Common Questions (Critical for AEO - Featured Snippets) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "@id": `${currentUrl}#faq`,
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How many marks come from Haryana GK in HSSC CET Group C?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "In HSSC CET Group C exam 2026, Haryana GK is a separate and compulsory section of 25 marks. Additionally, the General Awareness section includes 5-8 questions from Haryana-specific current affairs. So total approximately 30-33 marks come from Haryana topics out of 100 marks.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What are the most important topics in Haryana GK for 25 marks?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Based on previous year papers analysis: Haryana History (8-10 marks - focus on formation of Haryana, freedom fighters, and important rulers), Haryana Geography (5-6 marks - rivers, climate, soil, districts), Haryana Culture & Fairs (4-5 marks - festivals, folk music, dances), Haryana Sports (3-4 marks - Phogat sisters, Neeraj Chopra, stadiums), Haryana Current Affairs (3-4 marks - last 6 months), and Animal Husbandry (2-3 marks - Murrah buffalo, livestock census).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to score full 25 marks in Haryana GK section?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "To score 25/25 in Haryana GK: (1) Master all 33 chapters from this guide with special focus on Murrah Buffalo, Panchayati Raj, and Phogat sisters, (2) Solve last 5 years HSSC previous year papers, (3) Take weekly mock tests on our platform, (4) Maintain a separate notebook for Haryana current affairs, (5) Revise district-wise facts and important dates weekly, (6) Use our one-liner PDF for last-minute revision.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Haryana GK a separate section in CET exam pattern 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, as per HSSC CET Group C exam pattern 2026, Haryana GK is a separate section of 25 marks (25 questions). This section is distinct from the General Awareness section. Questions are objective type (MCQs) with negative marking of 0.25 marks per wrong answer.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many chapters are in complete Haryana GK syllabus?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The complete Haryana GK syllabus for HSSC CET 2026 consists of 33 chapters covering: (1) Haryana Basic Info, (2) Formation of Haryana, (3-5) Ancient, Medieval & Modern History, (6-7) Geography & Environment, (8) Economy, (9) Polity, (10) Culture, (11) Education & Demographics, (12) Sports, (13) Social Schemes, (14) Famous Personalities, (15) Animal Husbandry, (16) Panchayati Raj, (17) Transport & Communication, (18) Judiciary, and 15+ more detailed sub-topics.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Where can I download Haryana GK complete PDF for free?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can download the complete 33-chapter Haryana GK PDF for free from this page. The PDF includes topic-wise breakdown, important one-liners, previous year questions, and a separate section for Animal Husbandry & Panchayati Raj. Click on the 'Download PDF' button above to get instant access.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which animal is known as 'Black Gold' of Haryana?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Murrah Buffalo is known as the 'Black Gold' of Haryana. It is the most famous buffalo breed of Haryana, known for high milk yield (up to 18-20 liters per day). The Murrah breed originates from Rohtak, Hisar, and Jind districts. Haryana has the highest population of Murrah buffaloes in India.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the Haryana CET Group C exam date 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC CET Group C 2026 exam is expected to be held in June-July 2026. The official notification will be released on HSSC official website (hssc.gov.in). Start your preparation now with our complete Haryana GK guide to stay ahead.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Animal Husbandry included in Haryana GK for Police exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, Animal Husbandry is a very important topic for Haryana Police exams. In Haryana Police Constable exam, typically 3-5 questions come from Animal Husbandry including Murrah Buffalo, Livestock Census 2019, Veterinary universities (Hisar), Haryana Dairy Development Policy, and indigenous cow breeds (Haryanvi, Mewati, Kankrej).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which social media handles does CET TEST have for Haryana GK updates?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "CET TEST is active on Instagram and Twitter/X at @cet__test. Follow for daily Haryana GK questions, current affairs updates, free mock tests, and preparation tips for HSSC CET 2026. Live doubt sessions are also conducted weekly.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to contact CET TEST for Haryana GK study material support?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can contact CET TEST via email at anujjaglan9423@gmail.com or call/whatsapp at 7291849546. Support hours: Monday to Saturday, 10 AM to 6 PM. For quick queries, DM on Instagram @cet__test.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which district of Haryana is known for Phogat sisters?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Phogat sisters (Geeta, Babita, Ritu, Sangeeta, Vinesh) hail from Balali village in Charkhi Dadri district (formerly part of Bhiwani district), Haryana. Charkhi Dadri is known as the 'Tournament Village' or 'Little Cuba' of Haryana because of its wrestling culture.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* 4. BreadcrumbList Schema (Extended for GEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "@id": `${currentUrl}#breadcrumb`,
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
                            { "@type": "ListItem", position: 2, name: "Exams", item: `${baseUrl}/exams` },
                            { "@type": "ListItem", position: 3, name: "Haryana State Exams", item: `${baseUrl}/exams/haryana` },
                            { "@type": "ListItem", position: 4, name: "HSSC CET Group C", item: `${baseUrl}/exams/haryana/cet-group-c` },
                            { "@type": "ListItem", position: 5, name: "Haryana GK Study Material 2026", item: currentUrl },
                        ],
                    }),
                }}
            />

            {/* 5. Organization + Social Media Schema (AEO for contact info) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": `${baseUrl}#organization`,
                        name: "CET TEST",
                        url: baseUrl,
                        logo: `${baseUrl}/logo-cet-test.png`,
                        email: email,
                        telephone: phone,
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: phone,
                            contactType: "customer support",
                            email: email,
                            availableLanguage: ["English", "Hindi"],
                            areaServed: "IN",
                            contactOption: ["TollFree", "HearingImpairedSupported"],
                        },
                        sameAs: [
                            `https://www.instagram.com/${socialMedia}/`,
                            `https://twitter.com/${socialMedia}`,
                        ],
                        awards: "Best Haryana GK Preparation Platform 2025",
                        description: "India's most trusted platform for Haryana government exam preparation. Specialized in HSSC CET, Haryana Police, Patwari, Clerk, and Gram Sachiv exams.",
                        founder: {
                            "@type": "Person",
                            name: "Anuj Jaglan",
                            email: email,
                            telephone: phone,
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "IN",
                            addressRegion: "Haryana",
                        },
                    }),
                }}
            />

            {/* 6. HowTo Schema (Step-by-step guide for GEO / AI answers) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "@id": `${currentUrl}#howto`,
                        name: "How to Prepare for Haryana GK 25 Marks Section in 90 Days",
                        description: "Complete 90-day study plan to score 25/25 in Haryana GK for HSSC CET 2026",
                        totalTime: "P90D",
                        estimatedCost: 0,
                        step: [
                            { "@type": "HowToStep", name: "Day 1-20: Master History & Formation", text: "Study Ancient, Medieval, Modern History of Haryana and Formation of State (1 Nov 1966). Focus on Siswal Culture, Yaudheya Republic, 1857 Revolt, and key freedom fighters like Lala Lajpat Rai, Sir Chhotu Ram, and Pt. Neki Ram Sharma." },
                            { "@type": "HowToStep", name: "Day 21-35: Cover Geography & Environment", text: "Learn 22 districts, rivers (Yamuna, Ghaggar, Markanda), climate (tropical steppe), soil types, national parks (Sultanpur, Kalesar), and wildlife sanctuaries." },
                            { "@type": "HowToStep", name: "Day 36-50: Focus on Polity & Administration", text: "Study Administrative Structure (Divisions - 6, Districts - 22), Panchayati Raj system, Haryana Judiciary (Punjab & Haryana High Court), and role of Deputy Commissioner." },
                            { "@type": "HowToStep", name: "Day 51-65: Economy, Animal Husbandry & Transport", text: "Special focus on Murrah Buffalo (Black Gold), Livestock Census 2019, NH-44, NH-48, railway network, and airports in Haryana." },
                            { "@type": "HowToStep", name: "Day 66-75: Culture, Sports & Schemes", text: "Learn Phogat sisters, Neeraj Chopra, Surajkund Mela, Teej festival, Phulkari embroidery, Beti Bachao Beti Padhao, and Ladli scheme." },
                            { "@type": "HowToStep", name: "Day 76-85: Current Affairs & Revision", text: "Cover last 6 months Haryana-specific news, new schemes, appointments, MOUs, and awards. Revise all 33 chapters." },
                            { "@type": "HowToStep", name: "Day 86-90: Mock Tests & Analysis", text: "Take 10 full-length Haryana GK mock tests. Analyze mistakes. Revise weak areas. Practice previous year papers." },
                        ],
                    }),
                }}
            />

            {/* 7. ItemList Schema (33 Chapters List - For SGE Featured Lists) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "@id": `${currentUrl}#chapters-list`,
                        name: "33 Chapters of Haryana GK Complete Syllabus",
                        description: "Complete topic-wise breakdown of Haryana GK syllabus for HSSC CET Group C 2026",
                        numberOfItems: 33,
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Haryana Current Affairs 2026" },
                            { "@type": "ListItem", position: 2, name: "Haryana Basic Information & State Symbols" },
                            { "@type": "ListItem", position: 3, name: "Formation of Haryana State (1 Nov 1966)" },
                            { "@type": "ListItem", position: 4, name: "Haryana Ancient History (Siswal, Indus Valley)" },
                            { "@type": "ListItem", position: 5, name: "Haryana Medieval History (Chauhan, Mughal)" },
                            { "@type": "ListItem", position: 6, name: "Haryana Modern History & Freedom Movement" },
                            { "@type": "ListItem", position: 7, name: "Haryana Geographical Structure & Physiology" },
                            { "@type": "ListItem", position: 8, name: "Haryana Climate, Soil & Drainage System" },
                            { "@type": "ListItem", position: 9, name: "Haryana Environment, Forests & National Parks" },
                            { "@type": "ListItem", position: 10, name: "Haryana Economy: Agriculture & Irrigation" },
                            { "@type": "ListItem", position: 11, name: "Animal Husbandry in Haryana (Murrah Buffalo)" },
                            { "@type": "ListItem", position: 12, name: "Haryana Minerals, Industries & Transport" },
                            { "@type": "ListItem", position: 13, name: "Haryana Polity & Administrative Structure" },
                            { "@type": "ListItem", position: 14, name: "Panchayati Raj in Haryana (3-Tier System)" },
                            { "@type": "ListItem", position: 15, name: "Haryana Judiciary (High Court & District Courts)" },
                            { "@type": "ListItem", position: 16, name: "Haryana District Profiles (22 Districts)" },
                            { "@type": "ListItem", position: 17, name: "Haryana Art, Architecture & Handicrafts" },
                            { "@type": "ListItem", position: 18, name: "Haryana Folk Music, Dance & Literature" },
                            { "@type": "ListItem", position: 19, name: "Haryana Fairs & Festivals (Surajkund, Teej)" },
                            { "@type": "ListItem", position: 20, name: "Haryana Language & Dialects (Haryanvi, Bangru)" },
                            { "@type": "ListItem", position: 21, name: "Haryana Education System & Universities" },
                            { "@type": "ListItem", position: 22, name: "Haryana Health Scenario & Demographics" },
                            { "@type": "ListItem", position: 23, name: "Haryana Sports & Famous Sports Personalities" },
                            { "@type": "ListItem", position: 24, name: "Haryana Sports Stadiums & Infrastructure" },
                            { "@type": "ListItem", position: 25, name: "Haryana Awards & Honors (Haryana Ratna, etc.)" },
                            { "@type": "ListItem", position: 26, name: "Haryana Social Welfare Schemes for Women" },
                            { "@type": "ListItem", position: 27, name: "Haryana Farmer Welfare Schemes" },
                            { "@type": "ListItem", position: 28, name: "Scheduled Castes & Tribes in Haryana" },
                            { "@type": "ListItem", position: 29, name: "Famous Personalities: Historical & Political" },
                            { "@type": "ListItem", position: 30, name: "Famous Personalities: Sports & Military" },
                            { "@type": "ListItem", position: 31, name: "Famous Personalities: Art, Literature & Social" },
                            { "@type": "ListItem", position: 32, name: "HSSC Previous Year Haryana GK Questions" },
                            { "@type": "ListItem", position: 33, name: "Haryana GK Mock Tests & Practice Sets" },
                        ],
                    }),
                }}
            />

            {/* 8. SearchAction Schema (For Google SGE / Voice Search) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "@id": `${baseUrl}#website`,
                        url: baseUrl,
                        name: "CET TEST - Haryana Govt Exam Prep",
                        description: "Best platform for HSSC CET, Haryana Police, Patwari, Clerk, and Gram Sachiv exam preparation with free study material, mock tests, and PDFs.",
                        inLanguage: ["en-IN", "hi-IN"],
                        publisher: {
                            "@type": "Organization",
                            name: "CET TEST",
                            email: email,
                            telephone: phone,
                        },
                        potentialAction: {
                            "@type": "SearchAction",
                            target: {
                                "@type": "EntryPoint",
                                urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                            },
                            "query-input": "required name=search_term_string",
                        },
                    }),
                }}
            />

            {/* 9. SpeakableSpecification Schema (For Google Assistant / Voice SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": `${currentUrl}#webpage`,
                        url: currentUrl,
                        name: "Haryana GK Complete Syllabus 2026 | 33 Chapters PDF Download",
                        isPartOf: { "@id": `${baseUrl}#website` },
                        speakable: {
                            "@type": "SpeakableSpecification",
                            xPath: ["/main-heading", "/intro-text", "/faq-section"],
                            cssSelector: [".main-heading", ".intro-description", ".faq-item"],
                        },
                        dateModified: "2026-05-07T10:00:00+05:30",
                        datePublished: "2026-01-01T09:00:00+05:30",
                        author: {
                            "@type": "Person",
                            name: "Anuj Jaglan",
                            email: email,
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}