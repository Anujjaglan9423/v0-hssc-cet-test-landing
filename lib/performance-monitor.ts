/**
 * Performance Monitoring Utility
 * Tracks Web Vitals and sends them to analytics
 * Helps identify bottlenecks in CDN-Compute transfer
 */

export interface WebVital {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta?: number
  id?: string
}

/**
 * Track Core Web Vitals using Web Vitals API
 */
export async function trackWebVitals() {
  if (typeof window === 'undefined') return

  // Dynamic import to avoid blocking page load
  const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
    'web-vitals'
  )

  getCLS(sendVitalMetric)
  getFID(sendVitalMetric)
  getFCP(sendVitalMetric)
  getLCP(sendVitalMetric)
  getTTFB(sendVitalMetric)
}

/**
 * Send individual vital metric
 */
function sendVitalMetric(metric: any) {
  // Send to your analytics endpoint
  const body = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : '',
  }

  // Use beacon API for reliability (doesn't block page unload)
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/metrics', JSON.stringify(body))
  } else {
    // Fallback to fetch
    fetch('/api/metrics', {
      method: 'POST',
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {
      // Silently fail - don't disrupt user experience
    })
  }
}

/**
 * Measure API response time
 */
export async function measureAPICall(
  url: string,
  options?: RequestInit
): Promise<any> {
  const startTime = performance.now()

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    const duration = performance.now() - startTime

    // Log performance metric
    logPerformanceMetric({
      type: 'api-call',
      endpoint: url,
      duration,
      status: response.status,
      size: JSON.stringify(data).length,
    })

    return data
  } catch (error) {
    const duration = performance.now() - startTime
    logPerformanceMetric({
      type: 'api-error',
      endpoint: url,
      duration,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
    throw error
  }
}

/**
 * Log custom performance metrics
 */
export function logPerformanceMetric(metric: Record<string, any>) {
  if (typeof window === 'undefined') return

  // Only log in development or if explicitly enabled
  if (process.env.NEXT_PUBLIC_DEBUG_METRICS === 'true') {
    console.log('[v0 Performance]', metric)
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    navigator.sendBeacon(
      '/api/metrics',
      JSON.stringify({
        ...metric,
        timestamp: new Date().toISOString(),
      })
    )
  }
}

/**
 * Measure component render time (for development)
 */
export function measureComponentRender(
  componentName: string,
  renderFn: () => void
): void {
  if (process.env.NEXT_PUBLIC_DEBUG_METRICS !== 'true') return

  const startTime = performance.now()
  renderFn()
  const duration = performance.now() - startTime

  console.log(`[v0 Render] ${componentName}: ${duration.toFixed(2)}ms`)
}

/**
 * Report layout shift (CLS) metric
 */
export function reportLayoutShift() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return
  }

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          logPerformanceMetric({
            type: 'layout-shift',
            value: (entry as any).value,
            sources: (entry as any).sources,
          })
        }
      }
    })

    observer.observe({ type: 'layout-shift', buffered: true })
  } catch (error) {
    console.error('[v0] Failed to setup CLS observer:', error)
  }
}

/**
 * Initialize all performance monitoring
 */
export function initializePerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Track Core Web Vitals
  trackWebVitals()

  // Report layout shifts
  reportLayoutShift()

  // Log page visibility changes (helps understand user engagement)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      logPerformanceMetric({
        type: 'page-hidden',
        timestamp: new Date().toISOString(),
      })
    }
  })
}
