import { Metadata, Viewport } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy, Train, Shield, TrendingUp, Brain, Clock, Target, Award, Calendar, Smartphone, FileText, Zap, GraduationCap, BarChart3, HelpCircle } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

// ============================================
// 1. ENHANCED METADATA (SEO + GEO OPTIMIZED)
// ============================================
export const metadata: Metadata = {
  // Primary Title with Power Words & Numbers
  title: "Railway Exams Mock Tests 2026 | RRB NTPC, Group D, ALP, Technician Free Online Practice | CBT Stage 1 & 2",

  // Description optimized for Google SGE / Bing Chat (GEO)
  description: "Railway Exams 2026: Free mock tests for RRB NTPC, Group D, ALP & Technician. 50,000+ questions, previous year solved papers, bilingual (Hindi/English), CBT Stage 1 & 2 simulation. Complete preparation for Station Master, Goods Guard, ALP, JE, and all Railway Recruitment Board exams. Start free now!",

  // Keywords extended for long-tail & question-based queries (AEO)
  keywords: [
    // Primary
    "RRB NTPC mock test 2026", "Railway Group D exam preparation", "RRB exam free online test",
    "Railway recruitment board practice", "RRB NTPC CBT Stage 1 2 test", "Indian Railways mock test",
    "RRB ALP exam preparation", "Railway exam previous year papers", "RRB test series 2026",
    "free railway exam practice India",

    // AEO: Question-based long-tail keywords
    "how to crack railway exam 2026", "RRB NTPC cut off marks", "railway group d salary",
    "RRB ALP technician difference", "railway exam date 2026", "RRB NTPC selection process",
    "railway group d physical test", "RRB ALP stages of exam", "RRB NTPC eligibility",
    "how many attempts in railway exam", "railway exam negative marking", "best railway mock test website",
    "railway exam preparation at home", "RRB NTPC vacancy 2026", "railway group d qualification",

    // GEO: Conversational & Generative AI phrases
    "complete railway exam guide", "step by step RRB preparation", "everything about Indian Railways recruitment",
    "railway exam bilingual study material", "RRB previous year analysis", "railway CBT computer based test",
    "railway recruitment 2026 calendar", "best book for railway exam", "RRB online coaching free",
    "railway exam one liner revision"
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

  // Open Graph optimized for higher CTR
  openGraph: {
    title: "🚂 Railway Exams Mock Tests 2026 | RRB NTPC, Group D, ALP, Technician | Free Online Practice",
    description: "✅ 4 Exams Covered (NTPC, Group D, ALP, Technician) | ✅ 50,000+ Questions | ✅ Previous Year Solved Papers | ✅ Bilingual (हिंदी & English) | ✅ CBT Stage 1 & 2 Simulation | ✅ 100% Free | ✅ Unlimited Attempts",
    url: "https://cettest.site/exams/railway",
    siteName: "CET TEST | Railway Exam Prep",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-railway-exams-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Railway Exams Mock Tests 2026 - RRB NTPC, Group D, ALP & Technician - Free Online Practice - CBT Stage 1 & 2",
        type: "image/jpeg",
      },
    ],
    emails: ["anujjaglan9423@gmail.com"],
    phoneNumbers: ["+91 7291849546"],
  },

  // Twitter Card optimized for engagement
  twitter: {
    card: "summary_large_image",
    title: "Railway Exams Mock Tests 2026 | RRB NTPC, Group D, ALP, Technician | Free Practice",
    description: "Free mock tests for all Railway exams: NTPC (UG/Graduate), Group D, ALP & Technician. 50,000+ questions, previous year papers, bilingual, CBT simulation. Start free!",
    images: ["/twitter-railway-exams.jpg"],
    creator: "@cet__test",
    site: "@cet__test",
  },

  // Canonical & Alternate URLs
  alternates: {
    canonical: "https://cettest.site/exams/railway",
    languages: {
      "en-IN": "https://cettest.site/exams/railway",
    },
  },

  category: "education",
  classification: "Railway Recruitment Exam Preparation | RRB NTPC Group D ALP Technician 2026",

  // App Links for mobile
  appLinks: {
    web: {
      url: "https://cettest.site/exams/railway",
      should_fallback: true,
    },
  },

  // Archives
  archives: ["https://cettest.site/railway-previous-papers"],
  assets: ["https://cettest.site/assets/railway"],
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

