"use client"

import { DialogDescription } from "@/components/ui/dialog"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Download,
  Trash2,
  Edit,
  Save,
  Loader2,
  Plus,
  X,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { createSectionWiseTest, uploadSectionCSV, getExamsSubjectsTopics } from "@/lib/actions/admin"

interface Question {
  id: string
  questionText: string
  optionA: string
  optionB: string
  optionC: string
  optionD: string
  correctAnswer: string
  explanation?: string
  examSource?: string
}

interface SectionWiseCSVUploadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTestCreated: () => void
}

export function SectionWiseCSVUploadModal({ open, onOpenChange, onTestCreated }: SectionWiseCSVUploadModalProps) {
  const [step, setStep] = useState<"testConfig" | "sections" | "upload" | "preview">("testConfig")
  const [file, setFile] = useState<File | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [parseError, setParseError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCreating, setIsCreating] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Data from database
  const [categories, setCategories] = useState<any[]>([])
  const [exams, setExams] = useState<any[]>([])
  const [subjects, setSubjects] = useState<any[]>([])
  const [topics, setTopics] = useState<any[]>([])

  // Configuration state - STEP 1: Test Config
  const [testTitle, setTestTitle] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState("")
  const [selectedExamId, setSelectedExamId] = useState("")
  const [testType, setTestType] = useState<"exam" | "subject" | "topic">("exam")
  const [selectedSubjectId, setSelectedSubjectId] = useState("")
  const [selectedTopicId, setSelectedTopicId] = useState("")
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium")
  const [hasNegativeMarking, setHasNegativeMarking] = useState(false)
  const [negativeMarkingPercent, setNegativeMarkingPercent] = useState("25")

  // STEP 2: Section Config
  const [numSections, setNumSections] = useState(1)
  const [sections, setSections] = useState<Array<{ name: string; duration: number }>>([])
  const [isPerSectionTiming, setIsPerSectionTiming] = useState(true)
  const [combinedDuration, setCombinedDuration] = useState("120")
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [testId, setTestId] = useState<string | null>(null)

  // Preview state
  const [currentPage, setCurrentPage] = useState(1)
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const questionsPerPage = 5

  // Load exams, subjects, topics
  useEffect(() => {
    if (open) {
      loadData()
    }
  }, [open])

  async function loadData() {
    try {
      const data = await getExamsSubjectsTopics()
      setCategories(data.categories || [])
      setExams(data.exams)
      setSubjects(data.subjects)
      setTopics(data.topics)
    } catch (error) {
      console.error("Error loading data:", error)
    }
  }

  const resetState = () => {
    setStep("testConfig")
    setFile(null)
    setQuestions([])
    setParseError(null)
    setTestTitle("")
    setSelectedCategoryId("")
    setSelectedExamId("")
    setTestType("exam")
    setSelectedSubjectId("")
    setSelectedTopicId("")
    setDifficulty("medium")
    setHasNegativeMarking(false)
    setNegativeMarkingPercent("25")
    setNumSections(1)
    setSections([])
    setIsPerSectionTiming(true)
    setCombinedDuration("120")
    setCurrentSectionIndex(0)
    setTestId(null)
    setCurrentPage(1)
  }

  const filteredExams = exams.filter((e) => !selectedCategoryId || e.category_id === selectedCategoryId)
  const filteredSubjects = subjects.filter((s) => !selectedExamId || s.exam_id === selectedExamId)
  const filteredTopics = topics.filter((t) => !selectedSubjectId || t.subject_id === selectedSubjectId)

  const parseCSV = (text: string): Question[] => {
    const lines = text.split("\n").filter((line) => line.trim())
    if (lines.length < 2) throw new Error("CSV file is empty or has no data rows")

    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/['"]/g, ""))

    const questionIdx = headers.findIndex((h) => h.includes("question") && h.includes("text"))
    const optionsIdx = headers.findIndex((h) => h === "options" || h.includes("option"))
    const examDetailsIdx = headers.findIndex((h) => h.includes("exam") && h.includes("detail"))
    const answerIdx = headers.findIndex((h) => h.includes("correct") || h.includes("answer"))
    const explanationIdx = headers.findIndex((h) => h.includes("explanation"))

    const parsedQuestions: Question[] = []

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]
      if (!line.trim()) continue

      const values: string[] = []
      let current = ""
      let inQuotes = false

      for (let j = 0; j < line.length; j++) {
        const char = line[j]
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === "," && !inQuotes) {
          values.push(current.trim())
          current = ""
        } else {
          current += char
        }
      }
      values.push(current.trim())

      const questionText = questionIdx >= 0 ? values[questionIdx]?.replace(/^"|"$/g, "") : ""
      if (!questionText) continue

      let optionA = ""
      let optionB = ""
      let optionC = ""
      let optionD = ""

      const optionsText = optionsIdx >= 0 ? values[optionsIdx]?.replace(/^"|"$/g, "") : ""

      if (optionsText) {
        const optionSplitRegex = /[(][a-e][)]/gi
        const parts = optionsText.split(optionSplitRegex)
        const letterMatches = optionsText.match(optionSplitRegex) || []

        const optionsMap: Record<string, string> = {}
        for (let k = 0; k < letterMatches.length; k++) {
          const letter = letterMatches[k].toLowerCase().replace(/[()]/g, "")
          const text = parts[k + 1]?.trim() || ""
          optionsMap[letter] = text
        }

        optionA = optionsMap["a"] || ""
        optionB = optionsMap["b"] || ""
        optionC = optionsMap["c"] || ""
        optionD = optionsMap["d"] || ""
      }

      let correctAnswer = "a"
      const answerText = answerIdx >= 0 ? values[answerIdx]?.replace(/^"|"$/g, "").trim() : ""
      if (answerText) {
        const answerWithParenRegex = /[(]([a-d])[)]/i
        const answerMatch = answerText.match(answerWithParenRegex)
        if (answerMatch && answerMatch[1]) {
          correctAnswer = answerMatch[1].toLowerCase()
        } else {
          const letterMatch = answerText.match(/[^a-z]([a-d])$/i) || answerText.match(/^([a-d])$/i)
          if (letterMatch && letterMatch[1]) {
            correctAnswer = letterMatch[1].toLowerCase()
          }
        }
      }

      const explanation = explanationIdx >= 0 ? values[explanationIdx]?.replace(/^"|"$/g, "") : ""
      const examSource = examDetailsIdx >= 0 ? values[examDetailsIdx]?.replace(/^"|"$/g, "") : ""

      parsedQuestions.push({
        id: `q-${i}`,
        questionText,
        optionA,
        optionB,
        optionC,
        optionD,
        correctAnswer,
        explanation,
        examSource,
      })
    }

    if (parsedQuestions.length === 0) {
      throw new Error("No valid questions found in CSV")
    }

    return parsedQuestions
  }

  const handleFileChange = async (selectedFile: File) => {
    setFile(selectedFile)
    setParseError(null)
    setIsProcessing(true)

    try {
      const text = await selectedFile.text()
      const parsed = parseCSV(text)
      setQuestions(parsed)
    } catch (error) {
      setParseError(error instanceof Error ? error.message : "Failed to parse CSV")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileChange(droppedFile)
    }
  }

  const handleDeleteQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id))
  }

  const handleEditQuestion = (question: Question) => {
    setEditingQuestion({ ...question })
    setShowEditModal(true)
  }

  const handleSaveEdit = () => {
    if (!editingQuestion) return
    setQuestions((prev) => prev.map((q) => (q.id === editingQuestion.id ? editingQuestion : q)))
    setShowEditModal(false)
    setEditingQuestion(null)
  }

  const handleCreateTest = async () => {
    if (!testTitle || !selectedExamId) {
      setParseError("Test title and exam are required")
      return
    }

    // Calculate total duration from sections if per-section timed
    let totalDuration = Number.parseInt(combinedDuration)
    if (isPerSectionTiming) {
      totalDuration = sections.reduce((sum, section) => sum + (section.duration || 0), 0)
    }

    setIsCreating(true)
    try {
      const result = await createSectionWiseTest({
        title: testTitle,
        exam_id: selectedExamId || undefined,
        subject_id: selectedSubjectId || undefined,
        difficulty,
        has_negative_marking: hasNegativeMarking,
        negative_marking_percent: hasNegativeMarking ? Number.parseFloat(negativeMarkingPercent) : 0,
        duration: totalDuration > 0 ? totalDuration : 120, // Default to 120 min if not specified
        is_section_timed: isPerSectionTiming,
        sections,
      })

      if (result.success && result.test) {
        setTestId(result.test.id)
        setStep("upload")
      } else {
        setParseError(result.error || "Failed to create test")
      }
    } catch (error) {
      setParseError("Failed to create test")
    } finally {
      setIsCreating(false)
    }
  }

  const handleUploadSectionQuestions = async () => {
    if (!testId || questions.length === 0) return

    setIsCreating(true)
    try {
      const currentSection = sections[currentSectionIndex]
      const result = await uploadSectionCSV(testId, currentSection.name, questions.map((q) => ({
        question_text: q.questionText,
        option_a: q.optionA,
        option_b: q.optionB,
        option_c: q.optionC,
        option_d: q.optionD,
        correct_answer: q.correctAnswer,
        explanation: q.explanation,
        exam_source: q.examSource,
      })))

      if (result.success) {
        if (currentSectionIndex < sections.length - 1) {
          // Move to next section
          setCurrentSectionIndex(currentSectionIndex + 1)
          setQuestions([])
          setFile(null)
          setParseError(null)
          setCurrentPage(1)
          setStep("upload") // Go back to upload step for next section
        } else {
          // All sections uploaded
          onTestCreated()
          onOpenChange(false)
          resetState()
        }
      } else {
        setParseError(result.error || "Failed to upload questions")
      }
    } catch (error) {
      setParseError("Failed to upload questions")
    } finally {
      setIsCreating(false)
    }
  }

  const downloadSampleCSV = () => {
    const sample = `"Q. No.","Question Text","Options","Exam Details","Correct Answer","Explanation Summary"
"1","भारत की राजधानी क्या है?","(a) मुंबई (b) दिल्ली (c) कोलकाता (d) चेन्नई","HSSC CET 2023","Ans. (b)","दिल्ली भारत की राजधानी है"
"2","What is 2+2?","(a) 3 (b) 4 (c) 5 (d) 6","Sample","Ans. (b)","Basic addition"`
    const blob = new Blob([sample], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "sample_questions.csv"
    a.click()
  }

  const totalPages = Math.ceil(questions.length / questionsPerPage)
  const paginatedQuestions = questions.slice((currentPage - 1) * questionsPerPage, currentPage * questionsPerPage)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Section-wise Test</DialogTitle>
          <DialogDescription>
            {step === "testConfig" && "Step 1: Configure test details"}
            {step === "sections" && "Step 2: Define sections"}
            {step === "upload" && `Step 3: Upload questions for ${sections[currentSectionIndex]?.name}`}
            {step === "preview" && "Step 4: Preview questions"}
          </DialogDescription>
        </DialogHeader>

        {/* STEP 1: TEST CONFIGURATION */}
        {step === "testConfig" && (
          <div className="space-y-4">
            <div>
              <Label>Test Title</Label>
              <Input
                value={testTitle}
                onChange={(e) => setTestTitle(e.target.value)}
                placeholder="Enter test name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Category</Label>
                <Select value={selectedCategoryId} onValueChange={setSelectedCategoryId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Exam</Label>
                <Select value={selectedExamId} onValueChange={setSelectedExamId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select exam" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredExams.map((exam) => (
                      <SelectItem key={exam.id} value={exam.id}>
                        {exam.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Difficulty</Label>
              <Select value={difficulty} onValueChange={(v: any) => setDifficulty(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={hasNegativeMarking}
                  onChange={(e) => setHasNegativeMarking(e.target.checked)}
                />
                Enable Negative Marking
              </Label>
              {hasNegativeMarking && (
                <Input
                  type="number"
                  value={negativeMarkingPercent}
                  onChange={(e) => setNegativeMarkingPercent(e.target.value)}
                  placeholder="Percentage (%)"
                />
              )}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                onClick={() => setStep("sections")}
                disabled={!testTitle || !selectedExamId}
              >
                Next: Define Sections <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: SECTIONS */}
        {step === "sections" && (
          <div className="space-y-4">
            <div>
              <Label>Number of Sections</Label>
              <Input
                type="number"
                min="1"
                max="10"
                value={numSections}
                onChange={(e) => {
                  const num = Math.max(1, Math.min(10, Number.parseInt(e.target.value) || 1))
                  setNumSections(num)
                  setSections(Array.from({ length: num }, (_, i) => sections[i] || { name: `Section ${i + 1}`, duration: 30 }))
                }}
              />
            </div>

            <div className="space-y-3">
              {Array.from({ length: numSections }).map((_, i) => (
                <div key={i} className="flex gap-2">
                  <Input
                    value={sections[i]?.name || `Section ${i + 1}`}
                    onChange={(e) => {
                      const newSections = [...sections]
                      if (!newSections[i]) newSections[i] = { name: "", duration: 30 }
                      newSections[i].name = e.target.value
                      setSections(newSections)
                    }}
                    placeholder={`Section ${i + 1} name (e.g., English)`}
                  />
                  <Input
                    type="number"
                    min="1"
                    value={sections[i]?.duration || 30}
                    onChange={(e) => {
                      const newSections = [...sections]
                      if (!newSections[i]) newSections[i] = { name: `Section ${i + 1}`, duration: 30 }
                      newSections[i].duration = Number.parseInt(e.target.value) || 30
                      setSections(newSections)
                    }}
                    placeholder="Duration (min)"
                    className="w-24"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isPerSectionTiming}
                  onChange={(e) => setIsPerSectionTiming(e.target.checked)}
                />
                Per-Section Timing
              </Label>
              {!isPerSectionTiming && (
                <Input
                  type="number"
                  value={combinedDuration}
                  onChange={(e) => setCombinedDuration(e.target.value)}
                  placeholder="Combined duration (minutes)"
                />
              )}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep("testConfig")}>
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button
                onClick={handleCreateTest}
                disabled={sections.length === 0 || sections.some((s) => !s.name)}
                loading={isCreating}
              >
                Create Test <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: UPLOAD CSV */}
        {step === "upload" && (
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Uploading questions for: <strong>{sections[currentSectionIndex]?.name}</strong>
              <span className="ml-2">({currentSectionIndex + 1} of {sections.length})</span>
            </div>

            <div
              className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50",
              )}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="font-medium">Drag CSV file here or click to browse</p>
              <p className="text-sm text-muted-foreground">Required format: Question Text, Options, Answer, Explanation</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
                className="hidden"
              />
            </div>

            {parseError && (
              <div className="flex gap-2 p-3 rounded-lg bg-destructive/10 text-destructive">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <div>{parseError}</div>
              </div>
            )}

            {file && !parseError && (
              <div className="p-3 rounded-lg bg-primary/10 text-primary flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>{file.name} ({questions.length} questions)</span>
              </div>
            )}

            <Button variant="outline" size="sm" onClick={downloadSampleCSV}>
              <Download className="w-4 h-4 mr-2" />
              Download Sample CSV
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep("sections")}>
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button
                onClick={() => questions.length > 0 ? setStep("preview") : null}
                disabled={questions.length === 0}
              >
                Preview Questions <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 4: PREVIEW */}
        {step === "preview" && (
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Total: {questions.length} questions | Page {currentPage} of {totalPages}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {paginatedQuestions.map((question, idx) => (
                <div key={question.id} className="p-3 border rounded-lg">
                  <div className="font-medium mb-2">Q{(currentPage - 1) * questionsPerPage + idx + 1}. {question.questionText}</div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                    <div>A) {question.optionA}</div>
                    <div>B) {question.optionB}</div>
                    <div>C) {question.optionC}</div>
                    <div>D) {question.optionD}</div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    Answer: <strong>{question.correctAnswer.toUpperCase()}</strong>
                  </div>
                  {question.explanation && (
                    <div className="text-xs mb-2">
                      Explanation: <span className="text-muted-foreground">{question.explanation}</span>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEditQuestion(question)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-destructive"
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep("upload")}>
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
              <Button onClick={handleUploadSectionQuestions} loading={isCreating}>
                {currentSectionIndex === sections.length - 1 ? "Complete" : "Next Section"} <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* EDIT MODAL */}
        {showEditModal && editingQuestion && (
          <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Edit Question</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Question Text</Label>
                  <Textarea
                    value={editingQuestion.questionText}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, questionText: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Option A</Label>
                    <Input
                      value={editingQuestion.optionA}
                      onChange={(e) => setEditingQuestion({ ...editingQuestion, optionA: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Option B</Label>
                    <Input
                      value={editingQuestion.optionB}
                      onChange={(e) => setEditingQuestion({ ...editingQuestion, optionB: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Option C</Label>
                    <Input
                      value={editingQuestion.optionC}
                      onChange={(e) => setEditingQuestion({ ...editingQuestion, optionC: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Option D</Label>
                    <Input
                      value={editingQuestion.optionD}
                      onChange={(e) => setEditingQuestion({ ...editingQuestion, optionD: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label>Correct Answer</Label>
                  <Select value={editingQuestion.correctAnswer} onValueChange={(v) => setEditingQuestion({ ...editingQuestion, correctAnswer: v })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">A</SelectItem>
                      <SelectItem value="b">B</SelectItem>
                      <SelectItem value="c">C</SelectItem>
                      <SelectItem value="d">D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Explanation</Label>
                  <Textarea
                    value={editingQuestion.explanation || ""}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, explanation: e.target.value })}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowEditModal(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSaveEdit}>
                    <Save className="w-4 h-4 mr-2" /> Save
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </DialogContent>
    </Dialog>
  )
}
