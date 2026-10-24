"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "srs-q1",
        questionEn: "Regarding SRS 2024 findings: 1. India's TFR dropped to 1.9, below replacement. 2. Urban CBR is significantly higher than rural. 3. Over 65% population is in the 15–59 working-age bracket. Which are correct?",
        questionHi: "SRS 2024 निष्कर्ष: 1. भारत की TFR 1.9 (प्रतिस्थापन से नीचे)। 2. शहरी CBR ग्रामीण से काफी अधिक। 3. 65%+ जनसंख्या 15-59 आयु वर्ग में। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "c",
        explanationEn: "Statement 2 is incorrect — urban CBR is generally LOWER than rural CBR. Statements 1 and 3 are correct.",
        explanationHi: "कथन 2 गलत — शहरी CBR सामान्यतः ग्रामीण से कम होता है। कथन 1 और 3 सही हैं।",
    },
    {
        id: "srs-q2",
        questionEn: "According to SRS 2024, how many states still have fertility above the replacement rate?",
        questionHi: "SRS 2024 के अनुसार, कितने राज्यों में प्रजनन दर अभी भी प्रतिस्थापन दर से ऊपर है?",
        options: [
            { key: "a", en: "Four states", hi: "चार राज्य" },
            { key: "b", en: "Six states", hi: "छह राज्य" },
            { key: "c", en: "Eight states", hi: "आठ राज्य" },
            { key: "d", en: "Ten states", hi: "दस राज्य" },
        ],
        correctKey: "b",
        explanationEn: "Six states: Bihar, UP, MP, Rajasthan, Jharkhand, Chhattisgarh.",
        explanationHi: "छह राज्य: बिहार, UP, MP, राजस्थान, झारखंड, छत्तीसगढ़।",
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

export default function SRSPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Demographics</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">SRS Statistical Report 2024</h1>
                    <p className="text-xl text-muted-foreground mb-6">SRS सांख्यिकीय रिपोर्ट 2024</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-purple-600" /><span>Released 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Users className="w-4 h-4 text-purple-600" /><span>RGI Office, MHA</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-purple-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-50/60 rounded-xl p-5 border border-purple-100">
                            <h3 className="text-xs font-semibold uppercase text-purple-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />Office of the Registrar General & Census Commissioner (under MHA) released the SRS Statistical Report 2024.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />India is transitioning from high-growth demographics to a low-growth, population-stabilizing phase.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />MHA के अंतर्गत RGI कार्यालय ने SRS सांख्यिकीय रिपोर्ट 2024 जारी की।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत उच्च जनसंख्या-वृद्धि से निम्न-वृद्धि और जनसंख्या-स्थिरीकरण की ओर।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Users className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Key Metrics / मुख्य संकेतक</h2></div>
                    <div className="overflow-x-auto rounded-xl border bg-card">
                        <table className="w-full text-sm">
                            <thead className="bg-muted/50">
                                <tr><th className="text-left p-3 font-semibold">Indicator / संकेतक</th><th className="text-left p-3 font-semibold">SRS 2024</th></tr>
                            </thead>
                            <tbody>
                                <tr className="border-t"><td className="p-3">Total Fertility Rate (TFR) / कुल प्रजनन दर</td><td className="p-3 font-semibold text-green-700">1.9</td></tr>
                                <tr className="border-t"><td className="p-3">Crude Birth Rate (CBR) / अशोधित जन्म दर</td><td className="p-3">18.3</td></tr>
                                <tr className="border-t"><td className="p-3">Infant Mortality Rate (IMR) / शिशु मृत्यु दर</td><td className="p-3">24 per 1,000 live births</td></tr>
                                <tr className="border-t"><td className="p-3">Sex Ratio at Birth (SRB) / जन्म के समय लिंगानुपात</td><td className="p-3">918 females per 1,000 males</td></tr>
                                <tr className="border-t"><td className="p-3">Institutional Deliveries / संस्थागत प्रसव</td><td className="p-3 font-semibold text-green-700">95.4%</td></tr>
                                <tr className="border-t"><td className="p-3">Working-Age (15–59) / कार्यशील आयु</td><td className="p-3 font-semibold text-green-700">66.4%</td></tr>
                                <tr className="border-t"><td className="p-3">Elderly (60+) / वृद्ध जनसंख्या</td><td className="p-3">9.7%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Source: RGI, SRS Statistical Report 2024</p>
                </section>

                <section className="mb-10">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-sm font-semibold text-purple-700 mb-2">Regional Extremes / क्षेत्रीय चरम</h3>
                            <ul className="space-y-1.5 text-sm">
                                <li>• 6 states still above replacement: Bihar, UP, MP, Rajasthan, Jharkhand, Chhattisgarh.</li>
                                <li>• Highest TFR: Bihar (2.9), then UP (2.6).</li>
                                <li>• Lowest TFR: Delhi (1.2).</li>
                                <li>• Six states list / छह राज्य: बिहार, UP, MP, राजस्थान, झारखंड, छत्तीसगढ़।</li>
                                <li>• सर्वाधिक TFR: बिहार (2.9), UP (2.6)।</li>
                                <li>• न्यूनतम TFR: दिल्ली (1.2)।</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-sm font-semibold text-purple-700 mb-2">Definitions / परिभाषाएं</h3>
                            <ul className="space-y-1.5 text-sm">
                                <li>• TFR: average number of children a woman has in her lifetime. Replacement level = 2.1.</li>
                                <li>• CBR: total live births per 1,000 people per year.</li>
                                <li>• TFR: एक महिला द्वारा जीवनकाल में जन्म दिए बच्चों की औसत संख्या। प्रतिस्थापन स्तर = 2.1।</li>
                                <li>• CBR: प्रति 1,000 व्यक्तियों पर एक वर्ष में जीवित जन्मों की संख्या।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> What should be the Total Fertility Rate (TFR) of a population in order to reach the replacement level of fertility? <em>(UPPSC 2020)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> 2.1</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-purple-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/india-uae-agreements"><Button variant="outline" className="gap-2 cursor-pointer">Next: India–UAE <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}