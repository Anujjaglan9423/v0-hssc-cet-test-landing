import { createAdminClient } from "@/lib/supabase/server"

export type ExamAlert = {
  id: string
  title: string
  slug: string
  description: string | null
  category: string | null
  createdAt: string
  sourceUrl: string | null
  region: "Haryana" | "Uttarakhand" | "Railway" | "SSC"
  authority: string
  categoryKey: "haryana" | "uttarakhand" | "railway" | "ssc"
}

export async function getExamAlertBySlug(slug: string): Promise<ExamAlert | null> {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase.from("blogs").select("id,title,slug,description,category,created_at,featured_image_url,tags,status").eq("slug", slug).eq("status", "publish").maybeSingle()
    const isExamAlert = data && (/exam\s*alerts?/i.test(data.category ?? "") || /(?:ssc|hssc|uksssc|ukpsc|rrb|railway|notification|notice)/i.test(`${data.title} ${data.featured_image_url ?? ""}`))
    if (error || !data || !isExamAlert) return null
    const source = `${data.title} ${data.featured_image_url ?? ""} ${Array.isArray(data.tags) ? data.tags.join(" ") : ""}`.toLowerCase()
    const categoryKey = source.includes("hssc") ? "haryana" : source.includes("uksssc") || source.includes("ukpsc") ? "uttarakhand" : source.includes("rrb") || source.includes("railway") ? "railway" : "ssc"
    return { id: data.id, title: data.title, slug: data.slug, description: data.description, category: data.category, createdAt: data.created_at, sourceUrl: data.featured_image_url, region: categoryKey === "uttarakhand" ? "Uttarakhand" : categoryKey === "railway" ? "Railway" : categoryKey === "ssc" ? "SSC" : "Haryana", authority: source.includes("hssc") ? "HSSC" : source.includes("uksssc") ? "UKSSSC" : source.includes("ukpsc") ? "UKPSC" : categoryKey === "railway" ? "RRB" : "SSC", categoryKey }
  } catch { return null }
}

export async function getExamAlerts(limit = 20): Promise<ExamAlert[]> {
  let supabase: ReturnType<typeof createAdminClient>

  try {
    supabase = createAdminClient()
  } catch (error) {
    console.error("[v0] Supabase is not configured for exam alerts:", error)
    return []
  }

  const { data, error } = await supabase
    .from("blogs")
    .select("id,title,slug,description,category,created_at,featured_image_url,tags,status")
    .eq("status", "publish")
    .eq("category", "Exam Alert")
    .or("title.ilike.%SSC:%,title.ilike.%HSSC:%,title.ilike.%UKSSSC:%,title.ilike.%UKPSC:%,title.ilike.%RRB:%,featured_image_url.ilike.%ssc.gov.in%,featured_image_url.ilike.%hssc.gov.in%,featured_image_url.ilike.%sssc.uk.gov.in%,featured_image_url.ilike.%psc.uk.gov.in%,featured_image_url.ilike.%indianrailways.gov.in%,featured_image_url.ilike.%rrbcdg.gov.in%")
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("[v0] Failed to load exam alerts:", error.message)
    return []
  }

  return (data ?? []).map((item) => {
    const source = `${item.title} ${item.featured_image_url ?? ""} ${Array.isArray(item.tags) ? item.tags.join(" ") : ""}`.toLowerCase()
    const categoryKey = source.includes("hssc") ? "haryana" : source.includes("uksssc") || source.includes("ukpsc") || source.includes("uk.gov.in") ? "uttarakhand" : source.includes("rrb") || source.includes("railway") || source.includes("indianrailways") ? "railway" : source.includes("//ssc.gov.in") || source.includes("staff selection") || /\bssc[:\s]/.test(source) ? "ssc" : "haryana"
    const region = categoryKey === "uttarakhand" ? "Uttarakhand" : categoryKey === "railway" ? "Railway" : categoryKey === "ssc" ? "SSC" : "Haryana"
    const authority = source.includes("hssc") ? "HSSC" : source.includes("uksssc") ? "UKSSSC" : source.includes("ukpsc") ? "UKPSC" : categoryKey === "railway" ? "RRB" : "SSC"
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      description: item.description,
      category: item.category,
      createdAt: item.created_at,
      sourceUrl: item.featured_image_url,
      region,
      authority,
      categoryKey,
    }
  })
}
