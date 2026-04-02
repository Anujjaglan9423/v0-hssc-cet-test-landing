import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url, anonKey } = await request.json()

    if (!url || !anonKey) {
      return NextResponse.json(
        { error: 'URL and anon key are required' },
        { status: 400 }
      )
    }

    // Store in Vercel KV or environment
    // For now, we'll return success and you should add these to your .env.local
    // In production, you should use a secure storage method
    
    console.log('[v0] Supabase configuration received')
    console.log('[v0] URL:', url)
    console.log('[v0] Add these to your .env.local:')
    console.log(`NEXT_PUBLIC_SUPABASE_URL=${url}`)
    console.log(`NEXT_PUBLIC_SUPABASE_ANON_KEY=${anonKey}`)

    return NextResponse.json({
      success: true,
      message: 'Configuration saved. Please add the following to your .env.local file:',
      config: {
        url,
        key: anonKey.substring(0, 10) + '...',
      },
    })
  } catch (error) {
    console.error('Error processing config:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
