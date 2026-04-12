// app/uksssc-vdo-syllabus/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "UKSSSC VDO Syllabus 2026 | Complete Selection Process & Exam Pattern",
    description: "Download UKSSSC VDO syllabus 2026 PDF. Complete selection process including written exam (4 subjects: GK, Hindi, Reasoning, Maths), physical standards, and exam pattern. Free mock tests available at cettest.site.",
    keywords: [
        "UKSSSC VDO syllabus",
        "UKSSSC VDO syllabus 2026",
        "Uttarakhand VDO syllabus",
        "UKSSSC Village Development Officer syllabus",
        "Uttarakhand VDO physical standards",
        "UKSSSC VDO selection process",
        "UKSSSC VDO exam pattern",
        "UKSSSC VDO preparation",
        "Uttarakhand VDO eligibility",
        "UKSSSC VDO previous year papers",
        "Uttarakhand Gram Vikas Adhikari syllabus",
        "UKSSSC VDO written exam syllabus",
        "UKSSSC VDO marking scheme",
        "Uttarakhand VDO qualification"
    ],
    authors: [{ name: "CET TEST" }],
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
        title: "UKSSSC VDO Syllabus 2026 | Complete Selection Process & Exam Pattern",
        description: "Complete UKSSSC VDO (Village Development Officer) syllabus for 2026 recruitment. Written exam: General Knowledge (30-35 Q), General Hindi (20-25 Q), Reasoning (15-20 Q), Numerical Ability (15-20 Q). Uttarakhand GK focus, no Computer section.",
        url: "https://cettest.site/uksssc-vdo-syllabus",
        siteName: "cettest.site",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-uksssc-vdo-syllabus.jpg",
                width: 1200,
                height: 630,
                alt: "UKSSSC VDO Syllabus 2026 - Complete Selection Process",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UKSSSC VDO Syllabus 2026 | Complete Selection Process",
        description: "Written exam (4 subjects), Uttarakhand GK focus, no negative marking for wrong answers. Free mock tests available at cettest.site.",
        images: ["/og-uksssc-vdo-syllabus.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/uksssc-vdo-syllabus",
    },
    category: "uttrakhand-exam",
    classification: "Village Development Officer Recruitment Examination",
}

export default function UKSSSCVDOSyllabusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* Organization Structured Data */}
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
                        ],
                        description: "Online exam preparation platform for UKSSSC, Police, VDO, SSC, Railway and other government exams",
                    }),
                }}
            />

            {/* Examination Information Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "UttrakhandExamService",
                        name: "UKSSSC VDO Recruitment",
                        serviceType: "Village Development Officer Recruitment Examination",
                        provider: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission (UKSSSC)",
                            url: "https://sssc.uk.gov.in",
                        },
                        areaServed: {
                            "@type": "State",
                            name: "Uttarakhand, India",
                        },
                        audience: {
                            "@type": "Audience",
                            name: "Uttrakhand Job Aspirants",
                            geographicArea: "Uttarakhand",
                        },
                    }),
                }}
            />

            {/* BreadcrumbList Structured Data */}
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
                                name: "Uttarakhand Exams",
                                item: "https://cettest.site/uttarakhand-exams",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "VDO Syllabus",
                                item: "https://cettest.site/uksssc-vdo-syllabus",
                            },
                        ],
                    }),
                }}
            />

            {/* EducationalOccupationalProgram Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        name: "UKSSSC VDO Selection Process",
                        description: "Complete selection process including written examination (4 subjects) and document verification",
                        educationalProgramMode: "Exam Preparation",
                        timeToComplete: "PT2H",
                        occupationalCategory: "Rural Development Services",
                        occupationalCredentialAwarded: {
                            "@type": "EducationalOccupationalCredential",
                            name: "Village Development Officer Position",
                        },
                        provider: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission",
                            url: "https://sssc.uk.gov.in",
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "General Knowledge & Current Affairs",
                                description: "Indian History, Polity, Economy, Geography, General Science, Current Affairs (6 months), and Uttarakhand-specific GK (30-35 questions)",
                            },
                            {
                                "@type": "Course",
                                name: "General Hindi (सामान्य हिन्दी)",
                                description: "Grammar (Sandhi, Samas, Muhavare), Composition, Literature - 20-25 questions",
                            },
                            {
                                "@type": "Course",
                                name: "Reasoning Ability",
                                description: "Verbal Reasoning (Analogy, Coding-Decoding, Blood Relations, Syllogism), Non-Verbal Reasoning, Analytical Reasoning - 15-20 questions",
                            },
                            {
                                "@type": "Course",
                                name: "Numerical Ability",
                                description: "Arithmetic (Percentage, Profit-Loss, Average, Ratio), Algebra, Geometry, Data Interpretation - 15-20 questions",
                            },
                        ],
                    }),
                }}
            />

            {/* FAQPage Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is the full syllabus for UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The UKSSSC VDO (Village Development Officer) syllabus includes 4 main subjects: General Knowledge & Current Affairs, General Hindi, Reasoning Ability, and Numerical Ability. Computer Knowledge is NOT included in VDO syllabus.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many questions are asked from each subject in UK VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "As per previous year patterns: General Knowledge & Current Affairs (30-35 questions), General Hindi (20-25 questions), Reasoning Ability (15-20 questions), Numerical Ability (15-20 questions). Total 100 questions typically.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there negative marking in UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, there is negative marking of 1/4th (0.25) mark for each wrong answer in most UKSSSC examinations. Always check the latest official notification for exact pattern.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of UK VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The written examination is typically conducted for 1.5 hours (90 minutes) with objective-type multiple choice questions.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which topics are most important for UK VDO General Knowledge section?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most important topics: Current Affairs (last 6 months), Uttarakhand GK (History, Culture, Geography, Tourism, Panchayati Raj), Indian Polity, Environment, and General Science.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Computer Knowledge included in UKSSSC VDO syllabus?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, unlike Police Constable exam, Computer Knowledge is NOT included in the UKSSSC VDO syllabus. The exam focuses on 4 subjects only: GK, Hindi, Reasoning, and Maths.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the educational qualification for UK VDO?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Candidates must have a Bachelor's degree from a recognized university. Knowledge of Hindi language is also required.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I take the UK VDO exam in Hindi language?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, the question paper is usually bilingual (Hindi and English) for all sections except the language papers.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* HowTo Structured Data for Preparation Guide */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "How to Prepare for UKSSSC VDO Exam",
                        description: "Step-by-step preparation guide for UKSSSC Village Development Officer recruitment",
                        totalTime: "P3M",
                        estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: "0",
                        },
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Understand the Syllabus",
                                text: "Review all 4 subjects: General Knowledge, General Hindi, Reasoning, and Numerical Ability. Note that Computer Knowledge is not included.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Master Uttarakhand GK",
                                text: "Focus on Uttarakhand-specific topics including history, culture, geography, and Panchayati Raj as they carry significant weightage.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Practice Hindi Grammar",
                                text: "Learn Hindi grammar rules thoroughly including Sandhi, Samas, Muhavare, and synonyms/antonyms.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Take Mock Tests",
                                text: "Practice full-length mock tests designed as per actual UKSSSC VDO exam pattern.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Review Current Affairs",
                                text: "Regularly review last 6 months of current affairs at national and state level.",
                            },
                        ],
                    }),
                }}
            />

            {/* WebPage Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "UKSSSC VDO Syllabus 2026",
                        description: "Complete syllabus and selection process for UKSSSC VDO (Village Development Officer) recruitment including written exam with 4 subjects: General Knowledge, General Hindi, Reasoning, and Numerical Ability.",
                        url: "https://cettest.site/uksssc-vdo-syllabus",
                        inLanguage: "en-IN",
                        datePublished: "2026-01-01",
                        dateModified: "2026-04-12",
                        mainEntity: {
                            "@type": "ItemList",
                            name: "Syllabus Components",
                            numberOfItems: 4,
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "General Knowledge & Current Affairs",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "General Hindi (सामान्य हिन्दी)",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 3,
                                    name: "Reasoning Ability",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 4,
                                    name: "Numerical Ability",
                                },
                            ],
                        },
                        about: {
                            "@type": "Thing",
                            name: "UKSSSC VDO Exam",
                            description: "Recruitment examination for Village Development Officer posts in Uttarakhand",
                        },
                        audience: {
                            "@type": "Audience",
                            name: "Uttrakhand Job Aspirants",
                            geographicArea: "Uttarakhand, India",
                            audienceType: "Rural Development Recruitment Candidates",
                        },
                    }),
                }}
            />

            {/* JobPosting Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        title: "UKSSSC VDO Recruitment",
                        description: "Recruitment for Village Development Officer (VDO) positions in Uttarakhand. Selection based on written examination (4 subjects) and document verification.",
                        datePosted: "2026-01-01",
                        validThrough: "2026-03-31",
                        employmentType: "FULL_TIME",
                        hiringOrganization: {
                            "@type": "Organization",
                            name: "Uttarakhand Subordinate Service Selection Commission",
                            sameAs: "https://sssc.uk.gov.in",
                        },
                        jobLocation: {
                            "@type": "Place",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "UKSSSC Office",
                                addressLocality: "Dehradun",
                                addressRegion: "UK",
                                postalCode: "248001",
                                addressCountry: "India",
                            },
                        },
                        qualifications: "Bachelor's degree from a recognized university",
                        baseSalary: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: {
                                "@type": "QuantitativeValue",
                                value: "Not disclosed yet",
                                unitText: "MONTH"
                            }
                        }
                    }),
                }}
            />

            {children}
        </>
    )
}