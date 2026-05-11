import { Metadata, Viewport } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, BarChart3, Train, Award, Zap, HelpCircle, GraduationCap, BookOpen, Users, Target, TrendingUp, Shield, Smartphone, Download, Calendar, Brain, Lightbulb } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

// ============================================
// 1. ENHANCED METADATA (SEO + GEO OPTIMIZED)
// ============================================
export const metadata: Metadata = {
  // Primary Title with Power Words & Numbers
  title: "RRB NTPC, Group D, ALP & JE Mock Test 2026 | Free Railway Exam Prep | CBT Stage 1 & 2 Practice Sets",

  // Description optimized for Google SGE / Bing Chat (GEO)
  description: "RRB NTPC, Group D, ALP & JE 2026: Free mock tests with latest exam pattern. 50,000+ questions, previous year solved papers, bilingual (Hindi/English), CBT Stage 1 & 2 practice. Railway Recruitment Board complete preparation for Station Master, Goods Guard, ALP, Technician, JE. Start free now!",

  // Keywords extended for long-tail & question-based queries (AEO)
  keywords: [
    // Primary
    "RRB NTPC mock test 2026", "Railway Group D free online test", "RRB ALP Technician practice set",
    "RRB JE exam preparation 2026", "Railway Recruitment Board solved papers", "RRB NTPC CBT 1 and 2 syllabus",
    "Indian Railways job preparation", "Free Railway test series 2026",

    // AEO: Question-based long-tail keywords
    "how to crack RRB NTPC 2026", "RRB Group D cut off marks", "RRB ALP salary 2026",
    "RRB JE previous year paper", "RRB NTPC exam date 2026", "Railway group D physical test",
    "RRB ALP CBT 2 syllabus", "RRB JE eligibility criteria", "RRB NTPC negative marking",
    "RRB Group D qualification", "RRB ALP technician difference", "RRB NTPC selection process",
    "best website for RRB mock test", "RRB online test series free", "Railway exam preparation at home",
    "RRB NTPC vacancy 2026", "RRB Group D salary", "RRB ALP stages of exam",

    // GEO: Conversational & Generative AI phrases
    "complete RRB exam guide", "step by step railway preparation", "everything about Indian Railways recruitment",
    "RRB one liner revision", "railway exam bilingual study material", "RRB previous year analysis",
    "RRB CBT computer based test practice", "railway recruitment 2026 calendar",
    "best book for RRB NTPC", "RRB online coaching free", "RRB mock test for ALP"
  ],

  authors: [{ name: "CET TEST", url: "https://cettest.site" }],
  creator: "CET TEST",
  publisher: "CET TEST",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Advanced Robots directives
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

  // Open Graph optimized
  openGraph: {
    title: "🚂 RRB NTPC, Group D, ALP & JE Mock Test 2026 | Free Railway Exam Prep | CBT Stage 1 & 2",
    description: "✅ 4 Exams Covered (NTPC, Group D, ALP, JE) | ✅ 50,000+ Questions | ✅ Previous Year Solved Papers | ✅ Bilingual (Hindi/English) | ✅ CBT Interface Simulation | ✅ Free Unlimited Attempts",
    url: "https://cettest.site/exams/railway-rrb-ntpc",
    siteName: "CET TEST | Railway Exam Prep",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-rrb-railway-2026.jpg",
        width: 1200,
        height: 630,
        alt: "RRB NTPC, Group D, ALP & JE Mock Test 2026 - Free Railway Exam Preparation - CBT Stage 1 & 2",
        type: "image/jpeg",
      },
    ],
    emails: ["anujjaglan9423@gmail.com"],
    phoneNumbers: ["+91 7291849546"],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "RRB NTPC, Group D, ALP & JE Mock Test 2026 | Free Railway Exam Prep",
    description: "Free mock tests for all RRB exams: NTPC (UG/Graduate), Group D, ALP & Technician, JE. 50,000+ questions, previous year papers, bilingual. Start free!",
    images: ["/twitter-rrb-railway.jpg"],
    creator: "@cet__test",
    site: "@cet__test",
  },

  // Canonical
  alternates: {
    canonical: "https://cettest.site/exams/railway-rrb-ntpc",
    languages: {
      "en-IN": "https://cettest.site/exams/railway-rrb-ntpc",
         },
  },

  category: "education",
  classification: "Railway Recruitment Exam Preparation | RRB NTPC Group D ALP JE 2026",

  // App Links
  appLinks: {
    web: {
      url: "https://cettest.site/exams/railway-rrb-ntpc",
      should_fallback: true,
    },
  },

  // Archives
  archives: ["https://cettest.site/rrb-previous-papers"],
  assets: ["https://cettest.site/assets/rrb"],
}

