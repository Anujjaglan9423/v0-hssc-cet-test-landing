import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, FileText, Clock, ChevronDown, Target, Instagram, MapPin, Sparkles, TrendingUp } from "lucide-react"
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
// SEO, AEO & GEO OPTIMIZED METADATA FOR HSSC CET
// ============================================
export const metadata: Metadata = {
  title: "HSSC CET Mock Test 2026 | Free Haryana CET Group C & D Practice Sets | NTA Pattern & PYQs",
  description: "Crack HSSC CET 2026 with India's #1 free mock test platform. Attempt unlimited tests for Haryana CET Group C & D with NTA pattern, Haryana GK, previous year papers (PYQs), detailed solutions, and all-India rank. Start your 100% free preparation today!",

  keywords: [
    // ===== PRIMARY HSSC CET KEYWORDS =====
    "HSSC CET mock test 2026",
    "Haryana CET Group C mock test",
    "HSSC CET Group D free online test",
    "NTA HSSC CET exam pattern",
    "Haryana CET previous year papers",
    "HSSC CET Haryana GK questions",
    "Free Haryana CET practice set 2026",
    "Sarkari Result Haryana CET prep",
    "HSSC CET online test series Hindi",
    "Haryana Staff Selection Commission CET",
    "HSSC CET syllabus 2026",
    "HSSC CET exam date 2026",
    "HSSC CET eligibility criteria",
    "HSSC CET salary and benefits",
    "HSSC CET cut off marks 2026",
    "HSSC CET application form",

    // ===== AEO: QUESTION-BASED KEYWORDS =====
    "how to crack HSSC CET in first attempt",
    "what is HSSC CET exam pattern 2026",
    "best strategy for HSSC CET preparation",
    "how many questions in HSSC CET",
    "what is the syllabus of Haryana CET",
    "how to prepare for Haryana GK in CET",
    "what is negative marking in HSSC CET",
    "how to apply for HSSC CET 2026",
    "what is the age limit for HSSC CET",
    "is HSSC CET easy to crack",
    "how to get good score in HSSC CET",
    "what is the passing marks for HSSC CET",
    "how many attempts for HSSC CET",
    "HSSC CET Group C vs Group D difference",
    "what is the salary of HSSC CET Group C",
    "best books for HSSC CET preparation",

    // ===== HARYANA GK FOR CET =====
    "Haryana history for HSSC CET",
    "Haryana culture and traditions CET",
    "Haryana geography rivers and dams",
    "Haryana welfare schemes Parivar Pehchan Patra",
    "Haryana sports achievements CET",
    "Haryana current affairs 2026",
    "Haryana economy and agriculture",
    "Haryana polity and governance",

    // ===== GENERIC =====
    "free mock test for Haryana CET",
    "HSSC CET online coaching free",
    "HSSC CET preparation 2026 Haryana",
    "Haryana government job exam CET",
  ],

  alternates: {
    canonical: "https://cettest.site/exams/hssc-cet",
    languages: {
      "en-IN": "https://cettest.site/exams/hssc-cet",
      "hi-IN": "https://cettest.site/exams/hssc-cet/hi",
    },
  },

  openGraph: {
    title: "HSSC CET Mock Test 2026 | Free Haryana CET Group C & D Practice | NTA Pattern",
    description: "Crack HSSC CET 2026 with unlimited free mock tests. Practice Haryana GK, previous year papers, NTA pattern questions, and get detailed analytics. Start your free preparation today!",
    url: "https://cettest.site/exams/hssc-cet",
    siteName: "CET TEST",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    type: "website",
    images: [{
      url: "/og-image-hssc-cet.png",
      width: 1200,
      height: 630,
      alt: "HSSC CET Mock Test 2026 - Free Haryana CET Group C & D Preparation"
    }],
    emails: [SUPPORT_EMAIL],
    phoneNumbers: [SUPPORT_PHONE],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "HSSC CET Mock Test 2026 | Free Haryana CET Practice",
    description: "Prepare for HSSC CET 2026 with free mock tests, PYQs, Haryana GK & detailed analytics. Start now!",
    images: ["/og-image-hssc-cet.png"],
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

export default function HSCSCETPage() {

  // ============================================
  // COMPREHENSIVE FAQS (AEO OPTIMIZED)
  // ============================================
  const faqs = [
    {
      q: "What is HSSC CET exam and who conducts it?",
      a: "HSSC CET (Haryana Common Eligibility Test) is conducted by the Haryana Staff Selection Commission (HSSC) through NTA (National Testing Agency). It's a state-level exam for recruitment to Group C and Group D posts in Haryana government departments. The exam is mandatory for all direct recruitment in Haryana."
    },
    {
      q: "Is the HSSC CET mock test based on the NTA pattern?",
      a: "Yes, all our HSSC CET practice sets follow the latest NTA (National Testing Agency) pattern with 100 questions in 90 minutes. We cover the 95+5 marks distribution where 95 marks are for subject knowledge and 5 marks for Haryana residency. Our mock tests are updated for the 2026 exam pattern."
    },
    {
      q: "What is the eligibility criteria for HSSC CET 2026?",
      a: "Eligibility: 1) Educational Qualification: 10th/12th/Graduation as per post requirement. 2) Age: 18-42 years for General category (relaxation for SC/ST/OBC). 3) Domicile: Haryana residency required (with 5 bonus marks). 4) Knowledge of Hindi/Sanskrit up to 10th standard."
    },
    {
      q: "Does this include Haryana GK and Current Affairs?",
      a: "Absolutely! Our HSSC CET mock tests include dedicated sections for Haryana History (from 1966 formation), Haryana Geography (Ghaggar river, Yamuna, Aravalli range), Haryana Polity, Haryana Welfare Schemes (Parivar Pehchan Patra, Beti Bachao Beti Padhao), Haryana Sports (Olympians from Haryana), and monthly Haryana Current Affairs updates."
    },
    {
      q: "Can I access HSSC CET Group D previous year papers?",
      a: "Yes, we provide solved previous year question papers (PYQs) for both HSSC CET Group C and Group D exams from 2016 to 2024. Practicing PYQs helps you understand the actual difficulty level, recurring question patterns, and important topics that often repeat in exams."
    },
    {
      q: "What is the exam pattern for HSSC CET 2026?",
      a: "HSSC CET 2026 pattern: Total 100 questions (100 marks) in 90 minutes. Subject distribution: Haryana GK (25%), General Awareness (20%), Reasoning (20%), Mathematics (20%), Language (10%), Computers (5%). Questions are OMR-based with no negative marking. All 5 options are compulsory to attempt."
    },
    {
      q: "What is the salary for HSSC CET qualified candidates?",
      a: "HSSC CET Group C posts (Clerk, Patwari, Accountant) offer salary in Level 4-6 pay matrix: ₹25,500 - ₹81,100 plus allowances (DA, HRA, Travel). Group D posts (Peon, Attendant, Chowkidar) offer Level 1-2: ₹18,000 - ₹56,900 plus allowances as per 7th Pay Commission."
    },
    {
      q: "How to prepare for HSSC CET at home for free?",
      a: "You can prepare for free using CET TEST: 1) Take daily mock tests (one full test + two sectional tests) 2) Focus on Haryana GK (most scoring section) 3) Solve previous year papers 4) Analyze your weak areas using performance reports 5) Practice speed and accuracy with timed tests."
    },
    {
      q: "What is the selection process for HSSC CET?",
      a: "HSSC CET selection process: 1) Written Exam (100 marks, 90 minutes, OMR-based) 2) Scrutiny of Documents 3) Socio-economic criteria and experience evaluation (if applicable) 4) Final merit list based on CET score + bonus marks (5 for Haryana domicile, 5 for women, etc.)"
    },
    {
      q: "Is there negative marking in HSSC CET?",
      a: "No, HSSC CET has NO NEGATIVE MARKING. All 5 options for each question are compulsory to attempt. However, you must be careful as incorrect answers don't penalize you but you must not leave any question unanswered."
    },
    {
      q: "How many vacancies are expected for HSSC CET 2026?",
      a: "HSSC is expected to announce 20,000+ vacancies for HSSC CET 2026 across Group C and Group D posts including Clerk, Patwari, Accountant, Stenographer, Peon, Attendant, and various departmental posts in Haryana government."
    },
    {
      q: "Can I attempt HSSC CET mock tests in Hindi?",
      a: "Yes, CET TEST offers all HSSC CET mock tests in bilingual format (Hindi & English), as per the actual HSSC examination pattern. You can choose your preferred language before starting the test. You can also switch between languages during the test."
    },
  ]

  // ============================================
  // HARYANA GK TOPICS FOR CET (GEO-SPECIFIC)
  // ============================================
  const haryanaGKTopics = [
    { name: "Haryana History (1966 onwards)", icon: "📜", questions: "200+" },
    { name: "Haryana Culture & Traditions", icon: "🎭", questions: "150+" },
    { name: "Haryana Geography & Rivers", icon: "🏔️", questions: "180+" },
    { name: "Haryana Economy & Agriculture", icon: "🌾", questions: "120+" },
    { name: "Haryana Polity & Governance", icon: "🏛️", questions: "140+" },
    { name: "Haryana Welfare Schemes", icon: "🤝", questions: "200+" },
    { name: "Haryana Current Affairs", icon: "📰", questions: "300+" },
    { name: "Haryana Sports & Achievements", icon: "🏆", questions: "100+" },
    { name: "Haryana Important Personalities", icon: "👤", questions: "90+" },
    { name: "Haryana Festivals & Fairs", icon: "🎪", questions: "80+" },
  ]

  // ============================================
  // HSSC CET SECTION-WISE WEIGHTAGE
  // ============================================
  const sectionWeightage = [
    { name: "Haryana GK", percentage: 25, color: "bg-blue-500" },
    { name: "General Awareness", percentage: 20, color: "bg-green-500" },
    { name: "Reasoning", percentage: 20, color: "bg-purple-500" },
    { name: "Mathematics", percentage: 20, color: "bg-orange-500" },
    { name: "Language (Hindi/English)", percentage: 10, color: "bg-red-500" },
    { name: "Computer Knowledge", percentage: 5, color: "bg-teal-500" },
  ]

  // ============================================
  // STRUCTURED DATA FOR HSSC CET (AEO/SEO)
  // ============================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CET TEST - HSSC CET Preparation",
    url: `${SITE_URL}/exams/hssc-cet`,
    description: "Free mock test platform for HSSC CET (Haryana Common Eligibility Test) Group C and Group D examinations.",

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

    // HSSC CET Specific FAQ (AEO)
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best way to prepare for HSSC CET 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best preparation strategy: 1) Understand latest NTA pattern, 2) Focus on Haryana GK (25% weightage), 3) Take daily mock tests on CET TEST, 4) Solve previous year papers, 5) Analyze weak areas using performance reports. All for free!",
        },
      },
      {
        "@type": "Question",
        name: "Is CET TEST really free for HSSC CET preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CET TEST is 100% free for HSSC CET Group C and Group D preparation. No hidden charges, no premium plans. Unlimited mock tests, PYQs, and performance analytics available at zero cost.",
        },
      },
      {
        "@type": "Question",
        name: "What are the bonus marks in HSSC CET?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HSSC CET provides 5 bonus marks for Haryana domicile candidates, 5 marks for women candidates, 5 marks for widows/divorcees, and additional marks for NCC/NSS/Sports achievements as per Haryana government rules.",
        },
      },
    ],
  }

  // ============================================
  // HARYANA CITIES (GEO TARGETING)
  // ============================================
  const haryanaCities = [
    "Ambala", "Bhiwani", "Faridabad", "Gurugram", "Hisar",
    "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra",
    "Mahendragarh", "Palwal", "Panchkula", "Panipat", "Rewari",
    "Rohtak", "Sirsa", "Sonipat", "Yamunanagar", "Nuh"
  ]

  return (
    <>
      {/* ===== STRUCTURED DATA (JSON-LD) ===== */}
      <Script
        id="hssc-cet-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
        <FooterLinkNavbar />

        {/* ===== Hero Section ===== */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Updated for 2026 NTA Pattern | 100% Free</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Free <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">HSSC CET Mock Test</span> 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Prepare for Haryana CET Group C & D with unlimited free practice tests, solved previous year papers (PYQs), expert-curated Haryana GK, and detailed performance analytics.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Active Users</div>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-xs text-muted-foreground">Mock Tests</div>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground">PYQs Solved</div>
              </div>
              <div className="bg-background/50 backdrop-blur rounded-lg p-3 border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Free Forever</div>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/signup">
                <Button size="lg" className="gap-2 cursor-pointer">
                  <CheckCircle2 className="w-5 h-5" />
                  Start Free Mock Test
                </Button>
              </Link>
              <Link href="#exam-details">
                <Button variant="outline" size="lg" className="cursor-pointer">
                  View Exam Pattern
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Haryana Cities Served (Geo Targeting) ===== */}
        <section className="py-6 bg-muted/30 border-y">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-3">
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3" /> Top HSSC CET Preparation in:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {haryanaCities.map((city, idx) => (
                <span key={idx} className="text-xs bg-background px-2.5 py-1 rounded-full border text-muted-foreground">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Features Grid (Expanded) ===== */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Why Choose Our HSSC CET Mock Tests?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Designed for serious Haryana CET aspirants with real exam-level experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition">
                  <FileText className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">10,000+ Questions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Extensive question bank covering Haryana GK, Maths, Reasoning, and Computer topics.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition">
                  <Target className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">NTA Level Mocks</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Practice questions designed to match the real NTA exam difficulty level with 90-minute timer.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition">
                  <TrendingUp className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">Rank Analysis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Compare your performance with 50K+ aspirants and track your progress with detailed analytics.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group relative p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition">
                  <Clock className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">Live Timer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simulate real exam conditions and improve your speed & accuracy with countdown timer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section-wise Weightage ===== */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">HSSC CET Section-wise Weightage</h2>
            <p className="text-muted-foreground mb-10">Know the marks distribution to plan your preparation strategy</p>
            <div className="space-y-3">
              {sectionWeightage.map((section, idx) => (
                <div key={idx} className="bg-card rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{section.name}</span>
                    <span className="text-primary font-bold">{section.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className={`${section.color} h-2.5 rounded-full transition-all duration-1000`} style={{ width: `${section.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Exam Details Section ===== */}
        <section id="exam-details" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">HSSC CET 2026 Exam Pattern & Syllabus</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understand the latest exam pattern and syllabus to boost your preparation strategy
              </p>
            </div>

            {/* Pattern Card */}
            <div className="mb-10 rounded-2xl border bg-card shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 font-semibold text-foreground">
                Exam Pattern Overview
              </div>
              <div className="divide-y">
                {[
                  ["Conducting Body", "HSSC (Haryana Staff Selection Commission) via NTA"],
                  ["Mode of Exam", "Offline (OMR Based)"],
                  ["Total Questions", "100 Questions"],
                  ["Total Marks", "100 Marks"],
                  ["Duration", "90 Minutes (1.5 Hours)"],
                  ["Negative Marking", "No Negative Marking"],
                  ["Bonus Marks", "5 for Haryana Domicile"],
                  ["Language Medium", "Bilingual (Hindi & English)"],
                ].map(([label, value], i) => (
                  <div key={i} className="grid grid-cols-2 px-6 py-3 hover:bg-muted/30 transition">
                    <span className="text-sm font-medium text-muted-foreground">{label}</span>
                    <span className="text-sm font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl border bg-card shadow-sm">
                <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  Syllabus Focus Areas
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Haryana GK:</strong> History, Culture, Geography, Welfare Schemes (25 marks)</li>
                  <li><strong>General Awareness:</strong> India GK, Current Affairs, National Events (20 marks)</li>
                  <li><strong>Reasoning:</strong> Verbal & Non-Verbal Reasoning, Analogies (20 marks)</li>
                  <li><strong>Mathematics:</strong> Arithmetic, Algebra, Geometry, Data Interpretation (20 marks)</li>
                  <li><strong>Languages:</strong> English & Hindi Grammar, Comprehension (10 marks)</li>
                  <li><strong>Computer Knowledge:</strong> Basic Fundamentals, Internet, MS Office (5 marks)</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10">
                <h3 className="text-xl font-bold mb-4">🔥 Important Topics for HSSC CET</h3>
                <div className="space-y-2 text-sm">
                  <p>✓ Haryana: Phases of formation (1st Nov 1966)</p>
                  <p>✓ Haryana: Major rivers - Ghaggar, Yamuna, Markanda</p>
                  <p>✓ Parivar Pehchan Patra (PPP) Scheme</p>
                  <p>✓ Haryana's Sports Policy & Olympians</p>
                  <p>✓ Beti Bachao Beti Padhao (Launched from Panipat)</p>
                  <p>✓ Haryana's 7 Welfare Schemes for farmers</p>
                  <p>✓ Current CM and Governor of Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Haryana GK Section (GEO-SPECIFIC) ===== */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Most Scoring Section: Haryana GK</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Master Haryana GK for HSSC CET</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                25% of total marks come from Haryana GK. Our dedicated question banks cover everything you need.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {haryanaGKTopics.map((topic, idx) => (
                <Link key={idx} href="/mock-test">
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors text-sm justify-start gap-2">
                    <span>{topic.icon}</span>
                    <span className="truncate">{topic.name}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{topic.questions}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== AEO: FAQ Section (Expanded) ===== */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">HSSC CET: Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about Haryana CET exam preparation</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border rounded-xl bg-card overflow-hidden transition-all">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-muted/50">
                    <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-6 text-muted-foreground leading-relaxed border-t border-dashed border-border pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Crack Your HSSC CET Exam?</h2>
            <p className="text-lg mb-8 opacity-90">Join 50,000+ Haryana aspirants and start your free preparation today</p>
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