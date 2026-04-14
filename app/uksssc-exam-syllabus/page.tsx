"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    BookOpen,
    ChevronRight,
    Sparkles,
    Target,
    Clock,
    Award,
    Shield,
    Users,
    FileText,
    GraduationCap,
    TrendingUp,
    CheckCircle2,
    MapPin,
    Calendar,
    Brain,
    Calculator,
    Globe,
    Languages,
    Eye,
    ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Define TypeScript interfaces
interface ExamCard {
    id: string
    name: string
    shortName: string
    description: string
    features: string[]
    totalQuestions: number | string
    duration: string
    link: string
    icon: React.ReactNode
    subjects: string[]
    color: string
    badgeColor: string
}

export default function UKSSSCExamSyllabusPage() {
    const [showAllExams, setShowAllExams] = useState(false)

    // Exam cards data
    const examCards: ExamCard[] = [
        {
            id: "police-constable",
            name: "UKSSSC Police Constable",
            shortName: "Police Constable",
            description: "Complete selection process and syllabus for Uttarakhand Police Constable recruitment. Includes 5 subjects: Computer Knowledge, GK, Hindi, Reasoning, and Numerical Ability.",
            features: [
                "5 Main Subjects",
                "100 Questions",
                "90 Minutes Duration",
                "Negative Marking: -0.25",
                "Computer Knowledge Included"
            ],
            totalQuestions: 100,
            duration: "90 Minutes",
            link: "/uksssc-police-constable-syllabus",
            icon: <Shield className="w-6 h-6" />,
            subjects: ["Computer Knowledge", "GK & Current Affairs", "General Hindi", "Reasoning", "Numerical Ability"],
            color: "from-blue-600 to-blue-700",
            badgeColor: "blue"
        },
        {
            id: "vdo",
            name: "UKSSSC VDO",
            shortName: "Village Development Officer",
            description: "Complete syllabus for Uttarakhand VDO (Village Development Officer) recruitment. Focuses on 4 subjects with emphasis on Uttarakhand GK. Computer Knowledge NOT included.",
            features: [
                "4 Main Subjects",
                "100 Questions",
                "1.5 Hours Duration",
                "Negative Marking: -0.25",
                "No Computer Section"
            ],
            totalQuestions: "100",
            duration: "1.5 Hours",
            link: "/uksssc-vdo-syllabus",
            icon: <Users className="w-6 h-6" />,
            subjects: ["GK & Current Affairs", "General Hindi", "Reasoning", "Numerical Ability"],
            color: "from-green-600 to-green-700",
            badgeColor: "green"
        }
    ]

    // Statistics data
    const stats = [
        { label: "Exam Categories", value: "2", icon: <BookOpen className="w-4 h-4" /> },
        { label: "Total Subjects", value: "9", icon: <GraduationCap className="w-4 h-4" /> },
        { label: "Practice Tests", value: "25+", icon: <Target className="w-4 h-4" /> },
        { label: "Updated For", value: "2025-26", icon: <Calendar className="w-4 h-4" /> }
    ]

    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        Uttarakhand Subordinate Service Selection Commission (UKSSSC) - Official Syllabi
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Uttarakhand Exam
                        <span className="text-primary"> Syllabus</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete syllabus guide for all Uttarakhand government examinations including
                        <strong className="text-foreground"> Police Constable, VDO, and other UKSSSC recruitment exams</strong>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                                {stat.icon}
                                <span>{stat.label}: <strong>{stat.value}</strong></span>
                            </div>
                        ))}
                    </div>

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

            {/* Introduction Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                        <Award className="w-4 h-4" />
                        Your Gateway to Uttarakhand Government Jobs
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Complete Syllabus Collection for UKSSSC Exams</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Uttarakhand Subordinate Service Selection Commission (UKSSSC) conducts various recruitment exams.
                        Below you'll find all exam syllabi organized by category. Click on any card to view complete syllabus details.
                    </p>
                </div>
            </section>

            {/* Exam Cards Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            All <span className="text-primary">UKSSSC Exam Categories</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Currently available syllabi for UKSSSC recruitment exams. More exams will be added soon.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {examCards.map((exam) => (
                            <Link href={exam.link} key={exam.id} className="block group">
                                <div className={`rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:border-primary/50`}>
                                    {/* Card Header */}
                                    <div className={`bg-gradient-to-r ${exam.color} p-5 md:p-6`}>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/20 rounded-xl">
                                                {exam.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-white">{exam.name}</h3>
                                                <p className="text-white/80 text-sm mt-1">{exam.shortName}</p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5 md:p-6">
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {exam.description}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exam.features.map((feature, fIdx) => (
                                                <span key={fIdx} className="text-xs bg-muted px-2 py-1 rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Subjects */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                                                <BookOpen className="w-3.5 h-3.5" />
                                                Subjects Covered:
                                            </h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exam.subjects.map((subject, sIdx) => (
                                                    <span key={sIdx} className={`text-xs px-2 py-0.5 rounded-full bg-${exam.badgeColor}-100 text-${exam.badgeColor}-700`}>
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Exam Details */}
                                        <div className="flex items-center justify-between pt-3 border-t text-sm text-muted-foreground">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1">
                                                    <Target className="w-3.5 h-3.5" />
                                                    {exam.totalQuestions} Qs
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {exam.duration}
                                                </span>
                                            </div>
                                            <span className="text-primary text-sm font-medium group-hover:underline">
                                                View Full Syllabus →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Coming Soon Section */}
                    <div className="mt-12 p-8 rounded-2xl border-2 border-dashed bg-muted/20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <Clock className="w-4 h-4" />
                            More Exams Coming Soon
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Additional UKSSSC Exam Syllabi</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            We are regularly adding new exam syllabi. Check back soon for more UKSSSC recruitment exams.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-4">
                            <span className="text-sm bg-card px-3 py-1 rounded-full border">Junior Assistant</span>
                            <span className="text-sm bg-card px-3 py-1 rounded-full border">Patwari</span>
                            <span className="text-sm bg-card px-3 py-1 rounded-full border">Forest Guard</span>
                            <span className="text-sm bg-card px-3 py-1 rounded-full border">Livestock Officer</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <TrendingUp className="w-4 h-4" />
                            Quick Comparison
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Police Constable vs VDO Syllabus</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Understand the key differences between these two major UKSSSC recruitment exams
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Police Constable Comparison Card */}
                        <div className="rounded-xl border bg-card p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-blue-600" />
                                <h3 className="font-bold text-lg">UKSSSC Police Constable</h3>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>5 Subjects</strong> including Computer Knowledge</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>100 Questions</strong> | <strong>90 Minutes</strong> duration</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Computer Knowledge: <strong>5 units</strong> (Basic Concepts, OS, MS Office, Internet, Cyber Security)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Physical standards required for selection</span>
                                </li>
                            </ul>
                        </div>

                        {/* VDO Comparison Card */}
                        <div className="rounded-xl border bg-card p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <Users className="w-5 h-5 text-green-600" />
                                <h3 className="font-bold text-lg">UKSSSC VDO</h3>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>4 Subjects</strong> - Computer Knowledge <strong>NOT included</strong></span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>100 Questions</strong> | <strong>1.5 Hours</strong> duration</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Focus on <strong>Uttarakhand GK</strong> (History, Culture, Panchayati Raj)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Bachelor's degree required | No physical test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preparation Tips Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                                <Target className="w-4 h-4" />
                                Strategy Guide
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Smart Preparation Tips for UKSSSC Exams</h2>
                            <p className="text-muted-foreground mb-6">
                                Follow these proven strategies to maximize your score in UKSSSC examinations
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Focus heavily on Uttarakhand GK — 8-10 questions expected from state-specific topics",
                                    "For Police Constable: Master Computer Knowledge basics (MS Office, Internet, Cyber Security)",
                                    "For VDO: No computer section, so allocate that time to GK and Hindi preparation",
                                    "Learn Hindi grammar rules (Sandhi, Samas, Muhavare) thoroughly for both exams",
                                    "Solve 20-25 Reasoning questions daily to improve speed",
                                    "Attempt full-length mock tests regularly for time management",
                                    "Review last 6 months current affairs (National & International)"
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
                                Access free mock tests designed exactly as per latest UKSSSC exam pattern
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
                            <BookOpen className="w-4 h-4" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Common <span className="text-primary">Questions</span> About UKSSSC Exams
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find answers to the most commonly asked questions about UKSSSC exam pattern, syllabus, and preparation
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "What is the difference between UKSSSC Police Constable and VDO syllabus?",
                                answer: "Police Constable syllabus includes 5 subjects: Computer Knowledge, GK, Hindi, Reasoning, and Numerical Ability. VDO syllabus has only 4 subjects (Computer Knowledge is NOT included) with greater focus on Uttarakhand GK and Panchayati Raj."
                            },
                            {
                                question: "Is Computer Knowledge included in UKSSSC VDO exam?",
                                answer: "No, Computer Knowledge is NOT included in the UKSSSC VDO syllabus. Unlike Police Constable exam, VDO focuses only on GK, Hindi, Reasoning, and Numerical Ability."
                            },
                            {
                                question: "What is the negative marking scheme for UKSSSC exams?",
                                answer: "Most UKSSSC examinations have negative marking of 1/4th (0.25) mark for each wrong answer. Always check the latest official notification for exact pattern."
                            },
                            {
                                question: "What is the duration of UKSSSC Police Constable exam?",
                                answer: "The written examination for Police Constable is typically conducted for 90 minutes (1.5 hours) with 100 objective-type multiple choice questions."
                            },
                            {
                                question: "What is the duration of UKSSSC VDO exam?",
                                answer: "The VDO written examination is typically conducted for 1.5 hours (90 minutes) with 100 objective-type multiple choice questions."
                            },
                            {
                                question: "Which topics are most important for Uttarakhand GK?",
                                answer: "Most important topics: Uttarakhand History (Formation as a State), Culture (Garhwali, Kumaoni), Geography (Himalayas, Rivers), Char Dham Yatra, National Parks (Jim Corbett, Rajaji), and Panchayati Raj system."
                            },
                            {
                                question: "Can I take UKSSSC exams in Hindi language?",
                                answer: "Yes, the question paper is usually bilingual (Hindi and English) for all sections except the language papers."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="rounded-xl border bg-card p-5">
                                <h3 className="font-semibold text-base md:text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">Complete UKSSSC Exam Syllabus Resource</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides comprehensive syllabus information for Uttarakhand government examinations conducted by
                        Uttarakhand Subordinate Service Selection Commission (UKSSSC), including Police Constable and VDO (Village Development Officer).
                        All syllabi are based on official UKSSSC notifications and previous year exam patterns.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2025-26 UKSSSC TEST | All exam names and syllabi are property of their respective owners.
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}