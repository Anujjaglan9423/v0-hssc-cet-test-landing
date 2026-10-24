"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, MountainSnow, Droplets,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ {
    id: string
    questionEn: string
    questionHi: string
    options: { key: string; en: string; hi: string }[]
    correctKey: string
    explanationEn: string
    explanationHi: string
}

const mcqs: MCQ[] = [
    {
        id: "flood-q1",
        questionEn:
            "With reference to Flash Floods and Glacial Lake Outburst Floods (GLOFs), consider the following statements: 1. A flash flood develops rapidly when a large volume of water suddenly reaches a river valley or low-lying area within a short period. 2. A GLOF occurs when water stored in or around a glacial lake is suddenly released, causing destructive downstream flooding. Which of the statements given above is/are correct?",
        questionHi:
            "प्लैश फ्लड और ग्लेशियल लेक आउटबर्स्ट फ्लड (GLOF) के संदर्भ में निम्नलिखित कथनों पर विचार कीजिए: 1. प्लैश फ्लड कम समय में तेजी से विकसित होने वाली बाढ़ है, जब बड़ी मात्रा में पानी अचानक किसी नदी घाटी या निचले क्षेत्र में पहुँचता है। 2. GLOF तब उत्पन्न होती है जब किसी ग्लेशियल झील में या उसके आसपास संचित जल अचानक मुक्त होकर निचले क्षेत्रों में विनाशकारी बाढ़ उत्पन्न करता है। उपर्युक्त में से कौन-सा/से कथन सही है/हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "c",
        explanationEn: "Both statements are correct as per the standard definitions of flash floods and GLOFs.",
        explanationHi: "प्लैश फ्लड और GLOF की मानक परिभाषाओं के अनुसार दोनों कथन सही हैं।",
    },
    {
        id: "flood-q2",
        questionEn:
            "The catastrophic flash flood of August 2026 in Nepal was primarily triggered by: 1. A glacial lake outburst flood (GLOF). 2. A glacier collapse and rock-ice avalanche on Mount Langtang Lirung. 3. A magnitude 5.2 earthquake. Which is/are correct?",
        questionHi:
            "अगस्त 2026 में नेपाल में आई विनाशकारी फ्लैश फ्लड मुख्य रूप से किसके कारण हुई? 1. ग्लेशियल लेक आउटबर्स्ट फ्लड (GLOF)। 2. माउंट लैंगटांग लिंग पर ग्लेशियर ढहना और रॉक-आइस हिमस्खलन। 3. 5.2 तीव्रता का भूकंप। कौन-से सही हैं?",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "2 and 3 only", hi: "केवल 2 और 3" },
        ],
        correctKey: "b",
        explanationEn:
            "USGS identified rapid slope failure involving a glacier (rock-ice avalanche) on Mount Langtang Lirung — not a conventional GLOF. It generated energy equivalent to a M5.2 earthquake, but it was NOT an earthquake.",
        explanationHi:
            "USGS ने माउंट लैंगटांग लिंग पर ग्लेशियर से जुड़ी तीव्र ढलान विफलता (रॉक-आइस हिमस्खलन) की पहचान की — पारंपरिक GLOF नहीं। इससे M5.2 भूकंप के बराबर ऊर्जा निकली, लेकिन यह भूकंप नहीं था।",
    },
]

