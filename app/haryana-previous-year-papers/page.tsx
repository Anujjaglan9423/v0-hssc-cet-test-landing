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
    Calendar,
    Download,
    Globe,
    TrendingUp,
    CheckCircle2,
    FileText,
    Users,
    Rocket,
    Leaf,
    Building2,
    Landmark,
    Trophy,
    HelpCircle,
    ChevronDown,
    Newspaper,
    BarChart3,
    GraduationCap,
    Languages,
    Eye,
    Search,
    Filter,
    X,
    ArrowUpDown,
    AlertCircle,
    FileQuestion,
    Timer,
    HardDrive,
    FolderOpen,
    Lightbulb,
    Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuestionPaper {
    id: string
    year: number
    examName: string
    examType: string
    shift: string
    totalQuestions: number
    duration: string
    difficulty: "Easy" | "Moderate" | "Difficult"
    pdfUrl: string
    tags: string[]
}

export default function HaryanaPreviousYearPapersPage() {
    const [selectedYear, setSelectedYear] = useState<number | "all">("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [showFilters, setShowFilters] = useState(false)

    // Question Papers Data
    const questionPapers: QuestionPaper[] = [
        // HSSC CET Group C
        {
            id: "cet-c-2024",
            year: 2024,
            examName: "HSSC CET Group C",
            examType: "CET",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-cet-group-c-2024.pdf",
            tags: ["CET", "Group C", "HSSC"]
        },
        {
            id: "cet-c-2024-evening",
            year: 2024,
            examName: "HSSC CET Group C",
            examType: "CET",
            shift: "Evening",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-cet-group-c-2024-evening.pdf",
            tags: ["CET", "Group C", "HSSC"]
        },
        {
            id: "cet-c-2023",
            year: 2023,
            examName: "HSSC CET Group C",
            examType: "CET",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-cet-group-c-2023.pdf",
            tags: ["CET", "Group C", "HSSC"]
        },
        {
            id: "cet-c-2022",
            year: 2022,
            examName: "HSSC CET Group C",
            examType: "CET",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Easy",
            pdfUrl: "/pdf/hssc-cet-group-c-2022.pdf",
            tags: ["CET", "Group C", "HSSC"]
        },

        // HSSC CET Group D
        {
            id: "cet-d-2024",
            year: 2024,
            examName: "HSSC CET Group D",
            examType: "CET",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-cet-group-d-2024.pdf",
            tags: ["CET", "Group D", "HSSC"]
        },
        {
            id: "cet-d-2023",
            year: 2023,
            examName: "HSSC CET Group D",
            examType: "CET",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Easy",
            pdfUrl: "/pdf/hssc-cet-group-d-2023.pdf",
            tags: ["CET", "Group D", "HSSC"]
        },

        // Haryana Police Constable
        {
            id: "police-2024",
            year: 2024,
            examName: "Haryana Police Constable",
            examType: "Police",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/haryana-police-constable-2024.pdf",
            tags: ["Police", "Constable", "HSSC"]
        },
        {
            id: "police-2023",
            year: 2023,
            examName: "Haryana Police Constable",
            examType: "Police",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/haryana-police-constable-2023.pdf",
            tags: ["Police", "Constable", "HSSC"]
        },
        {
            id: "police-2022",
            year: 2022,
            examName: "Haryana Police Constable",
            examType: "Police",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Easy",
            pdfUrl: "/pdf/haryana-police-constable-2022.pdf",
            tags: ["Police", "Constable", "HSSC"]
        },
        {
            id: "police-2021",
            year: 2021,
            examName: "Haryana Police Constable",
            examType: "Police",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/haryana-police-constable-2021.pdf",
            tags: ["Police", "Constable", "HSSC"]
        },

        // HSSC TGT
        {
            id: "tgt-2024",
            year: 2024,
            examName: "HSSC TGT (Trained Graduate Teacher)",
            examType: "Teaching",
            shift: "Morning",
            totalQuestions: 120,
            duration: "120 Minutes",
            difficulty: "Difficult",
            pdfUrl: "/pdf/hssc-tgt-2024.pdf",
            tags: ["TGT", "Teaching", "HSSC"]
        },
        {
            id: "tgt-2023",
            year: 2023,
            examName: "HSSC TGT (Trained Graduate Teacher)",
            examType: "Teaching",
            shift: "Morning",
            totalQuestions: 120,
            duration: "120 Minutes",
            difficulty: "Difficult",
            pdfUrl: "/pdf/hssc-tgt-2023.pdf",
            tags: ["TGT", "Teaching", "HSSC"]
        },

        // HSSC JE
        {
            id: "je-2024",
            year: 2024,
            examName: "HSSC Junior Engineer (JE)",
            examType: "Engineering",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Difficult",
            pdfUrl: "/pdf/hssc-je-2024.pdf",
            tags: ["JE", "Engineering", "HSSC"]
        },
        {
            id: "je-2023",
            year: 2023,
            examName: "HSSC Junior Engineer (JE)",
            examType: "Engineering",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Difficult",
            pdfUrl: "/pdf/hssc-je-2023.pdf",
            tags: ["JE", "Engineering", "HSSC"]
        },

        // HSSC Patwari
        {
            id: "patwari-2024",
            year: 2024,
            examName: "HSSC Patwari",
            examType: "Revenue",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-patwari-2024.pdf",
            tags: ["Patwari", "Revenue", "HSSC"]
        },
        {
            id: "patwari-2023",
            year: 2023,
            examName: "HSSC Patwari",
            examType: "Revenue",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-patwari-2023.pdf",
            tags: ["Patwari", "Revenue", "HSSC"]
        },

        // HSSC Gram Sachiv
        {
            id: "gram-sachiv-2024",
            year: 2024,
            examName: "HSSC Gram Sachiv",
            examType: "Rural Development",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-gram-sachiv-2024.pdf",
            tags: ["Gram Sachiv", "Rural", "HSSC"]
        },
        {
            id: "gram-sachiv-2023",
            year: 2023,
            examName: "HSSC Gram Sachiv",
            examType: "Rural Development",
            shift: "Morning",
            totalQuestions: 100,
            duration: "90 Minutes",
            difficulty: "Moderate",
            pdfUrl: "/pdf/hssc-gram-sachiv-2023.pdf",
            tags: ["Gram Sachiv", "Rural", "HSSC"]
        }
    ]

    // Available years
    const availableYears = [2024, 2023, 2022, 2021]

    // Filter papers based on year and search
    const filteredPapers = questionPapers.filter(paper => {
        const matchesYear = selectedYear === "all" || paper.year === selectedYear
        const matchesSearch = searchQuery === "" ||
            paper.examName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.examType.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesYear && matchesSearch
    })

    // Group by exam name
    const groupedPapers = filteredPapers.reduce((acc, paper) => {
        const key = `${paper.examName} - ${paper.year}`
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(paper)
        return acc
    }, {} as Record<string, QuestionPaper[]>)

    // Statistics
    const totalPapers = questionPapers.length
    const totalYears = availableYears.length
    const examCategories = [...new Set(questionPapers.map(p => p.examType))].length

    const handleDownload = (pdfUrl: string, paperName: string) => {
        // In production, this would trigger actual PDF download
        // For demo, we'll simulate with alert
        window.open(pdfUrl, '_blank')
    }

    const handleAttemptTest = () => {
        // Navigate to signup page
        window.location.href = "/signup"
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
                        <FileText className="w-4 h-4" />
                        Haryana Staff Selection Commission (HSSC) - Previous Year Papers
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Haryana Exam
                        <span className="text-primary"> Previous Year Papers</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Download and practice with official previous year question papers for
                        <strong className="text-foreground"> HSSC CET, Police Constable, TGT, JE, Patwari, and more</strong> exams
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <FileText className="w-4 h-4 text-primary" />
                            <span><strong>{totalPapers}+</strong> Question Papers</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span><strong>{totalYears}</strong> Years (2021-2024)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span><strong>{examCategories}+</strong> Exam Categories</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="cursor-pointer gap-2">
                                Start Free Mock Test <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="cursor-pointer gap-2" onClick={() => document.getElementById("papers-section")?.scrollIntoView({ behavior: "smooth" })}>
                            <Eye className="w-4 h-4" />
                            Browse Papers
                        </Button>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                        <Award className="w-4 h-4" />
                        Why Solve Previous Year Papers?
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Benefits of Solving Previous Year Papers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Practicing with actual exam papers helps you understand the exam pattern, difficulty level,
                        important topics, and time management. All papers are official HSSC question papers.
                    </p>
                    <div className="grid md:grid-cols-4 gap-4 mt-8">
                        <div className="text-center p-3">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                <Target className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-xs font-medium">Understand Pattern</p>
                        </div>
                        <div className="text-center p-3">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                <Timer className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-xs font-medium">Time Management</p>
                        </div>
                        <div className="text-center p-3">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-xs font-medium">Identify Weak Areas</p>
                        </div>
                        <div className="text-center p-3">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                                <Award className="w-5 h-5 text-primary" />
                            </div>
                            <p className="text-xs font-medium">Boost Confidence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section id="papers-section" className="py-6 px-4 sm:px-6 lg:px-8 border-t border-b bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Year Filter */}
                        <div className="flex items-center gap-2 flex-wrap justify-center">
                            <span className="text-sm font-medium text-muted-foreground">Filter by Year:</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSelectedYear("all")}
                                    className={`px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer ${selectedYear === "all"
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-card hover:bg-muted border"
                                        }`}
                                >
                                    All Years
                                </button>
                                {availableYears.map(year => (
                                    <button
                                        key={year}
                                        onClick={() => setSelectedYear(year)}
                                        className={`px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer ${selectedYear === year
                                            ? "bg-primary text-white shadow-md"
                                            : "bg-card hover:bg-muted border"
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search by exam name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 rounded-full border bg-card focus:ring-2 focus:ring-primary focus:outline-none text-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-muted-foreground">
                            Showing {filteredPapers.length} of {totalPapers} question papers
                        </p>
                    </div>
                </div>
            </section>

            {/* Question Papers Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {Object.keys(groupedPapers).length === 0 ? (
                        <div className="text-center py-12">
                            <FileQuestion className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">No papers found</h3>
                            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                            <Button
                                variant="outline"
                                className="mt-4 cursor-pointer"
                                onClick={() => {
                                    setSelectedYear("all")
                                    setSearchQuery("")
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {Object.entries(groupedPapers).map(([examKey, papers]) => (
                                <div key={examKey} className="rounded-xl border bg-card overflow-hidden shadow-md">
                                    {/* Exam Header */}
                                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div>
                                                <h3 className="font-bold text-lg">{papers[0].examName}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {papers[0].year} • {papers[0].examType}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className={`text-xs px-2 py-1 rounded-full ${papers[0].difficulty === "Easy" ? "bg-green-100 text-green-700" :
                                                    papers[0].difficulty === "Moderate" ? "bg-yellow-100 text-yellow-700" :
                                                        "bg-red-100 text-red-700"
                                                    }`}>
                                                    {papers[0].difficulty}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Papers List */}
                                    <div className="divide-y">
                                        {papers.map((paper) => (
                                            <div key={paper.id} className="p-4 hover:bg-muted/20 transition-colors">
                                                <div className="flex flex-wrap items-center justify-between gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 flex-wrap">
                                                            <span className="text-sm font-medium">
                                                                {paper.shift} Shift
                                                            </span>
                                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                                <FileQuestion className="w-3 h-3" />
                                                                {paper.totalQuestions} Questions
                                                            </span>
                                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                                <Timer className="w-3 h-3" />
                                                                {paper.duration}
                                                            </span>
                                                            {paper.tags.map((tag, idx) => (
                                                                <span key={idx} className="text-xs bg-muted px-2 py-0.5 rounded-full">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        {/* Download PDF Button */}
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="gap-1 cursor-pointer"
                                                            onClick={() => handleDownload(paper.pdfUrl, paper.examName)}
                                                        >
                                                            <Download className="w-3.5 h-3.5" />
                                                            Download PDF
                                                        </Button>

                                                        {/* Attempt Test Button */}
                                                        <Button
                                                            size="sm"
                                                            className="gap-1 cursor-pointer bg-primary hover:bg-primary/90"
                                                            onClick={handleAttemptTest}
                                                        >
                                                            <Target className="w-3.5 h-3.5" />
                                                            Attempt Test
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Exam Categories Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <FolderOpen className="w-4 h-4" />
                            Exam Categories
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">All HSSC Exam Papers Available</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We provide previous year papers for all major HSSC examinations
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-card rounded-lg p-4 text-center border">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="font-semibold">CET Group C & D</h3>
                            <p className="text-xs text-muted-foreground">8+ Papers (2022-2024)</p>
                        </div>
                        <div className="bg-card rounded-lg p-4 text-center border">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <h3 className="font-semibold">Police Constable</h3>
                            <p className="text-xs text-muted-foreground">4+ Papers (2021-2024)</p>
                        </div>
                        <div className="bg-card rounded-lg p-4 text-center border">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-purple-600" />
                            </div>
                            <h3 className="font-semibold">TGT / Teaching</h3>
                            <p className="text-xs text-muted-foreground">2+ Papers (2023-2024)</p>
                        </div>
                        <div className="bg-card rounded-lg p-4 text-center border">
                            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="font-semibold">JE / Patwari</h3>
                            <p className="text-xs text-muted-foreground">4+ Papers (2023-2024)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-xl border bg-card p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Lightbulb className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">How to Use Previous Year Papers Effectively</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Start with the most recent year paper to understand current pattern</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Simulate exam conditions - time yourself strictly</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Analyze mistakes and revise weak topics</span>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Track your progress by attempting same paper after revision</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Identify repeating topics and question types</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Use our mock tests for additional practice after solving papers</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <HelpCircle className="w-4 h-4" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Common Questions About Previous Year Papers</h2>
                        <p className="text-muted-foreground">Everything you need to know about HSSC previous year papers</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Are these the official HSSC question papers?",
                                a: "Yes, all question papers provided on this page are official HSSC (Haryana Staff Selection Commission) previous year papers. We have compiled them from official sources for your convenience."
                            },
                            {
                                q: "How many years of papers are available?",
                                a: "We currently have papers from 2021, 2022, 2023, and 2024 for various HSSC exams including CET Group C & D, Police Constable, TGT, JE, Patwari, and Gram Sachiv."
                            },
                            {
                                q: "Can I attempt the test online?",
                                a: "Yes! Click on the 'Attempt Test' button for any paper. You'll be redirected to our signup page, and after registration, you can take the test online in a simulated exam environment."
                            },
                            {
                                q: "Are solutions provided with the papers?",
                                a: "Detailed solutions and answer keys are available when you attempt the online test. For PDF downloads, answer keys are available separately in our resources section."
                            },
                            {
                                q: "Is there any charge for downloading papers?",
                                a: "No, all previous year papers are completely free to download. We believe in providing free access to quality study material for all aspirants."
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

            {/* Call to Action */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Ready to Test Your Preparation?</h2>
                    <p className="text-muted-foreground mb-5">
                        Take full-length mock tests designed exactly as per the latest HSSC exam pattern
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="gap-2 cursor-pointer">
                                Start Free Mock Test <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="cursor-pointer" onClick={() => document.getElementById("papers-section")?.scrollIntoView({ behavior: "smooth" })}>
                            Browse More Papers
                        </Button>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-8 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-lg font-semibold mb-2">HSSC Previous Year Question Papers - Free Download</h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Download free HSSC previous year question papers for CET Group C, CET Group D, Police Constable,
                        TGT, Junior Engineer, Patwari, Gram Sachiv and more. Practice with official papers from 2021 to 2024.
                        All papers are available in PDF format for offline study. Attempt online tests after registration.
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                        © 2026 CET TEST | All question papers are property of HSSC (Haryana Staff Selection Commission) | For educational purposes only
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}