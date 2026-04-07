"use client"

import type React from "react"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import {
    BookOpen,
    Brain,
    Calculator,
    Globe,
    Code2,
    Shield,
    ChevronRight,
    Sparkles,
    FileText,
    Target,
    Clock,
    Award,
    CheckCircle2,
    Ruler,
    Timer,
    Medal,
    Users,
    Laptop,
    Activity
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HaryanaPoliceConstableSyllabusPage() {
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
                        <Shield className="w-4 h-4" />
                        Official Syllabus - Haryana Police Department
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Haryana Police
                        <span className="text-primary"> Constable</span> Syllabus
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete selection process, physical standards, and syllabus for
                        <strong className="text-foreground"> Haryana Police Constable (Male/Female)</strong> recruitment 2026-26
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Shield className="w-4 h-4 text-primary" />
                            <span>97 Marks Knowledge Test</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Ruler className="w-4 h-4 text-primary" />
                            <span>PMT + PST Qualifying</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Medal className="w-4 h-4 text-primary" />
                            <span>NCC Bonus (3 Marks)</span>
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

            {/* Selection Process Overview */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-primary/20">
                                <Target className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">Selection Process Overview</h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { step: "Step 1", title: "CET (Qualifying)", description: "Common Eligibility Test merit-based shortlisting", icon: BookOpen, color: "blue" },
                                { step: "Step 2", title: "Physical Measurement Test", description: "Height & Chest measurement standards", icon: Ruler, color: "orange" },
                                { step: "Step 3", title: "Physical Screening Test", description: "Race for physical fitness & endurance", icon: Timer, color: "green" },
                                { step: "Step 4", title: "Knowledge Test", description: "97% weightage - Main written exam", icon: FileText, color: "purple" }
                            ].map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="bg-card rounded-xl p-5 text-center border shadow-sm h-full">
                                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                                            <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                                        </div>
                                        <span className="text-xs font-semibold text-primary block mb-1">{item.step}</span>
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground">{item.description}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Physical Standards Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Physical <span className="text-primary">Standards</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Physical Measurement Test (PMT) and Physical Screening Test (PST) requirements
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Physical Measurement Test */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                                <div className="flex items-center gap-3">
                                    <Ruler className="w-5 h-5 text-white" />
                                    <h3 className="text-xl font-bold text-white">Physical Measurement Test (PMT)</h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-3 font-semibold">Category</th>
                                                <th className="text-left py-3 font-semibold">Height</th>
                                                <th className="text-left py-3 font-semibold">Chest (Male)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-3 font-medium">Male (General)</td>
                                                <td className="py-3">170 cm</td>
                                                <td className="py-3">83 cm (un-expanded) + 4 cm expansion</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-3 font-medium">Male (Reserve Categories)</td>
                                                <td className="py-3">168 cm</td>
                                                <td className="py-3">81 cm (un-expanded) + 4 cm expansion</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-3 font-medium">Female (General)</td>
                                                <td className="py-3">158 cm</td>
                                                <td className="py-3">NIL</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 font-medium">Female (Reserve Categories)</td>
                                                <td className="py-3">156 cm</td>
                                                <td className="py-3">NIL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-800">
                                    <strong>Note:</strong> Digital measurement devices used for tamper-proof and fair measurement. Results displayed on official website.
                                </div>
                            </div>
                        </div>

                        {/* Physical Screening Test */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                                <div className="flex items-center gap-3">
                                    <Timer className="w-5 h-5 text-white" />
                                    <h3 className="text-xl font-bold text-white">Physical Screening Test (PST)</h3>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-3 font-semibold">Candidate</th>
                                                <th className="text-left py-3 font-semibold">Race Distance</th>
                                                <th className="text-left py-3 font-semibold">Qualifying Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-3 font-medium">Male</td>
                                                <td className="py-3">2.5 Kilometer</td>
                                                <td className="py-3">12 Minutes</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-3 font-medium">Female</td>
                                                <td className="py-3">1.0 Kilometer</td>
                                                <td className="py-3">6 Minutes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 font-medium">Ex. Serviceman</td>
                                                <td className="py-3">1.0 Kilometer</td>
                                                <td className="py-3">5 Minutes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 p-3 bg-green-50 rounded-lg text-xs text-green-800">
                                    <strong>Note:</strong> RFID technology or superior technology used for reliability. Medical fitness responsibility lies with candidate.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Test Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                            <FileText className="w-4 h-4" />
                            Main Examination
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Knowledge Test <span className="text-primary">(97% Weightage)</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Objective type multiple choice questions - Bilingual (Hindi/English) - OMR based
                        </p>
                    </div>

                    {/* Exam Pattern Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {[
                            { label: "Total Marks", value: "97", icon: Award, color: "from-yellow-500 to-yellow-600" },
                            { label: "Question Type", value: "MCQ", icon: CheckCircle2, color: "from-blue-500 to-blue-600" },
                            { label: "Negative Marking", value: "For unattempted only", icon: AlertCircle, color: "from-red-500 to-red-600" },
                            { label: "Standard", value: "10+2 Level", icon: BookOpen, color: "from-purple-500 to-purple-600" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-card rounded-xl p-5 text-center border shadow-sm">
                                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                <p className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Important Note about Negative Marking */}
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-red-800 mb-1">Important: Negative Marking Rule</h4>
                                <p className="text-sm text-red-700">
                                    No negative marking for wrong answers. However, for every un-attempted question, there shall be
                                    <strong> negative marking of minus 0.97 marks</strong>. Fill the 5th bubble in OMR sheet if you don't wish to attempt a question.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Syllabus Content */}
                    <div className="rounded-2xl border bg-card overflow-hidden shadow-lg">
                        <div className="bg-gradient-to-r from-primary to-primary/90 p-5">
                            <div className="flex items-center gap-3">
                                <BookOpen className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">Syllabus for Knowledge Test (97 Marks)</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-6">

                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-primary" />
                                            General Subjects
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                "General Studies",
                                                "General Science",
                                                "Current Affairs",
                                                "General Reasoning",
                                                "Mental Aptitude",
                                                "Numerical Ability"
                                            ].map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                            <Activity className="w-4 h-4 text-primary" />
                                            Specialized Subjects
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Agriculture",
                                                "Animal Husbandry",
                                                "Other relevant fields/trade"
                                            ].map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                            <Laptop className="w-4 h-4 text-primary" />
                                            Computer Knowledge
                                        </h4>
                                        <div className="bg-primary/5 rounded-lg p-3 mb-2">
                                            <span className="text-sm font-medium">Minimum 10% questions</span>
                                        </div>
                                        <ul className="space-y-2 mt-2">
                                            {[
                                                "Basic Computer Knowledge",
                                                "Computer Fundamentals",
                                                "MS Office Basics",
                                                "Internet & Email"
                                            ].map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            Haryana Specific
                                        </h4>
                                        <div className="bg-primary/5 rounded-lg p-3 mb-2">
                                            <span className="text-sm font-medium">Minimum 20% questions</span>
                                        </div>
                                        <ul className="space-y-2 mt-2">
                                            {[
                                                "Basic Knowledge about Haryana",
                                                "Haryana History & Culture",
                                                "Haryana Geography",
                                                "Haryana Economy",
                                                "Haryana Polity & Administration"
                                            ].map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Standard Note */}
                            <div className="mt-6 p-4 bg-muted rounded-lg">
                                <p className="text-sm text-center text-muted-foreground">
                                    <strong>Standard of Questions:</strong> As expected of an educated person having passed 10+2 examination
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Weightage Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl border bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden shadow-lg">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-5">
                            <div className="flex items-center gap-3">
                                <Medal className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">Additional Weightage (Maximum 03 Marks)</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { level: "NCC Certificate - Level A", marks: "01 Mark" },
                                    { level: "NCC Certificate - Level B", marks: "02 Marks" },
                                    { level: "NCC Certificate - Level C", marks: "03 Marks" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-4 text-center border shadow-sm">
                                        <Award className="w-8 h-8 mx-auto text-amber-600 mb-2" />
                                        <p className="font-semibold text-sm mb-1">{item.level}</p>
                                        <p className="text-lg font-bold text-amber-600">{item.marks}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 bg-amber-100 rounded-lg text-xs text-amber-800 text-center">
                                <strong>Note:</strong> NCC certificate should be issued by Director General, NCC with clearly mentioned Grade/Level (A, B or C)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cut-off Marks Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl border bg-card p-6 shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">General Category</h3>
                            <p className="text-3xl font-bold text-blue-600 mb-2">50%</p>
                            <p className="text-sm text-muted-foreground">Minimum qualifying marks in Knowledge Test</p>
                        </div>
                        <div className="rounded-2xl border bg-card p-6 shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                <Users className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Reserved Categories</h3>
                            <p className="text-3xl font-bold text-green-600 mb-2">40%</p>
                            <p className="text-sm text-muted-foreground">10% concession (Vertical & Horizontal reservations)</p>
                        </div>
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
                            <h2 className="text-3xl font-bold mb-4">Smart Preparation Tips</h2>
                            <p className="text-muted-foreground mb-6">
                                Follow these proven strategies to crack Haryana Police Constable examination
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Focus on Haryana GK - 20% weightage, crucial for scoring high",
                                    "Practice Computer basics - Minimum 10% questions guaranteed",
                                    "Prepare Agriculture & Animal Husbandry for specialized section",
                                    "Don't leave any question unattempted (negative marking applies)",
                                    "Maintain physical fitness for PMT & PST requirements",
                                    "Practice previous year papers and mock tests regularly"
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
                                Access free mock tests designed exactly as per latest Haryana Police Constable pattern
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

            {/* SEO Footer */}
            <section className="py-12 px-4 bg-muted/30 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-3">Haryana Police Constable Syllabus 2026 - Complete Guide</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides the complete selection process and syllabus for Haryana Police Constable recruitment.
                        Includes Physical Measurement Test (PMT) standards, Physical Screening Test (PST) requirements,
                        Knowledge Test syllabus (97% weightage) with topic-wise breakdown, NCC additional weightage,
                        and exam pattern details as per official notification.
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


// AlertCircle component
function AlertCircle({ className = "", ...props }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    )
}

// MapPin component
function MapPin({ className = "", ...props }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}