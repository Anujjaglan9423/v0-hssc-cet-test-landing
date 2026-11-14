"use client"

import { useState, type FormEvent } from "react"
import { createPaperUploadUrl, deletePreviousYearPaper, listAdminPreviousYearPapers, savePreviousYearPaper, setPreviousYearPaperActive } from "@/lib/actions/previous-year-papers"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Loader2, Trash2, Eye, EyeOff } from "lucide-react"

type Paper = { id: string; title: string; exam_name: string; sub_exam_name: string | null; paper_type: "full" | "subject" | "topic"; subject: string | null; topic: string | null; exam_year: number; file_name: string; file_size_bytes: number; is_active: boolean; created_at: string }
type PaperForm = { title: string; exam_name: string; sub_exam_name: string; paper_type: "full" | "subject" | "topic"; subject: string; topic: string; exam_year: string }
const initialForm: PaperForm = { title: "", exam_name: "", sub_exam_name: "", paper_type: "full", subject: "", topic: "", exam_year: String(new Date().getFullYear()) }
const typeLabel = { full: "Full exam", subject: "Subject-wise", topic: "Topic-wise" }
const formatSize = (bytes: number) => bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`

export function PreviousYearPapersManager({ initialPapers }: { initialPapers: Paper[] }) {
  const [papers, setPapers] = useState(initialPapers)
  const [form, setForm] = useState(initialForm)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function refreshList() { setPapers(await listAdminPreviousYearPapers()) }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setMessage("")
    if (!file) { setError("Select a PDF file to upload."); return }
    if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) { setError("Only PDF files are supported."); return }
    if (file.size > 50 * 1024 * 1024) { setError("The PDF must be 50 MB or smaller."); return }
    setUploading(true)
    try {
      const { uploadUrl, storageKey } = await createPaperUploadUrl(file.name, file.size)
      let response: Response
      try {
        response = await fetch(uploadUrl, { method: "PUT", headers: { "Content-Type": "application/pdf" }, body: file })
      } catch (networkError) {
        console.error("[previous-year-papers] R2 upload request could not connect", {
          origin: window.location.origin,
          message: networkError instanceof Error ? networkError.message : "Unknown network error",
        })
        throw new Error(`Could not connect to Cloudflare R2 from ${window.location.origin}. Check that this exact origin is allowed in the bucket CORS settings for PUT requests with the Content-Type header.`)
      }
      if (!response.ok) {
        console.error("[previous-year-papers] R2 rejected upload", { status: response.status, origin: window.location.origin })
        throw new Error(`Cloudflare R2 rejected the PDF upload (HTTP ${response.status}). Check the bucket CORS rule and R2 bucket access.`)
      }
      await savePreviousYearPaper({ ...form, exam_year: Number(form.exam_year), file_name: file.name, file_size_bytes: file.size }, storageKey)
      setForm(initialForm); setFile(null)
      const fileInput = document.getElementById("paper-pdf") as HTMLInputElement | null
      if (fileInput) fileInput.value = ""
      await refreshList(); setMessage("Paper uploaded and published successfully.")
    } catch (uploadError) { setError(uploadError instanceof Error ? uploadError.message : "Could not upload this paper.") }
    finally { setUploading(false) }
  }

  async function toggleActive(paper: Paper) { try { await setPreviousYearPaperActive(paper.id, !paper.is_active); await refreshList() } catch (actionError) { setError(actionError instanceof Error ? actionError.message : "Could not update paper.") } }
  async function removePaper(paper: Paper) { if (!window.confirm(`Delete “${paper.title}” and its PDF? This cannot be undone.`)) return; try { await deletePreviousYearPaper(paper.id); await refreshList() } catch (actionError) { setError(actionError instanceof Error ? actionError.message : "Could not delete paper.") } }

  const inputClass = "mt-1 h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
  return <div className="space-y-7">
    <div><p className="text-sm font-medium text-primary">CONTENT LIBRARY</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Previous year papers</h1><p className="mt-2 max-w-2xl text-muted-foreground">Upload PDFs and organize them by exam, sub-exam, subject and topic. Published papers are visible before student sign-in.</p></div>
    <Card className="rounded-2xl p-5 sm:p-7"><div className="mb-6 flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Upload /></span><div><h2 className="font-semibold">Add a question paper</h2><p className="text-sm text-muted-foreground">PDF only · up to 50 MB</p></div></div>
      <p className="mb-5 rounded-xl border border-border bg-muted/50 p-3 text-sm leading-6 text-muted-foreground">PDFs upload directly to Cloudflare R2. If an upload reports a connection error, add the page&apos;s exact origin (including <code className="rounded bg-background px-1 py-0.5 text-foreground">https://</code> and any <code className="rounded bg-background px-1 py-0.5 text-foreground">www</code>) to your bucket&apos;s CORS allowed origins. Allow the <code className="rounded bg-background px-1 py-0.5 text-foreground">PUT</code> method and <code className="rounded bg-background px-1 py-0.5 text-foreground">Content-Type</code> request header. The current site origins are <code className="rounded bg-background px-1 py-0.5 text-foreground">https://cettest.site</code>, <code className="rounded bg-background px-1 py-0.5 text-foreground">https://www.cettest.site</code>, and <code className="rounded bg-background px-1 py-0.5 text-foreground">https://workspace-uqgubbth.v0.build</code>.</p>
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">Display title<input required minLength={2} maxLength={160} className={inputClass} placeholder="e.g. CET Group C — General Awareness" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} /></label>
        <label className="text-sm font-medium">Exam<input required maxLength={120} className={inputClass} placeholder="e.g. HSSC CET" value={form.exam_name} onChange={(event) => setForm({ ...form, exam_name: event.target.value })} /></label>
        <label className="text-sm font-medium">Sub-exam <span className="font-normal text-muted-foreground">(optional)</span><input maxLength={120} className={inputClass} placeholder="e.g. Group C, Group D, Police" value={form.sub_exam_name} onChange={(event) => setForm({ ...form, sub_exam_name: event.target.value })} /></label>
        <label className="text-sm font-medium">Paper format<select className={inputClass} value={form.paper_type} onChange={(event) => setForm({ ...form, paper_type: event.target.value as PaperForm["paper_type"], topic: "" })}><option value="full">Full exam</option><option value="subject">Subject-wise</option><option value="topic">Topic-wise</option></select></label>
        {form.paper_type !== "full" && <label className="text-sm font-medium">Subject<input required maxLength={120} className={inputClass} placeholder="e.g. Haryana GK" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} /></label>}
        {form.paper_type === "topic" && <label className="text-sm font-medium">Topic<input required maxLength={120} className={inputClass} placeholder="e.g. Medieval History" value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })} /></label>}
        <label className="text-sm font-medium">Exam year<input required type="number" min={1950} max={2100} className={inputClass} value={form.exam_year} onChange={(event) => setForm({ ...form, exam_year: event.target.value })} /></label>
        <label className="text-sm font-medium sm:col-span-2">Question paper PDF<input id="paper-pdf" required type="file" accept="application/pdf,.pdf" className="mt-1 block w-full rounded-lg border border-input bg-background p-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm" onChange={(event) => setFile(event.target.files?.[0] ?? null)} /><span className="mt-1 block text-xs font-normal text-muted-foreground">PDFs upload directly to Cloudflare R2. Max file size: 50 MB.</span></label>
        {error && <p role="alert" className="sm:col-span-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}{message && <p role="status" className="sm:col-span-2 rounded-lg bg-primary/10 p-3 text-sm text-primary">{message}</p>}
        <div className="sm:col-span-2"><Button type="submit" disabled={uploading} className="rounded-xl">{uploading ? <><Loader2 className="animate-spin" data-icon="inline-start" />Uploading PDF…</> : <><Upload data-icon="inline-start" />Upload and publish</>}</Button></div>
      </form>
    </Card>
    <section><div className="mb-4 flex items-end justify-between gap-4"><div><h2 className="text-xl font-semibold">Uploaded papers</h2><p className="mt-1 text-sm text-muted-foreground">{papers.length} total · {papers.filter((paper) => paper.is_active).length} published</p></div></div>
      {papers.length === 0 ? <Card className="rounded-2xl border-dashed p-10 text-center text-sm text-muted-foreground">No question papers have been uploaded yet.</Card> : <div className="grid gap-3">{papers.map((paper) => <Card key={paper.id} className="flex flex-col gap-4 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-start gap-3"><span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><FileText /></span><div className="min-w-0"><p className="truncate font-semibold">{paper.title}</p><p className="mt-1 text-sm text-muted-foreground">{paper.exam_name}{paper.sub_exam_name ? ` · ${paper.sub_exam_name}` : ""} · {paper.exam_year} · {typeLabel[paper.paper_type]}</p><p className="mt-1 truncate text-xs text-muted-foreground">{paper.file_name} · {formatSize(paper.file_size_bytes)}</p></div></div><div className="flex shrink-0 items-center gap-2"><Badge variant={paper.is_active ? "default" : "secondary"}>{paper.is_active ? "Published" : "Hidden"}</Badge><Button type="button" variant="outline" size="sm" onClick={() => void toggleActive(paper)} aria-label={`${paper.is_active ? "Hide" : "Publish"} ${paper.title}`}>{paper.is_active ? <EyeOff /> : <Eye />}</Button><Button type="button" variant="outline" size="sm" className="text-destructive" onClick={() => void removePaper(paper)} aria-label={`Delete ${paper.title}`}><Trash2 /></Button></div></Card>)}</div>}
    </section>
  </div>
}
