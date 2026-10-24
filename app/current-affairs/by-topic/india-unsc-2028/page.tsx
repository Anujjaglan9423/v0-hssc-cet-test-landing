"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "unsc-q1",
        questionEn: "In the context of India's campaign for a non-permanent seat in UNSC for 2028–29, what does SHANTI stand for?",
        questionHi: "UNSC 2028-29 अस्थायी सीट के लिए भारत के अभियान में SHANTI का पूर्ण रूप क्या है?",
        options: [
            { key: "a", en: "Securing Holistic Advancement through Norms, Trust and Integrity", hi: "Securing Holistic Advancement through Norms, Trust and Integrity" },
            { key: "b", en: "Securing Humanitarian Assistance through Negotiation, Transparency and Inclusion", hi: "Securing Humanitarian Assistance through Negotiation, Transparency and Inclusion" },
            { key: "c", en: "Strategic Harmony and National Trust Initiative", hi: "Strategic Harmony and National Trust Initiative" },
            { key: "d", en: "Sustainable Human Advancement through National Transformation and Innovation", hi: "Sustainable Human Advancement through National Transformation and Innovation" },
        ],
        correctKey: "a",
        explanationEn: "SHANTI = Securing Holistic Advancement through Norms, Trust and Integrity — India's guiding vision for its UNSC 2028–29 campaign.",
        explanationHi: "SHANTI = Securing Holistic Advancement through Norms, Trust and Integrity — UNSC 2028-29 अभियान का मार्गदर्शक विजन।",
    },
    {
        id: "unsc-q2",
        questionEn: "How many times has India served as a non-permanent member of the UNSC?",
        questionHi: "भारत कितनी बार UNSC का अस्थायी सदस्य रह चुका है?",
        options: [
            { key: "a", en: "Four times", hi: "चार बार" },
            { key: "b", en: "Six times", hi: "छह बार" },
            { key: "c", en: "Eight times", hi: "आठ बार" },
            { key: "d", en: "Ten times", hi: "दस बार" },
        ],
        correctKey: "c",
        explanationEn: "India has served 8 times, most recently in 2021–22. Non-permanent members are elected by UNGA for 2-year terms with a two-thirds majority.",
        explanationHi: "भारत 8 बार रहा — नवीनतम 2021-22। अस्थायी सदस्य UNGA द्वारा 2 वर्ष के लिए दो-तिहाई बहुमत से चुने जाते हैं।",
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

export default function UNSCPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · International Relations</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">India's UNSC 2028–29 Campaign & SHANTI Vision</h1>
                    <p className="text-xl text-muted-foreground mb-6">भारत का UNSC 2028-29 अभियान और 'SHANTI' विजन</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-sky-600" /><span>Launched 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Shield className="w-4 h-4 text-sky-600" /><span>UNSC non-permanent seat</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />EAM Dr. S. Jaishankar launched India's campaign for a 2028–29 non-permanent seat in the UNSC.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />Unveiled the SHANTI vision — Securing Holistic Advancement through Norms, Trust and Integrity.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />Core philosophy: rules-based international order, mutual trust, stronger representation of the Global South.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />विदेश मंत्री डॉ. एस. जयशंकर ने UNSC की 2028-29 अस्थायी सदस्यता के लिए भारत का अभियान लॉन्च किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />SHANTI विजन प्रस्तुत।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />नियम-आधारित व्यवस्था, आपसी विश्वास, ग्लोबल साउथ का बेहतर प्रतिनिधित्व।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Shield className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UNSC Composition: 5 permanent + 10 elected non-permanent members.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />P5 (Permanent Members with Veto): China, France, Russia, UK, US.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Non-permanent members elected by UNGA for 2-year terms with a two-thirds majority.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />India has served 8 times as non-permanent member; most recently 2021–22.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SHANTI = Securing Holistic Advancement through Norms, Trust and Integrity.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UNSC संरचना: 5 स्थायी + 10 निर्वाचित अस्थायी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />P5 (वीटो): चीन, फ्रांस, रूस, UK, US।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />अस्थायी सदस्य UNGA द्वारा 2 वर्ष के लिए दो-तिहाई बहुमत से।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />भारत 8 बार अस्थायी सदस्य; नवीनतम 2021-22।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SHANTI = Securing Holistic Advancement through Norms, Trust and Integrity।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Which of the following countries was NOT elected in June 2020 as a non-permanent member of UNSC for 2021-22? <em>(UPPSC 2020)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Canada (the elected members were India, Ireland, Kenya, Mexico, Norway).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/national-honour-amendment-2026"><Button variant="outline" className="gap-2 cursor-pointer">National Honour Amendment <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}