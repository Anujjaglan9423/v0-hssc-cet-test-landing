"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "abraham-q1",
        questionEn:
            "Consider the Abraham Accords: 1. Normalization pacts between Israel and Arab states mediated by the US. 2. Saudi Arabia and Qatar were among the founding signatories in September 2020. 3. The Accords mandate resolving the Palestinian statehood issue first.",
        questionHi:
            "अब्राहम अकॉर्ड्स पर विचार करें: 1. अमेरिका की मध्यस्थता में इजरायल और अरब राज्यों के बीच सामान्यीकरण समझौते। 2. सितंबर 2020 में सऊदी अरब और कतर संस्थापक हस्ताक्षरकर्ता थे। 3. समझौते फिलिस्तीनी राज्य के मुद्दे को पहले हल करना अनिवार्य करते हैं।",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "c", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "a",
        explanationEn:
            "Statement 2 is wrong — founding signatories were UAE and Bahrain (not Saudi Arabia or Qatar). Statement 3 is wrong — the Accords deliberately bypass the Palestinian issue.",
        explanationHi:
            "कथन 2 गलत — संस्थापक हस्ताक्षरकर्ता UAE और बहरीन थे (सऊदी अरब या कतर नहीं)। कथन 3 गलत — समझौते फिलिस्तीनी मुद्दे को जानबूझकर दरकिनार करते हैं।",
    },
    {
        id: "abraham-q2",
        questionEn:
            "Which countries were the founding signatories of the Abraham Accords in September 2020?",
        questionHi:
            "सितंबर 2020 में अब्राहम अकॉर्ड्स के संस्थापक हस्ताक्षरकर्ता कौन से देश थे?",
        options: [
            { key: "a", en: "Israel, UAE, Bahrain", hi: "इजरायल, UAE, बहरीन" },
            { key: "b", en: "Israel, Saudi Arabia, Egypt", hi: "इजरायल, सऊदी अरब, मिस्र" },
            { key: "c", en: "Israel, Qatar, Turkey", hi: "इजरायल, कतर, तुर्की" },
            { key: "d", en: "Israel, Jordan, Pakistan", hi: "इजरायल, जॉर्डन, पाकिस्तान" },
        ],
        correctKey: "a",
        explanationEn:
            "Phase 1 (Sept 2020): Israel, UAE and Bahrain signed. Phase 2 (2020–2021): Morocco and Sudan joined. Egypt (1979), Jordan (1994) and Turkey (1949) have older bilateral treaties with Israel.",
        explanationHi:
            "चरण 1 (सितंबर 2020): इजरायल, UAE, बहरीन। चरण 2 (2020-2021): मोरक्को और सूडान। मिस्र (1979), जॉर्डन (1994), तुर्की (1949) के पुराने द्विपक्षीय समझौते।",
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

export default function AbrahamAccordsPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · International Relations</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">The Abraham Accords</h1>
                    <p className="text-xl text-muted-foreground mb-6">अब्राहम अकॉर्ड्स</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-indigo-600" /><span>Signed Sept 2020</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Handshake className="w-4 h-4 text-indigo-600" /><span>US-mediated</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />The US President called upon several Muslim-majority countries — Saudi Arabia, Qatar, Pakistan, Egypt, Turkey and Jordan — to join the Abraham Accords collectively.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />Core Objective: create a joint economic and security framework in West Asia to counter maritime threats and protect global trade routes.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />Historical context: Turkey (1949), Egypt (1979) and Jordan (1994) already hold older bilateral peace treaties with Israel.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अमेरिकी राष्ट्रपति ने सऊदी अरब, कतर, पाकिस्तान, मिस्र, तुर्की और जॉर्डन सहित मुस्लिम बहुसंख्यक देशों से सामूहिक रूप से अब्राहम अकॉर्ड्स में शामिल होने का आह्वान किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मुख्य उद्देश्य: पश्चिम एशिया में संयुक्त आर्थिक और सुरक्षा ढांचा तैयार करना।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />ऐतिहासिक संदर्भ: तुर्की (1949), मिस्र (1979), जॉर्डन (1994) के इजरायल के साथ पुराने द्विपक्षीय समझौते।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Handshake className="w-5 h-5 text-indigo-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Historic US-mediated peace agreements; aim to build open diplomatic ties between Israel and Arab/Muslim countries.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />First signed in September 2020.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Phase 1 (Sept 2020): Israel, UAE, Bahrain signed under US mediation.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Phase 2 (2020–21): Morocco and Sudan joined.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Reasons for signing: common threat perception (Iran), moving beyond oil, technology and security deals, and a new US regional approach that bypasses the Palestinian issue.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />अमेरिका की मध्यस्थता में ऐतिहासिक शांति समझौते; इजरायल और अरब/मुस्लिम देशों के बीच खुले राजनयिक संबंध।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पहला हस्ताक्षर सितंबर 2020।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />चरण 1 (सितंबर 2020): इजरायल, UAE, बहरीन।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />चरण 2 (2020-21): मोरक्को और सूडान।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />हस्ताक्षर कारण: साझा खतरा (ईरान), तेल से आगे, तकनीक और सुरक्षा, और नया अमेरिकी दृष्टिकोण।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Which of the following countries is a signatory to the Abraham Accord? <em>(UPPSC RO/ARO 2021)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Israel, United Arab Emirates, Bahrain (option 3).</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-indigo-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
<Link href="/current-affairs/by-topic/ebola-outbreak-2026">
                            <Button variant="outline" className="gap-2 cursor-pointer">
                                Next: Ebola Outbreak 2026 <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}