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
    Users,
    FileText,
    GraduationCap,
    Briefcase,
    TrendingUp,
    CheckCircle2,
    MapPin,
    Calendar,
    FlaskConical,
    Mic2,
    Wrench,
    School,
    HardHat,
    ChevronDown,
    FolderOpen,
    Library,
    Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Define TypeScript interfaces
interface SubExam {
    id: string
    name: string
    description: string
    features: string[]
    totalQuestions: number | string
    duration: string
    link: string
    isUpcoming?: boolean
}

interface MainExam {
    id: string
    name: string
    shortName?: string
    description: string
    features: string[]
    totalQuestions: number | string
    duration: string
    link: string
    external?: boolean
}

interface ExamGroup {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    color: string
    badgeColor: string
    isExpandable: boolean
    subExamCount?: string
    exams: MainExam[]
    subExams?: SubExam[]
}

export default function HaryanaExamSyllabusPage() {
    const [openGroups, setOpenGroups] = useState<string[]>([])

    const toggleGroup = (groupId: string) => {
        setOpenGroups(prev =>
            prev.includes(groupId)
                ? prev.filter(id => id !== groupId)
                : [...prev, groupId]
        )
    }

    // Main exam groups with their sub-exams
    const examGroups: ExamGroup[] = [
        {
            id: "cet-group-c-d",
            title: "HSSC CET (Common Eligibility Test)",
            description: "Common Eligibility Test for Group C and Group D posts in Haryana Government",
            icon: <Users className="w-6 h-6" />,
            color: "from-blue-600 to-blue-700",
            badgeColor: "blue",
            isExpandable: false,
            exams: [
                {
                    id: "haryana-cet-group-c",
                    name: "HSSC CET Group C",
                    shortName: "Group C",
                    description: "Complete syllabus for Haryana CET Group C examination. Includes General Awareness, Reasoning, Quantitative Ability, Computer Knowledge, English & Hindi Language.",
                    features: ["6 Main Subjects", "100 Marks", "90 Minutes", "Negative Marking: -1"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "/haryana-cet-group-c-syllabus",
                    external: false,
                },
                {
                    id: "group-d-advt-1-2023",
                    name: "HSSC CET Group D",
                    shortName: "Group D",
                    description: "Complete syllabus for Haryana CET Group D examination. Features dedicated Haryana GK section with 25% weightage.",
                    features: ["7 Subjects", "Haryana GK (25%)", "100 Marks", "90 Minutes"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "/haryana-cet-group-d-syllabus",
                    external: false,
                }
            ]
        },
        {
            id: "tgt-posts",
            title: "TGT (Trained Graduate Teacher) Posts",
            description: "Teaching positions in Haryana Education Department",
            icon: <School className="w-6 h-6" />,
            color: "from-cyan-600 to-cyan-700",
            badgeColor: "cyan",
            isExpandable: true,
            subExamCount: "8 Posts",
            exams: [
                {
                    id: "tgt-punjabi-main",
                    name: "TGT Punjabi (ROH) Advt. No. 4/2023",
                    shortName: "TGT Punjabi",
                    description: "Syllabus for TGT Punjabi under ROH category. Language proficiency and teaching methodology.",
                    features: ["Language Proficiency", "Teaching Methods", "Punjabi Literature"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                },
                {
                    id: "tgt-advt-2-2023-main",
                    name: "Various Posts Under Advt. No. 2/2023",
                    shortName: "TGT Posts",
                    description: "Syllabus for various TGT posts. Subject specialization and teaching aptitude.",
                    features: ["Subject Specialization", "Teaching Aptitude", "Pedagogy"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                },
                {
                    id: "tgt-sanskrit-main",
                    name: "TGT Sanskrit (as per future notification)",
                    shortName: "TGT Sanskrit",
                    description: "Syllabus for TGT Sanskrit posts (when notified). Sanskrit language proficiency.",
                    features: ["Sanskrit Grammar", "Literature", "Teaching Methods"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                }
            ],
            subExams: [
                {
                    id: "tgt-punjabi",
                    name: "TGT Punjabi (ROH) Advt. No. 4/2023",
                    description: "Syllabus for TGT Punjabi under ROH category. Language proficiency and teaching methodology.",
                    features: ["Language Proficiency", "Teaching Methods", "Punjabi Literature"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "tgt-advt-2-2023",
                    name: "Various Posts Under Advt. No. 2/2023",
                    description: "Syllabus for various TGT posts. Subject specialization and teaching aptitude.",
                    features: ["Subject Specialization", "Teaching Aptitude", "Pedagogy"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "tgt-sanskrit",
                    name: "TGT Sanskrit (as per future notification)",
                    description: "Syllabus for TGT Sanskrit posts (when notified). Sanskrit language proficiency.",
                    features: ["Sanskrit Grammar", "Literature", "Teaching Methods"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    isUpcoming: true,
                },
                {
                    id: "tgt-hindi",
                    name: "TGT Hindi (as per future notification)",
                    description: "Syllabus for TGT Hindi posts (when notified). Hindi language and literature.",
                    features: ["Hindi Grammar", "Hindi Literature", "Teaching Aptitude"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    isUpcoming: true,
                },
                {
                    id: "tgt-english",
                    name: "TGT English (as per future notification)",
                    description: "Syllabus for TGT English posts (when notified). English language and literature.",
                    features: ["English Grammar", "English Literature", "Teaching Methods"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    isUpcoming: true,
                },
                {
                    id: "tgt-social-studies",
                    name: "TGT Social Studies (as per future notification)",
                    description: "Syllabus for TGT Social Studies posts. History, Geography, Civics.",
                    features: ["History", "Geography", "Civics", "Teaching Methods"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    isUpcoming: true,
                },
                {
                    id: "tgt-science",
                    name: "TGT Science (as per future notification)",
                    description: "Syllabus for TGT Science posts. Physics, Chemistry, Biology.",
                    features: ["Physics", "Chemistry", "Biology", "Teaching Methods"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    isUpcoming: true,
                },
                {
                    id: "tgt-maths",
                    name: "TGT Mathematics (as per future notification)",
                    description: "Syllabus for TGT Mathematics posts. Algebra, Geometry, Calculus.",
                    features: ["Algebra", "Geometry", "Trigonometry", "Teaching Methods"],
                    totalQuestions: 120,
                    duration: "120 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    isUpcoming: true,
                }
            ]
        },
        {
            id: "skill-test-group-c",
            title: "Skill / Written Test for Group-C Posts",
            description: "Skill assessment and written examinations for various Group C positions",
            icon: <Wrench className="w-6 h-6" />,
            color: "from-purple-600 to-purple-700",
            badgeColor: "purple",
            isExpandable: true,
            subExamCount: "25+ Posts",
            exams: [
                {
                    id: "skill-clerk",
                    name: "Clerk / Office Assistant Skill Test",
                    shortName: "Clerk",
                    description: "Typing speed, computer proficiency, and office management skills",
                    features: ["Typing Test", "Computer Proficiency", "Office Management"],
                    totalQuestions: "Practical",
                    duration: "As per post",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                },
                {
                    id: "skill-stenographer",
                    name: "Stenographer Skill Test",
                    shortName: "Stenographer",
                    description: "Shorthand speed, transcription, and dictation skills",
                    features: ["Shorthand Test", "Transcription", "Dictation Speed"],
                    totalQuestions: "Practical",
                    duration: "As per post",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                },
                {
                    id: "skill-junior-engineer",
                    name: "Junior Engineer (JE) Written Test",
                    shortName: "JE",
                    description: "Technical knowledge for Civil, Electrical, Mechanical Engineering posts",
                    features: ["Technical Subjects", "Engineering Drawing", "Site Knowledge"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                }
            ],
            subExams: [
                {
                    id: "skill-clerk-full",
                    name: "Clerk / Office Assistant Skill Test",
                    description: "Typing speed, computer proficiency, and office management skills",
                    features: ["Typing Test", "Computer Proficiency", "Office Management"],
                    totalQuestions: "Practical",
                    duration: "As per post",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-stenographer-full",
                    name: "Stenographer Skill Test",
                    description: "Shorthand speed, transcription, and dictation skills",
                    features: ["Shorthand Test", "Transcription", "Dictation Speed"],
                    totalQuestions: "Practical",
                    duration: "As per post",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-junior-engineer-full",
                    name: "Junior Engineer (JE) Written Test",
                    description: "Technical knowledge for Civil, Electrical, Mechanical Engineering posts",
                    features: ["Technical Subjects", "Engineering Drawing", "Site Knowledge"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-programmer",
                    name: "Programmer / IT Officer Skill Test",
                    description: "Programming knowledge, database management, and IT skills",
                    features: ["Programming", "Database", "Networking", "IT Security"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-accountant",
                    name: "Accountant / Auditor Written Test",
                    description: "Financial accounting, taxation, and audit procedures",
                    features: ["Financial Accounting", "Taxation", "Audit Procedures"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-field-inspector",
                    name: "Field Inspector / Patwari Skill Test",
                    description: "Land records, revenue procedures, and field inspection",
                    features: ["Land Records", "Revenue Procedures", "Field Work"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-lab-technician",
                    name: "Lab Technician / Scientific Assistant Skill Test",
                    description: "Laboratory procedures, equipment handling, and scientific knowledge",
                    features: ["Lab Procedures", "Equipment Handling", "Safety Protocols"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-nurse",
                    name: "Staff Nurse / ANM Skill Test",
                    description: "Nursing procedures, patient care, and medical knowledge",
                    features: ["Nursing Procedures", "Patient Care", "Medical Knowledge"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-pharmacist",
                    name: "Pharmacist Skill Test",
                    description: "Pharmaceutical knowledge, drug dispensing, and inventory management",
                    features: ["Pharmaceutical Knowledge", "Drug Dispensing", "Inventory Management"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-veterinary",
                    name: "Veterinary Pharmacist / Livestock Inspector",
                    description: "Animal health, veterinary procedures, and livestock management",
                    features: ["Animal Health", "Veterinary Procedures", "Livestock Management"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-agriculture",
                    name: "Agriculture Development Officer (ADO) Test",
                    description: "Agricultural practices, crop science, and extension services",
                    features: ["Crop Science", "Agricultural Practices", "Extension Services"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-forest",
                    name: "Forest Guard / Wildlife Inspector",
                    description: "Forest conservation, wildlife protection, and environmental laws",
                    features: ["Forest Conservation", "Wildlife Protection", "Environmental Laws"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-fire",
                    name: "Fire Operator / Fireman Skill Test",
                    description: "Firefighting techniques, equipment handling, and emergency response",
                    features: ["Firefighting Techniques", "Equipment Handling", "Emergency Response"],
                    totalQuestions: "Practical",
                    duration: "Physical Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-driver",
                    name: "Driver / Conductor Skill Test",
                    description: "Driving skills, traffic rules, and vehicle maintenance",
                    features: ["Driving Skills", "Traffic Rules", "Vehicle Maintenance"],
                    totalQuestions: "Practical",
                    duration: "Driving Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-technician",
                    name: "Technician / Electrician Skill Test",
                    description: "Electrical systems, wiring, and equipment repair",
                    features: ["Electrical Systems", "Wiring", "Equipment Repair"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-welder",
                    name: "Welder / Fitter Skill Test",
                    description: "Welding techniques, fitting, and fabrication skills",
                    features: ["Welding Techniques", "Fitting", "Fabrication"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-carpenter",
                    name: "Carpenter / Mason Skill Test",
                    description: "Carpentry, masonry, and construction skills",
                    features: ["Carpentry", "Masonry", "Construction Skills"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-plumber",
                    name: "Plumber / Pipe Fitter Skill Test",
                    description: "Plumbing systems, pipe fitting, and water supply",
                    features: ["Plumbing Systems", "Pipe Fitting", "Water Supply"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-painter",
                    name: "Painter / Decorator Skill Test",
                    description: "Painting techniques, surface preparation, and decoration",
                    features: ["Painting Techniques", "Surface Preparation", "Decoration"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-helper",
                    name: "Helper / Attendant Skill Test",
                    description: "Basic skills assessment for helper positions",
                    features: ["Basic Skills", "Physical Fitness", "Task Execution"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-multi-tasking",
                    name: "Multi-Tasking Staff (MTS) Skill Test",
                    description: "General skills assessment for MTS positions",
                    features: ["General Skills", "Office Work", "Physical Tasks"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-security",
                    name: "Security Guard / Watchman Skill Test",
                    description: "Security procedures, physical fitness, and vigilance",
                    features: ["Security Procedures", "Physical Fitness", "Vigilance"],
                    totalQuestions: "Practical",
                    duration: "Physical Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-sweeper",
                    name: "Sweeper / Sanitary Worker Skill Test",
                    description: "Sanitation procedures, hygiene, and waste management",
                    features: ["Sanitation Procedures", "Hygiene", "Waste Management"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-mali",
                    name: "Mali / Gardener Skill Test",
                    description: "Gardening, plant care, and landscaping skills",
                    features: ["Gardening", "Plant Care", "Landscaping"],
                    totalQuestions: "Practical",
                    duration: "Skill Test",
                    link: "https://hssc.gov.in/examsyllabus",
                },
                {
                    id: "skill-chowkidar",
                    name: "Chowkidar / Watchman Skill Test",
                    description: "Security, patrolling, and premises monitoring",
                    features: ["Security", "Patrolling", "Monitoring"],
                    totalQuestions: "Practical",
                    duration: "Physical Test",
                    link: "https://hssc.gov.in/examsyllabus",
                }
            ]
        },
        {
            id: "other-exams",
            title: "Other HSSC Exams",
            description: "Additional recruitment exams including Group 49 and Scientific Assistant posts",
            icon: <Library className="w-6 h-6" />,
            color: "from-indigo-600 to-indigo-700",
            badgeColor: "indigo",
            isExpandable: false,
            exams: [
                {
                    id: "group-49",
                    name: "HSSC Group 49 Syllabus",
                    shortName: "Group 49",
                    description: "Complete syllabus for HSSC Group 49 examination. Includes all subjects and topics as per official HSSC notification.",
                    features: ["Official Syllabus", "Complete Coverage", "Latest Pattern"],
                    totalQuestions: "As per notification",
                    duration: "As per exam",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                },
                {
                    id: "senior-scientific-assistant",
                    name: "Senior Scientific Assistant & Scientific Assistant",
                    shortName: "Scientific Assistant",
                    description: "Syllabus for Senior Scientific Assistant & Scientific Assistant posts. Technical subjects and domain-specific topics.",
                    features: ["Technical Subjects", "Domain Specific", "Research Focus"],
                    totalQuestions: 100,
                    duration: "90 Minutes",
                    link: "https://hssc.gov.in/examsyllabus",
                    external: true,
                }
            ]
        }
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
                        Haryana Staff Selection Commission (HSSC) - Official Syllabi
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Haryana Exam
                        <span className="text-primary"> Syllabus</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete syllabus guide for all Haryana government examinations including
                        <strong className="text-foreground"> CET Group C & D, TGT, Skill Tests, and other HSSC recruitment exams</strong>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span>4 Exam Categories</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-primary" />
                            <span>35+ Individual Exams</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>Updated 2025-26</span>
                        </div>
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
                        Your Gateway to Haryana Government Jobs
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Complete Syllabus Collection for HSSC Exams</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Haryana Staff Selection Commission (HSSC) conducts various recruitment exams. Below you'll find all exam syllabi
                        organized by category. Expandable sections show 3 main exams on the card and all remaining exams when expanded.
                    </p>
                </div>
            </section>

            {/* Exam Groups Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            All <span className="text-primary">HSSC Exam Categories</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Exams are organized into logical groups. Click "Show All" to view complete list of sub-exams.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {examGroups.map((group) => (
                            <div key={group.id} className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                {/* Group Header */}
                                <div className={`bg-gradient-to-r ${group.color} p-5 md:p-6`}>
                                    <div className="flex items-center justify-between flex-wrap gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/20 rounded-xl">
                                                {group.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white">{group.title}</h3>
                                                <p className="text-white/80 text-sm mt-1">{group.description}</p>
                                            </div>
                                        </div>
                                        {group.isExpandable && group.subExams && group.subExams.length > 3 && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => toggleGroup(group.id)}
                                                className="bg-white/10 text-white border-white/20 hover:bg-white/20 cursor-pointer"
                                            >
                                                <Eye className="w-4 h-4 mr-2" />
                                                {openGroups.includes(group.id) ? "Show Less" : `Show All ${group.subExams.length} Sub-Exams`}
                                                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openGroups.includes(group.id) ? "rotate-180" : ""}`} />
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {/* Main Exam Cards - Shows minimum 3 exams */}
                                <div className="p-5 md:p-6">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {group.exams.slice(0, 3).map((exam) => (
                                            <div key={exam.id} className="rounded-xl border bg-card/50 p-4 hover:shadow-md transition-all">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h4 className="font-bold text-lg">{exam.name}</h4>
                                                    {(exam as any).isUpcoming && (
                                                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Upcoming</span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{exam.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {exam.features.slice(0, 3).map((feature, fIdx) => (
                                                        <span key={fIdx} className="text-xs bg-muted px-2 py-1 rounded-full">{feature}</span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                                                    <span>📋 {exam.totalQuestions} Qs</span>
                                                    <span>⏱️ {exam.duration}</span>
                                                </div>
                                                {exam.external ? (
                                                    <Link href={exam.link} target="_blank" rel="noopener noreferrer">
                                                        <Button size="sm" className="w-full gap-1 cursor-pointer">
                                                            View on HSSC <ChevronRight className="w-3 h-3" />
                                                        </Button>
                                                    </Link>
                                                ) : (
                                                    <Link href={exam.link}>
                                                        <Button size="sm" className="w-full gap-1 cursor-pointer">
                                                            View Syllabus <ChevronRight className="w-3 h-3" />
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Show remaining count if there are more than 3 exams and not expanded */}
                                    {group.isExpandable && group.subExams && group.subExams.length > 3 && !openGroups.includes(group.id) && (
                                        <div className="mt-4 text-center">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleGroup(group.id)}
                                                className="text-muted-foreground cursor-pointer"
                                            >
                                                <FolderOpen className="w-4 h-4 mr-2" />
                                                + {group.subExams.length - 3} more exams available. Click to view all
                                                <ChevronDown className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    )}

                                    {/* Expandable Sub-Exams Section - Shows ALL remaining exams when expanded */}
                                    {group.isExpandable && group.subExams && openGroups.includes(group.id) && (
                                        <div className="mt-6 pt-6 border-t">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="p-1.5 rounded-lg bg-primary/10">
                                                    <FolderOpen className="w-4 h-4 text-primary" />
                                                </div>
                                                <h4 className="font-semibold">All Sub-Exams under {group.title}</h4>
                                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{group.subExams.length} Exams</span>
                                            </div>
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {group.subExams.map((subExam) => (
                                                    <div key={subExam.id} className={`rounded-lg border p-4 ${subExam.isUpcoming ? "bg-muted/30" : "bg-card"}`}>
                                                        <div className="flex items-start justify-between">
                                                            <h5 className="font-medium text-sm mb-1">{subExam.name}</h5>
                                                            {subExam.isUpcoming && (
                                                                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Upcoming</span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-muted-foreground mb-2">{subExam.description}</p>
                                                        <div className="flex flex-wrap gap-1 mb-2">
                                                            {subExam.features.slice(0, 2).map((feature, fIdx) => (
                                                                <span key={fIdx} className="text-xs bg-muted px-1.5 py-0.5 rounded-full">{feature}</span>
                                                            ))}
                                                        </div>
                                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                            <span>{subExam.totalQuestions}</span>
                                                            <span>{subExam.duration}</span>
                                                        </div>
                                                        {!subExam.isUpcoming && (
                                                            <Link href={subExam.link} target="_blank" rel="noopener noreferrer">
                                                                <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-primary cursor-pointer">
                                                                    View Details →
                                                                </Button>
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">Complete Haryana Exam Syllabus Resource</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides comprehensive syllabus information for all Haryana government examinations conducted by
                        Haryana Staff Selection Commission (HSSC), including CET Group C & D, TGT posts, Scientific Assistant,
                        and over 25+ Skill Test posts. All syllabi are based on official HSSC notifications.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2025 CET TEST | All exam names and syllabi are property of their respective owners.
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}