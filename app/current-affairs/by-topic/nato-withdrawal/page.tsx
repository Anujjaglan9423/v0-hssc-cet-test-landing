"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, ShieldAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "nato-q1",
        questionEn: "The headquarters of the North Atlantic Treaty Organization (NATO) is located in:",
        questionHi: "उत्तरी अटलांटिक संधि संगठन (NATO) का मुख्यालय कहाँ स्थित है?",
        options: [
            { key: "a", en: "Geneva, Switzerland", hi: "जिनेवा, स्विट्जरलैंड" },
            { key: "b", en: "New York City, USA", hi: "न्यूयॉर्क शहर, यूएसए" },
            { key: "c", en: "Brussels, Belgium", hi: "ब्रुसेल्स, बेल्जियम" },
            { key: "d", en: "London, United Kingdom", hi: "लंदन, यूनाइटेड किंगडम" },
        ],
        correctKey: "c",
        explanationEn: "The political and administrative headquarters of NATO are permanently located in Brussels, Belgium.",
        explanationHi: "NATO का राजनीतिक और प्रशासनिक मुख्यालय स्थायी रूप से ब्रुसेल्स, बेल्जियम में स्थित है।",
    },
    {
        id: "nato-q2",
        questionEn:
            "Consider the following statements about NATO: 1. Article 5 (collective defence) has been invoked only once in history — by the US after the 9/11 attacks in 2001. 2. Under Article 13, a member can leave after a formal notice, effective exactly one year later. 3. Finland (2023) and Sweden (2024) are the newest members.",
        questionHi:
            "NATO के बारे में कथनों पर विचार करें: 1. अनुच्छेद 5 (सामूहिक रक्षा) इतिहास में केवल एक बार लागू हुआ है — 2001 में 9/11 हमलों के बाद अमेरिका द्वारा। 2. अनुच्छेद 13 के तहत, सदस्य औपचारिक नोटिस के बाद बाहर निकल सकता है, जो ठीक एक वर्ष बाद प्रभावी होता है। 3. फिनलैंड (2023) और स्वीडन (2024) नवीनतम सदस्य हैं।",
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

export default function NATOWithdrawalPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · International Relations</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">US Withdrawal from NATO?</h1>
                    <p className="text-xl text-muted-foreground mb-6">नाटो से अमेरिका की वापसी?</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-blue-600" /><span>2026 (under consideration)</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Globe2 className="w-4 h-4 text-blue-600" /><span>32 member states</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />U.S. President Donald Trump recently indicated that withdrawing the US from NATO is under consideration, calling the alliance a "paper tiger".</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />The stated goal is to force European allies to meet defence spending obligations and reassess the utility of the alliance for US strategic interests.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />The US currently accounts for roughly 68–70% of total defence spending by all NATO member states combined.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />Most NATO allies refused US requests for military and airspace support in connection with the war against Iran.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />US officials feel this refusal violates Article 5 of the North Atlantic Treaty.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अमेरिकी राष्ट्रपति डोनाल्ड ट्रम्प ने हाल ही में संकेत दिया है कि NATO से बाहर निकलने पर विचार किया जा रहा है, और इस गठबंधन को "कागजी शेर" बताया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />घोषित उद्देश्य यूरोपीय सहयोगियों को उनके रक्षा व्यय दायित्वों को पूरा करने के लिए बाध्य करना तथा अमेरिकी रणनीतिक हितों के लिए गठबंधन की उपयोगिता का पुनर्मूल्यांकन करना है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अमेरिका वर्तमान में सभी NATO सदस्य देशों के कुल रक्षा व्यय का लगभग 68–70% वहन करता है।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अधिकांश NATO सहयोगियों ने ईरान के खिलाफ युद्ध के संबंध में सैन्य और हवाई समर्थन के अमेरिकी अनुरोधों को अस्वीकार कर दिया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />अमेरिकी अधिकारियों का मानना है कि यह इनकार उत्तरी अटलांटिक संधि के अनुच्छेद 5 का उल्लंघन है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><ShieldAlert className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Article 13 Mechanism: any member can leave after sending a formal notice of denunciation; withdrawal becomes official exactly one year after the notice is deposited.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />NATO Formation: 4 April 1949 via the Washington Treaty to counter Soviet expansion.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Headquarters: Brussels, Belgium.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Article 5 (Collective Defence): armed attack against one member is an attack against all. Invoked only once — by the US after 9/11 (2001).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Recent Expansion: 32 members; Finland (2023) and Sweden (2024) are the newest.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />अनुच्छेद 13 प्रावधान: कोई भी सदस्य औपचारिक नोटिस देकर गठबंधन छोड़ सकता है; नोटिस देने के ठीक एक साल बाद वापसी आधिकारिक हो जाती है।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />नाटो का गठन: सोवियत संघ के विस्तार का मुकाबला करने के लिए वाशिंगटन संधि के माध्यम से 4 अप्रैल 1949 को।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मुख्यालय: ब्रुसेल्स, बेल्जियम।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />अनुच्छेद 5 (सामूहिक रक्षा): एक सदस्य के खिलाफ सशस्त्र हमला सभी के खिलाफ हमला माना जाता है। केवल एक बार लागू — 9/11 (2001) के बाद अमेरिका द्वारा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />हालिया विस्तार: 32 सदस्य; फिनलैंड (2023) और स्वीडन (2024) नवीनतम।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> With reference to BIMSTEC: 1. PM Narendra Modi addressed the 5th BIMSTEC Summit on 30 March 2022. 2. 5th Summit of BIMSTEC was chaired by India. <em>(UPPSC 2022)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Both statements are correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-blue-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/ircc-india"><Button variant="outline" className="gap-2 cursor-pointer">Next: IRCC & India <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}