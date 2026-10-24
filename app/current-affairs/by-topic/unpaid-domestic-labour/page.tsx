"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "labour-q1",
        questionEn: "With reference to the SC ruling on unpaid domestic work: 1. Minimum baseline ₹30,000/month, revised 10% cumulatively every 3 years. 2. Judgment arose under Dowry Prohibition Act, 1961. Which are correct?",
        questionHi: "अवैतनिक घरेलू श्रम पर SC फैसला: 1. न्यूनतम ₹30,000/माह, हर 3 वर्ष में 10% संचयी वृद्धि। 2. निर्णय देहज प्रतिषेध अधिनियम 1961 के तहत। कौन सही हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "a",
        explanationEn: "Statement 2 is incorrect — the judgment arose from a 2001 motor accident compensation dispute in Punjab (under Motor Vehicles Act, 1988), involving homemaker Reshma.",
        explanationHi: "कथन 2 गलत — निर्णय पंजाब में 2001 मोटर दुर्घटना मुआवजा विवाद (मोटर वाहन अधिनियम, 1988) से, गृहिणी रेशमा से जुड़ा।",
    },
    {
        id: "labour-q2",
        questionEn: "According to the NSO 2019 Time Use Survey, women's unpaid caregiving and domestic work contribute approximately what share to India's GDP?",
        questionHi: "NSO 2019 टाइम यूज सर्वे के अनुसार, महिलाओं का अवैतनिक देखभाल/घरेलू कार्य भारत की GDP में लगभग कितना योगदान देता है?",
        options: [
            { key: "a", en: "5–7%", hi: "5-7%" },
            { key: "b", en: "15–17%", hi: "15-17%" },
            { key: "c", en: "25–27%", hi: "25-27%" },
            { key: "d", en: "35–40%", hi: "35-40%" },
        ],
        correctKey: "b",
        explanationEn: "NSO's 2019 Time Use Survey estimates women's unpaid work may contribute ~15–17% to India's GDP.",
        explanationHi: "NSO 2019 टाइम यूज सर्वे के अनुसार ~15-17% योगदान।",
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

export default function UnpaidLabourPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-pink-700 hover:text-pink-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Women & Labour</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Monetization of Unpaid Domestic Labour</h1>
                    <p className="text-xl text-muted-foreground mb-6">अवैतनिक घरेलू श्रम का आर्थिक मूल्यांकन</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-pink-600" /><span>SC ruling 11 June 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Scale className="w-4 h-4 text-pink-600" /><span>₹30,000/month baseline</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-pink-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-pink-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-pink-50/60 rounded-xl p-5 border border-pink-100">
                            <h3 className="text-xs font-semibold uppercase text-pink-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />On 11 June 2026, the Supreme Court ruled that unpaid domestic work by homemakers must be monetised at a minimum baseline of ₹30,000 per month.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />This baseline will be revised upward by 10% cumulatively every three years to account for inflation.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />Delivered by a Division Bench of Justice Sanjay Karol and Justice N.K. Singh.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />Originated from a 2001 motor accident compensation dispute in Punjab involving the death of homemaker Reshma, adjudicated under the Motor Vehicles Act, 1988.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />11 जून 2026 को सुप्रीम कोर्ट ने गृहिणी के अवैतनिक घरेलू कार्य का न्यूनतम मूल्य ₹30,000/माह तय किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />हर तीन वर्ष में 10% संचयी वृद्धि।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />जस्टिस संजय करोल और N.K. सिंह की खंडपीठ।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />पंजाब में 2001 मोटर दुर्घटना मुआवजा विवाद (मोटर वाहन अधिनियम, 1988) से — गृहिणी रेशमा।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Scale className="w-5 h-5 text-pink-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"Loss of Domestic Care" is a new separate compensatory category — distinguishes economic value of household management from emotional loss of companionship/consortium.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />NSO 2019 Time Use Survey: women's unpaid caregiving/domestic work contributes ~15–17% to India's GDP.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Lata Wadhwa v. State of Bihar (2001): SC had earlier fixed homemaker's notional income at ₹3,000/month.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Bench: Justice Sanjay Karol and Justice N.K. Singh.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"घरेलू देखभाल की हानि" नई श्रेणी — घरेलू प्रबंधन का आर्थिक मूल्य और भावनात्मक हानि अलग।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />NSO 2019: महिलाओं का अवैतनिक कार्य ~15-17% GDP योगदान।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />लता वाधवा बनाम बिहार (2001): SC ने पहले ₹3,000/माह अनुमानित आय तय की थी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पीठ: जस्टिस संजय करोल और N.K. सिंह।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-pink-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/g7-summit-2026"><Button variant="outline" className="gap-2 cursor-pointer">Next: G7 Summit 2026 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}