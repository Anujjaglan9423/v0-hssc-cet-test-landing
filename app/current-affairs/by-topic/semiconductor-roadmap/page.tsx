"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "semi-q1",
        questionEn: "Assertion (A): MeitY recently launched 'Future of India's Semiconductor Industry', marking India's first comprehensive 10-year master plan. Reason (R): The blueprint outlines a timeline to build a USD 120–150 billion semiconductor value chain by 2035.",
        questionHi: "अभिकथन (A): MeitY ने 'Future of India's Semiconductor Industry' लॉन्च किया। कारण (R): ब्लूप्रिंट 2035 तक USD 120-150 बिलियन सेमीकंडक्टर वैल्यू चेन बनाने की समय-सीमा देता है।",
        options: [
            { key: "a", en: "Both A and R true, R explains A", hi: "A और R सही, R व्याख्या है" },
            { key: "b", en: "Both A and R true, R does not explain A", hi: "A और R सही, R व्याख्या नहीं" },
            { key: "c", en: "A true, R false", hi: "A सही, R गलत" },
            { key: "d", en: "A false, R true", hi: "A गलत, R सही" },
        ],
        correctKey: "d",
        explanationEn: "Assertion (A) is incorrect — the 10-year master plan was launched by NITI Aayog's Frontier Tech Hub, not MeitY. Reason (R) is correct.",
        explanationHi: "कथन (A) गलत — 10-वर्षीय मास्टर प्लान NITI Aayog के Frontier Tech Hub द्वारा लॉन्च, MeitY द्वारा नहीं। (R) सही है।",
    },
    {
        id: "semi-q2",
        questionEn: "What is the 'doping' principle in semiconductors?",
        questionHi: "सेमीकंडक्टर में 'डोपिंग' सिद्धांत क्या है?",
        options: [
            { key: "a", en: "Adding tiny impurities to control conductivity", hi: "चालकता नियंत्रित करने के लिए अशुद्धियां मिलाना" },
            { key: "b", en: "Cooling the material to absolute zero", hi: "पदार्थ को परम शून्य तक ठंडा करना" },
            { key: "c", en: "Coating with copper for better conduction", hi: "बेहतर चालन के लिए तांबे की परत" },
            { key: "d", en: "Removing all impurities entirely", hi: "सभी अशुद्धियां पूरी तरह हटाना" },
        ],
        correctKey: "a",
        explanationEn: "Doping = adding tiny amounts of impurities to control conductivity, allowing semiconductors to act as switches or amplifiers.",
        explanationHi: "डोपिंग = चालकता नियंत्रित करने के लिए अशुद्धियों की बहुत कम मात्रा मिलाना, जिससे सेमीकंडक्टर स्विच/एम्पलीफायर बनते हैं।",
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

export default function SemiconductorPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Economy & Technology</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Future of India's Semiconductor Industry</h1>
                    <p className="text-xl text-muted-foreground mb-6">भारत के सेमीकंडक्टर उद्योग का भविष्य</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-blue-600" /><span>10-year roadmap</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Cpu className="w-4 h-4 text-blue-600" /><span>NITI Aayog Frontier Tech Hub</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />NITI Aayog's Frontier Tech Hub launched "Future of India's Semiconductor Industry" — India's first comprehensive 10-year master plan.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />Framework aims to secure economic resilience and national digital sovereignty against geopolitical supply-chain shocks.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />Target: Build a resilient USD 120–150 billion semiconductor value chain by 2035.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />India currently imports 90–95% of domestic chip consumption.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />NITI Aayog के Frontier Tech Hub ने "Future of India's Semiconductor Industry" लॉन्च किया — देश का पहला व्यापक 10-वर्षीय मास्टर प्लान।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />आर्थिक लचीलापन और राष्ट्रीय डिजिटल संप्रभुता।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />लक्ष्य: 2035 तक USD 120-150 बिलियन सेमीकंडक्टर वैल्यू चेन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत वर्तमान में 90-95% चिप्स आयात करता है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Cpu className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />India Semiconductor Mission (ISM) launched Dec 2021; ISM 2.0 announced in Union Budget 2026–27 with ₹1,000 crore allocation for R&D, training, and domestic manufacturing.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Nodal Ministry: MeitY (Ministry of Electronics and Information Technology).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Dholera, Gujarat approved as India's first premier commercial semiconductor fabrication plant hub.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Semiconductor: material with conductivity between a conductor (copper) and insulator (rubber).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Key elements: Silicon and Germanium.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Doping principle: conductivity controlled by adding tiny impurities — allows acting as switches or amplifiers.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ISM दिसंबर 2021 में; ISM 2.0 बजट 2026-27 में ₹1,000 करोड़ आवंटन।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />नोडल मंत्रालय: MeitY।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />धोलेरा, गुजरात पहला प्रमुख वाणिज्यिक फैब्रिकेशन हब।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सेमीकंडक्टर: चालक और कुचालक के बीच चालकता।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मुख्य तत्व: सिलिकॉन और जर्मेनियम।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />डोपिंग: अशुद्धियां मिलाकर चालकता नियंत्रित; स्विच/एम्पलीफायर।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/srs-2024"><Button variant="outline" className="gap-2 cursor-pointer">Next: SRS 2024 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}