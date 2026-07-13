/**
 * API Request Batching Utility
 * Combines multiple requests into a single batch to reduce network round trips
 * Reduces data transfer and improves performance
 */

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
 * Batch multiple API requests into a single call
 * Usage:
 * const results = await batchRequests([
 *   { id: '1', endpoint: '/api/user' },
 *   { id: '2', endpoint: '/api/tests' },
 *   { id: '3', endpoint: '/api/analytics' }
 * ])
 */
export async function batchRequests(requests: BatchRequest[]): Promise<BatchResponse[]> {
  try {
    const response = await fetch('/api/batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requests }),
    })

    if (!response.ok) {
      throw new Error(`Batch request failed: ${response.statusText}`)
    }

    const data: BatchResponse[] = await response.json()
    return data
  } catch (error) {
    console.error('[v0] Batch request failed:', error)
    throw error
  }
}

/**
 * Helper to extract single result from batch response
 */
export function getBatchResult(
  responses: BatchResponse[],
  id: string
): any {
  const result = responses.find((r) => r.id === id)
  if (!result) {
    throw new Error(`No response found for batch request ID: ${id}`)
  }
  if (result.error) {
    throw new Error(result.error)
  }
  return result.data
}

/**
 * Optimized fetch wrapper with request deduplication
 * Prevents duplicate requests in a short time window
 */
const requestCache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5000 // 5 seconds

export async function optimizedFetch(
  url: string,
  options?: RequestInit
): Promise<any> {
  // Check cache first
  const cached = requestCache.get(url)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.statusText}`)
    }

    const data = await response.json()

    // Cache the result
    requestCache.set(url, { data, timestamp: Date.now() })

    return data
  } catch (error) {
    console.error('[v0] Fetch failed:', error)
    throw error
  }
}

/**
 * Clear request cache (call after user actions, mutations, etc.)
 */
export function clearRequestCache(pattern?: string): void {
  if (pattern) {
    // Clear specific cache entries matching pattern
    for (const [key] of requestCache) {
      if (key.includes(pattern)) {
        requestCache.delete(key)
      }
    }
  } else {
    // Clear all cache
    requestCache.clear()
  }
}
