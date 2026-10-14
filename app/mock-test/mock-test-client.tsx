"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
    ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronRight,
    Clock3, FileQuestion, GraduationCap, LockKeyhole,
    Play, RotateCcw, ShieldCheck, Target, TrendingUp, Users,
    Search, ClipboardList, Check, Info,
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"

type Category = { id: string; name: string; slug: string; description: string | null }
type Exam = { id: string; category_id: string; name: string; slug: string; description: string | null }
type MockTest = {
    id: string
    exam_id: string
    title: string
    duration: number | null
    total_questions: number | null
    created_at: string | null
}
type Screen = "categories" | "exams" | "tests"

const faqs = [
    { question: "Are CET TEST mock tests free?", answer: "Yes. The first mock test in each exam section is available without signing up. You can create a free account to access the remaining tests; no payment is required." },
    { question: "Can I start a mock test without creating an account?", answer: "Yes. Select an exam category and an exam section, then choose the first free test to begin practicing." },
    { question: "Which government exams can I prepare for?", answer: "Browse the available exam categories above to see the current tests. The list is updated from our exam database, so availability can change." },
    { question: "How do I choose the right mock test?", answer: "Start with the exam you are preparing for. Check the number of questions and time limit before starting, and review your performance after finishing if results are available." },
    { question: "Do I need to pay to unlock other tests?", answer: "No. Additional tests require a free CET TEST account, not a paid subscription." },
]

function SkeletonCards() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading exam cards" aria-busy="true">
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="animate-pulse rounded-2xl border border-border bg-card p-6">
                    <div className="mb-5 h-11 w-11 rounded-xl bg-muted" />
                    <div className="mb-3 h-5 w-2/3 rounded bg-muted" />
                    <div className="mb-2 h-3 w-full rounded bg-muted" />
                    <div className="mb-6 h-3 w-4/5 rounded bg-muted" />
                    <div className="h-10 rounded-lg bg-muted" />
                </div>
            ))}
        </div>
    )
}

function EmptyState({ title, description, retry }: { title: string; description: string; retry?: () => void }) {
    return (
        <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground"><FileQuestion className="h-7 w-7" /></div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            {retry && <button type="button" onClick={retry} className="mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted"><RotateCcw className="h-4 w-4" /> Try again</button>}
        </div>
    )
}

