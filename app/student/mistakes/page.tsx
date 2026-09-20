"use client"

import { useEffect, useMemo, useState } from "react"
import { BookOpenCheck, CheckCircle2, ChevronDown, Filter, Loader2, NotebookPen, Search, Target, XCircle } from "lucide-react"
import { getStudentMistakes } from "@/lib/actions/student"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const optionLabels = { a: "A", b: "B", c: "C", d: "D" } as const

type Mistake = {
  id: string
  selected_answer: string | null
  question: {
    question_text: string
    option_a: string
    option_b: string
    option_c: string
    option_d: string
    correct_answer: keyof typeof optionLabels
    explanation: string | null
    image_url?: string | null
  }
  test?: { id: string; title: string; test_type: string } | null
}

export default function StudentMistakesPage() {
  const [mistakes, setMistakes] = useState<Mistake[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [testFilter, setTestFilter] = useState("all")
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    getStudentMistakes().then((data) => setMistakes((data?.mistakes ?? []) as Mistake[])).finally(() => setIsLoading(false))
  }, [])

  const tests = useMemo(() => Array.from(new Map(mistakes.map((item) => [item.test?.id, item.test?.title]).filter(([id]) => id)).entries()), [mistakes])
  const filteredMistakes = mistakes.filter((item) => {
    const haystack = `${item.question.question_text} ${item.test?.title ?? ""}`.toLowerCase()
    return haystack.includes(search.toLowerCase()) && (testFilter === "all" || item.test?.id === testFilter)
  })

  if (isLoading) return <div className="flex min-h-[50vh] items-center justify-center"><Loader2 className="size-8 animate-spin text-primary" /></div>

  return (
    <div className="mx-auto max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><NotebookPen className="size-6" /></div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Mistake Notebook</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">Saare wrong answers ek jagah — explanations ke saath revise karo aur apni mistakes ko repeat hone se roko.</p>
        </div>
        <Badge variant="secondary" className="w-fit gap-2 px-3 py-1.5"><BookOpenCheck className="size-4" /> {mistakes.length} mistakes saved</Badge>
      </header>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <Card><CardContent className="flex items-center gap-3 p-4"><div className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive"><XCircle className="size-5" /></div><div><p className="text-2xl font-semibold">{mistakes.length}</p><p className="text-xs text-muted-foreground">Wrong answers</p></div></CardContent></Card>
        <Card><CardContent className="flex items-center gap-3 p-4"><div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Target className="size-5" /></div><div><p className="text-2xl font-semibold">{tests.length}</p><p className="text-xs text-muted-foreground">Tests to revisit</p></div></CardContent></Card>
        <Card className="col-span-2 md:col-span-1"><CardContent className="flex items-center gap-3 p-4"><div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><CheckCircle2 className="size-5" /></div><div><p className="text-2xl font-semibold">Review</p><p className="text-xs text-muted-foreground">One mistake at a time</p></div></CardContent></Card>
      </div>

      <Card>
        <CardHeader className="gap-4 pb-4"><div><CardTitle className="text-lg">Your revision list</CardTitle><CardDescription>Wrong answers ko filter karke targeted revision karo.</CardDescription></div><div className="flex flex-col gap-3 md:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search question or test..." className="pl-9" /></div><div className="relative md:w-56"><Filter className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><select aria-label="Filter by test" value={testFilter} onChange={(event) => setTestFilter(event.target.value)} className="h-10 w-full appearance-none rounded-md border border-input bg-background pl-9 pr-8 text-sm text-foreground"><option value="all">All tests</option>{tests.map(([id, title]) => <option key={id} value={id}>{title}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /></div></div></CardHeader>
        <CardContent className="space-y-3">
          {filteredMistakes.length === 0 ? <div className="rounded-xl border border-dashed border-border px-6 py-14 text-center"><BookOpenCheck className="mx-auto mb-3 size-8 text-muted-foreground" /><p className="font-medium">{mistakes.length === 0 ? "No mistakes yet" : "No matching mistakes"}</p><p className="mt-1 text-sm text-muted-foreground">{mistakes.length === 0 ? "Complete a test and your wrong answers will appear here." : "Try a different search or test filter."}</p></div> : filteredMistakes.map((item, index) => {
            const isOpen = openId === item.id
            const options = { a: item.question.option_a, b: item.question.option_b, c: item.question.option_c, d: item.question.option_d }
            return <div key={item.id} className="overflow-hidden rounded-xl border border-border bg-background"><button type="button" onClick={() => setOpenId(isOpen ? null : item.id)} className="flex w-full items-start gap-3 p-4 text-left hover:bg-muted/40"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive">{index + 1}</span><span className="min-w-0 flex-1"><span className="mb-1 flex flex-wrap items-center gap-2"><Badge variant="outline" className="text-[10px]">{item.test?.title ?? "Practice test"}</Badge><span className="text-xs text-muted-foreground">Your answer: {item.selected_answer ? optionLabels[item.selected_answer as keyof typeof optionLabels] : "Not attempted"}</span></span><span className="block font-medium text-foreground">{item.question.question_text}</span></span><ChevronDown className={`mt-1 size-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <div className="border-t border-border bg-muted/20 px-4 pb-5 pt-4 md:pl-14"><div className="grid gap-2 md:grid-cols-2">{Object.entries(options).map(([key, value]) => <div key={key} className={`rounded-lg border px-3 py-2 text-sm ${key === item.question.correct_answer ? "border-accent/40 bg-accent/10 text-accent-foreground" : key === item.selected_answer ? "border-destructive/40 bg-destructive/10" : "border-border bg-card"}`}><span className="mr-2 font-semibold">{key.toUpperCase()}.</span>{value}{key === item.question.correct_answer && <Badge variant="secondary" className="ml-2 text-[10px]">Correct</Badge>}</div>)}</div><div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4"><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Explanation</p><p className="text-sm leading-6 text-foreground">{item.question.explanation || "Is question ki detailed explanation abhi available nahi hai. Correct option ko revise karke dobara practice karein."}</p></div></div>}</div>
          })}
        </CardContent>
      </Card>
    </div>
  )
}
