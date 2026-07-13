import dynamic from 'next/dynamic'
import React from 'react'

/**
 * Code Splitting Strategy for Heavy Components
 * These components are lazy-loaded only when needed
 * Reduces initial bundle size and improves page load time
 */

// Loading component (shown while importing)
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
)

/**
 * Heavy Dashboard Components - Lazy Load
 * Use these in admin/student dashboards
 */
export const DynamicAnalyticsChart = dynamic(
  () => import('@/components/analytics-chart'),
  {
    loading: LoadingFallback,
    ssr: false, // Don't render on server since it needs client-side data
  }
)

export const DynamicPerformanceGraph = dynamic(
  () => import('@/components/performance-graph'),
  {
    loading: LoadingFallback,
    ssr: false,
  }
)

export const DynamicTestResultsTable = dynamic(
  () => import('@/components/test-results-table'),
  {
    loading: LoadingFallback,
    ssr: true, // Can render on server
  }
)

/**
 * Heavy Editor Components - Lazy Load
 * Use these only in admin blog/content creation
 */
export const DynamicRichTextEditor = dynamic(
  () => import('@/components/rich-text-editor'),
  {
    loading: LoadingFallback,
    ssr: false,
  }
)

export const DynamicImageUploader = dynamic(
  () => import('@/components/image-uploader'),
  {
    loading: LoadingFallback,
    ssr: false,
  }
)

/**
 * Heavy Modal Components - Lazy Load
 * Use these for dialogs that aren't shown on page load
 */
export const DynamicAdvancedFilterModal = dynamic(
  () => import('@/components/advanced-filter-modal'),
  {
    loading: LoadingFallback,
    ssr: false,
  }
)

/**
 * Helper to create lazy components with loading state
 * Usage: const MyComponent = createLazyComponent(() => import('./MyComponent'))
 */
export function createLazyComponent(
  importFn: () => Promise<{ default: React.ComponentType<any> }>,
  ssr = true
) {
  return dynamic(importFn, {
    loading: LoadingFallback,
    ssr,
  })
}

/**
 * Route-based code splitting
 * Load components only for specific routes to reduce main bundle
 */
export const routeBasedDynamicImports = {
  // Admin routes
  admin: {
    analytics: () => import('@/app/admin/analytics/page'),
    tests: () => import('@/app/admin/tests/page'),
    students: () => import('@/app/admin/students/page'),
  },

  // Student routes
  student: {
    analytics: () => import('@/app/student/analytics/page'),
    results: () => import('@/app/student/results/page'),
    practice: () => import('@/app/student/practice/page'),
  },

  // Public routes (can wait)
  public: {
    blog: () => import('@/app/blog/page'),
    exams: () => import('@/app/exams/page'),
    syllabus: () => import('@/app/syllabus/page'),
  },
}

/**
 * Preload component (when you know user will visit a route)
 * Usage: preloadComponent(() => import('./HeavyComponent'))
 */
export function preloadComponent(
  importFn: () => Promise<{ default: React.ComponentType<any> }>
) {
  if (typeof window === 'undefined') return

  // Use requestIdleCallback if available, otherwise fallback to setTimeout
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      importFn()
    })
  } else {
    setTimeout(() => {
      importFn()
    }, 2000)
  }
}
