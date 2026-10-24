"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, HeartPulse,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "nfhs-q1",
        questionEn:
            "Consider the following statements regarding the findings of the newly released National Family Health Survey–6 (NFHS-6) report: 1. India's Total Fertility Rate (TFR) experienced a sharp increase, surpassing the traditional international replacement threshold. 2. The proportion of Indian households covered under any health insurance or financing scheme crossed the 60% mark.",
        questionHi:
            "हाल ही में जारी राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण-6 (NFHS-6) रिपोर्ट के निष्कर्षों के संबंध में निम्नलिखित कथनों पर विचार कीजिए: 1. भारत की कुल प्रजनन दर (TFR) में तीव्र वृद्धि दर्ज की गई, जो पारंपरिक अंतर्राष्ट्रीय प्रतिस्थापन सीमा को पार कर गई है। 2. किसी भी स्वास्थ्य बीमा या वित्तपोषण योजना के तहत कवर किए गए भारतीय परिवारों का अनुपात 60% के आंकड़े को पार कर गया है।",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "b",
        explanationEn:
            "TFR remained stable at 2.0 (below the 2.1 replacement threshold) — so statement 1 is wrong. Household health insurance coverage rose from 41.0% (NFHS-5) to 60.2% — so statement 2 is correct.",
        explanationHi:
            "TFR 2.0 पर स्थिर रही (2.1 प्रतिस्थापन सीमा से नीचे) — इसलिए कथन 1 गलत है। घरेलू स्वास्थ्य बीमा कवरेज 41.0% (NFHS-5) से बढ़कर 60.2% हो गया — इसलिए कथन 2 सही है।",
    },
    {
        id: "nfhs-q2",
        questionEn:
            "Which of the following statements about NFHS-6 (2023–24) is/are correct? 1. Institutional deliveries reached 90.6%. 2. Child stunting (under 5) declined to 29.3%. 3. Female internet use rose to 64.3%.",
        questionHi:
            "NFHS-6 (2023–24) के बारे में निम्नलिखित में से कौन-सा/से कथन सही है/हैं? 1. संस्थागत प्रसव 90.6% तक पहुंच गया। 2. बच्चों में ठिगनापन (5 वर्ष से कम) घटकर 29.3% हो गया। 3. महिलाओं द्वारा इंटरनेट उपयोग 64.3% तक बढ़ गया।",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "d",
        explanationEn: "All three are correct per the NFHS-6 dashboard.",
        explanationHi: "NFHS-6 डैशबोर्ड के अनुसार तीनों सही हैं।",
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
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}
                        <span className="text-sm font-semibold">{isCorrect ? "Correct! / सही उत्तर!" : `Correct: ${mcq.correctKey.toUpperCase()}`}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

export default function NFHS6Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Health & Welfare</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">National Family Health Survey–6 (NFHS-6)</h1>
                    <p className="text-xl text-muted-foreground mb-6">राष्ट्रीय परिवार स्वास्थ्य सर्वेक्षण-6 (NFHS-6)</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-rose-600" /><span>2023–24 (released 2026)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Globe2 className="w-4 h-4 text-rose-600" /><span>MoHFW, Government of India</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />The Ministry of Health and Family Welfare (MoHFW) released the final report of NFHS-6 covering the 2023–24 reference timeline.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />NFHS-6 serves as India's premier data repository to evaluate SDGs and track the ground footprint of core central welfare schemes.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />NFHS-6 reflects India's accelerated progress in maternal and child health, nutrition and financial protection.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />स्वास्थ्य और परिवार कल्याण मंत्रालय (MoHFW) ने 2023–24 टाइमलाइन पर आधारित NFHS-6 की अंतिम रिपोर्ट जारी की।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />NFHS-6 भारत का प्रमुख डेटा स्रोत है, जो SDGs की प्रगति और प्रमुख केंद्रीय कल्याण योजनाओं के जमीनी प्रभाव को समझने में मदद करता है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />NFHS-6 मातृ एवं शिशु स्वास्थ्य, पोषण और वित्तीय संरक्षण में भारत की त्वरित प्रगति को दर्शाता है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><HeartPulse className="w-5 h-5 text-rose-600" /><h2 className="text-2xl font-bold">Key Metrics / मुख्य संकेतक</h2></div>
                    <div className="overflow-x-auto rounded-xl border bg-card">
                        <table className="w-full text-sm">
                            <thead className="bg-muted/50">
                                <tr>
                                    <th className="text-left p-3 font-semibold">Indicator / संकेतक</th>
                                    <th className="text-left p-3 font-semibold">NFHS-5</th>
                                    <th className="text-left p-3 font-semibold">NFHS-6</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t"><td className="p-3">Institutional Deliveries / संस्थागत प्रसव</td><td className="p-3">88.6%</td><td className="p-3 font-semibold text-green-700">90.6%</td></tr>
                                <tr className="border-t"><td className="p-3">Total Fertility Rate (TFR) / कुल प्रजनन दर</td><td className="p-3">2.0</td><td className="p-3">2.0</td></tr>
                                <tr className="border-t"><td className="p-3">Household Health Insurance / घरेलू स्वास्थ्य बीमा</td><td className="p-3">41.0%</td><td className="p-3 font-semibold text-green-700">60.2%</td></tr>
                                <tr className="border-t"><td className="p-3">Female Internet Use / महिलाओं द्वारा इंटरनेट उपयोग</td><td className="p-3">33.3%</td><td className="p-3 font-semibold text-green-700">64.3%</td></tr>
                                <tr className="border-t"><td className="p-3">Child Stunting (Under 5) / बच्चों में ठिगनापन</td><td className="p-3">35.5%</td><td className="p-3 font-semibold text-green-700">29.3%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Source: MoHFW, NFHS-6 (2023–24)</p>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> According to NFHS-IV, couple violence for married women in India is — <em>(UPPSC Staff Nurse)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> 28.8%</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-rose-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/capf-act-2026"><Button variant="outline" className="gap-2 cursor-pointer">Next: CAPF Act 2026 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}