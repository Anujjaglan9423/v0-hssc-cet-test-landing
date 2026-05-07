"use client"

import { DialogDescription } from "@/components/ui/dialog"
import type React from "react"
import { useState, useEffect } from "react"
import {
  Upload,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  CheckCircle2,
  Loader2,
  X,
  FileText,
  Plus,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  createSectionWiseTest,
  uploadSectionCSV,
  getExamsSubjectsTopics,
} from "@/lib/actions/admin"

interface Question {
  id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
  explanation?: string
  exam_source?: string
}

interface Section {
  name: string
  duration?: number
  questions?: Question[]
}

interface SectionWiseCSVUploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTestCreated: () => void
}

export function SectionWiseCSVUploadModal({
  open,
  onOpenChange,
  onTestCreated,
}: SectionWiseCSVUploadModalProps) {
  const [step, setStep] = useState<"basic" | "sections" | "upload" | "review" | "success">("basic")
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Basic test info
  const [testTitle, setTestTitle] = useState("")
  const [testDescription, setTestDescription] = useState("")
  const [examCategory, setExamCategory] = useState("")
  const [examName, setExamName] = useState("")
  const [testCategory, setTestCategory] = useState("")
  const [difficulty, setDifficulty] = useState("medium")
  const [hasNegativeMarking, setHasNegativeMarking] = useState(false)
  const [negativeMarkingPercent, setNegativeMarkingPercent] = useState("25")

  // Sections
  const [numSections, setNumSections] = useState<string>("")
  const [sections, setSections] = useState<Section[]>([])
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  // Timing
  const [isTimingCombined, setIsTimingCombined] = useState(true)
  const [combinedDuration, setCombinedDuration] = useState("")

  // Dropdown options
  const [dropdownOptions, setDropdownOptions] = useState({
    categories: [],
    exams: [],
    subjects: [],
    topics: [],
  })

  // File upload
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<Record<number, File>>({})

  // Created test
  const [createdTest, setCreatedTest] = useState<any>(null)

  useEffect(() => {
    if (open) {
      loadDropdownOptions()
    }
  }, [open])

  async function loadDropdownOptions() {
    try {
      const options = await getExamsSubjectsTopics()
      setDropdownOptions(options)
    } catch (err) {
      console.error("Error loading options:", err)
    }
  }

  function handleNumSectionsChange(num: string) {
    setNumSections(num)
    if (num) {
      const count = parseInt(num)
      const newSections: Section[] = Array(count)
        .fill(null)
        .map((_, i) => ({
          name: `Section ${i + 1}`,
          duration: isTimingCombined ? undefined : 60,
        }))
      setSections(newSections)
      setCurrentSectionIndex(0)
      setError(null)
    }
  }

  function handleSectionNameChange(index: number, name: string) {
    const newSections = [...sections]
    newSections[index].name = name
    setSections(newSections)
  }

  function handleSectionDurationChange(index: number, duration: string) {
    const newSections = [...sections]
    newSections[index].duration = duration ? parseInt(duration) : undefined
    setSections(newSections)
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(true)
  }

  function handleDragLeave() {
    setIsDragging(false)
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0], currentSectionIndex)
    }
  }

  function handleFileSelect(file: File, sectionIndex: number) {
    if (!file.name.endsWith(".csv")) {
      setError("Please upload a CSV file")
      return
    }
    setUploadedFiles((prev) => ({
      ...prev,
      [sectionIndex]: file,
    }))
    setError(null)
  }

  async function parseCSV(file: File): Promise<Question[]> {
    const text = await file.text()
    const lines = text.split("\n").filter((line) => line.trim())
    const questions: Question[] = []

    for (let i = 1; i < lines.length; i++) {
      // Skip header row
      const parts = lines[i].split(",").map((p) => p.trim().replace(/^["']|["']$/g, ""))

      if (parts.length >= 6) {
        questions.push({
          id: `q${i}`,
          question_text: parts[0],
          option_a: parts[1],
          option_b: parts[2],
          option_c: parts[3],
          option_d: parts[4],
          correct_answer: parts[5].toLowerCase(),
          explanation: parts[6] || undefined,
          exam_source: parts[7] || undefined,
        })
      }
    }

    return questions
  }

  async function handleCreateTest() {
    setError(null)
    setSuccess(null)

    // Validate basic info
    if (!testTitle) {
      setError("Please enter test title")
      return
    }

    if (sections.length === 0 || sections.some((s) => !s.name)) {
      setError("Please define all sections with names")
      return
    }

    if (Object.keys(uploadedFiles).length !== sections.length) {
      setError("Please upload CSV for all sections")
      return
    }

    // Validate timing
    if (isTimingCombined && !combinedDuration) {
      setError("Please enter combined duration")
      return
    }

    if (!isTimingCombined && sections.some((s) => !s.duration)) {
      setError("Please enter duration for all sections")
      return
    }

    setIsProcessing(true)

    try {
      // Create the test
      const testResult = await createSectionWiseTest({
        title: testTitle,
        description: testDescription,
        exam_id: examName || undefined,
        subject_id: testCategory || undefined,
        difficulty: (difficulty as any) || "medium",
        has_negative_marking: hasNegativeMarking,
        negative_marking_percent: hasNegativeMarking ? parseInt(negativeMarkingPercent) : 0,
        duration: isTimingCombined ? parseInt(combinedDuration) : undefined,
        is_section_timed: !isTimingCombined,
        sections: sections.map((s) => ({
          name: s.name,
          duration: s.duration,
        })),
      })

      if (!testResult.success) {
        setError(testResult.error || "Failed to create test")
        setIsProcessing(false)
        return
      }

      const testId = testResult.test.id
      const createdSections = testResult.test.sections || []

      // Upload CSV for each section
      for (let i = 0; i < sections.length; i++) {
        const file = uploadedFiles[i]
        if (!file) continue

        const questions = await parseCSV(file)
        const sectionId = createdSections[i]?.id

        if (!sectionId) {
          setError(`Failed to get section ID for ${sections[i].name}`)
          setIsProcessing(false)
          return
        }

        const uploadResult = await uploadSectionCSV(testId, sectionId, questions)

        if (!uploadResult.success) {
          setError(`Failed to upload CSV for ${sections[i].name}`)
          setIsProcessing(false)
          return
        }
      }

      setCreatedTest(testResult.test)
      setSuccess("Section-wise test created successfully!")
      setStep("success")
      setTimeout(() => {
        onTestCreated()
        resetModal()
      }, 2000)
    } catch (err) {
      console.error("Error creating test:", err)
      setError(err instanceof Error ? err.message : "Failed to create test")
    } finally {
      setIsProcessing(false)
    }
  }

  function resetModal() {
    setStep("basic")
    setTestTitle("")
    setTestDescription("")
    setExamCategory("")
    setExamName("")
    setTestCategory("")
    setDifficulty("medium")
    setHasNegativeMarking(false)
    setNegativeMarkingPercent("25")
    setNumSections("")
    setSections([])
    setCurrentSectionIndex(0)
    setIsTimingCombined(true)
    setCombinedDuration("")
    setUploadedFiles({})
    setError(null)
    setSuccess(null)
    setCreatedTest(null)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Section-wise Test</DialogTitle>
          <DialogDescription>
            {step === "basic" && "Step 1: Enter test basic information"}
            {step === "sections" && "Step 2: Define sections"}
            {step === "upload" && "Step 3: Upload CSV for each section"}
            {step === "review" && "Step 4: Review and create"}
            {step === "success" && "Test created successfully!"}
          </DialogDescription>
        </DialogHeader>

        {/* STEP 1: BASIC INFO */}
        {step === "basic" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="test-title">Test Title *</Label>
              <Input
                id="test-title"
                value={testTitle}
                onChange={(e) => setTestTitle(e.target.value)}
                placeholder="Enter test title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="test-description">Description</Label>
              <Textarea
                id="test-description"
                value={testDescription}
                onChange={(e) => setTestDescription(e.target.value)}
                placeholder="Enter test description (optional)"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="exam-category">Exam Category</Label>
                <Select value={examCategory} onValueChange={setExamCategory}>
                  <SelectTrigger id="exam-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {dropdownOptions.categories?.map((cat: any) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="exam-name">Exam Name</Label>
                <Select value={examName} onValueChange={setExamName}>
                  <SelectTrigger id="exam-name">
                    <SelectValue placeholder="Select exam" />
                  </SelectTrigger>
                  <SelectContent>
                    {dropdownOptions.exams?.map((exam: any) => (
                      <SelectItem key={exam.id} value={exam.id}>
                        {exam.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="test-category">Test Category</Label>
                <Select value={testCategory} onValueChange={setTestCategory}>
                  <SelectTrigger id="test-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {dropdownOptions.subjects?.map((subject: any) => (
                      <SelectItem key={subject.id} value={subject.id}>
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty *</Label>
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger id="difficulty">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="negative-marking"
                  checked={hasNegativeMarking}
                  onChange={(e) => setHasNegativeMarking(e.target.checked)}
                  className="w-4 h-4"
                />
                <Label htmlFor="negative-marking" className="cursor-pointer">
                  Enable Negative Marking
                </Label>
              </div>

              {hasNegativeMarking && (
                <div className="space-y-2">
                  <Label htmlFor="negative-marking-percent">Percentage for Wrong Answer *</Label>
                  <Input
                    id="negative-marking-percent"
                    type="number"
                    min="0"
                    max="100"
                    value={negativeMarkingPercent}
                    onChange={(e) => setNegativeMarkingPercent(e.target.value)}
                  />
                </div>
              )}
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (!testTitle) {
                    setError("Please enter test title")
                    return
                  }
                  setError(null)
                  setStep("sections")
                }}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: SECTIONS */}
        {step === "sections" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="num-sections">How many sections in this exam? *</Label>
              <Input
                id="num-sections"
                type="number"
                min="1"
                max="10"
                value={numSections}
                onChange={(e) => handleNumSectionsChange(e.target.value)}
                placeholder="Enter number of sections"
              />
            </div>

            {sections.length > 0 && (
              <div className="space-y-4 p-4 bg-slate-50 rounded-lg border">
                {sections.map((section, index) => (
                  <div key={index} className="p-3 bg-white border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Section {index + 1}</h3>
                      {uploadedFiles[index] && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          CSV Ready
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`section-name-${index}`}>Section Name *</Label>
                      <Input
                        id={`section-name-${index}`}
                        value={section.name}
                        onChange={(e) => handleSectionNameChange(index, e.target.value)}
                        placeholder="e.g., English, Mathematics"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <div className="flex justify-between gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setStep("basic")
                  setError(null)
                }}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={() => {
                  if (!numSections || sections.length === 0 || sections.some((s) => !s.name)) {
                    setError("Please define all sections with names")
                    return
                  }
                  setError(null)
                  setStep("upload")
                }}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: UPLOAD CSV */}
        {step === "upload" && (
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  Section {currentSectionIndex + 1} of {sections.length}
                </h3>
                <span className="text-sm text-slate-600">{sections[currentSectionIndex]?.name}</span>
              </div>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() =>
                  document.getElementById(`file-input-${currentSectionIndex}`)?.click()
                }
                className={cn(
                  "p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
                  isDragging
                    ? "border-blue-400 bg-blue-50"
                    : "border-slate-300 bg-slate-50 hover:border-slate-400",
                )}
              >
                <input
                  id={`file-input-${currentSectionIndex}`}
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.currentTarget.files?.[0]
                    if (file) handleFileSelect(file, currentSectionIndex)
                  }}
                />

                {uploadedFiles[currentSectionIndex] ? (
                  <div className="text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
                    <p className="font-medium text-green-700">
                      {uploadedFiles[currentSectionIndex].name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {uploadedFiles[currentSectionIndex].size} bytes
                    </p>
                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="font-medium">Drag and drop CSV file here</p>
                    <p className="text-sm text-slate-600">or click to select file</p>
                  </div>
                )}
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}
            </div>

            <div className="flex justify-between gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setStep("sections")
                  setError(null)
                }}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="flex gap-2">
                {currentSectionIndex > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentSectionIndex(currentSectionIndex - 1)
                      setError(null)
                    }}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous Section
                  </Button>
                )}

                {currentSectionIndex < sections.length - 1 ? (
                  <Button
                    onClick={() => {
                      if (!uploadedFiles[currentSectionIndex]) {
                        setError("Please upload CSV for current section")
                        return
                      }
                      setCurrentSectionIndex(currentSectionIndex + 1)
                      setError(null)
                    }}
                  >
                    Next Section
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      if (!uploadedFiles[currentSectionIndex]) {
                        setError("Please upload CSV for current section")
                        return
                      }
                      setStep("review")
                      setError(null)
                    }}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: TIMING & REVIEW */}
        {step === "review" && (
          <div className="space-y-4">
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border">
              <h3 className="font-medium">Timing Configuration</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="combined-time"
                    checked={isTimingCombined}
                    onChange={() => setIsTimingCombined(true)}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="combined-time" className="cursor-pointer">
                    Combined time for all sections
                  </Label>
                </div>

                {isTimingCombined && (
                  <div className="ml-7 space-y-2">
                    <Label htmlFor="combined-duration">Total Duration (minutes) *</Label>
                    <Input
                      id="combined-duration"
                      type="number"
                      min="1"
                      value={combinedDuration}
                      onChange={(e) => setCombinedDuration(e.target.value)}
                      placeholder="Enter total duration"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="section-time"
                    checked={!isTimingCombined}
                    onChange={() => setIsTimingCombined(false)}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="section-time" className="cursor-pointer">
                    Separate time for each section
                  </Label>
                </div>

                {!isTimingCombined && (
                  <div className="ml-7 space-y-3">
                    {sections.map((section, index) => (
                      <div key={index} className="space-y-1">
                        <Label htmlFor={`section-duration-${index}`}>
                          {section.name} (minutes) *
                        </Label>
                        <Input
                          id={`section-duration-${index}`}
                          type="number"
                          min="1"
                          value={section.duration || ""}
                          onChange={(e) => handleSectionDurationChange(index, e.target.value)}
                          placeholder="Enter duration"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                <CheckCircle2 className="w-4 h-4" />
                {success}
              </div>
            )}

            <div className="flex justify-between gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setStep("upload")
                  setError(null)
                }}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button onClick={handleCreateTest} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Create Test
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* SUCCESS */}
        {step === "success" && createdTest && (
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
            <div>
              <h3 className="font-bold text-lg">{createdTest.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{sections.length} sections created</p>
            </div>
            <Button onClick={() => resetModal()} className="w-full">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
