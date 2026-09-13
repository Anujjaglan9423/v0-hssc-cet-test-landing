import { createAdminClient } from "@/lib/supabase/server"

export type ExamAlert = {
  id: string
  title: string
  slug: string
  description: string | null
  category: string | null
  createdAt: string
  sourceUrl: string | null
  region: "Haryana" | "Uttarakhand"
  authority: string
}

export async function getExamAlerts(limit = 20): Promise<ExamAlert[]> {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from("blogs")
    .select("id,title,slug,description,category,created_at,featured_image_url,tags,status")
    .eq("status", "publish")
    .or("category.eq.Exam Alert,featured_image_url.ilike.%hssc.gov.in%,featured_image_url.ilike.%sssc.uk.gov.in%,featured_image_url.ilike.%psc.uk.gov.in%,featured_image_url.ilike.%hpsc.gov.in%")
    .order("created_at", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("[v0] Failed to load exam alerts:", error.message)
    return []
  }

  return (data ?? []).map((item) => {
    const source = `${item.title} ${item.featured_image_url ?? ""}`.toLowerCase()
    const region = source.includes("uksssc") || source.includes("ukpsc") || source.includes("uk.gov.in") ? "Uttarakhand" : "Haryana"
    const authority = source.includes("hpsc") ? "HPSC" : source.includes("hssc") ? "HSSC" : source.includes("uksssc") ? "UKSSSC" : "UKPSC"
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
    }
  })
}
