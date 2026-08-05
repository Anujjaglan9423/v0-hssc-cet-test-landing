import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, score, percentage, timeSpent, testId } = body

    // Validate input
    if (!name || !email || !phone || score === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For now, just return success - data will be saved client-side to localStorage
    // In a real app, you would call your backend API here

    return NextResponse.json(
      {
        success: true,
        message: 'Result added to leaderboard',
        data: { name, email, score, percentage },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