export default function MockTestClient() {
    const router = useRouter()
    const [categories, setCategories] = useState<Category[]>([])
    const [exams, setExams] = useState<Exam[]>([])
    const [tests, setTests] = useState<MockTest[]>([])
    const [category, setCategory] = useState<Category | null>(null)
    const [exam, setExam] = useState<Exam | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [search, setSearch] = useState("")
    const [refreshKey, setRefreshKey] = useState(0)
    const [completed, setCompleted] = useState<Record<string, boolean>>({})
    const screen: Screen = !category ? "categories" : !exam ? "exams" : "tests"

    useEffect(() => {
        try {
            const raw = window.localStorage.getItem("mock_tests_taken")
            if (raw) {
                const parsed: unknown = JSON.parse(raw)
                if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
                    setCompleted(Object.fromEntries(Object.entries(parsed).map(([key, value]) => [key, Boolean(value)])))
                }
            }
        } catch { /* History is optional; never block public access. */ }
    }, [])

    useEffect(() => {
        let active = true
        setLoading(true)
        setError(null)
        async function load() {
            try {
                if (!category) {
                    const { data, error: dbError } = await supabase.from("exam_categories").select("id,name,slug,description").eq("is_active", true).order("display_order", { ascending: true })
                    if (dbError) throw dbError
                    if (active) setCategories((data || []) as Category[])
                } else if (!exam) {
                    // Use the selected category's actual database ID rather than making a redundant slug lookup.
                    const { data, error: dbError } = await supabase.from("exams").select("id,category_id,name,slug,description").eq("category_id", category.id).order("display_order", { ascending: true })
                    if (dbError) throw dbError
                    if (active) setExams((data || []) as Exam[])
                } else {
                    // Deterministic ordering: the earliest created test is always the first free test.
                    // If your database has a display_order column, replace this ordering with display_order.
                    const { data, error: dbError } = await supabase.from("tests").select("id,exam_id,title,duration,total_questions,created_at").eq("exam_id", exam.id).order("created_at", { ascending: true }).order("id", { ascending: true })
                    if (dbError) throw dbError
                    if (active) setTests((data || []) as MockTest[])
                }
            } catch (err) {
                console.error("Unable to load mock test content", err)
                if (active) setError("We couldn't load this content right now. Please try again.")
            } finally {
                if (active) setLoading(false)
            }
        }
        void load()
        return () => { active = false }
    }, [category, exam, refreshKey])

    const retry = useCallback(() => setRefreshKey((value) => value + 1), [])
    const goBack = useCallback(() => {
        setError(null)
        setSearch("")
        if (exam) { setExam(null); setTests([]) }
        else { setCategory(null); setExams([]) }
    }, [exam])
    const displayedCategories = useMemo(() => categories.filter((item) => `${item.name} ${item.description || ""}`.toLowerCase().includes(search.toLowerCase())), [categories, search])
    const displayedExams = useMemo(() => exams.filter((item) => `${item.name} ${item.description || ""}`.toLowerCase().includes(search.toLowerCase())), [exams, search])
    const displayedTests = useMemo(() => tests.map((item, index) => ({ ...item, isFree: index === 0 })).filter((item) => item.title.toLowerCase().includes(search.toLowerCase())), [tests, search])

    const chooseCategory = (item: Category) => { setCategory(item); setExam(null); setExams([]); setTests([]); setSearch(""); setError(null) }
    const chooseExam = (item: Exam) => { setExam(item); setTests([]); setSearch(""); setError(null) }
    const handleTest = (item: MockTest, isFree: boolean) => router.push(isFree ? `/mock-test-attempt/${item.id}` : "/signup")

    return (
        <div className="min-h-screen bg-background text-foreground">
            <FooterLinkNavbar />
            <main id="main-content">
                {screen === "categories" ? (
                    <>
                        <section className="border-b border-border/70 bg-gradient-to-b from-primary/[0.055] to-background px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-40">
                            <div className="mx-auto max-w-6xl">
                                <div className="max-w-3xl">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"><CheckCircle2 className="h-3.5 w-3.5" /> Free government exam preparation</span>
                                    <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Practice for your next exam with <span className="text-primary">free mock tests.</span></h1>
                                    <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">Explore mock tests for Haryana CET, HSSC, UKSSSC, SSC and other government exams. Practice with timed questions and build confidence before exam day.</p>
                                    <div className="mt-8 flex flex-wrap items-center gap-3">
                                        <a href="#exam-categories" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Explore mock tests <ArrowRight className="h-4 w-4" /></a>
                                        <Link href="/current-affairs" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-muted">Read current affairs <ChevronRight className="h-4 w-4" /></Link>
                                    </div>
                                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                                        <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> First test free without signup</span>
                                        <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> No paid subscription</span>
                                        <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Practice on mobile or desktop</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="exam-categories" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
                            <div className="mx-auto max-w-6xl">
                                <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                                    <div><p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Find your exam</p><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Choose an exam category</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Select your exam to explore available practice tests.</p></div>
                                    <SearchInput value={search} onChange={setSearch} placeholder="Search exam categories" />
                                </div>
                                {error ? <EmptyState title="Unable to load categories" description={error} retry={retry} /> : loading ? <SkeletonCards /> : displayedCategories.length ? (
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {displayedCategories.map((item) => <button type="button" key={item.id} onClick={() => chooseCategory(item)} className="group flex min-h-56 flex-col items-start rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><GraduationCap className="h-6 w-6" /></div><h3 className="text-lg font-bold">{item.name}</h3><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{item.description || "Browse available exam sections and mock tests."}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore exams <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></button>)}
                                    </div>
                                ) : <EmptyState title="No matching categories" description="Try a different search term." />}
                            </div>
                        </section>
                        <section className="border-y border-border/70 bg-muted/30 px-4 py-16 sm:px-6">
                            <div className="mx-auto max-w-6xl">
                                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Simple process</p>
                                <h2 className="text-2xl font-bold sm:text-3xl">How CET TEST works</h2>
                                <div className="mt-8 grid gap-4 md:grid-cols-3">{[{ number: "01", icon: BookOpen, title: "Choose your exam", description: "Select a category and find the exam section you want to prepare for." }, { number: "02", icon: Clock3, title: "Attempt a mock test", description: "Start the first free test in each exam section without creating an account." }, { number: "03", icon: TrendingUp, title: "Continue practicing", description: "Create a free account to access additional tests and keep preparing." }].map((step) => <div key={step.number} className="rounded-2xl border border-border bg-card p-6"><div className="mb-5 flex items-center justify-between"><step.icon className="h-6 w-6 text-primary" /><span className="text-sm font-bold text-muted-foreground/60">{step.number}</span></div>
                                    <h3 className="text-lg font-semibold">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p></div>)}</div></div></section>
                        <section className="px-4 py-16 sm:px-6"><div className="mx-auto max-w-6xl"><div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center"><div><p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Prepare with purpose</p><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Make every practice session count</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Mock tests help you become familiar with exam-style questions, practice under time limits and identify topics that need more attention. Start with a free test and build a consistent preparation routine.</p><Link href="/signup" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Create your free account <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-3 sm:grid-cols-2">{[{ icon: Target, title: "Exam-focused practice", text: "Choose tests related to your target exam." }, { icon: Clock3, title: "Timed practice", text: "Get comfortable managing your exam time." }, { icon: ShieldCheck, title: "Free account access", text: "Continue to additional tests without payment." }, { icon: Users, title: "Flexible learning", text: "Practice at your own pace from any device." }].map((feature) => <div key={feature.title} className="rounded-xl border border-border p-5"><feature.icon className="mb-3 h-5 w-5 text-primary" /><h3 className="font-semibold">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.text}</p></div>)}</div></div></div></section>
                        <section className="border-t border-border bg-muted/20 px-4 py-16 sm:px-6"><div className="mx-auto max-w-3xl"><p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-primary">Frequently asked questions</p><h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Questions about free mock tests</h2><div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-border bg-card px-5 py-4"><summary className="cursor-pointer list-none pr-5 text-sm font-semibold marker:hidden">{faq.question}<span className="float-right text-primary group-open:rotate-90"><ChevronRight className="h-4 w-4" /></span></summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div></div></section>
                        <section className="px-4 py-16 sm:px-6"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-7 sm:p-10 md:flex-row md:items-center"><div><h2 className="text-2xl font-bold">Ready to start practicing?</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Explore an exam and take its first mock test for free.</p></div><a href="#exam-categories" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Choose an exam <ArrowRight className="h-4 w-4" /></a></div></section>
                    </>
                ) : (
                    <section className="min-h-[70vh] px-4 pb-20 pt-32 sm:px-6 md:pt-36"><div className="mx-auto max-w-6xl"><nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><button type="button" onClick={() => { setCategory(null); setExam(null); setSearch("") }} className="hover:text-primary">Mock tests</button><ChevronRight className="h-3 w-3" />{category && (exam ? <button type="button" onClick={goBack} className="hover:text-primary">{category.name}</button> : <span aria-current="page" className="font-medium text-foreground">{category.name}</span>)}{exam && <><ChevronRight className="h-3 w-3" /><span aria-current="page" className="font-medium text-foreground">{exam.name}</span></>}</nav><button type="button" onClick={goBack} className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Back to {exam ? "exam sections" : "categories"}</button><div className="mb-9 max-w-3xl"><p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{exam ? "Available mock tests" : "Exam sections"}</p><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{exam?.name || category?.name}</h1><p className="mt-3 text-sm leading-7 text-muted-foreground">{exam?.description || category?.description || "Explore available tests and start preparing."}</p></div><div className="mb-7 flex flex-col justify-between gap-4 rounded-xl border border-primary/15 bg-primary/[0.04] p-4 sm:flex-row sm:items-center"><div className="flex items-start gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="text-sm leading-6 text-muted-foreground">{exam ? "The first test in this exam is free without signup. Create a free account to access additional tests." : "Choose an exam section to see available mock tests. The first test in each section is free without signup."}</p></div><Link href="/signup" className="shrink-0 text-sm font-semibold text-primary hover:underline">Free signup <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div><div className="mb-6 flex justify-end"><SearchInput value={search} onChange={setSearch} placeholder={exam ? "Search mock tests" : "Search exam sections"} /></div>{error ? <EmptyState title="Unable to load content" description={error} retry={retry} /> : loading ? <SkeletonCards /> : !exam ? (displayedExams.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{displayedExams.map((item) => <button type="button" key={item.id} onClick={() => chooseExam(item)} className="group flex min-h-52 flex-col items-start rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-all hover:border-primary/35 hover:shadow-md"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><ClipboardList className="h-5 w-5" /></div><h2 className="text-lg font-semibold">{item.name}</h2><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{item.description || "Explore available practice tests for this exam."}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">View mock tests <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></button>)}</div> : <EmptyState title="No exam sections found" description="No matching exam sections are available right now." />) : (displayedTests.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{displayedTests.map((item) => { const isTaken = Boolean(completed[`${category?.slug ?? ""}-${exam.slug}`]) && item.isFree; return <article key={item.id} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"><div className="mb-5 flex items-start justify-between gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><FileQuestion className="h-5 w-5" /></div><span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${item.isFree ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-primary/10 text-primary"}`}>{item.isFree ? <CheckCircle2 className="h-3.5 w-3.5" /> : <LockKeyhole className="h-3.5 w-3.5" />}{item.isFree ? "Free test" : "Free signup required"}</span></div><h2 className="line-clamp-2 text-lg font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Practice exam-style questions in a focused test session.</p><div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><FileQuestion className="h-4 w-4" /> {item.total_questions ?? "—"} questions</span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" /> {item.duration ?? "—"} min</span></div><button type="button" onClick={() => handleTest(item, item.isFree)} className={`mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${item.isFree ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border bg-background hover:bg-muted"}`}>{item.isFree ? <Play className="h-4 w-4" /> : <LockKeyhole className="h-4 w-4" />}{item.isFree ? (isTaken ? "Open free test again" : "Start free test") : "Create free account"}<ArrowRight className="h-4 w-4" /></button></article> })}</div> : <EmptyState title="No mock tests found" description="There are no matching tests for this exam yet. Try another search or exam." />)}</div></section>
                )}
            </main>
            <FooterLinkFooter />
        </div>
    )
}

function SearchInput({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
    return <label className="relative block w-full sm:w-72"><span className="sr-only">{placeholder}</span><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15" /></label>
}
