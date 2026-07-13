import { NextRequest, NextResponse } from 'next/server'

/**
 * Metrics Collection Endpoint
 * Collects Web Vitals and performance metrics from clients
 * Helps identify CDN-Compute bottlenecks and optimize accordingly
 */

interface PerformanceMetric {
  name?: string
  value: number
  rating?: 'good' | 'needs-improvement' | 'poor'
  type?: string
  endpoint?: string
  duration?: number
  status?: number
  timestamp: string
  url: string
  userAgent?: string
}

// In-memory storage (consider using Supabase in production)
const metrics: PerformanceMetric[] = []
const MAX_METRICS = 1000 // Keep last 1000 metrics

export async function POST(request: NextRequest) {
  try {
    const metric: PerformanceMetric = await request.json()

    // Add standard fields
    const enrichedMetric: PerformanceMetric = {
      ...metric,
      timestamp: metric.timestamp || new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
    }

    // Store metric
    metrics.push(enrichedMetric)

    // Keep array size manageable
    if (metrics.length > MAX_METRICS) {
      metrics.splice(0, metrics.length - MAX_METRICS)
    }

    // Log slow requests (> 1000ms)
    if (enrichedMetric.duration && enrichedMetric.duration > 1000) {
      console.log('[v0 Slow Request]', {
        endpoint: enrichedMetric.endpoint,
        duration: enrichedMetric.duration,
        status: enrichedMetric.status,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[v0] Metrics endpoint error:', error)
    return NextResponse.json(
      { error: 'Failed to record metric' },
      { status: 500 }
    )
  }
}

/**
 * GET endpoint to retrieve collected metrics
 * Protected - in production, add authentication
 */
export async function GET(request: NextRequest) {
  // Optional: Add authentication check
  // const auth = request.headers.get('authorization')
  // if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const limit = parseInt(searchParams.get('limit') || '100')

  let filtered = metrics

  if (type) {
    filtered = metrics.filter((m) => m.type === type || m.name === type)
  }

  // Calculate summary statistics
  const summary = calculateSummary(filtered)

  return NextResponse.json({
    count: filtered.length,
    metrics: filtered.slice(-limit),
    summary,
  })
}

/**
 * Calculate performance statistics from metrics
 */
function calculateSummary(metrics: PerformanceMetric[]) {
  if (metrics.length === 0) {
    return null
  }

  const durations = metrics
    .filter((m) => m.duration)
    .map((m) => m.duration!) as number[]

  if (durations.length === 0) {
    return null
  }

  const sorted = [...durations].sort((a, b) => a - b)
  const average = sorted.reduce((a, b) => a + b) / sorted.length
  const median = sorted[Math.floor(sorted.length / 2)]
  const p95 = sorted[Math.floor(sorted.length * 0.95)]
  const p99 = sorted[Math.floor(sorted.length * 0.99)]

  return {
    averageDuration: Math.round(average),
    medianDuration: median,
    p95Duration: p95,
    p99Duration: p99,
    minDuration: sorted[0],
    maxDuration: sorted[sorted.length - 1],
  }
}

/**
 * DELETE endpoint to clear metrics (admin only)
 */
export async function DELETE() {
  metrics.length = 0
  return NextResponse.json({ success: true, message: 'Metrics cleared' })
}
