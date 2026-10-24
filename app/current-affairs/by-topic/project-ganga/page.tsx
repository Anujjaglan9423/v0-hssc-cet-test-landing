"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "ganga-q1",
        questionEn: "With reference to 'Project GANGA' by UP: 1. Primary objective is rural irrigation via AI. 2. Launched by CM Yogi in Varanasi. Which are correct?",
        questionHi: "UP के 'प्रोजेक्ट गंगा': 1. AI से ग्रामीण सिंचाई। 2. CM योगी ने वाराणसी में लॉन्च। कौन सही हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "d",
        explanationEn: "Both are wrong. (1) Objective is to expand high-speed broadband infrastructure across rural/semi-urban UP. (2) Launched in Lucknow, not Varanasi.",
        explanationHi: "दोनों गलत। (1) उद्देश्य ग्रामीण/अर्ध-शहरी UP में हाई-स्पीड ब्रॉडबैंड। (2) लखनऊ में लॉन्च, वाराणसी नहीं।",
    },
    {
        id: "ganga-q2",
        questionEn: "What does GANGA stand for in this context?",
        questionHi: "इस संदर्भ में GANGA का पूर्ण रूप क्या है?",
        options: [
            { key: "a", en: "Government Assisted Network for Growth and Advancement", hi: "Government Assisted Network for Growth and Advancement" },
            { key: "b", en: "Ganga Action Network for Growth and Agriculture", hi: "Ganga Action Network for Growth and Agriculture" },
            { key: "c", en: "Growth and Agriculture Networking for Gramin Advancement", hi: "Growth and Agriculture Networking for Gramin Advancement" },
            { key: "d", en: "Ganga Advanced Networking for Gramin Access", hi: "Ganga Advanced Networking for Gramin Access" },
        ],
        correctKey: "a",
        explanationEn: "GANGA = Government Assisted Network for Growth and Advancement. Targets ~20 lakh households; 8,000-10,000 Digital Service Providers; 1 lakh+ jobs; ₹5 lakh interest-free loans under CM Yuva Scheme.",
        explanationHi: "GANGA = Government Assisted Network for Growth and Advancement। ~20 लाख घर; 8,000-10,000 डिजिटल सेवा प्रदाता; 1 लाख+ नौकरियां; CM युवा योजना के तहत ₹5 लाख तक ब्याज-मुक्त ऋण।",
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

export default function ProjectGangaPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Digital India</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Project GANGA (Uttar Pradesh)</h1>
                    <p className="text-xl text-muted-foreground mb-6">प्रोजेक्ट गंगा (उत्तर प्रदेश)</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-blue-600" /><span>Launched in Lucknow</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Wifi className="w-4 h-4 text-blue-600" /><span>~20 lakh households</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-blue-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100">
                            <h3 className="text-xs font-semibold uppercase text-blue-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />UP Government launched "Project GANGA" to expand high-speed broadband infrastructure across rural and semi-urban landscapes.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />Launched by Chief Minister Yogi Adityanath in Lucknow.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />GANGA = Government Assisted Network for Growth and Advancement.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />UP सरकार ने ग्रामीण/अर्ध-शहरी क्षेत्रों में हाई-स्पीड ब्रॉडबैंड के लिए "प्रोजेक्ट गंगा" लॉन्च किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मुख्यमंत्री योगी आदित्यनाथ ने लखनऊ में लॉन्च किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />GANGA = Government Assisted Network for Growth and Advancement।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Wifi className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Target coverage: ~20 lakh households in rural and semi-urban areas.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Skill & Job Creation: 8,000–10,000 Digital Service Providers; 1 lakh+ direct and indirect employment.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Women's participation: ~50% beneficiaries expected to be women.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Financial Assistance: interest-free loans up to ₹5 lakh under CM Yuva Scheme.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"Digital Expressway" — foundation for digital education, telemedicine, smart agriculture.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />लक्षित कवरेज: ~20 लाख घर (ग्रामीण/अर्ध-शहरी)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कौशल और रोजगार: 8,000-10,000 डिजिटल सेवा प्रदाता; 1 लाख+ नौकरियां।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />महिला भागीदारी: ~50% लाभार्थी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />वित्तीय सहायता: CM युवा योजना के तहत ₹5 लाख तक ब्याज-मुक्त ऋण।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"डिजिटल एक्सप्रेसवे" — डिजिटल शिक्षा, टेलीमेडिसिन, स्मार्ट कृषि।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> उत्तर प्रदेश के बजट 2021-22 में किस योजना के अंतर्गत विद्यार्थियों को टैबलेट देने की घोषणा की गई है?</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> (a) मुख्यमंत्री अभ्युदय योजना</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/india-japan-summit"><Button variant="outline" className="gap-2 cursor-pointer">Next: India–Japan Summit <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}