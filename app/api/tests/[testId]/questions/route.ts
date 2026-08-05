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

    console.log('[v0] Fetching questions for test:', testId)

    const { data: questions, error } = await supabase
      .from('questions')
      .select('id, question_text, option_a, option_b, option_c, option_d, correct_answer, explanation, question_order')
      .eq('test_id', testId)
      .order('question_order', { ascending: true })

    if (error) {
      console.error('[v0] Error fetching questions:', error)
      return NextResponse.json(
        { error: 'Failed to fetch questions', details: error },
        { status: 500 }
      )
    }

    console.log('[v0] Questions found:', questions?.length || 0)
    return NextResponse.json({ questions: questions || [] })
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
