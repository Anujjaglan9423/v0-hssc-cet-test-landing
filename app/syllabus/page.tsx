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
    Building2,
    Mountain,
    Users,
    FileText,
    GraduationCap,
    TrendingUp,
    CheckCircle2,
    Calendar,
    HelpCircle,
    BarChart3,
    Trophy,
    Shield,
    Globe,
    Brain,
    Calculator,
    Languages,
    ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgencyCard {
    id: string
    name: string
    fullName: string
    description: string
    established: string
    headquarters: string
    officialWebsite: string
    features: string[]
    examPattern: {
        totalQuestions: number
        duration: string
        negativeMarking: string
        language: string
    }
    popularExams: string[]
    syllabusLink: string
    icon: React.ReactNode
    color: string
    bgGradient: string
}

export default function SyllabusLandingPage() {
    const [showHSSCHistory, setShowHSSCHistory] = useState(false)
    const [showUKSSSCHistory, setShowUKSSSCHistory] = useState(false)

    const agencyCards: AgencyCard[] = [
        {
            id: "hssc",
            name: "HSSC",
            fullName: "Haryana Staff Selection Commission",
            description: "HSSC is the premier recruitment agency for Group B, C, and D posts in the Government of Haryana. It conducts the Common Eligibility Test (CET) as a single-window eligibility test for various state government jobs, with scores valid for 3 years.[citation:7]",
            established: "1970",
            headquarters: "Panchkula, Haryana",
            officialWebsite: "https://hssc.gov.in",
            features: [
                "Conducts CET for Group C & D posts",
                "CET score valid for 3 years",
                "Recruitment for 35+ exam categories",
                "State-level competitive exams"
            ],
            examPattern: {
                totalQuestions: 100,
                duration: "1 Hour 45 Minutes",
                negativeMarking: "No negative marking (0.95 deduction for unattempted)",
                language: "Hindi & English"
            },
            popularExams: [
                "CET Group C",
                "CET Group D",
                "Police Constable",
                "Stenographer",
                "Patwari",
                "Junior Engineer"
            ],
            syllabusLink: "/haryana-exam-syllabus",
            icon: <Building2 className="w-6 h-6" />,
            color: "from-orange-600 to-red-600",
            bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
        },
        {
            id: "uksssc",
            name: "UKSSSC",
            fullName: "Uttarakhand Subordinate Service Selection Commission",
            description: "UKSSSC conducts recruitment examinations for various Group C posts in the Uttarakhand government. The commission focuses heavily on Uttarakhand-specific general knowledge, with state topics carrying up to 40% weightage in many exams.[citation:2]",
            established: "2004",
            headquarters: "Dehradun, Uttarakhand",
            officialWebsite: "https://sssc.uk.gov.in",
            features: [
                "State-specific GK focus (40% weightage)",
                "Recruitment for Group C posts",
                "Village Development Officer (VDO) recruitment",
                "Police Constable recruitment"
            ],
            examPattern: {
                totalQuestions: 100,
                duration: "2 Hours",
                negativeMarking: "-0.25 for wrong answers",
                language: "Hindi & English"
            },
            popularExams: [
                "Police Constable",
                "VDO (Village Development Officer)",
                "Junior Assistant",
                "Forest Guard",
                "Patwari",
                "Livestock Officer"
            ],
            syllabusLink: "/uksssc-exam-syllabus",
            icon: <Mountain className="w-6 h-6" />,
            color: "from-green-600 to-teal-600",
            bgGradient: "from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20"
        }
    ]

    // Statistics for HSSC
    const hsscStats = [
        { label: "Vacancies (2026)", value: "3,112+", icon: <Users className="w-3.5 h-3.5" />, color: "text-orange-600" },
        { label: "Exam Categories", value: "35+", icon: <BookOpen className="w-3.5 h-3.5" />, color: "text-red-600" },
        { label: "CET Validity", value: "3 Years", icon: <Calendar className="w-3.5 h-3.5" />, color: "text-orange-600" }
    ]

    // Statistics for UKSSSC
    const ukssscStats = [
        { label: "State GK Weightage", value: "40%", icon: <Globe className="w-3.5 h-3.5" />, color: "text-green-600" },
        { label: "Exam Duration", value: "2 Hours", icon: <Clock className="w-3.5 h-3.5" />, color: "text-teal-600" },
        { label: "Negative Marking", value: "0.25", icon: <Target className="w-3.5 h-3.5" />, color: "text-green-600" }
    ]

    // HSSC Syllabus Details
    const hsscSyllabusDetails = [
        { subject: "General Awareness", weightage: "15%", topics: "Current Affairs, Indian History, Polity, Geography, Economics" },
        { subject: "Haryana GK", weightage: "25%", topics: "Haryana History, Culture, Geography, Government Schemes, Important Personalities" },
        { subject: "Reasoning", weightage: "10%", topics: "Analogy, Coding-Decoding, Blood Relations, Syllogism, Puzzles" },
        { subject: "Quantitative Aptitude", weightage: "15%", topics: "Number System, Percentage, Profit-Loss, Time & Work, Average" },
        { subject: "General Science", weightage: "15%", topics: "Physics, Chemistry, Biology, Environmental Science" },
        { subject: "English & Hindi", weightage: "20%", topics: "Grammar, Vocabulary, Comprehension, Sentence Correction" }
    ]

    // UKSSSC Syllabus Details
    const ukssscSyllabusDetails = [
        { subject: "Uttarakhand GK", weightage: "40%", topics: "State History, Culture, Geography, Rivers, Pilgrimage Sites, Government Schemes" },
        { subject: "General Studies", weightage: "40%", topics: "Indian History, Polity, Economy, Geography, General Science, Current Affairs" },
        { subject: "General Hindi", weightage: "20%", topics: "Grammar (Sandhi, Samas, Muhavare), Vocabulary, Comprehension, Letter Writing" },
        { subject: "Reasoning", weightage: "Included in GS", topics: "Verbal & Non-Verbal Reasoning, Analytical Ability" },
        { subject: "Numerical Ability", weightage: "Included in GS", topics: "Arithmetic, Algebra, Data Interpretation" }
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
                        Complete Syllabus Resource for State Government Exams
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        State Exam
                        <span className="text-primary"> Syllabus</span> Guide
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Comprehensive syllabus and exam pattern information for
                        <strong className="text-foreground"> Haryana Staff Selection Commission (HSSC)</strong> and
                        <strong className="text-foreground"> Uttarakhand Subordinate Service Selection Commission (UKSSSC)</strong> examinations
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="cursor-pointer gap-2">
                                Start Free Mock Test <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Agency Cards Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <Award className="w-4 h-4" />
                            State Recruitment Commissions
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Choose Your <span className="text-primary">Exam Board</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Select your state commission to access complete syllabus, exam pattern, and preparation resources
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {agencyCards.map((agency) => (
                            <div
                                key={agency.id}
                                className={`rounded-2xl border bg-gradient-to-br ${agency.bgGradient} overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                {/* Card Header */}
                                <div className={`bg-gradient-to-r ${agency.color} p-5`}>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/20 rounded-xl">
                                            {agency.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{agency.name}</h3>
                                            <p className="text-white/80 text-xs">{agency.fullName}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {agency.description}
                                    </p>

                                    {/* Stats Row */}
                                    <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b">
                                        {agency.id === "hssc"
                                            ? hsscStats.map((stat, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5 text-xs bg-card px-3 py-1.5 rounded-full shadow-sm">
                                                    {stat.icon}
                                                    <span className="font-medium">{stat.label}:</span>
                                                    <span className={stat.color}>{stat.value}</span>
                                                </div>
                                            ))
                                            : ukssscStats.map((stat, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5 text-xs bg-card px-3 py-1.5 rounded-full shadow-sm">
                                                    {stat.icon}
                                                    <span className="font-medium">{stat.label}:</span>
                                                    <span className={stat.color}>{stat.value}</span>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    {/* Exam Pattern Section */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                            <FileText className="w-4 h-4 text-primary" />
                                            Exam Pattern Highlights
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className="bg-muted/50 rounded-lg p-2">
                                                <span className="text-muted-foreground">Total Questions</span>
                                                <p className="font-semibold">{agency.examPattern.totalQuestions}</p>
                                            </div>
                                            <div className="bg-muted/50 rounded-lg p-2">
                                                <span className="text-muted-foreground">Duration</span>
                                                <p className="font-semibold">{agency.examPattern.duration}</p>
                                            </div>
                                            <div className="bg-muted/50 rounded-lg p-2">
                                                <span className="text-muted-foreground">Negative Marking</span>
                                                <p className="font-semibold">{agency.examPattern.negativeMarking}</p>
                                            </div>
                                            <div className="bg-muted/50 rounded-lg p-2">
                                                <span className="text-muted-foreground">Language</span>
                                                <p className="font-semibold">{agency.examPattern.language}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Popular Exams */}
                                    <div className="mb-5">
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                            <Trophy className="w-4 h-4 text-primary" />
                                            Popular Exams
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {agency.popularExams.slice(0, 6).map((exam, idx) => (
                                                <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                                    {exam}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Navigation Button */}
                                    <Link href={agency.syllabusLink}>
                                        <Button className={`w-full gap-2 cursor-pointer bg-gradient-to-r ${agency.color} hover:opacity-90`}>
                                            View Complete Syllabus <ChevronRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Syllabus Comparison Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <BookOpen className="w-4 h-4" />
                            Subject-wise Breakdown
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Detailed Syllabus Comparison</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Compare the syllabus structure and subject weightage between HSSC and UKSSSC examinations
                        </p>
                    </div>

                    {/* HSSC Detailed Syllabus */}
                    <div className="mb-8 rounded-xl border bg-card overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
                            <div className="flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-white" />
                                <h3 className="font-bold text-white">HSSC Exam Syllabus</h3>
                                <span className="ml-auto text-xs bg-white/20 text-white px-2 py-1 rounded-full">100 Questions | 105 Minutes</span>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-muted/50">
                                    <tr>
                                        <th className="text-left p-3 font-semibold">Subject</th>
                                        <th className="text-left p-3 font-semibold">Weightage</th>
                                        <th className="text-left p-3 font-semibold">Key Topics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hsscSyllabusDetails.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="p-3 font-medium">{item.subject}</td>
                                            <td className="p-3">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-xs font-medium">
                                                    {item.weightage}
                                                </span>
                                            </td>
                                            <td className="p-3 text-muted-foreground text-xs">{item.topics}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 bg-muted/20 border-t text-xs text-muted-foreground">
                            <p className="flex items-center gap-1">
                                <span className="font-medium text-foreground">Note:</span>
                                Haryana GK carries the highest weightage (25%). CET scores are valid for 3 years. No negative marking for wrong answers, but unattempted questions incur -0.95 marks if 5th option not filled.[citation:5][citation:7]
                            </p>
                        </div>
                    </div>

                    {/* UKSSSC Detailed Syllabus */}
                    <div className="rounded-xl border bg-card overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4">
                            <div className="flex items-center gap-2">
                                <Mountain className="w-5 h-5 text-white" />
                                <h3 className="font-bold text-white">UKSSSC Exam Syllabus</h3>
                                <span className="ml-auto text-xs bg-white/20 text-white px-2 py-1 rounded-full">100 Questions | 120 Minutes</span>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-muted/50">
                                    <tr>
                                        <th className="text-left p-3 font-semibold">Subject</th>
                                        <th className="text-left p-3 font-semibold">Weightage</th>
                                        <th className="text-left p-3 font-semibold">Key Topics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ukssscSyllabusDetails.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="p-3 font-medium">{item.subject}</td>
                                            <td className="p-3">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium">
                                                    {item.weightage}
                                                </span>
                                            </td>
                                            <td className="p-3 text-muted-foreground text-xs">{item.topics}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 bg-muted/20 border-t text-xs text-muted-foreground">
                            <p className="flex items-center gap-1">
                                <span className="font-medium text-foreground">Note:</span>
                                Uttarakhand GK carries 40% weightage in most UKSSSC exams. Negative marking of -0.25 applies for wrong answers. VDO and Police Constable are the most popular recruitments.[citation:2][citation:4]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Differences Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <TrendingUp className="w-4 h-4" />
                            Quick Comparison
                        </div>
                        <h2 className="text-3xl font-bold mb-4">HSSC vs UKSSSC: Key Differences</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Understand the distinct features of each state recruitment commission
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* HSSC Features */}
                        <div className="rounded-xl border bg-card p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                                    <Building2 className="w-5 h-5 text-orange-600" />
                                </div>
                                <h3 className="font-bold text-lg">HSSC - Haryana</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>CET System:</strong> Single eligibility test valid for 3 years for multiple recruitments[citation:7]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Haryana GK Focus:</strong> 25% weightage on state-specific topics[citation:5]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>No Negative Marking:</strong> For wrong answers (unattempted have penalty)[citation:1]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Exam Duration:</strong> 1 hour 45 minutes (105 minutes)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Computer Knowledge:</strong> Minimum 10% questions in Police exam[citation:9]</span>
                                </li>
                            </ul>
                        </div>

                        {/* UKSSSC Features */}
                        <div className="rounded-xl border bg-card p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                                    <Mountain className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="font-bold text-lg">UKSSSC - Uttarakhand</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>State GK Focus:</strong> Uttarakhand topics carry up to 40% weightage[citation:2]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Negative Marking:</strong> 0.25 marks deducted for each wrong answer[citation:2]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Exam Duration:</strong> 2 hours (120 minutes)</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>VDO Exam:</strong> No computer section, focus on rural development[citation:4]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span><strong>Physical Standards:</strong> Required for Police Constable recruitment</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preparation Tips Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <Target className="w-4 h-4" />
                            Preparation Guide
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Smart Preparation Tips</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Follow these strategies to excel in both HSSC and UKSSSC examinations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* HSSC Tips */}
                        <div className="rounded-xl border bg-card p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Building2 className="w-5 h-5 text-orange-600" />
                                <h3 className="font-bold">For HSSC Exams</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-orange-600">1</span>
                                    </div>
                                    <span><strong>Master Haryana GK:</strong> Focus on Haryana history, culture, and government schemes (25% weightage)[citation:5]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-orange-600">2</span>
                                    </div>
                                    <span><strong>Practice Computer Basics:</strong> Minimum 10% questions on computer knowledge in Police exam[citation:9]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-orange-600">3</span>
                                    </div>
                                    <span><strong>Attempt All Questions:</strong> No negative marking for wrong answers, but avoid leaving questions unattempted[citation:1]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-orange-600">4</span>
                                    </div>
                                    <span><strong>Quantitative Aptitude:</strong> Focus on percentage, profit-loss, average, and ratio-proportion</span>
                                </li>
                            </ul>
                        </div>

                        {/* UKSSSC Tips */}
                        <div className="rounded-xl border bg-card p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Mountain className="w-5 h-5 text-green-600" />
                                <h3 className="font-bold">For UKSSSC Exams</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-green-600">1</span>
                                    </div>
                                    <span><strong>Uttarakhand GK is Key:</strong> Study state history, culture, Char Dham, national parks (40% weightage)[citation:2]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-green-600">2</span>
                                    </div>
                                    <span><strong>Avoid Guesswork:</strong> Negative marking of -0.25 makes accuracy crucial[citation:4]</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-green-600">3</span>
                                    </div>
                                    <span><strong>Hindi Grammar:</strong> Master Sandhi, Samas, Muhavare for General Hindi section</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-green-600">4</span>
                                    </div>
                                    <span><strong>Time Management:</strong> 2 hours for 100 questions - allocate 45 seconds per question</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Common Questions About State Exams</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find answers to commonly asked questions about HSSC and UKSSSC examinations
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What is the validity of HSSC CET score?",
                                a: "HSSC CET score is valid for 3 years from the date of result declaration. During this period, candidates can apply for various Group C and Group D posts without reappearing for the CET.[citation:7]"
                            },
                            {
                                q: "Is there negative marking in UKSSSC exams?",
                                a: "Yes, most UKSSSC exams have negative marking of 0.25 marks for each wrong answer. Candidates should avoid guesswork and focus on accuracy.[citation:2][citation:4]"
                            },
                            {
                                q: "Which state GK has higher weightage - HSSC or UKSSSC?",
                                a: "UKSSSC gives higher weightage to state GK (up to 40%), while HSSC allocates 25% to Haryana-specific topics. Both require focused preparation on state history, culture, and geography.[citation:2][citation:5]"
                            },
                            {
                                q: "Is Computer Knowledge included in both exams?",
                                a: "HSSC includes computer knowledge in many exams (minimum 10% in Police Constable). UKSSSC VDO does NOT include computer section, but other UKSSSC exams may include it depending on the post.[citation:9]"
                            },
                            {
                                q: "What is the duration of these exams?",
                                a: "HSSC exams are typically 1 hour 45 minutes (105 minutes) for 100 questions. UKSSSC exams are 2 hours (120 minutes) for 100 questions.[citation:1][citation:2]"
                            },
                            {
                                q: "Can I take these exams in Hindi language?",
                                a: "Yes, both HSSC and UKSSSC exams are bilingual (Hindi and English) for all sections except language-specific papers.[citation:1]"
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="rounded-xl border bg-card p-5">
                                <h3 className="font-semibold text-base md:text-lg mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Trophy className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Preparation?</h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Access free mock tests, previous year papers, and topic-wise practice sets designed exactly as per the latest exam patterns
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="gap-2 cursor-pointer">
                                Start Free Mock Test <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/mock-test">
                            <Button variant="outline" size="lg" className="cursor-pointer">
                                Browse All Exams
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">Complete State Exam Syllabus Resource</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides comprehensive syllabus information for state-level recruitment examinations conducted by
                        Haryana Staff Selection Commission (HSSC) and Uttarakhand Subordinate Service Selection Commission (UKSSSC).
                        All syllabi are based on official notifications and previous year exam patterns.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2025-26 STATE EXAM TEST | All exam names and syllabi are property of their respective owners.
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}