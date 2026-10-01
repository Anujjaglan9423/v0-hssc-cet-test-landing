import { createHash } from "node:crypto"
import { PDFParse } from "pdf-parse"
import { createAdminClient } from "@/lib/supabase/server"

const SOURCES = [
  { name: "SSC", urls: ["https://ssc.gov.in/", "https://ssc.gov.in/for-candidates"] },
  { name: "HSSC", urls: ["https://hssc.gov.in/"] },
  { name: "UKSSSC", urls: ["https://sssc.uk.gov.in/"] },
  { name: "UKPSC", urls: ["https://psc.uk.gov.in/"] },
  { name: "RRB", urls: ["https://rrb.indianrailways.gov.in/", "https://www.rrbcdg.gov.in/", "https://indianrailways.gov.in/"] },
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

export async function extractNoticeSummary(url: string, fallbackTitle = "Official notification") {
  try {
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 HSSC-CET-Alert-Bot/1.0", accept: "application/pdf,text/html" }, signal: AbortSignal.timeout(15000), cache: "no-store" })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const contentType = response.headers.get("content-type") ?? ""
    let pdfBytes: Buffer

    if (contentType.includes("pdf") || /\.pdf(?:$|[?#])/i.test(url)) {
      pdfBytes = Buffer.from(await response.arrayBuffer())
    } else {
      // Notice-board URLs often return HTML or a redirect page. Find the actual
      // PDF in href/data attributes and JavaScript strings before parsing it.
      const html = await response.text()
      const candidates = [
        ...[...html.matchAll(/(?:href|data-href|url|downloadUrl)\s*[:=]\s*["']([^"']+\.pdf(?:[?#][^"']*)?)["']/gi)].map((match) => match[1]),
        ...[...html.matchAll(/(?:https?:)?\/\/[^\s"'<>]+\.pdf(?:[?#][^\s"'<>]*)?/gi)].map((match) => match[0]),
        ...[...html.matchAll(/(?:href|data-href)=["']([^"']+)["']/gi)].map((match) => match[1]).filter((href) => /pdf|download|attachment|notification/i.test(href)),
      ]
        .map((href) => href.replaceAll("\\\\/", "/").replaceAll("&amp;", "&"))
      const pdfUrl = candidates.map((href) => absoluteUrl(url, href)).find(Boolean)
      if (!pdfUrl) return { text: "", extracted: false, bullets: [] as string[] }
      const pdfResponse = await fetch(pdfUrl, { headers: { "user-agent": "Mozilla/5.0 HSSC-CET-Alert-Bot/1.0", accept: "application/pdf,*/*" }, signal: AbortSignal.timeout(15000), cache: "no-store" })
      if (!pdfResponse.ok) throw new Error(`PDF HTTP ${pdfResponse.status}`)
      pdfBytes = Buffer.from(await pdfResponse.arrayBuffer())
    }

    // Some government servers incorrectly label PDFs as octet-stream.
    if (pdfBytes.subarray(0, 4).toString() !== "%PDF") throw new Error("Downloaded document is not a PDF")
    const parser = new PDFParse({ data: pdfBytes })
    const result = await parser.getText()
    await parser.destroy()
    const text = result.text.replace(/\s+/g, " ").trim().slice(0, 12000)
    const find = (pattern: RegExp) => text.match(pattern)?.[1]?.trim()
    const date = "\\d{1,2}[\\/. -](?:\\d{1,2}|[A-Za-z]{3,9})[\\/. -]20\\d{2}"
    const lastDate = find(new RegExp(`(?:last date|closing date|apply before|submission|available till|available up to|valid till|deadline).*?(${date})`, "i"))
    const dateRange = text.match(new RegExp(`(?:from|between)\\s+(${date}).{0,80}?(?:to|till|until)\\s+(${date})`, "i"))
    const publishedDate = find(new RegExp(`(?:uploaded|published|issued|declared|released).*?(${date})`, "i"))
    const fee = find(/(?:application fee|exam fee|fee).*?(₹?\s?[\d,]+)/i)
    const qualification = find(/(?:educational qualification|eligibility|qualification)\s*[:\-]?\s*(.{20,220}?)(?:\.|\s{2,}|age limit|pay scale)/i)
    const action = text.match(/(?:candidates? (?:may|should|are advised to)|applicants? (?:must|should)|download|login|apply online|check your)[^.]{20,240}/i)?.[0]?.trim()
    const bullets = [
      publishedDate && `Published/issued: ${publishedDate}`,
      lastDate && `Important deadline: ${lastDate}`,
      dateRange && `Notice window: ${dateRange[1]} to ${dateRange[2]}`,
      fee && `Fee mentioned in the notice: ${fee}`,
      qualification && `Eligibility/qualification: ${qualification}`,
      action && `What to do next: ${action}`,
    ].filter((value): value is string => Boolean(value))
    return { text, extracted: text.length > 20, bullets }
  } catch (error) {
    console.warn("[v0] Notice PDF extraction failed:", url, error instanceof Error ? error.message : error)
    return { text: "", extracted: false, bullets: [] as string[] }
  }
}

function collectOfficialLinks(value: unknown, links = new Map<string, string>(), context = "official notice", allowedHosts: string[] = ["ssc.gov.in"], attachmentBase = "https://ssc.gov.in/api/attachment/") {
  if (typeof value === "string") {
    for (const match of value.matchAll(/https?:\/\/[^\s"'<>]+/gi)) {
      const url = match[0].replace(/[),.;]+$/, "").replaceAll("\\", "/")
      if (allowedHosts.some((host) => url.includes(host)) && /pdf|notice|notification|result|admit|exam/i.test(url)) links.set(url, context)
    }
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectOfficialLinks(item, links, context, allowedHosts, attachmentBase))
  } else if (value && typeof value === "object") {
    const record = value as Record<string, unknown>
    const title = String(record.headline ?? record.title ?? record.name ?? context)
    const path = typeof record.path === "string" ? record.path.replaceAll("\\", "/") : ""
    if (path) links.set(`${attachmentBase}${path.replace(/^\//, "")}`, title)
    Object.values(record).forEach((item) => collectOfficialLinks(item, links, title, allowedHosts, attachmentBase))
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
            const sourceUrl = source.urls[0]
            const sourceHost = new URL(sourceUrl).hostname.replace(/^www\./, "")
            collectOfficialLinks(await response.json(), notices, `${source.name} notice`, [sourceHost], `${sourceUrl.replace(/\/$/, "")}/api/attachment/`)
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
              const matchIndex = match.index ?? 0
              const context = clean(html.slice(Math.max(0, matchIndex - 700), Math.min(html.length, matchIndex + match[0].length + 700)))
              const details = context.match(/(?:opening date|start date|application start|last date|closing date|end date|application fee|exam fee|fee|notice date|published|important dates?)\s*[:\-]?\s*([^|;]{1,80})/gi)?.join("; ")
              const noticeDate = context.match(/\b(?:0?[1-9]|[12]\d|3[01])[/-](?:0?[1-9]|1[0-2])[/-](?:20\d{2})\b|\b20\d{2}[/-](?:0?[1-9]|1[0-2])[/-](?:0?[1-9]|[12]\d|3[01])\b/gi)?.[0]
              const isNotice = /pdf|notice|notification|recruit|admit|answer|result|exam|vacan|advert|candidate|cgl|chsl|constable|group-d|ntpc/i.test(`${href} ${title}`)
              if (href && title.length >= 8 && isNotice) notices.set(href, [title, noticeDate ? `Notice date: ${noticeDate}` : "", details ?? ""].filter(Boolean).join("\n"))
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
      for (const [url, noticeText] of [...notices].slice(0, 100)) {
        const [rawNoticeTitle, ...detailLines] = noticeText.split("\n").map((line) => line.trim()).filter(Boolean)
        const noticeTitle = rawNoticeTitle
          .replace(/\s*(?:[-|:]\s*)?(?:click\s+here|read\s+more|view\s+notice)\s*$/i, "")
          .replace(/\s+/g, " ")
          .trim()
        const extracted = await extractNoticeSummary(url, noticeTitle)
        const details = [...detailLines.filter((line) => !/^Notice date:\s*$/i.test(line)), ...(extracted.bullets ?? []).filter((detail): detail is string => Boolean(detail))]
        const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
        const detailHtml = details.length
          ? `<h2>Important details from the official notice</h2><ul>${details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>`
          : ""
        const extractedHtml = extracted.extracted
          ? `<h2>What we found</h2><p>We downloaded and read the linked official notice. The notice text is available below so candidates can understand the update without relying on a raw government heading.</p><blockquote>${escapeHtml(extracted.text.slice(0, 5000))}</blockquote>`
          : ""
        const description = `${detailHtml}${extractedHtml}<h2>What to do next</h2><p>This ${source.name} notice may affect candidates planning to apply, download an admit card, check a result or complete the next stage of the process. Review the extracted dates, eligibility and fee details above, then open the official notice for the complete instructions and use the official link to complete any required action before the deadline.</p>`
        const { data: exists, error: lookupError } = await supabase.from("blogs").select("id,description,title").eq("featured_image_url", url).maybeSingle()
        if (lookupError) throw new Error(`Database lookup failed: ${lookupError.message}`)
        if (exists) {
          if (!exists.description || /Official update discovered on/i.test(exists.description)) {
            const { error: updateError } = await supabase.from("blogs").update({ description, title: `${source.name}: ${noticeTitle}` }).eq("id", exists.id)
            if (updateError) throw new Error(`Database update failed: ${updateError.message}`)
          }
          continue
        }
        const { error: insertError } = await supabase.from("blogs").insert({
          title: `${source.name}: ${noticeTitle}`,
          slug: slugify(`${source.name}-${url}`),
          description,
          category: "Exam Alert",
          featured_image_url: url,
          status: "publish",
          meta_title: `${source.name}: ${noticeTitle}`,
          meta_description: `Official exam notification discovered on ${source.name}.`,
          tags: [source.name, "Exam Alert", source.name.startsWith("Haryana") ? "Haryana" : source.name.startsWith("Uttarakhand") ? "Uttarakhand" : source.name],
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
