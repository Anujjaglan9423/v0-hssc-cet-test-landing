"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, BookOpen, Music2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "nh-q1",
        questionEn: "With reference to Vande Mataram, consider: 1. Composed by Bankim Chandra Chatterjee. 2. Included in Anandamath (1882). 3. First used as a political slogan during the Civil Disobedience Movement. Which are correct?",
        questionHi: "वन्दे मातरम् के संबंध में: 1. रचना बंकिम चंद्र चट्टोपाध्याय ने की। 2. आनन्दमठ (1882) में शामिल। 3. पहली बार राजनीतिक नारे के रूप में सविनय अवज्ञा आंदोलन के दौरान। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "a",
        explanationEn: "Statement 3 is incorrect — Vande Mataram first emerged as a political slogan during the Swadeshi Movement (7 August 1905), not the Civil Disobedience Movement.",
        explanationHi: "कथन 3 गलत — यह पहली बार स्वदेशी आंदोलन (7 अगस्त 1905) के दौरान राजनीतिक नारा बना, सविनय अवज्ञा आंदोलन नहीं।",
    },
    {
        id: "nh-q2",
        questionEn: "Under the Prevention of Insults to National Honour (Amendment) Bill, 2026, what is the punishment for a repeat offender who intentionally prevents the singing of the National Song?",
        questionHi: "राष्ट्रीय सम्मान के अपमान की रोकथाम (संशोधन) विधेयक, 2026 के तहत, जो व्यक्ति जानबूझकर राष्ट्रीय गीत के गायन को रोकता है, उसे दोबारा अपराध करने पर क्या दंड मिलेगा?",
        options: [
            { key: "a", en: "Maximum 3 years imprisonment, fine, or both", hi: "अधिकतम 3 वर्ष कारावास, जुर्माना, या दोनों" },
            { key: "b", en: "Minimum 1 year imprisonment", hi: "न्यूनतम 1 वर्ष कारावास" },
            { key: "c", en: "Only fine of ₹50,000", hi: "केवल ₹50,000 जुर्माना" },
            { key: "d", en: "Life imprisonment", hi: "आजीवन कारावास" },
        ],
        correctKey: "b",
        explanationEn: "First-time offence: up to 3 years imprisonment, fine, or both. Repeat offenders face minimum imprisonment of one year.",
        explanationHi: "पहला अपराध: अधिकतम 3 वर्ष, जुर्माना, या दोनों। दोबारा अपराध करने पर न्यूनतम 1 वर्ष कारावास।",
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

export default function NationalHonourPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Polity</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Prevention of Insults to National Honour (Amendment) Bill, 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">राष्ट्रीय सम्मान के अपमान की रोकथाम (संशोधन) विधेयक, 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-orange-600" /><span>Passed 30 July 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Music2 className="w-4 h-4 text-orange-600" /><span>Vande Mataram protection</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-orange-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50/60 rounded-xl p-5 border border-orange-100">
                            <h3 className="text-xs font-semibold uppercase text-orange-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Parliament passed the Bill, amending Section 3 of the Prevention of Insults to National Honour Act, 1971.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Extends the same statutory protection available to the National Anthem (Jana Gana Mana) to the National Song (Vande Mataram).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Makes intentional obstruction or disturbance during singing of either a punishable offence.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />संसद ने विधेयक पारित कर 1971 अधिनियम की धारा 3 में संशोधन किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />राष्ट्रीय गीत (वन्दे मातरम्) को राष्ट्रीय गान (जन गण मन) के समान संरक्षण।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />दोनों के गायन में जानबूझकर रुकावट/व्यवधान दंडनीय।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Music2 className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Punishable acts: intentionally preventing singing of National Anthem/Song OR intentionally causing disturbance to an assembly engaged in singing.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Punishment: up to 3 years imprisonment, fine, or both. Repeat offenders — minimum 1 year imprisonment.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Vande Mataram composed by Bankim Chandra Chatterjee; first published in Bangadarshan (7 Nov 1875); included in Anandamath (1882).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Set to music by Rabindranath Tagore; first sung at 1896 INC Calcutta Session (presided by Rahimtulla M. Sayani).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Became a political slogan during the Swadeshi Movement — first used on 7 August 1905.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />On 24 January 1950, Constituent Assembly President Dr. Rajendra Prasad stated Vande Mataram should be honoured equally with Jana Gana Mana.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />दंडनीय कार्य: राष्ट्रगान/गीत के गायन को रोकना या सभा में व्यवधान उत्पन्न करना।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />दंड: अधिकतम 3 वर्ष, जुर्माना, या दोनों। दोबारा — न्यूनतम 1 वर्ष कारावास।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />वन्दे मातरम् — बंकिम चंद्र चट्टोपाध्याय; बंगदर्शन (7 नवंबर 1875); आनन्दमठ (1882)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />संगीतबद्ध रवीन्द्रनाथ ठाकुर; 1896 INC कलकत्ता (अध्यक्ष रहीमतुल्ला एम. सयानी)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />स्वदेशी आंदोलन में राजनीतिक नारा — पहला उपयोग 7 अगस्त 1905।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />24 जनवरी 1950 — डॉ. राजेन्द्र प्रसाद ने समान सम्मान की बात कही।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> With reference to the National Anthem of India: (1) It was first sung in December 1911 at the Calcutta session of INC. (2) The Constituent Assembly adopted it on 24 January 1950.</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Both statements are correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/sarnath-unesco"><Button variant="outline" className="gap-2 cursor-pointer">Next: Sarnath UNESCO <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}