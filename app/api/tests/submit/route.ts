import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { testId, score, percentage, timeTaken, correctAnswers, totalQuestions, name, email, phone } = body

    if (!testId || score === undefined || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      console.error('[v0] Missing Supabase config')
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey)

    console.log('[v0] Saving test result for user:', name, 'Email:', email)

    // Save user info to contacts table first
    const { data: contactData, error: contactError } = await supabase
      .from('contacts')
      .insert([
        {
          first_name: name,
          email,
          phone,
          subject: `Test Result - Score: ${score}`,
          message: `Test ID: ${testId}, Time Taken: ${timeTaken}s`,
          status: 'completed'
        }
      ])
      .select()

    if (contactError) {
      console.error('[v0] Contact error:', contactError)
    }

    console.log('[v0] Contact saved:', contactData)

    // Save test result to test_results table
    const { data: resultData, error: resultError } = await supabase
      .from('test_results')
      .insert([
        {
          test_id: testId,
          user_id: email, // Store email as user_id for matching
          score,
          percentage,
          time_taken: timeTaken,
          correct_answers: correctAnswers,
          wrong_answers: totalQuestions - correctAnswers,
          unanswered: 0,
          total_questions: totalQuestions
        }
      ])
      .select()

    if (resultError) {
      console.error('[v0] Result error:', resultError)
      return NextResponse.json(
        { error: 'Failed to save result: ' + (resultError.message || 'Unknown error') },
        { status: 500 }
      )
    }

    console.log('[v0] Result saved:', resultData)

    return NextResponse.json({
      success: true,
      message: 'Result saved to leaderboard',
      data: resultData
    }, { status: 201 })
  } catch (error) {
    console.error('[v0] API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
