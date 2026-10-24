"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Wheat } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "sehat-q1",
        questionEn: "With reference to the SEHAT Mission: 1. It was launched by PM Narendra Modi. 2. It represents India's first formal national-scale policy convergence between agriculture and public health sectors. Which are correct?",
        questionHi: "SEHAT मिशन: 1. PM नरेंद्र मोदी द्वारा लॉन्च। 2. कृषि और सार्वजनिक स्वास्थ्य क्षेत्रों के बीच पहला औपचारिक राष्ट्रीय स्तर का समन्वय। कौन सही हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "b",
        explanationEn: "Statement 1 is wrong — the mission was launched by Union Health Minister J.P. Nadda and Union Agriculture Minister Shivraj Singh Chouhan. Statement 2 is correct.",
        explanationHi: "कथन 1 गलत — केंद्रीय स्वास्थ्य मंत्री जे.पी. नड्डा और कृषि मंत्री शिवराज सिंह चौहान द्वारा लॉन्च। कथन 2 सही है।",
    },
    {
        id: "sehat-q2",
        questionEn: "What does SEHAT stand for?",
        questionHi: "SEHAT का पूर्ण रूप क्या है?",
        options: [
            { key: "a", en: "Science Excellence for Health through Agricultural Transformation", hi: "Science Excellence for Health through Agricultural Transformation" },
            { key: "b", en: "Sustainable Environment for Health and Agriculture Transformation", hi: "Sustainable Environment for Health and Agriculture Transformation" },
            { key: "c", en: "Smart Health through Advanced Technology", hi: "Smart Health through Advanced Technology" },
            { key: "d", en: "Safe Environment for Human and Agriculture Technology", hi: "Safe Environment for Human and Agriculture Technology" },
        ],
        correctKey: "a",
        explanationEn: "SEHAT = Science Excellence for Health through Agricultural Transformation. It is anchored by ICAR and ICMR.",
        explanationHi: "SEHAT = Science Excellence for Health through Agricultural Transformation। ICAR और ICMR द्वारा संचालित।",
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

export default function SEHATPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-lime-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-lime-700 hover:text-lime-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-lime-100 text-lime-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Health & Agriculture</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">SEHAT Mission</h1>
                    <p className="text-xl text-muted-foreground mb-6">SEHAT मिशन</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-lime-600" /><span>2026 (New Delhi)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Wheat className="w-4 h-4 text-lime-600" /><span>ICAR + ICMR</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-lime-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-lime-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-lime-50/60 rounded-xl p-5 border border-lime-100">
                            <h3 className="text-xs font-semibold uppercase text-lime-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />Union Government officially launched the SEHAT Mission (Science Excellence for Health through Agricultural Transformation) in New Delhi.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />First formal, national-scale policy convergence between India's agriculture and public health sectors.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />Joint mission anchored by ICAR and ICMR; launched by J.P. Nadda (Health) and Shivraj Singh Chouhan (Agriculture).</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />केंद्र सरकार ने नई दिल्ली में SEHAT मिशन लॉन्च किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />कृषि और सार्वजनिक स्वास्थ्य के बीच पहला औपचारिक राष्ट्रीय स्तर का समन्वय।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />ICAR और ICMR द्वारा संचालित; जे.पी. नड्डा और शिवराज सिंह चौहान द्वारा लॉन्च।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Wheat className="w-5 h-5 text-lime-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Strategic Preventive Framework: shift from reactive treatment-based healthcare to proactive prevention — "food as medicine".</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Tackles India's dual disease burden: persistent undernutrition/hidden hunger + rising NCDs (diabetes, hypertension, cancer).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Promotes climate-resilient, nutrient-rich millets: Kodo, Kutki, Ragi, Jowar, Bajra.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Biofortification: naturally enrich crops with zinc, iron.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Integrated Farming Systems: crop farming + animal husbandry + fisheries + beekeeping.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Farmer Health Protection: research/mitigate heat stress, pesticide exposure.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"One Health" Integration: human, animal, plant, environmental health — supported by WHO, FAO, UNEP.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />रणनीतिक निवारक ढांचा: उपचार-आधारित से रोकथाम-उन्मुख — "भोजन ही औषधि"।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />दोहरी चुनौती: कुपोषण/छिपी भूख + बढ़ते NCDs (मधुमेह, उच्च रक्तचाप, कैंसर)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />जलवायु-अनुकूल मोटे अनाज: कोदो, कुटकी, रागी, ज्वार, बाजरा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />बायोफोर्टिफिकेशन: जिंक, आयरन से समृद्ध फसलें।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />एकीकृत कृषि प्रणालियाँ: फसल + पशुपालन + मत्स्य + मधुमक्खी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कृषक स्वास्थ्य सुरक्षा: हीट स्ट्रेस, कीटनाशकों के जोखिम पर शोध।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"वन हेल्थ" एकीकरण: WHO, FAO, UNEP समर्थित।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> पूर्वोत्तर के लिए महिला उद्यमिता कार्यक्रम "स्वावलंबिनी" किस मंत्रालय द्वारा शुरू किया गया?</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> (c) केवल 3 — सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-lime-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-lime-100 text-lime-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/vb-ram-g"><Button variant="outline" className="gap-2 cursor-pointer">Next: VB-G RAM G <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}