"use client"

import { useMemo, useRef, useState } from "react"
import { cleanupUnlinkedPreviousYearPaperUploads, savePreviousYearPapersBatch } from "@/lib/actions/previous-year-papers"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileSpreadsheet, Loader2, Upload } from "lucide-react"

type PaperType = "full" | "subject" | "topic"
type ImportRow = {
  rowNumber: number
  title: string
  exam_name: string
  sub_exam_name: string | null
  paper_type: PaperType
  subject: string | null
  topic: string | null
  exam_year: number
  file: File | null
  fileName: string
  error: string | null
}
type ParseResult = { rows: ImportRow[]; error: string | null }

const MAX_CSV_BYTES = 1 * 1024 * 1024
const MAX_PDF_BYTES = 50 * 1024 * 1024
const MAX_IMPORT_ROWS = 50
const paperFormat: Record<string, PaperType> = {
  "full exam": "full",
  full: "full",
  "subject-wise": "subject",
  subject: "subject",
  "topic-wise": "topic",
  topic: "topic",
}
const labelByType: Record<PaperType, string> = { full: "Full exam", subject: "Subject-wise", topic: "Topic-wise" }

function parseCsvRecords(source: string) {
  const records: string[][] = []
  let record: string[] = []
  let field = ""
  let quoted = false

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index]
    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        field += '"'
        index += 1
      } else if (character === '"') {
        quoted = false
      } else {
        field += character
      }
    } else if (character === '"' && field.length === 0) {
      quoted = true
    } else if (character === ",") {
      record.push(field)
      field = ""
    } else if (character === "\n" || character === "\r") {
      if (character === "\r" && source[index + 1] === "\n") index += 1
      record.push(field)
      if (record.some((cell) => cell.trim())) records.push(record)
      record = []
      field = ""
    } else {
      field += character
    }
  }

  if (quoted) throw new Error("The CSV contains a quote that was not closed.")
  record.push(field)
  if (record.some((cell) => cell.trim())) records.push(record)
  return records
}

function parseImportCsv(source: string, files: File[]): ParseResult {
  if (!source.trim()) return { rows: [], error: null }

  try {
    const records = parseCsvRecords(source.replace(/^\uFEFF/, ""))
    if (records.length < 2) return { rows: [], error: "The CSV needs a header row and at least one paper row." }

    const headers = records[0].map((header) => header.trim().toLowerCase())
    const requiredHeaders = ["display_title", "exam", "paper_format", "exam_year", "question_paper_pdf"]
    const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header))
    if (missingHeaders.length) return { rows: [], error: `Missing CSV columns: ${missingHeaders.join(", ")}.` }
    if (records.length - 1 > MAX_IMPORT_ROWS) return { rows: [], error: `Import up to ${MAX_IMPORT_ROWS} papers at a time.` }

    const column = (name: string) => headers.indexOf(name)
    const fileMap = new Map<string, File[]>()
    for (const file of files) {
      const key = file.name.trim().toLowerCase()
      fileMap.set(key, [...(fileMap.get(key) ?? []), file])
    }
    const referencedNames = new Set<string>()

    const rows = records.slice(1).map((cells, index): ImportRow => {
      const value = (name: string) => {
        const position = column(name)
        return position < 0 ? "" : (cells[position] ?? "").trim()
      }
      const title = value("display_title")
      const examName = value("exam")
      const subExam = value("sub_exam") || null
      const format = paperFormat[value("paper_format").toLowerCase()]
      const subject = value("subject") || null
      const topic = value("topic") || null
      const yearValue = value("exam_year")
      const examYear = Number(yearValue)
      const fileReference = value("question_paper_pdf").replaceAll("\\", "/").split(/[?#]/)[0]
      let fileName = fileReference.split("/").filter(Boolean).pop() ?? ""
      try { fileName = decodeURIComponent(fileName) } catch { /* Keep the literal name when the path is not URL encoded. */ }
      const matches = fileMap.get(fileName.toLowerCase()) ?? []
      let file: File | null = matches.length === 1 ? matches[0] : null
      const errors: string[] = []

      if (!title || title.length > 160) errors.push("Add a display title (max 160 characters).")
      if (!examName || examName.length > 120) errors.push("Add an exam name (max 120 characters).")
      if (!format) errors.push("Paper format must be Full exam, Subject-wise, or Topic-wise.")
      if (!/^\d{4}$/.test(yearValue) || !Number.isInteger(examYear) || examYear < 1950 || examYear > 2100) errors.push("Enter a valid exam year.")
      if (subExam && subExam.length > 120) errors.push("Sub-exam must be 120 characters or fewer.")
      if (subject && subject.length > 120) errors.push("Subject must be 120 characters or fewer.")
      if (topic && topic.length > 120) errors.push("Topic must be 120 characters or fewer.")
      if (format === "full" && (subject || topic)) errors.push("Full exam papers cannot include a subject or topic.")
      if (format === "subject" && (!subject || topic)) errors.push("Subject-wise papers need a subject and no topic.")
      if (format === "topic" && (!subject || !topic)) errors.push("Topic-wise papers need both a subject and a topic.")
      if (!fileName || !fileName.toLowerCase().endsWith(".pdf")) errors.push("Question paper must point to a PDF file.")
      else if (matches.length === 0) errors.push(`Select the matching PDF: ${fileName}.`)
      else if (matches.length > 1) errors.push(`More than one selected PDF is named ${fileName}.`)
      else if (file && (file.size > MAX_PDF_BYTES || !file.name.toLowerCase().endsWith(".pdf") || (file.type && file.type !== "application/pdf"))) errors.push(`${fileName} is not a valid PDF under 50 MB.`)
      if (file && referencedNames.has(file.name.toLowerCase())) errors.push(`${fileName} is referenced more than once in the CSV.`)
      if (file) referencedNames.add(file.name.toLowerCase())

      return {
        rowNumber: index + 2,
        title,
        exam_name: examName,
        sub_exam_name: subExam,
        paper_type: format ?? "full",
        subject,
        topic,
        exam_year: examYear,
        file,
        fileName,
        error: errors.length ? errors.join(" ") : null,
      }
    })
    return { rows, error: null }
  } catch (error) {
    return { rows: [], error: error instanceof Error ? error.message : "Could not read this CSV file." }
  }
}