function MCQBlock({ mcq }: { mcq: MCQ }) {
    const [selected, setSelected] = useState<string | null>(null)
    const isCorrect = selected === mcq.correctKey
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-4">
                <p className="font-semibold text-base">{mcq.questionEn}</p>
                <p className="text-sm text-muted-foreground mt-1">{mcq.questionHi}</p>
            </div>
            <div className="space-y-2 mb-4">
                {mcq.options.map((opt) => {
                    let extra = ""
                    if (selected !== null) {
                        if (opt.key === mcq.correctKey) extra = "bg-green-100 border-green-400 dark:bg-green-900/20 dark:border-green-700"
                        else if (opt.key === selected) extra = "bg-red-100 border-red-400 dark:bg-red-900/20 dark:border-red-700"
                    }
                    return (
                        <div key={opt.key} onClick={() => selected === null && setSelected(opt.key)}
                            className={`flex items-start gap-3 rounded-lg border p-3 text-sm cursor-pointer hover:bg-muted/50 ${extra}`}>
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

export default function NepalFlashFlood2026Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900 mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                    </Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
                        <Sparkles className="w-4 h-4" /> Topic Digest · Disaster Management
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Nepal Flash Flood 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">नेपाल फ्लैश फ्लड 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-sky-600" /><span>26 August 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Globe2 className="w-4 h-4 text-sky-600" /><span>Nepal–China border, Langtang</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />A catastrophic flash flood struck Nepal on 26 August 2026, causing severe flooding and widespread destruction.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />The disaster originated near the Nepal–China border in the Himalayan region and rapidly affected downstream areas.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />Hard-hit districts: Rasuwa, Nuwakot and Dhading witnessed severe casualties and destruction.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />26 अगस्त 2026 को नेपाल में एक विनाशकारी फ्लैश फ्लड से भीषण बाढ़ और व्यापक तबाही हुई।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />इस आपदा की शुरुआत हिमालयी क्षेत्र में नेपाल-चीन सीमा के निकट हुई और इसका प्रभाव तेजी से निचले प्रवाह वाले क्षेत्रों तक पहुंच गया।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />सबसे अधिक प्रभावित जिले: रसुवा, नुवाकोट और धादिंग में भारी जनहानि और व्यापक तबाही हुई।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><MountainSnow className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Trigger & Sequence / कारण और घटनाक्रम</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />A catastrophic glacier collapse and rock-ice avalanche occurred on Mount Langtang Lirung within Langtang National Park, near the China (Tibet) border.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />The failure involved ice and rock, creating a high-energy debris flow.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />The debris flow temporarily dammed the Lhende Khola River, contributing to the sudden downstream flood.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />The flood surged through the Bhote Koshi and Trishuli river systems, affecting populated areas downstream.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Initially thought to be seismic; USGS linked signals to slope failure and debris movement.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Initial slope failure generated energy equivalent to a magnitude 5.2 earthquake.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />चीन सीमा के पास नेपाल के लांगटांग नेशनल पार्क में स्थित माउंट लैंगटांग लिंग पर एक विनाशकारी ग्लेशियर ढहने और रॉक-आइस हिमस्खलन की घटना हुई।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />इस घटना में बर्फ और चट्टान दोनों शामिल थे, जिससे अत्यधिक ऊर्जा वाला मलबा प्रवाह (Debris Flow) उत्पन्न हुआ।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मलबे के प्रवाह के कारण ल्हेंडे खोला नदी अस्थायी रूप से अवरुद्ध हो गई, जिससे निचले क्षेत्रों में अचानक बाढ़ आई।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />इसके बाद बाढ़ भोटे कोशी और त्रिशूली नदी तंत्रों के माध्यम से आगे बढ़ी और आबादी वाले इलाकों को प्रभावित किया।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />शुरुआत में इसे भूकंपीय गतिविधि माना गया, लेकिन USGS ने इसे ढलान विफलता और मलबे की गति से जोड़ा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />प्रारंभिक ढलान विफलता से 5.2 तीव्रता के भूकंप के बराबर ऊर्जा उत्पन्न हुई।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Droplets className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Definitions / परिभाषाएं</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-sky-50/60 rounded-xl p-5 border border-sky-100">
                            <h3 className="text-sm font-semibold text-sky-800 mb-2">What is a Flash Flood? / प्लैश फ्लड क्या है?</h3>
                            <p className="text-sm">A flash flood develops rapidly when a large volume of water reaches a river valley or low-lying area within a short period.</p>
                            <p className="text-sm text-muted-foreground mt-1">फ्लैश फ्लड कम समय में तेजी से विकसित होने वाली बाढ़ है, जो तब आती है जब बड़ी मात्रा में पानी अचानक किसी नदी घाटी या निचले क्षेत्र में पहुँच जाता है।</p>
                        </div>
                        <div className="bg-sky-50/60 rounded-xl p-5 border border-sky-100">
                            <h3 className="text-sm font-semibold text-sky-800 mb-2">What is a GLOF? / GLOF क्या है?</h3>
                            <p className="text-sm">A Glacial Lake Outburst Flood (GLOF) occurs when water stored in or around a glacial lake is suddenly released, producing destructive downstream flooding.</p>
                            <p className="text-sm text-muted-foreground mt-1">GLOF तब होती है जब किसी ग्लेशियल झील के अंदर या आसपास जमा पानी अचानक बाहर निकल जाता है, जिससे निचले क्षेत्रों में विनाशकारी बाढ़ आती है।</p>
                        </div>
                    </div>
                    <div className="mt-3 bg-amber-50/60 rounded-xl p-4 border border-amber-100 text-sm">
                        <strong>Note / नोट:</strong> The Nepal event was identified by USGS as rapid slope failure involving a glacier and debris flow, rather than clearly a conventional GLOF. / USGS ने नेपाल की घटना को ग्लेशियर और मलबा प्रवाह से जुड़ी तीव्र ढाल विफलता के रूप में पहचाना, न कि स्पष्ट रूप से पारंपरिक GLOF के रूप में।
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Which of the following is/are the cause(s) of flash floods? (UPSC-style)</p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Cloudbursts, glacial lake outbursts, sudden release of water from dams/landslide-dammed lakes, and rapid snow/glacier melt.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-sky-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/nfhs-6"><Button variant="outline" className="gap-2 cursor-pointer">Next: NFHS-6 <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}