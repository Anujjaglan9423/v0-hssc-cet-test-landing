// app/uksssc-exam-syllabus/layout.tsx
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
    // Primary Title with Power Words & Numbers
    title: "UKSSSC Exam Syllabus 2026 PDF Download | Police Constable & VDO Complete Syllabus | Uttarakhand Exam Pattern",

    // Description optimized for Google SGE / Bing Chat (GEO) - Bilingual
    description: "UKSSSC Exam Syllabus 2026: डाउनलोड करें Police Constable (5 subjects: Computer, GK, Hindi, Reasoning, Maths) और VDO (4 subjects: GK, Hindi, Reasoning, Maths) का complete syllabus PDF. Uttarakhand GK, exam pattern, negative marking (0.25), physical standards, selection process & free mock tests. Official UKSSSC syllabus for all Group C posts.",

    // Keywords extended for long-tail & question-based queries (AEO)
    keywords: [
        // Primary & Secondary
        "UKSSSC syllabus", "UKSSSC exam syllabus", "UKSSSC Police Constable syllabus", "UKSSSC VDO syllabus",
        "Uttarakhand Police Constable syllabus", "Uttarakhand VDO syllabus", "UKSSSC syllabus 2026",
        "UKSSSC exam pattern", "UKSSSC selection process", "Uttarakhand exam syllabus",
        "UKSSSC preparation", "UKSSSC Police Constable exam pattern", "UKSSSC VDO exam pattern",
        "Uttarakhand GK syllabus", "UKSSSC previous year papers", "UKSSSC mock tests",

        // AEO: Question-based long-tail keywords
        "how to prepare for UKSSSC exam", "UKSSSC police constable cut off marks", "UKSSSC VDO salary",
        "UKSSSC exam date 2026", "UKSSSC notification 2026", "Uttarakhand GK important topics",
        "UKSSSC physical standards male female", "UKSSSC negative marking scheme",
        "UKSSSC police constable height requirement", "UKSSSC VDO qualification",
        "UKSSSC police constable running time", "Uttarakhand char dham GK questions",

        // GEO: Conversational & Generative AI phrases
        "complete UKSSSC exam guide", "step by step UKSSSC preparation", "everything about UKSSSC recruitment",
        "UKSSSC one liner revision", "Uttarakhand govt exam syllabus", "UKSSSC previous year analysis",
        "UKSSSC bilingual study material", "UKSSSC complete roadmap", "Uttarakhand police exam preparation",
        "best book for UKSSSC exam", "UKSSSC online form last date"
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
        title: "📚 UKSSSC Exam Syllabus 2026 PDF | Police Constable & VDO Complete Syllabus | Uttarakhand Exam Pattern",
        description: "✅ Police Constable: 5 Subjects (Computer, GK, Hindi, Reasoning, Maths) | ✅ VDO: 4 Subjects (GK, Hindi, Reasoning, Maths) | ✅ Uttarakhand GK Focus | ✅ Physical Standards: 168cm/81cm Male, 147cm Female | ✅ Free PDF Download + Mock Tests",
        url: "https://cettest.site/uksssc-exam-syllabus",
        siteName: "CET TEST | Govt Exam Prep",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-uksssc-syllabus-2026.jpg",
                width: 1200,
                height: 630,
                alt: "UKSSSC Exam Syllabus 2026 - Police Constable & VDO Complete Syllabus with Exam Pattern - Free PDF Download",
                type: "image/jpeg",
            },
        ],
        emails: ["anujjaglan9423@gmail.com"],
        phoneNumbers: ["+91 7291849546"],
    },

    // Twitter Card optimized for engagement
    twitter: {
        card: "summary_large_image",
        title: "UKSSSC Exam Syllabus 2026 PDF | Police Constable & VDO Complete Syllabus",
        description: "Download free PDF: Police Constable (5 subjects) & VDO (4 subjects). Uttarakhand GK, exam pattern, physical standards (168cm/81cm), negative marking, and free mock tests.",
        images: ["/twitter-uksssc-syllabus.jpg"],
        creator: "@cet__test",
        site: "@cet__test",
    },

    // Canonical & Alternate URLs
    alternates: {
        canonical: "https://cettest.site/uksssc-exam-syllabus",
        languages: {
            "en-IN": "https://cettest.site/uksssc-exam-syllabus",
        },
    },

    // Additional SEO tags
    category: "government-exam",
    classification: "Uttarakhand Government Recruitment | UKSSSC Syllabus 2026",

    // App Links for mobile
    appLinks: {
        web: {
            url: "https://cettest.site/uksssc-exam-syllabus",
            should_fallback: true,
        },
    },

    // Archive & other metadata
    archives: ["https://cettest.site/uksssc-previous-papers"],
    assets: ["https://cettest.site/assets/uksssc"],
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

export default function UKSSSCExamSyllabusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Base URL for all schemas
    const baseUrl = "https://cettest.site"
    const currentUrl = "https://cettest.site/uksssc-exam-syllabus"
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
                        name: "UKSSSC Police Constable & VDO Exam Preparation Program 2026",
                        description: "Complete syllabus and preparation program for UKSSSC Police Constable and Village Development Officer (VDO) examinations. Police Constable: 5 subjects (Computer Knowledge, General Knowledge & Current Affairs, General Hindi, Reasoning Ability, Numerical Ability) - 100 questions, 90 minutes, 0.25 negative marking. VDO: 4 subjects (Computer Knowledge NOT included) with focus on Uttarakhand GK and Panchayati Raj system.",
                        educationalProgramMode: "Exam Preparation",
                        timeToComplete: "P3M",
                        occupationalCategory: "Government Jobs - Uttarakhand Subordinate Service Selection Commission",
                        occupationalCredentialAwarded: "UKSSSC Police Constable / VDO Qualification",
                        programPrerequisites: "Police Constable: 10+2 Pass; VDO: Bachelor's Degree",
                        provider: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission (UKSSSC)",
                            url: "https://sssc.uk.gov.in",
                            sameAs: ["https://sssc.uk.gov.in"],
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "UKSSSC Police Constable Syllabus (5 Subjects)",
                                description: "Complete syllabus: (1) Computer Knowledge: Computer Fundamentals, MS Office, Internet, Cyber Security, (2) General Knowledge & Current Affairs: Uttarakhand GK (History, Culture, Geography), National & International Events, (3) General Hindi: व्याकरण, संधि, समास, मुहावरे, (4) Reasoning Ability: Verbal & Non-Verbal Reasoning, (5) Numerical Ability: Arithmetic, Algebra, Data Interpretation",
                            },
                            {
                                "@type": "Course",
                                name: "UKSSSC VDO Syllabus (4 Subjects)",
                                description: "Complete syllabus: (1) General Knowledge & Current Affairs: Uttarakhand GK, Panchayati Raj System, National Affairs, (2) General Hindi: हिन्दी व्याकरण, रचना, शब्द भंडार, (3) Reasoning Ability: Logical Reasoning, Analytical Ability, (4) Numerical Ability: Quantitative Aptitude, Data Interpretation. Computer Knowledge is NOT included in VDO exam.",
                            },
                        ],
                        financialAidEligible: false,
                        numberOfCredits: 100,
                        typicalCreditsPerTerm: 100,
                        termLength: "One Time Examination",
                        totalCost: 0,
                        evaluationType: "Computer Based Test (CBT) + Physical Standards (for Police Constable)",
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
                        name: "UKSSSC Police Constable & VDO Complete Syllabus 2026",
                        description: "Full syllabus for UKSSSC Police Constable (5 subjects: Computer Knowledge, GK & Current Affairs, General Hindi, Reasoning Ability, Numerical Ability) and VDO (4 subjects: GK, Hindi, Reasoning, Maths - no Computer). Includes Uttarakhand GK, exam pattern, physical standards, and selection process.",
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
                        educationalLevel: "10+2 to Graduate",
                        teaches: [
                            "Uttarakhand History (Formation as a State, 9 November 2000)",
                            "Uttarakhand Culture (Garhwali, Kumaoni, Jaunsari)",
                            "Uttarakhand Geography (Himalayas, Rivers, Glaciers, National Parks)",
                            "Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)",
                            "Jim Corbett National Park (India's First National Park)",
                            "Rajaji National Park & Valley of Flowers",
                            "Uttarakhand Panchayati Raj System",
                            "Uttarakhand Current Affairs 2026",
                            "Computer Fundamentals & MS Office (For Police Constable)",
                            "Internet, Networking & Cyber Security (For Police Constable)",
                            "General Hindi (Sandhi, Samas, Muhavare, Lokoktiyan)",
                            "Verbal & Non-Verbal Reasoning",
                            "Quantitative Aptitude (Arithmetic, Algebra, Geometry, Data Interpretation)",
                        ],
                        totalTime: "PT90H",
                        numberOfCredits: 100,
                        keywords: "UKSSSC, Police Constable, VDO, Uttarakhand GK, UKSSSC Syllabus, Uttarakhand Police",
                        offers: {
                            "@type": "Offer",
                            price: 0,
                            priceCurrency: "INR",
                            availability: "https://schema.org/OnlineOnly",
                            url: currentUrl,
                        },
                        audience: {
                            "@type": "Audience",
                            name: "UKSSSC Police Constable & VDO Aspirants",
                            geographicArea: "Uttarakhand, India",
                        },
                    }),
                }}
            />

            {/* 3. FAQ Schema with 16+ Questions (Critical for AEO - Featured Snippets) */}
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
                                name: "What is the difference between UKSSSC Police Constable and VDO syllabus?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Police Constable syllabus includes 5 subjects: Computer Knowledge (5 units including Computer Fundamentals, MS Office, Internet, Cyber Security), General Knowledge & Current Affairs, General Hindi, Reasoning Ability, and Numerical Ability. VDO syllabus has only 4 subjects: Computer Knowledge is NOT included. VDO focuses more on Uttarakhand GK, Panchayati Raj system, and rural development topics. Both exams have 100 questions, 90 minutes duration, and 0.25 negative marking.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Computer Knowledge included in UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, Computer Knowledge is NOT included in the UKSSSC VDO syllabus. Unlike Police Constable exam which has a dedicated Computer Knowledge section (approximately 15-20 questions), VDO exam focuses only on GK & Current Affairs, General Hindi, Reasoning Ability, and Numerical Ability. However, basic computer awareness can help in general knowledge section.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the physical standard for UKSSSC Police Constable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Police Constable physical standards (minimum): Male General/OBC: Height 168 cm, Chest 81 cm (with 5 cm expansion). Male SC/ST: Height 162 cm, Chest 79 cm. Female General/OBC: Height 147 cm. Female SC/ST: Height 142 cm. Running: Male: 4.8 km in 25 minutes, Female: 2.4 km in 18 minutes. Check official notification for category-wise details.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the negative marking scheme for UKSSSC exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC examinations have negative marking of 1/4th (0.25) mark for each wrong answer. Unanswered questions receive no penalty. So for every 4 wrong answers, you lose 1 mark. Avoid guesswork unless you are 70-80% confident. Always check the latest official notification for exact pattern as it may vary by exam.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of UKSSSC Police Constable exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The UKSSSC Police Constable written examination is conducted for 90 minutes (1.5 hours) with 100 objective-type multiple choice questions (MCQs). Subjects: Computer Knowledge (15-20 questions), GK & Current Affairs (30-35 questions), General Hindi (15-20 questions), Reasoning Ability (15-20 questions), Numerical Ability (15-20 questions).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The UKSSSC VDO written examination is conducted for 90 minutes (1.5 hours) with 100 objective-type multiple choice questions. Subject distribution: General Knowledge & Current Affairs (35-40 questions with focus on Uttarakhand GK), General Hindi (20-25 questions), Reasoning Ability (15-20 questions), Numerical Ability (15-20 questions). Computer Knowledge section is absent in VDO exam.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which topics are most important for Uttarakhand GK in UKSSSC exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most important Uttarakhand GK topics for UKSSSC exams: (1) History: Formation of Uttarakhand (9 November 2000), Ancient Kingdoms (Katyuri, Chand, Pawar dynasties), (2) Culture: Garhwali, Kumaoni, Jaunsari languages and traditions, Fairs & Festivals (Nanda Devi Raj Jat, Kumbh Mela Haridwar), (3) Geography: Himalayas, Glaciers (Gangotri, Yamunotri), Rivers (Ganga, Yamuna), (4) National Parks: Jim Corbett (India's first), Rajaji, Valley of Flowers, (5) Char Dham Yatra: Yamunotri, Gangotri, Kedarnath, Badrinath, (6) Panchayati Raj System & Current Affairs.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I take UKSSSC exams in Hindi language?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, the UKSSSC question paper is usually bilingual (Hindi and English) for all sections except the language papers. General Hindi section is in Hindi only. Computer Knowledge section is bilingual. This makes it accessible for candidates who prefer either language.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the selection process for UKSSSC Police Constable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Police Constable selection process has 4 stages: (1) Written Examination (CBT) - 100 marks, 100 questions, 90 minutes, (2) Physical Efficiency Test (PET) - Running, (3) Physical Standard Test (PST) - Height, Chest, Weight measurement, (4) Document Verification & Medical Examination. Final merit list based on written exam scores and PET/PST qualification status.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the qualification for UKSSSC VDO post?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC VDO (Village Development Officer) qualification: Bachelor's degree from a recognized university. Some specific requirements include knowledge of Hindi language (written and spoken). Age limit: 21-42 years for General category (age relaxation for SC/ST/OBC). Preference given to candidates with knowledge of Panchayati Raj system and rural development.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "When will UKSSSC notification 2026 be released?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC (Uttarakhand Subordinate Service Selection Commission) typically releases notifications in February-March for Police Constable and VDO exams. The official notification will be available on sssc.uk.gov.in. Exam expected in June-July 2026. Start your preparation now using our complete syllabus guide.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to prepare for UKSSSC Police Constable exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "To prepare for UKSSSC Police Constable: (1) Download complete syllabus from this page, (2) Focus on Uttarakhand GK (30-35% weightage), (3) Master Computer Knowledge section (unique to Police exam), (4) Practice Reasoning and Maths daily (20-30 questions each), (5) Read Hindi newspapers for current affairs, (6) Take weekly mock tests, (7) Prepare physically for PET/PST standards (168cm height, 4.8 km running).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which books are best for UKSSSC exam preparation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Best books for UKSSSC exams: (1) Uttarakhand GK: 'Uttarakhand Samanya Gyan' by Arihant or 'UKSSSC Special GK' by Kiran, (2) Reasoning: 'A Modern Approach to Reasoning' by R.S. Aggarwal, (3) Quantitative Aptitude: 'Quantitative Aptitude for Competitive Exams' by R.S. Aggarwal, (4) Computer Knowledge: 'Objective Computer Awareness' by Arihant, (5) General Hindi: 'Samanya Hindi' by Arihant or 'Hindi Vyakaran' by Dr. Hardev Bahri.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the salary of UKSSSC VDO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC VDO (Village Development Officer) salary ranges from ₹35,000 to ₹45,000 per month in hand based on Level 6 pay scale (₹35,400 - ₹1,12,400). Additional allowances include Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance, and Medical benefits. The salary increases with experience and annual increments.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there an interview for UKSSSC Police Constable selection?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, there is no interview for UKSSSC Police Constable selection. The selection process consists of (1) Written Examination (CBT) - 100 marks, (2) Physical Efficiency Test (PET) - Qualifying only, (3) Physical Standard Test (PST), (4) Document Verification. Final merit is 100% based on written exam marks, provided candidate qualifies PET/PST.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How can I contact CET TEST for UKSSSC study material?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can contact CET TEST via email at anujjaglan9423@gmail.com or call/whatsapp at 7291849546. Follow us on Instagram and Twitter @cet__test for daily Uttarakhand GK questions, current affairs updates, free mock tests, and preparation tips for UKSSSC 2026. Support hours: Monday to Saturday, 10 AM to 6 PM.",
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
                            { "@type": "ListItem", position: 2, name: "Uttarakhand Exams", item: `${baseUrl}/uttarakhand-exams` },
                            { "@type": "ListItem", position: 3, name: "UKSSSC", item: `${baseUrl}/uksssc` },
                            { "@type": "ListItem", position: 4, name: "UKSSSC Exam Syllabus 2026", item: currentUrl },
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
                        awards: "Best Uttarakhand & Haryana Exam Preparation Platform 2025",
                        description: "India's most trusted platform for UKSSSC, Police Constable, VDO, HSSC CET, and other government exam preparation with free study material, mock tests, and PDFs.",
                        founder: {
                            "@type": "Person",
                            name: "Anuj Jaglan",
                            email: email,
                            telephone: phone,
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "IN",
                            addressRegion: "Uttarakhand & Haryana",
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
                        name: "How to Prepare for UKSSSC Police Constable & VDO Exams in 90 Days",
                        description: "Complete 90-day study plan to crack UKSSSC Police Constable and VDO 2026 examinations",
                        totalTime: "P90D",
                        estimatedCost: 0,
                        step: [
                            { "@type": "HowToStep", name: "Month 1: Master Syllabus & Uttarakhand GK", text: "Download complete syllabus PDF. Study Uttarakhand GK: History (Formation 9 Nov 2000), Culture (Garhwali, Kumaoni), Geography (Himalayas, Rivers, Glaciers), National Parks (Jim Corbett, Rajaji, Valley of Flowers), Char Dham Yatra. This carries 30-35% weightage." },
                            { "@type": "HowToStep", name: "Week 1-2: Uttarakhand GK Deep Dive", text: "Focus on Uttarakhand specific topics: Katyuri, Chand dynasties, Nanda Devi Raj Jat festival, Ganga-Yamuna river system, Panchayati Raj institutions. Make short notes for revision." },
                            { "@type": "HowToStep", name: "Week 3-4: Computer Knowledge & General Hindi", text: "For Police Constable: Master Computer Fundamentals, MS Word/Excel shortcuts, Internet protocols, Cyber Security basics. For Hindi: Learn Sandhi, Samas, Muhavare, Lokoktiyan, Synonyms, Antonyms." },
                            { "@type": "HowToStep", name: "Month 2: Reasoning & Numerical Ability", text: "Practice Reasoning: Coding-Decoding, Blood Relations, Syllogism, Logical Venn Diagrams. Maths: Percentage, Profit-Loss, Time & Work, Mensuration, Data Interpretation. Solve 30 questions daily." },
                            { "@type": "HowToStep", name: "Week 9-10: Current Affairs & Full Revision", text: "Cover last 6 months Uttarakhand & National current affairs. Revise all subjects. Create one-liner notes for Uttarakhand GK, Computer shortcuts, Hindi grammar rules." },
                            { "@type": "HowToStep", name: "Week 11: Mock Tests & Previous Year Papers", text: "Take 10 full-length UKSSSC mock tests. Solve last 5 years papers. Time management is key - 90 minutes for 100 questions. Analyze weak areas." },
                            { "@type": "HowToStep", name: "Week 12: Physical Preparation (Police Constable Only)", text: "If preparing for Police Constable, prepare physically: 4.8 km running in 25 minutes (male) or 2.4 km in 18 minutes (female). Maintain height (168cm male/147cm female) and chest (81cm with expansion)." },
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
                        name: "UKSSSC Police Constable & VDO 2026 - Complete Topic-wise Marks Distribution",
                        description: "Subject-wise and topic-wise marks breakdown for UKSSSC Police Constable (5 subjects) and VDO (4 subjects) examinations",
                        numberOfItems: 20,
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Uttarakhand History (Formation & Ancient Kingdoms)" },
                            { "@type": "ListItem", position: 2, name: "Uttarakhand Culture (Garhwali, Kumaoni, Jaunsari)" },
                            { "@type": "ListItem", position: 3, name: "Uttarakhand Geography (Himalayas, Rivers, Glaciers)" },
                            { "@type": "ListItem", position: 4, name: "Char Dham Yatra & Pilgrimage Sites" },
                            { "@type": "ListItem", position: 5, name: "National Parks: Jim Corbett, Rajaji, Valley of Flowers" },
                            { "@type": "ListItem", position: 6, name: "Uttarakhand Current Affairs 2026" },
                            { "@type": "ListItem", position: 7, name: "Computer Fundamentals (For Police Constable)" },
                            { "@type": "ListItem", position: 8, name: "MS Office (Word, Excel, PowerPoint) - For Police Constable" },
                            { "@type": "ListItem", position: 9, name: "Internet & Cybersecurity - For Police Constable" },
                            { "@type": "ListItem", position: 10, name: "General Hindi: Sandhi, Samas, Muhavare" },
                            { "@type": "ListItem", position: 11, name: "General Hindi: Synonyms, Antonyms, One Word Substitution" },
                            { "@type": "ListItem", position: 12, name: "Verbal Reasoning: Coding-Decoding, Blood Relations" },
                            { "@type": "ListItem", position: 13, name: "Non-Verbal Reasoning: Figure Series, Mirror Images" },
                            { "@type": "ListItem", position: 14, name: "Syllogism & Logical Venn Diagrams" },
                            { "@type": "ListItem", position: 15, name: "Numerical Ability: Percentage, Profit-Loss" },
                            { "@type": "ListItem", position: 16, name: "Arithmetic: Time & Work, Time & Distance, Average" },
                            { "@type": "ListItem", position: 17, name: "Algebra & Geometry Basics" },
                            { "@type": "ListItem", position: 18, name: "Data Interpretation (Bar Graph, Pie Chart, Table)" },
                            { "@type": "ListItem", position: 19, name: "Panchayati Raj System & Rural Development (VDO Focus)" },
                            { "@type": "ListItem", position: 20, name: "Physical Standards (168cm/81cm Male, 147cm Female)" },
                        ],
                    }),
                }}
            />

            {/* 8. JobPosting Schema with Complete Details (For Police Constable) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        "@id": `${currentUrl}#police-job`,
                        title: "UKSSSC Police Constable Recruitment 2026",
                        description: "Recruitment for Police Constable positions in Uttarakhand Police. Selection based on written exam (5 subjects: Computer Knowledge, GK & Current Affairs, General Hindi, Reasoning, Numerical Ability), physical standards (Height: 168cm Male, 147cm Female, Chest: 81cm Male), physical efficiency test (4.8 km running in 25 min Male), and document verification.",
                        datePosted: "2026-01-01",
                        validThrough: "2026-12-31",
                        employmentType: "FULL_TIME",
                        hiringOrganization: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission (UKSSSC)",
                            sameAs: "https://sssc.uk.gov.in",
                        },
                        jobLocation: {
                            "@type": "Place",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Uttarakhand",
                                addressRegion: "UK",
                                addressCountry: "India",
                            },
                        },
                        qualifications: "10+2 pass or equivalent from a recognized board",
                        physicalRequirements: "Male General/OBC: 168cm height, 81cm chest (5cm expansion). Male SC/ST: 162cm height, 79cm chest. Female General: 147cm height. Female SC/ST: 142cm height. Running: Male 4.8 km/25 min, Female 2.4 km/18 min.",
                        estimatedSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: {
                                "@type": "QuantitativeValue",
                                minValue: 35000,
                                maxValue: 45000,
                                unitText: "MONTH",
                            },
                        },
                        baseSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: 35400,  // ✅ Direct number, not object
                            unitText: "MONTH",
                        },
                        occupationalCategory: "Law Enforcement",
                    }),
                }}
            />

            {/* 9. JobPosting Schema (For VDO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        "@id": `${currentUrl}#vdo-job`,
                        title: "UKSSSC VDO (Village Development Officer) Recruitment 2026",
                        description: "Recruitment for Village Development Officer (VDO) positions in Uttarakhand. Selection based on written exam (4 subjects: GK & Current Affairs, General Hindi, Reasoning, Numerical Ability - Computer Knowledge NOT included). Focus on Uttarakhand GK, Panchayati Raj system, and rural development.",
                        datePosted: "2026-01-01",
                        validThrough: "2026-12-31",
                        employmentType: "FULL_TIME",
                        hiringOrganization: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission (UKSSSC)",
                            sameAs: "https://sssc.uk.gov.in",
                        },
                        jobLocation: {
                            "@type": "Place",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Uttarakhand",
                                addressRegion: "UK",
                                addressCountry: "India",
                            },
                        },
                        qualifications: "Bachelor's degree from a recognized university",
                        estimatedSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: {
                                "@type": "QuantitativeValue",
                                minValue: 35000,
                                maxValue: 45000,
                                unitText: "MONTH",
                            },
                        },
                        baseSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: 35400,  // ✅ Direct number
                            unitText: "MONTH",
                        },
                        occupationalCategory: "Rural Development",
                        responsibilities: "Implementing government schemes at village level, Panchayati Raj coordination, rural development planning.",
                    }),
                }}
            />

            {/* 10. SearchAction Schema (For Google SGE / Voice Search) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "@id": `${baseUrl}#website`,
                        url: baseUrl,
                        name: "CET TEST - Uttarakhand & Haryana Govt Exam Prep",
                        description: "Best platform for UKSSSC, HSSC CET, Haryana Police, Uttarakhand Police, Patwari, Clerk, and other government exam preparation with free study material, mock tests, and PDFs.",
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

            {/* 11. SpeakableSpecification Schema (For Google Assistant / Voice SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": `${currentUrl}#webpage`,
                        url: currentUrl,
                        name: "UKSSSC Exam Syllabus 2026 PDF Download | Police Constable & VDO Complete Syllabus",
                        isPartOf: { "@id": `${baseUrl}#website` },
                        speakable: {
                            "@type": "SpeakableSpecification",
                            xPath: ["/main-heading", "/syllabus-summary", "/faq-section", "/uksssc-police-section", "/uksssc-vdo-section"],
                            cssSelector: [".main-heading", ".syllabus-description", ".faq-item", ".police-syllabus", ".vdo-syllabus"],
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
                            name: "UKSSSC Exam Syllabus",
                            description: "Complete syllabus for Uttarakhand Subordinate Service Selection Commission examinations including Police Constable and VDO",
                        },
                        primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: "/og-uksssc-syllabus-2026.jpg",
                            caption: "UKSSSC Exam Syllabus 2026 Police Constable & VDO",
                        },
                    }),
                }}
            />

            {/* 12. PotentialAction Schema (PDF Download Action) */}
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
                        name: "Download UKSSSC Syllabus PDF",
                        description: "Download complete UKSSSC Police Constable and VDO syllabus PDF for 2026",
                        potentialAction: {
                            "@type": "DownloadAction",
                            object: {
                                "@type": "MediaObject",
                                contentUrl: `${currentUrl}/uksssc-syllabus-2026.pdf`,
                                encodingFormat: "application/pdf",
                                name: "UKSSSC_Complete_Syllabus_2026.pdf",
                                description: "Complete syllabus for UKSSSC Police Constable (5 subjects) and VDO (4 subjects) with topic-wise breakdown and exam pattern",
                            },
                        },
                    }),
                }}
            />

            {children}
        </>
    )
}