"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Scale,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "ca131-q1",
        questionEn:
            "Consider the following statements: Statement I: A Bill proposing a change in the representation of States in the Parliament requires a Special Majority in both Houses. Statement II: Such a Bill must be ratified by the legislatures of not less than two-thirds of the States before being presented to the President for assent. Which one of the following is correct?",
        questionHi:
            "कथनों पर विचार कीजिए: कथन I: संसद में राज्यों के प्रतिनिधित्व में परिवर्तन का प्रस्ताव करने वाले विधेयक के लिए दोनों सदनों में विशेष बहुमत आवश्यक है। कथन II: ऐसे विधेयक को राष्ट्रपति के समक्ष सहमति के लिए प्रस्तुत करने से पहले कम से कम दो-तिहाई राज्यों के विधानमंडलों द्वारा अनुसमर्थन आवश्यक है। कौन सा सही है?",
        options: [
            { key: "a", en: "Both I and II correct, and II explains I", hi: "I और II दोनों सही, II, I की व्याख्या है" },
            { key: "b", en: "Both I and II correct, II does not explain I", hi: "I और II दोनों सही, II व्याख्या नहीं" },
            { key: "c", en: "I correct but II incorrect", hi: "I सही, II गलत" },
            { key: "d", en: "I incorrect but II correct", hi: "I गलत, II सही" },
        ],
        correctKey: "c",
        explanationEn:
            "Statement I is correct — Article 368 Special Majority applies. Statement II is WRONG: such amendments require ratification by not less than one-half (50%) of the States, NOT two-thirds.",
        explanationHi:
            "कथन I सही — अनुच्छेद 368 का विशेष बहुमत लागू होता है। कथन II गलत है: ऐसे संशोधनों के लिए कम से कम आधे (50%) राज्यों का अनुसमर्थन आवश्यक है, दो-तिहाई नहीं।",
    },
    {
        id: "ca131-q2",
        questionEn:
            "Match List I (Article) with List II (Mandate): 1. Article 81 — (a) Joint sitting, 2. Article 82 — (b) Composition of Lok Sabha, 3. Article 108 — (c) Readjustment of seats after census, 4. Article 170 — (d) Composition of State Assemblies.",
        questionHi:
            "सूची I (अनुच्छेद) को सूची II (अधिदेश) से मिलाइए: 1. अनुच्छेद 81 — (a) संयुक्त बैठक, 2. अनुच्छेद 82 — (b) लोकसभा की संरचना, 3. अनुच्छेद 108 — (c) जनगणना के बाद सीटों का पुनर्निर्धारण, 4. अनुच्छेद 170 — (d) राज्य विधानसभाओं की संरचना।",
        options: [
            { key: "a", en: "1-b, 2-c, 3-a, 4-d", hi: "1-b, 2-c, 3-a, 4-d" },
            { key: "b", en: "1-c, 2-b, 3-d, 4-a", hi: "1-c, 2-b, 3-d, 4-a" },
            { key: "c", en: "1-b, 2-c, 3-d, 4-a", hi: "1-b, 2-c, 3-d, 4-a" },
            { key: "d", en: "1-d, 2-a, 3-c, 4-b", hi: "1-d, 2-a, 3-c, 4-b" },
        ],
        correctKey: "a",
        explanationEn:
            "Art 81: Lok Sabha composition; Art 82: delimitation after each census; Art 108: joint sitting; Art 170: State Legislative Assemblies. Hence (a).",
        explanationHi:
            "अनु. 81: लोकसभा संरचना; अनु. 82: परिसीमन; अनु. 108: संयुक्त बैठक; अनु. 170: राज्य विधानसभाएं। अतः (a)।",
    },
    {
        id: "ca131-q3",
        questionEn:
            "Consider the Constitution (131st Amendment) Bill, 2026: 1. It was defeated in the Lok Sabha on 17 April 2026 for lack of Special Majority. 2. It proposed to expand the Lok Sabha from 543 to 850 seats. 3. It sought to fast-track the 33% Women's Reservation using 2011 Census data for immediate delimitation. Which statements are correct?",
        questionHi:
            "संविधान (131वां संशोधन) विधेयक, 2026 पर विचार करें: 1. विशेष बहुमत के अभाव में 17 अप्रैल 2026 को लोकसभा में पराजित। 2. लोकसभा को 543 से 850 सीटों तक बढ़ाने का प्रस्ताव। 3. 2011 जनगणना डेटा से तत्काल परिसीमन कर 33% महिला आरक्षण शीघ्र लागू करने का प्रयास। कौन सही हैं?",
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
                        if (opt.key === mcq.correctKey) extra = "bg-green-100 border-green-400 dark:bg-green-900/20 dark:border-green-700"
                        else if (opt.key === selected) extra = "bg-red-100 border-red-400 dark:bg-red-900/20 dark:border-red-700"
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

export default function Constitution131Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Polity & Constitution</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Constitution (131st Amendment) Bill, 2026</h1>
                    <p className="text-xl text-muted-foreground mb-6">संविधान (131वां संशोधन) विधेयक, 2026</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-amber-600" /><span>Defeated 17 April 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Scale className="w-4 h-4 text-amber-600" /><span>Lok Sabha · Article 368</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-amber-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-amber-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />The Bill failed to pass the Lok Sabha on 17 April 2026 — unable to secure the constitutionally mandated Special Majority under Article 368.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Garnered 298 votes in favour and 230 against — well short of the ~352-vote threshold (two-thirds of members present and voting).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />First defeat of a government-backed constitutional amendment bill in the Lower House since the Lokpal Bill in 2011.</li>
                            </ul>
                        </div>
                        <div className="bg-rose-50/60 rounded-xl p-5 border border-rose-100">
                            <h3 className="text-xs font-semibold uppercase text-rose-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />अनुच्छेद 368 के तहत विशेष बहुमत हासिल करने में विफलता के कारण 17 अप्रैल 2026 को विधेयक लोकसभा में पारित नहीं हो सका।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />पक्ष में 298 और विरोध में 230 वोट मिले — लगभग 352 वोटों की सीमा से बहुत कम।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />2011 के लोकपाल विधेयक के बाद पहली बार सरकार समर्थित संवैधानिक संशोधन विधेयक निचले सदन में विफल हुआ।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Scale className="w-5 h-5 text-amber-600" /><h2 className="text-2xl font-bold">Key Features / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Core Objective: fast-track the 33% Women's Reservation (106th Amendment, 2023) by delinking it from the post-2026 Census and using 2011 Census data for immediate delimitation.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Proposed expansion of Lok Sabha from 543 to 850 seats (815 States + 35 UTs).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Shift in Parliamentary Balance: With Rajya Sabha at 250, the LS:RS ratio shifts from 2.2:1 to 3.4:1 — giving the Lower House dominance in Joint Sittings (Art 108).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"Demographic Penalty": Southern states (TN, Kerala) argued any delimitation using old data would dilute their political weight.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Critics called it a "penalty" for states that successfully implemented population control — their seat share would stagnate vs. high-growth northern states.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Stringent procedure (Art 368): Special Majority (majority of total membership + 2/3 of present and voting) + ratification by at least 50% of State Legislatures.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मुख्य उद्देश्य: 2011 जनगणना डेटा से तत्काल परिसीमन कर 2026 जनगणना से जोड़े बिना 33% महिला आरक्षण (106वां संशोधन, 2023) शीघ्र लागू करना।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />लोकसभा को 543 से 850 सीटों (815 राज्य + 35 UT) तक बढ़ाने का प्रस्ताव।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />संसदीय संतुलन: राज्यसभा 250 पर स्थिर रहने से LS:RS अनुपात 2.2:1 से 3.4:1 हो जाता है — संयुक्त बैठकों (अनु. 108) में निचले सदन का प्रभुत्व।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />"डेमोग्राफिक पेनाल्टी": दक्षिणी राज्यों (तमिलनाडु, केरल) ने तर्क दिया कि पुराने डेटा पर परिसीमन उनका राजनीतिक महत्व कम करेगा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />आलोचकों ने इसे उन राज्यों के लिए "दंड" कहा जिन्होंने जनसंख्या नियंत्रण सफलतापूर्वक लागू किया।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />कठोर प्रक्रिया (अनु. 368): विशेष बहुमत + कम से कम 50% राज्य विधानसभाओं का अनुसमर्थन।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Additional Info / अतिरिक्त जानकारी</h3>
                        <ul className="text-sm space-y-1.5">
                            <li>• 42nd Amendment (1976) froze LS seats on 1971 Census; 84th Amendment (2001) extended freeze until first census after 2026. / 42वां संशोधन (1976) ने 1971 जनगणना पर सीटें स्थिर कीं; 84वां संशोधन (2001) ने 2026 के बाद पहली जनगणना तक बढ़ाया।</li>
                            <li>• Nari Shakti Vandan Adhiniyam (106th Amendment Act, 2023): 33% reservation for women; Art 334A inserted; sunset clause of 15 years; SC/ST sub-quota; activation after fresh delimitation based on first post-enactment census. / 106वां संशोधन: 33% महिला आरक्षण; अनु. 334A; 15 वर्ष सनसेट; SC/ST उप-कोटा; पहली जनगणना के बाद परिसीमन पर सक्रिय।</li>
                            <li>• Representation Gap: Women ~14–15% in Parliament and ~9% in State Assemblies. / प्रतिनिधित्व अंतराल: संसद में ~14-15%, राज्य विधानसभाओं में ~9%।</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> As per Article 368, the Parliament may amend any provision of the Constitution by way of: 1. Addition 2. Variation 3. Repeal. <em>(UPSC CSE Prelims 2024)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> All three — addition, variation and repeal.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-amber-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/posh-act"><Button variant="outline" className="gap-2 cursor-pointer">Next: PoSH Act <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}