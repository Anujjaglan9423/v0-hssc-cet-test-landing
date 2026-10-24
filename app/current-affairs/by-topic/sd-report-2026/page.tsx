"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "sd-q1",
        questionEn: "With reference to the Sustainable Development Report 2026: 1. More than half of the 17 SDGs are on track globally. 2. India achieved its highest-ever rank (94th). 3. UN-Mi ranked US at the top. Which are correct?",
        questionHi: "SDR 2026: 1. 17 में से आधे से अधिक SDG वैश्विक रूप से ट्रैक पर। 2. भारत की सर्वश्रेष्ठ रैंक (94वीं)। 3. UN-Mi में US शीर्ष। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "b",
        explanationEn: "Statement 1 is wrong — NONE of the 17 SDGs are on track globally. Statement 3 is wrong — Barbados was ranked 1st in UN-Mi, US was ranked last.",
        explanationHi: "कथन 1 गलत — 17 में से कोई भी SDG वैश्विक रूप से ट्रैक पर नहीं। कथन 3 गलत — UN-Mi में बारबाडोस प्रथम, US अंतिम।",
    },
    {
        id: "sd-q2",
        questionEn: "Which of the following is India's most critical SDG challenge according to the 2026 report?",
        questionHi: "2026 रिपोर्ट के अनुसार भारत की सबसे गंभीर SDG चुनौती कौन सी है?",
        options: [
            { key: "a", en: "SDG 2 — Zero Hunger", hi: "SDG 2 — शून्य भूख" },
            { key: "b", en: "SDG 7 — Clean Energy", hi: "SDG 7 — स्वच्छ ऊर्जा" },
            { key: "c", en: "SDG 9 — Industry & Infrastructure", hi: "SDG 9 — उद्योग और अवसंरचना" },
            { key: "d", en: "SDG 17 — Partnerships", hi: "SDG 17 — साझेदारियां" },
        ],
        correctKey: "a",
        explanationEn: "SDG 2 (Zero Hunger) is India's most critical challenge — high child wasting and undernourishment metrics. India has notably progressed in SDG 7 (solar grids) and SDG 9 (mobile broadband).",
        explanationHi: "SDG 2 (जीरो हंगर) सबसे गंभीर — बच्चों में कमजोरी/कुपोषण। SDG 7 (सौर ग्रिड) और SDG 9 (मोबाइल ब्रॉडबैंड) में प्रगति।",
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

export default function SDReportPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Sustainable Development</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">UN Sustainable Development Report 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">संयुक्त राष्ट्र सतत विकास रिपोर्ट 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-emerald-600" /><span>Released 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Trophy className="w-4 h-4 text-emerald-600" /><span>UN SDSN</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-emerald-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-emerald-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-100">
                            <h3 className="text-xs font-semibold uppercase text-emerald-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />UN Sustainable Development Solutions Network (SDSN) released the Sustainable Development Report 2026.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Features Index of Countries' Support to UN-based Multilateralism (UN-Mi) to check state commitment to SDG 17.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />East and South Asia fastest-improving regions since 2015.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />UN SDSN ने सतत विकास रिपोर्ट 2026 जारी की।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />UN-Mi सूचकांक — SDG 17 के प्रति प्रतिबद्धता।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />पूर्वी और दक्षिण एशिया सबसे तेजी से सुधार करने वाले क्षेत्र।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Trophy className="w-5 h-5 text-emerald-600" /><h2 className="text-2xl font-bold">Global & India Performance / वैश्विक एवं भारत प्रदर्शन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Top 3 Global Ranks: 1. Finland, 2. Sweden, 3. Denmark.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />None of the 17 SDGs are on track to be fully achieved globally by 2030.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Only 16.5% of global SDG targets on track; 15% reversed since 2015.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Worst Performing Goals: SDG 2, 11, 14, 15, 16.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UN-Mi: Barbados ranked 1st; US ranked last (opposed 2030 Agenda, withdrew from international organizations).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />India: Rank 94th out of 167 (+5 improvement from 99th in 2025) — highest-ever since 2015; score 68.3/100.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Only 33.3% of India's individual targets on track; 24% deteriorated.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />India still lags behind Bhutan, Maldives, Nepal and Sri Lanka.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SDG 2 remains India's most critical challenge; progress in SDG 7 (solar grids) and SDG 9 (mobile broadband).</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />शीर्ष 3 वैश्विक रैंक: 1. फिनलैंड, 2. स्वीडन, 3. डेनमार्क।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />2030 तक 17 में से कोई भी SDG वैश्विक रूप से पूरा होने की राह पर नहीं।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />केवल 16.5% लक्ष्य ट्रैक पर; 15% 2015 से खराब।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सबसे खराब: SDG 2, 11, 14, 15, 16।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UN-Mi: बारबाडोस प्रथम; US अंतिम।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />भारत: 167 में 94वां स्थान (2025 से +5) — 2015 के बाद सर्वश्रेष्ठ; स्कोर 68.3/100।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />केवल 33.3% लक्ष्य ट्रैक पर; 24% में गिरावट।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />भूटान, मालदीव, नेपाल, श्रीलंका से पीछे।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SDG 2 सबसे बड़ी चुनौती; SDG 7 (सौर ग्रिड) और SDG 9 (मोबाइल ब्रॉडबैंड) में प्रगति।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> सूची-I (सतत विकास लक्ष्य) को सूची-II (लक्ष्य का क्षेत्र) से सुमेलित कीजिए: A. लक्ष्य 1 — 4. गरीबी के सभी रूपों को खत्म करना; B. लक्ष्य 3 — 3. अच्छा स्वास्थ्य और कल्याण; C. लक्ष्य 4 — 1. गुणवत्तापूर्ण शिक्षा; D. लक्ष्य 6 — 2. स्वच्छ जल और स्वच्छता।</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> (c) A-4, B-3, C-1, D-2</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-emerald-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/isp-index"><Button variant="outline" className="gap-2 cursor-pointer">Next: ISP Index <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}