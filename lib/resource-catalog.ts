import records from "./resource-catalog-data.json"
export type Resource = { path: string; title: string; description: string; group: string }
export const resources: Resource[] = records
export const resourceGroups = ["Start here", "Exam guides", "Syllabus guides", "Haryana GK chapters", "Current affairs topics", "Monthly current affairs", "Preparation guides", "Study resources"]

/** Deterministic related reading; no behavioral tracking or fabricated recommendations. */
export function relatedResources(path: string, limit = 4): Resource[] {
  const current = resources.find(item => item.path === path)
  return resources.filter(item => item.path !== path && item.group === current?.group).sort((a,b) => {
    const tokens = new Set((current?.title || "").toLowerCase().split(/\W+/).filter(t => t.length > 3))
    const score = (r: Resource) => r.title.toLowerCase().split(/\W+/).filter(t => tokens.has(t)).length
    return score(b) - score(a) || a.title.localeCompare(b.title)
  }).slice(0, limit)
}
