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
    .or("featured_image_url.ilike.%hssc.gov.in%,featured_image_url.ilike.%hpsc.gov.in%,featured_image_url.ilike.%sssc.uk.gov.in%,featured_image_url.ilike.%psc.uk.gov.in%,featured_image_url.ilike.%rrb.indianrailways.gov.in%,featured_image_url.ilike.%rrbcdg.gov.in%,featured_image_url.ilike.%indianrailways.gov.in%,featured_image_url.ilike.%ssc.gov.in%")
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("[v0] Failed to load exam alerts:", error.message)
    return []
  }

  return (data ?? []).map((item) => {
    const source = `${item.title} ${item.featured_image_url ?? ""} ${Array.isArray(item.tags) ? item.tags.join(" ") : ""}`.toLowerCase()
    const categoryKey = source.includes("hssc") || source.includes("hpsc") ? "haryana" : source.includes("uksssc") || source.includes("ukpsc") || source.includes("uk.gov.in") ? "uttarakhand" : source.includes("rrb") || source.includes("railway") || source.includes("indianrailways") ? "railway" : source.includes("//ssc.gov.in") || source.includes("staff selection") || /\bssc[:\s]/.test(source) ? "ssc" : "haryana"
    const region = categoryKey === "uttarakhand" ? "Uttarakhand" : categoryKey === "railway" ? "Railway" : categoryKey === "ssc" ? "SSC" : "Haryana"
    const authority = source.includes("hpsc") ? "HPSC" : source.includes("hssc") ? "HSSC" : source.includes("uksssc") ? "UKSSSC" : source.includes("ukpsc") ? "UKPSC" : categoryKey === "railway" ? "RRB" : "SSC"
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
