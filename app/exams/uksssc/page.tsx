import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CheckCircle2,
  BookOpen,
  Users,
  Trophy,
  Phone,
  Mail,
  Instagram,
  Clock,
} from "lucide-react";
import FooterLinkNavbar from "@/components/footer-link-navbar";
import FooterLinkFooter from "@/components/footer-link-footer";
import Script from "next/script";

// ============================================
// SITE CONFIGURATION (matching root layout)
// ============================================
const SITE_URL = "https://cettest.site";
const INSTAGRAM_HANDLE = "cet__test";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
const SUPPORT_EMAIL = "anujjaglan9423@gmail.com";
const SUPPORT_PHONE = "+917291849546";

// ============================================
// SEO, AEO & GEO OPTIMIZED METADATA FOR UKSSSC
// ============================================
export const metadata: Metadata = {
  title:
    "UKSSSC & UKPSC Mock Tests 2026 | Uttarakhand Govt Exam Preparation Online | Free Practice",
  description:
    "Crack UKSSSC & UKPSC 2026 exams with India's #1 free mock test platform. Attempt unlimited mock tests for UK VDO/VPDO, Patwari, Lekhpal, Forest Guard, UK Police Constable, SI, Junior Assistant (Kanisth Sahayak), RO/ARO, and Group C. Practice latest Uttarakhand GK, previous year papers (PYQs), full-length test series with instant results, detailed solutions, and all-India rank. Start your 100% free preparation today!",

  keywords: [
    // Primary UKSSSC Exams
    "UKSSSC mock test 2026",
    "UKSSSC free online test series",
    "UKSSSC VDO mock test 2026",
    "UKSSSC VPDO preparation online",
    "Uttarakhand Patwari lekpal mock test",
    "UKSSSC Forest Guard practice set 2026",
    "Uttarakhand Police Constable mock test",
    "UKSSSC SI practice test online",
    "UKSSSC Group C online test hindi",
    "UKSSSC previous year question papers",
    "UKSSSC syllabus and exam pattern",

    // UKSSSC Junior Assistant
    "UKSSSC Kanisth Sahayak mock test 2026",
    "UKSSSC Junior Assistant preparation online",
    "UKSSSC Junior Assistant practice set",
    "UKSSSC Kanisth Sahayak previous year papers",
    "UKSSSC Junior Assistant vacancy 2026",
    "UKSSSC Kanisth Sahayak exam pattern",
    "UKSSSC Junior Assistant syllabus",

    // UKPSC Exams
    "UKPSC RO ARO mock test 2026",
    "UKPSC free online test series",
    "Uttarakhand PCS preparation",
    "UKPSC lecturer exam mock test",
    "UKPSC junior assistant practice test",

    // Uttarakhand Specific
    "Uttarakhand GK for competitive exams",
    "Uttarakhand history and culture quiz",
    "Uttarakhand current affairs 2026",
    "Uttarakhand geography mock test",
    "Uttarakhand government job preparation",

    // Question-based AEO keywords
    "how to crack UKSSSC exam in first attempt",
    "what is the syllabus of UKSSSC VDO",
    "best strategy for UKPSC preparation",
    "how many papers in UKSSSC exam",
    "what is the salary of UKSSSC Patwari",
    "how to prepare for Uttarakhand GK",
    "best free website for UKSSSC mock test",
    "UKSSSC exam pattern 2026",
    "how to apply for UKSSSC recruitment",
    "what is the age limit for UKSSSC",
    "is UKSSSC easy to crack",
    "how to get government job in Uttarakhand",
    "what is the salary of UKSSSC Kanisth Sahayak",

    // Generic
    "free mock test for Uttarakhand exams",
    "Uttarakhand state exam preparation 2026",
    "UKSSSC coaching free online",
  ],

  alternates: {
    canonical: "https://cettest.site/exams/uksssc",
  },

  openGraph: {
    title:
      "UKSSSC & UKPSC Mock Tests 2026 | Free Uttarakhand Exam Practice | CET TEST",
    description:
      "Boost your score in UKSSSC 2026 exams. Get unlimited free mock tests for VDO, Patwari, Forest Guard, Police, Junior Assistant (Kanisth Sahayak), and UKPSC with detailed solutions, performance analytics, and all-India rank.",
    url: "https://cettest.site/exams/uksssc",
    siteName: "CET TEST",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image-uksssc.png",
        width: 1200,
        height: 630,
        alt: "UKSSSC Mock Test 2026 - Free Uttarakhand Govt Exam Preparation",
      },
    ],
    emails: [SUPPORT_EMAIL],
    phoneNumbers: [SUPPORT_PHONE],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    title: "UKSSSC Mock Tests 2026 | Crack Uttarakhand State Exams for Free",
    description:
      "Prepare with the best free UKSSSC & UKPSC mock tests, PYQs, and Uttarakhand GK. Start your success journey today!",
    images: ["/og-image-uksssc.png"],
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
};

