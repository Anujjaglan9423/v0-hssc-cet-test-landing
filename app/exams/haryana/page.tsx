import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, BookOpen, Users, Trophy, Target, Zap, HelpCircle, ChevronDown, Phone, Mail, Instagram, Clock, MapPin, Award, BarChart3, Brain, Sparkles } from "lucide-react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Script from "next/script"

// ============================================
// SITE CONFIGURATION
// ============================================
const SITE_URL = "https://cettest.site"
const SITE_NAME = "CET TEST"
const INSTAGRAM_HANDLE = "cet__test"
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`
const SUPPORT_EMAIL = "anujjaglan9423@gmail.com"
const SUPPORT_PHONE = "+917291849546"
const SUPPORT_PHONE_DISPLAY = "7291849546"

// ============================================
// SEO, AEO & GEO OPTIMIZED METADATA FOR HARYANA
// ============================================
export const metadata: Metadata = {
  title: "Haryana CET & HSSC Mock Tests 2026 | Free HSSC CET, Police, Group D Exam Practice | CET TEST",
  description: "India's #1 free platform for Haryana government exam preparation. Attempt unlimited mock tests for HSSC CET (Group C & D), Haryana Police Constable, HSSC Group D, Patwari, VDO, and all Haryana state exams. Practice latest HSSC pattern, previous year papers (PYQs), Haryana GK, and section-wise tests with instant results, detailed solutions, and all-India rank. Start your 100% free HSSC exam preparation today!",

  keywords: [
    // ===== PRIMARY HARYANA EXAMS =====
    "HSSC CET mock test 2026",
    "Haryana CET free online test",
    "HSSC CET mock test series",
    "Haryana CET exam preparation",
    "Haryana CET 2026 mock test",
    "HSSC CET Group C mock test",
    "HSSC CET Group D practice set",
    "HSSC CET previous year papers",
    "HSSC CET online test series free",
    "HSSC CET syllabus 2026",
    "HSSC CET exam pattern 2026",

    // ===== HARYANA POLICE EXAMS =====
    "Haryana Police Constable mock test",
    "Haryana Police SI practice test",
    "HSSC Police exam preparation 2026",
    "Haryana Police online test series",
    "Haryana Police previous year paper",
    "Haryana Police physical test guide",

    // ===== HSSC GROUP D EXAMS =====
    "HSSC Group D mock test 2026",
    "Haryana Group D exam preparation",
    "HSSC Group D online practice",
    "HSSC Group D previous year papers",
    "HSSC Group D free test series",

    // ===== HARYANA REVENUE EXAMS =====
    "Haryana Patwari mock test",
    "Haryana VDO exam preparation",
    "HSSC VDO online test series",
    "Haryana Lekhpal practice set",
    "HSSC Patwari previous year paper",

    // ===== HARYANA GK =====
    "Haryana GK for competitive exams",
    "Haryana history and culture quiz",
    "Haryana current affairs 2026",
    "Haryana geography mock test",
    "Haryana economy and polity",
    "Haryana specific GK questions",
    "Haryana welfare schemes",

    // ===== AEO: QUESTION-BASED KEYWORDS =====
    "how to crack HSSC CET in first attempt",
    "what is the syllabus of Haryana CET",
    "best strategy for Haryana Police exam",
    "how many questions in HSSC CET",
    "what is the salary of HSSC Group D",
    "how to prepare for Haryana GK",
    "best free website for HSSC mock test",
    "HSSC CET exam pattern 2026",
    "how to apply for Haryana CET",
    "what is the age limit for HSSC CET",
    "is HSSC CET easy to crack",
    "how to get government job in Haryana",
    "which is better HSSC CET or HSSC Group D",
    "how to prepare for Haryana Police physical test",
    "what is cut off for HSSC CET 2026",

    // ===== GENERIC =====
    "Haryana sarkari naukari exam 2026",
    "HSSC exam preparation 2026 Haryana",
    "Haryana government job exam",
    "free mock test for Haryana exams",
    "Haryana state exam preparation 2026",
    "HSSC coaching free online",
  ],

  alternates: {
    canonical: "https://cettest.site/exams/haryana",
    languages: {
      "en-IN": "https://cettest.site/exams/haryana",
      "hi-IN": "https://cettest.site/exams/haryana/hi",
    },
  },

  openGraph: {
    title: "Haryana CET & HSSC Mock Tests 2026 | Free Haryana Police, Group D Exam Practice",
    description: "Crack Haryana government exams with India's #1 free mock test platform. Unlimited tests for HSSC CET, Police Constable, Group D, Patwari & VDO. Practice Haryana GK, PYQs & get all-India rank.",
    url: "https://cettest.site/exams/haryana",
    siteName: "CET TEST",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    type: "website",
    images: [{
      url: "/og-image-haryana.png",
      width: 1200,
      height: 630,
      alt: "HSSC CET Mock Test 2026 - Free Haryana Exam Preparation"
    }],
    emails: [SUPPORT_EMAIL],
    phoneNumbers: [SUPPORT_PHONE],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "HSSC CET Mock Tests 2026 | Crack Haryana Govt Exams for Free",
    description: "Prepare with the best free HSSC CET, Haryana Police & Group D mock tests. Access PYQs, Haryana GK & detailed analytics.",
    images: ["/og-image-haryana.png"],
    site: INSTAGRAM_URL,
    creator: INSTAGRAM_HANDLE,
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
}

export default function HaryanaExamsPage() {

  // ============================================
  // COMPREHENSIVE EXAMS DATA (EXPANDED)
  // ============================================
  const exams = [
    {
      name: "HSSC CET (Group C & D)",
      description: "Complete preparation for Haryana Common Entrance Test with latest NTA pattern questions for all Group C and Group D posts.",
      link: "/mock-test",
      features: ["100+ Full-Length Mocks", "NTA Pattern Based", "HSSC CET PYQs", "Haryana GK Focus"],
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Haryana Police Constable",
      description: "Targeted mock tests for Haryana Police recruitment including Physical & Written exam focus with latest syllabus.",
      link: "/mock-test",
      features: ["80+ Subject-wise Tests", "Haryana GK Special", "Timed Mock Tests", "All India Rank Analysis"],
      badge: "High Demand",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "HSSC Group D",
      description: "Dedicated test series for upcoming HSSC Group D vacancies with 2026 updated syllabus and exam pattern.",
      link: "/mock-test",
      features: ["150+ Sectional Tests", "Focus on Reasoning & Math", "Instant Scorecards", "Previous Year Papers"],
      badge: "New Updates",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Haryana Patwari",
      description: "Practice sets for Patwari examination with focus on land records, revenue laws, and Haryana specific GK.",
      link: "/mock-test",
      features: ["60+ Mock Tests", "Revenue Law Focus", "Haryana Land Records", "Previous Year Analysis"],
      badge: "Limited Seats",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Haryana VDO",
      description: "Village Development Officer exam preparation with rural development focus and Haryana scheme coverage.",
      link: "/mock-test",
      features: ["50+ Full Tests", "Rural Development Focus", "Haryana Welfare Schemes", "GK & Current Affairs"],
      badge: "Coming Soon",
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "HSSC Clerk & Jr. Assistant",
      description: "Office management and clerical exam preparation with computer knowledge and typing test guidance.",
      link: "/mock-test",
      features: ["70+ Practice Tests", "Computer Knowledge", "Typing Test Guide", "Previous Year Papers"],
      badge: "New",
      color: "from-indigo-500 to-blue-500"
    },
  ]

  // ============================================
  // HARYANA GK TOPICS (GEO-SPECIFIC)
  // ============================================
  const haryanaGKTopics = [
    "Haryana History & Formation",
    "Haryana Culture & Traditions",
    "Haryana Geography & Rivers",
    "Haryana Economy",
    "Haryana Polity & Governance",
    "Haryana Welfare Schemes",
    "Haryana Current Affairs",
    "Haryana Sports & Achievements",
    "Haryanvi Language & Literature",
    "Haryana Important Personalities",
  ]

  // ============================================
  // EXPANDED FAQS (AEO OPTIMIZED)
  // ============================================
  const faqs = [
    {
      question: "What is HSSC CET exam and who is eligible?",
      answer: "HSSC CET (Haryana Common Eligibility Test) is a state-level exam conducted by the Haryana Staff Selection Commission for Group C and Group D posts in Haryana government departments. Eligibility: 10th/12th/Graduation as per post requirement, age 18-42 years, and domicile of Haryana is required for most posts."
    },
    {
      question: "Is the HSSC CET 2026 Mock Test Series completely free on CET TEST?",
      answer: "Yes! CET TEST provides 100% free mock test series for HSSC CET (Group C & D), Haryana Police Constable, HSSC Group D, and all Haryana state exams. You can attempt unlimited mock tests, previous year papers, and sectional quizzes without any hidden charges."
    },
    {
      question: "How does CET TEST cover Haryana GK and current affairs syllabus?",
      answer: "Our mock tests include a specialized Haryana GK section covering Haryana History (from 1966 formation), Geography (Ghaggar river, Yamuna), Polity, Welfare Schemes (like Parivar Pehchan Patra), Sports (Haryana is 'Sports Hub of India'), and current affairs. We update our question bank weekly with latest Haryana-specific news."
    },
    {
      question: "What is the exam pattern for HSSC CET 2026?",
      answer: "HSSC CET 2026 pattern: 100 questions (100 marks), exam duration: 2 hours. Subjects include: General Awareness (including Haryana GK), Reasoning, Mathematics, Hindi/English language skills. Negative marking: 0.25 marks per wrong answer. CET TEST mocks follow this exact pattern."
    },
    {
      question: "Can I practice HSSC previous year question papers on CET TEST?",
      answer: "Yes! CET TEST has a curated repository of HSSC Previous Year Papers (PYQs) from 2016-2024. You can solve them as 'Live Tests' to understand the actual difficulty level, recurring question patterns, and improve your time management skills."
    },
    {
      question: "What is the salary structure for HSSC CET qualified candidates?",
      answer: "HSSC CET Group C posts (e.g., Clerk, Patwari) offer salary in Level 4-6 pay matrix: ₹25,500 - ₹81,100 plus allowances. Group D posts (e.g., Peon, Attendant) offer Level 1-2 pay matrix: ₹18,000 - ₹56,900 plus allowances as per 7th Pay Commission."
    },
    {
      question: "Does CET TEST provide Haryana Police physical test preparation?",
      answer: "Yes! We provide comprehensive guides for Haryana Police physical tests including running (2.5 km in 12 minutes), long jump (3.8m), high jump, and medical standards. Our mock tests also include sectional tests for physical efficiency."
    },
    {
      question: "Can I attempt HSSC mock tests in both Hindi and English?",
      answer: "Absolutely! CET TEST offers all Haryana exam mock tests in bilingual format (Hindi & English), as per the actual HSSC examination pattern. You can switch between languages or choose your preferred medium before starting the test."
    },
    {
      question: "What is the age limit for Haryana government exams?",
      answer: "For most Haryana government exams (HSSC CET, Police, Group D), the age limit is 18-42 years for General category. Age relaxation: SC/ST/OBC: +5 years, PwD: +10 years, Ex-servicemen: as per Haryana government rules."
    },
    {
      question: "How does the All-India Rank (AIR) feature work for Haryana exams?",
      answer: "After every mock test, you receive a detailed performance report including your All-India Rank among thousands of Haryana aspirants who have taken the same test. This helps you understand where you stand compared to the actual competition pool."
    },
  ]

  // ============================================
  // STRUCTURED DATA FOR HARYANA (AEO/SEO)
  // ============================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CET TEST - Haryana Exam Preparation",
    url: `${SITE_URL}/exams/haryana`,
    description: "Free mock test platform for all Haryana government exams including HSSC CET, Haryana Police, Group D, Patwari, and VDO examinations.",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: SUPPORT_PHONE,
      email: SUPPORT_EMAIL,
      contactType: "customer support",
      areaServed: "Haryana",
      availableLanguage: ["English", "Hindi"],
    },

    areaServed: {
      "@type": "State",
      name: "Haryana",
    },

    sameAs: [INSTAGRAM_URL],

    // Haryana Specific FAQ (AEO)
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best way to prepare for HSSC CET 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best preparation strategy includes: 1) Understand the latest exam pattern, 2) Focus on Haryana GK (most scoring section), 3) Practice daily mock tests on CET TEST, 4) Solve previous year papers, and 5) Analyze your weak areas using performance reports.",
        },
      },
      {
        "@type": "Question",
        name: "How many vacancies are expected for HSSC CET 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HSSC is expected to announce 15,000+ vacancies for Group C and Group D posts in 2026, including Police Constable, Patwari, Clerk, VDO, and various departmental posts across Haryana government departments.",
        },
      },
      {
        "@type": "Question",
        name: "What is the selection process for Haryana Police Constable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haryana Police Constable selection includes: 1) Written Exam (100 marks, 100 questions, 2 hours), 2) Physical Efficiency Test (PET) - 2.5 km run in 12 minutes, 3) Physical Standard Test (PST), 4) Document Verification, and 5) Medical Examination.",
        },
      },
      {
        "@type": "Question",
        name: "Is CET TEST really free for Haryana exam preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CET TEST is 100% free for all Haryana exams including HSSC CET, Haryana Police, Group D, Patwari, VDO, and all state-level exams. No hidden charges, no premium plans - completely free forever.",
        },
      },
    ],
  }

  // ============================================
  // HARYANA CITY DISTRIBUTION (GEO TARGETING)
  // ============================================
  const haryanaCities = [
    "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad",
    "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal",
    "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula",
    "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"
  ]

  return (
    <>
      {/* ===== STRUCTURED DATA (JSON-LD) ===== */}
      <Script
        id="haryana-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
        <FooterLinkNavbar />

        {/* ===== Hero Section ===== */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>Official Partner for Haryana Govt Exams Preparation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Crack Haryana Govt Exams with{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Free Mock Tests
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the most accurate HSSC CET Mock Test Series, Haryana Police Online Tests, and Previous Year Solved Papers for 2026. Trusted by 100,000+ Haryana aspirants.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">100K+</div>
                <div className="text-xs text-muted-foreground">Active Aspirants</div>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">800+</div>
                <div className="text-xs text-muted-foreground">Mock Tests</div>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Free Forever</div>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">2026</div>
                <div className="text-xs text-muted-foreground">Updated Syllabus</div>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/exams/hssc-cet">
                <Button size="lg" className="gap-2 cursor-pointer">
                  <Sparkles className="w-5 h-5" />
                  Exam Overview
                </Button>
              </Link>
              <Link href="#categories">
                <Button variant="outline" size="lg" className="cursor-pointer">
                  Explore All Exams
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Haryana Cities Served (Geo Targeting) ===== */}
        <section className="py-8 bg-muted/30 border-y">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground">📍 Serving Aspirants Across Haryana</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {haryanaCities.map((city, idx) => (
                <span key={idx} className="text-xs bg-background px-3 py-1 rounded-full border text-muted-foreground">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Exams Grid ===== */}
        <section id="categories" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Haryana Exam Series</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose your target exam and start practicing with our curated test series designed as per latest HSSC pattern
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.map((exam, idx) => (
                <div key={idx} className="group bg-background rounded-xl p-6 border hover:border-primary transition-all hover:shadow-xl relative">
                  {exam.badge && (
                    <div className={`absolute -top-3 right-4 bg-gradient-to-r ${exam.color} text-white text-xs px-3 py-1 rounded-full`}>
                      {exam.badge}
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{exam.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exam.description}</p>
                  </div>
                  <div className="space-y-2 mb-6">
                    {exam.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={exam.link}>
                    <Button className="w-full cursor-pointer">
                      {exam.link === "#" ? "Coming Soon" : "Start Free Mock Test →"}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Haryana GK Section (GEO-SPECIFIC) ===== */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Haryana Specific</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Master Haryana GK for Competitive Exams</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Haryana GK is the highest-scoring section in HSSC exams. Master it with our dedicated question banks
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {haryanaGKTopics.map((topic, idx) => (
                <Link key={idx} href={`/mock-test`}>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
                    {topic}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Why Choose Section ===== */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Aspirants Trust CET TEST for Haryana Exams?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Latest Exam Pattern</h3>
                <p className="text-sm text-muted-foreground">Updated for NTA & HSSC 2026 pattern with 100 questions in 2 hours</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-sm text-muted-foreground">Detailed analysis of speed, accuracy & weak areas after every test</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Detailed Solutions</h3>
                <p className="text-sm text-muted-foreground">Step-by-step explanations for every question to ensure learning</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">All-India Rank</h3>
                <p className="text-sm text-muted-foreground">Compare your performance with 100K+ Haryana aspirants</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AEO: FAQ Section ===== */}
        <section id="faq" className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Haryana Govt Exams: <span className="text-primary">Common Questions Answered</span>
              </h2>
              <p className="text-muted-foreground">Expert answers for HSSC aspirants. Get clarity on exam patterns, syllabus & preparation strategies.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-border rounded-xl bg-card overflow-hidden transition-all">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-muted/50">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-6 text-muted-foreground leading-relaxed border-t border-dashed border-border pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Crack Your Haryana Exam?</h2>
            <p className="text-lg mb-8 opacity-90">Join 100,000+ Haryana aspirants and start your free preparation today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="gap-2 cursor-pointer">
                  Start Practicing for Free
                </Button>
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow @{INSTAGRAM_HANDLE}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FooterLinkFooter />
      </main>
    </>
  )
}