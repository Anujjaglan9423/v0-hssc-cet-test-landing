// app/current-affairs/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Monthly Current Affairs 2026 | Complete Bilingual Digest for Competitive Exams",
    description: "Download monthly current affairs 2026 PDF in English & Hindi. Complete coverage of national, international, economy, science & tech, environment news. Exam-oriented analysis for UPSC, SSC, Banking, HSSC, UKSSSC, and all state exams.",
    keywords: [
        "current affairs 2026",
        "monthly current affairs",
        "March 2026 current affairs",
        "April 2026 current affairs",
        "current affairs in Hindi",
        "मासिक करेंट अफेयर्स",
        "current affairs for competitive exams",
        "current affairs digest",
        "current affairs PDF download",
        "current affairs for UPSC",
        "current affairs for SSC",
        "current affairs for Banking",
        "current affairs for HSSC",
        "current affairs for UKSSSC",
        "current affairs for Haryana CET",
        "current affairs for Uttarakhand exams",
        "current affairs monthly compilation",
        "current affairs quiz",
        "important days 2026",
        "bilingual current affairs",
        "current affairs with static GK",
        "exam-oriented current affairs"
    ],
    authors: [{ name: "CET TEST" }, { name: "Chronos Intelligence Hub" }],
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
        title: "Monthly Current Affairs 2026 | Complete Bilingual Digest for Competitive Exams",
        description: "Free monthly current affairs digest in English & Hindi. Exam-oriented analysis, static GK, important days, and practice questions. Download PDF for UPSC, SSC, Banking, HSSC, UKSSSC.",
        url: "https://cettest.site/current-affairs",
        siteName: "CET TEST",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/og-current-affairs.jpg",
                width: 1200,
                height: 630,
                alt: "Monthly Current Affairs 2026 - Complete Bilingual Digest",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Monthly Current Affairs 2026 | Bilingual Digest",
        description: "12 months, 50+ topics, 80+ important days, 500+ practice questions. Available in English & Hindi. Free PDF downloads.",
        images: ["/og-current-affairs.jpg"],
        creator: "@cettest",
        site: "@cettest",
    },
    alternates: {
        canonical: "https://cettest.site/current-affairs",
        languages: {
            'en': 'https://cettest.site/current-affairs',
            'hi': 'https://cettest.site/current-affairs?lang=hi',
        },
    },
    category: "current-affairs",
    classification: "Competitive Exam Current Affairs Resource - Bilingual",
    verification: {
        google: "your-google-verification-code", // Add your verification code
    },
}

