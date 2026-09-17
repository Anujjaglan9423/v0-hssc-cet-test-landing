import { createHash } from "node:crypto"
import { createAdminClient } from "@/lib/supabase/server"

const SOURCES = [
  { name: "HSSC", urls: ["https://hssc.gov.in/"] },
  { name: "UKSSSC", urls: ["https://sssc.uk.gov.in/"] },
  { name: "UKPSC", urls: ["https://psc.uk.gov.in/"] },
  { name: "HPSC", urls: ["https://hpsc.gov.in/"] },
  { name: "Railway", urls: ["https://rrb.indianrailways.gov.in/", "https://www.rrbcdg.gov.in/", "https://indianrailways.gov.in/"] },
  { name: "SSC", urls: ["https://ssc.gov.in/", "https://ssc.gov.in/for-candidates"] },
] as const

const LINK_PATTERN = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
const TAG_PATTERN = /<[^>]+>/g

function absoluteUrl(source: string, href: string) {
  try { return new URL(href, source).toString() } catch { return null }
}

function clean(value: string) {
  return value.replace(TAG_PATTERN, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/&amp;/gi, "&").replace(/\s+/g, " ").trim()
}

function slugify(value: string) {
  return `${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${createHash("sha1").update(value).digest("hex").slice(0, 8)}`
}

function collectOfficialLinks(value: unknown, links = new Map<string, string>(), context = "SSC notice") {
  if (typeof value === "string") {
    for (const match of value.matchAll(/https?:\/\/[^\s"'<>]+/gi)) {
      const url = match[0].replace(/[),.;]+$/, "").replaceAll("\\", "/")
      if (/ssc.gov.in|pdf|notice|notification|result|admit|exam/i.test(url)) links.set(url, context)
    }
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectOfficialLinks(item, links, context))
  } else if (value && typeof value === "object") {
    const record = value as Record<string, unknown>
    const title = String(record.headline ?? record.title ?? record.name ?? context)
    const path = typeof record.path === "string" ? record.path.replaceAll("\\", "/") : ""
    if (path) links.set(`https://ssc.gov.in/api/attachment/${path.replace(/^\//, "")}`, title)
    Object.values(record).forEach((item) => collectOfficialLinks(item, links, title))
  }
  return links
}

export async function scrapeGovernmentNotices() {
  const supabase = createAdminClient()
  const results = []

  for (const source of SOURCES) {
    const startedAt = Date.now()
    try {
      const notices = new Map<string, string>()
      const failures: string[] = []
      let successfulFetches = 0
      const fetchTimeout = 10000
      const fetchJobs: Promise<void>[] = []
      if (source.name === "SSC") {
        const apiUrl = "https://ssc.gov.in/api/general-website/portal/notice-boards?page=1&limit=50&contentType=notice-boards&key=createdAt&order=DESC&isAttachment=true&language=english&attributes=id,headline,examId,contentType,redirectUrl,startDate,endDate,language,createdAt"
        fetchJobs.push((async () => {
          try {
            const response = await fetch(apiUrl, { headers: { "user-agent": "Mozilla/5.0 HSSC-CET-Alert-Bot/1.0", accept: "application/json" }, signal: AbortSignal.timeout(fetchTimeout), cache: "no-store" })
            if (!response.ok) throw new Error(`HTTP ${response.status}`)
            successfulFetches += 1
            collectOfficialLinks(await response.json(), notices)
          } catch (error) {
            failures.push(`SSC API: ${error instanceof Error ? error.message : "fetch failed"}`)
          }
        })())
      }
      for (const sourceUrl of source.urls) {
        fetchJobs.push((async () => {
          try {
            const response = await fetch(sourceUrl, { headers: { "user-agent": "Mozilla/5.0 HSSC-CET-Alert-Bot/1.0 (+https://hssc-cet.com)", accept: "text/html,application/xhtml+xml" }, signal: AbortSignal.timeout(fetchTimeout), cache: "no-store" })
            if (!response.ok) throw new Error(`HTTP ${response.status}`)
            successfulFetches += 1
            const html = await response.text()
            for (const match of html.matchAll(LINK_PATTERN)) {
              const href = absoluteUrl(sourceUrl, match[1])
              const title = clean(match[2])
              const isNotice = /pdf|notice|notification|recruit|admit|answer|result|exam|vacan|advert|candidate|cgl|chsl|constable|group-d|ntpc/i.test(`${href} ${title}`)
              if (href && title.length >= 8 && isNotice) notices.set(href, title)
            }
          } catch (error) {
            failures.push(`${sourceUrl}: ${error instanceof Error ? error.message : "fetch failed"}`)
          }
        })())
      }
      await Promise.all(fetchJobs)
      if (successfulFetches === 0) {
        throw new Error(failures.join("; ") || "All official sources failed")
      }

      let inserted = 0
      for (const [url, title] of [...notices].slice(0, 100)) {
        const { data: exists, error: lookupError } = await supabase.from("blogs").select("id").eq("featured_image_url", url).maybeSingle()
        if (lookupError) throw new Error(`Database lookup failed: ${lookupError.message}`)
        if (exists) continue
        const { error: insertError } = await supabase.from("blogs").insert({
          title: `${source.name}: ${title}`,
          slug: slugify(`${source.name}-${url}`),
          description: `Official update discovered on ${source.name}. Open the source link for the original notice.`,
          category: "Exam Alert",
          featured_image_url: url,
          status: "publish",
          meta_title: `${source.name}: ${title}`,
          meta_description: `Official exam notification discovered on ${source.name}.`,
          tags: [source.name, "Exam Alert", source.name === "HSSC" || source.name === "HPSC" ? "Haryana" : source.name === "UKSSSC" || source.name === "UKPSC" ? "Uttarakhand" : source.name],
        })
        if (insertError) throw new Error(`Database insert failed: ${insertError.message}`)
        inserted += 1
      }
      results.push({
        source: source.name,
        ok: true,
        discovered: notices.size,
        inserted,
        warnings: failures.length ? failures : undefined,
        durationMs: Date.now() - startedAt,
      })
    } catch (error) {
      results.push({ source: source.name, ok: false, error: error instanceof Error ? error.message : "Unknown scraper error", durationMs: Date.now() - startedAt })
    }
  }

  return { fetchedAt: new Date().toISOString(), results }
}

export { SOURCES }
