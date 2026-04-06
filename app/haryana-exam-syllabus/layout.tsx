// app/haryana-exam-syllabus/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Haryana Exam Syllabus 2025 | Complete HSSC Group C, D, TGT, Skill Test & Scientific Assistant Syllabus",
    description: "Download complete Haryana CET exam syllabus 2025-26. Get HSSC Group C, Group D, TGT Punjabi, TGT Various Posts, TGT Sanskrit, TGT Hindi, TGT English, TGT Social Studies, TGT Science, TGT Maths, Scientific Assistant, Group 49 & 25+ Skill Test syllabi (Clerk, Stenographer, JE, Programmer, Accountant, Patwari, Lab Technician, Nurse, Pharmacist, Forest Guard, Fire Operator, Driver, Technician, Welder, Carpenter, Plumber, Security Guard, MTS & more). Free mock tests at cettest.site.",
    keywords: [
        // Main Keywords
        "Haryana exam syllabus",
        "HSSC syllabus 2025",
        "Haryana CET syllabus",
        "cettest.site",

        // Group C & D
        "HSSC Group C syllabus",
        "HSSC Group D syllabus",
        "Haryana CET Group C syllabus",
        "Haryana CET Group D syllabus",
        "CET Group C exam pattern",
        "CET Group D exam pattern",
        "HSSC CET syllabus PDF",

        // TGT Posts (Main Group)
        "HSSC TGT syllabus",
        "Haryana TGT syllabus",
        "TGT teacher syllabus Haryana",

        // TGT Sub-Exams
        "TGT Punjabi syllabus",
        "TGT Punjabi ROH syllabus",
        "TGT Various Posts syllabus",
        "TGT Sanskrit syllabus",
        "TGT Hindi syllabus",
        "TGT English syllabus",
        "TGT Social Studies syllabus",
        "TGT Science syllabus",
        "TGT Maths syllabus",
        "TGT Mathematics syllabus",

        // Scientific Assistant
        "Senior Scientific Assistant syllabus",
        "Scientific Assistant syllabus HSSC",
        "HSSC Scientific Assistant exam pattern",

        // Group 49
        "HSSC Group 49 syllabus",
        "Group 49 exam syllabus",

        // Skill Test (Main Group)
        "HSSC skill test syllabus",
        "Group C skill test syllabus",
        "HSSC written test syllabus",

        // Skill Test Sub-Exams (25+ Posts)
        "Clerk skill test syllabus",
        "Office Assistant skill test",
        "Stenographer skill test syllabus",
        "Junior Engineer JE syllabus",
        "Civil JE syllabus",
        "Electrical JE syllabus",
        "Mechanical JE syllabus",
        "Programmer skill test",
        "IT Officer syllabus",
        "Accountant written test",
        "Auditor syllabus",
        "Patwari syllabus",
        "Field Inspector syllabus",
        "Lab Technician syllabus",
        "Staff Nurse syllabus",
        "ANM syllabus",
        "Pharmacist syllabus",
        "Veterinary Pharmacist syllabus",
        "Livestock Inspector syllabus",
        "Agriculture Development Officer syllabus",
        "ADO syllabus",
        "Forest Guard syllabus",
        "Wildlife Inspector syllabus",
        "Fire Operator syllabus",
        "Fireman syllabus",
        "Driver syllabus",
        "Conductor syllabus",
        "Technician syllabus",
        "Electrician syllabus",
        "Welder syllabus",
        "Fitter syllabus",
        "Carpenter syllabus",
        "Mason syllabus",
        "Plumber syllabus",
        "Painter syllabus",
        "Decorator syllabus",
        "Helper syllabus",
        "Attendant syllabus",
        "Multi-Tasking Staff syllabus",
        "MTS syllabus",
        "Security Guard syllabus",
        "Watchman syllabus",
        "Sweeper syllabus",
        "Sanitary Worker syllabus",
        "Mali syllabus",
        "Gardener syllabus",
        "Chowkidar syllabus",

        // Preparation Keywords
        "Haryana exam preparation",
        "HSSC free mock test",
        "Haryana CET online test",
        "HSSC previous year paper",
        "Haryana GK for CET"
    ],
    authors: [{ name: "CET TEST", url: "https://cettest.site" }],
    creator: "CET TEST",
    publisher: "CET TEST",
    metadataBase: new URL("https://cettest.site"),
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
        title: "Haryana Exam Syllabus 2025 | Complete HSSC Group C, D, TGT, Skill Test & Scientific Assistant Syllabus",
        description: "Complete HSSC exam syllabi collection: CET Group C & D, TGT (Punjabi, Sanskrit, Hindi, English, Social Studies, Science, Maths), Scientific Assistant, Group 49 & 25+ Skill Test posts (Clerk, Stenographer, JE, Programmer, Accountant, Patwari, Lab Technician, Nurse, Pharmacist, Forest Guard, Fire Operator, Driver, Technician, Welder, Carpenter, Plumber, Security Guard, MTS & more). Free mock tests at cettest.site.",
        url: "https://cettest.site/haryana-exam-syllabus",
        siteName: "CET TEST",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-haryana-syllabus.jpg",
                width: 1200,
                height: 630,
                alt: "Haryana Exam Syllabus 2025 - Complete HSSC Group C, D, TGT & Skill Test Syllabus Collection",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Haryana Exam Syllabus 2025 | HSSC Group C, D, TGT & 25+ Skill Tests",
        description: "Complete HSSC exam syllabi: CET Group C & D, TGT (8 subjects), Scientific Assistant, Group 49 & 25+ Skill Test posts. Free mock tests at cettest.site.",
        images: ["/og-haryana-syllabus.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/haryana-exam-syllabus",
    },
    category: "education",
    classification: "Government Exam Preparation",
}

