import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { testId: string } }
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

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data: results, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('test_id', params.testId)
      .order('score', { ascending: false })
      .order('time_taken', { ascending: true })
      .limit(100)

    if (error) {
      console.error('[v0] Error fetching leaderboard:', error)
      return NextResponse.json(
        { error: 'Failed to fetch leaderboard' },
        { status: 500 }
      )
    }

    // Join with contacts to get user names
    const enrichedResults = await Promise.all(
      results.map(async (result) => {
        // Get the latest contact that matches this result timing
        const { data: contact } = await supabase
          .from('contacts')
          .select('first_name, email, phone')
          .eq('email', result.user_id || 'anonymous')
          .order('created_at', { ascending: false })
          .limit(1)

        return {
          ...result,
          name: contact?.[0]?.first_name || 'Anonymous',
          email: contact?.[0]?.email || '',
          phone: contact?.[0]?.phone || ''
        }
      })
    )

    return NextResponse.json({ leaderboard: enrichedResults })
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