export function PreviousYearPapersCsvImport({ onImported }: { onImported: () => Promise<void> }) {
  const csvInputRef = useRef<HTMLInputElement>(null)
  const pdfInputRef = useRef<HTMLInputElement>(null)
  const [csvText, setCsvText] = useState("")
  const [csvName, setCsvName] = useState("")
  const [pdfFiles, setPdfFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState("")
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const parsed = useMemo(() => parseImportCsv(csvText, pdfFiles), [csvText, pdfFiles])
  const validRows = parsed.rows.filter((row) => !row.error)
  const invalidCount = parsed.rows.length - validRows.length

  async function handleCsvChange(file: File | undefined) {
    setError("")
    setMessage("")
    setFileError("")
    setCsvName(file?.name ?? "")
    setCsvText("")
    if (!file) return
    if (!file.name.toLowerCase().endsWith(".csv") || file.size > MAX_CSV_BYTES) {
      setFileError("Choose a CSV file no larger than 1 MB.")
      return
    }
    try {
      setCsvText(await file.text())
    } catch {
      setFileError("Could not read this CSV file.")
    }
  }

  async function importPapers() {
    setError("")
    setMessage("")
    if (!csvText || parsed.error || invalidCount > 0 || validRows.length === 0) return

    setUploading(true)
    setProgress(0)
    let nextIndex = 0
    let completedCount = 0
    let uploadError: Error | null = null
    const allocatedKeys: string[] = []
    const uploadedRows: Array<{ row: ImportRow; storage_key: string }> = []

    try {
      const worker = async () => {
        while (nextIndex < validRows.length && !uploadError) {
          const row = validRows[nextIndex]
          nextIndex += 1
          if (!row.file) continue

          try {
            const urlResponse = await fetch("/api/previous-year-papers/upload-url", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ fileName: row.file.name, fileSizeBytes: row.file.size }),
            })
            const urlResult = await urlResponse.json().catch(() => null) as { uploadUrl?: unknown; storageKey?: unknown; error?: string } | null
            if (!urlResponse.ok || typeof urlResult?.uploadUrl !== "string" || typeof urlResult.storageKey !== "string") {
              throw new Error(urlResult?.error || `Could not prepare the PDF in CSV row ${row.rowNumber}.`)
            }
            allocatedKeys.push(urlResult.storageKey)
            const response = await fetch(urlResult.uploadUrl, {
              method: "PUT",
              headers: { "Content-Type": "application/pdf" },
              body: row.file,
            })
            if (!response.ok) throw new Error(`Cloudflare R2 rejected ${row.file.name} (HTTP ${response.status}). Check the bucket CORS rule and R2 access.`)
            uploadedRows.push({ row, storage_key: urlResult.storageKey })
            completedCount += 1
            setProgress(completedCount)
          } catch (uploadFailure) {
            uploadError = uploadFailure instanceof Error ? uploadFailure : new Error(`Could not upload the PDF in CSV row ${row.rowNumber}.`)
          }
        }
      }

      await Promise.all(Array.from({ length: Math.min(3, validRows.length) }, () => worker()))
      if (uploadError) {
        if (allocatedKeys.length) {
          try { await cleanupUnlinkedPreviousYearPaperUploads(allocatedKeys) }
          catch (cleanupError) { console.error("Could not clean up incomplete CSV paper uploads.", cleanupError) }
        }
        throw uploadError
      }

      await savePreviousYearPapersBatch(uploadedRows.map(({ row, storage_key }) => ({
        title: row.title,
        exam_name: row.exam_name,
        sub_exam_name: row.sub_exam_name,
        paper_type: row.paper_type,
        subject: row.subject,
        topic: row.topic,
        exam_year: row.exam_year,
        file_name: row.file?.name ?? row.fileName,
        file_size_bytes: row.file?.size ?? 0,
        storage_key,
      })))
      await onImported()
      setMessage(`${uploadedRows.length} papers uploaded and published successfully.`)
      setCsvText("")
      setCsvName("")
      setPdfFiles([])
      if (csvInputRef.current) csvInputRef.current.value = ""
      if (pdfInputRef.current) pdfInputRef.current.value = ""
    } catch (importError) {
      setError(importError instanceof Error ? importError.message : "Could not import these papers.")
    } finally {
      setUploading(false)
    }
  }

  const inputClass = "mt-1 block w-full rounded-lg border border-input bg-background p-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm"

  return <Card className="rounded-2xl p-5 sm:p-7">
    <div className="mb-5 flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><FileSpreadsheet /></span>
      <div><h2 className="font-semibold">Bulk import from CSV</h2><p className="text-sm text-muted-foreground">Import up to {MAX_IMPORT_ROWS} papers at a time</p></div>
    </div>
    <p className="mb-5 rounded-xl border border-border bg-muted/50 p-3 text-sm leading-6 text-muted-foreground">
      Upload the CSV and the matching PDFs. The <code className="rounded bg-background px-1 py-0.5 text-foreground">question_paper_pdf</code> column can contain a path such as <code className="rounded bg-background px-1 py-0.5 text-foreground">papers/example.pdf</code>; it is matched to the selected PDF by filename. All rows are checked before upload, and papers publish together only after every PDF uploads successfully.
    </p>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-medium">CSV file<input ref={csvInputRef} type="file" accept=".csv,text/csv" className={inputClass} onChange={(event) => void handleCsvChange(event.target.files?.[0])} /><span className="mt-1 block text-xs font-normal text-muted-foreground">{csvName || "CSV must be 1 MB or smaller."}</span></label>
      <label className="text-sm font-medium">Question-paper PDFs<input ref={pdfInputRef} type="file" accept="application/pdf,.pdf" multiple className={inputClass} onChange={(event) => { setPdfFiles(Array.from(event.target.files ?? [])); setError(""); setMessage("") }} /><span className="mt-1 block text-xs font-normal text-muted-foreground">Select all PDFs referenced by the CSV, up to 50 MB each.</span></label>
    </div>
    {(fileError || parsed.error || error) && <p role="alert" className="mt-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{fileError || parsed.error || error}</p>}
    {parsed.rows.length > 0 && <>
      <div className="mt-5 flex flex-wrap items-center gap-2 text-sm" aria-live="polite">
        <Badge variant="secondary">{parsed.rows.length} rows</Badge>
        <Badge variant={invalidCount ? "destructive" : "default"}>{invalidCount ? `${invalidCount} need attention` : `${validRows.length} ready`}</Badge>
        {uploading && <span className="text-muted-foreground">Uploading {progress} of {validRows.length} PDFs…</span>}
      </div>
      <div className="mt-3 max-h-72 overflow-auto rounded-xl border border-border">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="sticky top-0 bg-muted text-xs uppercase text-muted-foreground"><tr><th scope="col" className="px-3 py-2">Row</th><th scope="col" className="px-3 py-2">Paper</th><th scope="col" className="px-3 py-2">Format · year</th><th scope="col" className="px-3 py-2">PDF / status</th></tr></thead>
          <tbody>{parsed.rows.map((row) => <tr key={row.rowNumber} className="border-t border-border align-top"><td className="px-3 py-2 text-muted-foreground">{row.rowNumber}</td><td className="max-w-64 px-3 py-2"><p className="truncate font-medium">{row.title || "Untitled"}</p><p className="truncate text-xs text-muted-foreground">{row.exam_name || "Exam missing"}{row.sub_exam_name ? ` · ${row.sub_exam_name}` : ""}</p></td><td className="whitespace-nowrap px-3 py-2 text-muted-foreground">{labelByType[row.paper_type]} · {Number.isFinite(row.exam_year) ? row.exam_year : "Year missing"}</td><td className="max-w-72 px-3 py-2"><p className="truncate">{row.fileName || "PDF missing"}</p><p className={row.error ? "mt-1 text-xs text-destructive" : "mt-1 text-xs text-primary"}>{row.error || "Ready to upload"}</p></td></tr>)}</tbody>
        </table>
      </div>
    </>}
    {message && <p role="status" className="mt-4 rounded-lg bg-primary/10 p-3 text-sm text-primary">{message}</p>}
    <div className="mt-5">
      <Button type="button" className="rounded-xl" disabled={uploading || !csvText || Boolean(fileError || parsed.error) || invalidCount > 0 || validRows.length === 0} onClick={() => void importPapers()}>
        {uploading ? <><Loader2 className="animate-spin" data-icon="inline-start" />Uploading {progress}/{validRows.length}…</> : <><Upload data-icon="inline-start" />Upload all and publish</>}
      </Button>
    </div>
  </Card>
}
