"use client"

import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"
import { useState } from "react"
import {
    BookOpen,
    ChevronRight,
    Sparkles,
    Target,
    Calendar,
    CheckCircle2,
    HelpCircle,
    ArrowLeft,
    Globe2,
    Languages,
    Award,
    Newspaper,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/* ----------------------------- MCQ TYPES ----------------------------- */
interface MCQ {
    id: string
    questionEn: string
    questionHi: string
    options: { key: string; en: string; hi: string }[]
    correctKey: string
    explanationEn: string
    explanationHi: string
}

/* ----------------------------- MCQ DATA (from chapter 1.pdf) ----------------------------- */
const mcqs: MCQ[] = [
    {
        id: "brics-q1",
        questionEn:
            "Match the following BRICS meetings held during India's 2026 Chairship with their venues: A. Agriculture WG & Ministerial, B. 1st MSME Forum & 3rd SME WG, C. 2nd Culture WG, D. Heads of Space Agencies. Venues: 1. Bengaluru, 2. Agra, 3. Varanasi, 4. Indore.",
        questionHi:
            "भारत की 2026 BRICS अध्यक्षता के दौरान आयोजित बैठकों का उनके आयोजन स्थलों से मिलान कीजिए: A. कृषि WG एवं मंत्रिस्तरीय, B. पहला MSME फोरम एवं तीसरी SME WG, C. दूसरी संस्कृति WG, D. अंतरिक्ष एजेंसियों के प्रमुख। स्थल: 1. बेंगलुरु, 2. आगरा, 3. वाराणसी, 4. इंदौर।",
        options: [
            { key: "a", en: "A-4, B-2, C-3, D-1", hi: "A-4, B-2, C-3, D-1" },
            { key: "b", en: "A-2, B-4, C-1, D-3", hi: "A-2, B-4, C-1, D-3" },
            { key: "c", en: "A-3, B-1, C-4, D-2", hi: "A-3, B-1, C-4, D-2" },
            { key: "d", en: "A-1, B-3, C-2, D-4", hi: "A-1, B-3, C-2, D-4" },
        ],
        correctKey: "a",
        explanationEn:
            "Agriculture WG & Ministerial → Indore (A-4); 1st MSME Forum & 3rd SME WG → Agra (B-2); 2nd Culture WG → Varanasi (C-3); Heads of Space Agencies → Bengaluru (D-1). Hence (a).",
        explanationHi:
            "कृषि WG एवं मंत्रिस्तरीय → इंदौर (A-4); पहला MSME फोरम एवं तीसरी SME WG → आगरा (B-2); दूसरी संस्कृति WG → वाराणसी (C-3); अंतरिक्ष एजेंसियों के प्रमुख → बेंगलुरु (D-1)। अतः (a) सही है।",
    },
    {
        id: "brics-q2",
        questionEn:
            "With reference to the BRICS Summits, consider: 1. The 18th BRICS Summit was held in New Delhi on 12–13 Sept 2026 under India's Chairship. 2. China will host the 19th BRICS Summit in 2027. 3. The first BRIC Summit was held in Yekaterinburg, Russia, in 2009. Which statements are correct?",
        questionHi:
            "BRICS शिखर सम्मेलनों के संदर्भ में कथनों पर विचार कीजिए: 1. 18वाँ BRICS शिखर सम्मेलन 12-13 सितंबर 2026 को नई दिल्ली में भारत की अध्यक्षता में हुआ। 2. 19वें BRICS शिखर सम्मेलन की मेजबानी 2027 में चीन करेगा। 3. पहला BRIC शिखर सम्मेलन 2009 में येकातेरिनबर्ग, रूस में आयोजित हुआ। कौन-से कथन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "d",
        explanationEn:
            "All three statements are correct. The 18th Summit was in New Delhi (2026), China hosts the 19th (2027), and the first BRIC Summit was in Yekaterinburg, Russia (2009).",
        explanationHi:
            "तीनों कथन सही हैं। 18वाँ शिखर सम्मेलन नई दिल्ली (2026) में, चीन 19वें (2027) की मेजबानी करेगा, और पहला BRIC शिखर सम्मेलन येकातेरिनबर्ग, रूस (2009) में हुआ था।",
    },
    {
        id: "brics-q3",
        questionEn:
            "Consider the countries: 1. Saudi Arabia 2. Indonesia 3. Malaysia 4. Belarus. Which of the above are currently FULL members of BRICS?",
        questionHi:
            "देशों पर विचार कीजिए: 1. सऊदी अरब 2. इंडोनेशिया 3. मलेशिया 4. बेलारूस। इनमें से कौन-से वर्तमान में BRICS के पूर्ण सदस्य हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1, 3 and 4 only", hi: "केवल 1, 3 और 4" },
            { key: "d", en: "1, 2, 3 and 4", hi: "1, 2, 3 और 4" },
        ],
        correctKey: "a",
        explanationEn:
            "Saudi Arabia and Indonesia are among the 11 full members. Malaysia and Belarus are BRICS Partner Countries, not full members. Hence (a).",
        explanationHi:
            "सऊदी अरब और इंडोनेशिया 11 पूर्ण सदस्यों में शामिल हैं। मलेशिया और बेलारूस BRICS साझेदार देश हैं, पूर्ण सदस्य नहीं। अतः (a) सही है।",
    },
]

