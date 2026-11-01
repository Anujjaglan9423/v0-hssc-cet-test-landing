import type { Metadata } from "next"
import MockTestClient from "./mock-test-client"
import { createClient } from "@supabase/supabase-js"

// Categories change with database content; server rendering makes public
// categories discoverable in initial HTML when Supabase allows anonymous reads.
export const dynamic = "force-dynamic"

type Category = { id: string; name: string; slug: string; description: string | null }

async function getPublicCategories(): Promise<Category[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return []

  try {
    const client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init = {}) => fetch(input, {
          ...init,
          signal: AbortSignal.timeout(4500),
        }),
      },
    })
    const { data, error } = await client
      .from("exam_categories")
      .select("id,name,slug,description")
      .eq("is_active", true)
      .order("display_order", { ascending: true })
    if (error) return []
    return (data ?? []) as Category[]
  } catch {
    // Public category links below remain accessible if the API is unavailable.
    return []
  }
}

export const metadata: Metadata = {
  title: "Free Mock Tests 2026 | Haryana CET, UKSSSC, SSC",
  description:
    "Practice free mock tests for Haryana CET, HSSC, UKSSSC, SSC and other government exams. Try the first mock test in each exam without signing up.",
  alternates: { canonical: "/mock-test" },
  openGraph: {
    title: "Free Government Exam Mock Tests | CET TEST",
    description: "Explore timed mock tests for Haryana CET, UKSSSC, SSC and other government exams.",
    url: "/mock-test",
    type: "website",
  },
}

export default async function Page() {
  const initialCategories = await getPublicCategories()
  return <MockTestClient initialCategories={initialCategories} />
}
