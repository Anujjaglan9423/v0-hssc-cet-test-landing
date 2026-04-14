// app/uksssc-exam-syllabus/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "UKSSSC Exam Syllabus 2026 | Police Constable & VDO Complete Syllabus",
    description: "Download UKSSSC Police Constable and VDO syllabus 2026 PDF. Complete selection process, exam pattern, subject-wise topics, and preparation tips. Free mock tests available at cettest.site.",
    keywords: [
        "UKSSSC syllabus",
        "UKSSSC exam syllabus",
        "UKSSSC Police Constable syllabus",
        "UKSSSC VDO syllabus",
        "Uttarakhand Police Constable syllabus",
        "Uttarakhand VDO syllabus",
        "UKSSSC syllabus 2026",
        "UKSSSC exam pattern",
        "UKSSSC selection process",
        "Uttarakhand exam syllabus",
        "UKSSSC preparation",
        "UKSSSC Police Constable exam pattern",
        "UKSSSC VDO exam pattern",
        "Uttarakhand GK syllabus",
        "UKSSSC previous year papers",
        "UKSSSC mock tests"
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
        title: "UKSSSC Exam Syllabus 2026 | Police Constable & VDO Complete Syllabus",
        description: "Complete UKSSSC exam syllabus for Police Constable and VDO recruitment 2026. Subject-wise topics, exam pattern, physical standards, and preparation tips. Free mock tests available.",
        url: "https://cettest.site/uksssc-exam-syllabus",
        siteName: "cettest.site",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-uksssc-syllabus.jpg",
                width: 1200,
                height: 630,
                alt: "UKSSSC Exam Syllabus 2026 - Police Constable & VDO Complete Syllabus",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UKSSSC Exam Syllabus 2026 | Police Constable & VDO Complete Syllabus",
        description: "Complete syllabus for UKSSSC Police Constable (5 subjects) and VDO (4 subjects). Exam pattern, Uttarakhand GK focus, and preparation tips.",
        images: ["/og-uksssc-syllabus.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/uksssc-exam-syllabus",
    },
    category: "government-exam",
    classification: "Uttarakhand Government Recruitment Examination",
}

