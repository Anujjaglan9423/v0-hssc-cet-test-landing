// app/haryana-gk-study-material/layout.tsx
import type { Metadata, Viewport } from "next";

// ============================================
// 1. SEO + AEO + GEO OPTIMIZED METADATA
// ============================================
export const metadata: Metadata = {
    // Primary Title with Power Words
    title: "Haryana GK 2026 [PDF] Complete Syllabus | HSSC CET Group C 25 Marks",

    // Description optimized for CTR (Click-Through Rate)
    description: "✓ Complete Haryana GK Syllabus ✓ 25 Marks Separate Section ✓ Animal Husbandry ✓ Murrah Buffalo ✓ Panchayati Raj ✓ Sports Awards ✓ Free PDF Download for HSSC CET 2026",

    // Keywords targeting long-tail, question-based, and conversational queries (AEO)
    keywords: [
        // Primary keywords
        "haryana gk", "haryana gk 2026", "haryana gk pdf", "haryana gk syllabus",
        "hssc cet syllabus", "haryana cet syllabus", "haryana gk book",

        // Question-based (AEO - Answer Engine Optimization)
        "what is haryana gk syllabus", "how to prepare haryana gk",
        "haryana gk important topics", "haryana gk tricks to remember",

        // Specific topics
        "murrah buffalo haryana", "haryana animal husbandry",
        "haryana panchayati raj", "phogat sisters haryana",
        "haryana sports awards", "haryana current affairs 2026",

        // Exam-specific
        "haryana gk for cet", "hssc haryana gk", "haryana police gk",
        "haryana patwari gk", "haryana gk previous year paper",
        "haryana gk mock test", "haryana gk one liner"
    ],

    authors: [{ name: "CET TEST", url: "https://cettest.site" }],
    creator: "CET TEST",
    publisher: "CET TEST",

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },

    // Enhanced Robots for maximum indexing
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": 300,
            "max-image-preview": "large",
            "max-video-preview": -1,
            notranslate: false,
        },
        nocache: false,
    },

    // Open Graph optimized for higher CTR
    openGraph: {
        title: "Haryana GK Complete Syllabus 2026 | HSSC CET Group C 25 Marks",
        description: "Download Free PDF: Complete Haryana GK covering History, Geography, Culture, Animal Husbandry, Polity, Sports & Awards. 25 Marks separate section for HSSC CET 2026.",
        url: "https://cettest.site/haryana-gk",
        siteName: "CET TEST | Haryana Govt Exam Prep",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-haryana-gk-2026.jpg",
                width: 1200,
                height: 630,
                alt: "Haryana GK 2026 Syllabus for HSSC CET Group C - Free PDF Download",
                type: "image/jpeg",
            },
        ],
    },

    // Twitter Card optimized for engagement
    twitter: {
        card: "summary_large_image",
        title: "Haryana GK Complete Syllabus 2026 | HSSC CET Preparation",
        description: "Free Download: Complete Haryana GK syllabus for HSSC CET Group C. 25 marks section with topic-wise breakdown.",
        images: ["/twitter-haryana-gk-2026.jpg"],
        creator: "@cet__test",
        site: "@cet__test",
    },

    // Canonical URL
    alternates: {
        canonical: "https://cettest.site/haryana-gk",
        languages: {
            "en-IN": "https://cettest.site/haryana-gk",
        },
    },

    // Additional SEO tags
    category: "Government Exam Preparation",
    classification: "HSSC CET Study Material | Haryana GK Syllabus 2026",
};

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
// 2. LAYOUT COMPONENT WITH STRUCTURED DATA
// ============================================
export default function HaryanaGKStudyMaterialLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const baseUrl = "https://cettest.site";
    const currentUrl = "https://cettest.site/haryana-gk";
    const socialMedia = "cet__test";
    const email = "anujjaglan9423@gmail.com";
    const phone = "+917291849546";
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
                        description: "Comprehensive course covering entire Haryana GK syllabus for HSSC CET, Haryana Police, Patwari, and all Haryana government exams. Includes History, Geography, Polity, Economy, Culture, Sports, Animal Husbandry, Current Affairs with topic-wise tests and PDF notes.",
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
                            startDate: `${currentYear}-01-01`,
                            endDate: `${currentYear}-12-31`,
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
                            "Panchayati Raj in Haryana",
                            "Haryana Transport & Communication",
                            "Haryana Judiciary",
                            "Haryana Current Affairs 2026",
                            "Haryana Social Welfare Schemes",
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
                        description: "A comprehensive program designed to help candidates score full 25 marks in the Haryana GK section of HSSC CET Group C exam, as well as other Haryana government exams.",
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

            {/* 3. FAQ Schema (Critical for AEO - Featured Snippets) */}
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
                                    text: "In HSSC CET Group C exam, Haryana GK is a separate and compulsory section of 25 marks. Additionally, the General Awareness section includes 5-8 questions from Haryana-specific current affairs. So total approximately 30-33 marks come from Haryana topics out of 100 marks.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What are the most important topics in Haryana GK?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Based on previous year papers analysis: Haryana History (8-10 marks), Haryana Geography (5-6 marks), Haryana Culture & Fairs (4-5 marks), Haryana Sports (3-4 marks), Haryana Current Affairs (3-4 marks), and Animal Husbandry (2-3 marks).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to score full 25 marks in Haryana GK section?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "To score 25/25 in Haryana GK: (1) Master all topics from this guide with special focus on Murrah Buffalo, Panchayati Raj, and Phogat sisters, (2) Solve last 5 years HSSC previous year papers, (3) Take weekly mock tests, (4) Maintain a separate notebook for Haryana current affairs, (5) Revise district-wise facts and important dates weekly.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Haryana GK a separate section in CET exam pattern?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, as per HSSC CET Group C exam pattern, Haryana GK is a separate section of 25 marks (25 questions). This section is distinct from the General Awareness section. Questions are objective type (MCQs) with negative marking of 0.25 marks per wrong answer.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Where can I download Haryana GK complete PDF for free?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can download the complete Haryana GK PDF for free from this page. The PDF includes topic-wise breakdown, important one-liners, previous year questions, and a separate section for Animal Husbandry & Panchayati Raj. Click on the 'Download PDF' button above to get instant access.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which animal is known as 'Black Gold' of Haryana?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Murrah Buffalo is known as the 'Black Gold' of Haryana. It is the most famous buffalo breed of Haryana, known for high milk yield (up to 18-20 liters per day). The Murrah breed originates from Rohtak, Hisar, and Jind districts.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the Haryana CET Group C exam date 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC CET Group C 2026 exam is expected to be held in June-July 2026. The official notification will be released on HSSC official website (hssc.gov.in). Start your preparation now with our complete Haryana GK guide.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Animal Husbandry included in Haryana GK for Police exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, Animal Husbandry is a very important topic for Haryana Police exams. Typically 3-5 questions come from Animal Husbandry including Murrah Buffalo, Livestock Census, Veterinary universities, and indigenous cow breeds.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which district of Haryana is known for Phogat sisters?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Phogat sisters (Geeta, Babita, Ritu, Sangeeta, Vinesh) hail from Balali village in Charkhi Dadri district, Haryana. Charkhi Dadri is known as the 'Tournament Village' or 'Little Cuba' of Haryana because of its wrestling culture.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is Panchayati Raj system in Haryana?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Haryana follows a 3-tier Panchayati Raj system: Zila Parishad at district level, Panchayat Samiti at block level, and Gram Panchayat at village level. Haryana was one of the first states to implement the Panchayati Raj Act.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* 4. BreadcrumbList Schema */}
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
                            { "@type": "ListItem", position: 5, name: "Haryana GK Study Material", item: currentUrl },
                        ],
                    }),
                }}
            />

            {/* 5. Organization Schema */}
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
                        },
                        sameAs: [
                            `https://www.instagram.com/${socialMedia}/`,
                            `https://twitter.com/${socialMedia}`,
                        ],
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

            {/* 6. HowTo Schema (Step-by-step guide for featured snippets) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "@id": `${currentUrl}#howto`,
                        name: "How to Prepare for Haryana GK 25 Marks Section",
                        description: "Complete study plan to score 25/25 in Haryana GK for HSSC CET",
                        totalTime: "P90D",
                        estimatedCost: 0,
                        step: [
                            { "@type": "HowToStep", name: "Master History & Formation", text: "Study Ancient, Medieval, Modern History of Haryana and Formation of State (1 Nov 1966). Focus on Siswal Culture, Yaudheya Republic, 1857 Revolt, and key freedom fighters." },
                            { "@type": "HowToStep", name: "Cover Geography & Environment", text: "Learn districts, rivers (Yamuna, Ghaggar, Markanda), climate, soil types, national parks, and wildlife sanctuaries." },
                            { "@type": "HowToStep", name: "Focus on Polity & Administration", text: "Study Administrative Structure, Panchayati Raj system, Haryana Judiciary, and role of Deputy Commissioner." },
                            { "@type": "HowToStep", name: "Economy, Animal Husbandry & Transport", text: "Special focus on Murrah Buffalo (Black Gold), Livestock Census, transport network, and airports in Haryana." },
                            { "@type": "HowToStep", name: "Culture, Sports & Schemes", text: "Learn Phogat sisters, Neeraj Chopra, Surajkund Mela, Teej festival, Beti Bachao Beti Padhao, and Ladli scheme." },
                            { "@type": "HowToStep", name: "Current Affairs & Revision", text: "Cover last 6 months Haryana-specific news, new schemes, appointments, and awards. Revise all topics." },
                            { "@type": "HowToStep", name: "Mock Tests & Analysis", text: "Take full-length Haryana GK mock tests. Analyze mistakes. Revise weak areas. Practice previous year papers." },
                        ],
                    }),
                }}
            />

            {/* 7. SearchAction Schema (For voice search) */}
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

            {/* 8. SpeakableSpecification Schema (For Google Assistant / Voice SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": `${currentUrl}#webpage`,
                        url: currentUrl,
                        name: "Haryana GK Complete Syllabus 2026 | PDF Download",
                        isPartOf: { "@id": `${baseUrl}#website` },
                        speakable: {
                            "@type": "SpeakableSpecification",
                            xPath: ["/main-heading", "/intro-text", "/faq-section"],
                            cssSelector: [".main-heading", ".intro-description", ".faq-item"],
                        },
                        dateModified: `${currentYear}-05-07T10:00:00+05:30`,
                        datePublished: `${currentYear}-01-01T09:00:00+05:30`,
                        author: {
                            "@type": "Person",
                            name: "Anuj Jaglan",
                            email: email,
                        },
                    }),
                }}
            />

            {/* 9. ItemList for Complete Syllabus Topics */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "@id": `${currentUrl}#topics-list`,
                        name: "Complete Haryana GK Syllabus Topics",
                        description: "Complete topic-wise breakdown of Haryana GK syllabus for HSSC CET Group C",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Haryana Current Affairs 2026" },
                            { "@type": "ListItem", position: 2, name: "Haryana Basic Information & State Symbols" },
                            { "@type": "ListItem", position: 3, name: "Formation of Haryana State" },
                            { "@type": "ListItem", position: 4, name: "Haryana Ancient History" },
                            { "@type": "ListItem", position: 5, name: "Haryana Medieval History" },
                            { "@type": "ListItem", position: 6, name: "Haryana Modern History & Freedom Movement" },
                            { "@type": "ListItem", position: 7, name: "Haryana Geographical Structure" },
                            { "@type": "ListItem", position: 8, name: "Haryana Climate, Soil & Drainage" },
                            { "@type": "ListItem", position: 9, name: "Haryana Forests & National Parks" },
                            { "@type": "ListItem", position: 10, name: "Haryana Economy & Agriculture" },
                            { "@type": "ListItem", position: 11, name: "Animal Husbandry in Haryana" },
                            { "@type": "ListItem", position: 12, name: "Haryana Industries & Minerals" },
                            { "@type": "ListItem", position: 13, name: "Haryana Transport & Communication" },
                            { "@type": "ListItem", position: 14, name: "Haryana Polity & Administration" },
                            { "@type": "ListItem", position: 15, name: "Panchayati Raj in Haryana" },
                            { "@type": "ListItem", position: 16, name: "Haryana Judiciary" },
                            { "@type": "ListItem", position: 17, name: "Haryana District Profiles" },
                            { "@type": "ListItem", position: 18, name: "Haryana Art & Handicrafts" },
                            { "@type": "ListItem", position: 19, name: "Haryana Folk Music & Dance" },
                            { "@type": "ListItem", position: 20, name: "Haryana Fairs & Festivals" },
                            { "@type": "ListItem", position: 21, name: "Haryana Language & Dialects" },
                            { "@type": "ListItem", position: 22, name: "Haryana Education System" },
                            { "@type": "ListItem", position: 23, name: "Haryana Health & Demographics" },
                            { "@type": "ListItem", position: 24, name: "Haryana Sports & Personalities" },
                            { "@type": "ListItem", position: 25, name: "Haryana Sports Infrastructure" },
                            { "@type": "ListItem", position: 26, name: "Haryana Awards & Honors" },
                            { "@type": "ListItem", position: 27, name: "Haryana Social Welfare Schemes" },
                            { "@type": "ListItem", position: 28, name: "Haryana Farmer Welfare Schemes" },
                            { "@type": "ListItem", position: 29, name: "Scheduled Castes & Tribes in Haryana" },
                            { "@type": "ListItem", position: 30, name: "Famous Personalities of Haryana" },
                            { "@type": "ListItem", position: 31, name: "HSSC Previous Year Questions" },
                            { "@type": "ListItem", position: 32, name: "Haryana GK Mock Tests" },
                        ],
                    }),
                }}
            />

            {children}
        </>
    );
}