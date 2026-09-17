import { createHash } from "node:crypto"
import { createAdminClient } from "@/lib/supabase/server"

const SOURCES = [
  // Central recruiting agencies. SSC, HSSC and UKSSSC were already synced and are intentionally not fetched again.
  { name: "UPSC", urls: ["https://upsc.gov.in/", "https://upsconline.nic.in/"] },
  { name: "Railway RRB", urls: ["https://rrb.indianrailways.gov.in/", "https://www.rrbcdg.gov.in/", "https://indianrailways.gov.in/"] },
  { name: "IBPS", urls: ["https://www.ibps.in/"] },
  { name: "NTA", urls: ["https://www.nta.ac.in/", "https://exams.nta.ac.in/"] },
  { name: "India Post", urls: ["https://www.indiapost.gov.in/"] },
  { name: "DRDO", urls: ["https://www.drdo.gov.in/"] },
  { name: "ISRO", urls: ["https://www.isro.gov.in/Careers.html"] },
  { name: "BARC", urls: ["https://recruit.barc.gov.in/"] },
  { name: "AIIMS", urls: ["https://aiimsexams.ac.in/"] },
  { name: "RBI", urls: ["https://opportunities.rbi.org.in/"] },
  { name: "NABARD", urls: ["https://www.nabard.org/careers-notices.aspx"] },
  { name: "SEBI", urls: ["https://www.sebi.gov.in/jobs.html"] },
  { name: "LIC", urls: ["https://licindia.in/careers"] },
  { name: "EPFO", urls: ["https://www.epfindia.gov.in/site_en/Careers.php"] },
  { name: "ESIC", urls: ["https://www.esic.gov.in/recruitments"] },
  { name: "FCI", urls: ["https://fci.gov.in/careers"] },
  // State public service commissions and staff selection boards
  { name: "Haryana HPSC", urls: ["https://hpsc.gov.in/"] },
  { name: "Uttarakhand UKPSC", urls: ["https://psc.uk.gov.in/"] },
  { name: "Uttar Pradesh UPPSC", urls: ["https://uppsc.up.nic.in/"] },
  { name: "Uttar Pradesh UPSSSC", urls: ["https://upsssc.gov.in/"] },
  { name: "Bihar BPSC", urls: ["https://www.bpsc.bih.nic.in/"] },
  { name: "Bihar BTSC", urls: ["https://btsc.bihar.gov.in/"] },
  { name: "Rajasthan RPSC", urls: ["https://rpsc.rajasthan.gov.in/"] },
  { name: "Rajasthan RSSB", urls: ["https://rssb.rajasthan.gov.in/"] },
  { name: "Madhya Pradesh MPPSC", urls: ["https://mppsc.mp.gov.in/"] },
  { name: "Madhya Pradesh ESB", urls: ["https://esb.mp.gov.in/"] },
  { name: "Maharashtra MPSC", urls: ["https://mpsc.gov.in/"] },
  { name: "Gujarat GPSC", urls: ["https://gpsc.gujarat.gov.in/"] },
  { name: "West Bengal WBPSC", urls: ["https://psc.wb.gov.in/"] },
  { name: "Jharkhand JPSC", urls: ["https://www.jpsc.gov.in/"] },
  { name: "Chhattisgarh CGPSC", urls: ["https://psc.cg.gov.in/"] },
  { name: "Odisha OPSC", urls: ["https://www.opsc.gov.in/"] },
  { name: "Punjab PPSC", urls: ["https://ppsc.gov.in/"] },
  { name: "Himachal HPPSC", urls: ["https://hppsc.hp.gov.in/"] },
  { name: "Andhra Pradesh APPSC", urls: ["https://psc.ap.gov.in/"] },
  { name: "Telangana TSPSC", urls: ["https://websitenew.tspsc.gov.in/"] },
  { name: "Karnataka KPSC", urls: ["https://kpsc.kar.nic.in/"] },
  { name: "Tamil Nadu TNPSC", urls: ["https://www.tnpsc.gov.in/"] },
  { name: "Kerala PSC", urls: ["https://www.keralapsc.gov.in/"] },
  { name: "Assam APSC", urls: ["https://apsc.nic.in/"] },
  { name: "Goa GPSC", urls: ["https://gpsc.goa.gov.in/"] },
  { name: "Sikkim PSC", urls: ["https://spsc.sikkim.gov.in/"] },
  { name: "Tripura PSC", urls: ["https://tpsc.tripura.gov.in/"] },
  { name: "Manipur PSC", urls: ["https://mpscmanipur.gov.in/"] },
  { name: "Meghalaya PSC", urls: ["https://mpsc.nic.in/"] },
  { name: "Mizoram PSC", urls: ["https://mpsc.mizoram.gov.in/"] },
  { name: "Nagaland PSC", urls: ["https://npsc.nagaland.gov.in/"] },
  { name: "Arunachal Pradesh PSC", urls: ["https://appsc.gov.in/"] },
  { name: "DSSSB", urls: ["https://dsssb.delhi.gov.in/"] },
  { name: "Jammu Kashmir PSC", urls: ["https://jkpsc.nic.in/"] },
  { name: "Jammu Kashmir SSB", urls: ["https://jkssb.nic.in/"] },
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
      const notices = new Map<string, string>()
      const failures: string[] = []
      let successfulFetches = 0
      const fetchTimeout = 10000
      const fetchJobs: Promise<void>[] = []
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
        const [noticeTitle, ...detailLines] = noticeText.split("\n").map((line) => line.trim()).filter(Boolean)
        const details = detailLines.filter((line) => !/^Notice date:\s*$/i.test(line))
        const detailHtml = details.length
          ? `<h2>Important information</h2><ul>${details.map((detail) => `<li>${detail.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</li>`).join("")}</ul>`
          : ""
        const description = `${detailHtml}<p>This update was discovered from the official ${source.name} notice. Verify the complete notification, eligibility, dates, vacancies, fees and application instructions in the official source.</p>`
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
