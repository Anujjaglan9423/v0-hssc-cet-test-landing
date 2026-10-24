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
        id: "g7-q1",
        questionEn: "With reference to G7 summits: 1. The 52nd G7 Summit (2026) was hosted in Évian, France. 2. G7 has a permanent secretariat in Geneva. Which are correct?",
        questionHi: "G7 शिखर सम्मेलन: 1. 52वाँ G7 (2026) एवियन, फ्रांस में। 2. G7 का जिनेवा में स्थायी सचिवालय। कौन सही हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "a",
        explanationEn: "Statement 2 is incorrect — G7 has NO permanent secretariat, no founding treaty, no headquarters. It's completely informal; the host nation handles administration with rotating presidency.",
        explanationHi: "कथन 2 गलत — G7 का कोई स्थायी सचिवालय, संधि, मुख्यालय नहीं। अनौपचारिक; मेजबान देश प्रशासन संभालता है।",
    },
    {
        id: "g7-q2",
        questionEn: "Which of the following statements about the G7's genesis is correct?",
        questionHi: "G7 की उत्पत्ति के बारे में कौन सा कथन सही है?",
        options: [
            { key: "a", en: "Started in 1975 in response to the 1973 oil crisis as G6", hi: "1973 तेल संकट की प्रतिक्रिया में 1975 में G6 के रूप में शुरू" },
            { key: "b", en: "Founded in 1991 after the Cold War", hi: "शीतयुद्ध के बाद 1991 में स्थापित" },
            { key: "c", en: "Russia was a founding member", hi: "रूस संस्थापक सदस्य" },
            { key: "d", en: "Includes 15 countries", hi: "15 देशों को शामिल" },
        ],
        correctKey: "a",
        explanationEn: "G7 began in 1975 as the G6 in response to the 1973 global oil crisis. Russia joined in 1998 but was expelled in 2014 after annexing Crimea.",
        explanationHi: "1975 में 1973 तेल संकट की प्रतिक्रिया में G6 के रूप में शुरू। रूस 1998 में जुड़ा, 2014 में क्रीमिया के बाद बाहर।",
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

export default function G7Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · International Relations</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">G7 Summit 2026 (Évian, France)</h1>
                    <p className="text-xl text-muted-foreground mb-6">G7 शिखर सम्मेलन 2026 (एवियन, फ्रांस)</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-indigo-600" /><span>52nd Summit (2026)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Users className="w-4 h-4 text-indigo-600" /><span>Informal bloc</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-indigo-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-indigo-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100">
                            <h3 className="text-xs font-semibold uppercase text-indigo-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />PM of India attended the Outreach Session of the 52nd G7 Summit (2026) in Évian, France.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />Core Theme: "Forging New Partnerships and Rebuilding International Solidarity".</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />Raisina Americas Forum: On the sidelines, India and Canada announced a new geopolitical platform based on India's Raisina Dialogue model — building Track-1.5 diplomatic exchanges across the American continents.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />G7 Summit 2027 will be hosted by the United States.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />PM ने एवियन, फ्रांस में 52वें G7 शिखर सम्मेलन के आउटरीच सत्र में भाग लिया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />थीम: "नई साझेदारियां गढ़ना और अंतरराष्ट्रीय एकजुटता का पुनर्निर्माण"।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />रायसीना अमेरिकास फोरम: भारत और कनाडा ने नया भू-राजनीतिक मंच घोषित किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />2027 G7 शिखर सम्मेलन अमेरिका में।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Users className="w-5 h-5 text-indigo-600" /><h2 className="text-2xl font-bold">Genesis & Structure / उत्पत्ति और संरचना</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />1975 Origin: bloc started in 1975 in response to the 1973 global oil crisis as an informal forum of six industrialized democracies (G6).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Russia joined in 1998 but was expelled in 2014 after annexing Crimea.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Current members: Canada, France, Germany, Italy, Japan, UK, US. EU participates fully as an un-enumerated member.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Economic weight: ~10% of world population but ~43% of global nominal GDP.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />No founding treaty, no permanent secretariat — purely informal.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />1975 उत्पत्ति: 1973 तेल संकट की प्रतिक्रिया में छह औद्योगिक लोकतंत्रों का अनौपचारिक मंच (G6)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />रूस 1998 में शामिल, 2014 में क्रीमिया के बाद बाहर।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />वर्तमान सदस्य: कनाडा, फ्रांस, जर्मनी, इटली, जापान, UK, US। EU पूर्ण भागीदार।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />आर्थिक भार: ~10% आबादी, ~43% वैश्विक nominal GDP।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कोई संधि या स्थायी सचिवालय नहीं।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> With reference to the G-7 Summit held in June 2021: 1. UK was the Chair. 2. Brazil was invited as a guest country. <em>(UPPSC)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Only 1 is correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-indigo-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/relos"><Button variant="outline" className="gap-2 cursor-pointer">Next: RELOS <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}