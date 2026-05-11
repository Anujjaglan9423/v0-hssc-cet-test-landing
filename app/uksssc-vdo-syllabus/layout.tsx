// app/uksssc-vdo-syllabus/layout.tsx
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
    // Primary Title with Power Words & Numbers
    title: "UKSSSC VDO Syllabus 2026 PDF Download | Gram Vikas Adhikari Complete Exam Pattern | Uttarakhand VDO Selection Process",

    // Description optimized for Google SGE / Bing Chat (GEO) - Bilingual
    description: "UKSSSC VDO Syllabus 2026: डाउनलोड करें Gram Vikas Adhikari complete syllabus PDF. 4 subjects: Uttarakhand GK (30-35 Qs), General Hindi (20-25 Qs), Reasoning (15-20 Qs), Numerical Ability (15-20 Qs). Exam pattern, negative marking (0.25), 100 questions, 90 minutes, selection process, eligibility, salary ₹35,000-45,000, and free mock tests. Computer Knowledge NOT included.",

    // Keywords extended for long-tail & question-based queries (AEO)
    keywords: [
        // Primary & Secondary
        "UKSSSC VDO syllabus 2026", "Uttarakhand Gram Vikas Adhikari syllabus", "UKSSSC VDO exam pattern 2026",
        "Uttarakhand VDO selection process", "UKSSSC VDO previous year question papers",
        "Uttarakhand GK for VDO exam", "UKSSSC VDO physical standards", "Village Development Officer recruitment 2026 Uttarakhand",
        "UKSSSC VDO Hindi syllabus PDF", "Uttarakhand Panchayati Raj system GK", "UKSSSC VDO numerical ability topics",
        "UKSSSC VDO eligibility criteria", "Uttarakhand state govt exam syllabus 2026", "UKSSSC VDO preparation strategy",

        // AEO: Question-based long-tail keywords
        "how to prepare for UKSSSC VDO exam", "UKSSSC VDO cut off marks", "UKSSSC VDO salary 2026",
        "UKSSSC VDO exam date 2026", "UKSSSC VDO notification 2026", "Uttarakhand VDO qualification",
        "UKSSSC VDO age limit", "UKSSSC VDO application form last date", "UKSSSC VDO vacancy 2026",
        "Uttarakhand Gram Vikas Adhikari question paper", "UKSSSC VDO answer key", "UKSSSC VDO result 2026",
        "UKSSSC VDO physical test", "Uttarakhand VDO job profile", "UKSSSC VDO promotion",

        // GEO: Conversational & Generative AI phrases
        "complete UKSSSC VDO exam guide", "step by step VDO preparation", "everything about Uttarakhand VDO recruitment",
        "UKSSSC VDO one liner revision", "Uttarakhand village development officer syllabus", "UKSSSC VDO previous year analysis",
        "UKSSSC VDO bilingual study material", "UKSSSC VDO complete roadmap", "best book for UKSSSC VDO",
        "UKSSSC VDO online coaching", "UKSSSC VDO mock test series", "UKSSSC VDO free study material"
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
        title: "📚 UKSSSC VDO Syllabus 2026 PDF | Gram Vikas Adhikari Complete Exam Pattern | Uttarakhand VDO Selection Process",
        description: "✅ 4 Subjects: GK (30-35 Qs), Hindi (20-25 Qs), Reasoning (15-20 Qs), Maths (15-20 Qs) | ✅ Negative Marking 0.25 | ✅ 100 Questions, 90 Minutes | ✅ Computer Knowledge NOT Included | ✅ Salary ₹35,000-45,000 | ✅ Free PDF + Mock Tests",
        url: "https://cettest.site/uksssc-vdo-syllabus",
        siteName: "CET TEST | Uttarakhand Govt Exam Prep",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-uksssc-vdo-syllabus-2026.jpg",
                width: 1200,
                height: 630,
                alt: "UKSSSC VDO Syllabus 2026 - Gram Vikas Adhikari Complete Exam Pattern with 4 Subjects - Free PDF Download",
                type: "image/jpeg",
            },
        ],
        emails: ["anujjaglan9423@gmail.com"],
        phoneNumbers: ["+91 7291849546"],
    },

    // Twitter Card optimized for engagement
    twitter: {
        card: "summary_large_image",
        title: "UKSSSC VDO Syllabus 2026 PDF | Gram Vikas Adhikari Complete Exam Pattern",
        description: "Download free PDF: Uttarakhand GK, General Hindi, Reasoning, Numerical Ability. 100 questions, 90 minutes, 0.25 negative marking. Computer Knowledge NOT included. Salary ₹35K-45K.",
        images: ["/twitter-uksssc-vdo-syllabus.jpg"],
        creator: "@cet__test",
        site: "@cet__test",
    },

    // Canonical & Alternate URLs
    alternates: {
        canonical: "https://cettest.site/uksssc-vdo-syllabus",
        languages: {
            "en-IN": "https://cettest.site/uksssc-vdo-syllabus",
        },
    },

    // Additional SEO tags
    category: "uttarakhand-exam",
    classification: "Village Development Officer Recruitment | UKSSSC VDO Syllabus 2026",

    // App Links for mobile
    appLinks: {
        web: {
            url: "https://cettest.site/uksssc-vdo-syllabus",
            should_fallback: true,
        },
    },

    // Archive & other metadata
    archives: ["https://cettest.site/uksssc-vdo-previous-papers"],
    assets: ["https://cettest.site/assets/uksssc-vdo"],
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

export default function UKSSSCVDOSyllabusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Base URL for all schemas
    const baseUrl = "https://cettest.site"
    const currentUrl = "https://cettest.site/uksssc-vdo-syllabus"
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
                        name: "UKSSSC VDO (Gram Vikas Adhikari) Exam Preparation Program 2026",
                        description: "Complete syllabus and preparation program for UKSSSC Village Development Officer (VDO) / Gram Vikas Adhikari examination. 4 Subjects: General Knowledge & Current Affairs (30-35 questions including Uttarakhand GK, Panchayati Raj system), General Hindi (20-25 questions covering Sandhi, Samas, Muhavare), Reasoning Ability (15-20 questions - Verbal & Non-Verbal), Numerical Ability (15-20 questions - Arithmetic, Algebra, Data Interpretation). Computer Knowledge is NOT included. Exam: 100 questions, 90 minutes, 0.25 negative marking.",
                        educationalProgramMode: "Exam Preparation",
                        timeToComplete: "P3M",
                        occupationalCategory: "Rural Development Services - Uttarakhand Government",
                        occupationalCredentialAwarded: "Village Development Officer (Gram Vikas Adhikari) Position",
                        programPrerequisites: "Bachelor's degree from a recognized university",
                        provider: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission (UKSSSC)",
                            url: "https://sssc.uk.gov.in",
                            sameAs: ["https://sssc.uk.gov.in"],
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "General Knowledge & Current Affairs (30-35 Questions)",
                                description: "Uttarakhand GK: History (Formation 9 Nov 2000, Katyuri & Chand dynasties), Culture (Garhwali, Kumaoni, Jaunsari traditions), Geography (Himalayas, Glaciers, Rivers, National Parks), Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath), Jim Corbett National Park, Rajaji National Park, Valley of Flowers, Panchayati Raj System, Current Affairs (last 6 months - National & International, Sports, Awards, Schemes), Indian Polity, Economy, General Science",
                            },
                            {
                                "@type": "Course",
                                name: "General Hindi (सामान्य हिन्दी) - 20-25 Questions",
                                description: "हिन्दी व्याकरण: संज्ञा, सर्वनाम, विशेषण, क्रिया, काल, वचन, लिंग, कारक, रचना: संधि (स्वर, व्यंजन, विसर्ग), समास (तत्पुरुष, द्वंद्व, बहुव्रीहि, अव्ययीभाव, कर्मधारय), उपसर्ग, प्रत्यय, शब्द भंडार: पर्यायवाची शब्द, विलोम शब्द, अनेकार्थी शब्द, शब्द युग्म, मुहावरे एवं लोकोक्तियाँ, वाक्य शुद्धिकरण, अपठित गद्यांश",
                            },
                            {
                                "@type": "Course",
                                name: "Reasoning Ability (15-20 Questions)",
                                description: "Verbal Reasoning: Analogies, Classification, Series Completion, Coding-Decoding, Blood Relations, Direction Sense, Alphabet Test, Number Ranking, Time Sequence, Logical Venn Diagrams, Syllogism, Statement & Assumptions, Statement & Conclusions. Non-Verbal Reasoning: Figure Series, Mirror Images, Water Images, Paper Cutting & Folding, Embedded Figures, Analytical Reasoning",
                            },
                            {
                                "@type": "Course",
                                name: "Numerical Ability (15-20 Questions)",
                                description: "Number System, HCF & LCM, Simplification, Percentage, Profit & Loss, Discount, Simple & Compound Interest, Ratio & Proportion, Partnership, Average, Age Problems, Time & Work, Pipes & Cisterns, Time & Distance, Boats & Streams, Mixture & Alligation, Mensuration (2D & 3D), Algebra (Linear Equations, Quadratic Equations), Geometry (Lines, Angles, Triangles, Circles), Data Interpretation (Bar Graph, Line Graph, Pie Chart, Table)",
                            },
                        ],
                        financialAidEligible: false,
                        numberOfCredits: 100,
                        typicalCreditsPerTerm: 100,
                        termLength: "One Time Examination",
                        totalCost: 0,
                        evaluationType: "Computer Based Test (CBT) + Document Verification",
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
                        name: "UKSSSC VDO (Gram Vikas Adhikari) Complete Syllabus 2026",
                        description: "Full syllabus for UKSSSC Village Development Officer (VDO) exam 2026 with 4 subjects: General Knowledge & Current Affairs (Uttarakhand GK focus), General Hindi, Reasoning Ability, Numerical Ability. Computer Knowledge NOT included. 100 questions, 90 minutes, 0.25 negative marking. Salary range: ₹35,000-45,000 per month.",
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
                        educationalLevel: "Bachelor's Degree",
                        teaches: [
                            "Uttarakhand History (Formation as a State, 9 November 2000)",
                            "Uttarakhand Culture (Garhwali, Kumaoni, Jaunsari traditions)",
                            "Uttarakhand Geography (Himalayas, Glaciers, Rivers, National Parks)",
                            "Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)",
                            "Jim Corbett National Park (India's First National Park)",
                            "Rajaji National Park & Valley of Flowers",
                            "Uttarakhand Panchayati Raj System",
                            "Uttarakhand Current Affairs 2026",
                            "General Hindi (Sandhi, Samas, Muhavare, Lokoktiyan)",
                            "Verbal & Non-Verbal Reasoning",
                            "Quantitative Aptitude (Arithmetic, Algebra, Geometry, Data Interpretation)",
                            "Indian Polity & Constitution",
                            "General Science (Physics, Chemistry, Biology)",
                            "National & International Current Affairs",
                        ],
                        totalTime: "PT90H",
                        numberOfCredits: 100,
                        keywords: "UKSSSC VDO, Gram Vikas Adhikari, Uttarakhand GK, VDO Syllabus, Village Development Officer",
                        offers: {
                            "@type": "Offer",
                            price: 0,
                            priceCurrency: "INR",
                            availability: "https://schema.org/OnlineOnly",
                            url: currentUrl,
                        },
                        audience: {
                            "@type": "Audience",
                            name: "UKSSSC VDO (Gram Vikas Adhikari) Aspirants",
                            geographicArea: "Uttarakhand, India",
                        },
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
                                name: "What is the full syllabus for UKSSSC VDO exam 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The UKSSSC VDO (Village Development Officer) / Gram Vikas Adhikari syllabus includes 4 main subjects: (1) General Knowledge & Current Affairs (30-35 questions) - Uttarakhand GK (History, Culture, Geography, Panchayati Raj), Indian Polity, Economy, General Science, Current Affairs, (2) General Hindi (20-25 questions) - Grammar (Sandhi, Samas, Muhavare), Composition, Literature, (3) Reasoning Ability (15-20 questions) - Verbal & Non-Verbal Reasoning, (4) Numerical Ability (15-20 questions) - Arithmetic, Algebra, Geometry, Data Interpretation. Computer Knowledge is NOT included in VDO syllabus.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many questions are asked from each subject in UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "As per previous year patterns of UKSSSC VDO exam: General Knowledge & Current Affairs (30-35 questions), General Hindi (20-25 questions), Reasoning Ability (15-20 questions), Numerical Ability (15-20 questions). Total 100 questions for 100 marks. Exam duration is 90 minutes with 0.25 negative marking for wrong answers.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there negative marking in UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, UKSSSC VDO exam has negative marking of 1/4th (0.25) mark for each wrong answer. No marks are deducted for unanswered questions. So for every 4 wrong answers, you lose 1 mark. Always check the latest official notification for exact pattern as it may vary.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The UKSSSC VDO written examination is conducted for 90 minutes (1.5 hours) with 100 objective-type multiple choice questions (MCQs). Time management is crucial - you have approximately 54 seconds per question.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which topics are most important for UKSSSC VDO General Knowledge section?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most important GK topics for UKSSSC VDO exam: (1) Uttarakhand History: Formation of Uttarakhand (9 November 2000), Katyuri & Chand dynasties, (2) Uttarakhand Culture: Garhwali, Kumaoni, Jaunsari traditions, Fairs & Festivals (Nanda Devi Raj Jat, Kumbh Mela Haridwar), (3) Uttarakhand Geography: Himalayas, Glaciers (Gangotri, Yamunotri), Rivers (Ganga, Yamuna), (4) National Parks: Jim Corbett (India's first), Rajaji, Valley of Flowers, (5) Char Dham Yatra: Yamunotri, Gangotri, Kedarnath, Badrinath, (6) Panchayati Raj System, (7) Current Affairs (last 6 months).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Computer Knowledge included in UKSSSC VDO syllabus?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, Computer Knowledge is NOT included in the UKSSSC VDO syllabus. Unlike Police Constable exam which has a dedicated Computer Knowledge section (15-20 questions), VDO exam focuses only on 4 subjects: General Knowledge & Current Affairs, General Hindi, Reasoning Ability, and Numerical Ability. Basic computer awareness may help indirectly but no direct questions are asked.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the educational qualification for UKSSSC VDO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC VDO (Village Development Officer) educational qualification: Bachelor's degree from a recognized university. Some specific requirements include knowledge of Hindi language (written and spoken). Age limit: 21-42 years for General category (age relaxation for SC/ST/OBC as per government norms).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I take the UKSSSC VDO exam in Hindi language?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, the UKSSSC VDO question paper is bilingual (Hindi and English) for all sections except the General Hindi section. The General Hindi section is in Hindi only. This makes it accessible for candidates who prefer either language.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the salary of UKSSSC VDO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC VDO (Village Development Officer) / Gram Vikas Adhikari salary ranges from ₹35,000 to ₹45,000 per month in hand based on Level 6 pay scale (₹35,400 - ₹1,12,400). Additional allowances include Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance, and Medical benefits. The salary increases with experience and annual increments.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the selection process for UKSSSC VDO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC VDO selection process has 3 stages: (1) Written Examination (CBT) - 100 marks, 100 questions, 90 minutes covering 4 subjects (GK, Hindi, Reasoning, Maths), (2) Document Verification - Verification of educational certificates, caste certificates, etc., (3) Medical Examination. There is no physical test (PET/PST) for VDO unlike Police Constable. Final merit list is based on written exam scores.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "When will UKSSSC VDO notification 2026 be released?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC (Uttarakhand Subordinate Service Selection Commission) typically releases VDO notifications in February-March 2026. The official notification will be available on sssc.uk.gov.in. Examination expected in June-July 2026. Start your preparation now using our complete syllabus guide.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to prepare for UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "To prepare for UKSSSC VDO exam: (1) Download complete syllabus from this page, (2) Focus on Uttarakhand GK (30-35% weightage - Char Dham, Jim Corbett, Panchayati Raj), (3) Master General Hindi grammar (Sandhi, Samas, Muhavare), (4) Practice Reasoning and Maths daily (20-30 questions each), (5) Read Hindi newspapers for current affairs, (6) Take weekly mock tests, (7) Solve previous year papers.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which books are best for UKSSSC VDO exam preparation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Best books for UKSSSC VDO exam: (1) Uttarakhand GK: 'Uttarakhand Samanya Gyan' by Arihant or 'UKSSSC VDO Special GK' by Kiran Prakashan, (2) General Hindi: 'Samanya Hindi' by Arihant or 'Hindi Vyakaran' by Dr. Hardev Bahri, (3) Reasoning: 'A Modern Approach to Reasoning' by R.S. Aggarwal, (4) Quantitative Aptitude: 'Quantitative Aptitude for Competitive Exams' by R.S. Aggarwal, (5) Current Affairs: Monthly magazines or online sources.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the age limit for UKSSSC VDO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC VDO age limit: Minimum 21 years, Maximum 42 years for General category as of January 1, 2026. Age relaxation: SC/ST/OBC (5 years), PwD (10 years), Ex-servicemen (3 years after service). Age is calculated based on official notification dates.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there an interview for UKSSSC VDO selection?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, there is no interview for UKSSSC VDO selection. The selection process consists of (1) Written Examination (CBT) - 100 marks, (2) Document Verification, (3) Medical Examination. Final merit is 100% based on written exam marks, provided candidate clears document verification and medical standards.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the job profile of UKSSSC VDO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC VDO (Village Development Officer) / Gram Vikas Adhikari job profile includes: (1) Implementing government schemes at village level, (2) Coordinating with Panchayati Raj institutions, (3) Rural development planning and execution, (4) Monitoring MGNREGA, PMAY, and other welfare schemes, (5) Maintaining village records, (6) Assisting in election duties, (7) Disaster management and relief work.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How can I contact CET TEST for UKSSSC VDO study material?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can contact CET TEST via email at anujjaglan9423@gmail.com or call/whatsapp at 7291849546. Follow us on Instagram and Twitter @cet__test for daily Uttarakhand GK questions, current affairs updates, free mock tests, and preparation tips for UKSSSC VDO 2026. Support hours: Monday to Saturday, 10 AM to 6 PM.",
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
                            { "@type": "ListItem", position: 4, name: "UKSSSC VDO Syllabus 2026", item: currentUrl },
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
                        awards: "Best Uttarakhand Exam Preparation Platform 2025",
                        description: "India's most trusted platform for UKSSSC VDO, Police Constable, and other Uttarakhand government exam preparation with free study material, mock tests, and PDFs.",
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
                        name: "How to Prepare for UKSSSC VDO (Gram Vikas Adhikari) Exam in 90 Days",
                        description: "Complete 90-day study plan to crack UKSSSC Village Development Officer (VDO) 2026 examination",
                        totalTime: "P90D",
                        estimatedCost: 0,
                        step: [
                            { "@type": "HowToStep", name: "Month 1: Master Syllabus & Uttarakhand GK", text: "Download complete syllabus PDF. Study Uttarakhand GK: History (Formation 9 Nov 2000, Katyuri & Chand dynasties), Culture (Garhwali, Kumaoni, Jaunsari), Geography (Himalayas, Rivers, Glaciers), National Parks (Jim Corbett, Rajaji, Valley of Flowers), Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath). This carries 30-35% weightage of total marks." },
                            { "@type": "HowToStep", name: "Week 1-2: Uttarakhand GK Deep Dive", text: "Focus on Uttarakhand specific topics: Panchayati Raj system, Nanda Devi Raj Jat festival, Ganga-Yamuna river system, Jim Corbett National Park (India's first), Valley of Flowers (UNESCO World Heritage). Make short notes for revision." },
                            { "@type": "HowToStep", name: "Week 3-4: General Hindi & Current Affairs", text: "Master General Hindi: Sandhi (Swar, Vyanjan, Visarg), Samas (Tatpurush, Dvandva, Bahuvrihi, Avyayibhav, Karmadharay), Muhavare, Lokoktiyan, Synonyms, Antonyms. Cover last 6 months current affairs." },
                            { "@type": "HowToStep", name: "Month 2: Reasoning & Numerical Ability", text: "Practice Reasoning: Coding-Decoding, Blood Relations, Syllogism, Logical Venn Diagrams. Maths: Percentage, Profit-Loss, Time & Work, Mensuration, Data Interpretation. Solve 30 questions daily from each subject." },
                            { "@type": "HowToStep", name: "Week 9-10: Full Syllabus Revision", text: "Revise all 4 subjects. Create one-liner notes for Uttarakhand GK, Hindi grammar rules, Reasoning shortcuts, Maths formulas. Focus on high-weightage topics." },
                            { "@type": "HowToStep", name: "Week 11: Mock Tests & Previous Year Papers", text: "Take 10 full-length UKSSSC VDO mock tests. Solve last 5 years papers. Time management is key - 90 minutes for 100 questions (54 seconds per question). Analyze mistakes and weak areas." },
                            { "@type": "HowToStep", name: "Week 12: Final Revision & Exam Strategy", text: "Revise weak areas. Plan attempt strategy: attempt easier sections first (GK, Hindi), avoid guesswork due to 0.25 negative marking. Aim for 75+ correct answers to secure selection." },
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
                        name: "UKSSSC VDO (Gram Vikas Adhikari) 2026 - Complete Topic-wise Marks Distribution",
                        description: "Subject-wise and topic-wise marks breakdown for UKSSSC Village Development Officer examination (4 subjects, 100 marks total)",
                        numberOfItems: 25,
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Uttarakhand History (Formation 9 Nov 2000, Katyuri & Chand Dynasties)" },
                            { "@type": "ListItem", position: 2, name: "Uttarakhand Culture (Garhwali, Kumaoni, Jaunsari Traditions)" },
                            { "@type": "ListItem", position: 3, name: "Uttarakhand Geography (Himalayas, Glaciers, Rivers)" },
                            { "@type": "ListItem", position: 4, name: "Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)" },
                            { "@type": "ListItem", position: 5, name: "National Parks: Jim Corbett, Rajaji, Valley of Flowers" },
                            { "@type": "ListItem", position: 6, name: "Uttarakhand Panchayati Raj System" },
                            { "@type": "ListItem", position: 7, name: "Uttarakhand Current Affairs 2026 (Last 6 months)" },
                            { "@type": "ListItem", position: 8, name: "Indian Polity & Constitution" },
                            { "@type": "ListItem", position: 9, name: "Indian Economy & Budget" },
                            { "@type": "ListItem", position: 10, name: "General Science (Physics, Chemistry, Biology)" },
                            { "@type": "ListItem", position: 11, name: "National & International Current Affairs" },
                            { "@type": "ListItem", position: 12, name: "General Hindi: Sandhi (Swar, Vyanjan, Visarg)" },
                            { "@type": "ListItem", position: 13, name: "General Hindi: Samas (Tatpurush, Dvandva, Bahuvrihi, Avyayibhav, Karmadharay)" },
                            { "@type": "ListItem", position: 14, name: "General Hindi: Muhavare & Lokoktiyan" },
                            { "@type": "ListItem", position: 15, name: "General Hindi: Paryayvachi & Vilom Shabd" },
                            { "@type": "ListItem", position: 16, name: "General Hindi: Vakya Shuddhikaran" },
                            { "@type": "ListItem", position: 17, name: "Verbal Reasoning: Coding-Decoding, Blood Relations" },
                            { "@type": "ListItem", position: 18, name: "Non-Verbal Reasoning: Figure Series, Mirror Images" },
                            { "@type": "ListItem", position: 19, name: "Syllogism & Logical Venn Diagrams" },
                            { "@type": "ListItem", position: 20, name: "Numerical Ability: Percentage, Profit-Loss, Discount" },
                            { "@type": "ListItem", position: 21, name: "Arithmetic: Time & Work, Time & Distance, Average" },
                            { "@type": "ListItem", position: 22, name: "Simple & Compound Interest, Ratio & Proportion" },
                            { "@type": "ListItem", position: 23, name: "Algebra & Geometry Basics" },
                            { "@type": "ListItem", position: 24, name: "Data Interpretation (Bar Graph, Pie Chart, Table)" },
                            { "@type": "ListItem", position: 25, name: "Mensuration (2D & 3D Shapes)" },
                        ],
                    }),
                }}
            />

            {/* 8. JobPosting Schema with Complete Details (For VDO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        "@id": `${currentUrl}#vdo-job`,
                        title: "UKSSSC VDO (Gram Vikas Adhikari) Recruitment 2026",
                        description: "Recruitment for Village Development Officer (VDO) / Gram Vikas Adhikari positions in Uttarakhand. Selection based on written examination (4 subjects: General Knowledge & Current Affairs, General Hindi, Reasoning Ability, Numerical Ability). Computer Knowledge NOT included. Exam: 100 questions, 90 minutes, 0.25 negative marking. Salary: ₹35,000-45,000 per month.",
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
                            value: 35400,
                            unitText: "MONTH",
                        },
                        occupationalCategory: "Rural Development",
                        responsibilities: "Implementing government schemes at village level, Panchayati Raj coordination, rural development planning, monitoring MGNREGA, PMAY, maintaining village records, election duties, disaster management.",
                        employmentUnit: {
                            "@type": "Organization",
                            name: "Government of Uttarakhand",
                        },
                        workHours: "Full-time",
                        hiringHealth: "Medical Examination Required",
                    }),
                }}
            />

            {/* 9. SearchAction Schema (For Google SGE / Voice Search) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "@id": `${baseUrl}#website`,
                        url: baseUrl,
                        name: "CET TEST - Uttarakhand & Haryana Govt Exam Prep",
                        description: "Best platform for UKSSSC VDO, Police Constable, HSSC CET, and other government exam preparation with free study material, mock tests, and PDFs.",
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

            {/* 10. SpeakableSpecification Schema (For Google Assistant / Voice SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": `${currentUrl}#webpage`,
                        url: currentUrl,
                        name: "UKSSSC VDO Syllabus 2026 PDF Download | Gram Vikas Adhikari Complete Exam Pattern",
                        isPartOf: { "@id": `${baseUrl}#website` },
                        speakable: {
                            "@type": "SpeakableSpecification",
                            xPath: ["/main-heading", "/syllabus-summary", "/faq-section", "/uksssc-vdo-subjects"],
                            cssSelector: [".main-heading", ".syllabus-description", ".faq-item", ".vdo-syllabus-box"],
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
                            name: "UKSSSC VDO Syllabus",
                            description: "Complete syllabus for Uttarakhand Subordinate Service Selection Commission Village Development Officer examination",
                        },
                        primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: "/og-uksssc-vdo-syllabus-2026.jpg",
                            caption: "UKSSSC VDO Syllabus 2026 - Gram Vikas Adhikari Complete Exam Pattern",
                        },
                        keywords: "UKSSSC VDO, Gram Vikas Adhikari, Uttarakhand VDO Syllabus, Village Development Officer Exam",
                    }),
                }}
            />

            {/* 11. PotentialAction Schema (PDF Download Action) */}
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
                        name: "Download UKSSSC VDO Syllabus PDF",
                        description: "Download complete UKSSSC VDO (Gram Vikas Adhikari) syllabus PDF for 2026 with 4 subjects topic-wise breakdown",
                        potentialAction: {
                            "@type": "DownloadAction",
                            object: {
                                "@type": "MediaObject",
                                contentUrl: `${currentUrl}/uksssc-vdo-syllabus-2026.pdf`,
                                encodingFormat: "application/pdf",
                                name: "UKSSSC_VDO_Complete_Syllabus_2026.pdf",
                                description: "Complete syllabus for UKSSSC VDO (Gram Vikas Adhikari) with 4 subjects: General Knowledge & Current Affairs (Uttarakhand GK focus), General Hindi, Reasoning Ability, Numerical Ability. Exam pattern: 100 questions, 90 minutes, 0.25 negative marking.",
                                fileSize: "2.5MB",
                            },
                        },
                    }),
                }}
            />

            {/* 12. WebSite Schema for UKSSSC VDO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "UKSSSC VDO Exam Complete Guide",
                        url: currentUrl,
                        potentialAction: {
                            "@type": "SearchAction",
                            target: {
                                "@type": "EntryPoint",
                                urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                            },
                            "query-input": "required name=search_term_string",
                        },
                        sameAs: [
                            `https://www.instagram.com/${socialMedia}/`,
                            `https://twitter.com/${socialMedia}`,
                        ],
                    }),
                }}
            />

            {children}
        </>
    )
}