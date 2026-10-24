"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, BookOpen, Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "sarnath-q1",
        questionEn: "With reference to the Ancient Buddhist Site of Sarnath: 1. Became India's 45th UNESCO World Heritage Site during the 48th Session in Busan. 2. Gautama Buddha attained enlightenment here under the Bodhi Tree. 3. Ashokan Lion Capital discovered here became India's National Emblem. Which are correct?",
        questionHi: "सारनाथ के प्राचीन बौद्ध स्थल: 1. बुसान में 48वें सत्र में भारत का 45वां UNESCO स्थल। 2. बुद्ध ने बोधि वृक्ष के नीचे ज्ञान प्राप्त किया। 3. अशोक लायन कैपिटल राष्ट्रीय प्रतीक बना। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "a",
        explanationEn: "Statement 2 is wrong — Bodh Gaya is where Buddha attained enlightenment. Sarnath is where he delivered his first sermon (Dharmachakra Pravartana). Statements 1 and 3 are correct.",
        explanationHi: "कथन 2 गलत — बोधगया में ज्ञान प्राप्त; सारनाथ में पहला उपदेश (धर्मचक्र प्रवर्तन)। कथन 1 और 3 सही।",
    },
    {
        id: "sarnath-q2",
        questionEn: "How many UNESCO World Heritage Sites does India have as of July 2026, and how many are natural sites?",
        questionHi: "जुलाई 2026 तक भारत में कितने UNESCO विश्व धरोहर स्थल हैं और कितने प्राकृतिक हैं?",
        options: [
            { key: "a", en: "45 total — 37 cultural, 7 natural, 1 mixed", hi: "45 कुल — 37 सांस्कृतिक, 7 प्राकृतिक, 1 मिश्रित" },
            { key: "b", en: "44 total — 36 cultural, 7 natural, 1 mixed", hi: "44 कुल — 36 सांस्कृतिक, 7 प्राकृतिक, 1 मिश्रित" },
            { key: "c", en: "45 total — 38 cultural, 6 natural, 1 mixed", hi: "45 कुल — 38 सांस्कृतिक, 6 प्राकृतिक, 1 मिश्रित" },
            { key: "d", en: "46 total — 37 cultural, 8 natural, 1 mixed", hi: "46 कुल — 37 सांस्कृतिक, 8 प्राकृतिक, 1 मिश्रित" },
        ],
        correctKey: "a",
        explanationEn: "India has 45 UNESCO World Heritage Sites: 37 cultural, 7 natural, 1 mixed (Khangchendzonga). Sarnath was added as the 45th in 2026.",
        explanationHi: "45 कुल: 37 सांस्कृतिक, 7 प्राकृतिक, 1 मिश्रित (कंचनजंगा)। सारनाथ 45वां (2026)।",
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

export default function SarnathPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-yellow-700 hover:text-yellow-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Art & Culture</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Sarnath — India's 45th UNESCO Site</h1>
                    <p className="text-xl text-muted-foreground mb-6">सारनाथ — भारत का 45वां UNESCO स्थल</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-yellow-600" /><span>48th Session · Busan, Korea</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Landmark className="w-4 h-4 text-yellow-600" /><span>Varanasi, UP</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-yellow-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-yellow-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50/60 rounded-xl p-5 border border-yellow-100">
                            <h3 className="text-xs font-semibold uppercase text-yellow-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />During the 48th Session of the World Heritage Committee in Busan (South Korea), UNESCO inscribed the Ancient Buddhist Site of Sarnath (UP) on the World Heritage List.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />Gautama Buddha delivered his first sermon here — Dharmachakra Pravartana (Setting in Motion of the Wheel of Dharma).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />The Ashokan Lion Capital discovered at Sarnath was later adopted as the National Emblem of India.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />बुसान (द. कोरिया) में 48वें सत्र के दौरान सारनाथ (UP) को विश्व धरोहर सूची में शामिल किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />बुद्ध ने पहला उपदेश — धर्मचक्र प्रवर्तन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अशोक लायन कैपिटल — भारत का राष्ट्रीय प्रतीक।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Landmark className="w-5 h-5 text-yellow-600" /><h2 className="text-2xl font-bold">UNESCO Sites in India / भारत में UNESCO स्थल</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Totals (July 2026)</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• Total: 45 sites</li>
                                <li>• Cultural: 37 sites</li>
                                <li>• Natural: 7 sites</li>
                                <li>• Mixed: 1 site (Khangchendzonga, Sikkim, 2016)</li>
                                <li>• Latest additions: Sarnath (2026), Maratha Military Landscapes (2025), Moidams (2024), Dholavira (2021)</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Important Sites & Years</h3>
                            <ul className="space-y-1.5 text-xs">
                                <li>• Ajanta & Ellora Caves (Maharashtra) — 1983</li>
                                <li>• Agra Fort & Taj Mahal (UP) — 1983</li>
                                <li>• Sun Temple, Konark (Odisha) — 1984</li>
                                <li>• Mahabalipuram (TN) — 1984</li>
                                <li>• Khajuraho & Fatehpur Sikri — 1986</li>
                                <li>• Sanchi (MP) — 1989</li>
                                <li>• Mahabodhi Temple, Bodh Gaya (Bihar) — 2002</li>
                                <li>• Bhimbetka (MP) — 2003</li>
                                <li>• Red Fort (Delhi) — 2007</li>
                                <li>• Nalanda Mahavihara (Bihar) — 2016</li>
                                <li>• Dholavira (Gujarat) — 2021</li>
                                <li>• Moidams (Assam) — 2024</li>
                                <li>• Maratha Military Landscapes — 2025</li>
                                <li>• Sarnath (UP) — 2026</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Jaipur was listed as 'World Heritage Site' by the UNESCO World Heritage Committee in its 43rd Session held in the city of ______. <em>(UPPSC 2019)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Baku, Azerbaijan (2019).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-yellow-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/public-exams-amendment-2026"><Button variant="outline" className="gap-2 cursor-pointer">Next: Public Exams Bill <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}