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
    Search,
    Filter,
    Eye,
    Star,
    Flame,
    Archive,
    PlusCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MonthCard {
    month: string
    year: number
    shortName: string
    description: string
    majorTopics: string[]
    importantDays: number
    keyHighlights: string[]
    pdfUrl?: string
    isAvailable: boolean
    isCurrent?: boolean
    featuredTopics?: string[]
}

export default function CurrentAffairsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [showAllMonths, setShowAllMonths] = useState(false)

    const currentYear = 2026
    const currentMonth = "April"

    // Month data for 2026
    const monthsData: MonthCard[] = [
        {
            month: "March",
            year: 2026,
            shortName: "Mar",
            description: "Complete March 2026 current affairs digest covering 16th Finance Commission, QUAD Summit, RBI Digital Rupee, ISRO NISAR satellite, and 5 new Ramsar sites.",
            majorTopics: ["16th Finance Commission", "QUAD Summit", "Offline Digital Rupee", "NISAR Satellite", "5 New Ramsar Sites"],
            importantDays: 8,
            keyHighlights: ["Lakshya Sen wins All England", "Anupama Kundoo gets Pritzker Prize", "ICC Women's ODI World Cup begins"],
            pdfUrl: "/pdf/march-2026-ca.pdf",
            isAvailable: true,
            isCurrent: false,
            featuredTopics: ["National Affairs", "International Relations", "Economy & Banking", "Science & Tech", "Environment"]
        },
        {
            month: "February",
            year: 2026,
            shortName: "Feb",
            description: "February 2026 current affairs covering Union Budget 2026-27, Economic Survey, new space missions, and key appointments.",
            majorTopics: ["Union Budget 2026", "Economic Survey", "RBI Monetary Policy", "Defense Deals"],
            importantDays: 6,
            keyHighlights: ["Budget Highlights", "GDP Projections", "New CJI Appointment"],
            pdfUrl: "/pdf/february-2026-ca.pdf",
            isAvailable: true,
            isCurrent: false,
            featuredTopics: ["Economy", "National Affairs", "Appointments"]
        },
        {
            month: "January",
            year: 2026,
            shortName: "Jan",
            description: "January 2026 current affairs including Republic Day parade highlights, new space missions, and international summits.",
            majorTopics: ["Republic Day 2026", "Startup India Initiatives", "Defense Exports", "Climate Summit"],
            importantDays: 5,
            keyHighlights: ["Tableau Winners", "New Space Missions", "Trade Agreements"],
            pdfUrl: "/pdf/january-2026-ca.pdf",
            isAvailable: true,
            isCurrent: false,
            featuredTopics: ["National Affairs", "Science & Tech", "International Relations"]
        },
        {
            month: "April",
            year: 2026,
            shortName: "Apr",
            description: "April 2026 current affairs will be updated soon. Stay tuned for the latest updates.",
            majorTopics: ["Coming Soon"],
            importantDays: 7,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: true,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "May",
            year: 2026,
            shortName: "May",
            description: "May 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 6,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "June",
            year: 2026,
            shortName: "Jun",
            description: "June 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 5,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "July",
            year: 2026,
            shortName: "Jul",
            description: "July 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 6,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "August",
            year: 2026,
            shortName: "Aug",
            description: "August 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 5,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "September",
            year: 2026,
            shortName: "Sep",
            description: "September 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 6,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "October",
            year: 2026,
            shortName: "Oct",
            description: "October 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 7,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "November",
            year: 2026,
            shortName: "Nov",
            description: "November 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 6,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        },
        {
            month: "December",
            year: 2026,
            shortName: "Dec",
            description: "December 2026 current affairs - coming soon",
            majorTopics: ["Coming Soon"],
            importantDays: 8,
            keyHighlights: ["Under Preparation"],
            pdfUrl: undefined,
            isAvailable: false,
            isCurrent: false,
            featuredTopics: ["Coming Soon"]
        }
    ]

    // Previous year data (2025)
    const previousYearMonths: MonthCard[] = [
        {
            month: "December",
            year: 2025,
            shortName: "Dec",
            description: "December 2025 current affairs archive - year-end review and important events.",
            majorTopics: ["Year-End Review", "Space Missions 2025", "Key Appointments", "Important Summits"],
            importantDays: 7,
            keyHighlights: ["ISRO Milestones", "Economic Indicators", "Sports Achievements"],
            pdfUrl: "/pdf/december-2025-ca.pdf",
            isAvailable: true,
            isCurrent: false
        },
        {
            month: "November",
            year: 2025,
            shortName: "Nov",
            description: "November 2025 current affairs archive - G20 Summit and key developments.",
            majorTopics: ["G20 Summit", "Climate Initiatives", "Trade Agreements", "Space Research"],
            importantDays: 6,
            keyHighlights: ["International Summits", "Defense Updates", "Banking Reforms"],
            pdfUrl: "/pdf/november-2025-ca.pdf",
            isAvailable: true,
            isCurrent: false
        },
        {
            month: "October",
            year: 2025,
            shortName: "Oct",
            description: "October 2025 current affairs archive - festive season and major policy announcements.",
            majorTopics: ["Policy Reforms", "Agricultural Schemes", "Digital India Updates", "International Relations"],
            importantDays: 7,
            keyHighlights: ["Cabinet Approvals", "Economic Data", "Awards & Honors"],
            pdfUrl: "/pdf/october-2025-ca.pdf",
            isAvailable: true,
            isCurrent: false
        }
    ]

    const filteredMonths = monthsData.filter(month =>
        month.month.toLowerCase().includes(searchQuery.toLowerCase()) ||
        month.majorTopics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    const displayedMonths = showAllMonths ? filteredMonths : filteredMonths.slice(0, 6)

    // Statistics
    const totalAvailable = monthsData.filter(m => m.isAvailable).length
    const totalTopics = monthsData.reduce((acc, m) => acc + m.majorTopics.length, 0)
    const totalImportantDays = monthsData.reduce((acc, m) => acc + m.importantDays, 0)

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
                        Monthly Current Affairs Digest
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Current Affairs
                        <span className="text-primary"> 2026</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete month-wise current affairs for competitive examinations.
                        <strong className="text-foreground"> Exam-oriented analysis, static GK, and practice questions</strong> for UPSC, SSC, Banking, HSSC, UKSSSC & more.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span><strong>12 Months</strong> Available</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span><strong>{totalTopics}+</strong> Major Topics</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Clock className="w-4 h-4 text-primary" />
                            <span><strong>{totalImportantDays}+</strong> Important Days</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/current-affairs/march-2026">
                            <Button size="lg" className="cursor-pointer gap-2 bg-primary hover:bg-primary/90">
                                <Newspaper className="w-4 h-4" />
                                Latest: March 2026 Digest
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/mock-test">
                            <Button variant="outline" size="lg" className="cursor-pointer gap-2">
                                <Target className="w-4 h-4" />
                                Practice Quiz
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-8 px-4 border-y bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">{totalAvailable}</div>
                            <div className="text-xs text-muted-foreground">Months Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">50+</div>
                            <div className="text-xs text-muted-foreground">Major Topics</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">80+</div>
                            <div className="text-xs text-muted-foreground">Important Days</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary">500+</div>
                            <div className="text-xs text-muted-foreground">Practice Questions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-6 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by month or topic (e.g., 'Budget', 'Finance Commission', 'NISAR')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                </div>
            </section>

            {/* Current Year Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Flame className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{currentYear} Current Affairs</h2>
                        <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">Latest Updates</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedMonths.map((month, index) => (
                            <Link
                                href={month.isAvailable ? `/current-affairs/${month.month.toLowerCase()}-${month.year}` : "#"}
                                key={index}
                                className={`block group ${!month.isAvailable ? "cursor-not-allowed opacity-60" : ""}`}
                                onClick={(e) => !month.isAvailable && e.preventDefault()}
                            >
                                <div className={`rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${month.isAvailable ? "hover:border-primary/50" : ""}`}>
                                    {/* Month Header */}
                                    <div className={`p-4 ${month.isCurrent ? "bg-gradient-to-r from-primary to-primary/80" : "bg-gradient-to-r from-slate-700 to-slate-800"} text-white`}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold">{month.month}</h3>
                                                <p className="text-white/80 text-sm">{month.year}</p>
                                            </div>
                                            {month.isCurrent && (
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Star className="w-3 h-3" />
                                                    Current
                                                </span>
                                            )}
                                            {month.isAvailable && !month.isCurrent && (
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Available</span>
                                            )}
                                            {!month.isAvailable && (
                                                <span className="text-xs bg-white/20 px-2 py-1 rounded-full flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5">
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {month.description}
                                        </p>

                                        {/* Major Topics */}
                                        <div className="mb-4">
                                            <h4 className="text-xs font-semibold text-muted-foreground mb-2">MAJOR TOPICS</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {month.majorTopics.slice(0, 3).map((topic, idx) => (
                                                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                                        {topic}
                                                    </span>
                                                ))}
                                                {month.majorTopics.length > 3 && (
                                                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                                                        +{month.majorTopics.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Key Highlights */}
                                        {month.keyHighlights && month.keyHighlights.length > 0 && (
                                            <div className="mb-4">
                                                <h4 className="text-xs font-semibold text-muted-foreground mb-2">KEY HIGHLIGHTS</h4>
                                                <div className="space-y-1">
                                                    {month.keyHighlights.slice(0, 2).map((highlight, idx) => (
                                                        <div key={idx} className="flex items-start gap-1.5 text-xs">
                                                            <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-muted-foreground">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-3 border-t">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="w-3 h-3" />
                                                <span>{month.importantDays} Important Days</span>
                                            </div>
                                            {month.isAvailable ? (
                                                <span className="text-primary text-sm font-medium group-hover:underline flex items-center gap-1">
                                                    Read Digest <ChevronRight className="w-3 h-3" />
                                                </span>
                                            ) : (
                                                <span className="text-muted-foreground text-sm flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {filteredMonths.length > 6 && (
                        <div className="text-center mt-8">
                            <Button
                                variant="outline"
                                onClick={() => setShowAllMonths(!showAllMonths)}
                                className="cursor-pointer gap-2"
                            >
                                {showAllMonths ? (
                                    <>Show Less <ChevronDown className="w-4 h-4 rotate-180" /></>
                                ) : (
                                    <>Show All {filteredMonths.length} Months <ChevronDown className="w-4 h-4" /></>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Previous Year Archive Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                            <Archive className="w-5 h-5 text-amber-600" />
                        </div>
                        <h2 className="text-2xl font-bold">Previous Year Archives</h2>
                        <span className="text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full">2025</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {previousYearMonths.map((month, index) => (
                            <Link href={month.isAvailable ? `/current-affairs/${month.month.toLowerCase()}-${month.year}` : "#"} key={index} className="block group">
                                <div className="rounded-2xl border bg-card overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-amber-300">
                                    <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 text-white">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold">{month.month}</h3>
                                                <p className="text-white/80 text-sm">{month.year}</p>
                                            </div>
                                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Archive</span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{month.description}</p>
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {month.majorTopics.slice(0, 2).map((topic, idx) => (
                                                <span key={idx} className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between pt-2 border-t">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="w-3 h-3" />
                                                <span>{month.importantDays} Days</span>
                                            </div>
                                            <span className="text-amber-600 text-sm font-medium group-hover:underline flex items-center gap-1">
                                                View Archive <ChevronRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Current Affairs Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                        <GraduationCap className="w-4 h-4" />
                        Why Our Current Affairs Digest?
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Comprehensive & Exam-Oriented</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center p-4">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">In-Depth Analysis</h3>
                            <p className="text-sm text-muted-foreground">Detailed coverage with background, impact assessment, and static GK</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                <Target className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">Exam Significance</h3>
                            <p className="text-sm text-muted-foreground">Prelims & Mains oriented approach with possible question areas</p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-1">Important Days</h3>
                            <p className="text-sm text-muted-foreground">Complete list of important days with themes and significance</p>
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Common Questions About Current Affairs</h2>
                        <p className="text-muted-foreground">Your guide to effective current affairs preparation</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "How should I prepare current affairs for competitive exams?",
                                a: "Focus on the last 6-8 months with special attention to government schemes, international relations, economic developments, and state-specific news. Our monthly digests provide exam-oriented analysis."
                            },
                            {
                                q: "Which months are most important for current affairs?",
                                a: "The last 6 months before your exam are most important. For exams in mid-2026, focus on January-June 2026 with special attention to Budget, Economic Survey, and major international summits."
                            },
                            {
                                q: "Are these digests useful for state exams like HSSC and UKSSSC?",
                                a: "Yes, our digests cover both national and state-level news. For state exams, we include state-specific current affairs and important state government schemes."
                            },
                            {
                                q: "How many questions can I expect from current affairs?",
                                a: "In most competitive exams, current affairs constitute 15-25% of the general awareness section. This can vary from 10-30 questions depending on the exam."
                            },
                            {
                                q: "Do you provide practice questions?",
                                a: "Yes, each monthly digest includes practice MCQs. You can also attempt our full-length current affairs quizzes in the mock test section."
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
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Ready to Master Current Affairs?</h2>
                    <p className="text-muted-foreground mb-5">Practice with our topic-wise quizzes and full-length mock tests</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/mock-test">
                            <Button size="lg" className="gap-2 cursor-pointer">
                                Start Practice Quiz <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/current-affairs/march-2026">
                            <Button variant="outline" size="lg" className="gap-2 cursor-pointer">
                                Read Latest Digest <Eye className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-8 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-lg font-semibold mb-2">Monthly Current Affairs for Competitive Exams 2026</h2>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Complete month-wise current affairs coverage for 2026 including March, February, January and previous year archives.
                        Each digest covers national affairs, international relations, economy & banking, science & technology, environment & ecology,
                        sports, awards, appointments, and important days with exam-oriented analysis for UPSC, SSC, Banking, Railways,
                        HSSC (Haryana CET), UKSSSC (Uttarakhand), and all state-level competitive examinations.
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                        © 2025-26 CET TEST | Current affairs content for educational purposes | Source: Chronos Intelligence Hub
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}