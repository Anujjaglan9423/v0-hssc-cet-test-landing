"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "isp-q1",
        questionEn: "With reference to the newly introduced Index of Services Production (ISP): 1. Compiled and released monthly by NSO under MoSPI. 2. Measures both formal and informal segments. 3. Base year is 2024-25. Which are correct?",
        questionHi: "नई ISP: 1. MoSPI के तहत NSO द्वारा मासिक। 2. औपचारिक और अनौपचारिक दोनों क्षेत्र। 3. आधार वर्ष 2024-25। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "c", en: "3 only", hi: "केवल 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "b",
        explanationEn: "Statement 2 is wrong — ISP measures ONLY the formal services sector. Statements 1 and 3 are correct.",
        explanationHi: "कथन 2 गलत — ISP केवल औपचारिक सेवा क्षेत्र को मापता है। कथन 1 और 3 सही हैं।",
    },
    {
        id: "isp-q2",
        questionEn: "The ISP is intended to become for the services sector what _____ is for the industrial sector.",
        questionHi: "ISP सेवा क्षेत्र के लिए वही भूमिका निभाएगा जो औद्योगिक क्षेत्र के लिए _____ निभाता है।",
        options: [
            { key: "a", en: "WPI (Wholesale Price Index)", hi: "WPI (थोक मूल्य सूचकांक)" },
            { key: "b", en: "IIP (Index of Industrial Production)", hi: "IIP (औद्योगिक उत्पादन सूचकांक)" },
            { key: "c", en: "CPI (Consumer Price Index)", hi: "CPI (उपभोक्ता मूल्य सूचकांक)" },
            { key: "d", en: "GDP Deflator", hi: "GDP डिफ्लेटर" },
        ],
        correctKey: "b",
        explanationEn: "The ISP is expected to become for the services sector what the IIP is for the industrial sector.",
        explanationHi: "ISP सेवा क्षेत्र के लिए वही भूमिका निभाएगा जो IIP उद्योग क्षेत्र के लिए।",
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

export default function ISPPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 hover:text-violet-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Economy</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Index of Services Production (ISP)</h1>
                    <p className="text-xl text-muted-foreground mb-6">सेवा उत्पादन सूचकांक (ISP)</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-violet-600" /><span>First trial: April 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><BarChart3 className="w-4 h-4 text-violet-600" /><span>Base year 2024-25</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-violet-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-violet-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-violet-50/60 rounded-xl p-5 border border-violet-100">
                            <h3 className="text-xs font-semibold uppercase text-violet-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />MoSPI released the first trial edition of the ISP for 19 services sub-sectors for April 2026.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />Definition: India's first monthly index to measure the performance of only the formal services sector.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />Designed to track short-term fluctuations in services output and provide timely information on economic activity.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />Expected to become for the services sector what IIP is for the industrial sector.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />MoSPI ने अप्रैल 2026 के लिए 19 सेवा उप-क्षेत्रों का पहला परीक्षण ISP जारी किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />परिभाषा: भारत का पहला मासिक सूचकांक जो केवल औपचारिक सेवा क्षेत्र को मापता है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अल्पकालिक उतार-चढ़ाव ट्रैक करने के लिए मासिक संकेतक।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />सेवा क्षेत्र के लिए वही भूमिका जो IIP उद्योग के लिए।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><BarChart3 className="w-5 h-5 text-violet-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Released by: Ministry of Statistics and Programme Implementation (MoSPI).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Base Year: 2024-25.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Frequency: Monthly.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />First trial indices for 2025-26 & April 2026 released 14 July 2026.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Regular monthly trial indices released on the 29th day of the month (or next working day if holiday).</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />जारीकर्ता: सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />आधार वर्ष: 2024-25।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />आवृत्ति: मासिक।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />2025-26 और अप्रैल 2026 के लिए पहले परीक्षण सूचकांक 14 जुलाई 2026 को जारी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />नियमित मासिक परीक्षण सूचकांक महीने की 29 तारीख (या अगले कार्य दिवस) पर।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> WPI vs CPI vs IIP vs ISP</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                                <thead className="bg-slate-200"><tr><th className="text-left p-2">Index</th><th className="text-left p-2">Measures</th><th className="text-left p-2">By</th></tr></thead>
                                <tbody>
                                    <tr className="border-t"><td className="p-2">WPI</td><td className="p-2">Wholesale price changes (goods only)</td><td className="p-2">Office of Economic Adviser, DPIIT</td></tr>
                                    <tr className="border-t"><td className="p-2">CPI</td><td className="p-2">Retail price changes (goods + services)</td><td className="p-2">NSO, MoSPI</td></tr>
                                    <tr className="border-t"><td className="p-2">IIP</td><td className="p-2">Physical volume of industrial production</td><td className="p-2">NSO, MoSPI</td></tr>
                                    <tr className="border-t"><td className="p-2 font-semibold text-violet-700">ISP</td><td className="p-2 font-semibold text-violet-700">Formal services sector performance</td><td className="p-2 font-semibold text-violet-700">NSO, MoSPI</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Headline inflation refers to the change in the value of all goods in the basket. On which basis is headline inflation measured? <em>(UPPSC)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> CPI (Consumer Price Index).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-violet-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/india-unsc-2028"><Button variant="outline" className="gap-2 cursor-pointer">Next: India UNSC 2028–29 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}