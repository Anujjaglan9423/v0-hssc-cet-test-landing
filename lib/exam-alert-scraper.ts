import { createHash } from "node:crypto"
import { createAdminClient } from "@/lib/supabase/server"

const SOURCES = [
  { name: "HSSC", url: "https://hssc.gov.in/" },
  { name: "UKSSSC", url: "https://sssc.uk.gov.in/" },
  { name: "UKPSC", url: "https://psc.uk.gov.in/" },
  { name: "HPSC", url: "https://hpsc.gov.in/" },
  { name: "Railway", url: "https://www.rrbcdg.gov.in/" },
  { name: "SSC", url: "https://ssc.gov.in/" },
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

export async function scrapeGovernmentNotices() {
  const supabase = createAdminClient()
  const results = []

  for (const source of SOURCES) {
    const startedAt = Date.now()
    try {
      const response = await fetch(source.url, { headers: { "user-agent": "HSSC-CET-Alert-Bot/1.0 (+https://hssc-cet.com)" }, signal: AbortSignal.timeout(20000), cache: "no-store" })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const html = await response.text()
      const notices = new Map<string, string>()
      for (const match of html.matchAll(LINK_PATTERN)) {
        const href = absoluteUrl(source.url, match[1])
        const title = clean(match[2])
        if (href && title.length >= 8 && (/pdf|notice|notification|recruit|admit|answer|result|exam|vacan|advert/i.test(`${href} ${title}`))) notices.set(href, title)
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
      results.push({ source: source.name, ok: true, discovered: notices.size, inserted, durationMs: Date.now() - startedAt })
    } catch (error) {
      results.push({ source: source.name, ok: false, error: error instanceof Error ? error.message : "Unknown scraper error", durationMs: Date.now() - startedAt })
    }
  }

  return { fetchedAt: new Date().toISOString(), results }
}

export { SOURCES }
