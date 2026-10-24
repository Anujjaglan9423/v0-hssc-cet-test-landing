"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Ship, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "japan-q1",
        questionEn: "With reference to UNICORN mast project: 1. It is a joint India–US military tech initiative. 2. UNICORN is designed as a surface-to-air missile defense shield. Which are correct?",
        questionHi: "UNICORN मास्ट प्रोजेक्ट: 1. भारत-अमेरिका संयुक्त सैन्य तकनीक। 2. UNICORN सतह-से-हवा मिसाइल रक्षा कवच। कौन सही हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "d",
        explanationEn: "Both wrong. (1) UNICORN is India–Japan (not India–US). (2) UNICORN is a specialized stealth naval antenna system, not a missile shield.",
        explanationHi: "दोनों गलत। (1) UNICORN भारत-जापान (भारत-अमेरिका नहीं)। (2) UNICORN स्टेल्थ नौसैनिक एंटीना प्रणाली है, मिसाइल कवच नहीं।",
    },
    {
        id: "japan-q2",
        questionEn: "Which of the following is NOT one of the four major India–Japan joint military exercises?",
        questionHi: "निम्नलिखित में से कौन भारत-जापान के चार प्रमुख संयुक्त सैन्य अभ्यासों में से नहीं है?",
        options: [
            { key: "a", en: "JIMEX", hi: "JIMEX" },
            { key: "b", en: "Dharma Guardian", hi: "धर्म गार्जियन" },
            { key: "c", en: "Veer Guardian", hi: "वीर गार्जियन" },
            { key: "d", en: "Yudh Abhyas", hi: "युद्ध अभ्यास" },
        ],
        correctKey: "d",
        explanationEn: "The four India–Japan exercises are JIMEX, Dharma Guardian, Veer Guardian, and Malabar. Yudh Abhyas is an India–US exercise.",
        explanationHi: "भारत-जापान के चार अभ्यास: JIMEX, धर्म गार्जियन, वीर गार्जियन, मालाबार। युद्ध अभ्यास भारत-अमेरिका का है।",
    },
]

function MCQBlock({ mcq }: { mcq: MCQ }) {
    const [selected, setSelected] = useState<string | null>(null)
    const isCorrect = selected === mcq.correctKey
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-4"><p className="font-semibold text-base">{mcq.questionEn}</p><p className="text-sm text-muted-foreground mt-1">{mcq.questionHi}</p></div>
            <div className="space-y-2 mb-4">
                {mcq.options.map((opt) => {
                    let extra = ""
                    if (selected !== null) {
                        if (opt.key === mcq.correctKey) extra = "bg-green-100 border-green-400"
                        else if (opt.key === selected) extra = "bg-red-100 border-red-400"
                    }
                    return (
                        <div key={opt.key} onClick={() => selected === null && setSelected(opt.key)} className={`flex items-start gap-3 rounded-lg border p-3 text-sm cursor-pointer hover:bg-muted/50 ${extra}`}>
                            <span className="font-bold uppercase w-5 shrink-0 text-muted-foreground">{opt.key}.</span>
                            <div><div>{opt.en}</div><div className="text-xs text-muted-foreground mt-0.5">{opt.hi}</div></div>
                        </div>
                    )
                })}
            </div>
            {selected !== null && (
                <div className={`p-3 rounded-lg border-l-4 ${isCorrect ? "bg-green-50 border-green-500" : "bg-red-50 border-red-400"}`}>
                    <div className="flex items-center gap-2 mb-1">{isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}<span className="text-sm font-semibold">{isCorrect ? "Correct! / सही उत्तर!" : `Correct: ${mcq.correctKey.toUpperCase()}`}</span></div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

export default function IndiaJapanPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · International Relations</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">16th India–Japan Annual Summit (2026)</h1>
                    <p className="text-xl text-muted-foreground mb-6">16वां भारत-जापान वार्षिक शिखर सम्मेलन (2026)</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-rose-600" /><span>2026 (New Delhi)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Handshake className="w-4 h-4 text-rose-600" /><span>Special Strategic Partnership</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-rose-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-rose-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-rose-50/60 rounded-xl p-5 border border-rose-100">
                            <h3 className="text-xs font-semibold uppercase text-rose-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />16th India–Japan Annual Summit held in New Delhi to evaluate/upgrade the bilateral "Special Strategic and Global Partnership".</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />First official visit to India by newly elected Japanese PM Sanae Takaichi.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />Focus: deepening defense co-development, securing clean energy corridors, expanding AI research.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />16वां भारत-जापान वार्षिक शिखर सम्मेलन नई दिल्ली में — "विशेष रणनीतिक और वैश्विक साझेदारी" का उन्नयन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />जापान की नव निर्वाचित PM साने ताकाइची की पहली आधिकारिक भारत यात्रा।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />फोकस: रक्षा सह-विकास, स्वच्छ ऊर्जा कॉरिडोर, AI अनुसंधान।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Ship className="w-5 h-5 text-rose-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UNICORN Defense Pact: agreement in principle on Unified Complex Radio Antenna mast project — specialized stealth antenna system to hide ships from radar — first-ever India–Japan defense technology co-development.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Indo-Pacific Integration: reaffirmed commitment to Free and Open Indo-Pacific (FOIP), aligning with India's IPOI and MAHASAGAR naval doctrine.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Next Generation Mobility Partnership (NGMP): railways, automobiles, aviation, shipbuilding, ports, logistics, urban planning.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Green Biogas: India–Japan Cooperative Biogas for Growth (CBG) Initiative — target 1,000 biogas and organic fertilizer plants.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Joint exercises: JIMEX, Dharma Guardian, Veer Guardian, Malabar.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />MAHASAGAR Doctrine (March 2025): Mutual and Holistic Advancement for Security and Growth Across Regions — global elevation of 2015 SAGAR policy.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UNICORN रक्षा समझौता: यूनिफाइड कॉम्प्लेक्स रेडियो एंटीना मास्ट — स्टेल्थ एंटीना; पहला रक्षा तकनीक सह-विकास।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />हिंद-प्रशांत एकीकरण: FOIP, भारत की IPOI और MAHASAGAR के साथ।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />NGMP: रेलवे, ऑटोमोबाइल, विमानन, जहाज निर्माण, बंदरगाह, लॉजिस्टिक्स।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />CBG पहल: 1,000 बायोगैस और जैविक उर्वरक संयंत्र।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />संयुक्त अभ्यास: JIMEX, धर्म गार्जियन, वीर गार्जियन, मालाबार।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />MAHASAGAR सिद्धांत (मार्च 2025): SAGAR (2015) का वैश्विक उन्नयन।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Voice of Global South Summit (VOGSS): 1. India recently concluded its 2nd VOGSS. 2. The term Global South is related to developed countries. <em>(UPPSC PCS 2024)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Only 1 is correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-rose-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/sd-report-2026"><Button variant="outline" className="gap-2 cursor-pointer">Next: SD Report 2026 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}