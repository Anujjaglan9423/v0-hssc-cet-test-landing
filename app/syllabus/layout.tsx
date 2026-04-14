// app/syllabus/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "State Exam Syllabus 2026 | HSSC & UKSSSC Complete Syllabus Guide",
    description: "Complete syllabus guide for Haryana HSSC and Uttarakhand UKSSSC state exams. Get detailed exam patterns, subject-wise weightage, preparation tips, and free mock tests for CET, Police Constable, VDO and more.",
    keywords: [
        "state exam syllabus",
        "HSSC syllabus",
        "UKSSSC syllabus",
        "Haryana exam syllabus",
        "Uttarakhand exam syllabus",
        "HSSC CET syllabus",
        "UKSSSC Police syllabus",
        "UKSSSC VDO syllabus",
        "Haryana Police Constable syllabus",
        "state government exam syllabus",
        "HSSC exam pattern",
        "UKSSSC exam pattern",
        "Haryana CET preparation",
        "Uttarakhand GK preparation",
        "state level exam preparation"
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
        title: "State Exam Syllabus 2026 | HSSC & UKSSSC Complete Syllabus Guide",
        description: "Comprehensive syllabus guide for HSSC (Haryana) and UKSSSC (Uttarakhand) state exams. CET, Police Constable, VDO, Group C, Group D syllabus with exam patterns and preparation tips.",
        url: "https://cettest.site/syllabus",
        siteName: "cettest.site",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-state-exam-syllabus.jpg",
                width: 1200,
                height: 630,
                alt: "State Exam Syllabus 2026 - HSSC & UKSSSC Complete Syllabus Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "State Exam Syllabus 2026 | HSSC & UKSSSC Complete Syllabus",
        description: "Complete syllabus for HSSC (CET, Police) and UKSSSC (Police Constable, VDO). Subject-wise weightage, exam patterns, and free mock tests.",
        images: ["/og-state-exam-syllabus.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/syllabus",
    },
    category: "government-exam",
    classification: "State Government Recruitment Examination Guide",
}

