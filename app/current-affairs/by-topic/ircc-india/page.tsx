"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "ircc-q1",
        questionEn: "The \"Internationally Recognized Certificate of Compliance\" (IRCC), recently seen in the news, is a key mechanism established under which of the following international agreements?",
        questionHi: "हाल ही में समाचारों में रहा \"अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त अनुपालन प्रमाण पत्र\" (IRCC) निम्नलिखित में से किस अंतरराष्ट्रीय समझौते के तहत स्थापित एक प्रमुख तंत्र है?",
        options: [
            { key: "a", en: "The Cartagena Protocol", hi: "काटार्जेना प्रोटोकॉल" },
            { key: "b", en: "The Nagoya Protocol", hi: "नागोया प्रोटोकॉल" },
            { key: "c", en: "CITES", hi: "CITES" },
            { key: "d", en: "The Ramsar Convention", hi: "रामसर कन्वेंशन" },
        ],
        correctKey: "b",
        explanationEn: "The IRCC is issued under the Nagoya Protocol (2010), which governs Access and Benefit Sharing (ABS) of genetic resources under the CBD.",
        explanationHi: "IRCC नागोया प्रोटोकॉल (2010) के तहत जारी किया जाता है, जो CBD के तहत आनुवंशिक संसाधनों के ABS को नियंत्रित करता है।",
    },
    {
        id: "ircc-q2",
        questionEn:
            "With reference to the National Biodiversity Authority (NBA) in India, consider the following statements: 1. It is a statutory body established under the Biological Diversity Act, 2002. 2. Its headquarters is located in Chennai. 3. It functions under the administrative control of the Ministry of Environment, Forest and Climate Change.",
        questionHi:
            "भारत में राष्ट्रीय जैव विविधता प्राधिकरण (NBA) के संदर्भ में निम्नलिखित कथनों पर विचार करें: 1. यह जैविक विविधता अधिनियम, 2002 के तहत स्थापित एक वैधानिक निकाय है। 2. इसका मुख्यालय चेन्नई में स्थित है। 3. यह पर्यावरण, वन और जलवायु परिवर्तन मंत्रालय के प्रशासनिक नियंत्रण में कार्य करता है।",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "d",
        explanationEn: "All three statements are correct.",
        explanationHi: "तीनों कथन सही हैं।",
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
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}
                        <span className="text-sm font-semibold">{isCorrect ? "Correct! / सही उत्तर!" : `Correct: ${mcq.correctKey.toUpperCase()}`}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

export default function IRCCIndiaPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-lime-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-lime-700 hover:text-lime-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-lime-100 text-lime-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Environment & Biodiversity</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">India's Global Leadership in IRCCs</h1>
                    <p className="text-xl text-muted-foreground mb-6">जैव विविधता अनुपालन (IRCCs) में भारत का वैश्विक नेतृत्व</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-lime-600" /><span>2026 (recent)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Globe2 className="w-4 h-4 text-lime-600" /><span>Nagoya Protocol, CBD</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />India has emerged as the global leader in issuing Internationally Recognised Certificates of Compliance (IRCCs) under the Nagoya Protocol on Access and Benefit Sharing (ABS).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />India has issued 3,561 IRCCs out of 6,288 globally — 56.63% of the world total.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />Core Objective: prevent biopiracy and guarantee fair and equitable sharing of benefits (ABS) arising from commercial use of indigenous genetic resources.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />Institutional success reflects effective implementation of the Biological Diversity Act, 2002 through the National Biodiversity Authority (est. 2003).</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत ABS पर नागोया प्रोटोकॉल के तहत IRCC जारी करने में वैश्विक नेतृत्वकर्ता के रूप में उभरा है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत ने दुनिया भर के 6,288 में से 3,561 IRCC जारी किए — वैश्विक कुल का 56.63%।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मुख्य उद्देश्य: बायोपायरेसी को रोकना और स्वदेशी आनुवंशिक संसाधनों के व्यावसायिक उपयोग से उत्पन्न लाभों का उचित और समान बंटवारा सुनिश्चित करना।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />संस्थागत सफलता जैविक विविधता अधिनियम, 2002 के प्रभावी कार्यान्वयन को दर्शाती है, जिसे राष्ट्रीय जैव विविधता प्राधिकरण (2003) के माध्यम से लागू किया गया।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Leaf className="w-5 h-5 text-lime-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />What is an IRCC? Internationally recognized legal proof that genetic resources were accessed per the provider country's Prior Informed Consent (PIC) and Mutually Agreed Terms (MAT).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ABS Framework: ensures benefits from biological resources are shared with local communities and farmers who conserve them.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />CBD: landmark treaty from the 1992 Rio Earth Summit — primary global framework for conserving and sustainably using biological resources.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Nagoya Protocol (2010): governs ABS of genetic resources.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Cartagena Protocol (2000): biosafety — safe handling and transport of Living Modified Organisms (LMOs).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Top contributors after India: France (964), Spain (320), Argentina (257), Panama (156), Kenya (144).</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />IRCC क्या है? अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त कानूनी प्रमाण कि प्रदाता देश की PIC और MAT के अनुसार आनुवंशिक संसाधनों तक पहुंच प्राप्त की गई।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />ABS फ्रेमवर्क: जैविक संसाधनों के उपयोग से लाभ स्थानीय समुदायों और किसानों के साथ साझा किए जाएं, जो इनका संरक्षण करते हैं।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />CBD: 1992 के रियो पृथ्वी सम्मेलन से उत्पन्न ऐतिहासिक अंतरराष्ट्रीय संधि।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />नागोया प्रोटोकॉल (2010): आनुवंशिक संसाधनों के ABS को नियंत्रित करता है।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कार्टाजेना प्रोटोकॉल (2000): जैव सुरक्षा — LMOs की सुरक्षित हैंडलिंग और परिवहन।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />भारत के बाद शीर्ष योगदानकर्ता: फ्रांस (964), स्पेन (320), अर्जेंटीना (257), पनामा (156), केन्या (144)।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Arrange the following events in chronological order: I. Rio Earth Summit II. Publication of Brundtland Commission Report III. Enforcement of Montreal Protocol IV. Publication of 'The Limit to Growth' Report. <em>(UPPSC 2020)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> IV → II → III → I</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-lime-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-lime-100 text-lime-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/fcra-amendment-2026"><Button variant="outline" className="gap-2 cursor-pointer">Next: FCRA Amendment 2026 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}