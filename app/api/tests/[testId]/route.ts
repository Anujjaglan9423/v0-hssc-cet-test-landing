import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ testId: string }> }
) {
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

    const { testId } = await params

    const supabase = createClient(supabaseUrl, supabaseKey)

    console.log('[v0] Fetching test with ID:', testId)

    const { data: tests, error } = await supabase
      .from('tests')
      .select('id, title, description, total_questions, duration, difficulty, test_type, exam_id')
      .eq('id', testId)

    if (error) {
      console.error('[v0] Error fetching test:', error)
      return NextResponse.json(
        { error: 'Test not found', details: error },
        { status: 404 }
      )
    }

    if (!tests || tests.length === 0) {
      console.error('[v0] Test not found with ID:', testId)
      return NextResponse.json(
        { error: 'Test not found' },
        { status: 404 }
      )
    }

    console.log('[v0] Test found:', tests[0])
    return NextResponse.json({ test: tests[0] })
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