export default function UKSSCSPage() {
  // ============================================
  // UKSSSC EXAMS DATA
  // ============================================
  const exams = [
    {
      name: "UK VDO / VPDO",
      description:
        "Village Development Officer recruitment in Uttarakhand - Group C post",
      link: "/mock-test",
      features: [
        "150+ Mock Tests",
        "10 Previous Year Papers",
        "Subject-wise Practice",
        "Uttarakhand GK Focus",
      ],
      examCode: "UKSSSC VDO",
    },
    {
      name: "Patwari / Lekhpal",
      description:
        "Land record and revenue department positions in Uttarakhand",
      link: "/mock-test",
      features: [
        "120+ Timed Tests",
        "Detailed Solutions",
        "Performance Analytics",
        "Revision Tests",
      ],
      examCode: "UKSSSC Patwari",
    },
    {
      name: "Forest Guard",
      description: "Uttarakhand forest department recruitment - Group C",
      link: "/mock-test",
      features: [
        "100+ Full Mock Tests",
        "Real Exam Pattern",
        "Topic-wise Practice",
        "Physical Test Guide",
      ],
      examCode: "UKSSSC Forest Guard",
    },
    {
      name: "Uttarakhand Police",
      description: "Police Constable & SI recruitment in Uttarakhand",
      link: "/mock-test",
      features: [
        "200+ Mock Tests",
        "Previous Year Papers",
        "Expert Explanations",
        "Instant Results",
      ],
      examCode: "Uttarakhand Police",
    },
    {
      name: "Kanisth Sahayak (Junior Assistant)",
      description:
        "Junior Assistant recruitment in Uttarakhand government departments - Group C post",
      link: "/mock-test",
      features: [
        "140+ Mock Tests",
        "15 Previous Year Papers",
        "Typing Practice",
        "Computer Knowledge",
        "Uttarakhand GK Focus",
      ],
      examCode: "UKSSSC Junior Assistant",
    },
    {
      name: "UKSSSC Group C",
      description:
        "Various Group C posts including Junior Assistant, Clerk, Accountant",
      link: "/mock-test",
      features: [
        "180+ Mock Tests",
        "Sectional Tests",
        "Full-Length Exams",
        "Progress Tracking",
      ],
      examCode: "UKSSSC Group C",
    },
    {
      name: "UKPSC RO / ARO",
      description:
        "Review Officer & Assistant Review Officer - Uttarakhand PSC",
      link: "/mock-test",
      features: [
        "100+ Mock Tests",
        "Mains Practice",
        "Interview Guide",
        "Current Affairs",
      ],
      examCode: "UKPSC RO/ARO",
    },
  ];

  // ============================================
  // STRUCTURED DATA FOR UKSSSC (AEO/SEO)
  // ============================================
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CET TEST - UKSSSC Preparation",
    url: `${SITE_URL}/exams/uksssc`,
    description:
      "Free mock test platform for UKSSSC and UKPSC exams including VDO, Patwari, Forest Guard, Police, Junior Assistant (Kanisth Sahayak), and Group C posts.",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: SUPPORT_PHONE,
      email: SUPPORT_EMAIL,
      contactType: "customer support",
      areaServed: "Uttarakhand",
      availableLanguage: ["English", "Hindi"],
    },

    areaServed: {
      "@type": "State",
      name: "Uttarakhand",
    },

    sameAs: [INSTAGRAM_URL],

    // UKSSSC Specific FAQ (AEO)
    mainEntity: [
      {
        "@type": "Question",
        name: "What is UKSSSC exam and how to prepare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKSSSC (Uttarakhand Subordinate Service Selection Commission) conducts Group C exams. Prepare using our free mock tests covering all subjects with up-to-date Uttarakhand GK.",
        },
      },
      {
        "@type": "Question",
        name: "What is the exam pattern for UKSSSC VDO 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKSSSC VDO exam has 100 questions (100 marks) covering General Hindi, General Knowledge, Uttarakhand GK, Mathematics, and Reasoning. Time: 2 hours.",
        },
      },
      {
        "@type": "Question",
        name: "What is the syllabus for UKSSSC Kanisth Sahayak (Junior Assistant) exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKSSSC Kanisth Sahayak exam syllabus includes General Hindi, English Language, General Knowledge, Uttarakhand GK, Mathematics, Reasoning, and Computer Knowledge. The exam typically has 100 questions for 100 marks.",
        },
      },
      {
        "@type": "Question",
        name: "What is the salary of UKSSSC Junior Assistant (Kanisth Sahayak)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKSSSC Kanisth Sahayak (Junior Assistant) salary ranges from ₹29,200 to ₹92,300 (Level 5 pay matrix) plus allowances as per 7th Pay Commission. Additional benefits include DA, HRA, and medical allowances.",
        },
      },
      {
        "@type": "Question",
        name: "How to crack UKPSC RO ARO exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKPSC RO/ARO preparation requires focus on General Studies, General Hindi, and Essay writing. Practice our free mock tests and previous year papers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the salary of UKSSSC Patwari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKSSSC Patwari salary ranges from ₹29,200 to ₹92,300 (Level 5 pay matrix) plus allowances as per 7th Pay Commission.",
        },
      },
      {
        "@type": "Question",
        name: "How many attempts are allowed for UKSSSC exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKSSSC exams generally have no attempt limit, only age criteria. General: 18-42 years, SC/ST/OBC: 18-47 years.",
        },
      },
      {
        "@type": "Question",
        name: "Is CET TEST really free for UKSSSC preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, CET TEST is 100% free for all UKSSSC and UKPSC exams including VDO, Patwari, Forest Guard, Police, Junior Assistant (Kanisth Sahayak), and Group C mock tests.",
        },
      },
      {
        "@type": "Question",
        name: "What is the syllabus for Uttarakhand GK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uttarakhand GK syllabus includes History of Uttarakhand, Culture, Geography, Rivers, Dams, National Parks, Current Affairs, Economy, and Polity of Uttarakhand.",
        },
      },
      {
        "@type": "Question",
        name: "How to apply for UKSSSC recruitment 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applications for UKSSSC are submitted online through the official UKSSSC website (uksssc.in). Visit our website for latest notification updates.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typing speed requirement for UKSSSC Junior Assistant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UKSSSC Kanisth Sahayak (Junior Assistant) requires typing speed of 30 words per minute in Hindi or 35 words per minute in English. Typing test is conducted as part of the selection process.",
        },
      },
    ],
  };

  return (
    <>
      {/* ===== STRUCTURED DATA (JSON-LD) - Must be in component ===== */}
      <Script
        id="uksssc-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
        <FooterLinkNavbar />

        {/* ===== Hero Section ===== */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
              <span>🇮🇳</span>
              <span>Uttarakhand State Exams</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              UKSSSC & UKPSC Mock Tests 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Master UK VDO, Patwari, Forest Guard, Police Constable, Junior
              Assistant (Kanisth Sahayak) & all Group C exams with unlimited
              free mock tests, PYQs, and detailed analytics
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">7+</div>
                <div className="text-xs text-muted-foreground">
                  Exam Categories
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">900+</div>
                <div className="text-xs text-muted-foreground">Mock Tests</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">55K+</div>
                <div className="text-xs text-muted-foreground">
                  Practice Questions
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">
                  Free Forever
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/signup">
                <Button size="lg" className="gap-2 cursor-pointer">
                  <CheckCircle2 className="w-5 h-5" />
                  Start Free Test Now
                </Button>
              </Link>
              <Link href="#exams">
                <Button variant="outline" size="lg" className="cursor-pointer">
                  View All Exams
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Exams Grid ===== */}
        <section id="exams" className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Uttarakhand UKSSSC & UKPSC Exam Categories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose your exam and start practicing with our comprehensive
                test series designed as per latest pattern
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exams.map((exam, idx) => (
                <div
                  key={idx}
                  className="bg-background rounded-lg p-6 border hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{exam.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {exam.description}
                    </p>
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
                    <Button className="w-full cursor-pointer">Start Practicing</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Uttarakhand GK Section (Geo-specific) ===== */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Uttarakhand GK for Competitive Exams
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Master Uttarakhand-specific general knowledge with our dedicated
                question banks
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Uttarakhand History",
                "Uttarakhand Culture",
                "Uttarakhand Geography",
                "Rivers & Dams",
                "National Parks",
                "Current Affairs",
                "Uttarakhand Polity",
                "Uttarakhand Economy",
              ].map((topic, idx) => (
                <Link key={idx} href={`/mock-test`}>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {topic}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Why Choose Section ===== */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose CET TEST for UKSSSC Preparation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Latest Exam Pattern</h3>
                <p className="text-sm text-muted-foreground">
                  Tests updated for 2026 pattern
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Uttarakhand Focus</h3>
                <p className="text-sm text-muted-foreground">
                  State-specific GK coverage
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">All-India Rank</h3>
                <p className="text-sm text-muted-foreground">
                  Compare with 10K+ aspirants
                </p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Detailed Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Track your weak areas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AEO: FAQ Section ===== */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions - UKSSSC Exam
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the eligibility for UKSSSC VDO exam?",
                  a: "Candidate must have a Bachelor's degree from a recognized university and age between 18-42 years. Hindi knowledge up to 10th standard is mandatory.",
                },
                {
                  q: "What is the eligibility for UKSSSC Kanisth Sahayak (Junior Assistant)?",
                  a: "Candidate must have a Bachelor's degree from a recognized university with knowledge of computer applications. Age limit is 18-42 years. Typing speed of 30 WPM in Hindi or 35 WPM in English is required.",
                },
                {
                  q: "How many vacancies are expected for UKSSSC 2026?",
                  a: "UKSSSC is expected to announce 2000+ vacancies for various Group C posts including VDO, Patwari, Forest Guard, Junior Assistant (Kanisth Sahayak), and other posts in 2026.",
                },
                {
                  q: "What is the selection process for UKSSSC Forest Guard?",
                  a: "UKSSSC Forest Guard selection includes Written Exam, Physical Efficiency Test (PET), Physical Standard Test (PST), and Document Verification.",
                },
                {
                  q: "Is there negative marking in UKSSSC exams?",
                  a: "Yes, most UKSSSC exams have a negative marking of 0.25 marks per wrong answer. Check specific exam notification for confirmation.",
                },
                {
                  q: "How to prepare Uttarakhand GK for UKSSSC?",
                  a: "Focus on Uttarakhand's history from formation (2000), culture, geography (Char Dham, National Parks), rivers (Ganga, Yamuna), and current affairs from local news.",
                },
                {
                  q: "Can I attempt UKSSSC mock tests in Hindi?",
                  a: "Yes, CET TEST offers UKSSSC mock tests in both English and Hindi medium. You can choose your preferred language before starting the test.",
                },
                {
                  q: "What is the salary of UKSSSC Kanisth Sahayak (Junior Assistant)?",
                  a: "UKSSSC Kanisth Sahayak (Junior Assistant) salary ranges from ₹29,200 to ₹92,300 (Level 5 pay matrix) plus DA, HRA, medical allowances, and other benefits as per 7th Pay Commission.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-background rounded-lg p-5 border">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA Section ===== */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Crack Your UKSSSC Exam?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 50,000+ Uttarakhand aspirants and start your free preparation
              today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="gap-2 cursor-pointer">
                  Start Practicing for Free
                </Button>
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/20 cursor-pointer"
                >
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
  );
}