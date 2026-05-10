"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { getTestById, getSectionWiseTestWithQuestions } from "@/lib/actions/student"
import { Loader2 } from "lucide-react"

// This is a routing page that detects section-wise tests and redirects accordingly
export default function TestRouterPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.id as string
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkTestType = async () => {
      try {
        // Try to get the test
        const test = await getTestById(testId)
        
        if (!test) {
          router.push("/student/tests")
          return
        }

        // Check if it's a section-wise test
        // Method 1: Check for SECTION_WISE marker in description
        const isSectionWiseMarker = test.description?.includes?.("SECTION_WISE") || false
        
        // Method 2: Check if questions have exam_source (indicates section-wise upload)
        const hasExamSource = test.questions?.some((q: any) => q.exam_source && q.exam_source.length > 0)
        
        // Method 3: Check if questions have different exam_source values (multiple sections)
        const uniqueExamSources = new Set(test.questions?.map((q: any) => q.exam_source?.split('|')[0]).filter(Boolean))
        const hasMultipleSections = uniqueExamSources.size > 1
        
        const isSectionWise = isSectionWiseMarker || hasExamSource || hasMultipleSections
        
        console.log("[v0] Test detected:", { 
          testId, 
          title: test.title, 
          isSectionWise,
          marker: isSectionWiseMarker,
          hasExamSource,
          hasSections: hasMultipleSections,
          uniqueSections: Array.from(uniqueExamSources)
        })

        if (isSectionWise) {
          // Verify it actually has section data by trying to fetch with section parser
          const sectionTest = await getSectionWiseTestWithQuestions(testId)
          console.log("[v0] Section test data:", { sections: sectionTest?.sections?.length || 0 })
          
          if (sectionTest && sectionTest.sections && sectionTest.sections.length > 0) {
            // Route to section-wise test page
            console.log("[v0] Routing to section-wise test page")
            router.push(`/section-wise-test-attempt/${testId}`)
            return
          }
        }

        // Otherwise route to regular test page
        console.log("[v0] Routing to mock test page")
        router.push(`/mock-test-attempt/${testId}`)
      } catch (error) {
        console.error("[v0] Error checking test type:", error)
        // Default to regular test page on error
        router.push(`/mock-test-attempt/${testId}`)
      } finally {
        setIsLoading(false)
      }
    }

    checkTestType()
  }, [testId, router])

  // Show loading screen while routing
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Loading test...</p>
      </div>
    </div>
  )
}