export default function UKSSSCExamSyllabusLayout({
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
                        "@type": "GovernmentService",
                        name: "UKSSSC Recruitment Examinations",
                        serviceType: "Government Recruitment Examinations",
                        provider: {
                            "@type": "GovernmentOrganization",
                            name: "Uttarakhand Subordinate Service Selection Commission (UKSSSC)",
                            url: "https://sssc.uk.gov.in",
                        },
                        areaServed: {
                            "@type": "State",
                            name: "Uttarakhand, India",
                        },
                        audience: {
                            "@type": "Audience",
                            name: "Government Job Aspirants",
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
                                item: "https://cettest.site/uksssc",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "UKSSSC Exam Syllabus",
                                item: "https://cettest.site/uksssc-exam-syllabus",
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
                        name: "UKSSSC Exam Preparation Program",
                        description: "Complete preparation program for UKSSSC Police Constable and VDO examinations",
                        educationalProgramMode: "Exam Preparation",
                        timeToComplete: "P3M",
                        occupationalCategory: "Government Services",
                        provider: {
                            "@type": "Organization",
                            name: "CET TEST",
                            url: "https://cettest.site",
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "UKSSSC Police Constable Syllabus",
                                description: "5 subjects: Computer Knowledge (5 units), General Knowledge & Current Affairs, General Hindi, Reasoning Ability, Numerical Ability. 100 questions, 90 minutes.",
                            },
                            {
                                "@type": "Course",
                                name: "UKSSSC VDO Syllabus",
                                description: "4 subjects: General Knowledge & Current Affairs, General Hindi, Reasoning Ability, Numerical Ability. Computer Knowledge not included. 100 questions, 1.5 hours.",
                            },
                        ],
                    }),
                }}
            />

            {/* ItemList Structured Data for Exams */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "UKSSSC Exams Syllabus List",
                        description: "List of all UKSSSC exam syllabi available on this page",
                        numberOfItems: 2,
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "UKSSSC Police Constable Syllabus",
                                url: "https://cettest.site/uksssc-police-constable-syllabus",
                                description: "Complete syllabus for Police Constable including Computer Knowledge, GK, Hindi, Reasoning, and Numerical Ability",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "UKSSSC VDO Syllabus",
                                url: "https://cettest.site/uksssc-vdo-syllabus",
                                description: "Complete syllabus for Village Development Officer including GK, Hindi, Reasoning, and Numerical Ability (no computer section)",
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
                                name: "What is the difference between UKSSSC Police Constable and VDO syllabus?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Police Constable syllabus includes 5 subjects: Computer Knowledge, GK, Hindi, Reasoning, and Numerical Ability. VDO syllabus has only 4 subjects (Computer Knowledge is NOT included) with greater focus on Uttarakhand GK and Panchayati Raj.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Computer Knowledge included in UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "No, Computer Knowledge is NOT included in the UKSSSC VDO syllabus. Unlike Police Constable exam, VDO focuses only on GK, Hindi, Reasoning, and Numerical Ability.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the negative marking scheme for UKSSSC exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most UKSSSC examinations have negative marking of 1/4th (0.25) mark for each wrong answer. Always check the latest official notification for exact pattern.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of UKSSSC Police Constable exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The written examination for Police Constable is typically conducted for 90 minutes (1.5 hours) with 100 objective-type multiple choice questions.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of UKSSSC VDO exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The VDO written examination is typically conducted for 1.5 hours (90 minutes) with 100 objective-type multiple choice questions.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which topics are most important for Uttarakhand GK?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most important topics: Uttarakhand History (Formation as a State), Culture (Garhwali, Kumaoni), Geography (Himalayas, Rivers), Char Dham Yatra, National Parks (Jim Corbett, Rajaji), and Panchayati Raj system.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I take UKSSSC exams in Hindi language?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, the question paper is usually bilingual (Hindi and English) for all sections except the language papers.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the physical requirement for UKSSSC Police Constable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Male General category: Minimum 168 cm height, 81 cm chest (with 5 cm expansion). Female General: Minimum 147 cm height. Check official notification for category-wise details.",
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
                        name: "How to Prepare for UKSSSC Exams",
                        description: "Step-by-step preparation guide for UKSSSC Police Constable and VDO examinations",
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
                                text: "Review the complete syllabus for your chosen exam. Police Constable has 5 subjects including Computer Knowledge; VDO has 4 subjects without computer section.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Master Uttarakhand GK",
                                text: "Focus on Uttarakhand-specific topics including history, culture, geography, and Panchayati Raj as they carry significant weightage.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Practice Computer Basics (For Police)",
                                text: "If preparing for Police Constable, master computer fundamentals including MS Office, Internet, and Cyber Security.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Take Mock Tests",
                                text: "Practice full-length mock tests designed as per actual UKSSSC exam pattern to improve speed and accuracy.",
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
                        name: "UKSSSC Exam Syllabus 2026",
                        description: "Complete syllabus and selection process for UKSSSC Police Constable and VDO recruitment including exam pattern, subject-wise topics, and preparation tips.",
                        url: "https://cettest.site/uksssc-exam-syllabus",
                        inLanguage: "en-IN",
                        datePublished: "2026-01-01",
                        dateModified: "2026-04-14",
                        mainEntity: {
                            "@type": "ItemList",
                            name: "Syllabus Components",
                            numberOfItems: 2,
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "UKSSSC Police Constable Syllabus",
                                    description: "5 subjects: Computer Knowledge, GK & Current Affairs, General Hindi, Reasoning Ability, Numerical Ability",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "UKSSSC VDO Syllabus",
                                    description: "4 subjects: GK & Current Affairs, General Hindi, Reasoning Ability, Numerical Ability (Computer Knowledge not included)",
                                },
                            ],
                        },
                        about: {
                            "@type": "Thing",
                            name: "UKSSSC Exams",
                            description: "Recruitment examinations for various government posts in Uttarakhand",
                        },
                        audience: {
                            "@type": "Audience",
                            name: "Government Job Aspirants",
                            geographicArea: "Uttarakhand, India",
                            audienceType: "Uttarakhand Government Recruitment Candidates",
                        },
                    }),
                }}
            />

            {/* JobPosting Structured Data for Police Constable */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        title: "UKSSSC Police Constable Recruitment",
                        description: "Recruitment for Police Constable positions in Uttarakhand Police. Selection based on written exam (5 subjects), physical standards, and document verification.",
                        datePosted: "2026-01-01",
                        validThrough: "2026-12-31",
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
                                addressLocality: "Uttarakhand",
                                addressRegion: "UK",
                                addressCountry: "India",
                            },
                        },
                        qualifications: "10+2 pass or equivalent",
                        physicalRequirements: "Male: 168cm height, 81cm chest; Female: 147cm height",
                    }),
                }}
            />

            {/* JobPosting Structured Data for VDO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        title: "UKSSSC VDO Recruitment",
                        description: "Recruitment for Village Development Officer (VDO) positions in Uttarakhand. Selection based on written exam (4 subjects) and document verification.",
                        datePosted: "2026-01-01",
                        validThrough: "2026-12-31",
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
                                addressLocality: "Uttarakhand",
                                addressRegion: "UK",
                                addressCountry: "India",
                            },
                        },
                        qualifications: "Bachelor's degree from a recognized university",
                    }),
                }}
            />

            {/* CollectionPage Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "UKSSSC Exam Syllabus Collection",
                        description: "Complete collection of UKSSSC exam syllabi including Police Constable and VDO",
                        url: "https://cettest.site/uksssc-exam-syllabus",
                        hasPart: [
                            {
                                "@type": "WebPage",
                                name: "UKSSSC Police Constable Syllabus",
                                url: "https://cettest.site/uksssc-police-constable-syllabus",
                                description: "Detailed syllabus for Police Constable with 5 subjects and complete topic breakdown",
                            },
                            {
                                "@type": "WebPage",
                                name: "UKSSSC VDO Syllabus",
                                url: "https://cettest.site/uksssc-vdo-syllabus",
                                description: "Detailed syllabus for VDO with 4 subjects and Uttarakhand GK focus",
                            },
                        ],
                    }),
                }}
            />

            {children}
        </>
    )
}