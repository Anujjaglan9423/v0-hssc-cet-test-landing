/**
 * Basic public SEO/AdSense deployment smoke check (Node 20+).
 * Usage: node scripts/check-public-pages.mjs
 * This checks responses and basic HTML signals; it cannot verify AdSense approval,
 * interactive mock-test completion, or certified consent management.
 */
import { writeFile } from 'node:fs/promises'

const base = 'https://cettest.site'
async function fetchText(url) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 12000)
  try {
    const response = await fetch(url, { redirect: 'follow', signal: controller.signal, headers: { 'User-Agent': 'CETTEST-Admin-Audit/1.0' } })
    return { status: response.status, finalUrl: response.url, text: await response.text() }
  } finally { clearTimeout(timeout) }
}
const escapeCSV = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`

const xml = await fetchText(`${base}/sitemap.xml`)
if (xml.status !== 200 || !xml.text.includes('<urlset')) throw new Error(`Sitemap not readable: HTTP ${xml.status}`)
const urls = Array.from(xml.text.matchAll(/<loc>\s*(https?:\/\/[^<]+)\s*<\/loc>/g), match => match[1].trim())
console.log(`Found ${urls.length} URLs in live sitemap.`)
const rows = []
for (let i = 0; i < urls.length; i += 4) {
  const batch = urls.slice(i, i + 4)
  const results = await Promise.all(batch.map(async url => {
    try {
      const result = await fetchText(url)
      const html = result.text
      return [url,result.status,result.finalUrl,
        (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '').replace(/\s+/g,' ').trim(),
        /<link[^>]+rel=["']canonical["']/i.test(html) ? 'present' : 'not-found',
        /<script[^>]+type=["']application\/ld\+json["']/i.test(html) ? 'present' : 'not-found',
        /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html) ? 'noindex-possible' : 'check',
        html.match(/<h1\b/gi)?.length ?? 0,'']
    } catch (e) { return [url,'ERROR','','','','','','',String(e)] }
  }))
  rows.push(...results)
  console.log(`Checked ${Math.min(urls.length,i+4)}/${urls.length}`)
}
const headers=['sitemap_url','http_status','final_url','html_title','canonical_element','jsonld_element','robots_hint','h1_count','error']
await writeFile('cettest-live-deployment-check.csv',[headers,...rows].map(row=>row.map(escapeCSV).join(',')).join('\n')+'\n')
try {
 const ads=await fetchText(`${base}/ads.txt`)
 console.log(`ads.txt: HTTP ${ads.status}; publisher line present:`,ads.text.includes('google.com, pub-7892065085240733, DIRECT, f08c47fec0942fa0'))
} catch(e) { console.log('ads.txt: unavailable', String(e)) }
console.log('Saved cettest-live-deployment-check.csv')