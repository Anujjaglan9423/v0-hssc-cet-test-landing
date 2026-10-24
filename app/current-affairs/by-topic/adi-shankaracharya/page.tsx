"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle,
    ArrowLeft, Globe2, Languages, Award, BookOpen, Sparkle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "adi-q1",
        questionEn:
            "Consider the following statements regarding the philosophy of Adi Shankaracharya: 1. He preached Vishishtadvaita, emphasizing devotion to a personal God. 2. He believed the individual soul (Atman) and universal reality (Brahman) are fundamentally the same. 3. According to him, the physical world is an illusion known as 'Maya'. How many are correct?",
        questionHi:
            "आदि शंकराचार्य के दर्शन के बारे में कथनों पर विचार करें: 1. उन्होंने विशिष्टाद्वैत का प्रचार किया जो व्यक्तिगत ईश्वर की भक्ति पर जोर देता है। 2. उनका मानना था कि आत्मा और ब्रह्म मूल रूप से एक हैं। 3. उनके अनुसार भौतिक दुनिया 'माया' नामक भ्रम है। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "b",
        explanationEn:
            "Statement 1 is WRONG — Shankaracharya preached Advaita Vedanta (Non-Dualism); it was Ramanujacharya who preached Vishishtadvaita. Statements 2 and 3 are correct.",
        explanationHi:
            "कथन 1 गलत — शंकराचार्य ने अद्वैत वेदांत का प्रचार किया; विशिष्टाद्वैत रामानुजाचार्य ने प्रचारित किया। कथन 2 और 3 सही हैं।",
    },
    {
        id: "adi-q2",
        questionEn:
            "Match the following Mathas with their locations: 1. Jyotir Math — A. Puri; 2. Govardhan Math — B. Badrinath; 3. Sarada Math — C. Sringeri; 4. Sringeri Math — D. Dwarka.",
        questionHi:
            "मठों को स्थानों से मिलाएं: 1. ज्योतिर्मठ — A. पुरी; 2. गोवर्धन मठ — B. बद्रीनाथ; 3. शारदा मठ — C. श्रृंगेरी; 4. श्रृंगेरी मठ — D. द्वारका।",
        options: [
            { key: "a", en: "1-B, 2-A, 3-D, 4-C", hi: "1-B, 2-A, 3-D, 4-C" },
            { key: "b", en: "1-B, 2-D, 3-A, 4-C", hi: "1-B, 2-D, 3-A, 4-C" },
            { key: "c", en: "1-C, 2-A, 3-D, 4-B", hi: "1-C, 2-A, 3-D, 4-B" },
            { key: "d", en: "1-A, 2-B, 3-C, 4-D", hi: "1-A, 2-B, 3-C, 4-D" },
        ],
        correctKey: "a",
        explanationEn:
            "Jyotir Math (Badrinath, North), Govardhan Math (Puri, East), Sarada Math (Dwarka, West), Sringeri Math (Karnataka, South). Hence (a).",
        explanationHi:
            "ज्योतिर्मठ (बद्रीनाथ, उत्तर), गोवर्धन मठ (पुरी, पूर्व), शारदा मठ (द्वारका, पश्चिम), श्रृंगेरी मठ (कर्नाटक, दक्षिण)। अतः (a)।",
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

export default function AdiShankaracharyaPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Art & Culture</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Adi Shankaracharya & Advaita Vedanta</h1>
                    <p className="text-xl text-muted-foreground mb-6">आदि शंकराचार्य और अद्वैत वेदांत</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-orange-600" /><span>c. 788–820 CE</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Sparkle className="w-4 h-4 text-orange-600" /><span>Statue of Oneness, Omkareshwar</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Target className="w-4 h-4 text-orange-600" /><span>{mcqs.length} MCQs</span></div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Languages className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Overview / अवलोकन</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50/60 rounded-xl p-5 border border-orange-100">
                            <h3 className="text-xs font-semibold uppercase text-orange-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Recently, the PM paid tribute to 8th-century philosopher-saint Adi Shankaracharya on his Jayanti.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Adi Shankaracharya (c. 788–820 CE) was a philosopher, theologian and saint credited with reviving Hinduism at a time when it was declining under superstition and ritualism.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Born in Kerala (8th century CE); passed away at 32 in Kedarnath.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Core philosophy (Advaita Vedanta): "Brahma Satyam Jagan Mithya, Jeevo Brahmaiva Na Parah" — Brahman alone is real, the world is Maya, Atman is non-different from Brahman.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />Moksha is achieved through true knowledge (Jnana).</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />हाल ही में PM ने 8वीं सदी के दार्शनिक-संत आदि शंकराचार्य को जयंती पर श्रद्धांजलि अर्पित की।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />आदि शंकराचार्य (लगभग 788–820 ई.) ने हिंदू धर्म को पुनर्जीवित करने का श्रेय पाया जब यह अंधविश्वास और कर्मकांड में पतनशील था।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />केरल (8वीं शताब्दी CE) में जन्म; 32 वर्ष की आयु में केदारनाथ में निधन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मूल दर्शन (अद्वैत वेदांत): "ब्रह्म सत्यं जगन्मिथ्या, जीवो ब्रह्मैव नापर:" — केवल ब्रह्म सत्य, संसार माया, आत्मा ब्रह्म से भिन्न नहीं।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />मोक्ष सच्चे ज्ञान (Jnana) से प्राप्त होता है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Sparkle className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Literary works: Bhashyas on the Prasthanatrayi (Upanishads, Brahma Sutras, Bhagavad Gita); Vivekachudamani, Atma Bodha; devotional hymns — Soundarya Lahari, Sivananda Lahari, Nirvana Shatakam.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Institutional Framework: Four Mathas — North: Jyotir Math (Badrinath, Atharva Veda); South: Sringeri Math (Karnataka, Yajur Veda); East: Govardhan Math (Puri, Rig Veda); West: Sarada Math (Dwarka, Sama Veda).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Shannata System: worship of six primary deities (Shiva, Vishnu, Shakti, Ganesha, Surya, Murugan).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Monastic Order: Dasanami Sampradaya.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Statue of Oneness: 108-ft statue of young Adi Shankaracharya inaugurated in Omkareshwar, MP on the Narmada — where he met his Guru Govindapada.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />साहित्यिक कार्य: प्रस्थानत्रयी (उपनिषद, ब्रह्म सूत्र, भगवद गीता) पर भाष्य; विवेकचूडामणि, आत्मबोध; भक्ति भजन — सौंदर्य लहरी, शिवानंद लहरी, निर्वाण षटकम।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />संस्थागत ढांचा: चार मठ — उत्तर: ज्योतिर्मठ (बद्रीनाथ, अथर्ववेद); दक्षिण: श्रृंगेरी मठ (कर्नाटक, यजुर्वेद); पूर्व: गोवर्धन मठ (पुरी, ऋग्वेद); पश्चिम: शारदा मठ (द्वारका, सामवेद)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />षण्मत प्रणाली: छह प्राथमिक देवताओं (शिव, विष्णु, शक्ति, गणेश, सूर्य, मुरुगन) की पूजा।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />मठवासी व्यवस्था: दशनामी संप्रदाय।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />स्टैच्यू ऑफ वननेस: नर्मदा तट पर ओंकारेश्वर, मध्य प्रदेश में 108 फुट की युवा आदि शंकराचार्य प्रतिमा का उद्घाटन — जहां उन्होंने गुरु गोविंदपाद से मुलाकात की।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="bg-slate-100 rounded-xl p-5 border border-slate-200">
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न</h3>
                        <p className="text-sm"><strong>Q.</strong> Consider the following about Vedanta philosophy: 1. Shankara was the founder of Advaita Vedanta. 2. The philosophy of Dvaita was elaborated by Madhva. <em>(CDS-II)</em></p>
                        <p className="text-sm text-muted-foreground mt-1"><strong>Answer:</strong> Both statements are correct.</p>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-orange-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/super-el-nino"><Button variant="outline" className="gap-2 cursor-pointer">Next: Super El Niño <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}