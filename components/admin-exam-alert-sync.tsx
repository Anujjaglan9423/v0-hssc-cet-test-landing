"use client"

import { useState } from "react"
import { CheckCircle2, Loader2, RefreshCw, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SyncResult {
  source: string
  ok: boolean
  discovered?: number
  inserted?: number
  warnings?: string[]
  error?: string
}

interface SyncResponse {
  fetchedAt?: string
  results?: SyncResult[]
  error?: string
}

export function AdminExamAlertSync() {
  const [isSyncing, setIsSyncing] = useState(false)
  const [response, setResponse] = useState<SyncResponse | null>(null)

  async function handleSync() {
    setIsSyncing(true)
    setResponse(null)
    try {
      const result = await fetch("/api/exam-alerts/sync", { method: "POST" })
      const data = (await result.json()) as SyncResponse
      if (!result.ok) throw new Error(data.error || "Sync failed")
      setResponse(data)
    } catch (error) {
      setResponse({ error: error instanceof Error ? error.message : "Sync failed" })
    } finally {
      setIsSyncing(false)
    }
  }

  const inserted = response?.results?.reduce((total, result) => total + (result.inserted ?? 0), 0) ?? 0
  const failed = response?.results?.filter((result) => !result.ok).length ?? 0

  return (
    <div className="space-y-3">
      <Button type="button" onClick={handleSync} disabled={isSyncing} className="gap-2">
        {isSyncing ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
        {isSyncing ? "Syncing official sources…" : "Sync official sources"}
      </Button>
      {response && (
        <div className="rounded-lg border bg-muted/30 p-3 text-sm" aria-live="polite">
          {response.error ? (
            <p className="flex items-center gap-2 text-destructive"><XCircle className="h-4 w-4" />{response.error}</p>
          ) : (
            <>
              <p className="flex items-center gap-2 font-medium"><CheckCircle2 className="h-4 w-4 text-emerald-600" />Sync finished: {inserted} new alerts added{failed ? `, ${failed} source${failed === 1 ? "" : "s"} failed` : ""}.</p>
              <div className="mt-2 grid gap-1 text-muted-foreground sm:grid-cols-2">
                {response.results?.map((result) => <span key={result.source}>{result.source}: {result.ok ? `${result.discovered ?? 0} found, ${result.inserted ?? 0} added` : result.error}</span>)}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
