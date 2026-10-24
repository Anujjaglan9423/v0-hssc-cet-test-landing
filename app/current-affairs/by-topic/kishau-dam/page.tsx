"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "kishau-q1",
        questionEn: "With reference to Kishau Multipurpose Dam: 1. Built on Tons River, tributary of Yamuna. 2. Located on Punjab-Haryana border. 3. 90% of water component cost funded by Centre. Which are correct?",
        questionHi: "किशाउ बहुउद्देशीय बांध: 1. टोंस नदी (यमुना की सहायक)। 2. पंजाब-हरियाणा सीमा पर। 3. केंद्र 90% लागत। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "c",
        explanationEn: "Statement 2 is incorrect — the dam is on the geographic boundary of Himachal Pradesh and Uttarakhand, not Punjab and Haryana.",
        explanationHi: "कथन 2 गलत — बांध हिमाचल प्रदेश और उत्तराखंड की सीमा पर है, पंजाब और हरियाणा की नहीं।",
    },
    {
        id: "kishau-q2",
        questionEn: "How many stakeholder states are involved in the Kishau Dam project?",
        questionHi: "किशाउ बांध परियोजना में कितने हितधारक राज्य शामिल हैं?",
        options: [
            { key: "a", en: "Four", hi: "चार" },
            { key: "b", en: "Five", hi: "पांच" },
            { key: "c", en: "Six", hi: "छह" },
            { key: "d", en: "Eight", hi: "आठ" },
        ],
        correctKey: "c",
        explanationEn: "Six states: Himachal Pradesh, Uttarakhand, Haryana, Delhi, Uttar Pradesh, Rajasthan.",
        explanationHi: "छह राज्य: हिमाचल प्रदेश, उत्तराखंड, हरियाणा, दिल्ली, उत्तर प्रदेश, राजस्थान।",
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

export default function KishauPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Infrastructure</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Kishau Multipurpose Dam</h1>
                    <p className="text-xl text-muted-foreground mb-6">किशाउ बहुउद्देशीय बांध</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-sky-600" /><span>New Delhi meeting (2026)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Waves className="w-4 h-4 text-sky-600" /><span>Tons River, Yamuna tributary</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-sky-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-sky-50/60 rounded-xl p-5 border border-sky-100">
                            <h3 className="text-xs font-semibold uppercase text-sky-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />Union Home Minister chaired an important meeting in New Delhi where six stakeholder states reached a historic agreement on the long-pending Kishau Multi-Purpose Dam Project.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />Decision: 90% of the water component cost borne by Central Government; remaining 10% shared by six participating states.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />केंद्रीय गृह मंत्री की अध्यक्षता में नई दिल्ली में बैठक — छह हितधारक राज्यों ने किशाउ बहुउद्देशीय बांध परियोजना पर ऐतिहासिक सहमति बनाई।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />जल घटक लागत का 90% केंद्र; 10% छह राज्य।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Waves className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Large-scale, under-construction water infrastructure and hydropower project.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Located on the Tons River, a major tributary of the Yamuna.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Hydropower generation: 660 MW.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Physically located on the geographic boundary of Himachal Pradesh and Uttarakhand.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Six stakeholder states: Himachal Pradesh, Uttarakhand, Haryana, Delhi, Uttar Pradesh, Rajasthan.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />बड़े पैमाने की निर्माणाधीन जल अवसंरचना और जलविद्युत परियोजना।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />टोंस नदी (यमुना की सहायक) पर।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />जलविद्युत: 660 MW।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />हिमाचल प्रदेश और उत्तराखंड की भौगोलिक सीमा पर।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />छह हितधारक: हिमाचल, उत्तराखंड, हरियाणा, दिल्ली, UP, राजस्थान।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Which of the following pairs of (Dam, River) is/are NOT correctly matched? 1. Baglihar Dam — Chenab 2. Pandoh Dam — Ravi 3. Srisailam Dam — Tungabhadra. <em>(UPPSC PCS Prelims 2025)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Pandoh Dam is on the Beas River (not Ravi); Srisailam Dam is on the Krishna (not Tungabhadra).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/project-ganga"><Button variant="outline" className="gap-2 cursor-pointer">Next: Project GANGA <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}