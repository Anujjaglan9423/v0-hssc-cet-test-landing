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
    Code2,
    Languages,
    ChevronRight,
    Sparkles,
    FileText,
    Target,
    Clock,
    Award,
    CheckCircle2,
    ChevronDown,
    HelpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HaryanaCETGroupCSyllabusPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "What is the full syllabus for Haryana CET Group C exam?",
            answer: "The Haryana CET Group C syllabus includes 6 main subjects: General Awareness (including Haryana GK), General Reasoning, Quantitative Ability, Computer Knowledge, English Language, and Hindi Language. Each subject covers specific topics as detailed in the syllabus breakdown above."
        },
        {
            question: "How many questions are asked from each subject in Haryana CET?",
            answer: "As per the latest exam pattern: General Awareness (20 Questions + 25 Haryana GK), General Reasoning (10 Questions), Quantitative Ability (15 Questions), Computer Knowledge (10 Questions), English Language (10 Questions), and Hindi Language (10 Questions). Total 100 questions for 100 marks."
        },
        {
            question: "Is there negative marking in Haryana CET Group C exam?",
            answer: "Yes, there is a negative marking of 1 mark for each skip or unattempt any question in Haryana CET Group C examination. It's recommended to skip questions you're unsure about rather than guessing."
        },
        {
            question: "What is the duration of Haryana CET Group C exam?",
            answer: "The Haryana CET Group C exam is conducted for a duration of 90 minutes (1 hour 30 minutes) to attempt 100 questions."
        },
        {
            question: "Where can I download Haryana CET Group C syllabus PDF?",
            answer: "You can find the complete Haryana CET Group C syllabus on this page with detailed topic-wise breakdown. The official syllabus PDF can also be downloaded from the official HSSC website: hssc.gov.in"
        },
        {
            question: "Which topics are most important for Haryana CET General Awareness section?",
            answer: "The most important topics for General Awareness are: Current Affairs (last 6 months), Haryana GK (History, Culture, Geography of Haryana), Indian Polity, Environment & Ecology, and General Science."
        },
        {
            question: "Is the Haryana CET Group C exam conducted online or offline?",
            answer: "Haryana CET Group C exam is conducted in offline mode (OMR Based Test) at various exam centers across Haryana."
        },
        {
            question: "Can I take the Haryana CET exam in Hindi language?",
            answer: "Yes, the Haryana CET Group C exam is bilingual. You can choose to attempt the exam in either Hindi or English language, except for the language papers."
        },
        {
            question: "How can I prepare for Haryana CET at home?",
            answer: "You can prepare for Haryana CET at home by following the complete syllabus above, solving previous year papers, taking free mock tests available on this platform, and focusing on high-weightage topics like Current Affairs, Reasoning, and Quantitative Ability."
        },
        {
            question: "What is the passing marks for Haryana CET Group C?",
            answer: "The passing marks for Haryana CET Group C vary each year based on difficulty level and number of candidates. Generally, it ranges from 35-40 marks for General category, with relaxation for reserved categories as per HSSC norms."
        }
    ]

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">

                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        Official Syllabus - Haryana Staff Selection Commission
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Haryana CET
                        <span className="text-primary"> Group C</span> Syllabus
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete breakdown of subjects, topics, and exam pattern for
                        <strong className="text-foreground"> HSSC Group C (CET)</strong> recruitment 2026-26
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span>6 Main Subjects</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-primary" />
                            <span>100 Marks</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>90 Minutes</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="cursor-pointer gap-2">
                                Start Free Mock Test <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/mock-test">
                            <Button variant="outline" size="lg" className="cursor-pointer">
                                View All Exams
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
                                <h2 className="text-2xl font-bold">Exam Pattern & Official Syllabus</h2>
                            </div>

                            {/* Official Syllabus Download Button - ADDED HERE */}
                            <Link href="https://hssc.gov.in/examsyllabus" target="_blank" rel="noopener noreferrer">
                                <Button variant="default" size="lg" className="gap-2 bg-primary hover:bg-primary/90 cursor-pointer">
                                    <FileText className="w-4 h-4" />
                                    Download Official Syllabus (HSSC)
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                            {[
                                { label: "Total Questions", value: "100", color: "from-blue-500 to-blue-600" },
                                { label: "Total Marks", value: "100", color: "from-green-500 to-green-600" },
                                { label: "Duration", value: "90 Minutes", color: "from-orange-500 to-orange-600" },
                                { label: "Negative Marking", value: "Skip: −1", color: "from-red-500 to-red-600" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-card rounded-xl p-4 text-center border shadow-sm">
                                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                    <p className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Syllabus Table Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Detailed <span className="text-primary">Syllabus</span> Breakdown
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Complete topic-wise syllabus for Haryana CET Group C examination as per latest HSSC notification
                        </p>
                    </div>

                    {/* Syllabus Cards */}
                    <div className="space-y-6">

                        {/* 1. General Awareness */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Globe className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">General Awareness</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">20 Questions + 25 Haryana GK</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Indian History & Freedom Struggle",
                                        "Indian Polity & Constitution",
                                        "Indian Art, Culture & Heritage",
                                        "Indian Economy & Budget",
                                        "Geography (India & World)",
                                        "Environmental Studies & Ecology",
                                        "General Science (Physics, Chemistry, Biology)",
                                        "Current Affairs (National & International)",
                                        "National/International Organizations",
                                        "Sports, Awards & Honors",
                                        "Books & Authors",
                                        "Important Days & Events"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2. Reasoning */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Brain className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">General Reasoning</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Verbal & Non-Verbal Reasoning",
                                        "Analogies (Semantic & Figural)",
                                        "Classification (Semantic & Figural)",
                                        "Series (Number, Figural, Semantic)",
                                        "Coding-Decoding",
                                        "Blood Relations",
                                        "Direction Sense Test",
                                        "Logical Venn Diagrams",
                                        "Syllogism",
                                        "Puzzle & Seating Arrangement",
                                        "Data Sufficiency",
                                        "Statement & Conclusions",
                                        "Statement & Assumptions",
                                        "Input-Output",
                                        "Paper Folding & Cutting",
                                        "Embedded Figures",
                                        "Mirror & Water Images",
                                        "Arithmetical Reasoning",
                                        "Problem Solving & Decision Making"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3. Quantitative Ability */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Calculator className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Quantitative Ability</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">15 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Number System & Simplification",
                                        "LCM & HCF",
                                        "Decimals & Fractions",
                                        "Ratio & Proportion",
                                        "Percentage",
                                        "Profit & Loss",
                                        "Discount",
                                        "Simple & Compound Interest",
                                        "Average",
                                        "Time & Work",
                                        "Pipe & Cistern",
                                        "Time, Speed & Distance",
                                        "Boat & Stream",
                                        "Mixture & Allegation",
                                        "Partnership",
                                        "Mensuration (2D & 3D)",
                                        "Algebra (Basic)",
                                        "Trigonometry (Basic)",
                                        "Geometry (Lines, Angles, Triangles)",
                                        "Data Interpretation (Tables, Graphs, Charts)"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4. Computer Knowledge */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Code2 className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Computer Knowledge</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Computer Fundamentals & Organization",
                                        "CPU, Memory & Storage Devices",
                                        "Input/Output Devices",
                                        "Computer Memory (Primary & Secondary)",
                                        "Windows OS Basics",
                                        "Microsoft Word",
                                        "Microsoft Excel (Formulas, Charts)",
                                        "Microsoft PowerPoint",
                                        "Keyboard Shortcuts",
                                        "Internet & Web Browsing",
                                        "Email Management",
                                        "File Downloading/Uploading",
                                        "Computer Security & Virus",
                                        "Networking Basics",
                                        "PORTs & Connections"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 5. English Language */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Languages className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">English Language</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Spotting Errors",
                                        "Fill in the Blanks",
                                        "Synonyms & Antonyms",
                                        "Spellings Correction",
                                        "Idioms & Phrases",
                                        "One Word Substitution",
                                        "Sentence Improvement",
                                        "Active & Passive Voice",
                                        "Direct & Indirect Speech",
                                        "Para Jumbles",
                                        "Cloze Test",
                                        "Reading Comprehension",
                                        "Tenses",
                                        "Prepositions",
                                        "Articles & Determiners"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 6. Hindi Language */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-rose-600 to-rose-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Languages className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">हिन्दी भाषा (Hindi Language)</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "वर्ण, स्वर, व्यंजन",
                                        "संधि (स्वर, व्यंजन, विसर्ग)",
                                        "शब्द विचार (तत्सम, तद्भव, देशज)",
                                        "समास (तत्पुरुष, द्वंद्व, कर्मधारय)",
                                        "उपसर्ग एवं प्रत्यय",
                                        "पर्यायवाची शब्द",
                                        "विलोम शब्द",
                                        "अनेकार्थी शब्द",
                                        "मुहावरे एवं लोकोक्तियाँ",
                                        "वाक्य शुद्धिकरण",
                                        "विराम चिन्ह",
                                        "शब्दों के लिए एक शब्द",
                                        "अलंकार (अनुप्रास, उपमा, रूपक)",
                                        "निपात एवं अविकारी शब्द",
                                        "पद एवं पदबंध"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
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
                        <h2 className="text-3xl font-bold mb-4">Most Important Topics for CET</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            High-weightage topics that you should prioritize in your preparation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { subject: "General Awareness", topics: "Current Affairs (6 months), Haryana GK, Indian Polity, Environment", color: "blue" },
                            { subject: "Reasoning", topics: "Analogies, Coding-Decoding, Blood Relations, Syllogism, Series", color: "purple" },
                            { subject: "Quantitative", topics: "Percentage, Profit-Loss, Average, Ratio, Simplification", color: "green" },
                            { subject: "Computer", topics: "MS Office, Internet, Shortcuts, Hardware Basics", color: "orange" },
                            { subject: "English", topics: "Comprehension, Error Detection, Fillers, Synonyms/Antonyms", color: "cyan" },
                            { subject: "Hindi", topics: "व्याकरण, मुहावरे, संधि-समास, पर्यायवाची/विलोम", color: "rose" }
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
                            <h2 className="text-3xl font-bold mb-4">Smart Preparation Tips for CET 2026</h2>
                            <p className="text-muted-foreground mb-6">
                                Follow these proven strategies to maximize your score in Haryana CET Group C examination
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Focus on Current Affairs of last 6 months — 5-6 questions expected",
                                    "Practice 20-25 Reasoning questions daily to improve speed",
                                    "Master Simplification, Percentage & Profit-Loss for Quant section",
                                    "Learn MS Office shortcuts — frequently asked in Computer section",
                                    "Solve previous year papers to understand exam pattern",
                                    "Attempt full-length mock tests regularly for time management"
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
                                Access free mock tests designed exactly as per latest CET pattern
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

            {/* FAQ Section - NEW */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Common <span className="text-primary">Questions</span> About Haryana CET
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find answers to the most commonly asked questions about Haryana CET Group C exam pattern, syllabus, and preparation
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

                    {/* Additional Help */}
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
                    <h2 className="text-xl font-semibold mb-3">HSSC Group C Syllabus 2026 - Complete Guide</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides the complete syllabus for Haryana CET (Common Eligibility Test) for Group C posts conducted by
                        Haryana Staff Selection Commission (HSSC). The syllabus includes General Awareness, Reasoning, Quantitative Ability,
                        Computer Knowledge, English Language and Hindi Language as per the latest official notification. Prepare effectively
                        with our free mock tests, previous year papers and topic-wise practice sets.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | All exam names and syllabi are property of their respective owners.
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}