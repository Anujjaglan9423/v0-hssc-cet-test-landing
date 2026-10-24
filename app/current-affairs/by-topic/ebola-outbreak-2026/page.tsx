"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Biohazard } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "ebola-q1",
        questionEn: "With reference to the current Ebola outbreak and EVD, consider: 1. Most cases concentrated in the Ituri Province of DRC and Uganda. 2. Ebola is an airborne disease. 3. Ebola is a zoonotic disease. Which are correct?",
        questionHi: "मौजूदा इबोला प्रकोप और EVD के संदर्भ में: 1. अधिकांश मामले DRC (इतूरी) और युगांडा में। 2. इबोला वायुजनित रोग है। 3. इबोला जूनोटिक रोग है। कौन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "c", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "b",
        explanationEn: "Statement 2 is wrong — Ebola is NOT airborne. It spreads via direct contact with blood, organs, or bodily fluids.",
        explanationHi: "कथन 2 गलत — इबोला हवा से नहीं फैलता। यह रक्त, अंगों या शारीरिक तरल पदार्थों के सीधे संपर्क से फैलता है।",
    },
    {
        id: "ebola-q2",
        questionEn: "Which rare virus strain is driving the 2026 Ebola outbreak, and what makes it unique?",
        questionHi: "2026 का इबोला प्रकोप किस दुर्लभ वायरस स्ट्रेन से है, और यह अलग क्यों है?",
        options: [
            { key: "a", en: "Zaire strain — approved vaccines exist", hi: "ज़ायरे स्ट्रेन — स्वीकृत टीके उपलब्ध" },
            { key: "b", en: "Bundibugyo strain — no approved vaccines or specific treatments", hi: "बुंडीबुग्यो स्ट्रेन — कोई स्वीकृत टीका/उपचार नहीं" },
            { key: "c", en: "Sudan strain — airborne transmission", hi: "सूडान स्ट्रेन — वायुजनित" },
            { key: "d", en: "Reston strain — only affects primates", hi: "रेस्टन स्ट्रेन — केवल प्राइमेट" },
        ],
        correctKey: "b",
        explanationEn: "The 2026 outbreak is driven by the rare Bundibugyo virus strain — no approved vaccines or specific treatments exist for it.",
        explanationHi: "2026 का प्रकोप दुर्लभ बुंडीबुग्यो स्ट्रेन से है — इसके लिए कोई स्वीकृत टीका या विशिष्ट उपचार नहीं है।",
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

export default function EbolaPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Health & Science</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Ebola Outbreak — PHEIC Declared</h1>
                    <p className="text-xl text-muted-foreground mb-6">इबोला प्रकोप — सार्वजनिक स्वास्थ्य आपातकाल घोषित</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-red-600" /><span>2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Biohazard className="w-4 h-4 text-red-600" /><span>Bundibugyo strain</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />WHO declared the current Ebola outbreak in Central Africa a Public Health Emergency of International Concern (PHEIC).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />Africa CDC declared a Public Health Emergency of Continental Security.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />Most cases concentrated in DRC (Ituri Province) and Uganda.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />The 2026 outbreak is driven by the rare Bundibugyo virus strain.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />WHO ने मध्य अफ्रीका में इबोला प्रकोप को PHEIC घोषित किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Africa CDC ने महाद्वीपीय सुरक्षा के लिए सार्वजनिक स्वास्थ्य आपातकाल घोषित किया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अधिकांश मामले DRC (इतूरी प्रांत) और युगांडा में।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />2026 का प्रकोप दुर्लभ बुंडीबुग्यो स्ट्रेन से है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Biohazard className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Ebola Virus Disease (EVD) is a serious viral illness caused by orthoebolaviruses, with an average case fatality rate of nearly 50%.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />First identified in 1976 in Nzara (South Sudan) and Yambuku (DRC); named after the Ebola River near Yambuku.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Transmission: NOT airborne. Human infection occurs via direct contact with blood, organs or bodily fluids of infected wild animals (especially those found sick or dead in rainforests).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Zoonotic disease: jumps from animals to humans; fruit bats are the natural reservoir.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Neurological impact: may attack the central nervous system.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Unlike older Ebola strains, there are no approved vaccines and no specific treatments for the Bundibugyo strain.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />EVD orthoebolaviruses के कारण होता है, औसत मृत्यु दर ~50%।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पहली बार 1976 में नजारा (द. सूडान) और याम्बुकु (DRC) में पहचान; इबोला नदी के नाम पर।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />प्रसार: हवा से नहीं। संक्रमित जंगली जानवरों के रक्त/तरल पदार्थों के सीधे संपर्क से।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />जूनोटिक: जानवरों से मनुष्यों में; फ्रूट बैट्स प्राकृतिक रिज़र्वायर।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />न्यूरोलॉजिकल प्रभाव: केंद्रीय तंत्रिका तंत्र पर हमला।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />बुंडीबुग्यो स्ट्रेन के लिए कोई स्वीकृत टीका/उपचार नहीं।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> In tropical regions, Zika virus disease is transmitted by the same mosquito that transmits dengue. 2. Sexual transmission of Zika virus disease is possible. <em>(UPSC Prelims)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Both statements are correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-red-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/semiconductor-roadmap"><Button variant="outline" className="gap-2 cursor-pointer">Next: Semiconductor Roadmap <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}