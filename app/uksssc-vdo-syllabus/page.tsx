"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    BookOpen,
    Brain,
    Calculator,
    Globe,
    Languages,
    ChevronRight,
    Sparkles,
    FileText,
    Target,
    Clock,
    Award,
    CheckCircle2,
    ChevronDown,
    HelpCircle,
    Shield,
    Network,
    Lock,
    TrendingUp,
    Scale,
    History,
    MapPin,
    Lightbulb,
    PenTool,
    BarChart3,
    AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UKSSSCVDOSyllabusPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "What is the full syllabus for UKSSSC VDO exam?",
            answer: "The UKSSSC VDO (Village Development Officer) syllabus includes 4 main subjects: General Knowledge & Current Affairs, General Hindi, Reasoning Ability, and Numerical Ability. Each subject covers specific topics as detailed in the syllabus breakdown above. Note that Computer Knowledge is NOT included in VDO syllabus."
        },
        {
            question: "How many questions are asked from each subject in UK VDO exam?",
            answer: "As per previous year patterns: General Knowledge & Current Affairs (30-35 questions), General Hindi (20-25 questions), Reasoning Ability (15-20 questions), Numerical Ability (15-20 questions). Total 100 questions typically."
        },
        {
            question: "Is there negative marking in UKSSSC VDO exam?",
            answer: "Yes, there is negative marking of 1/4th (0.25) mark for each wrong answer in most UKSSSC examinations. Always check the latest official notification for exact pattern."
        },
        {
            question: "What is the duration of UK VDO exam?",
            answer: "The written examination is typically conducted for 1.5 hours (90 minutes) with objective-type multiple choice questions."
        },
        {
            question: "Where can I download UKSSSC VDO syllabus PDF?",
            answer: "You can download the official syllabus PDF from UKSSSC's official website: sssc.uk.gov.in. The direct PDF link is also provided in the button above."
        },
        {
            question: "Which topics are most important for UK VDO General Knowledge section?",
            answer: "Most important topics: Current Affairs (last 6 months), Uttarakhand GK (History, Culture, Geography, Tourism, Panchayati Raj), Indian Polity, Environment, and General Science."
        },
        {
            question: "Is the UK VDO exam conducted online or offline?",
            answer: "UKSSSC VDO exam is typically conducted in offline (OMR-based) mode at various centers across Uttarakhand."
        },
        {
            question: "Can I take the UK VDO exam in Hindi language?",
            answer: "Yes, the question paper is usually bilingual (Hindi and English) for all sections except the language papers."
        },
        {
            question: "What is the educational qualification for UK VDO?",
            answer: "Candidates must have a Bachelor's degree from a recognized university. Knowledge of Hindi language and computer basics (for documentation) is also required."
        },
        {
            question: "What is the passing marks for UK VDO?",
            answer: "The passing marks vary each year based on difficulty level and number of candidates. Generally, it ranges from 35-40% for General category, with relaxation for reserved categories as per UKSSSC norms."
        }
    ]

    // Subject icons mapping
    const subjectIcons = {
        gk: <Globe className="w-5 h-5 text-white" />,
        hindi: <Languages className="w-5 h-5 text-white" />,
        reasoning: <Brain className="w-5 h-5 text-white" />,
        maths: <Calculator className="w-5 h-5 text-white" />
    }

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <Shield className="w-4 h-4" />
                        Official Syllabus - Uttarakhand Subordinate Service Selection Commission
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        UKSSSC VDO
                        <span className="text-primary"> Village Development Officer</span> Complete Syllabus
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete breakdown of <strong className="text-foreground">all 4 subjects</strong> for
                        <strong className="text-foreground"> Uttarakhand VDO</strong> recruitment 2025-26
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span>4 Main Subjects</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-primary" />
                            <span>100 Marks</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>1.5 Hours</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="cursor-pointer gap-2">
                                Start Free Mock Test <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="https://sssc.uk.gov.in/" target="_blank">
                            <Button variant="outline" size="lg" className="cursor-pointer">
                                Official Website
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Exam Pattern Overview */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-primary/20">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold">Exam Pattern & Complete Syllabus</h2>
                            </div>

                            <Link href="https://www.adda247.com/jobs/wp-content/uploads/sites/22/2024/11/04130458/Uttarakhand-Police-Constable-Syllabus-2024.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="default" size="lg" className="gap-2 bg-primary hover:bg-primary/90 cursor-pointer">
                                    <FileText className="w-4 h-4" />
                                    Download Official Syllabus PDF
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                            {[
                                { label: "Total Sections", value: "4", color: "from-blue-500 to-blue-600" },
                                { label: "Total Questions", value: "100", color: "from-green-500 to-green-600" },
                                { label: "Duration", value: "1.5 Hours", color: "from-orange-500 to-orange-600" },
                                { label: "Negative Marking", value: "-0.25", color: "from-red-500 to-red-600" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 text-center border shadow-sm">
                                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                    <p className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Important Note for VDO */}
                        <div className="mt-5 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                            <p className="text-sm text-amber-800 dark:text-amber-300 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                <strong>Note:</strong> Unlike Police Constable exam, <strong>Computer Knowledge is NOT included</strong> in the UKSSSC VDO syllabus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete Syllabus Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Complete <span className="text-primary">Syllabus</span> Breakdown
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Topic-wise complete syllabus for UKSSSC VDO (Village Development Officer) examination as per latest official notification
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* ==================== SUBJECT 1: GENERAL KNOWLEDGE & CURRENT AFFAIRS ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.gk}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">1. General Knowledge & Current Affairs</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">30-35 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Indian History & Culture
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Ancient India (Indus Valley, Vedic Period, Mauryan, Gupta)",
                                                "Medieval India (Delhi Sultanate, Mughal Empire, Bhakti Movement)",
                                                "Modern India (British Rule, Revolt of 1857, Freedom Struggle)",
                                                "Indian National Movement (Gandhian Era, Partition of India)",
                                                "Post-Independence India (Integration of States, Constitution)",
                                                "Indian Art, Architecture & Literature",
                                                "Important Historical Events & Personalities",
                                                "Indian Cultural Heritage (Dance, Music, Festivals)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Indian Polity & Constitution
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Preamble of Indian Constitution",
                                                "Fundamental Rights & Duties",
                                                "Directive Principles of State Policy",
                                                "President, Prime Minister & Council of Ministers",
                                                "Parliament (Lok Sabha, Rajya Sabha)",
                                                "Supreme Court & High Courts",
                                                "Governor, Chief Minister & State Legislature",
                                                "Panchayati Raj & Local Governance (Important for VDO)",
                                                "Constitutional & Non-Constitutional Bodies",
                                                "Election Commission of India",
                                                "Important Amendments (42nd, 44th, 73rd, 74th, 86th)",
                                                "Emergency Provisions",
                                                "Centre-State Relations",
                                                "Judicial Review & Public Interest Litigation (PIL)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Indian Economy
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Basic Economic Concepts (GDP, GNP, NNP, Per Capita Income)",
                                                "Five Year Plans & NITI Aayog",
                                                "Agriculture & Allied Sectors",
                                                "Industry & Manufacturing (MSME, PSUs)",
                                                "Banking & Financial Institutions (RBI, SEBI)",
                                                "Monetary & Fiscal Policy",
                                                "Budget & Taxation (Direct & Indirect Taxes, GST)",
                                                "Inflation & Poverty",
                                                "Unemployment & Employment Schemes",
                                                "Foreign Trade & Balance of Payments",
                                                "International Organizations (WTO, IMF, World Bank)",
                                                "Economic Reforms (LPG - Liberalization, Privatization, Globalization)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Indian & World Geography
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Physical Geography (Earth Structure, Rocks, Mountains, Rivers)",
                                                "Climate & Weather (Monsoon, Seasons, Cyclones)",
                                                "Indian Geography (Physiographic Divisions - Himalayas, Plains, Desert)",
                                                "River Systems (Ganga, Brahmaputra, Indus, Godavari, Krishna)",
                                                "Agriculture & Cropping Patterns",
                                                "Mineral & Power Resources (Coal, Petroleum, Nuclear)",
                                                "Transportation & Communication Networks",
                                                "World Geography (Continents, Oceans, Important Countries)",
                                                "Environmental Ecology & Biodiversity",
                                                "Climate Change & Global Warming",
                                                "National Parks & Wildlife Sanctuaries in India",
                                                "Disaster Management (Flood, Earthquake, Cyclone)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            General Science
                                        </h4>
                                        <div className="grid md:grid-cols-3 gap-3 pl-4">
                                            <div>
                                                <p className="text-sm font-medium text-green-600 mb-1">Physics</p>
                                                {["Laws of Motion", "Work, Energy & Power", "Light & Optics", "Sound & Waves", "Electricity & Magnetism", "Nuclear Physics", "Units & Measurements"].map((topic, idx) => (
                                                    <div key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-green-400 mt-1" /><span className="text-xs text-muted-foreground">{topic}</span></div>
                                                ))}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-green-600 mb-1">Chemistry</p>
                                                {["Atoms & Molecules", "Chemical Reactions", "Acids, Bases & Salts", "Periodic Table", "Metals & Non-Metals", "Carbon & Its Compounds", "Environmental Chemistry"].map((topic, idx) => (
                                                    <div key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-green-400 mt-1" /><span className="text-xs text-muted-foreground">{topic}</span></div>
                                                ))}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-green-600 mb-1">Biology</p>
                                                {["Cell Structure & Function", "Human Body Systems", "Plant & Animal Kingdom", "Genetics & Evolution", "Diseases & Immunity", "Nutrition & Health", "Biotechnology Basics"].map((topic, idx) => (
                                                    <div key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-green-400 mt-1" /><span className="text-xs text-muted-foreground">{topic}</span></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Current Affairs (Last 6 Months)
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "National & International News",
                                                "Government Schemes & Policies",
                                                "Important Appointments & Resignations",
                                                "Awards & Honors (Padma, Nobel, Oscar, Sports)",
                                                "Sports Events & Tournaments",
                                                "Summits & Conferences",
                                                "Defense & Space News (ISRO, DRDO)",
                                                "Science & Technology Developments",
                                                "Economic & Business News",
                                                "Important Days & Events",
                                                "Books & Authors",
                                                "Obituaries (Famous Personalities)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Uttarakhand Specific GK (Important for VDO)
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Uttarakhand History (Formation as a State - 9th November 2000)",
                                                "Uttarakhand Culture, Folk Music & Dance (Garhwali, Kumaoni)",
                                                "Uttarakhand Geography (Himalayas, Rivers - Ganga, Yamuna)",
                                                "Char Dham Yatra (Badrinath, Kedarnath, Gangotri, Yamunotri)",
                                                "Famous Temples & Pilgrimage Sites (Haridwar, Rishikesh, Hemkund)",
                                                "National Parks & Wildlife (Jim Corbett, Rajaji, Valley of Flowers)",
                                                "Uttarakhand Economy (Tourism, Agriculture, Hydropower)",
                                                "Uttarakhand Government & Politics",
                                                "Uttarakhand Schemes & Policies (Especially Rural Development)",
                                                "Famous Personalities of Uttarakhand",
                                                "Uttarakhand Sports & Achievements",
                                                "Important Days celebrated in Uttarakhand",
                                                "Panchayati Raj System in Uttarakhand",
                                                "Rural Development Programs in Uttarakhand"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ==================== SUBJECT 2: GENERAL HINDI ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.hindi}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">2. General Hindi (सामान्य हिन्दी)</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">20-25 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                            व्याकरण (Grammar)
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "वर्णमाला (स्वर, व्यंजन, मात्राएँ)",
                                                "संधि (स्वर, व्यंजन, विसर्ग)",
                                                "शब्द विचार (तत्सम, तद्भव, देशज, विदेशी)",
                                                "संज्ञा, सर्वनाम, विशेषण, क्रिया",
                                                "लिंग, वचन, कारक, काल",
                                                "समास (तत्पुरुष, द्वंद्व, कर्मधारय, बहुव्रीहि)",
                                                "उपसर्ग एवं प्रत्यय",
                                                "पर्यायवाची शब्द (समानार्थक)",
                                                "विलोम शब्द (विपरीतार्थक)",
                                                "अनेकार्थी शब्द",
                                                "शब्दों के लिए एक शब्द (अनेक शब्दों के लिए एक शब्द)",
                                                "मुहावरे एवं लोकोक्तियाँ",
                                                "वाक्य शुद्धिकरण (अशुद्धियों का संशोधन)",
                                                "विराम चिन्ह (Punctuation Marks)",
                                                "रस एवं छंद (भाव एवं लय)",
                                                "अलंकार (अनुप्रास, उपमा, रूपक, यमक, श्लेष)",
                                                "निपात एवं अविकारी शब्द",
                                                "पद एवं पदबंध"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                            रचना एवं लेखन (Composition & Writing)
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "अपठित गद्यांश (Unseen Passage)",
                                                "अपठित पद्यांश (Unseen Poem)",
                                                "निबंध लेखन (Essay Writing - 200-250 शब्द)",
                                                "पत्र लेखन (औपचारिक एवं अनौपचारिक)",
                                                "अनुच्छेद लेखन",
                                                "संवाद लेखन",
                                                "सार लेखन (Summary Writing)",
                                                "तार/संदेश लेखन",
                                                "विज्ञापन लेखन",
                                                "रिपोर्ट लेखन"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                            साहित्य एवं रचनाकार (Literature & Authors)
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "प्रमुख हिन्दी साहित्यकार एवं उनकी रचनाएँ",
                                                "भारतेंदु हरिश्चंद्र, प्रेमचंद, जयशंकर प्रसाद",
                                                "महादेवी वर्मा, सुमित्रानंदन पंत, सूर्यकांत त्रिपाठी 'निराला'",
                                                "रामधारी सिंह 'दिनकर', हरिवंश राय बच्चन",
                                                "फणीश्वर नाथ 'रेणु', मन्नू भंडारी, मोहन राकेश",
                                                "उत्तराखंड के प्रमुख हिन्दी साहित्यकार"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ==================== SUBJECT 3: REASONING ABILITY ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.reasoning}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">3. Reasoning Ability</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">15-20 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                            Verbal Reasoning
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "अनुरूपता/समानता (Analogies - Semantic & Figural)",
                                                "वर्गीकरण (Classification - Semantic & Figural)",
                                                "श्रेणी/क्रम (Series - Number, Figural, Semantic, Letter)",
                                                "कोडिंग-डिकोडिंग (Coding-Decoding - Letter, Number, Symbol)",
                                                "रक्त संबंध (Blood Relations - Family Tree)",
                                                "दिशा एवं दूरी (Direction Sense Test)",
                                                "लॉजिकल वेन आरेख (Logical Venn Diagrams)",
                                                "न्याय/तर्क (Syllogism - 2/3/4 Statements)",
                                                "पहेली एवं बैठक व्यवस्था (Puzzle & Seating Arrangement)",
                                                "आंकड़ा पर्याप्तता (Data Sufficiency)",
                                                "कथन एवं निष्कर्ष (Statement & Conclusions)",
                                                "कथन एवं धारणाएँ (Statement & Assumptions)",
                                                "कथन एवं कार्यवाही (Statement & Course of Action)",
                                                "कथन एवं तर्क (Statement & Arguments)",
                                                "इनपुट-आउटपुट (Input-Output - Machine/Word/Number)",
                                                "तार्किक शब्द क्रम (Logical Order of Words)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                            Non-Verbal Reasoning
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "दर्पण एवं जल प्रतिबिंब (Mirror & Water Images)",
                                                "कागज मोड़ना एवं काटना (Paper Folding & Cutting)",
                                                "अंतर्निहित आकृतियाँ (Embedded Figures)",
                                                "आकृतियों का पूर्णीकरण (Figure Completion)",
                                                "आकृति श्रेणी (Figure Series)",
                                                "आकृति मैट्रिक्स (Figure Matrix)",
                                                "समान आकृतियाँ (Similar Figures)",
                                                "असमान आकृतियाँ (Odd One Out Figures)",
                                                "घन एवं पासा (Cube & Dice - Open/Closed)",
                                                "वेन्न आरेख (Venn Diagrams - Logical)",
                                                "समस्या समाधान (Problem Solving)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                            Analytical Reasoning
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "अंकगणितीय तर्क (Arithmetical Reasoning)",
                                                "वंश वृक्ष (Family Tree/Blood Relation Problems)",
                                                "कैलेंडर (Calendar - Days, Dates, Years)",
                                                "घड़ी (Clock - Angle, Time Mirror, Reflection)",
                                                "तार्किक आरेख (Logical Diagrams - Syllogisms)",
                                                "पंचांग (Calendar & Clock Problems)",
                                                "अल्फ़ान्यूमेरिक श्रेणी (Alphanumeric Series)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ==================== SUBJECT 4: NUMERICAL ABILITY ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.maths}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">4. Numerical Ability (Mathematics)</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">15-20 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                            Arithmetic (Basic Calculations)
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "संख्या प्रणाली (Number System - Integers, Fractions, Decimals)",
                                                "सरलीकरण (Simplification - BODMAS Rule)",
                                                "ल.स.प. एवं म.स.प. (LCM & HCF)",
                                                "अनुपात एवं समानुपात (Ratio & Proportion)",
                                                "प्रतिशत (Percentage - Calculation, Increase/Decrease)",
                                                "लाभ एवं हानि (Profit & Loss - CP, SP, Marked Price)",
                                                "बट्टा/छूट (Discount - Successive Discount)",
                                                "साधारण एवं चक्रवृद्धि ब्याज (Simple & Compound Interest)",
                                                "औसत (Average - Weighted Average, Age Problems)",
                                                "समय एवं कार्य (Time & Work - Efficiency, Wages)",
                                                "नल एवं हौज (Pipe & Cistern - Inlet/Outlet)",
                                                "समय, चाल एवं दूरी (Time, Speed & Distance - Average Speed)",
                                                "रेलगाड़ी (Train - Platform, Relative Speed)",
                                                "नाव एवं धारा (Boat & Stream - Upstream/Downstream)",
                                                "मिश्रण एवं पृथ्थीकरण (Mixture & Allegation)",
                                                "साझेदारी (Partnership - Capital, Time Ratio)",
                                                "क्षेत्रमिति (Mensuration - 2D & 3D Shapes)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                            Algebra & Geometry
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "बीजगणित (Algebra - Basic Algebraic Identities)",
                                                "रेखीय एवं द्विघात समीकरण (Linear & Quadratic Equations)",
                                                "ज्यामिति (Geometry - Lines, Angles, Triangles)",
                                                "त्रिभुज (Triangles - Pythagoras Theorem, Congruence)",
                                                "वृत्त (Circle - Radius, Diameter, Chord, Arc)",
                                                "चतुर्भुज (Quadrilaterals - Square, Rectangle, Rhombus)",
                                                "बहुभुज (Polygons - Interior/Exterior Angles)",
                                                "त्रिकोणमिति (Trigonometry - Sin, Cos, Tan Values)",
                                                "घातांक एवं करणी (Exponents & Surds)",
                                                "क्षेत्रफल एवं आयतन (Area & Volume - Cube, Cuboid, Cylinder, Cone, Sphere)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                            Data Interpretation
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "सारणी (Table - Read, Analyze, Calculate)",
                                                "बार ग्राफ (Bar Graph - Vertical/Horizontal/Stacked)",
                                                "रेखा ग्राफ (Line Graph - Single/Multiple Lines)",
                                                "पाई चार्ट (Pie Chart - Percentage/Angle Calculation)",
                                                "हिस्टोग्राम (Histogram - Frequency Distribution)",
                                                "डेटा विश्लेषण (Data Analysis - Mean, Median, Mode)",
                                                "प्रायिकता (Probability - Basic Events)",
                                                "डेटा तुलना (Data Comparison - Two Sets)"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Topics Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <Award className="w-4 h-4" />
                            Exam Focus
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Most Important Topics for UKSSSC VDO</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            High-weightage topics that you should prioritize in your preparation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { subject: "General Knowledge", topics: "Uttarakhand GK (Culture, History, Panchayati Raj), Current Affairs (6 months), Indian Polity", color: "green" },
                            { subject: "General Hindi", topics: "व्याकरण (Sandhi, Samas, Muhavare), पर्यायवाची/विलोम, वाक्य शुद्धिकरण", color: "orange" },
                            { subject: "Reasoning", topics: "Analogy, Coding-Decoding, Blood Relations, Syllogism, Series, Direction Sense", color: "purple" },
                            { subject: "Numerical Ability", topics: "Percentage, Profit-Loss, Average, Ratio, Simplification, Data Interpretation", color: "red" }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-card rounded-xl p-5 border-l-4 border-${item.color}-500 shadow-sm hover:shadow-md transition-all`}>
                                <h3 className={`font-bold text-lg mb-2 text-${item.color}-600`}>{item.subject}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.topics}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation Tips */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                                <Target className="w-4 h-4" />
                                Strategy Guide
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Smart Preparation Tips for UK VDO Exam</h2>
                            <p className="text-muted-foreground mb-6">
                                Follow these proven strategies to maximize your score in UKSSSC VDO examination
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Focus heavily on Uttarakhand GK — 8-10 questions expected from state-specific topics including Panchayati Raj",
                                    "Master Percentage, Profit-Loss & Average for Numerical Ability section",
                                    "Learn Hindi grammar rules (Sandhi, Samas, Muhavare) thoroughly",
                                    "Solve 20-25 Reasoning questions daily to improve speed",
                                    "Attempt full-length mock tests regularly for time management",
                                    "Review last 6 months current affairs (National & International)",
                                    "Practice OMR sheet filling to avoid negative marking",
                                    "Read about rural development schemes and Panchayati Raj system"
                                ].map((tip, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <Clock className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Ready to Start Your Preparation?</h3>
                            <p className="text-muted-foreground mb-6">
                                Access free mock tests designed exactly as per latest UKSSSC VDO pattern
                            </p>
                            <Link href="/signup">
                                <Button size="lg" className="gap-2 cursor-pointer">
                                    Start Free Mock Test <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Common <span className="text-primary">Questions</span> About UK VDO Exam
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find answers to the most commonly asked questions about UKSSSC VDO exam pattern, syllabus, and preparation
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-muted/30 transition-colors"
                                >
                                    <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t">
                                        <p className="text-muted-foreground leading-relaxed pt-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-muted-foreground mb-4">
                            Still have questions? We're here to help!
                        </p>
                        <Link href="/contact">
                            <Button variant="outline" className="gap-2">
                                Contact Support <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">UKSSSC VDO Complete Syllabus 2025-26 - All Subjects</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides the complete syllabus for Uttarakhand VDO (Village Development Officer) exam conducted by Uttarakhand Subordinate Service Selection Commission (UKSSSC).
                        The syllabus includes 4 main subjects: General Knowledge & Current Affairs (including Indian History, Polity, Economy, Geography, Science, and Uttarakhand-specific GK with focus on Panchayati Raj),
                        General Hindi (Grammar, Composition, Literature), Reasoning Ability (Verbal & Non-Verbal), and Numerical Ability (Arithmetic, Algebra, Geometry, Data Interpretation).
                        <strong>Note: Computer Knowledge is NOT included in VDO syllabus.</strong> Prepare effectively with our free mock tests, previous year papers and topic-wise practice sets.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2025-26 UK VDO TEST | All exam names and syllabi are property of their respective owners. Syllabus source: UKSSSC Official Notification.
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}