import { NextRequest, NextResponse } from 'next/server'

interface BatchRequest {
  id: string
  endpoint: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: Record<string, any>
}

interface BatchResponse {
  id: string
  status: number
  data: any
  error?: string
}

/**
 * Batch API Route Handler
 * Combines multiple API requests into a single response
 * Reduces network round trips and improves performance
 */
export async function POST(request: NextRequest) {
  try {
    const { requests } = await request.json() as { requests: BatchRequest[] }

    if (!Array.isArray(requests)) {
      return NextResponse.json(
        { error: 'requests must be an array' },
        { status: 400 }
      )
    }

    // Process all requests in parallel
    const results = await Promise.all(
      requests.map(async (req) => {
        try {
          const response = await processRequest(req, request)
          return response
        } catch (error) {
          return {
            id: req.id,
            status: 500,
            data: null,
            error: error instanceof Error ? error.message : 'Unknown error',
          }
        }
      })
    )

    return NextResponse.json(results, {
      headers: {
        'Cache-Control': 'private, max-age=60',
      },
    })
  } catch (error) {
    console.error('[v0] Batch API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * Process individual batch request
 */
async function processRequest(
  req: BatchRequest,
  parentRequest: NextRequest
): Promise<BatchResponse> {
  const { id, endpoint, method = 'GET', params } = req

  try {
    // Build URL with query params for GET requests
    let url = `${process.env.NEXT_PUBLIC_API_URL || ''}${endpoint}`

    if (method === 'GET' && params) {
      const queryString = new URLSearchParams(params).toString()
      url += `?${queryString}`
    }

    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        // Forward auth headers
        ...(parentRequest.headers.get('authorization') && {
          authorization: parentRequest.headers.get('authorization')!,
        }),
      },
    }

    // Add body for POST/PUT requests
    if ((method === 'POST' || method === 'PUT') && params) {
      fetchOptions.body = JSON.stringify(params)
    }

    const response = await fetch(url, fetchOptions)
    const data = await response.json()

    return {
      id,
      status: response.status,
      data,
    }
  } catch (error) {
    return {
      id,
      status: 500,
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Add cache headers for GET batch requests
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Use POST method for batch requests' },
    { status: 405 }
  )
}