export default function SyllabusLayout({
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
                        description: "Online exam preparation platform for HSSC, UKSSSC, State CET, Police, VDO, and other state government exams",
                    }),
                }}
            />

            {/* WebSite Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "CET TEST",
                        url: "https://cettest.site",
                        description: "State Government Exam Preparation Platform",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: {
                                "@type": "EntryPoint",
                                urlTemplate: "https://cettest.site/search?q={search_term_string}",
                            },
                            "query-input": "required name=search_term_string",
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
                                name: "Syllabus",
                                item: "https://cettest.site/syllabus",
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
                        name: "State Exam Syllabus Collection",
                        description: "List of all state exam syllabi available on this page",
                        numberOfItems: 2,
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "HSSC Exam Syllabus",
                                url: "https://cettest.site/haryana-exam-syllabus",
                                description: "Complete syllabus for Haryana Staff Selection Commission exams including CET Group C, Group D, Police Constable, and more",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "UKSSSC Exam Syllabus",
                                url: "https://cettest.site/uksssc-exam-syllabus",
                                description: "Complete syllabus for Uttarakhand Subordinate Service Selection Commission exams including Police Constable, VDO, and more",
                            },
                        ],
                    }),
                }}
            />

            {/* HSSC Organization Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "GovernmentOrganization",
                        name: "Haryana Staff Selection Commission",
                        alternateName: "HSSC",
                        url: "https://hssc.gov.in",
                        logo: "https://hssc.gov.in/images/logo.png",
                        description: "HSSC conducts recruitment for Group B, C, and D posts in Haryana Government. It administers the Common Eligibility Test (CET) for state government jobs.",
                        areaServed: {
                            "@type": "State",
                            name: "Haryana, India",
                        },
                        foundingDate: "1970",
                        headquarters: {
                            "@type": "Place",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Panchkula",
                                addressRegion: "Haryana",
                                addressCountry: "India",
                            },
                        },
                    }),
                }}
            />

            {/* UKSSSC Organization Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "GovernmentOrganization",
                        name: "Uttarakhand Subordinate Service Selection Commission",
                        alternateName: "UKSSSC",
                        url: "https://sssc.uk.gov.in",
                        description: "UKSSSC conducts recruitment examinations for various Group C posts in Uttarakhand government, with special focus on Uttarakhand-specific general knowledge.",
                        areaServed: {
                            "@type": "State",
                            name: "Uttarakhand, India",
                        },
                        foundingDate: "2004",
                        headquarters: {
                            "@type": "Place",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Dehradun",
                                addressRegion: "Uttarakhand",
                                addressCountry: "India",
                            },
                        },
                    }),
                }}
            />

            {/* EducationalOccupationalProgram for HSSC */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        name: "HSSC Exam Preparation Program",
                        description: "Complete preparation for Haryana CET Group C, Group D, Police Constable, and other HSSC exams",
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
                                name: "HSSC CET Group C Syllabus",
                                description: "6 subjects: General Awareness, Reasoning, Quantitative Aptitude, Computer Knowledge, English, Hindi. 100 questions, 105 minutes.",
                            },
                            {
                                "@type": "Course",
                                name: "HSSC CET Group D Syllabus",
                                description: "7 subjects including Haryana GK (25% weightage). 100 questions, 105 minutes.",
                            },
                            {
                                "@type": "Course",
                                name: "Haryana Police Constable Syllabus",
                                description: "PMT, PST, Knowledge Test (97% weightage), NCC bonus marks. Computer Knowledge (10%), Haryana GK (20%).",
                            },
                        ],
                    }),
                }}
            />

            {/* EducationalOccupationalProgram for UKSSSC */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        name: "UKSSSC Exam Preparation Program",
                        description: "Complete preparation for UKSSSC Police Constable, VDO, and other Uttarakhand state exams",
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
                                description: "5 subjects: Computer Knowledge (5 units), GK & Current Affairs, General Hindi, Reasoning, Numerical Ability. 100 questions, 90 minutes.",
                            },
                            {
                                "@type": "Course",
                                name: "UKSSSC VDO Syllabus",
                                description: "4 subjects: GK & Current Affairs, General Hindi, Reasoning, Numerical Ability. No computer section. 100-120 questions, 2 hours.",
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
                                name: "What is the difference between HSSC and UKSSSC exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC conducts exams for Haryana government jobs with CET score valid for 3 years and 25% Haryana GK weightage. UKSSSC conducts exams for Uttarakhand with up to 40% state GK weightage and negative marking of 0.25.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the validity of HSSC CET score?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC CET score is valid for 3 years from the date of result declaration. Candidates can apply for various Group C and Group D posts without reappearing for the CET.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is there negative marking in UKSSSC exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, most UKSSSC exams have negative marking of 0.25 marks for each wrong answer. Candidates should avoid guesswork and focus on accuracy.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which state GK has higher weightage - HSSC or UKSSSC?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "UKSSSC gives higher weightage to state GK (up to 40%), while HSSC allocates 25% to Haryana-specific topics.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Is Computer Knowledge included in both exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC includes computer knowledge in many exams (minimum 10% in Police Constable). UKSSSC VDO does NOT include computer section, but other UKSSSC exams may include it.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the duration of these exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "HSSC exams are typically 1 hour 45 minutes (105 minutes). UKSSSC exams are 2 hours (120 minutes).",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I take these exams in Hindi language?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, both HSSC and UKSSSC exams are bilingual (Hindi and English) for all sections except language-specific papers.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the physical requirement for Haryana Police Constable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Male General: 170cm height, 83cm chest; Male Reserve: 168cm height, 81cm chest; Female General: 158cm height; Female Reserve: 156cm height.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "What is the physical requirement for UKSSSC Police Constable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Male General: 168cm height, 81cm chest (with 5cm expansion); Female General: 147cm height. Check official notification for category-wise details.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* HowTo Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "How to Prepare for State Government Exams",
                        description: "Step-by-step preparation guide for HSSC and UKSSSC state examinations",
                        totalTime: "P3M",
                        estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: "0",
                        },
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Choose Your Exam Board",
                                text: "Select between HSSC (Haryana) or UKSSSC (Uttarakhand) based on your eligibility and preference.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Understand the Syllabus",
                                text: "Review complete syllabus including subject-wise topics, weightage, and exam pattern.",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Master State GK",
                                text: "For HSSC focus on Haryana history, culture, schemes (25% weightage). For UKSSSC focus on Uttarakhand GK (40% weightage).",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Practice Mock Tests",
                                text: "Take regular mock tests designed as per actual exam pattern to improve speed and accuracy.",
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
                        name: "State Exam Syllabus 2026",
                        description: "Complete syllabus guide for HSSC (Haryana) and UKSSSC (Uttarakhand) state government examinations including exam patterns, subject-wise weightage, and preparation tips.",
                        url: "https://cettest.site/syllabus",
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
                                    name: "HSSC Exam Syllabus",
                                    description: "CET Group C, Group D, Police Constable, Skill Tests - 35+ exam categories",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "UKSSSC Exam Syllabus",
                                    description: "Police Constable, VDO, Junior Assistant, Forest Guard - Group C posts",
                                },
                            ],
                        },
                        about: {
                            "@type": "Thing",
                            name: "State Government Exams",
                            description: "Recruitment examinations for various government posts in Haryana and Uttarakhand",
                        },
                        audience: {
                            "@type": "Audience",
                            name: "Government Job Aspirants",
                            geographicArea: "Haryana and Uttarakhand, India",
                            audienceType: "State Government Recruitment Candidates",
                        },
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
                        name: "State Exam Syllabus Collection",
                        description: "Complete collection of state-level examination syllabi including HSSC and UKSSSC",
                        url: "https://cettest.site/syllabus",
                        hasPart: [
                            {
                                "@type": "WebPage",
                                name: "HSSC Exam Syllabus",
                                url: "https://cettest.site/haryana-exam-syllabus",
                                description: "Detailed syllabus for all HSSC exams including CET Group C, Group D, Police Constable, and Skill Tests",
                            },
                            {
                                "@type": "WebPage",
                                name: "UKSSSC Exam Syllabus",
                                url: "https://cettest.site/uksssc-exam-syllabus",
                                description: "Detailed syllabus for UKSSSC exams including Police Constable, VDO, and other Group C posts",
                            },
                        ],
                    }),
                }}
            />

            {/* JobPosting Structured Data for State Exams */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "JobPosting",
                        title: "State Government Recruitment",
                        description: "Recruitment opportunities in Haryana and Uttarakhand state government departments through HSSC and UKSSSC examinations",
                        datePosted: "2026-01-01",
                        validThrough: "2026-12-31",
                        employmentType: "FULL_TIME",
                        hiringOrganization: [
                            {
                                "@type": "GovernmentOrganization",
                                name: "Haryana Staff Selection Commission",
                                sameAs: "https://hssc.gov.in",
                            },
                            {
                                "@type": "GovernmentOrganization",
                                name: "Uttarakhand Subordinate Service Selection Commission",
                                sameAs: "https://sssc.uk.gov.in",
                            },
                        ],
                        jobLocation: [
                            {
                                "@type": "Place",
                                address: {
                                    "@type": "PostalAddress",
                                    addressLocality: "Haryana",
                                    addressRegion: "HR",
                                    addressCountry: "India",
                                },
                            },
                            {
                                "@type": "Place",
                                address: {
                                    "@type": "PostalAddress",
                                    addressLocality: "Uttarakhand",
                                    addressRegion: "UK",
                                    addressCountry: "India",
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