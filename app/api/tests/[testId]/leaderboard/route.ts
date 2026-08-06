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

    console.log('[v0] Fetching leaderboard for test:', testId)

    // Fetch all test results for this test, ordered by score
    const { data: results, error } = await supabase
      .from('test_results')
      .select('*')
      .eq('test_id', testId)
      .order('percentage', { ascending: false })
      .order('time_taken', { ascending: true })
      .limit(100)

    if (error) {
      console.error('[v0] Error fetching leaderboard results:', error)
      return NextResponse.json(
        { error: 'Failed to fetch leaderboard' },
        { status: 500 }
      )
    }

    console.log('[v0] Found test results:', results?.length || 0)

    // Get contacts that match by email (user_id is stored as email)
    const enrichedResults = await Promise.all(
      (results || []).map(async (result) => {
        try {
          // Match contact by email stored in user_id field
          const { data: contacts } = await supabase
            .from('contacts')
            .select('first_name, email, phone')
            .eq('email', result.user_id)
            .eq('status', 'completed')
            .limit(1)

          const contact = contacts?.[0]

          console.log('[v0] Matched contact for email:', result.user_id, 'Found:', !!contact)

          return {
            id: result.id,
            score: result.score,
            percentage: result.percentage,
            time_taken: result.time_taken,
            created_at: result.created_at,
            name: contact?.first_name || 'Anonymous',
            email: contact?.email || result.user_id || 'N/A',
            phone: contact?.phone || 'N/A'
          }
        } catch (err) {
          console.error('[v0] Error enriching result:', err)
          return {
            id: result.id,
            score: result.score,
            percentage: result.percentage,
            time_taken: result.time_taken,
            created_at: result.created_at,
            name: 'Anonymous',
            email: result.user_id || 'N/A',
            phone: 'N/A'
          }
        }
      })
    )

    console.log('[v0] Enriched leaderboard results:', enrichedResults.length)
    return NextResponse.json({ leaderboard: enrichedResults })
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
