"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Wind,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "ndc-q1",
        questionEn:
            "In the context of India's recently submitted Revised NDCs, consider: 1. Mandates a reduction in emissions intensity of GDP by 60% by 2035 vs 2005 levels. 2. Targets 47% of cumulative electric power installed capacity from non-fossil fuel sources. 3. Includes creating a carbon sink of 3.5–4.0 billion tonnes CO2 eq by 2035. How many are correct?",
        questionHi:
            "भारत की संशोधित NDC के संदर्भ में: 1. 2005 की तुलना में 2035 तक GDP की उत्सर्जन तीव्रता में 60% कमी। 2. गैर-जीवाश्म ईंधन से 47% स्थापित विद्युत क्षमता। 3. 2035 तक 3.5–4.0 बिलियन टन CO2 समतुल्य कार्बन सिंक। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "a",
        explanationEn:
            "Only Statement 3 is correct. Statement 1 is WRONG — the emissions intensity target is 47% (not 60%). Statement 2 is WRONG — the non-fossil fuel target is 60% (not 47%). The numbers have been swapped.",
        explanationHi:
            "केवल कथन 3 सही है। कथन 1 गलत — उत्सर्जन तीव्रता लक्ष्य 47% (60% नहीं)। कथन 2 गलत — गैर-जीवाश्म ईंधन लक्ष्य 60% (47% नहीं)। संख्याएं बदली हुई हैं।",
    },
    {
        id: "ndc-q2",
        questionEn:
            "The first Conference of Parties (COP) under the UNFCCC was held in which city?",
        questionHi:
            "UNFCCC के तहत पहली Conference of Parties (COP) किस शहर में आयोजित हुई?",
        options: [
            { key: "a", en: "Rio de Janeiro, Brazil", hi: "रियो डी जनेरियो, ब्राज़ील" },
            { key: "b", en: "Berlin, Germany", hi: "बर्लिन, जर्मनी" },
            { key: "c", en: "Kyoto, Japan", hi: "क्योटो, जापान" },
            { key: "d", en: "Paris, France", hi: "पेरिस, फ्रांस" },
        ],
        correctKey: "b",
        explanationEn: "The first UNFCCC COP was held in Berlin, Germany in 1995.",
        explanationHi: "UNFCCC की पहली COP 1995 में बर्लिन, जर्मनी में आयोजित हुई।",
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

export default function IndiaNDC2035Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Climate & Environment</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">India's Updated NDCs 2031–2035</h1>
                    <p className="text-xl text-muted-foreground mb-6">भारत के संशोधित राष्ट्रीय स्तर पर निर्धारित योगदान 2031–2035</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-emerald-600" /><span>2031–2035 period</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Wind className="w-4 h-4 text-emerald-600" /><span>UNFCCC · Paris Agreement</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />India released its updated Nationally Determined Contributions (NDCs) under the UNFCCC, covering 2031–2035 and aligned with the Paris Agreement.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Aligned with Viksit Bharat @2047 and Net-Zero by 2070.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत ने UNFCCC के तहत संशोधित NDC जारी किए, 2031–2035 अवधि, पेरिस समझौते के अनुरूप।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />विकसित भारत @2047 और 2070 तक Net-Zero के अनुरूप।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Wind className="w-5 h-5 text-emerald-600" /><h2 className="text-2xl font-bold">Key Targets / मुख्य लक्ष्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Emissions Intensity: 47% reduction by 2035 from 2005 baseline.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Non-Fossil Fuel Power: 60% of cumulative electric power installed capacity by 2035 from non-fossil sources.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Carbon Sink: 3.5–4.0 billion tonnes CO2 eq through forest and tree cover by 2035.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Whole-of-Society Strategy: integrates with National Green Hydrogen Mission, PM Surya Ghar, PLI schemes, and LiFE.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UNFCCC: from 1992 Rio Earth Summit; in force 1994; 198 signatories. First COP — Berlin 1995.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Paris Agreement (2015, COP21): limit global warming to well below 2°C, preferably 1.5°C, vs pre-industrial levels.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />उत्सर्जन तीव्रता: 2005 आधार पर 2035 तक 47% कमी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />गैर-जीवाश्म ईंधन विद्युत: 2035 तक कुल स्थापित क्षमता का 60%।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कार्बन सिंक: 2035 तक वन एवं वृक्ष आवरण से 3.5–4.0 बिलियन टन CO2 समतुल्य।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />समग्र समाज रणनीति: नेशनल ग्रीन हाइड्रोजन मिशन, PM सूर्य घर, PLI, LiFE के साथ एकीकरण।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UNFCCC: 1992 रियो; 1994 प्रभावी; 198 हस्ताक्षरकर्ता। पहली COP — बर्लिन 1995।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पेरिस समझौता (2015, COP21): तापमान वृद्धि 2°C से नीचे, अधिमानतः 1.5°C तक।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> When was India's first National Action Plan on Climate Change released? <em>(UPPSC-style)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> 2008.</p>
                        <p className="text-sm mt-2"><strong>Q.</strong> The term 'Intended Nationally Determined Contributions' is sometimes seen in the news in the context of — <em>(UPSC CSE Prelims 2016)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> The Paris Agreement on climate change.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-emerald-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/abraham-accords"><Button variant="outline" className="gap-2 cursor-pointer">Next: Abraham Accords <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}