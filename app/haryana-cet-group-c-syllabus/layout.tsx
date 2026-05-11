// app/haryana-cet-group-c-syllabus/layout.tsx
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
    // Primary Title with Power Words & Numbers
    title: "HSSC CET Group C Syllabus 2026 PDF Download | Complete Haryana CET Exam Pattern Topic-wise",

    // Description optimized for Google SGE / Bing Chat (GEO) - Bilingual for maximum reach
    description: "HSSC CET Group C Syllabus 2026: डाउनलोड करें पूरा syllabus PDF with topic-wise breakdown. Complete coverage: Haryana GK (25 marks), General Awareness, Reasoning, Quantitative Aptitude, Computer Knowledge, English & Hindi. Latest exam pattern, negative marking (0.25), 100 questions, 90 minutes. Free mock tests included.",

    // Keywords extended for long-tail & question-based queries (AEO)
    keywords: [
        // Primary & Secondary
        "HSSC Group C syllabus 2026", "Haryana CET Group C syllabus PDF", "HSSC CET syllabus download",
        "Haryana CET Exam Pattern 2026", "Group C syllabus Haryana GK", "Group C syllabus Haryana",
        "HSSC Group C syllabus PDF download", "HSSC CET preparation tips",
        "Haryana CET Group C official syllabus", "CET Haryana Group C mock test",

        // AEO: Question-based long-tail keywords
        "how many questions in Haryana CET", "Haryana CET negative marking", "HSSC CET cut off marks",
        "Haryana CET passing marks", "Haryana CET syllabus in Hindi", "HSSC CET Group C selection process",
        "Haryana CET exam date 2026", "HSSC CET notification 2026", "Haryana CET previous year papers",
        "best book for Haryana CET", "Haryana CET online form last date",

        // GEO: Conversational & Generative AI phrases
        "complete Haryana CET guide", "step by step Haryana CET preparation",
        "everything about HSSC Group C exam", "Haryana CET one liner revision",
        "Haryana CET for competitive exams", "HSSC CET previous year analysis",
        "Haryana CET bilingual study material", "CET Group C complete roadmap",
        "Haryana Police CET syllabus", "HSSC CET clerk syllabus", "HSSC CET patwari syllabus"
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
        title: "📚 HSSC CET Group C Syllabus 2026 PDF | Complete Haryana CET Exam Pattern",
        description: "✅ Topic-wise syllabus for all 6 subjects | ✅ 100 questions, 90 minutes, 0.25 negative marking | ✅ Haryana GK (25 marks) | ✅ Free PDF Download + Mock Tests | ✅ Bilingual (English & Hindi)",
        url: "https://cettest.site/haryana-cet-group-c-syllabus",
        siteName: "CET TEST | Haryana Govt Exam Prep",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-haryana-cet-syllabus-2026.jpg",
                width: 1200,
                height: 630,
                alt: "HSSC CET Group C Syllabus 2026 - Complete Exam Pattern with 6 Subjects - Free PDF Download",
                type: "image/jpeg",
            },
        ],
        emails: ["anujjaglan9423@gmail.com"],
        phoneNumbers: ["+91 7291849546"],
    },

    // Twitter Card optimized for engagement
    twitter: {
        card: "summary_large_image",
        title: "HSSC CET Group C Syllabus 2026 PDF | Haryana CET Complete Exam Pattern",
        description: "Download free PDF: General Awareness, Reasoning, Quantitative Aptitude, Computer Knowledge, English & Hindi. Latest syllabus for 2026 exam with topic-wise breakdown.",
        images: ["/twitter-haryana-cet-syllabus.jpg"],
        creator: "@cet__test",
        site: "@cet__test",
    },

    // Canonical & Alternate URLs
    alternates: {
        canonical: "https://cettest.site/haryana-cet-group-c-syllabus",
        languages: {
            "en-IN": "https://cettest.site/haryana-cet-group-c-syllabus",
        },
    },

    // Additional SEO tags
    category: "education",
    classification: "Government Exam Preparation | HSSC CET Group C Syllabus 2026",

    // App Links for mobile
    appLinks: {
        web: {
            url: "https://cettest.site/haryana-cet-group-c-syllabus",
            should_fallback: true,
        },
    },

    // Archive & other metadata
    archives: ["https://cettest.site/haryana-cet-previous-papers"],
    assets: ["https://cettest.site/assets/haryana-cet"],
}

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
}

export default function HaryanaCETGroupCSyllabusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Base URL for all schemas
    const baseUrl = "https://cettest.site"
    const currentUrl = "https://cettest.site/haryana-cet-group-c-syllabus"
    const socialMedia = "cet__test"
    const email = "anujjaglan9423@gmail.com"
    const phone = "+917291849546"
    const currentYear = new Date().getFullYear()

    return (
        <>
            {/* 1. EducationalOccupationalProgram Schema (Enhanced for GEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        "@id": `${currentUrl}#program`,
                        name: "HSSC CET Group C Examination 2026 - Complete Syllabus Program",
                        description: "Comprehensive syllabus for Haryana Common Eligibility Test (CET) for Group C posts. Covers all 6 subjects: General Awareness (25 marks including Haryana GK), General Reasoning, Quantitative Ability, Computer Knowledge, English Language, and Hindi Language. Exam pattern: 100 questions, 100 marks, 90 minutes, 0.25 negative marking.",
                        educationalProgramMode: "Exam Preparation",
                        timeToComplete: "P3M",
                        occupationalCategory: "Government Jobs - Haryana Staff Selection Commission",
                        occupationalCredentialAwarded: "HSSC CET Group C Qualification",
                        programPrerequisites: "10+2 Pass or Graduate (varies by post)",
                        provider: {
                            "@type": "Organization",
                            name: "Haryana Staff Selection Commission (HSSC)",
                            url: "https://hssc.gov.in",
                            sameAs: ["https://hssc.gov.in"],
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "General Awareness (25 Marks including Haryana GK)",
                                description: "Indian History (Ancient, Medieval, Modern), Indian Polity & Constitution, Indian Geography, Indian Economy, Environment & Ecology, General Science (Physics, Chemistry, Biology), Current Affairs (National & International, Sports, Awards, Haryana-specific news), Haryana GK (History, Geography, Culture, Polity, Animal Husbandry, Sports)",
                            },
                            {
                                "@type": "Course",
                                name: "General Reasoning (15-20 Marks)",
                                description: "Verbal Reasoning: Analogies, Classification, Series Completion, Coding-Decoding, Blood Relations, Direction Sense, Alphabet Test, Number Ranking, Time Sequence, Logical Venn Diagrams, Syllogism, Statement & Assumptions, Statement & Conclusions. Non-Verbal Reasoning: Figure Series, Mirror Images, Water Images, Paper Cutting & Folding, Embedded Figures.",
                            },
                            {
                                "@type": "Course",
                                name: "Quantitative Ability (15-20 Marks)",
                                description: "Number System, HCF & LCM, Simplification, Square Root & Cube Root, Percentage, Profit & Loss, Discount, Simple & Compound Interest, Ratio & Proportion, Partnership, Average, Age Problems, Time & Work, Pipes & Cisterns, Time & Distance, Boats & Streams, Mixture & Alligation, Mensuration (2D & 3D), Algebra (Linear Equations, Quadratic Equations), Geometry (Lines, Angles, Triangles, Circles), Data Interpretation (Bar Graph, Line Graph, Pie Chart, Table)",
                            },
                            {
                                "@type": "Course",
                                name: "Computer Knowledge (10-15 Marks)",
                                description: "Computer Fundamentals: History, Generations, Types. Hardware: CPU, Memory (RAM, ROM), Input/Output Devices. Software: System Software, Application Software, Operating Systems (Windows, Linux). MS Office: MS Word, MS Excel (Formulas, Functions, Charts), MS PowerPoint, MS Access. Internet & Networking: WWW, Email Protocols (SMTP, POP3), Browsers, Search Engines, Cyber Security, Computer Viruses, Shortcut Keys (Ctrl+C, Ctrl+V, Alt+F4, etc.).",
                            },
                            {
                                "@type": "Course",
                                name: "English Language (10-15 Marks)",
                                description: "Grammar: Tenses, Articles, Prepositions, Conjunctions, Subject-Verb Agreement, Modals, Active-Passive Voice, Direct-Indirect Speech. Vocabulary: Synonyms, Antonyms, One Word Substitution, Idioms & Phrases, Phrasal Verbs. Comprehension: Passage Reading, Cloze Test, Para Jumbling. Error Detection: Spotting Errors, Sentence Correction, Sentence Improvement.",
                            },
                            {
                                "@type": "Course",
                                name: "Hindi Language (10-15 Marks)",
                                description: "हिन्दी व्याकरण: संज्ञा, सर्वनाम, विशेषण, क्रिया, काल, वचन, लिंग, कारक. रचना: संधि (स्वर, व्यंजन, विसर्ग), समास (तत्पुरुष, द्वंद्व, बहुव्रीहि, अव्ययीभाव, कर्मधारय), उपसर्ग, प्रत्यय. शब्द भंडार: पर्यायवाची शब्द, विलोम शब्द, अनेकार्थी शब्द, शब्द युग्म, मुहावरे एवं लोकोक्तियाँ, अंग्रेजी के समानार्थक हिन्दी शब्द. वाक्य संरचना: वाक्य शुद्धिकरण, वाक्य निर्माण, अपठित गद्यांश.",
                            },
                        ],
                        financialAidEligible: false,
                        numberOfCredits: 100,
                        typicalCreditsPerTerm: 100,
                        termLength: "One Time Examination - Single Phase",
                        totalCost: 0,
                        evaluationType: "Computer Based Test (CBT)",
                    }),
                }}
            />

            {/* 2. Course Schema with detailed topic breakdown (For GEO / AI training) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "@id": `${currentUrl}#course`,
                        name: "HSSC CET Group C Complete Syllabus 2026",
                        description: "Full syllabus for Haryana CET Group C exam 2026 with 6 subjects and topic-wise breakdown. Includes General Awareness (with Haryana GK), Reasoning, Quantitative Aptitude, Computer Knowledge, English, and Hindi.",
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
                            courseMode: "online",
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
                            "Indian History (Ancient, Medieval, Modern)",
                            "Indian Polity & Constitution",
                            "Indian Geography (Physical, Economic, Social)",
                            "Indian Economy & Budget",
                            "General Science (Physics, Chemistry, Biology)",
                            "Current Affairs 2026",
                            "Haryana GK Complete (History, Geography, Culture, Polity, Animal Husbandry, Sports)",
                            "Verbal & Non-Verbal Reasoning",
                            "Coding-Decoding & Blood Relations",
                            "Syllogism & Logical Venn Diagrams",
                            "Quantitative Aptitude (Arithmetic, Algebra, Geometry)",
                            "Data Interpretation",
                            "Computer Fundamentals & MS Office",
                            "Internet, Networking & Cyber Security",
                            "English Grammar & Vocabulary",
                            "English Comprehension",
                            "Hindi Vyakaran (Sandhi, Samas, Upsarg, Pratyay)",
                            "Hindi Muhavare & Lokoktiyan",
                        ],
                        totalTime: "PT90H",
                        numberOfCredits: 100,
                        keywords: "HSSC CET, Haryana CET Group C, Syllabus PDF, CET Exam Pattern, Haryana GK, CET Preparation",
                        offers: {
                            "@type": "Offer",
                            price: 0,
                            priceCurrency: "INR",
                            availability: "https://schema.org/OnlineOnly",
                            url: currentUrl,
                        },
                        audience: {
                            "@type": "Audience",
                            name: "HSSC CET Group C Aspirants",
                            geographicArea: "Haryana, India",
                        },
                    }),
                }}
            />

            {/* 3. FAQ Schema with 14+ Questions (Critical for AEO - Featured Snippets) */}
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
                                name: "What is the syllabus for Haryana CET Group C 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC CET Group C syllabus 2026 includes 6 subjects: (1) General Awareness (25 marks) - Indian History, Polity, Geography, Economy, General Science, Current Affairs, and Haryana GK, (2) General Reasoning (15-20 marks) - Verbal & Non-Verbal Reasoning, (3) Quantitative Ability (15-20 marks) - Arithmetic, Algebra, Geometry, Data Interpretation, (4) Computer Knowledge (10-15 marks) - Fundamentals, MS Office, Internet, (5) English Language (10-15 marks) - Grammar, Vocabulary, Comprehension, (6) Hindi Language (10-15 marks) - हिन्दी व्याकरण, मुहावरे, अपठित गद्यांश.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many questions are asked in Haryana CET Group C exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Haryana CET Group C exam consists of total 100 objective-type (MCQ) questions for 100 marks. The exam duration is 90 minutes. Subject-wise distribution: General Awareness (25 questions), Reasoning (15-20 questions), Quantitative Aptitude (15-20 questions), Computer Knowledge (10-15 questions), English (10-15 questions), Hindi (10-15 questions).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there negative marking in Haryana CET?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, there is a negative marking of 0.25 marks for each wrong answer in Haryana CET Group C examination. No marks are deducted for unanswered questions. So avoid guesswork and attempt only those questions you are confident about.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Where can I download Haryana CET Group C syllabus PDF?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can find the complete Haryana CET Group C syllabus on this page with detailed topic-wise breakdown. The official syllabus PDF can also be downloaded from HSSC official website (hssc.gov.in) under the 'CET' section. Our page provides bilingual (English & Hindi) syllabus for easy understanding.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the exam pattern for HSSC CET Group C 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC CET Group C exam pattern 2026: Mode: Online (Computer Based Test), Total Questions: 100, Total Marks: 100, Duration: 90 minutes (1.5 hours), Negative Marking: 0.25 per wrong answer, Subjects: General Awareness (25 marks including Haryana GK), Reasoning (15-20 marks), Maths (15-20 marks), Computer (10-15 marks), English (10-15 marks), Hindi (10-15 marks).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Haryana GK included in General Awareness for CET?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, Haryana GK is a very important part of the General Awareness section in HSSC CET. Approximately 25 out of 100 marks are dedicated to Haryana-specific topics including Haryana History, Geography, Culture, Polity, Animal Husbandry, Sports, Current Affairs, and Famous Personalities of Haryana.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the passing marks for Haryana CET Group C?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The passing marks (cut off) for Haryana CET Group C varies by category and post. Generally, General category requires 45-50 marks, OBC/SC/ST categories have lower cut offs (35-40 marks). Cut off depends on exam difficulty, number of candidates, and available vacancies. Previous year cut offs: General (48), OBC (42), SC (38).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to prepare for Haryana CET Group C syllabus?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "To prepare for Haryana CET: (1) Download complete syllabus from this page, (2) Focus on Haryana GK (25 marks) - use our 33-chapter guide, (3) Practice Reasoning and Maths daily, (4) Improve Computer Knowledge with MS Office shortcuts, (5) Read English/Hindi newspapers for current affairs, (6) Solve previous year papers, (7) Take weekly mock tests.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which books are best for Haryana CET Group C preparation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Best books for Haryana CET Group C: (1) Haryana GK: Our complete 33-chapter PDF, (2) Reasoning: 'A Modern Approach to Verbal & Non-Verbal Reasoning' by R.S. Aggarwal, (3) Quantitative Aptitude: 'Quantitative Aptitude for Competitive Examinations' by R.S. Aggarwal, (4) Computer Knowledge: 'Objective Computer Awareness' by Arihant, (5) English: 'Objective General English' by S.P. Bakshi, (6) Hindi: 'Samanya Hindi' by Arihant.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is previous year question paper available for HSSC CET?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, HSSC CET previous year question papers are available on this website. Solving last 5 years (2020-2025) papers helps understand exam pattern, difficulty level, and important topics. You can find HSSC CET Group C previous year papers with answer keys in our practice section.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the age limit for Haryana CET Group C?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Haryana CET Group C age limit: Minimum 18 years, Maximum 42 years for General category. Age relaxation: SC/ST/OBC (5 years), PwD (10 years), Ex-servicemen (3 years after service). Age calculated as of 1st January 2026.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "When will HSSC CET Group C 2026 notification be released?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC CET Group C 2026 official notification is expected in March-April 2026. The online application form will be available on hssc.gov.in. The exam is tentatively scheduled for June-July 2026. Start your preparation now using our complete syllabus guide.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the selection process for HSSC CET Group C?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC CET Group C selection process has 3 stages: (1) Written Exam (CBT) - 100 marks, (2) Socio-Economic Criteria (if applicable) - up to 10 marks based on family income, parent's employment, etc., (3) Document Verification & Medical Examination. Final merit list is prepared based on total marks.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How can I contact CET TEST for Haryana CET study material?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can contact CET TEST via email at anujjaglan9423@gmail.com or call/whatsapp at 7291849546. Follow us on Instagram and Twitter @cet__test for daily updates, free mock tests, and preparation tips. Support hours: Monday to Saturday, 10 AM to 6 PM.",
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
                            { "@type": "ListItem", position: 2, name: "Haryana State Exams", item: `${baseUrl}/exams/haryana` },
                            { "@type": "ListItem", position: 3, name: "HSSC CET Group C", item: `${baseUrl}/exams/haryana/cet-group-c` },
                            { "@type": "ListItem", position: 4, name: "HSSC CET Group C Syllabus 2026", item: currentUrl },
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
                        awards: "Best Haryana CET Preparation Platform 2025",
                        description: "India's most trusted platform for HSSC CET Group C, Haryana Police, Patwari, Clerk, and Gram Sachiv exam preparation with free study material, mock tests, and PDFs.",
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

            {/* 6. HowTo Schema (Step-by-step preparation guide for GEO / AI answers) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "@id": `${currentUrl}#howto-prepare`,
                        name: "How to Prepare for Haryana CET Group C Exam in 3 Months",
                        description: "Complete 90-day study plan to crack HSSC CET Group C 2026 exam",
                        totalTime: "P90D",
                        estimatedCost: 0,
                        step: [
                            { "@type": "HowToStep", name: "Month 1: Master Syllabus & Basics", text: "Download complete syllabus PDF. Study each of 6 subjects: General Awareness (focus on Haryana GK 25 marks), Reasoning (verbal & non-verbal), Maths (arithmetic, algebra, geometry), Computer (fundamentals, MS Office), English (grammar, vocabulary), Hindi (व्याकरण, मुहावरे). Complete basic concepts first." },
                            { "@type": "HowToStep", name: "Week 1-2: Haryana GK & Current Affairs", text: "Study 33 chapters of Haryana GK: History, Geography, Culture, Polity, Animal Husbandry (Murrah buffalo), Sports (Phogat sisters). Read daily current affairs (last 6 months)." },
                            { "@type": "HowToStep", name: "Week 3-4: Reasoning & Quantitative Aptitude", text: "Practice Coding-Decoding, Blood Relations, Syllogism, Venn Diagrams. For Maths: Percentage, Profit-Loss, Time & Work, Mensuration, Data Interpretation. Solve 50 questions daily." },
                            { "@type": "HowToStep", name: "Month 2: Computer Knowledge & Languages", text: "Computer: Learn generations, hardware/software, MS Word/Excel shortcuts, internet protocols. English: Tenses, Prepositions, Active-Passive, Cloze test. Hindi: संधि, समास, पर्यायवाची, विलोम, मुहावरे." },
                            { "@type": "HowToStep", name: "Week 9-10: Full Syllabus Revision", text: "Revise all 6 subjects. Create short notes for important formulas, computer shortcuts, Hindi grammar rules, and Haryana GK one-liners." },
                            { "@type": "HowToStep", name: "Week 11: Previous Year Papers & Mock Tests", text: "Solve last 5 years HSSC CET papers. Take 10 full-length mock tests. Analyze mistakes. Time management is key - 90 minutes for 100 questions." },
                            { "@type": "HowToStep", name: "Week 12: Final Revision & Exam Strategy", text: "Revise weak areas. Practice Haryana GK and Computer section thoroughly. Plan attempt strategy: attempt easier sections first, avoid guesswork due to negative marking." },
                        ],
                    }),
                }}
            />

            {/* 7. ItemList Schema (All topics with marks distribution - For SGE Featured Lists) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "@id": `${currentUrl}#topic-list`,
                        name: "HSSC CET Group C 2026 - Complete Topic-wise Marks Distribution",
                        description: "Subject-wise and topic-wise marks breakdown for Haryana CET Group C examination",
                        numberOfItems: 25,
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "General Awareness (25 Marks) - Haryana GK" },
                            { "@type": "ListItem", position: 2, name: "General Awareness (25 Marks) - Indian History" },
                            { "@type": "ListItem", position: 3, name: "General Awareness (25 Marks) - Indian Polity" },
                            { "@type": "ListItem", position: 4, name: "General Awareness (25 Marks) - Indian Geography" },
                            { "@type": "ListItem", position: 5, name: "General Awareness (25 Marks) - General Science" },
                            { "@type": "ListItem", position: 6, name: "General Awareness (25 Marks) - Current Affairs" },
                            { "@type": "ListItem", position: 7, name: "General Reasoning (15-20 Marks) - Verbal Reasoning" },
                            { "@type": "ListItem", position: 8, name: "General Reasoning (15-20 Marks) - Non-Verbal Reasoning" },
                            { "@type": "ListItem", position: 9, name: "Quantitative Ability (15-20 Marks) - Arithmetic" },
                            { "@type": "ListItem", position: 10, name: "Quantitative Ability (15-20 Marks) - Algebra & Geometry" },
                            { "@type": "ListItem", position: 11, name: "Quantitative Ability (15-20 Marks) - Data Interpretation" },
                            { "@type": "ListItem", position: 12, name: "Computer Knowledge (10-15 Marks) - Fundamentals" },
                            { "@type": "ListItem", position: 13, name: "Computer Knowledge (10-15 Marks) - MS Office" },
                            { "@type": "ListItem", position: 14, name: "Computer Knowledge (10-15 Marks) - Internet & Networking" },
                            { "@type": "ListItem", position: 15, name: "Computer Knowledge (10-15 Marks) - Shortcut Keys" },
                            { "@type": "ListItem", position: 16, name: "English Language (10-15 Marks) - Grammar" },
                            { "@type": "ListItem", position: 17, name: "English Language (10-15 Marks) - Vocabulary" },
                            { "@type": "ListItem", position: 18, name: "English Language (10-15 Marks) - Comprehension" },
                            { "@type": "ListItem", position: 19, name: "English Language (10-15 Marks) - Error Detection" },
                            { "@type": "ListItem", position: 20, name: "Hindi Language (10-15 Marks) - हिन्दी व्याकरण" },
                            { "@type": "ListItem", position: 21, name: "Hindi Language (10-15 Marks) - संधि एवं समास" },
                            { "@type": "ListItem", position: 22, name: "Hindi Language (10-15 Marks) - पर्यायवाची एवं विलोम" },
                            { "@type": "ListItem", position: 23, name: "Hindi Language (10-15 Marks) - मुहावरे एवं लोकोक्तियाँ" },
                            { "@type": "ListItem", position: 24, name: "Hindi Language (10-15 Marks) - अपठित गद्यांश" },
                            { "@type": "ListItem", position: 25, name: "Mock Tests & Previous Year Papers Practice" },
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
                        description: "Best platform for HSSC CET Group C, Haryana Police, Patwari, Clerk, and Gram Sachiv exam preparation with free study material, mock tests, and PDFs.",
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
                        name: "HSSC CET Group C Syllabus 2026 PDF Download | Complete Haryana CET Exam Pattern",
                        isPartOf: { "@id": `${baseUrl}#website` },
                        speakable: {
                            "@type": "SpeakableSpecification",
                            xPath: ["/main-heading", "/syllabus-summary", "/faq-section"],
                            cssSelector: [".main-heading", ".syllabus-description", ".faq-item"],
                        },
                        dateModified: `${currentYear}-05-07T10:00:00+05:30`,
                        datePublished: "2026-01-01T09:00:00+05:30",
                        author: {
                            "@type": "Person",
                            name: "Anuj Jaglan",
                            email: email,
                        },
                        about: {
                            "@type": "Thing",
                            name: "HSSC CET Group C Syllabus",
                            description: "Complete syllabus for Haryana Common Eligibility Test Group C 2026",
                        },
                    }),
                }}
            />

            {/* 10. PotentialAction Schema (Download Action - PDF Download Button Recognition) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Action",
                        target: {
                            "@type": "EntryPoint",
                            urlTemplate: `${currentUrl}#download-pdf`,
                            actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                        },
                        name: "Download HSSC CET Group C Syllabus PDF",
                        description: "Download complete syllabus PDF for Haryana CET Group C 2026",
                        potentialAction: {
                            "@type": "DownloadAction",
                            object: {
                                "@type": "MediaObject",
                                contentUrl: `${currentUrl}/cet-syllabus-2026.pdf`,
                                encodingFormat: "application/pdf",
                            },
                        },
                    }),
                }}
            />

            {children}
        </>
    )
}