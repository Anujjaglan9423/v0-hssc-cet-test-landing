// app/uksssc-police-forest-guard-syllabus/layout.tsx
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
    // Primary Title with Power Words & Numbers
    title: "UKSSSC Police Constable & Forest Guard Syllabus 2026 PDF | Uttarakhand Van Rakshak Exam Pattern | Computer 5 Units Complete Guide",

    // Description optimized for Google SGE / Bing Chat (GEO) - Bilingual
    description: "UKSSSC Police Constable & Forest Guard Syllabus 2026: डाउनलोड करें complete syllabus PDF. Same syllabus for both posts: Computer Knowledge (5 Units: Basic Concepts, OS, MS Office, Internet, Cyber Security), Uttarakhand GK, General Hindi, Reasoning, Numerical Ability. Exam pattern: 100-120 questions, 2 hours, negative marking 0.25. Physical standards (168cm/81cm Male, 147cm Female). Free mock tests at CET TEST.",

    // Keywords extended for long-tail & question-based queries (AEO)
    keywords: [
        // Primary Post Keywords
        "UKSSSC Police Constable syllabus 2026", "Uttarakhand Forest Guard syllabus 2026",
        "UKSSSC Van Rakshak exam pattern", "Uttarakhand Police recruitment 2026",
        "UKSSSC Forest Guard selection process", "UKSSSC Police Constable syllabus PDF download",

        // Subject Specific
        "UKSSSC Computer Knowledge 5 units", "Uttarakhand GK for competitive exams",
        "UKSSSC General Hindi syllabus PDF", "UKSSSC Reasoning and Numerical Ability",
        "Computer Basic Concepts OS MS Office Internet Cyber Security",
        "UKSSSC Police Constable computer questions", "Uttarakhand GK important topics",

        // Unified/Common Exam Keywords
        "UKSSSC Group C common syllabus", "UKSSSC Police Forest Guard same syllabus",
        "Uttarakhand common eligibility test syllabus", "UKSSSC inter level syllabus 2026",
        "Police Constable Forest Guard syllabus difference",

        // AEO: Question-based long-tail keywords
        "is syllabus same for police and forest guard", "how many questions in UKSSSC police exam",
        "UKSSSC police constable cut off marks", "UKSSSC forest guard salary 2026",
        "UKSSSC police constable physical requirements", "forest guard physical standards Uttarakhand",
        "UKSSSC police exam date 2026", "UKSSSC forest guard notification 2026",
        "UKSSSC police constable age limit", "UKSSSC forest guard qualification",
        "UKSSSC police constable running time", "UKSSSC forest guard vacancy 2026",

        // Physical & Preparation
        "Uttarakhand Police PST PET requirements", "Forest Guard physical standards Uttarakhand",
        "UKSSSC Police Constable mock test free", "UKSSSC previous year question papers",
        "cettest.site free test series", "UKSSSC police constable preparation strategy",

        // GEO: Conversational & Generative AI phrases
        "complete UKSSSC police forest guard guide", "step by step UKSSSC preparation",
        "everything about Uttarakhand police recruitment", "UKSSSC one liner revision",
        "UKSSSC computer knowledge complete tutorial", "Uttarakhand police exam preparation",
        "best book for UKSSSC police constable", "UKSSSC online coaching free",
        "UKSSSC police constable selection process explained", "Uttarakhand forest guard job profile"
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
        title: "📚 UKSSSC Police Constable & Forest Guard Syllabus 2026 PDF | Van Rakshak Complete Exam Pattern | Computer 5 Units",
        description: "✅ Same Syllabus for Both Posts | ✅ Computer Knowledge 5 Units (Basic Concepts, OS, MS Office, Internet, Cyber Security) | ✅ Uttarakhand GK | ✅ Physical Standards: 168cm/81cm Male, 147cm Female | ✅ 100-120 Questions, 2 Hours, 0.25 Negative Marking | ✅ Free PDF + Mock Tests",
        url: "https://cettest.site/uksssc-police-forest-guard-syllabus",
        siteName: "CET TEST | Uttarakhand Govt Exam Prep",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-uksssc-police-forest-guard-2026.jpg",
                width: 1200,
                height: 630,
                alt: "UKSSSC Police Constable & Forest Guard Syllabus 2026 - Same Syllabus for Both Posts - Computer 5 Units - Free PDF Download",
                type: "image/jpeg",
            },
        ],
        emails: ["anujjaglan9423@gmail.com"],
        phoneNumbers: ["+91 7291849546"],
    },

    // Twitter Card optimized for engagement
    twitter: {
        card: "summary_large_image",
        title: "UKSSSC Police Constable & Forest Guard Syllabus 2026 PDF | Van Rakshak Complete Exam Pattern",
        description: "Download free PDF: Same syllabus for both posts. Computer Knowledge (5 Units), Uttarakhand GK, Hindi, Reasoning, Maths. Physical: 168cm/81cm Male, 147cm Female. Free mock tests.",
        images: ["/twitter-uksssc-police-forest-guard.jpg"],
        creator: "@cet__test",
        site: "@cet__test",
    },

    // Canonical & Alternate URLs
    alternates: {
        canonical: "https://cettest.site/uksssc-police-forest-guard-syllabus",
        languages: {
            "en-IN": "https://cettest.site/uksssc-police-forest-guard-syllabus",
        },
    },

    // Additional SEO tags
    category: "education",
    classification: "Government Exam Preparation | UKSSSC Police & Forest Guard Syllabus 2026",

    // App Links for mobile
    appLinks: {
        web: {
            url: "https://cettest.site/uksssc-police-forest-guard-syllabus",
            should_fallback: true,
        },
    },

    // Archive & other metadata
    archives: ["https://cettest.site/uksssc-police-previous-papers", "https://cettest.site/uksssc-forest-guard-previous-papers"],
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

export default function UKSSSCPoliceForestGuardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Base URL for all schemas
    const baseUrl = "https://cettest.site"
    const currentUrl = "https://cettest.site/uksssc-police-forest-guard-syllabus"
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
                        name: "UKSSSC Police Constable & Forest Guard (Van Rakshak) Exam Preparation Program 2026",
                        description: "Complete syllabus and preparation program for UKSSSC Police Constable and Forest Guard (Van Rakshak) examinations. BOTH EXAMS HAVE EXACTLY THE SAME WRITTEN SYLLABUS. 5 Subjects: Computer Knowledge (5 Units: Basic Computer Concepts, Operating System, MS Office Suite, Internet & Networking, Cyber Security), General Knowledge & Current Affairs (Uttarakhand GK focus), General Hindi (Grammar & Composition), Reasoning Ability (Verbal & Non-Verbal), Numerical Ability (Arithmetic, Algebra, Data Interpretation). Exam: 100-120 questions, 120 minutes (2 hours), 0.25 negative marking. Physical Standards: Male: 168cm height, 81cm chest (5cm expansion); Female: 147cm height.",
                        educationalProgramMode: "Exam Preparation",
                        timeToComplete: "P3M",
                        occupationalCategory: "Police & Forest Services - Uttarakhand Government",
                        occupationalCredentialAwarded: "Uttarakhand Police Constable OR Uttarakhand Forest Guard (Van Rakshak) Position",
                        programPrerequisites: "10+2 (Intermediate) pass or equivalent from recognized board",
                        provider: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission (UKSSSC)",
                            url: "https://sssc.uk.gov.in",
                            sameAs: ["https://sssc.uk.gov.in"],
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "Computer Knowledge (5 Units) - 20-25 Questions",
                                description: "Unit 1: Basic Computer Concepts - History, Generations, Types, Hardware (CPU, Memory - RAM/ROM, Input/Output Devices), Software (System & Application). Unit 2: Operating System - Windows & Linux basics, File Management, Shortcut Keys. Unit 3: Software Packages - MS Word (Document Creation, Formatting, Mail Merge), MS Excel (Formulas, Functions, Charts, Data Sorting), MS PowerPoint (Presentations, Animations). Unit 4: Working with Internet - WWW, Email Protocols (SMTP, POP3), Browsers, Search Engines, Social Media. Unit 5: Cyber Security - Cyber Threats, Viruses, Malware, Firewall, Encryption, Digital Signature, IT Act.",
                            },
                            {
                                "@type": "Course",
                                name: "General Knowledge & Current Affairs - 25-30 Questions",
                                description: "Indian History (Ancient, Medieval, Modern, Freedom Struggle), Indian Polity & Constitution (Parliament, President, Governor, Supreme Court, Fundamental Rights & Duties), Indian Geography (Physical, Economic, Social), Indian Economy (Budget, Planning, Agriculture, Industry), General Science (Physics, Chemistry, Biology - Class 10 level), Environment & Ecology, Current Affairs (last 6 months - National & International, Sports, Awards, Summits, Schemes), Uttarakhand GK: History (Formation 9 Nov 2000, Katyuri & Chand dynasties), Culture (Garhwali, Kumaoni, Jaunsari traditions), Geography (Himalayas, Glaciers, Rivers, National Parks), Char Dham Yatra, Jim Corbett National Park, Rajaji National Park, Valley of Flowers, Panchayati Raj System, Famous Personalities.",
                            },
                            {
                                "@type": "Course",
                                name: "General Hindi (सामान्य हिन्दी) - 15-20 Questions",
                                description: "हिन्दी व्याकरण: संज्ञा, सर्वनाम, विशेषण, क्रिया, काल, वचन, लिंग, कारक, रचना: संधि (स्वर, व्यंजन, विसर्ग), समास (तत्पुरुष, द्वंद्व, बहुव्रीहि, अव्ययीभाव, कर्मधारय), उपसर्ग, प्रत्यय, शब्द भंडार: पर्यायवाची शब्द, विलोम शब्द, अनेकार्थी शब्द, शब्द युग्म, मुहावरे एवं लोकोक्तियाँ, रस, छंद, अलंकार, वाक्य शुद्धिकरण, अपठित गद्यांश, पत्र लेखन, निबंध लेखन।",
                            },
                            {
                                "@type": "Course",
                                name: "Reasoning Ability - 15-20 Questions",
                                description: "Verbal Reasoning: Analogies, Classification, Series Completion (Number, Alphabet, Symbol), Coding-Decoding, Blood Relations, Direction Sense Test, Alphabet Test, Number Ranking, Time Sequence, Logical Venn Diagrams, Syllogism, Statement & Assumptions, Statement & Arguments, Statement & Conclusions, Cause & Effect. Non-Verbal Reasoning: Figure Series, Mirror Images, Water Images, Paper Cutting & Folding, Embedded Figures, Dot Situation, Analytical Reasoning.",
                            },
                            {
                                "@type": "Course",
                                name: "Numerical Ability - 10-15 Questions",
                                description: "Number System, HCF & LCM, Simplification, Square Root & Cube Root, Percentage, Profit & Loss, Discount, Simple & Compound Interest, Ratio & Proportion, Partnership, Average, Age Problems, Time & Work, Pipes & Cisterns, Time & Distance, Boats & Streams, Mixture & Alligation, Mensuration (2D & 3D Shapes - Area, Volume, Surface Area), Algebra (Linear Equations, Quadratic Equations, Polynomials), Geometry (Lines, Angles, Triangles, Quadrilaterals, Circles, Coordinate Geometry), Data Interpretation (Bar Graph, Line Graph, Pie Chart, Histogram, Table, Caselet DI), Data Sufficiency.",
                            },
                        ],
                        financialAidEligible: false,
                        numberOfCredits: 100,
                        typicalCreditsPerTerm: 100,
                        termLength: "One Time Examination",
                        totalCost: 0,
                        evaluationType: "Written Examination (OMR-based or CBT) + Physical Standard Test (PST) + Physical Efficiency Test (PET) + Document Verification",
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
                        name: "UKSSSC Police Constable & Forest Guard Common Syllabus 2026",
                        description: "Complete common syllabus for UKSSSC Police Constable and Forest Guard (Van Rakshak) exams 2026. BOTH POSTS HAVE IDENTICAL SYLLABUS. 5 subjects: Computer Knowledge (5 Units), General Knowledge & Current Affairs (Uttarakhand GK focus), General Hindi, Reasoning Ability, Numerical Ability. Exam: 100-120 questions, 2 hours, 0.25 negative marking. Physical standards: Male 168cm/81cm, Female 147cm.",
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
                        educationalLevel: "10+2 (Intermediate)",
                        teaches: [
                            "Computer Generations & Types",
                            "Hardware & Software",
                            "Operating System (Windows & Linux)",
                            "MS Word - Document Creation & Formatting",
                            "MS Excel - Formulas, Functions, Charts",
                            "MS PowerPoint - Presentations",
                            "Internet & Email Protocols",
                            "Cyber Security & IT Act",
                            "Uttarakhand History (Formation 9 Nov 2000)",
                            "Uttarakhand Culture (Garhwali, Kumaoni)",
                            "Uttarakhand Geography (Himalayas, Rivers, National Parks)",
                            "Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)",
                            "Jim Corbett National Park (India's First)",
                            "Rajaji National Park & Valley of Flowers",
                            "Uttarakhand Panchayati Raj System",
                            "Uttarakhand Current Affairs 2026",
                            "General Hindi (Sandhi, Samas, Muhavare, Ras, Chhand)",
                            "Verbal & Non-Verbal Reasoning",
                            "Arithmetic, Algebra, Geometry",
                            "Data Interpretation",
                        ],
                        totalTime: "PT120H",
                        numberOfCredits: 100,
                        keywords: "UKSSPC Police Constable, Forest Guard, Van Rakshak, Uttarakhand GK, Computer Knowledge 5 Units",
                        offers: {
                            "@type": "Offer",
                            price: 0,
                            priceCurrency: "INR",
                            availability: "https://schema.org/OnlineOnly",
                            url: currentUrl,
                        },
                        audience: {
                            "@type": "Audience",
                            name: "UKSSSC Police Constable & Forest Guard Aspirants",
                            geographicArea: "Uttarakhand, India",
                        },
                    }),
                }}
            />

            {/* 3. FAQ Schema with 18+ Questions (Critical for AEO - Featured Snippets) */}
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
                                name: "Is the syllabus same for UKSSSC Police Constable and Forest Guard?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, the written examination syllabus for UKSSSC Police Constable and Forest Guard (Van Rakshak) is EXACTLY THE SAME. Both exams cover the same 5 subjects: Computer Knowledge (5 Units), General Knowledge & Current Affairs (including Uttarakhand GK), General Hindi, Reasoning Ability, and Numerical Ability. The only difference is in physical standards and job-specific requirements after the written exam.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the full syllabus for UKSSSC Police Constable and Forest Guard 2026?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The complete common syllabus includes 5 subjects: (1) Computer Knowledge (5 Units: Basic Computer Concepts, Operating System - Windows/Linux, MS Office Suite - Word/Excel/PowerPoint, Internet & Networking, Cyber Security), (2) General Knowledge & Current Affairs (Indian History, Polity, Geography, Economy, General Science, Current Affairs, and Uttarakhand GK), (3) General Hindi (Grammar - Sandhi, Samas, Muhavare, Ras, Chhand; Composition), (4) Reasoning Ability (Verbal & Non-Verbal Reasoning), (5) Numerical Ability (Arithmetic, Algebra, Geometry, Data Interpretation).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What are the 5 units of Computer Knowledge for UKSSSC exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Computer Knowledge syllabus has 5 units: Unit 1: Basic Computer Concepts (History, Generations, Hardware, Software), Unit 2: Operating System (Windows & Linux, File Management, Shortcut Keys), Unit 3: Software Packages (MS Word, MS Excel, MS PowerPoint), Unit 4: Working with Internet (WWW, Email, Browsers, Search Engines), Unit 5: Cyber Security (Viruses, Malware, Firewall, Encryption, IT Act).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many questions are asked in UKSSSC Police and Forest Guard exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The UKSSSC Police Constable and Forest Guard written exam typically has 100-120 objective-type (MCQ) questions. Subject-wise distribution: Computer Knowledge (20-25 questions), General Knowledge & Current Affairs (25-30 questions), General Hindi (15-20 questions), Reasoning Ability (15-20 questions), Numerical Ability (10-15 questions).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of UKSSSC Police and Forest Guard exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The UKSSSC Police Constable and Forest Guard written examination is conducted for 2 hours (120 minutes). The exam is typically conducted in offline OMR mode or online CBT mode depending on the notification.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there negative marking in UKSSSC Police and Forest Guard exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, there is negative marking of 1/4th (0.25) mark for each wrong answer in UKSSSC Police Constable and Forest Guard exams. No marks are deducted for unanswered questions. So for every 4 wrong answers, you lose 1 mark. Avoid guesswork unless you are 70-80% confident.",
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
                                name: "What is the physical standard for UKSSSC Forest Guard?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Forest Guard (Van Rakshak) physical standards: Male candidates: Minimum 168 cm height, 81 cm chest (with 5 cm expansion). Female candidates: Minimum 147 cm height. Physical standards may vary by category (SC/ST/OBC relaxations apply). Check official UKSSSC notification for exact requirements.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the qualification for UKSSSC Police Constable and Forest Guard?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Police Constable and Forest Guard qualification: 10+2 (Intermediate) pass or equivalent from a recognized board. Age limit: 18-22 years for Police Constable, 18-28 years for Forest Guard (may vary by notification). Age relaxation for SC/ST/OBC as per government norms.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What topics are important for Uttarakhand GK section in UKSSSC exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most important Uttarakhand GK topics for UKSSSC Police and Forest Guard: (1) State formation: 9 November 2000, (2) Char Dham Yatra: Yamunotri, Gangotri, Kedarnath, Badrinath, (3) National Parks: Jim Corbett (India's first), Rajaji, Valley of Flowers (UNESCO), (4) Rivers: Ganga, Yamuna origin points, (5) Culture: Garhwali, Kumaoni, Jaunsari traditions, (6) Fairs: Nanda Devi Raj Jat, Kumbh Mela Haridwar, (7) Panchayati Raj System, (8) Current affairs of Uttarakhand.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Where can I download UKSSSC Police and Forest Guard syllabus PDF?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can download the official UKSSSC Police Constable and Forest Guard syllabus PDF from UKSSSC's official website: ssc.uk.gov.in. The complete topic-wise syllabus PDF is also available on this page. Click the 'Download PDF' button above to get instant access.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How to prepare for UKSSSC Police Constable and Forest Guard exam at home?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "To prepare for UKSSSC Police & Forest Guard at home: (1) Download complete syllabus from this page, (2) Master Computer Knowledge 5 units - practice MS Office practically, (3) Focus on Uttarakhand GK (Char Dham, Jim Corbett, Panchayati Raj), (4) Learn Hindi grammar (Sandhi, Samas, Muhavare), (5) Practice Reasoning and Maths daily (20-30 questions each), (6) Take weekly free mock tests, (7) Solve previous year papers, (8) Maintain physical fitness for PST/PET.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which books are best for UKSSSC Police and Forest Guard exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Best books for UKSSSC Police & Forest Guard: (1) Computer Knowledge: 'Objective Computer Awareness' by Arihant, (2) Uttarakhand GK: 'Uttarakhand Samanya Gyan' by Arihant, (3) General Hindi: 'Samanya Hindi' by Arihant, (4) Reasoning: 'A Modern Approach to Reasoning' by R.S. Aggarwal, (5) Quantitative Aptitude: 'Quantitative Aptitude for Competitive Exams' by R.S. Aggarwal, (6) UKSSSC Previous Year Papers by Kiran Prakashan.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the selection process for UKSSSC Police Constable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Police Constable selection process has 4 stages: (1) Written Examination (100-120 marks, 2 hours) covering 5 subjects, (2) Physical Standard Test (PST) - Height, Chest measurement, (3) Physical Efficiency Test (PET) - Running: Male 4.8 km/25 min, Female 2.4 km/18 min, (4) Document Verification & Medical Examination. Final merit based on written exam scores + PET/PST qualification.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the selection process for UKSSSC Forest Guard?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Forest Guard (Van Rakshak) selection process: (1) Written Examination (same syllabus as Police Constable), (2) Physical Standard Test (PST) - Height 168cm Male/147cm Female, Chest 81cm Male, (3) Physical Efficiency Test (PET) - Running and endurance tests, (4) Document Verification. Final selection based on written exam scores and physical qualification.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "When will UKSSSC Police Constable and Forest Guard notification 2026 be released?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC (Uttarakhand Subordinate Service Selection Commission) typically releases Police Constable and Forest Guard notifications between January-March 2026. The official notification will be available on ssc.uk.gov.in. Exams expected in June-August 2026. Start your preparation now using our complete syllabus guide.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the salary of UKSSSC Police Constable and Forest Guard?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC Police Constable and Forest Guard salary ranges from ₹30,000 to ₹45,000 per month in hand based on Level 4 pay scale (₹25,500 - ₹81,100). Additional allowances include Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance, and Medical benefits. Salary increases with experience and annual increments.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How can I contact CET TEST for UKSSSC study material?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can contact CET TEST via email at anujjaglan9423@gmail.com or call/whatsapp at 7291849546. Follow us on Instagram and Twitter @cet__test for daily Uttarakhand GK questions, current affairs updates, free mock tests, and preparation tips for UKSSSC Police Constable & Forest Guard 2026. Support hours: Monday to Saturday, 10 AM to 6 PM.",
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
                            { "@type": "ListItem", position: 4, name: "UKSSSC Police Constable & Forest Guard Syllabus 2026", item: currentUrl },
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
                        description: "India's most trusted platform for UKSSSC Police Constable, Forest Guard, VDO, and other Uttarakhand government exam preparation with free study material, mock tests, and PDFs.",
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
                        name: "How to Prepare for UKSSSC Police Constable & Forest Guard Exam in 90 Days",
                        description: "Complete 90-day study plan to crack UKSSSC Police Constable and Forest Guard 2026 examinations (same syllabus for both)",
                        totalTime: "P90D",
                        estimatedCost: 0,
                        step: [
                            { "@type": "HowToStep", name: "Month 1: Master Computer Knowledge (5 Units) & Uttarakhand GK", text: "Study Computer Knowledge: Unit 1 (Basics), Unit 2 (OS), Unit 3 (MS Office), Unit 4 (Internet), Unit 5 (Cyber Security). Practice MS Word/Excel/PowerPoint practically. Study Uttarakhand GK: Formation (9 Nov 2000), Char Dham, Jim Corbett, Rajaji, Valley of Flowers, Garhwali/Kumaoni culture." },
                            { "@type": "HowToStep", name: "Week 1-2: Computer Knowledge Units 1,2,3", text: "Focus on Computer Generations, Hardware/Software, Windows/Linux shortcuts, MS Word (mail merge, formatting), MS Excel (formulas, VLOOKUP, pivot tables), MS PowerPoint (animations, slide master)." },
                            { "@type": "HowToStep", name: "Week 3-4: Computer Units 4,5 & Uttarakhand GK Deep Dive", text: "Internet protocols (TCP/IP, HTTP, SMTP, POP3), Cyber Security (viruses, malware, firewall, encryption, IT Act). Uttarakhand GK: Char Dham Yatra, National Parks, Famous Personalities, Panchayati Raj." },
                            { "@type": "HowToStep", name: "Month 2: General Hindi, Reasoning & Numerical Ability", text: "General Hindi: Sandhi (Swar, Vyanjan, Visarg), Samas (Tatpurush, Dvandva, Bahuvrihi), Muhavare, Ras, Chhand. Reasoning: Coding-Decoding, Blood Relations, Syllogism, Venn Diagrams. Maths: Percentage, Profit-Loss, Time & Work, Mensuration." },
                            { "@type": "HowToStep", name: "Week 9-10: Current Affairs & Full Syllabus Revision", text: "Cover last 6 months National & Uttarakhand current affairs. Revise all 5 subjects. Create one-liner notes for Computer shortcuts, Uttarakhand GK, Hindi grammar rules, Reasoning shortcuts, Maths formulas." },
                            { "@type": "HowToStep", name: "Week 11: Mock Tests & Previous Year Papers", text: "Take 10 full-length UKSSSC Police & Forest Guard mock tests. Solve last 5 years papers. Time management is key - 120 minutes for 100-120 questions (60-72 seconds per question). Analyze mistakes." },
                            { "@type": "HowToStep", name: "Week 12: Physical Preparation & Final Strategy", text: "Prepare physically: Male - 4.8 km running in 25 minutes, Female - 2.4 km in 18 minutes. Maintain height (168cm male/147cm female) and chest (81cm male). Plan exam attempt strategy: attempt Computer and GK first, avoid guesswork due to 0.25 negative marking." },
                        ],
                    }),
                }}
            />

            {/* 7. ItemList Schema (65+ topics with marks distribution - For SGE Featured Lists) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "@id": `${currentUrl}#topic-list`,
                        name: "UKSSSC Police Constable & Forest Guard 2026 - Complete Topic-wise Syllabus (65+ Topics)",
                        description: "Complete topic-wise breakdown for UKSSSC Police Constable and Forest Guard written examination (5 subjects, 100-120 questions total)",
                        numberOfItems: 65,
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Computer - History & Generations" },
                            { "@type": "ListItem", position: 2, name: "Computer - Hardware (CPU, Memory, I/O Devices)" },
                            { "@type": "ListItem", position: 3, name: "Computer - Software (System & Application)" },
                            { "@type": "ListItem", position: 4, name: "Computer - Operating System (Windows & Linux)" },
                            { "@type": "ListItem", position: 5, name: "Computer - File Management & Shortcut Keys" },
                            { "@type": "ListItem", position: 6, name: "Computer - MS Word (Document Creation, Mail Merge)" },
                            { "@type": "ListItem", position: 7, name: "Computer - MS Excel (Formulas, Functions, Charts)" },
                            { "@type": "ListItem", position: 8, name: "Computer - MS PowerPoint (Presentations)" },
                            { "@type": "ListItem", position: 9, name: "Computer - Internet & WWW Basics" },
                            { "@type": "ListItem", position: 10, name: "Computer - Email Protocols (SMTP, POP3, IMAP)" },
                            { "@type": "ListItem", position: 11, name: "Computer - Browsers & Search Engines" },
                            { "@type": "ListItem", position: 12, name: "Computer - Cyber Threats (Viruses, Malware)" },
                            { "@type": "ListItem", position: 13, name: "Computer - Firewall & Encryption" },
                            { "@type": "ListItem", position: 14, name: "Computer - Digital Signature & IT Act" },
                            { "@type": "ListItem", position: 15, name: "Uttarakhand History - Formation (9 Nov 2000)" },
                            { "@type": "ListItem", position: 16, name: "Uttarakhand History - Katyuri & Chand Dynasties" },
                            { "@type": "ListItem", position: 17, name: "Uttarakhand Culture - Garhwali, Kumaoni, Jaunsari" },
                            { "@type": "ListItem", position: 18, name: "Uttarakhand Geography - Himalayas & Glaciers" },
                            { "@type": "ListItem", position: 19, name: "Uttarakhand Rivers - Ganga, Yamuna Origin" },
                            { "@type": "ListItem", position: 20, name: "Char Dham Yatra - Yamunotri, Gangotri, Kedarnath, Badrinath" },
                            { "@type": "ListItem", position: 21, name: "Jim Corbett National Park (India's First)" },
                            { "@type": "ListItem", position: 22, name: "Rajaji National Park & Valley of Flowers" },
                            { "@type": "ListItem", position: 23, name: "Uttarakhand Panchayati Raj System" },
                            { "@type": "ListItem", position: 24, name: "Uttarakhand Current Affairs 2026" },
                            { "@type": "ListItem", position: 25, name: "Indian History - Ancient (Indus Valley, Vedic Era)" },
                            { "@type": "ListItem", position: 26, name: "Indian History - Medieval (Delhi Sultanate, Mughals)" },
                            { "@type": "ListItem", position: 27, name: "Indian History - Modern (1857 Revolt, Freedom Struggle)" },
                            { "@type": "ListItem", position: 28, name: "Indian Polity - Constitution, Parliament, President" },
                            { "@type": "ListItem", position: 29, name: "Indian Polity - Supreme Court, Fundamental Rights" },
                            { "@type": "ListItem", position: 30, name: "Indian Geography - Physical (Mountains, Rivers, Climate)" },
                            { "@type": "ListItem", position: 31, name: "Indian Economy - Budget, Planning, Agriculture" },
                            { "@type": "ListItem", position: 32, name: "General Science - Physics (Light, Sound, Motion)" },
                            { "@type": "ListItem", position: 33, name: "General Science - Chemistry (Acids, Bases, Metals)" },
                            { "@type": "ListItem", position: 34, name: "General Science - Biology (Human Body, Plants)" },
                            { "@type": "ListItem", position: 35, name: "National & International Current Affairs" },
                            { "@type": "ListItem", position: 36, name: "General Hindi - Sandhi (Swar, Vyanjan, Visarg)" },
                            { "@type": "ListItem", position: 37, name: "General Hindi - Samas (Tatpurush, Dvandva, Bahuvrihi)" },
                            { "@type": "ListItem", position: 38, name: "General Hindi - Muhavare & Lokoktiyan" },
                            { "@type": "ListItem", position: 39, name: "General Hindi - Ras, Chhand & Alankar" },
                            { "@type": "ListItem", position: 40, name: "General Hindi - Paryayvachi & Vilom Shabd" },
                            { "@type": "ListItem", position: 41, name: "General Hindi - Vakya Shuddhikaran" },
                            { "@type": "ListItem", position: 42, name: "General Hindi - Apathit Gadhyansh" },
                            { "@type": "ListItem", position: 43, name: "Reasoning - Analogies & Classification" },
                            { "@type": "ListItem", position: 44, name: "Reasoning - Coding-Decoding" },
                            { "@type": "ListItem", position: 45, name: "Reasoning - Blood Relations" },
                            { "@type": "ListItem", position: 46, name: "Reasoning - Direction Sense Test" },
                            { "@type": "ListItem", position: 47, name: "Reasoning - Syllogism" },
                            { "@type": "ListItem", position: 48, name: "Reasoning - Logical Venn Diagrams" },
                            { "@type": "ListItem", position: 49, name: "Reasoning - Non-Verbal (Figure Series, Mirror Images)" },
                            { "@type": "ListItem", position: 50, name: "Maths - Number System, HCF & LCM" },
                            { "@type": "ListItem", position: 51, name: "Maths - Percentage, Profit & Loss" },
                            { "@type": "ListItem", position: 52, name: "Maths - Simple & Compound Interest" },
                            { "@type": "ListItem", position: 53, name: "Maths - Ratio & Proportion, Partnership" },
                            { "@type": "ListItem", position: 54, name: "Maths - Average, Age Problems" },
                            { "@type": "ListItem", position: 55, name: "Maths - Time & Work, Pipes & Cisterns" },
                            { "@type": "ListItem", position: 56, name: "Maths - Time & Distance, Boats & Streams" },
                            { "@type": "ListItem", position: 57, name: "Maths - Mensuration (2D & 3D Shapes)" },
                            { "@type": "ListItem", position: 58, name: "Maths - Algebra (Linear & Quadratic Equations)" },
                            { "@type": "ListItem", position: 59, name: "Maths - Geometry (Lines, Angles, Triangles, Circles)" },
                            { "@type": "ListItem", position: 60, name: "Maths - Data Interpretation (Bar Graph, Pie Chart)" },
                            { "@type": "ListItem", position: 61, name: "Physical Standards - Male (168cm height, 81cm chest)" },
                            { "@type": "ListItem", position: 62, name: "Physical Standards - Female (147cm height)" },
                            { "@type": "ListItem", position: 63, name: "PET - Male Running (4.8 km in 25 minutes)" },
                            { "@type": "ListItem", position: 64, name: "PET - Female Running (2.4 km in 18 minutes)" },
                            { "@type": "ListItem", position: 65, name: "Document Verification & Medical Examination" },
                        ],
                    }),
                }}
            />

            {/* 8. JobPosting Schema - Police Constable */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        "@id": `${currentUrl}#police-job`,
                        title: "UKSSSC Police Constable Recruitment 2026",
                        description: "Recruitment for Constable positions in Uttarakhand Police Department. Written exam syllabus (same as Forest Guard): Computer Knowledge (5 Units), General Knowledge & Current Affairs (Uttarakhand GK focus), General Hindi, Reasoning Ability, Numerical Ability. Physical standards: Male 168cm/81cm, Female 147cm. Physical efficiency: Male 4.8 km/25 min, Female 2.4 km/18 min.",
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
                        qualifications: "10+2 (Intermediate) pass or equivalent from recognized board",
                        physicalRequirements: "Male General/OBC: 168cm height, 81cm chest (5cm expansion). Male SC/ST: 162cm height, 79cm chest. Female General: 147cm height. Female SC/ST: 142cm height. Running: Male 4.8 km/25 min, Female 2.4 km/18 min.",
                        estimatedSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: {
                                "@type": "QuantitativeValue",
                                minValue: 30000,
                                maxValue: 45000,
                                unitText: "MONTH",
                            },
                        },
                        baseSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: 25500,
                            unitText: "MONTH",
                        },
                        occupationalCategory: "Law Enforcement",
                        responsibilities: "Maintaining law and order, crime prevention, patrolling, investigation, public safety, disaster response.",
                    }),
                }}
            />

            {/* 9. JobPosting Schema - Forest Guard */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        "@id": `${currentUrl}#forest-job`,
                        title: "UKSSSC Forest Guard (Van Rakshak) Recruitment 2026",
                        description: "Recruitment for Forest Guard / Van Rakshak positions in Uttarakhand Forest Department. Written exam syllabus (same as Police Constable): Computer Knowledge (5 Units), General Knowledge (Uttarakhand GK focus - National Parks, Wildlife), General Hindi, Reasoning, Numerical Ability. Physical standards: Male 168cm/81cm, Female 147cm.",
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
                        qualifications: "10+2 (Intermediate) pass or equivalent from recognized board",
                        physicalRequirements: "Male: Minimum 168 cm height, 81 cm chest (with 5 cm expansion). Female: Minimum 147 cm height. Category-wise relaxations apply as per UKSSSC norms.",
                        estimatedSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: {
                                "@type": "QuantitativeValue",
                                minValue: 30000,
                                maxValue: 45000,
                                unitText: "MONTH",
                            },
                        },
                        baseSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: 25500,
                            unitText: "MONTH",
                        },
                        occupationalCategory: "Forest Conservation",
                        responsibilities: "Wildlife protection, forest conservation, anti-poaching operations, forest fire prevention, biodiversity conservation, eco-tourism management.",
                    }),
                }}
            />

            {/* 10. Comparison Schema - Shows both exams have same syllabus */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ComparisonType",
                        name: "UKSSSC Police Constable vs Forest Guard Syllabus Comparison 2026",
                        description: "Comparison of written examination syllabus for UKSSSC Police Constable and Forest Guard (Van Rakshak) recruitment",
                        itemReviewed: [
                            {
                                "@type": "Thing",
                                name: "UKSSSC Police Constable Syllabus",
                                description: "Same as Forest Guard - 5 subjects: Computer Knowledge (5 Units), GK (Uttarakhand focus), General Hindi, Reasoning, Numerical Ability",
                            },
                            {
                                "@type": "Thing",
                                name: "UKSSSC Forest Guard Syllabus",
                                description: "Exactly identical to Police Constable - 5 subjects with same topic coverage. Both exams share 100% same written syllabus.",
                            },
                        ],
                        result: "Both exams have IDENTICAL written syllabus. The only differences are in physical standards and job-specific requirements after the written exam. Police focuses on law enforcement, Forest Guard focuses on wildlife/conservation.",
                    }),
                }}
            />

            {/* 11. SearchAction Schema (For Google SGE / Voice Search) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "@id": `${baseUrl}#website`,
                        url: baseUrl,
                        name: "CET TEST - Uttarakhand & Haryana Govt Exam Prep",
                        description: "Best platform for UKSSSC Police Constable, Forest Guard, VDO, HSSC CET, and other government exam preparation with free study material, mock tests, and PDFs.",
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

            {/* 12. SpeakableSpecification Schema (For Google Assistant / Voice SEO) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": `${currentUrl}#webpage`,
                        url: currentUrl,
                        name: "UKSSSC Police Constable & Forest Guard Syllabus 2026 PDF | Van Rakshak Complete Exam Pattern",
                        isPartOf: { "@id": `${baseUrl}#website` },
                        speakable: {
                            "@type": "SpeakableSpecification",
                            xPath: ["/main-heading", "/syllabus-summary", "/faq-section", "/police-forest-syllabus"],
                            cssSelector: [".main-heading", ".syllabus-description", ".faq-item", ".police-forest-box"],
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
                            name: "UKSSSC Police Constable & Forest Guard Syllabus",
                            description: "Complete common syllabus for Uttarakhand Police Constable and Forest Guard (Van Rakshak) recruitment examinations",
                        },
                        primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: "/og-uksssc-police-forest-guard-2026.jpg",
                            caption: "UKSSSC Police Constable & Forest Guard Syllabus 2026 - Same Syllabus for Both Posts - Computer 5 Units",
                        },
                        keywords: "UKSSSC Police Constable Syllabus, UKSSSC Forest Guard Syllabus, Van Rakshak Exam Pattern, Uttarakhand Police Recruitment",
                    }),
                }}
            />

            {/* 13. PotentialAction Schema (PDF Download Action) */}
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
                        name: "Download UKSSSC Police Constable & Forest Guard Syllabus PDF",
                        description: "Download complete UKSSSC Police Constable and Forest Guard (Van Rakshak) syllabus PDF for 2026 with 5 subjects topic-wise breakdown",
                        potentialAction: {
                            "@type": "DownloadAction",
                            object: {
                                "@type": "MediaObject",
                                contentUrl: `${currentUrl}/uksssc-police-forest-guard-syllabus-2026.pdf`,
                                encodingFormat: "application/pdf",
                                name: "UKSSSC_Police_Forest_Guard_Complete_Syllabus_2026.pdf",
                                description: "Complete common syllabus for UKSSSC Police Constable and Forest Guard (Van Rakshak) with 5 subjects: Computer Knowledge (5 Units: Basic Concepts, OS, MS Office, Internet, Cyber Security), General Knowledge & Current Affairs (Uttarakhand GK focus), General Hindi, Reasoning Ability, Numerical Ability. Exam pattern: 100-120 questions, 120 minutes, 0.25 negative marking. Physical standards included.",
                                fileSize: "3.2MB",
                            },
                        },
                    }),
                }}
            />

            {children}
        </>
    )
}