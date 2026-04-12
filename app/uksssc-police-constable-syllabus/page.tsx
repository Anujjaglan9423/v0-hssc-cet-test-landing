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
    HelpCircle,
    Shield,
    Cpu,
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

export default function UKSSSCPoliceSyllabusPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "What is the full syllabus for UKSSSC Police Constable exam?",
            answer: "The UKSSSC Police Constable syllabus includes 5 main subjects: Computer Knowledge (5 units), General Knowledge & Current Affairs, General Hindi, Reasoning Ability, and Numerical Ability. Each subject covers specific topics as detailed in the syllabus breakdown above."
        },
        {
            question: "How many questions are asked from each subject in UK Police exam?",
            answer: "As per previous year patterns: Computer Knowledge (20-25 questions), General Knowledge & Current Affairs (25-30 questions), General Hindi (15-20 questions), Reasoning Ability (15-20 questions), Numerical Ability (10-15 questions). Total 100-120 questions typically."
        },
        {
            question: "Is there negative marking in UKSSSC Police Constable exam?",
            answer: "Yes, there is negative marking of 1/4th (0.25) mark for each wrong answer in most UKSSSC examinations. Always check the latest official notification for exact pattern."
        },
        {
            question: "What is the duration of UK Police Constable exam?",
            answer: "The written examination is typically conducted for 2 hours (120 minutes) with objective-type multiple choice questions."
        },
        {
            question: "Where can I download UKSSSC Police syllabus PDF?",
            answer: "You can download the official syllabus PDF from UKSSSC's official website: sssc.uk.gov.in. The direct PDF link is also provided in the button above."
        },
        {
            question: "Which topics are most important for UK Police General Knowledge section?",
            answer: "Most important topics: Current Affairs (last 6 months), Uttarakhand GK (History, Culture, Geography, Tourism), Indian Polity, Environment, and General Science."
        },
        {
            question: "Is the UK Police exam conducted online or offline?",
            answer: "UKSSSC Police Constable exam is typically conducted in offline (OMR-based) mode at various centers across Uttarakhand."
        },
        {
            question: "Can I take the UK Police exam in Hindi language?",
            answer: "Yes, the question paper is usually bilingual (Hindi and English) for all sections except the language papers."
        },
        {
            question: "What is the physical standard for UK Police Constable?",
            answer: "Physical standards vary by category. General Male: Minimum 168 cm height, 81 cm chest (with 5 cm expansion). General Female: Minimum 147 cm height. Check official notification for category-wise details."
        },
        {
            question: "What is the passing marks for UK Police Constable?",
            answer: "The passing marks vary each year based on difficulty level and number of candidates. Generally, it ranges from 35-40% for General category, with relaxation for reserved categories as per UKSSSC norms."
        }
    ]

    // Subject icons mapping
    const subjectIcons = {
        computer: <Cpu className="w-5 h-5 text-white" />,
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
                        UKSSSC Police
                        <span className="text-primary"> Constable</span> Complete Syllabus
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete breakdown of <strong className="text-foreground">all 5 subjects</strong> for
                        <strong className="text-foreground"> Uttarakhand Police Constable</strong> recruitment 2025-26
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span>5 Main Subjects</span>
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

                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
                            {[
                                { label: "Total Sections", value: "5", color: "from-blue-500 to-blue-600" },
                                { label: "Total Questions", value: "100", color: "from-green-500 to-green-600" },
                                { label: "Duration", value: "90 Minutes", color: "from-orange-500 to-orange-600" },
                                { label: "Negative Marking", value: "-0.25", color: "from-red-500 to-red-600" },
                                { label: "Question Type", value: "MCQ (OMR)", color: "from-purple-500 to-purple-600" }
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

            {/* Complete Syllabus Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Complete <span className="text-primary">Syllabus</span> Breakdown
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Topic-wise complete syllabus for UKSSSC Police Constable examination as per latest official notification
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* ==================== SUBJECT 1: COMPUTER KNOWLEDGE ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.computer}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">1. Computer Knowledge</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">20-25 Questions</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="space-y-6">
                                    {/* Unit 1.1 */}
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Unit 1: Basic Computer Concepts
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Introduction to Computers",
                                                "Classification & Generations of Computers",
                                                "Block Diagram of Computer",
                                                "Hardware, Software, Firmware",
                                                "Input Devices & Output Devices",
                                                "Memory & Storage Devices",
                                                "Central Processing Unit (CPU)",
                                                "Computer Ports & Connections",
                                                "System Software & Application Software",
                                                "Concept of Algorithm & Flowchart",
                                                "Generations of Programming Languages"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Unit 1.2 */}
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Unit 2: Operating System
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Concept of Operating System",
                                                "Open Source vs Proprietary OS",
                                                "Versions of Windows",
                                                "Features of Windows OS",
                                                "Windows Desktop Management",
                                                "Booting, Shut Down & Standby Options",
                                                "Start Menu & Taskbar",
                                                "Keyboard Shortcuts (Windows)",
                                                "Application Management using Control Panel",
                                                "Installing & Uninstalling Software",
                                                "System Tools: Disk Cleanup, Disk Defragmentation",
                                                "Working with Windows Explorer",
                                                "Basics of Linux OS",
                                                "File Management System"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Unit 1.3 */}
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Unit 3: Software Packages (MS Office)
                                        </h4>
                                        <div className="space-y-3 pl-4">
                                            <div>
                                                <p className="text-sm font-medium text-blue-600 mb-2">Word Processing (MS Word)</p>
                                                <div className="grid md:grid-cols-2 gap-2 ml-4">
                                                    {["Word processing concepts", "Opening, Closing & Saving documents", "Editing text (Find & Replace)", "Language checking & Thesaurus", "Formatting, Spell Check, AutoCorrect", "Bullets & Numbering", "Paragraph & Page Formatting", "Header & Footer", "Tables (Insert, Format, Import)", "Pictures & Video insertion", "Mail Merge", "Printing documents", "Keyboard Shortcuts"].map((topic, idx) => (
                                                        <div key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-blue-400 mt-1" /><span className="text-xs text-muted-foreground">{topic}</span></div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-blue-600 mb-2 mt-3">Spreadsheet (MS Excel)</p>
                                                <div className="grid md:grid-cols-2 gap-2 ml-4">
                                                    {["Spreadsheet concepts", "Managing & Formatting worksheets", "Entering & Editing data", "Printing worksheets", "Organizing Charts & Graphs", "Formulas & Functions", "Mathematical, Statistical, Financial Functions", "Logical, Date & Time Functions", "Cell Referencing (Relative, Absolute, Mixed)", "Data Sorting & Filtering", "Pivot Tables", "Keyboard Shortcuts"].map((topic, idx) => (
                                                        <div key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-blue-400 mt-1" /><span className="text-xs text-muted-foreground">{topic}</span></div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-blue-600 mb-2 mt-3">Presentation Software (MS PowerPoint)</p>
                                                <div className="grid md:grid-cols-2 gap-2 ml-4">
                                                    {["Creating presentations", "Using Templates & Master Slide", "Adding & Navigating slides", "Slide Show & Transitions", "Text formatting & Animations", "Inserting Clip Art, Sound/Movies", "Copy, Move, Delete slides", "Printing Handouts", "Keyboard Shortcuts"].map((topic, idx) => (
                                                        <div key={idx} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-blue-400 mt-1" /><span className="text-xs text-muted-foreground">{topic}</span></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Unit 1.4 */}
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Unit 4: Working with Internet
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Basics of Computer Networks",
                                                "Types of Networks (LAN, MAN, WAN)",
                                                "ISP (Internet Service Provider)",
                                                "Web Browsers & Search Engines",
                                                "World Wide Web (WWW)",
                                                "URL & Domain Names",
                                                "IP Address (IPv4, IPv6)",
                                                "DNS (Domain Name System)",
                                                "Applications of Internet",
                                                "Chatting & Video Conferencing",
                                                "Email Management",
                                                "Sending/Receiving Emails with Attachments",
                                                "Address Book",
                                                "Uploading/Downloading Files",
                                                "Netiquette (Online Etiquette)",
                                                "Social Media Platforms",
                                                "E-Commerce & E-Governance",
                                                "Social Impact of ICT"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Unit 1.5 */}
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 border-b pb-2">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Unit 5: Cyber Security
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3 pl-4">
                                            {[
                                                "Computer Virus, Worms, Trojan Horses",
                                                "Anti-Virus Software (Types & Functions)",
                                                "Spyware, Malware, Adware, Ransomware",
                                                "Spams & Phishing Attacks",
                                                "Data Backup & Recovery Tools",
                                                "Indian IT Act 2000 & Amendments",
                                                "Types of Cyber Crime",
                                                "Firewall & Cookies",
                                                "Hackers & Crackers (White Hat, Black Hat)",
                                                "Cyber Security Techniques",
                                                "Authentication & Authorization",
                                                "Encryption & Decryption",
                                                "Digital Signatures",
                                                "Steganography",
                                                "Biometric Security",
                                                "Two-Factor Authentication (2FA)",
                                                "VPN (Virtual Private Network)",
                                                "Cyber Safety Tips & Best Practices"
                                            ].map((topic, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ==================== SUBJECT 2: GENERAL KNOWLEDGE & CURRENT AFFAIRS ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.gk}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">2. General Knowledge & Current Affairs</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">25-30 Questions</span>
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
                                                "Panchayati Raj & Local Governance",
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
                                            Uttarakhand Specific GK (Important)
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
                                                "Uttarakhand Schemes & Policies",
                                                "Famous Personalities of Uttarakhand",
                                                "Uttarakhand Sports & Achievements",
                                                "Important Days celebrated in Uttarakhand"
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

                        {/* ==================== SUBJECT 3: GENERAL HINDI ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.hindi}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">3. General Hindi (सामान्य हिन्दी)</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">15-20 Questions</span>
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

                        {/* ==================== SUBJECT 4: REASONING ABILITY ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.reasoning}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">4. Reasoning Ability</h3>
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

                        {/* ==================== SUBJECT 5: NUMERICAL ABILITY ==================== */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        {subjectIcons.maths}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">5. Numerical Ability (Mathematics)</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10-15 Questions</span>
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
                        <h2 className="text-3xl font-bold mb-4">Most Important Topics for UKSSSC Police</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            High-weightage topics that you should prioritize in your preparation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { subject: "Computer Knowledge", topics: "MS Office (Word/Excel/PowerPoint), Windows Shortcuts, Internet Basics, Cyber Security (Virus, Firewall)", color: "blue" },
                            { subject: "General Knowledge", topics: "Uttarakhand GK (Culture, History, Tourism), Current Affairs (6 months), Indian Polity", color: "green" },
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
                            <h2 className="text-3xl font-bold mb-4">Smart Preparation Tips for UK Police Exam</h2>
                            <p className="text-muted-foreground mb-6">
                                Follow these proven strategies to maximize your score in UKSSSC Police Constable examination
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Focus on Uttarakhand GK — 5-7 questions expected from state-specific topics",
                                    "Practice MS Office practically on your computer for Computer section",
                                    "Master Percentage, Profit-Loss & Average for Numerical Ability",
                                    "Learn Hindi grammar rules (Sandhi, Samas, Muhavare) thoroughly",
                                    "Solve 20-25 Reasoning questions daily to improve speed",
                                    "Attempt full-length mock tests regularly for time management",
                                    "Review last 6 months current affairs (National & International)",
                                    "Practice OMR sheet filling to avoid negative marking"
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
                                Access free mock tests designed exactly as per latest UKSSSC Police pattern
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
                            Common <span className="text-primary">Questions</span> About UK Police Exam
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find answers to the most commonly asked questions about UKSSSC Police Constable exam pattern, syllabus, and preparation
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
                    <h2 className="text-xl font-semibold mb-3">UKSSSC Police Constable Complete Syllabus 2025-26 - All Subjects</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides the complete syllabus for Uttarakhand Police Constable exam conducted by Uttarakhand Subordinate Service Selection Commission (UKSSSC).
                        The syllabus includes 5 main subjects: Computer Knowledge (5 units covering Basic Concepts, Operating System, MS Office, Internet & Cyber Security),
                        General Knowledge & Current Affairs (including Indian History, Polity, Economy, Geography, Science, and Uttarakhand-specific GK),
                        General Hindi (Grammar, Composition, Literature), Reasoning Ability (Verbal & Non-Verbal), and Numerical Ability (Arithmetic, Algebra, Geometry, Data Interpretation).
                        Prepare effectively with our free mock tests, previous year papers and topic-wise practice sets.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2025-26 UK POLICE TEST | All exam names and syllabi are property of their respective owners. Syllabus source: UKSSSC Official Notification.
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}