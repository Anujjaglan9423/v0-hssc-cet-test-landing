"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Waves,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "elnino-q1",
        questionEn:
            "With reference to a 'Super El Niño', consider: 1. Declared when SST anomaly in the central and eastern equatorial Pacific exceeds the long-term average by more than 2.0°C. 2. It strengthens the equatorial Trade Winds, enhancing the Walker Circulation. 3. It suppresses oceanic upwelling of nutrient-rich cold waters off the South American coast. How many are correct?",
        questionHi:
            "'सुपर अल नीनो' के संदर्भ में: 1. मध्य और पूर्वी भूमध्यरेखीय प्रशांत में SST विसंगति दीर्घकालिक औसत से 2.0°C से अधिक होने पर घोषित। 2. यह व्यापारिक हवाओं को मजबूत कर वॉकर सर्कुलेशन को सुदृढ़ करता है। 3. दक्षिण अमेरिकी तट पर पोषक तत्वों से भरपूर ठंडे पानी की अपवेलिंग को दबाता है। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "b",
        explanationEn:
            "Statement 2 is WRONG — El Niño WEAKENS/reverses Trade Winds and disrupts the Walker Circulation (La Niña strengthens them). Statements 1 and 3 are correct.",
        explanationHi:
            "कथन 2 गलत — अल नीनो व्यापारिक हवाओं को कमजोर/उलट देता है और वॉकर सर्कुलेशन को बाधित करता है (ला नीना उन्हें मजबूत करता है)। कथन 1 और 3 सही हैं।",
    },
    {
        id: "elnino-q2",
        questionEn:
            "Assertion (A): Super El Niño events predictably lead to severe agricultural drought stress for Kharif crops in the Indian subcontinent. Reason (R): The phenomenon establishes an anomalous high-pressure subsidence zone over India, suppressing atmospheric convection and the Southwest Monsoon.",
        questionHi:
            "अभिकथन (A): सुपर अल नीनो घटनाएं भारतीय उपमहाद्वीप में खरीफ फसलों के लिए गंभीर सूखा तनाव लाती हैं। कारण (R): यह घटना भारत के ऊपर असामान्य उच्च-दबाव अवरोही क्षेत्र स्थापित करती है, जो संवहन और दक्षिण-पश्चिम मानसून को दबाती है।",
        options: [
            { key: "a", en: "Both A and R correct, R explains A", hi: "A और R सही, R, A की व्याख्या है" },
            { key: "b", en: "Both A and R correct, R does not explain A", hi: "A और R सही, R व्याख्या नहीं" },
            { key: "c", en: "A correct, R incorrect", hi: "A सही, R गलत" },
            { key: "d", en: "A incorrect, R correct", hi: "A गलत, R सही" },
        ],
        correctKey: "a",
        explanationEn: "Both A and R are correct, and R is the correct explanation of A.",
        explanationHi: "A और R दोनों सही हैं, और R, A की सही व्याख्या है।",
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

export default function SuperElNinoPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Geography & Environment</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Super El Niño</h1>
                    <p className="text-xl text-muted-foreground mb-6">सुपर अल नीनो</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-teal-600" /><span>Forecast by late 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Waves className="w-4 h-4 text-teal-600" /><span>ENSO warm phase</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-teal-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-teal-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-teal-50/60 rounded-xl p-5 border border-teal-100">
                            <h3 className="text-xs font-semibold uppercase text-teal-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />Global meteorological agencies forecast a Super El Niño event by late 2026.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />Threatens to breach the 1.5°C global warming threshold set by the Paris Agreement.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />Signifies an extreme intensification of the El Niño-Southern Oscillation (ENSO) warm phase.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />वैश्विक मौसम विज्ञान एजेंसियों ने 2026 के अंत तक सुपर अल नीनो का अनुमान लगाया है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />पेरिस समझौते की 1.5°C सीमा को पार करने का खतरा।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />यह ENSO के उष्ण चरण की अत्यधिक तीव्रता को दर्शाता है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Waves className="w-5 h-5 text-teal-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SST Anomaly: Super El Niño is declared when SST in the central and eastern equatorial Pacific exceeds the long-term average by more than 2.0°C.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Walker Circulation Collapse: severe weakening or complete reversal of equatorial Trade Winds; warm surface waters displaced eastward toward South America.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Suppression of Oceanic Upwelling: anomalous eastern Pacific warming depresses the thermocline, blocking cold-water upwelling off Peru/Ecuador — collapsing the anchovy fishery.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Weakening of Indian Monsoon: anomalous high-pressure subsidence over India suppresses convection → SW Monsoon deficits → Kharif crop stress.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Standard El Niño: SST anomaly ≥ 0.5°C above average. La Niña: SST 0.5°C or more below average (strengthens Trade Winds, brings above-normal monsoon rainfall).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Historical Super El Niño events: 1982–83, 1997–98, 2015–16 — linked to economic disruptions, disease pattern shifts and coral bleaching.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />SST विसंगति: मध्य/पूर्वी भूमध्यरेखीय प्रशांत में SST दीर्घकालिक औसत से 2.0°C से अधिक होने पर सुपर अल नीनो घोषित।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />वॉकर सर्कुलेशन का पतन: व्यापारिक हवाओं का गंभीर कमजोर होना/उलटना; गर्म सतही जल पूर्व की ओर दक्षिण अमेरिका की ओर।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />अपवेलिंग का दमन: थर्मोक्लाइन नीचे, पेरू/इक्वाडोर के तट पर ठंडे जल का उत्थान अवरुद्ध — एंकोवी मत्स्य उद्योग प्रभावित।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />भारतीय मानसून का कमजोर होना: उच्च-दाब अवरोही क्षेत्र → संवहन कम → SW मानसून में कमी → खरीफ फसल तनाव।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मानक अल नीनो: SST विसंगति ≥ 0.5°C। ला नीना: SST 0.5°C या अधिक नीचे (व्यापारिक हवाएं मजबूत, सामान्य से अधिक मानसून)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ऐतिहासिक सुपर अल नीनो: 1982–83, 1997–98, 2015–16 — आर्थिक व्यवधान, रोग पैटर्न, कोरल ब्लीचिंग।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> With reference to "El-Nino": 1. El-Nino involves appearance of warm current off the coast of Peru in eastern Pacific. 2. This warm current increases the temperature of water on the Peruvian coast by 10°C, thereby increasing plankton in the sea. <em>(UPPSC PCS Prelims 2023)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Only 1 is correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-teal-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/uae-exit-opec"><Button variant="outline" className="gap-2 cursor-pointer">Next: UAE Exits OPEC <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}