export default function RailwayExamsPage() {
  const baseUrl = "https://cettest.site"
  const currentUrl = "https://cettest.site/exams/railway"
  const socialMedia = "cet__test"
  const email = "anujjaglan9423@gmail.com"
  const phone = "+917291849546"
  const currentYear = new Date().getFullYear()

  const exams = [
    {
      name: "RRB NTPC",
      slug: "rrb-ntpc",
      description: "Non-Technical Popular Categories - Station Master, Goods Guard, Commercial Apprentice, Clerk, Typist",
      link: "/mock-test",
      features: ["CBT Stage 1 & 2 Tests", "100+ Mock Tests", "Previous Year Papers", "UG & Graduate Posts"],
      icon: <Award className="w-6 h-6 text-blue-600" />,
      color: "blue",
      totalMocks: 150,
      totalQuestions: 12000,
    },
    {
      name: "RRB Group D",
      slug: "rrb-group-d",
      description: "Group D and unskilled worker positions - Track Maintainer, Helper, Assistant in various departments",
      link: "/mock-test",
      features: ["Timed Practice Tests", "Detailed Solutions", "Performance Analytics", "PET Preparation"],
      icon: <Shield className="w-6 h-6 text-green-600" />,
      color: "green",
      totalMocks: 100,
      totalQuestions: 8000,
    },
    {
      name: "RRB ALP",
      slug: "rrb-alp",
      description: "Assistant Loco Pilot recruitment - Driving trains, high salary, fast promotion",
      link: "/mock-test",
      features: ["Full Mock Tests", "Real Exam Pattern", "Technical Questions", "CBAT Preparation"],
      icon: <Train className="w-6 h-6 text-purple-600" />,
      color: "purple",
      totalMocks: 120,
      totalQuestions: 10000,
    },
    {
      name: "RRB Technician",
      slug: "rrb-technician",
      description: "Railway technician and skilled worker positions in Mechanical, Electrical, Electronics",
      link: "/mock-test",
      features: ["Comprehensive Coverage", "Expert Explanations", "Instant Results", "Trade Test Prep"],
      icon: <Brain className="w-6 h-6 text-orange-600" />,
      color: "orange",
      totalMocks: 80,
      totalQuestions: 6000,
    },
  ]

  const examDetails = {
    "RRB NTPC": {
      ageLimit: "UG: 18-30 years | Graduate: 18-33 years",
      qualification: "12th Pass (UG) or Bachelor's Degree (Graduate)",
      negativeMarking: "0.25 per wrong answer",
      totalQuestions: "100-120",
      duration: "90 minutes",
    },
    "RRB Group D": {
      ageLimit: "18-33 years",
      qualification: "10th Pass or ITI",
      negativeMarking: "0.25 per wrong answer",
      totalQuestions: "100",
      duration: "90 minutes",
      physicalStandard: "Male: 4.8 km/25 min, Female: 2.4 km/18 min",
    },
    "RRB ALP": {
      ageLimit: "18-30 years",
      qualification: "10th + ITI / Diploma / B.E / B.Tech",
      negativeMarking: "0.25 per wrong answer",
      totalQuestions: "75 (Stage 1) + 175 (Stage 2)",
      duration: "60 min (Stage 1) + 150 min (Stage 2)",
    },
    "RRB Technician": {
      ageLimit: "18-30 years",
      qualification: "10th + ITI / Diploma / B.E / B.Tech",
      negativeMarking: "0.25 per wrong answer",
      totalQuestions: "75 (Stage 1) + 100 (Stage 2)",
      duration: "60 min (Stage 1) + 90 min (Stage 2)",
    },
  }

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
            name: "Railway RRB Exams Complete Preparation Program 2026",
            description: "Complete free mock test platform for all Railway Recruitment Board (RRB) examinations including NTPC (UG & Graduate), Group D, ALP, and Technician. Features: 50,000+ questions, previous year solved papers, bilingual (Hindi/English), CBT Stage 1 & 2 simulation, unlimited attempts, detailed analytics.",
            educationalProgramMode: "Exam Preparation",
            timeToComplete: "P3M",
            occupationalCategory: "Railway Services - Indian Railways",
            occupationalCredentialAwarded: "RRB NTPC/Group D/ALP/Technician Position",
            provider: {
              "@type": "Organization",
              name: "Railway Recruitment Board (RRB)",
              url: "https://rrbcdg.gov.in",
            },
            hasCourse: exams.map((exam) => ({
              "@type": "Course",
              name: exam.name,
              description: `${exam.description} | ${exam.features.join(" | ")} | ${exam.totalMocks}+ Mock Tests | ${exam.totalQuestions}+ Questions`,
            })),
          }),
        }}
      />

      {/* FAQ Schema with 15+ Questions */}
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
                  text: "For RRB NTPC Undergraduate posts (Clerk, Typist): 18-30 years. For Graduate posts (Station Master, Goods Guard): 18-33 years. Age relaxation: SC/ST (5 years), OBC (3 years), PwD (10 years).",
                },
              },
              {
                "@type": "Question",
                name: "What is the salary of RRB Group D?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB Group D salary ranges from ₹25,000 to ₹35,000 per month in hand based on Level 1 pay scale (₹18,000 - ₹56,900). Additional allowances: DA, HRA, Transport Allowance, Medical benefits.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between RRB ALP and Technician?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB ALP (Assistant Loco Pilot) operates trains - requires CBAT (Psychometric Test) after CBT. RRB Technician maintains trains - no CBAT required. ALP has higher salary (₹30,000-40,000) than Technician (₹28,000-38,000).",
                },
              },
              {
                "@type": "Question",
                name: "Is there negative marking in Railway exams?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, RRB exams have negative marking. For NTPC, Group D, ALP, Technician: 0.25 marks deducted per wrong answer. For RRB JE: 0.33 marks deducted. Unanswered questions have no penalty.",
                },
              },
              {
                "@type": "Question",
                name: "What is the physical requirement for RRB Group D?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB Group D Physical Efficiency Test (PET): Male candidates must run 4.8 km in 25 minutes. Female candidates must run 2.4 km in 18 minutes. No height or chest measurement required.",
                },
              },
              {
                "@type": "Question",
                name: "Can I take Railway exams in Hindi language?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, RRB CBT exams are conducted in 15 languages including Hindi, English, Assamese, Bengali, Gujarati, Kannada, Konkani, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu.",
                },
              },
              {
                "@type": "Question",
                name: "How many stages are there in RRB ALP exam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB ALP has 4 stages: First Stage CBT (Screening, 75 Qs, 60 min), Second Stage CBT Part A (100 Qs) & Part B (75 Qs - Trade Test), CBAT (Computer Based Aptitude Test), Document Verification.",
                },
              },
              {
                "@type": "Question",
                name: "What is the qualification for RRB NTPC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB NTPC Undergraduate posts: 12th pass from recognized board. Graduate posts: Bachelor's degree from recognized university. Age: UG 18-30 years, Graduate 18-33 years.",
                },
              },
              {
                "@type": "Question",
                name: "How many mock tests are available for Railway exams?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our platform offers 400+ mock tests covering all RRB exams: RRB NTPC (150+ tests), Group D (100+ tests), ALP (120+ tests), Technician (80+ tests). Total 50,000+ questions with detailed solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Are the mock tests free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, all Railway mock tests on CET TEST are completely free. Unlimited attempts, no hidden charges, no credit card required. Start practicing now by clicking 'Start Free Test Now'.",
                },
              },
              {
                "@type": "Question",
                name: "What is the selection process for RRB NTPC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB NTPC selection process: CBT Stage 1 (Screening) → CBT Stage 2 (Merit) → Typing/Skill Test (for applicable posts) → Document Verification → Medical Examination.",
                },
              },
              {
                "@type": "Question",
                name: "When is the RRB exam date 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB NTPC 2026 exam expected June-December 2026. RRB Group D, ALP, Technician notifications expected in early 2026. Check official RRB website for exact dates.",
                },
              },
              {
                "@type": "Question",
                name: "How can I contact CET TEST for Railway exam preparation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contact CET TEST via email at anujjaglan9423@gmail.com or call/whatsapp at 7291849546. Follow @cet__test on Instagram & Twitter for daily updates, free mock tests, and preparation tips.",
                },
              },
              {
                "@type": "Question",
                name: "Which Railway exam has the highest salary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RRB NTPC Graduate posts (Station Master, Goods Guard) have highest salary: ₹35,000-45,000/month. RRB ALP: ₹30,000-40,000/month. RRB Technician: ₹28,000-38,000/month. RRB Group D: ₹25,000-35,000/month.",
                },
              },
              {
                "@type": "Question",
                name: "How to prepare for Railway exams at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To prepare for Railway exams at home: (1) Take free mock tests daily, (2) Practice previous year solved papers, (3) Focus on General Awareness & Current Affairs (last 6 months), (4) Master Maths basics (Percentage, Time & Work, Profit-Loss), (5) Practice Reasoning daily, (6) For ALP/Technician: Focus on technical subjects.",
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
            description: "India's most trusted platform for RRB Railway exams, NTPC, Group D, ALP, Technician, and other government exam preparation with free study material, mock tests, and PDFs.",
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
              { "@type": "ListItem", position: 3, name: "Railway Exams", item: currentUrl },
            ],
          }),
        }}
      />

      {/* ItemList Schema for Exams */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${currentUrl}#exams-list`,
            name: "Railway RRB Exams 2026 Complete List",
            description: "List of all Railway Recruitment Board examinations with mock tests available on CET TEST",
            numberOfItems: exams.length,
            itemListElement: exams.map((exam, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: exam.name,
              description: exam.description,
              url: `https://cettest.site${exam.link}`,
            })),
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
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Trophy className="w-3 h-3" /> 100% FREE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Railway Exams <span className="text-primary">Mock Tests</span> 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master all Railway exams with unlimited free mock tests for RRB NTPC, Group D, ALP & Technician. Previous year papers, CBT simulation, and detailed analytics.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/signup">
                <Button size="lg" className="gap-2 cursor-pointer">
                  <CheckCircle2 className="w-5 h-5" />
                  Start Free Test Now
                </Button>
              </Link>
              <Link href="/exams/railway-rrb-ntpc">
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
                <span>50,000+ Questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>400+ Mock Tests</span>
              </div>
            </div>
          </div>
        </section>

        {/* Exams Grid */}
        <section id="exam-categories" className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Railway Exam Categories</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Choose your exam and start practicing with our comprehensive mock test series
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exams.map((exam, idx) => (
                <div key={idx} className="group bg-background rounded-xl p-6 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-${exam.color}-50 rounded-xl group-hover:bg-${exam.color}-100 transition`}>
                      {exam.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-1">{exam.name}</h3>
                      <p className="text-sm text-muted-foreground">{exam.description}</p>
                    </div>
                  </div>

                  {/* Exam Details */}
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span>{examDetails[exam.name as keyof typeof examDetails]?.duration || "N/A"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-3 h-3 text-muted-foreground" />
                        <span>{examDetails[exam.name as keyof typeof examDetails]?.totalQuestions} Questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-3 h-3 text-muted-foreground" />
                        <span className="truncate">{examDetails[exam.name as keyof typeof examDetails]?.qualification.split("|")[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-muted-foreground" />
                        <span>{examDetails[exam.name as keyof typeof examDetails]?.negativeMarking}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {exam.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 text-${exam.color}-600`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs text-muted-foreground">
                      {exam.totalMocks}+ Mock Tests | {exam.totalQuestions}+ Qs
                    </div>
                    <Link href={exam.link}>
                      <Button className={`cursor-pointer bg-${exam.color}-600 hover:bg-${exam.color}-700`}>
                        {exam.link === "#" ? "Coming Soon" : "Start Practicing →"}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CET TEST for Railway Exams?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Features that make us the #1 choice for railway aspirants across India
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-xl border hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">95% Success Rate</h3>
                <p className="text-sm text-muted-foreground">Join thousands of successful candidates who cleared Railway exams</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl border hover:shadow-lg transition">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">50,000+ Questions</h3>
                <p className="text-sm text-muted-foreground">Comprehensive question bank covering all RRB exam patterns</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl border hover:shadow-lg transition">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">Get help when you need it from our experienced team</p>
              </div>
              <div className="text-center p-6 bg-background rounded-xl border hover:shadow-lg transition">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Free</h3>
                <p className="text-sm text-muted-foreground">No hidden charges ever. Unlimited free mock tests</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Complete RRB Exam Preparation</h2>
              <p className="text-muted-foreground mt-2">Everything you need to crack your Railway exam</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-muted/20 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Real CBT Interface</h3>
                <p className="text-sm text-muted-foreground">Practice on an interface exactly like the actual RRB computer-based test</p>
              </div>
              <div className="text-center p-6 bg-muted/20 rounded-2xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Timed Practice</h3>
                <p className="text-sm text-muted-foreground">Complete exams in real-time conditions with countdown timer</p>
              </div>
              <div className="text-center p-6 bg-muted/20 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Performance Analytics</h3>
                <p className="text-sm text-muted-foreground">Get detailed section-wise analysis and improvement suggestions</p>
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
              <p className="text-muted-foreground mt-2">Everything you need to know about Railway exams and our mock tests</p>
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
                <p className="text-sm text-muted-foreground leading-relaxed">Yes, all our Railway mock tests are available in both Hindi and English. You can switch between languages anytime during the test, just like the actual RRB CBT exam.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-xl p-12 text-center">
            <Train className="w-12 h-12 mx-auto mb-4 opacity-90" />
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