export default function HaryanaExamSyllabusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* JSON-LD Structured Data for Collection Page with All Exams */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Haryana Exam Syllabus 2025 - Complete HSSC Syllabus Collection",
                        description: "Complete collection of all HSSC exam syllabi including CET Group C, Group D, TGT (8 subjects), Scientific Assistant, Group 49, and 25+ Skill Test posts",
                        url: "https://cettest.site/haryana-exam-syllabus",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "CET TEST",
                            url: "https://cettest.site",
                        },
                        about: {
                            "@type": "Thing",
                            name: "Haryana Government Exams",
                            description: "Recruitment examinations conducted by Haryana Staff Selection Commission (HSSC)",
                        },
                        mainEntity: {
                            "@type": "ItemList",
                            name: "All HSSC Exam Syllabi",
                            description: "Complete list of all HSSC exam syllabi available on cettest.site",
                            numberOfItems: 45,
                            itemListElement: [
                                // CET Group C & D
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "HSSC CET Group C Syllabus",
                                    url: "https://cettest.site/haryana-cet-group-c-syllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "HSSC CET Group D Syllabus",
                                    url: "https://cettest.site/haryana-cet-group-d-syllabus",
                                },
                                // TGT Main Group
                                {
                                    "@type": "ListItem",
                                    position: 3,
                                    name: "TGT Punjabi (ROH) Advt. No. 4/2023 Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 4,
                                    name: "TGT Various Posts Under Advt. No. 2/2023 Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 5,
                                    name: "TGT Sanskrit Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 6,
                                    name: "TGT Hindi Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 7,
                                    name: "TGT English Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 8,
                                    name: "TGT Social Studies Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 9,
                                    name: "TGT Science Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 10,
                                    name: "TGT Mathematics Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                // Other Exams
                                {
                                    "@type": "ListItem",
                                    position: 11,
                                    name: "Senior Scientific Assistant & Scientific Assistant Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 12,
                                    name: "HSSC Group 49 Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                // Skill Test Sub-Exams
                                {
                                    "@type": "ListItem",
                                    position: 13,
                                    name: "Clerk / Office Assistant Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 14,
                                    name: "Stenographer Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 15,
                                    name: "Junior Engineer (JE) Written Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 16,
                                    name: "Programmer / IT Officer Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 17,
                                    name: "Accountant / Auditor Written Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 18,
                                    name: "Field Inspector / Patwari Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 19,
                                    name: "Lab Technician / Scientific Assistant Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 20,
                                    name: "Staff Nurse / ANM Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 21,
                                    name: "Pharmacist Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 22,
                                    name: "Veterinary Pharmacist / Livestock Inspector Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 23,
                                    name: "Agriculture Development Officer (ADO) Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 24,
                                    name: "Forest Guard / Wildlife Inspector Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 25,
                                    name: "Fire Operator / Fireman Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 26,
                                    name: "Driver / Conductor Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 27,
                                    name: "Technician / Electrician Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 28,
                                    name: "Welder / Fitter Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 29,
                                    name: "Carpenter / Mason Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 30,
                                    name: "Plumber / Pipe Fitter Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 31,
                                    name: "Painter / Decorator Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 32,
                                    name: "Helper / Attendant Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 33,
                                    name: "Multi-Tasking Staff (MTS) Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 34,
                                    name: "Security Guard / Watchman Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 35,
                                    name: "Sweeper / Sanitary Worker Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 36,
                                    name: "Mali / Gardener Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 37,
                                    name: "Chowkidar / Watchman Skill Test Syllabus",
                                    url: "https://hssc.gov.in/examsyllabus",
                                },
                            ],
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
                                name: "Haryana Exams",
                                item: "https://cettest.site/haryana-exams",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "Complete Syllabus Collection",
                                item: "https://cettest.site/haryana-exam-syllabus",
                            },
                        ],
                    }),
                }}
            />

            {/* Course Schema for Each Exam Category */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        name: "HSSC Complete Exam Preparation Course",
                        description: "Complete preparation course for all HSSC exams including CET Group C, Group D, TGT, Scientific Assistant, and 25+ Skill Test posts",
                        provider: {
                            "@type": "Organization",
                            name: "CET TEST",
                            sameAs: "https://cettest.site",
                        },
                        hasCourseInstance: {
                            "@type": "CourseInstance",
                            courseMode: "online",
                            courseWorkload: "PT90M",
                        },
                        educationalLevel: "Graduation",
                        teaches: [
                            "General Awareness",
                            "General Reasoning",
                            "Quantitative Ability",
                            "Computer Knowledge",
                            "English Language",
                            "Hindi Language",
                            "Haryana GK",
                            "Teaching Aptitude",
                            "Technical Skills",
                            "Practical Knowledge",
                        ],
                    }),
                }}
            />

            {/* Educational Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: "CET TEST",
                        url: "https://cettest.site",
                        logo: "https://cettest.site/logo.png",
                        sameAs: [
                            "https://www.facebook.com/Cet Test",
                            "https://www.instagram.com/cet__test",
                        ],
                        description: "India's leading platform for Haryana CET, HSSC, SSC, Railway, and UKSSSC exam preparation with free mock tests and study materials",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Haryana",
                            addressRegion: "Haryana",
                            addressCountry: "IN",
                        },
                        teaches: [
                            "HSSC CET Group C",
                            "HSSC CET Group D",
                            "HSSC TGT",
                            "HSSC Scientific Assistant",
                            "HSSC Skill Tests",
                            "SSC Exams",
                            "Railway RRB",
                        ],
                    }),
                }}
            />

            {children}
        </>
    )
}