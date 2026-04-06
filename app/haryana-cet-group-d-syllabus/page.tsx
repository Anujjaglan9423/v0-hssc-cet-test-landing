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
    MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HaryanaCETGroupDSyllabusPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "How many questions are asked from each subject in Group D?",
            answer: "As per the official syllabus weightage: General Awareness (30% - combining India GK 15% + General Science 15%), Reasoning (10%), Quantitative Ability (15%), English (10%), Hindi (10%), and General Knowledge of Haryana (25%). Total 100 marks."
        },
        {
            question: "What is the negative marking in Haryana CET Group D?",
            answer: "The official notification states there is a no negative marking till you skip/unattempt any question of 1 mark."
        },
        {
            question: "What are the main topics in Haryana GK for Group D?",
            answer: "Haryana GK includes History, Literature, Geography, Economy, Civics, Polity, Environment, Art, Culture, Customs, Society, and Current Affairs of Haryana. This section has the highest weightage of 25%."
        },
        {
            question: "Where can I download the official Haryana CET Group D syllabus PDF?",
            answer: "You can download the official Group D syllabus PDF from the HSSC website using the 'Download Official Syllabus' button on this page. The direct link is: hssc.gov.in/group_d/Syllabus_d.pdf"
        },
        {
            question: "Is the exam pattern same for all Group D posts?",
            answer: "Yes, the syllabus and exam pattern for Group D posts under Advt. No. 1/2023 are as mentioned above. However, always check the specific advertisement for any post-wise changes."
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
                        Official Syllabus - Haryana Staff Selection Commission | Advt. No. 1/2023
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Haryana CET
                        <span className="text-primary"> Group D</span> Syllabus
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                        Complete breakdown of subjects, topics, and exam pattern for
                        <strong className="text-foreground"> HSSC Group D (CET)</strong> recruitment as per Advt. No. 1/2023
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

            {/* Exam Pattern & Official Syllabus Overview */}
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

                            {/* Official Syllabus Download Button */}
                            <Link href="https://hssc.gov.in/group_d/Syllabus_d.pdf" target="_blank" rel="noopener noreferrer">
                                <Button variant="default" size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                                    <FileText className="w-4 h-4" />
                                    Download Official Syllabus (HSSC) PDF
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                            {[
                                { label: "Total Questions", value: "100", color: "from-blue-500 to-blue-600" },
                                { label: "Total Marks", value: "100", color: "from-green-500 to-green-600" },
                                { label: "Duration", value: "90 Minutes", color: "from-orange-500 to-orange-600" },
                                { label: "Negative Marking", value: "Skip: -1", color: "from-red-500 to-red-600" }
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
                            Detailed <span className="text-primary">Syllabus</span> Breakdown with Weightage
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Complete topic-wise syllabus for Haryana CET Group D examination as per official HSSC notification
                        </p>
                    </div>

                    {/* Syllabus Cards */}
                    <div className="space-y-6">

                        {/* 1. General Awareness (India) */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Globe className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">General Awareness (India)</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">15% Weightage</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Indian History & Freedom Struggle",
                                        "Indian Polity & Constitution",
                                        "Indian Art, Culture & Heritage",
                                        "Indian Economy",
                                        "Geography (India & World)",
                                        "National/International Organizations"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2. General Science */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Code2 className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">General Science</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">15% Weightage</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        "Physics (Basic Concepts)",
                                        "Chemistry (Everyday Science)",
                                        "Biology (Human Body, Plants, Animals)"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3. Reasoning */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Brain className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">General Reasoning</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10% Weightage</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Alphabetical Order & Series",
                                        "Coding-Decoding",
                                        "Direction & Distance",
                                        "Order & Ranking",
                                        "Blood Relations",
                                        "Analogy & Classification",
                                        "Clock & Calendar",
                                        "Mirror & Water Images",
                                        "Syllogism",
                                        "Sitting Arrangement",
                                        "Missing Characters",
                                        "Statement & Assumption/Conclusion",
                                        "Counting Figures",
                                        "Non-Verbal Series"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4. Quantitative Ability */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <Calculator className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Quantitative Ability</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">15% Weightage</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Number System, Simplification",
                                        "Decimals & Fractions",
                                        "LCM & HCF",
                                        "Ratio & Proportion",
                                        "Percentage",
                                        "Profit & Loss",
                                        "Discount",
                                        "Simple & Compound Interest",
                                        "Average",
                                        "Time & Work",
                                        "Time, Speed & Distance",
                                        "Mixture & Allegation",
                                        "Partnership",
                                        "Mensuration (2D & 3D)",
                                        "Algebra & Geometry (Basic)",
                                        "Trigonometry (Basic)"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
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
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10% Weightage</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "English Grammar",
                                        "Spotting Errors",
                                        "Fill in the Blanks",
                                        "Synonyms & Antonyms",
                                        "Spellings Correction",
                                        "Idioms & Phrases",
                                        "Sentence Improvement",
                                        "Active & Passive Voice",
                                        "Direct & Indirect Speech",
                                        "Sentence Rearrangement",
                                        "Tenses"
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
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white">10% Weightage</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "वर्ण, स्वर, व्यंजन",
                                        "शब्द (तत्सम, तद्भव)",
                                        "संज्ञा, सर्वनाम, विशेषण",
                                        "क्रिया, क्रियाविशेषण",
                                        "वचन, लिंग, कारक, काल",
                                        "अलंकार",
                                        "विकारी एवं अविकारी शब्द",
                                        "पद, पदबंध",
                                        "मुहावरे एवं लोकोक्तियाँ",
                                        "संधि, उपसर्ग, प्रत्यय, समास",
                                        "पर्यायवाची, विलोम, अनेकार्थी शब्द",
                                        "वाक्य शुद्धिकरण",
                                        "विराम चिन्ह",
                                        "अनेक शब्दों के लिए एक शब्द"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 7. General Knowledge of Haryana - SPECIAL SECTION */}
                        <div className="rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="bg-gradient-to-r from-primary/90 to-primary p-4 md:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">General Knowledge of Haryana</h3>
                                    <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full text-white font-bold">25% Weightage (Highest)</span>
                                </div>
                            </div>
                            <div className="p-5 md:p-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "History of Haryana",
                                        "Literature of Haryana",
                                        "Geography of Haryana",
                                        "Economy of Haryana",
                                        "Civics & Polity of Haryana",
                                        "Environment of Haryana",
                                        "Art & Culture of Haryana",
                                        "Customs & Society of Haryana",
                                        "Current Affairs of Haryana"
                                    ].map((topic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 group">
                                            <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">{topic}</span>
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
                        <h2 className="text-3xl font-bold mb-4">Most Important Topics for CET Group D</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            High-weightage topics that you should prioritize in your preparation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { subject: "Haryana GK", topics: "History, Culture, Current Affairs, Geography of Haryana", weight: "25%", color: "primary" },
                            { subject: "General Awareness", topics: "Indian Polity, History, Economy", weight: "15%", color: "blue" },
                            { subject: "General Science", topics: "Basic Physics, Chemistry, Biology (Everyday Science)", weight: "15%", color: "teal" },
                            { subject: "Quantitative", topics: "Simplification, Percentage, Profit-Loss, Average", weight: "15%", color: "green" },
                            { subject: "Reasoning", topics: "Series, Coding-Decoding, Blood Relations, Syllogism", weight: "10%", color: "purple" },
                            { subject: "English & Hindi", topics: "Grammar, Error Detection, Vocabulary, मुहावरे", weight: "10% each", color: "cyan" }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-card rounded-xl p-5 border-l-4 border-${item.color === 'primary' ? 'primary' : item.color}-500 shadow-sm hover:shadow-md transition-all`}>
                                <h3 className={`font-bold text-lg mb-2 text-${item.color === 'primary' ? 'primary' : item.color}-600`}>{item.subject}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.topics}</p>
                                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">Weightage: {item.weight}</span>
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
                            <h2 className="text-3xl font-bold mb-4">Smart Preparation Tips for CET Group D 2026</h2>
                            <p className="text-muted-foreground mb-6">
                                Follow these proven strategies to maximize your score in Haryana CET Group D examination
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Focus on Haryana GK — it has the highest weightage of 25%",
                                    "Study Indian Polity, History and Everyday Science for General Awareness",
                                    "Practice basic Quantitative topics like Simplification, Percentage, Profit-Loss",
                                    "Solve Reasoning puzzles and series questions daily",
                                    "Improve grammar and vocabulary for English & Hindi sections",
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
                                Access free mock tests designed exactly as per latest CET Group D pattern
                            </p>
                            <Link href="/signup">
                                <Button size="lg" className="gap-2">
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
                            Common <span className="text-primary">Questions</span> About Haryana CET Group D
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Find answers to the most commonly asked questions about Haryana CET Group D exam pattern, syllabus, and preparation
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
                    <h2 className="text-xl font-semibold mb-3">HSSC Group D Syllabus 2026 - Complete Guide (Advt. No. 1/2023)</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        This page provides the complete syllabus for Haryana CET (Common Eligibility Test) for Group D posts conducted by
                        Haryana Staff Selection Commission (HSSC) as per Advertisement No. 1/2023. The syllabus includes General Awareness (India & Science),
                        Reasoning, Quantitative Ability, English Language, Hindi Language, and most importantly, General Knowledge of Haryana with 25% weightage.
                        Prepare effectively with our free mock tests, previous year papers and topic-wise practice sets.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                        © 2026 CET TEST | All exam names and syllabi are property of their respective owners. | Based on HSSC Advt. No. 1/2023 for Group D
                    </p>
                </div>
            </section>

            <FooterLinkFooter />
        </div>
    )
}