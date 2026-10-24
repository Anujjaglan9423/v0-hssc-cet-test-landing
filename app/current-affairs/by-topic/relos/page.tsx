"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Ship } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "relos-q1",
        questionEn: "With reference to RELOS: 1. It establishes a formal military alliance allowing Russia permanent naval bases in India. 2. Can be activated only during joint exercises, HADR ops, or scheduled port calls. 3. Russia is the first country with which India has operationalized reciprocal logistics. Which are correct?",
        questionHi: "RELOS: 1. भारत में रूस के स्थायी नौसैनिक अड्डों के लिए औपचारिक सैन्य गठबंधन। 2. केवल संयुक्त अभ्यास/HADR/निर्धारित पोर्ट कॉल्स के दौरान सक्रिय। 3. रूस पहला देश। कौन सही हैं?",
        options: [
            { key: "a", en: "2 only", hi: "केवल 2" },
            { key: "b", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "c", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "a",
        explanationEn: "Statement 1 is wrong — RELOS is a reciprocal logistics support agreement, NOT a mutual defense alliance. It bars permanent bases. Statement 3 is wrong — LEMOA with US (2016) was India's first such pact. Statement 2 is correct.",
        explanationHi: "कथन 1 गलत — RELOS पारस्परिक लॉजिस्टिक्स सहायता, सैन्य गठबंधन नहीं; स्थायी अड्डों पर प्रतिबंध। कथन 3 गलत — LEMOA (US, 2016) पहला। कथन 2 सही।",
    },
    {
        id: "relos-q2",
        questionEn: "What does RELOS stand for?",
        questionHi: "RELOS का पूर्ण रूप क्या है?",
        options: [
            { key: "a", en: "Reciprocal Exchange of Logistics Agreement", hi: "Reciprocal Exchange of Logistics Agreement" },
            { key: "b", en: "Regional Economic Logistics Support Agreement", hi: "Regional Economic Logistics Support Agreement" },
            { key: "c", en: "Russian Economic Logistics Support Agreement", hi: "Russian Economic Logistics Support Agreement" },
            { key: "d", en: "Reciprocal Economic Liberalization Organization Support", hi: "Reciprocal Economic Liberalization Organization Support" },
        ],
        correctKey: "a",
        explanationEn: "RELOS = Reciprocal Exchange of Logistics Agreement. India-Russia RELOS operationalized in January 2026; signed in Moscow Feb 2025.",
        explanationHi: "RELOS = Reciprocal Exchange of Logistics Agreement। भारत-रूस RELOS जनवरी 2026 में लागू; फरवरी 2025 मॉस्को में हस्ताक्षर।",
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

export default function RELOSPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Defense</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">India–Russia RELOS Pact</h1>
                    <p className="text-xl text-muted-foreground mb-6">पारस्परिक लॉजिस्टिक्स विनिमय समझौता (RELOS)</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-red-600" /><span>Signed Feb 2025 · Operational Jan 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Ship className="w-4 h-4 text-red-600" /><span>Moscow</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-red-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50/60 rounded-xl p-5 border border-red-100">
                            <h3 className="text-xs font-semibold uppercase text-red-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />Why in news: RELOS triggered social media speculation falsely claiming it allows stationing of 3,000 Russian troops on Indian soil. It is a routine logistical arrangement, not a military alliance.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />India–Russia RELOS officially operationalized in January 2026. Formally signed by both nations in Moscow in February 2025.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />A foundational, non-offensive military cooperation framework designed purely for administrative and technical assistance.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />चर्चा में: सोशल मीडिया पर भ्रामक दावे कि 3,000 रूसी सैनिक तैनात होंगे। वास्तव में यह नियमित लॉजिस्टिक व्यवस्था है, सैन्य गठबंधन नहीं।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />जनवरी 2026 में आधिकारिक रूप से लागू; फरवरी 2025 में मॉस्को में हस्ताक्षर।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />गैर-आक्रामक सैन्य सहयोग ढांचा — प्रशासनिक और तकनीकी सहायता।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Ship className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Bilateral signing: India and Russia signed in Moscow in February 2025.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Services covered: reciprocal use of military bases, airfields and ports to refuel, restock supplies, and handle vessel/aircraft maintenance.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Activated only during mutually planned joint exercises, military training, HADR operations, or scheduled port calls.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Strictly bars permanent/long-term stationing of troops or foreign military bases.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />India has similar pacts with UK, France, Japan, Australia, Singapore.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />US agreements: LEMOA (2016) logistics, COMCASA (2018) secure comms, BECA (2020) geospatial data.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />द्विपक्षीय हस्ताक्षर: फरवरी 2025, मॉस्को।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />सेवाएं: सैन्य अड्डों, हवाई अड्डों, बंदरगाहों का पारस्परिक उपयोग — ईंधन, आपूर्ति, रखरखाव।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />केवल संयुक्त अभ्यास, HADR, निर्धारित पोर्ट कॉल्स के दौरान सक्रिय।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />स्थायी सैनिक तैनाती/विदेशी सैन्य अड्डों पर स्पष्ट प्रतिबंध।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />UK, फ्रांस, जापान, ऑस्ट्रेलिया, सिंगापुर के साथ समान समझौते।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />अमेरिका: LEMOA (2016), COMCASA (2018), BECA (2020)।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/kishau-dam"><Button variant="outline" className="gap-2 cursor-pointer">Next: Kishau Dam <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}