/* ----------------------------- MCQ BLOCK ----------------------------- */
function MCQBlock({ mcq }: { mcq: MCQ }) {
    const [selected, setSelected] = useState<string | null>(null)
    const isCorrect = selected === mcq.correctKey

    const handleSelect = (key: string) => {
        if (selected !== null) return
        setSelected(key)
    }

    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-4">
                <p className="font-semibold text-base text-foreground">{mcq.questionEn}</p>
                <p className="text-sm text-muted-foreground mt-1">{mcq.questionHi}</p>
            </div>

            <div className="space-y-2 mb-4">
                {mcq.options.map((opt) => {
                    let extraClass = ""
                    if (selected !== null) {
                        if (opt.key === mcq.correctKey) extraClass = "bg-green-100 border-green-400 dark:bg-green-900/20 dark:border-green-700"
                        else if (opt.key === selected && opt.key !== mcq.correctKey) extraClass = "bg-red-100 border-red-400 dark:bg-red-900/20 dark:border-red-700"
                    }
                    return (
                        <div
                            key={opt.key}
                            onClick={() => handleSelect(opt.key)}
                            className={`flex items-start gap-3 rounded-lg border border-border bg-background p-3 text-sm cursor-pointer transition hover:bg-muted/50 ${extraClass}`}
                        >
                            <span className="font-bold uppercase w-5 shrink-0 text-muted-foreground">{opt.key}.</span>
                            <div>
                                <div className="text-foreground">{opt.en}</div>
                                <div className="text-muted-foreground text-xs mt-0.5">{opt.hi}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {selected !== null && (
                <div className={`mt-2 p-3 rounded-lg border-l-4 ${isCorrect ? "bg-green-50 border-green-500 dark:bg-green-900/10" : "bg-red-50 border-red-400 dark:bg-red-900/10"}`}>
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <HelpCircle className="w-4 h-4 text-red-500" />}
                        <span className="text-sm font-semibold">
                            {isCorrect ? "Correct! / सही उत्तर!" : `Correct answer: ${mcq.correctKey.toUpperCase()} / सही उत्तर: ${mcq.correctKey.toUpperCase()}`}
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{mcq.explanationEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">{mcq.explanationHi}</p>
                </div>
            )}
        </div>
    )
}

/* ----------------------------- PAGE ----------------------------- */
export default function BricsSummit2026Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* HERO */}
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link href="/current-affairs" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 mb-6">
                        <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                    </Link>

                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        Topic Digest · International Relations
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                        18th BRICS Summit 2026
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">18वाँ BRICS शिखर सम्मेलन 2026</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-indigo-600" />
                            <span>12–13 September 2026</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Globe2 className="w-4 h-4 text-indigo-600" />
                            <span>New Delhi, India</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-indigo-600" />
                            <span>{mcqs.length} MCQs</span>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {/* OVERVIEW */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Languages className="w-5 h-5 text-indigo-600" />
                        <h2 className="text-2xl font-bold">Overview / अवलोकन</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100">
                            <h3 className="text-xs font-semibold uppercase text-indigo-700 mb-3">English</h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />The 18th BRICS Summit was held in New Delhi on 12–13 September 2026, with India holding the BRICS Chairship.</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />Theme: “Building for Resilience, Innovation, Cooperation and Sustainability.”</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />India has hosted or chaired BRICS four times: 4th Summit (2012), 8th Summit (2016), 13th Summit (2021) and 18th Summit (2026).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />The 17th Summit was held in Brazil (2025) and the 19th Summit will be hosted by China (2027).</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />The BRICS New Delhi Declaration was adopted unanimously, focusing on reformed multilateralism, UN & UNSC reforms, equitable global governance and conflict prevention through dialogue.</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />18वाँ BRICS शिखर सम्मेलन 12–13 सितंबर 2026 को नई दिल्ली में आयोजित किया गया, जिसमें भारत ने BRICS की अध्यक्षता संभाली।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />थीम: “लचीलापन, नवाचार, सहयोग और सस्टेनेबिलिटी का निर्माण”।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />भारत ने अब तक चार बार BRICS शिखर सम्मेलन की मेजबानी या अध्यक्षता की है: 2012 में 4वाँ, 2016 में 8वाँ, 2021 में 13वाँ और 2026 में 18वाँ शिखर सम्मेलन।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />17वाँ शिखर सम्मेलन ब्राजील (2025) में तथा 19वाँ शिखर सम्मेलन चीन (2027) में आयोजित होगा।</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />BRICS नई दिल्ली घोषणा सर्वसम्मति से अपनाई गई, जिसमें बहुपक्षवाद में सुधार, UN और UNSC सुधार, समान वैश्विक शासन तथा संवाद के जरिए संघर्ष को रोकने पर जोर दिया गया।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* KEY FACTS */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-indigo-600" />
                        <h2 className="text-2xl font-bold">Key Features & Exam Facts / मुख्य तथ्य</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">English</h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />The term BRIC was coined in 2001 by Goldman Sachs; the first BRIC ministerial meeting was held in 2006 in New York on the sidelines of the UNGA.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />The first BRIC Summit was held in Russia in 2009.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />South Africa joined in 2011, adding the letter “S” to create “BRICS”.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />BRICS currently has 11 full members: Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, Saudi Arabia, UAE and Indonesia.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Partner countries: Belarus, Bolivia, Cuba, Kazakhstan, Malaysia, Nigeria, Thailand, Uganda, Uzbekistan and Vietnam.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />BRICS has no constitutive treaty, no own budget and no permanent secretariat — it is an informal coordination mechanism.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />New Development Bank (NDB – BRICS Bank) was founded in July 2014 at the 6th BRICS Summit in Fortaleza, Brazil, and began operations in July 2015.</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Major 2026 meetings: Agriculture WG & Ministerial (Indore), Disaster Risk Reduction WG (Puri), 1st MSME Forum & 3rd SME WG (Agra), 2nd Culture WG (Varanasi), Statistical Offices Heads (Lucknow), Space Agencies Heads (Bengaluru – ISRO), 16th NSA Meeting (New Delhi), Women's Ministerial (Kochi).</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />Scale & Diversity: BRICS accounts for 49.5% of world population, 40% of global GDP and 26% of world trade.</li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">हिन्दी</h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />BRIC शब्द 2001 में Goldman Sachs द्वारा गढ़ा गया था; पहली BRIC मंत्रिस्तरीय बैठक 2006 में न्यूयॉर्क में UNGA के दौरान हुई थी।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पहला BRIC शिखर सम्मेलन 2009 में रूस में आयोजित किया गया था।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />दक्षिण अफ्रीका 2011 में शामिल हुआ, जिससे BRIC में “S” जुड़ा और BRICS नाम अस्तित्व में आया।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />BRICS में वर्तमान में 11 पूर्ण सदस्य हैं: ब्राज़ील, रूस, भारत, चीन, दक्षिण अफ्रीका, मिस्र, इथियोपिया, ईरान, सऊदी अरब, UAE और इंडोनेशिया।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />साझेदार देश: बेलारूस, बोलीविया, क्यूबा, कजाकिस्तान, मलेशिया, नाइजीरिया, थाईलैंड, युगांडा, उज्बेकिस्तान और वियतनाम।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />BRICS का कोई संस्थापक संधि, अलग बजट या स्थायी सचिवालय नहीं है — यह एक अनौपचारिक समन्वय मंच है।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />न्यू डेवलपमेंट बैंक (NDB – BRICS Bank) की स्थापना जुलाई 2014 में ब्राजील के फोर्टालेजा में छठे BRICS शिखर सम्मेलन में हुई और इसने जुलाई 2015 में काम शुरू किया।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />2026 की प्रमुख बैठकें: कृषि WG एवं मंत्रिस्तरीय (इंदौर), आपदा जोखिम न्यूनीकरण WG (पुरी), पहला MSME फोरम एवं तीसरी SME WG (आगरा), दूसरी संस्कृति WG (वाराणसी), सांख्यिकी प्रमुखों की बैठक (लखनऊ), अंतरिक्ष एजेंसियों के प्रमुख (बेंगलुरु – ISRO), 16वीं NSA बैठक (नई दिल्ली), महिला मंत्रिस्तरीय बैठक (कोच्चि)।</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />पैमाना एवं विविधता: BRICS विश्व की 49.5% जनसंख्या, 40% वैश्विक GDP और 26% विश्व व्यापार का प्रतिनिधित्व करता है।</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PYQ */}
                <section className="mb-10">
                    <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" /> PYQ Linkage / पिछले वर्षों के प्रश्न
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                            <strong>Q.</strong> With reference to a grouping of countries known as BRICS, consider the following statements: 1. The First Summit of BRICS was held in Rio de Janeiro in 2009. 2. South Africa was the last to join the BRICS grouping. Which of the statements given above is/are correct? <em>(UPSC Prelims)</em>
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            <strong>उत्तर:</strong> केवल 2 सही है — पहला BRICS शिखर सम्मेलन 2009 में रियो डी जनेरियो में नहीं, बल्कि येकातेरिनबर्ग, रूस में हुआ था।
                        </p>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                            <strong>Q.</strong> The 10th BRICS Summit 2018 was held in which of the following countries? <em>(UPSC 2018)</em> — <strong>Answer:</strong> South Africa (Johannesburg).
                        </p>
                    </div>
                </section>

                {/* MCQs */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Target className="w-5 h-5 text-indigo-600" />
                        <h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2>
                        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                            Click an option to reveal the answer
                        </span>
                    </div>
                    <div className="space-y-5">
                        {mcqs.map((mcq) => (
                            <MCQBlock key={mcq.id} mcq={mcq} />
                        ))}
                    </div>
                </section>

                {/* Back & related */}
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t pt-8">
                    <Link href="/current-affairs">
                        <Button variant="outline" className="gap-2 cursor-pointer">
                            <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                        </Button>
                    </Link>
                    <div className="flex gap-3">
                        <Link href="/current-affairs/by-topic/sco-summit-2026">
                            <Button variant="outline" className="gap-2 cursor-pointer">
                                Next Topic: SCO Summit 2026 <ChevronRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/mock-test">
                            <Button className="gap-2 cursor-pointer">
                                Practice Quiz <Target className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            <FooterLinkFooter />
        </div>
    )
}