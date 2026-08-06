import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('[v0] Missing Supabase config')
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Fetch all tests with exam and category info, exclude full tests
    const { data: tests, error } = await supabase
      .from('tests')
      .select(`
        id,
        title,
        description,
        total_questions,
        duration,
        difficulty,
        test_type,
        exam_id,
        exams(name, slug, category_id, exam_categories(name, slug))
      `)
      .neq('test_type', 'full')
      .eq('is_active', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('[v0] Error fetching tests:', error)
      return NextResponse.json(
        { error: 'Failed to fetch tests' },
        { status: 500 }
      )
    }

    return NextResponse.json({ tests: tests || [] })
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
