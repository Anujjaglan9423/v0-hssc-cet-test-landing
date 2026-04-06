// app/haryana-cet-group-c-syllabus/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HSSC CET Group C Syllabus 2026 PDF Download | Haryana CET Exam Patternete HSSC Syllabus PDF Download",
    description: "HSSC CET Group C Syllabus 2026 ki poori jankari topic-wise yahan dekhein. Haryana GK, Maths, Reasoning aur English ka official syllabus PDF download karein. Latest exam pattern aur free mock tests ke saath taiyari karein.",
    keywords: [
        "HSSC Group C syllabus 2026",
        "Haryana CET Group C syllabus PDF",
        "HSSC CET syllabus download",
        "Haryana CET Exam Pattern 2026",
        "Group C syllabus Haryana GK",
        "Group C syllabus Haryana",
        "HSSC Group C syllabus PDF download",
        "HSSC CET preparation tips",
        "Haryana CET Group C official syllabus",
        "CET Haryana Group C mock test"
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
        title: "Haryana CET Group C Syllabus 2026 | Complete HSSC Syllabus",
        description: "Complete Haryana CET Group C syllabus for 2026 exam. Download PDF for General Awareness, Reasoning, Quantitative Ability, Computer Knowledge, English & Hindi. Free mock tests available.",
        url: "https://cettest.site/haryana-cet-group-c-syllabus",
        siteName: "CET TEST",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-syllabus.jpg",
                width: 1200,
                height: 630,
                alt: "Haryana CET Group C Syllabus 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Haryana CET Group C Syllabus 2026 | Complete HSSC Syllabus",
        description: "Complete Haryana CET Group C syllabus for 2026 exam. Download PDF and start preparing with free mock tests.",
        images: ["/og-syllabus.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/haryana-cet-group-c-syllabus",
    },
    category: "education",
    classification: "Government Exam Preparation",
}

export default function HaryanaCETGroupCSyllabusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        name: "Haryana CET Group C Examination Syllabus",
                        description: "Complete syllabus for Haryana Common Eligibility Test (CET) for Group C posts conducted by HSSC",
                        educationalProgramMode: "Exam Preparation",
                        timeToComplete: "PT90M",
                        occupationalCategory: "Government Jobs",
                        provider: {
                            "@type": "Organization",
                            name: "Haryana Staff Selection Commission (HSSC)",
                            url: "https://hssc.gov.in",
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "General Awareness",
                                description: "Indian History, Polity, Geography, Economy, Current Affairs, Environment, General Science",
                            },
                            {
                                "@type": "Course",
                                name: "General Reasoning",
                                description: "Verbal and Non-Verbal Reasoning, Analogies, Coding-Decoding, Blood Relations, Syllogism",
                            },
                            {
                                "@type": "Course",
                                name: "Quantitative Ability",
                                description: "Number System, Percentage, Profit-Loss, Time & Work, Mensuration, Algebra, Geometry",
                            },
                            {
                                "@type": "Course",
                                name: "Computer Knowledge",
                                description: "Computer Fundamentals, MS Office, Internet, Email, Keyboard Shortcuts",
                            },
                            {
                                "@type": "Course",
                                name: "English Language",
                                description: "Grammar, Vocabulary, Comprehension, Error Detection, Sentence Correction",
                            },
                            {
                                "@type": "Course",
                                name: "Hindi Language",
                                description: "हिन्दी व्याकरण, संधि, समास, मुहावरे, पर्यायवाची, विलोम शब्द",
                            },
                        ],
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
                                name: "Haryana CET",
                                item: "https://cettest.site/haryana-cet",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "Group C Syllabus",
                                item: "https://cettest.site/haryana-cet-group-c-syllabus",
                            },
                        ],
                    }),
                }}
            />

            {/* FAQ Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is the syllabus for Haryana CET Group C?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Haryana CET Group C syllabus includes 6 subjects: General Awareness, General Reasoning, Quantitative Ability, Computer Knowledge, English Language, and Hindi Language.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many questions are asked in Haryana CET Group C exam?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The Haryana CET Group C exam consists of 100 questions for 100 marks, to be attempted in 90 minutes.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there negative marking in Haryana CET?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, there is a negative marking of 0.25 marks for each wrong answer in Haryana CET Group C examination.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Where can I download Haryana CET Group C syllabus PDF?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "You can find the complete Haryana CET Group C syllabus on this page with detailed topic-wise breakdown. The official PDF can be downloaded from HSSC website hssc.gov.in.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {children}
        </>
    )
}