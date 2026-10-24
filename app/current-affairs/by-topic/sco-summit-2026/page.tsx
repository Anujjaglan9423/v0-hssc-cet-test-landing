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
    Handshake,
    ArrowRight,
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
        id: "sco-q1",
        questionEn:
            "Regarding the 26th SCO Summit held in 2026, which of the following statements is/are correct? 1. It was hosted by Kazakhstan and marked the inaugural 'SCO Plus' meeting. 2. Bishkek was designated as the SCO Tourism and Cultural Capital for 2026–2027.",
        questionHi:
            "2026 में आयोजित 26वें SCO शिखर सम्मेलन के संदर्भ में, निम्नलिखित में से कौन-सा/से कथन सही है/हैं? 1. इसकी मेजबानी कजाकिस्तान ने की और इसी दौरान पहली 'SCO Plus' बैठक आयोजित की गई। 2. बिश्केक को 2026–2027 के लिए SCO पर्यटन और सांस्कृतिक राजधानी घोषित किया गया था।",
        options: [
            { key: "a", en: "1 only", hi: "केवल 1" },
            { key: "b", en: "2 only", hi: "केवल 2" },
            { key: "c", en: "Both 1 and 2", hi: "1 और 2 दोनों" },
            { key: "d", en: "Neither 1 nor 2", hi: "न तो 1, न ही 2" },
        ],
        correctKey: "d",
        explanationEn:
            "Kyrgyzstan hosted the summit and launched the 'SCO Plus' format. Lahore (not Bishkek) was designated as the Tourism and Cultural Capital for 2026–2027. Hence neither statement is correct.",
        explanationHi:
            "किर्गिस्तान ने शिखर सम्मेलन की मेजबानी की और 'SCO Plus' प्रारूप की शुरुआत की। लाहौर (बिश्केक नहीं) को 2026–2027 के लिए पर्यटन और सांस्कृतिक राजधानी घोषित किया गया। अतः दोनों कथन सही नहीं हैं।",
    },
    {
        id: "sco-q2",
        questionEn:
            "Consider the following statements about the Shanghai Cooperation Organisation (SCO): 1. SCO was established in 2001 in Shanghai. 2. India and Pakistan became full members in 2017. 3. The SCO Secretariat is located in Tashkent. Which of the statements given above are correct?",
        questionHi:
            "शंघाई सहयोग संगठन (SCO) के बारे में निम्नलिखित कथनों पर विचार कीजिए: 1. SCO की स्थापना 2001 में शंघाई में हुई थी। 2. भारत और पाकिस्तान 2017 में पूर्ण सदस्य बने। 3. SCO सचिवालय ताशकंद में स्थित है। उपर्युक्त में से कौन-से कथन सही हैं?",
        options: [
            { key: "a", en: "1 and 2 only", hi: "केवल 1 और 2" },
            { key: "b", en: "2 and 3 only", hi: "केवल 2 और 3" },
            { key: "c", en: "1 and 3 only", hi: "केवल 1 और 3" },
            { key: "d", en: "1, 2 and 3", hi: "1, 2 और 3" },
        ],
        correctKey: "a",
        explanationEn:
            "The SCO Secretariat is in Beijing, not Tashkent (Tashkent hosts the Regional Anti-Terrorist Structure – RATS). Statements 1 and 2 are correct. Hence (a).",
        explanationHi:
            "SCO सचिवालय बीजिंग में है, ताशकंद में नहीं (ताशकंद में क्षेत्रीय आतंकवाद-रोधी संरचना – RATS है)। कथन 1 और 2 सही हैं। अतः (a) सही है।",
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
                        if (opt.key === mcq.correctKey)
                            extraClass =
                                "bg-green-100 border-green-400 dark:bg-green-900/20 dark:border-green-700"
                        else if (opt.key === selected && opt.key !== mcq.correctKey)
                            extraClass =
                                "bg-red-100 border-red-400 dark:bg-red-900/20 dark:border-red-700"
                    }
                    return (
                        <div
                            key={opt.key}
                            onClick={() => handleSelect(opt.key)}
                            className={`flex items-start gap-3 rounded-lg border border-border bg-background p-3 text-sm cursor-pointer transition hover:bg-muted/50 ${extraClass}`}
                        >
                            <span className="font-bold uppercase w-5 shrink-0 text-muted-foreground">
                                {opt.key}.
                            </span>
                            <div>
                                <div className="text-foreground">{opt.en}</div>
                                <div className="text-muted-foreground text-xs mt-0.5">{opt.hi}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {selected !== null && (
                <div
                    className={`mt-2 p-3 rounded-lg border-l-4 ${
                        isCorrect
                            ? "bg-green-50 border-green-500 dark:bg-green-900/10"
                            : "bg-red-50 border-red-400 dark:bg-red-900/10"
                    }`}
                >
                    <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                        ) : (
                            <HelpCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-sm font-semibold">
                            {isCorrect
                                ? "Correct! / सही उत्तर!"
                                : `Correct answer: ${mcq.correctKey.toUpperCase()} / सही उत्तर: ${mcq.correctKey.toUpperCase()}`}
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
export default function ScoSummit2026Page() {
    return (
        <div className="min-h-screen bg-background">
            <FooterLinkNavbar />

            {/* HERO */}
            <section className="pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-background relative overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <Link
                        href="/current-affairs"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Current Affairs
                    </Link>

                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        Topic Digest · International Relations
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                        26th SCO Summit 2026
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        26वाँ शंघाई सहयोग संगठन (SCO) शिखर सम्मेलन 2026
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Calendar className="w-4 h-4 text-emerald-600" />
                            <span>31 Aug – 1 Sep 2026</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Globe2 className="w-4 h-4 text-emerald-600" />
                            <span>Bishkek, Kyrgyzstan</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Handshake className="w-4 h-4 text-emerald-600" />
                            <span>25 Years of SCO</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                            <Target className="w-4 h-4 text-emerald-600" />
                            <span>{mcqs.length} MCQs</span>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {/* OVERVIEW */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Languages className="w-5 h-5 text-emerald-600" />
                        <h2 className="text-2xl font-bold">Overview / अवलोकन</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-100">
                            <h3 className="text-xs font-semibold uppercase text-emerald-700 mb-3">
                                English
                            </h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    The 26th Meeting of the SCO Council of Heads of State (CHS) was held
                                    in Bishkek, Kyrgyzstan, from 31 August to 1 September 2026 — marking
                                    the 25th anniversary of the SCO.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    Theme: “25 Years of the SCO: Together for Sustainable Peace,
                                    Development and Prosperity.”
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    The summit concluded with the adoption of the Bishkek Declaration and
                                    several decisions covering security, connectivity, energy, climate
                                    cooperation, technology and other areas.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    The SCO Charter was amended to include English as an official
                                    language, alongside Russian and Chinese.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    Kyrgyzstan concluded its 2025–2026 chairmanship and transferred the
                                    SCO chairmanship to Pakistan for 2026–2027.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    Lahore was designated as the SCO Tourism and Cultural Capital for
                                    2026–2027.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                    The inaugural “SCO Plus” meeting was also held in Bishkek, alongside
                                    the 26th CHS meeting.
                                </li>
                            </ul>
                        </div>
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                            <h3 className="text-xs font-semibold uppercase text-amber-700 mb-3">
                                हिन्दी
                            </h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    SCO राष्ट्राध्यक्ष परिषद (CHS) की 26वीं बैठक 31 अगस्त से 1 सितंबर 2026
                                    तक बिषकेक, किर्गिस्तान में आयोजित की गई, जो SCO की 25वीं वर्षगांठ का
                                    अवसर भी था।
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    थीम: “SCO के 25 वर्ष: सतत शांति, विकास और समृद्धि के लिए मिलकर आगे
                                    बढ़ना”।
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    शिखर सम्मेलन का समापन बिश्केक घोषणा-पत्र (Bishkek Declaration) को
                                    अपनाने और सुरक्षा, कनेक्टिविटी, ऊर्जा, जलवायु सहयोग, टेक्नोलॉजी तथा
                                    अन्य क्षेत्रों से जुड़े कई निर्णयों के साथ हुआ।
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    SCO चार्टर में संशोधन करके अंग्रेजी को रूसी और चीनी भाषाओं के साथ
                                    आधिकारिक भाषा के रूप में शामिल किया गया।
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    किर्गिस्तान ने 2025–2026 की अपनी अध्यक्षता समाप्त की और SCO की
                                    अध्यक्षता 2026–2027 के लिए पाकिस्तान को हस्तांतरित कर दी।
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    लाहौर को 2026–2027 के लिए SCO पर्यटन और सांस्कृतिक राजधानी घोषित
                                    किया गया।
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                    “SCO Plus” की पहली बैठक भी 26वीं CHS बैठक के साथ बिश्केक में आयोजित
                                    की गई।
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* KEY FACTS */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-emerald-600" />
                        <h2 className="text-2xl font-bold">
                            Key Features & Exam Facts / मुख्य तथ्य
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">
                                English
                            </h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    Shanghai Cooperation Organisation (SCO) is the world's largest
                                    regional intergovernmental organization by geographic scope and
                                    population, focused on security, economic, and political cooperation
                                    across Eurasia.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    SCO was established in 2001 in Shanghai by China, Russia, Kazakhstan,
                                    Kyrgyzstan, Tajikistan and Uzbekistan.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    India and Pakistan became full members in 2017.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    The SCO currently has 10 full members: China, Russia, Kazakhstan,
                                    Kyrgyzstan, Tajikistan, Uzbekistan, India, Pakistan, Iran and Belarus.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    The SCO has two permanent bodies: the SCO Secretariat in Beijing and
                                    the Regional Anti-Terrorist Structure (RATS) in Tashkent.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    RATS coordinates cooperation among member states against terrorism,
                                    separatism and extremism.
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    Anti-drug cooperation: SCO leaders approved regulations for the
                                    Executive Committee of the SCO Anti-Drug Centre and adopted programmes
                                    to counter synthetic drugs up to 2030.
                                </li>
                            </ul>
                        </div>
                        <div className="bg-card rounded-xl border p-5">
                            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3">
                                हिन्दी
                            </h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    शंघाई सहयोग संगठन (SCO) भौगोलिक क्षेत्र और जनसंख्या के आधार पर विश्व
                                    का सबसे बड़ा क्षेत्रीय अंतरसरकारी संगठन है, जो पूरे यूरेशिया में
                                    सुरक्षा, आर्थिक और राजनीतिक सहयोग पर केंद्रित है।
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    SCO की स्थापना 2001 में शंघाई में चीन, रूस, कजाकिस्तान, किर्गिस्तान,
                                    ताजिकिस्तान और उज्बेकिस्तान द्वारा की गई थी।
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    भारत और पाकिस्तान 2017 में इसके पूर्ण सदस्य बने।
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    SCO में वर्तमान में 10 पूर्ण सदस्य हैं: चीन, रूस, कजाकिस्तान,
                                    किर्गिस्तान, ताजिकिस्तान, उज्बेकिस्तान, भारत, पाकिस्तान, ईरान और
                                    बेलारूस।
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    SCO के दो स्थायी निकाय हैं: बीजिंग में SCO सचिवालय और ताशकंद में
                                    क्षेत्रीय आतंकवाद-रोधी संरचना (RATS)।
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    RATS सदस्य देशों के बीच आतंकवाद, अलगाववाद और उग्रवाद से निपटने के
                                    लिए सहयोग को समन्वित करता है।
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    नशीली दवाओं के खिलाफ सहयोग: SCO नेताओं ने SCO एंटी-ड्रग सेंटर की
                                    कार्यकारी समिति से संबंधित नियमों को स्वीकृति दी और 2030 तक सिंथेटिक
                                    ड्रग्स तथा उनके प्रीकर्सर के प्रसार को रोकने के कार्यक्रम अपनाए।
                                </li>
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
                            <strong>Q.</strong> The Shanghai Cooperation Organization summit in which
                            India was inducted as a full member was held at ______.{" "}
                            <em>(UPPSC Civil Service 2017, Paper 1)</em>
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            <strong>Answer:</strong> Astana, Kazakhstan (2017 Summit). /{" "}
                            <strong>उत्तर:</strong> अस्ताना, कजाकिस्तान (2017 शिखर सम्मेलन)।
                        </p>
                    </div>
                </section>

                {/* MCQs */}
                <section className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Target className="w-5 h-5 text-emerald-600" />
                        <h2 className="text-2xl font-bold">Probable MCQs / संभावित प्रश्न</h2>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
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
                    <div className="flex flex-wrap gap-3">
                        <Link href="/current-affairs/by-topic/nepal-flash-flood-2026">
                            <Button variant="outline" className="gap-2 cursor-pointer">
                                Next: Nepal Flash Flood 2026 <ChevronRight className="w-4 h-4" />
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