export default function CurrentAffairsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().toLocaleString('default', { month: 'long' })

    return (
        <>
            {/* ==================== ORGANIZATION SCHEMA ==================== */}
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
                            "https://t.me/cettest",
                        ],
                        description: "India's leading online exam preparation platform for competitive exams including UPSC, SSC, Banking, Railways, HSSC, UKSSSC, and state-level exams.",
                        email: "support@cettest.site",
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "IN",
                        },
                    }),
                }}
            />

            {/* ==================== WEBSITE SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "CET TEST",
                        url: "https://cettest.site",
                        description: "Comprehensive exam preparation platform for government job aspirants",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: {
                                "@type": "EntryPoint",
                                urlTemplate: "https://cettest.site/search?q={search_term_string}",
                            },
                            "query-input": "required name=search_term_string",
                        },
                        inLanguage: ["en", "hi"],
                    }),
                }}
            />

            {/* ==================== BREADCRUMB SCHEMA ==================== */}
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
                                name: "Current Affairs",
                                item: "https://cettest.site/current-affairs",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== ITEM LIST SCHEMA - ALL MONTHS ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Monthly Current Affairs 2026",
                        description: "Complete collection of monthly current affairs digests for competitive exam preparation",
                        numberOfItems: 12,
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "January 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/january-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "February 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/february-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "March 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/march-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                name: "April 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/april-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 5,
                                name: "May 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/may-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 6,
                                name: "June 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/june-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 7,
                                name: "July 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/july-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 8,
                                name: "August 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/august-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 9,
                                name: "September 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/september-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 10,
                                name: "October 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/october-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 11,
                                name: "November 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/november-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 12,
                                name: "December 2026 Current Affairs",
                                url: "https://cettest.site/current-affairs/december-2026",
                            },
                            {
                                "@type": "ListItem",
                                position: 13,
                                name: "October 2025 Current Affairs",
                                url: "https://cettest.site/current-affairs/october-2025",
                            },
                            {
                                "@type": "ListItem",
                                position: 14,
                                name: "November 2025 Current Affairs",
                                url: "https://cettest.site/current-affairs/november-2025",
                            },
                            {
                                "@type": "ListItem",
                                position: 15,
                                name: "December 2025 Current Affairs",
                                url: "https://cettest.site/current-affairs/december-2026",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== FAQ SCHEMA - BILINGUAL ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How should I prepare current affairs for competitive exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Focus on the last 6-8 months with special attention to government schemes, international relations, economic developments, and state-specific news. Our monthly digests provide exam-oriented analysis with static GK and practice questions.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Which months are most important for current affairs?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "The last 6 months before your exam are most important. For exams in mid-2026, focus on January-June 2026 with special attention to Union Budget, Economic Survey, and major international summits.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are these current affairs available in Hindi?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes! All our current affairs digests are available in both English and Hindi. You can toggle between languages using the language switcher on each page.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How many questions can I expect from current affairs in exams?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "In most competitive exams, current affairs constitute 15-25% of the general awareness section. This typically ranges from 10-30 questions depending on the exam pattern.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide practice questions for current affairs?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, each monthly digest includes practice MCQs. Additionally, you can attempt our full-length current affairs quizzes in the mock test section for comprehensive preparation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are these digests useful for state exams like HSSC and UKSSSC?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Absolutely! Our digests cover both national and state-level news. We include state-specific current affairs, government schemes, and important regional developments for Haryana and Uttarakhand exams.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== HINDI FAQ SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        inLanguage: "hi",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "प्रतियोगी परीक्षाओं के लिए करेंट अफेयर्स की तैयारी कैसे करें?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "पिछले 6-8 महीनों पर ध्यान केंद्रित करें, विशेष रूप से सरकारी योजनाओं, अंतर्राष्ट्रीय संबंधों, आर्थिक विकास और राज्य-विशिष्ट समाचारों पर। हमारे मासिक डाइजेस्ट परीक्षा-उन्मुख विश्लेषण प्रदान करते हैं।",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "क्या ये करेंट अफेयर्स हिंदी में उपलब्ध हैं?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "हाँ! हमारे सभी करेंट अफेयर्स डाइजेस्ट अंग्रेजी और हिंदी दोनों में उपलब्ध हैं। आप प्रत्येक पृष्ठ पर भाषा स्विचर का उपयोग करके भाषा बदल सकते हैं।",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "क्या ये डाइजेस्ट HSSC और UKSSSC जैसी राज्य परीक्षाओं के लिए उपयोगी हैं?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "बिल्कुल! हमारे डाइजेस्ट राष्ट्रीय और राज्य-स्तरीय दोनों समाचारों को कवर करते हैं। हम हरियाणा और उत्तराखंड परीक्षाओं के लिए राज्य-विशिष्ट करेंट अफेयर्स शामिल करते हैं।",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== COLLECTION PAGE SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Monthly Current Affairs Collection 2026",
                        description: "Complete collection of monthly current affairs digests for competitive exam preparation including UPSC, SSC, Banking, Railways, HSSC, and UKSSSC.",
                        url: "https://cettest.site/current-affairs",
                        inLanguage: ["en", "hi"],
                        hasPart: [
                            {
                                "@type": "CreativeWork",
                                name: "March 2026 Current Affairs",
                                description: "16th Finance Commission, QUAD Summit, RBI Digital Rupee, ISRO NISAR, 5 new Ramsar sites",
                                url: "https://cettest.site/current-affairs/march-2026",
                            },
                            {
                                "@type": "CreativeWork",
                                name: "February 2026 Current Affairs",
                                description: "Union Budget, Economic Survey, Monetary Policy, Defense Deals",
                                url: "https://cettest.site/current-affairs/february-2026",
                            },
                            {
                                "@type": "CreativeWork",
                                name: "January 2026 Current Affairs",
                                description: "Republic Day, Startup India Initiatives, Defense Exports, Climate Summit",
                                url: "https://cettest.site/current-affairs/january-2026",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== WEB PAGE SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Monthly Current Affairs 2026 | Bilingual Digest",
                        description: "Complete monthly current affairs resource for competitive examinations. Available in English and Hindi with exam-oriented analysis, static GK, important days, and practice questions.",
                        url: "https://cettest.site/current-affairs",
                        inLanguage: ["en", "hi"],
                        datePublished: "2026-01-01",
                        dateModified: new Date().toISOString().split('T')[0],
                        primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: "https://cettest.site/og-current-affairs.jpg",
                            width: 1200,
                            height: 630,
                        },
                        about: {
                            "@type": "Thing",
                            name: "Current Affairs",
                            description: "Monthly compilation of important national and international events for competitive exam preparation",
                        },
                        audience: {
                            "@type": "Audience",
                            name: "Competitive Exam Aspirants",
                            audienceType: "UPSC, SSC, Banking, Railways, State Government Exam Candidates",
                            geographicArea: "India",
                        },
                        educationalLevel: "Graduate",
                        keywords: "current affairs, monthly digest, competitive exams, UPSC, SSC, Banking, HSSC, UKSSSC",
                    }),
                }}
            />

            {/* ==================== EDUCATIONAL OCCUPATIONAL PROGRAM SCHEMA ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOccupationalProgram",
                        name: "Current Affairs Preparation Program 2026",
                        description: "Comprehensive monthly current affairs preparation program for government job aspirants",
                        educationalProgramMode: "Self-Paced Study",
                        timeToComplete: "P12M",
                        occupationalCategory: "Government Services",
                        provider: {
                            "@type": "Organization",
                            name: "CET TEST",
                            url: "https://cettest.site",
                        },
                        hasCourse: [
                            {
                                "@type": "Course",
                                name: "March 2026 Current Affairs",
                                description: "5 major topics including 16th Finance Commission, QUAD Summit, RBI Digital Rupee, ISRO NISAR, and 5 new Ramsar sites",
                                courseCode: "CA-MAR-2026",
                            },
                            {
                                "@type": "Course",
                                name: "Monthly Current Affairs Series",
                                description: "Complete year-long current affairs coverage with bilingual content and exam-oriented analysis",
                                courseCode: "CA-2026",
                            },
                        ],
                        teaches: [
                            "National Affairs",
                            "International Relations",
                            "Economy & Banking",
                            "Science & Technology",
                            "Environment & Ecology",
                            "Sports & Awards",
                            "Important Days",
                            "Static GK",
                        ],
                        educationalCredentialAwarded: "Current Affairs Mastery Certification",
                    }),
                }}
            />

            {/* ==================== HOW TO SCHEMA - PREPARATION GUIDE ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "How to Master Current Affairs for Competitive Exams",
                        description: "Step-by-step guide to effectively prepare current affairs for government job examinations",
                        totalTime: "P30D",
                        estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "INR",
                            value: "0",
                        },
                        step: [
                            {
                                "@type": "HowToStep",
                                name: "Read Monthly Digests",
                                text: "Read our comprehensive monthly current affairs digests covering all important events with exam-oriented analysis.",
                                image: "https://cettest.site/images/step1.jpg",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Focus on State-Specific News",
                                text: "For state exams like HSSC and UKSSSC, pay special attention to state government schemes, history, culture, and current developments.",
                                image: "https://cettest.site/images/step2.jpg",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Practice MCQs Regularly",
                                text: "Take our topic-wise and full-length current affairs quizzes to test your knowledge and improve speed.",
                                image: "https://cettest.site/images/step3.jpg",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Review Static GK Connections",
                                text: "Connect current events with static GK topics like geography, history, polity, and economy for better retention.",
                                image: "https://cettest.site/images/step4.jpg",
                            },
                            {
                                "@type": "HowToStep",
                                name: "Revise Important Days",
                                text: "Memorize important national and international days with their themes and historical significance.",
                                image: "https://cettest.site/images/step5.jpg",
                            },
                        ],
                        tool: [
                            {
                                "@type": "HowToTool",
                                name: "CET TEST Mobile App",
                            },
                            {
                                "@type": "HowToTool",
                                name: "Monthly PDF Downloads",
                            },
                        ],
                    }),
                }}
            />

            {/* ==================== VIDEO SCHEMA (Optional - Add if you have videos) ==================== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        name: "How to Prepare Current Affairs for Competitive Exams",
                        description: "Expert tips and strategies for mastering current affairs for UPSC, SSC, Banking, HSSC, and UKSSSC exams",
                        thumbnailUrl: "https://cettest.site/video-thumbnail.jpg",
                        uploadDate: "2026-01-01",
                        duration: "PT15M",
                        embedUrl: "https://www.youtube.com/embed/your-video-id",
                        interactionStatistic: {
                            "@type": "InteractionCounter",
                            interactionType: "https://schema.org/WatchAction",
                            userInteractionCount: 10000,
                        },
                    }),
                }}
            />

            {/* ==================== ANALYTICS & VERIFICATION ==================== */}
            {/* Google Analytics - Add your GA4 code */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA_ID"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-YOUR_GA_ID');
                    `,
                }}
            />

            {/* ==================== CONTENT SECURITY POLICY META ==================== */}
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#4f46e5" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* ==================== OPEN GRAPH OPTIMIZATION ==================== */}
            <meta property="og:locale" content="en_IN" />
            <meta property="og:locale:alternate" content="hi_IN" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="CET TEST" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Monthly Current Affairs 2026 - Complete Bilingual Digest for Competitive Exams" />

            {/* ==================== TWITTER CARD OPTIMIZATION ==================== */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@cettest" />
            <meta name="twitter:creator" content="@cettest" />
            <meta name="twitter:image:alt" content="Monthly Current Affairs 2026 - Bilingual Digest" />

            {/* ==================== GEO TAGS ==================== */}
            <meta name="geo.region" content="IN" />
            <meta name="geo.placename" content="India" />
            <meta name="author" content="CET TEST" />
            <meta name="copyright" content="CET TEST" />
            <meta name="language" content="English, Hindi" />
            <meta name="rating" content="General" />
            <meta name="distribution" content="Global" />

            {/* ==================== CUSTOM STYLES FOR PRINT ==================== */}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @media print {
                        .no-print {
                            display: none !important;
                        }
                        body {
                            background: white;
                            color: black;
                        }
                        a {
                            text-decoration: none;
                            color: black;
                        }
                        .rounded-xl, .rounded-2xl {
                            border-radius: 0 !important;
                        }
                        .shadow-lg, .shadow-md, .shadow-sm {
                            box-shadow: none !important;
                        }
                    }
                `,
            }} />

            {children}
        </>
    )
}