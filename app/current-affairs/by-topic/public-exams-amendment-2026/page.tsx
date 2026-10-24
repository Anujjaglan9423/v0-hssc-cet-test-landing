"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Languages, BookOpen, Gavel, ShieldAlert
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "exam-bill-q1",
        questionEn: "With reference to the Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026, consider the following statements: 1. The minimum imprisonment for offences such as question paper leaks and OMR sheet tampering has been increased from three years to five years. 2. Under the Act, it will be mandatory to complete all investigations within six months. Which of the statements given above is/are correct?",
        questionHi: "सार्वजनिक परीक्षा (अनुचित साधनों की रोकथाम) संशोधन विधेयक, 2026 के संदर्भ में: 1. प्रश्नपत्र लीक और OMR शीट से छेड़छाड़ के लिए न्यूनतम कारावास 3 वर्ष से बढ़ाकर 5 वर्ष किया गया। 2. सभी जाँचें छह माह के भीतर पूरी करना अनिवार्य होगा। कौन सा/से सही हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1 और न ही 2" },
        ],
        correctKey: "a",
        explanationEn: "Statement 2 is incorrect: Investigations under the Act are required to be completed within 60 days, not within six months. Statement 1 is correct.",
        explanationHi: "कथन 2 गलत है: जांच 60 दिनों के भीतर पूरी की जानी आवश्यक है, न कि छह माह के भीतर। कथन 1 सही है।",
    },
    {
        id: "exam-bill-q2",
        questionEn: "On which date did President Droupadi Murmu grant assent to the Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026?",
        questionHi: "राष्ट्रपति द्रौपदी मुर्मू ने सार्वजनिक परीक्षा (अनुचित साधनों की रोकथाम) संशोधन विधेयक, 2026 को अपनी स्वीकृति कब प्रदान की?",
        options: [
            { key: "a", en: "26 July 2026", hi: "26 जुलाई, 2026" },
            { key: "b", en: "29 July 2026", hi: "29 जुलाई, 2026" },
            { key: "c", en: "31 July 2026", hi: "31 जुलाई, 2026" },
            { key: "d", en: "2 August 2026", hi: "2 अगस्त, 2026" },
        ],
        correctKey: "c",
        explanationEn: "President Droupadi Murmu granted assent to the Bill on 31 July 2026.",
        explanationHi: "राष्ट्रपति द्रौपदी मुर्मू ने 31 जुलाई, 2026 को स्वीकृति प्रदान की।",
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

export default function PublicExamsBillPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Polity & Governance</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Public Examinations (Prevention of Unfair Means) Amendment Bill, 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">सार्वजनिक परीक्षा (अनुचित साधनों की रोकथाम) संशोधन विधेयक, 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-blue-600" /><span>Passed: July 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Gavel className="w-4 h-4 text-blue-600" /><span>Ministry: Law & Justice</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-blue-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50/60 rounded-xl p-5 border border-blue-100">
                            <h3 className="text-xs font-semibold uppercase text-blue-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />Passed in the aftermath of the NEET-UG 2026 paper leak.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />Amends the Public Examinations (Prevention of Unfair Means) Act, 2024 to introduce stricter penalties and fast-track courts.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />Constitution of a high-powered task force chaired by Nandan Nilekani for exam reforms.</li>
                            </ul>
                        </div>
                        <div className="bg-sky-50/60 rounded-xl p-5 border border-sky-100">
                            <h3 className="text-xs font-semibold uppercase text-sky-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />NEET-UG 2026 पेपर लीक की पृष्ठभूमि में पारित।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />सार्वजनिक परीक्षा (अनुचित साधनों की रोकथाम) अधिनियम, 2024 में संशोधन कर कठोर दंड और फास्ट-ट्रैक न्यायालयों का प्रावधान।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />नंदन नीलकणी की अध्यक्षता में उच्च-स्तरीय टास्क फोर्स का गठन।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><ShieldAlert className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Key Features & Penalties / मुख्य विशेषताएं और दंड</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Harsher Punishments & Fines</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• <strong>General Offences:</strong> Min imprisonment increased from 3 to 5 years (Max 10 years). Fine increased 5x from ₹10 lakh to ₹50 lakh.</li>
                                <li>• <strong>Organised Fraud:</strong> Min imprisonment increased from 5 to 7 years. Min fine increased from ₹1 crore to ₹10 crore.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">Time-Bound Processes</h3>
                            <ul className="space-y-1.5 text-sm">
                                <li>• <strong>Investigation:</strong> Must be completed within 60 days.</li>
                                <li>• <strong>Trial:</strong> Special fast-track courts must complete trials within 3 months of chargesheet filing.</li>
                                <li>• <strong>Appeals:</strong> Must be filed within 30 days; heard by a 2-judge HC bench, disposed within 3 months.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> The Right to Information Act of Parliament received the assent of the President of India on <em>(UPPSC 2013)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> 15 June 2005.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                 <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
  <Link href="/current-affairs/by-topic/tribunals-reforms-bill-2026"><Button variant="outline" className="gap-2 cursor-pointer">Next: Tribunals Reforms Bill <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}