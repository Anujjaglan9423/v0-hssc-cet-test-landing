"use client"

import { useMemo, useState } from "react"
import { getPreviousYearPaperUrl } from "@/lib/actions/previous-year-papers"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Download, Eye, Search, X, Layers3, BookOpen, CalendarDays } from "lucide-react"

type Paper = {
  id: string; title: string; exam_name: string; sub_exam_name: string | null
  paper_type: "full" | "subject" | "topic"; subject: string | null; topic: string | null
  exam_year: number; file_name: string; file_size_bytes: number; created_at: string
}

const paperTypeLabels = { full: "Full exam", subject: "Subject-wise", topic: "Topic-wise" }
const formatSize = (bytes: number) => bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`

export function PreviousYearPapersBrowser({ papers }: { papers: Paper[] }) {
  const [search, setSearch] = useState("")
  const [exam, setExam] = useState("All exams")
  const [subExam, setSubExam] = useState("All sub-exams")
  const [kind, setKind] = useState("All formats")
  const [activePaper, setActivePaper] = useState<Paper | null>(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [loadingId, setLoadingId] = useState("")
  const [notice, setNotice] = useState("")

  const exams = useMemo(() => ["All exams", ...Array.from(new Set(papers.map((paper) => paper.exam_name))).sort()], [papers])
  const examCategories = useMemo(() => Array.from(new Set(papers.map((paper) => paper.exam_name))).sort().map((name) => ({ name, count: papers.filter((paper) => paper.exam_name === name).length })), [papers])
  const subExams = useMemo(() => ["All sub-exams", ...Array.from(new Set(papers.filter((paper) => exam === "All exams" || paper.exam_name === exam).map((paper) => paper.sub_exam_name).filter((name): name is string => Boolean(name)))).sort()], [papers, exam])
  const filtered = useMemo(() => papers.filter((paper) => {
    const query = search.trim().toLowerCase()
    const matchesSearch = !query || [paper.title, paper.exam_name, paper.sub_exam_name, paper.subject, paper.topic, String(paper.exam_year)].some((value) => value?.toLowerCase().includes(query))
    return matchesSearch && (exam === "All exams" || paper.exam_name === exam) && (subExam === "All sub-exams" || paper.sub_exam_name === subExam) && (kind === "All formats" || paper.paper_type === kind)
  }), [papers, search, exam, subExam, kind])

  async function openPreview(paper: Paper) {
    setLoadingId(paper.id); setNotice("")
    try { const result = await getPreviousYearPaperUrl(paper.id); setActivePaper(paper); setPreviewUrl(result.url) }
    catch (error) { setNotice(error instanceof Error ? error.message : "Could not open this PDF.") }
    finally { setLoadingId("") }
  }

  async function download(paper: Paper) {
    setLoadingId(paper.id); setNotice("")
    try { const result = await getPreviousYearPaperUrl(paper.id, "attachment"); const link = document.createElement("a"); link.href = result.url; link.rel = "noopener"; document.body.append(link); link.click(); link.remove() }
    catch (error) { setNotice(error instanceof Error ? error.message : "Could not download this PDF.") }
    finally { setLoadingId("") }
  }

  return <>
    {examCategories.length > 0 && <section className="mb-5" aria-labelledby="paper-categories-title">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div><h2 id="paper-categories-title" className="text-xl font-semibold tracking-tight">Browse by exam category</h2><p className="mt-1 text-sm text-muted-foreground">Choose a category to see its available papers.</p></div>
        <span className="text-sm text-muted-foreground">{examCategories.length} {examCategories.length === 1 ? "category" : "categories"}</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <button type="button" aria-pressed={exam === "All exams"} onClick={() => { setExam("All exams"); setSubExam("All sub-exams") }} className={`rounded-2xl border p-4 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${exam === "All exams" ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
          <span className="flex items-center justify-between gap-3"><span className="font-semibold">All categories</span><FileText aria-hidden="true" className="size-4 text-primary" /></span>
          <span className="mt-2 block text-sm text-muted-foreground">{papers.length} {papers.length === 1 ? "paper" : "papers"}</span>
        </button>
        {examCategories.map((category) => <button key={category.name} type="button" aria-pressed={exam === category.name} onClick={() => { setExam(category.name); setSubExam("All sub-exams") }} className={`rounded-2xl border p-4 text-left transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${exam === category.name ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
          <span className="flex items-center justify-between gap-3"><span className="font-semibold">{category.name}</span><FileText aria-hidden="true" className="size-4 text-primary" /></span>
          <span className="mt-2 block text-sm text-muted-foreground">{category.count} {category.count === 1 ? "paper" : "papers"}</span>
        </button>)}
      </div>
    </section>}
    <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7" aria-label="Filter question papers">
      <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <label className="relative block"><span className="sr-only">Search papers</span><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search exam, subject, topic or year" className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" /></label>
        <select aria-label="Filter by exam" value={exam} onChange={(event) => { setExam(event.target.value); setSubExam("All sub-exams") }} className="h-11 rounded-xl border border-input bg-background px-3 text-sm"><option>All exams</option>{exams.slice(1).map((name) => <option key={name}>{name}</option>)}</select>
        <select aria-label="Filter by sub-exam" value={subExam} onChange={(event) => setSubExam(event.target.value)} className="h-11 rounded-xl border border-input bg-background px-3 text-sm"><option>All sub-exams</option>{subExams.slice(1).map((name) => <option key={name}>{name}</option>)}</select>
        <select aria-label="Filter by format" value={kind} onChange={(event) => setKind(event.target.value)} className="h-11 rounded-xl border border-input bg-background px-3 text-sm">{["All formats", "full", "subject", "topic"].map((value) => <option key={value} value={value}>{value === "All formats" ? value : paperTypeLabels[value as keyof typeof paperTypeLabels]}</option>)}</select>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm"><span className="text-muted-foreground">{filtered.length} {filtered.length === 1 ? "paper" : "papers"} available</span><span className="font-medium text-foreground">Browse freely · no sign-in needed</span></div>
    </section>
    {notice && <p role="status" className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">{notice}</p>}
    {filtered.length ? <div className="mt-5 grid gap-4 md:grid-cols-2">{filtered.map((paper) => <Card key={paper.id} className="flex flex-col justify-between gap-5 rounded-2xl border-border p-5 transition-shadow hover:shadow-md sm:p-6">
      <div><div className="flex items-start justify-between gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><FileText aria-hidden="true" /></span><span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{paperTypeLabels[paper.paper_type]}</span></div><h2 className="mt-4 text-lg font-semibold leading-snug">{paper.title}</h2><p className="mt-2 text-sm text-muted-foreground">{paper.exam_name}{paper.sub_exam_name ? ` · ${paper.sub_exam_name}` : ""}</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" />{paper.exam_year}</span>{paper.subject && <span className="inline-flex items-center gap-1.5"><BookOpen className="size-3.5" />{paper.subject}</span>}{paper.topic && <span className="inline-flex items-center gap-1.5"><Layers3 className="size-3.5" />{paper.topic}</span>}<span>{formatSize(paper.file_size_bytes)} PDF</span></div></div>
      <div className="flex gap-2"><Button className="flex-1 rounded-xl" onClick={() => void openPreview(paper)} disabled={loadingId === paper.id}><Eye data-icon="inline-start" />{loadingId === paper.id ? "Loading…" : "Preview PDF"}</Button><Button variant="outline" className="rounded-xl" aria-label={`Download ${paper.title}`} onClick={() => void download(paper)} disabled={loadingId === paper.id}><Download data-icon="inline-start" />Download</Button></div>
    </Card>)}</div> : <div className="mt-5 rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center"><span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground"><FileText /></span><h2 className="mt-4 text-lg font-semibold">{papers.length ? "No papers match those filters" : "Question papers are on the way"}</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">{papers.length ? "Try another exam, paper format or search term." : "Our team is adding verified previous-year PDFs. Check back soon for full exam, subject-wise and topic-wise papers."}</p>{papers.length > 0 && <Button variant="outline" className="mt-5" onClick={() => { setSearch(""); setExam("All exams"); setSubExam("All sub-exams"); setKind("All formats") }}>Clear filters</Button>}</div>}
    {activePaper && <div role="presentation" className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) { setActivePaper(null); setPreviewUrl("") } }}><section role="dialog" aria-modal="true" aria-labelledby="paper-preview-title" className="flex h-[min(92dvh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl"><header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6"><div className="min-w-0"><h2 id="paper-preview-title" className="truncate font-semibold">{activePaper.title}</h2><p className="mt-0.5 text-xs text-muted-foreground">{activePaper.exam_name} · {activePaper.exam_year}</p></div><div className="flex shrink-0 items-center gap-2"><Button variant="outline" size="sm" onClick={() => void download(activePaper)}><Download data-icon="inline-start" />Download</Button><Button variant="ghost" size="icon" aria-label="Close PDF preview" onClick={() => { setActivePaper(null); setPreviewUrl("") }}><X /></Button></div></header><iframe title={`PDF preview: ${activePaper.title}`} src={previewUrl} className="min-h-0 flex-1 bg-muted" /></section></div>}
  </>
}