// Viewport configuration
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

export default function RRBNTPCPage() {
  const baseUrl = "https://cettest.site"
  const currentUrl = "https://cettest.site/exams/railway-rrb-ntpc"
  const socialMedia = "cet__test"
  const email = "anujjaglan9423@gmail.com"
  const phone = "+917291849546"
  const currentYear = new Date().getFullYear()

  const railwayExams = [
    {
      name: "RRB NTPC (Non-Technical)",
      slug: "rrb-ntpc",
      posts: "Station Master, Goods Guard, Commercial Apprentice, Traffic Assistant, Senior Clerk, Typist, Time Keeper.",
      eligibility: "Undergraduate (12th) for UG posts OR Graduate degree from recognized university for Graduate posts.",
      pattern: "CBT Stage 1 (Screening) → CBT Stage 2 (Merit) → Typing/Skill Test → Document Verification.",
      subjects: "General Awareness (40-50 Qs), Mathematics (30-35 Qs), General Intelligence & Reasoning (30-35 Qs). Total 100-120 Qs, 90 minutes.",
      totalQuestions: 100,
      duration: "90 minutes",
      negativeMarking: "0.25",
      ageLimitUG: "18-30 years",
      ageLimitGraduate: "18-33 years",
    },
    {
      name: "RRB Group D (Level 1)",
      slug: "rrb-group-d",
      posts: "Track Maintainer Grade IV, Helper/Assistant in Mechanical, Electrical, S&T, Engineering departments.",
      eligibility: "10th Pass (Matriculation) or ITI from institutions recognized by NCVT/SCVT.",
      pattern: "Computer Based Test (Single Stage) → Physical Efficiency Test (PET) → Document Verification.",
      subjects: "General Science (25 Qs), Mathematics (25 Qs), General Intelligence & Reasoning (30 Qs), General Awareness & Current Affairs (20 Qs). Total 100 Qs, 90 minutes.",
      totalQuestions: 100,
      duration: "90 minutes",
      negativeMarking: "0.25",
      physicalRequirements: "Male: 4.8 km/25 min, Female: 2.4 km/18 min",
    },
    {
      name: "RRB ALP & Technician",
      slug: "rrb-alp",
      posts: "Assistant Loco Pilot (ALP) and Various Technician Grade III roles.",
      eligibility: "Matriculation + ITI / Course Completed Act Apprentices / Diploma / B.E / B.Tech.",
      pattern: "First Stage CBT → Second Stage CBT (Part A & B) → CBAT (Computer Based Aptitude Test for ALP).",
      subjects: "Stage 1: Maths, Reasoning, General Science, General Awareness. Stage 2 (Part A): Maths, Reasoning, Basic Science & Engineering. Stage 2 (Part B): Trade Test.",
      totalQuestions: 75,
      duration: "60 minutes",
      negativeMarking: "0.25",
    },
    {
      name: "RRB JE (Junior Engineer)",
      slug: "rrb-je",
      posts: "Junior Engineer (JE), JE (IT), Depot Material Superintendent (DMS), Chemical & Metallurgical Assistant.",
      eligibility: "Diploma or Degree in Civil/Mechanical/Electrical/Electronics/Computer Science Engineering.",
      pattern: "CBT Stage 1 (Non-Technical) → CBT Stage 2 (Technical Abilities & General Science) → Document Verification.",
      subjects: "CBT 1: General Awareness, Maths, Reasoning. CBT 2: Technical Subject, Physics, Chemistry, Basics of Computer & Environment.",
      totalQuestions: 150,
      duration: "120 minutes",
      negativeMarking: "0.33",
    }
  ]

  return (
    <>
      {/* Structured Data Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "@id": `${currentUrl}#program`,
            name: "RRB NTPC, Group D, ALP & JE Complete Preparation Program 2026",
            description: "Complete free mock test platform for all Railway Recruitment Board (RRB) examinations including NTPC (UG & Graduate), Group D, ALP & Technician, and JE. Features: 50,000+ questions, previous year solved papers, bilingual (Hindi/English), CBT Stage 1 & 2 simulation, unlimited attempts.",
            educationalProgramMode: "Exam Preparation",
            timeToComplete: "P3M",
            occupationalCategory: "Railway Services - Indian Railways",
            occupationalCredentialAwarded: "RRB NTPC/Group D/ALP/JE Position",
            provider: {
              "@type": "Organization",
              name: "Railway Recruitment Board (RRB)",
              url: "https://rrbcdg.gov.in",
            },
            hasCourse: railwayExams.map((exam, idx) => ({
              "@type": "Course",
              name: exam.name,
              description: `${exam.posts} Selection based on ${exam.pattern} Syllabus: ${exam.subjects}`,
            })),
          }),
        }}
      />

      {/* FAQ Schema with 16+ Questions */}
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
                name: "What is the age limit for RRB NTPC 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For RRB NTPC Undergraduate posts (like Clerk, Typist), age limit is 18-30 years. For Graduate posts (like Station Master, Goods Guard), age limit is 18-33 years. Age relaxation: SC/ST (5 years), OBC (3 years), PwD (10 years), Ex-servicemen (as per rules).",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between RRB NTPC UG and Graduate posts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB NTPC UG posts (12th pass eligible) include Junior Clerk, Typist, Time Keeper. Graduate posts (Bachelor's degree required) include Station Master, Goods Guard, Commercial Apprentice, Traffic Assistant. Graduate posts have higher salary and more responsibilities.",
                },
              },
              {
                "@type": "Question",
                name: "How many stages are there in RRB ALP exam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB ALP exam has 4 stages: (1) First Stage CBT - Screening (75 questions, 60 minutes), (2) Second Stage CBT Part A (100 questions) and Part B (75 questions - Trade Test), (3) CBAT (Computer Based Aptitude Test) for ALP candidates, (4) Document Verification. Technician candidates don't need CBAT.",
                },
              },
              {
                "@type": "Question",
                name: "Is there negative marking in RRB exams?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, RRB exams have negative marking. For NTPC, Group D, ALP: 0.25 marks deducted per wrong answer. For RRB JE: 0.33 marks deducted per wrong answer. Unanswered questions have no penalty. So avoid guesswork unless you are confident.",
                },
              },
              {
                "@type": "Question",
                name: "What is the salary of RRB NTPC Station Master?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB NTPC Station Master salary ranges from ₹35,000 to ₹45,000 per month in hand based on Level 6 pay scale (₹35,400 - ₹1,12,400). Additional allowances include Dearness Allowance (DA), House Rent Allowance (HRA), Transport Allowance, and Medical benefits.",
                },
              },
              {
                "@type": "Question",
                name: "What is the physical requirement for RRB Group D?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB Group D Physical Efficiency Test (PET): Male candidates must run 4.8 km in 25 minutes. Female candidates must run 2.4 km in 18 minutes. There is no height or chest measurement for Group D (unlike other exams).",
                },
              },
              {
                "@type": "Question",
                name: "Can I take RRB exams in Hindi language?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, RRB CBT exams are conducted in 15 languages, including Hindi, English, Assamese, Bengali, Gujarati, Kannada, Konkani, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu. Candidates can choose their preferred language during application.",
                },
              },
              {
                "@type": "Question",
                name: "How many attempts are allowed in RRB NTPC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no restriction on the number of attempts for RRB NTPC as long as you are within the age limit (18-33 years). However, you must meet the educational qualification for the post you are applying for.",
                },
              },
              {
                "@type": "Question",
                name: "What is the syllabus for RRB JE CBT 2?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB JE CBT 2 syllabus includes: (1) Technical Subjects based on your engineering discipline (Civil/Mechanical/Electrical/Electronics/Computer Science), (2) General Science (Physics, Chemistry, Biology up to 10th standard), (3) Basics of Computers and Applications, (4) Environment and Pollution Control.",
                },
              },
              {
                "@type": "Question",
                name: "How to prepare for RRB exams at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To prepare for RRB exams at home: (1) Download complete syllabus from this page, (2) Take free mock tests daily, (3) Practice previous year solved papers, (4) Focus on General Awareness & Current Affairs (last 6 months), (5) Master Maths basics (Percentage, Time & Work, Profit-Loss), (6) Practice Reasoning (Coding-Decoding, Blood Relations), (7) For ALP/JE: Focus on technical subjects.",
                },
              },
              {
                "@type": "Question",
                name: "Which RRB exam has highest salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB JE (Junior Engineer) and RRB NTPC Graduate posts (Station Master, Goods Guard) have the highest salary - approximately ₹35,000-45,000 per month. RRB ALP (Assistant Loco Pilot) salary is ₹30,000-40,000 per month. RRB Group D salary is ₹25,000-35,000 per month.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between RRB ALP and Technician?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB ALP (Assistant Loco Pilot) operates trains - requires CBAT (Psychometric Test) after CBT. RRB Technician maintains trains - no CBAT required. ALP has higher salary and promotion potential. Both share same CBT Stage 1 syllabus, but Stage 2 differs slightly.",
                },
              },
              {
                "@type": "Question",
                name: "When is the RRB NTPC 2026 exam date?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB NTPC 2026 exam is expected in June-December 2026. Official notification will be released by RRB (Railway Recruitment Board) on rrbalp.gov.in. Start your preparation now with our free mock tests to stay ahead.",
                },
              },
              {
                "@type": "Question",
                name: "How can I get free RRB mock tests?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can access 100% free RRB mock tests on this page. We offer: (1) Unlimited attempts for NTPC, Group D, ALP, JE, (2) Previous year solved papers, (3) Bilingual (Hindi/English) interface, (4) Real CBT simulation, (5) Detailed performance analysis. Click 'Start Free Mock Test' above to begin.",
                },
              },
              {
                "@type": "Question",
                name: "How can I contact CET TEST for RRB study material?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact CET TEST via email at anujjaglan9423@gmail.com or call/whatsapp at 7291849546. Follow us on Instagram and Twitter @cet__test for daily RRB current affairs updates, free mock tests, and preparation tips.",
                },
              },
            ],
          }),
        }}
      />

      {/* Organization Schema */}
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
            },
            sameAs: [
              `https://www.instagram.com/${socialMedia}/`,
              `https://twitter.com/${socialMedia}`,
            ],
            description: "India's most trusted platform for RRB NTPC, Group D, ALP, JE, and other government exam preparation with free study material, mock tests, and PDFs.",
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${currentUrl}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
              { "@type": "ListItem", position: 2, name: "Exams", item: `${baseUrl}/exams` },
              { "@type": "ListItem", position: 3, name: "Railway RRB NTPC", item: currentUrl },
            ],
          }),
        }}
      />

      {/* Main Page Content */}
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
        <FooterLinkNavbar />

        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Calendar className="w-3 h-3" /> RRB 2026 RECRUITMENT CALENDAR
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Smartphone className="w-3 h-3" /> BILINGUAL (हिंदी & ENGLISH)
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Indian Railway <span className="text-primary">RRB Mock Tests</span> 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unlimited free mock tests for NTPC, Group D, ALP, and JE. Practice with the latest CBT interface, previous year solved papers, and bilingual support.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/signup">
                <Button size="lg" className="gap-2 cursor-pointer">
                  <CheckCircle2 className="w-5 h-5" />
                  Start Free Mock Test
                </Button>
              </Link>
              <Link href="#exam-sections">
                <Button variant="outline" size="lg" className="cursor-pointer">
                  Explore All Exams
                </Button>
              </Link>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border">
                <Users className="w-4 h-4 text-primary" />
                <span>50,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border">
                <FileText className="w-4 h-4 text-primary" />
                <span>10,000+ Solved Questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30 border-y">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
                <div className="mb-3 flex justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold text-blue-600 mb-1">50k+</h4>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">Active Aspirants</p>
              </div>
              <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
                <div className="mb-3 flex justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-green-600 mb-1">100%</h4>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">Latest Pattern</p>
              </div>
              <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
                <div className="mb-3 flex justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-purple-600 mb-1">Bilingual</h4>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">हिंदी & English</p>
              </div>
              <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition text-center">
                <div className="mb-3 flex justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-2xl font-bold text-orange-600 mb-1">Solved</h4>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">Previous Papers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exam-Specific Detailed Sections */}
        <section id="exam-sections" className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete RRB Exam Coverage</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Choose your Railway exam and get complete details with free mock test practice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {railwayExams.map((exam, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col p-8 rounded-3xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-blue-600 transition">
                      {exam.name}
                    </h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Target className="w-3 h-3" /> Target Posts
                      </h4>
                      <p className="text-sm text-gray-700">{exam.posts}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[11px] font-semibold text-green-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                          <GraduationCap className="w-3 h-3" /> Eligibility / Age
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {exam.eligibility}
                          {'ageLimitUG' in exam && <span className="block text-xs text-muted-foreground mt-1">Age: UG {exam.ageLimitUG} | Graduate {exam.ageLimitGraduate}</span>}
                          {'physicalRequirements' in exam && <span className="block text-xs text-muted-foreground mt-1">PET: {exam.physicalRequirements}</span>}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-semibold text-purple-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                          <FileText className="w-3 h-3" /> Exam Pattern
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {exam.pattern}
                          <span className="block text-xs text-muted-foreground mt-1">
                            Total: {exam.totalQuestions} Qs | Duration: {exam.duration} | Negative Marking: {exam.negativeMarking}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-r from-muted/40 to-muted/20 border border-dashed">
                      <h4 className="text-[11px] font-semibold uppercase tracking-widest mb-2 text-muted-foreground flex items-center gap-2">
                        <Brain className="w-3 h-3" /> Syllabus Breakdown
                      </h4>
                      <p className="text-xs text-gray-600 italic leading-relaxed">
                        {exam.subjects}
                      </p>
                    </div>
                  </div>

                  <Link href="/signup" className="mt-8">
                    <Button className="w-full h-12 font-semibold group-hover:scale-[1.02] transition" variant={index === 0 ? "default" : "outline"}>
                      Start {exam.name.split(" ")[1]} Free Mock →
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Choose CET TEST for RRB Preparation?</h2>
              <p className="text-muted-foreground mt-2">Features that make us the #1 choice for railway aspirants</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-background rounded-2xl border">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Latest Pattern</h3>
                <p className="text-sm text-muted-foreground">Questions designed as per RRB's latest CBT exam pattern and difficulty level</p>
              </div>
              <div className="text-center p-6 bg-background rounded-2xl border">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Unlimited Attempts</h3>
                <p className="text-sm text-muted-foreground">Take mock tests unlimited times until you achieve 100% mastery</p>
              </div>
              <div className="text-center p-6 bg-background rounded-2xl border">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Detailed Analysis</h3>
                <p className="text-sm text-muted-foreground">Get section-wise performance analysis and improvement suggestions</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-primary/20 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-2">Everything you need to know about RRB exams and our mock tests</p>
            </div>

            <div className="grid gap-4">
              <div className="p-6 bg-background rounded-2xl border">
                <h4 className="font-bold text-lg mb-2">What is the age limit for RRB NTPC 2026?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">For Undergraduate posts (like Clerk, Typist), age limit is 18-30 years. For Graduate posts (like Station Master, Goods Guard), age limit is 18-33 years. Age relaxations: SC/ST (5 years), OBC (3 years), PwD (10 years).</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border">
                <h4 className="font-bold text-lg mb-2">How many stages are there in RRB ALP exam?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">RRB ALP has 4 stages: First Stage CBT (Screening, 75 Qs, 60 min), Second Stage CBT Part A (100 Qs) & Part B (75 Qs - Trade Test), CBAT (Computer Based Aptitude Test for ALP), Document Verification.</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border">
                <h4 className="font-bold text-lg mb-2">How many languages are RRB exams conducted in?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">RRB CBT exams are conducted in 15 languages including Hindi, English, Assamese, Bengali, Gujarati, Kannada, Konkani, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu.</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border">
                <h4 className="font-bold text-lg mb-2">Can I attempt the mock tests multiple times?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Yes! Our platform allows unlimited free attempts for mock tests so you can improve your speed and accuracy by practicing until you reach 100% mastery.</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border">
                <h4 className="font-bold text-lg mb-2">Are the mock tests bilingual (Hindi/English)?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Yes, all our RRB mock tests are available in both Hindi and English. You can switch between languages anytime during the test, just like the actual RRB CBT exam.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Crack Your Railway Exam?</h2>
            <p className="text-lg mb-8 opacity-90">Join 50,000+ successful candidates and start your free preparation today</p>
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Start Practicing for Free
              </Button>
            </Link>
          </div>
        </section>

        <FooterLinkFooter />
      </main>
    </>
  )
}