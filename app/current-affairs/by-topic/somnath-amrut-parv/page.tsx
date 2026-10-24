"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Sparkles, Target, Calendar, CheckCircle2, HelpCircle, ArrowLeft, Globe2, Languages, BookOpen, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MCQ { id: string; questionEn: string; questionHi: string; options: { key: string; en: string; hi: string }[]; correctKey: string; explanationEn: string; explanationHi: string }

const mcqs: MCQ[] = [
    {
        id: "somnath-q1",
        questionEn: "With reference to Somnath Temple history: 1. Post-independence reconstruction used Dravidian style. 2. Sardar Patel presided over the 1951 Pran Pratishtha. 3. Kumarapala destroyed the temple in the 12th century. How many are correct?",
        questionHi: "सोमनाथ मंदिर इतिहास: 1. स्वतंत्रता के बाद द्रविड़ शैली में पुनर्निर्माण। 2. 1951 प्राण प्रतिष्ठा की अध्यक्षता सरदार पटेल ने की। 3. कुमारपाल ने 12वीं सदी में मंदिर नष्ट किया। कितने सही हैं?",
        options: [
            { key: "a", en: "Only one", hi: "केवल एक" },
            { key: "b", en: "Only two", hi: "केवल दो" },
            { key: "c", en: "All three", hi: "सभी तीन" },
            { key: "d", en: "None", hi: "कोई नहीं" },
        ],
        correctKey: "d",
        explanationEn:
            "All three statements are wrong: (1) It was built in Māru-Gurjara (Chalukya/Solanki) style, not Dravidian. (2) Dr. Rajendra Prasad conducted the 1951 Pran Pratishtha, not Sardar Patel. (3) Kumarapala REBUILT the temple in the 12th century.",
        explanationHi:
            "तीनों कथन गलत हैं: (1) मारू-गुर्जर (चालुक्य/सोलंकी) शैली में, द्रविड़ में नहीं। (2) 1951 प्राण प्रतिष्ठा डॉ. राजेंद्र प्रसाद द्वारा, सरदार पटेल नहीं। (3) कुमारपाल ने 12वीं सदी में मंदिर का पुनर्निर्माण किया।",
    },
    {
        id: "somnath-q2",
        questionEn: "The Māru-Gurjara architectural style flourished under the patronage of which medieval dynasty?",
        questionHi: "मारू-गुर्जर वास्तुकला शैली किस मध्यकालीन राजवंश के संरक्षण में फली-फूली?",
        options: [
            { key: "a", en: "Paramaras of Malwa", hi: "मालवा के परमार" },
            { key: "b", en: "Chandelas of Jejakabhukti", hi: "जेजाकभुक्ति के चंदेल" },
            { key: "c", en: "Solankis (Chalukyas) of Gujarat", hi: "गुजरात के सोलंकी (चालुक्य)" },
            { key: "d", en: "Rashtrakutas of Manyakheta", hi: "मान्यखेत के राष्ट्रकूट" },
        ],
        correctKey: "c",
        explanationEn: "Examples: Somnath Temple, Sun Temple at Modhera, Dilwara Jain Temples at Mount Abu.",
        explanationHi: "उदाहरण: सोमनाथ मंदिर, मोढेरा सूर्य मंदिर, माउंट आबू के दिलवाड़ा जैन मंदिर।",
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

export default function SomnathPage() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-900 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Link>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium"><Sparkles className="w-4 h-4" /> Topic Digest · Art & Culture</div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">Somnath Amrut Parv</h1>
                    <p className="text-xl text-muted-foreground mb-6">सोमनाथ अमृत पर्व — 75वीं वर्षगांठ</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Calendar className="w-4 h-4 text-amber-600" /><span>11 May 2026</span></div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border"><Landmark className="w-4 h-4 text-amber-600" /><span>Prabhas Patan, Gujarat</span></div>
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
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />On 11 May 2026, the PM participated in Somnath Amrut Parv in Gujarat, marking exactly 75 years since post-independence reconstruction of the Somnath Temple.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Commemorates the Pran Pratishtha (consecration) conducted on 11 May 1951 by India's first President Dr. Rajendra Prasad.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />Somnath Swabhiman Parv: year-long celebration marking both the 75th anniversary of reopening (1951) and the 1,000th anniversary of Mahmud Ghaznavi's destruction (1026).</li>
                            </ul>
                        </div>
                        <div className="bg-rose-50/60 rounded-xl p-5 border border-rose-100">
                            <h3 className="text-xs font-semibold uppercase text-rose-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />11 मई 2026 को PM ने गुजरात में सोमनाथ अमृत पर्व में भाग लिया — स्वतंत्रता के बाद पुनर्निर्माण के 75 वर्ष।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />11 मई 1951 को डॉ. राजेंद्र प्रसाद द्वारा प्राण प्रतिष्ठा।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />सोमनाथ स्वाभिमान पर्व: 1951 की 75वीं + 1026 (महमूद गजनवी) की 1,000वीं वर्षगांठ।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Landmark className="w-5 h-5 text-amber-600" /><h2 className="text-2xl font-bold">Key Facts / मुख्य तथ्य</h2></div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Present structure = Kailash Mahameru Prasad, built in traditional Māru-Gurjara (Chalukya/Solanki) style.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Location: Prabhas Patan on the Saurashtra coast of Gujarat — first of the 12 sacred Jyotirlinga shrines of Shiva (Shiva Purana).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Pre-modern restorations: Kumarapala (12th century), King of Junagadh (13th century), Maratha Queen Ahilyabai Holkar (18th century).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Historical secularism debate: 1951 reconstruction triggered institutional debate — Nehru believed state funding for religious reconstruction did not align with secular vision.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />वर्तमान संरचना = कैलाश महामेरु प्रसाद, मारू-गुर्जर (चालुक्य/सोलंकी) शैली।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />स्थान: सौराष्ट्र तट, प्रभास पाटन — शिव के 12 ज्योतिर्लिंगों में से पहला।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पूर्व-आधुनिक पुनर्निर्माण: कुमारपाल (12वीं), जूनागढ़ के राजा (13वीं), अहिल्याबाई होल्कर (18वीं)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />धर्मनिरपेक्षता विवाद: नेहरू का मानना था कि धार्मिक पुनर्निर्माण में राज्य की भागीदारी धर्मनिरपेक्ष सोच के अनुरूप नहीं।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-amber-600" /><h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2><span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Click an option to reveal the answer</span></div>
                    <div className="space-y-5">{mcqs.map((m) => <MCQBlock key={m.id} mcq={m} />)}</div>
                </section>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs"><Button variant="outline" className="gap-2 cursor-pointer"><ArrowLeft className="w-4 h-4" /> Back to Current Affairs</Button></Link>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/coal-gasification"><Button variant="outline" className="gap-2 cursor-pointer">Next: Coal Gasification <ChevronRight className="w-4 h-4" /></Button></Link>
                        <Link href="/mock-test"><Button className="gap-2 cursor-pointer">Practice Quiz <Target className="w-4 h-4" /></Button></Link>
                    </div>
                </div>
            </main>
            <FooterLinkFooter />
        </div>
    )
}