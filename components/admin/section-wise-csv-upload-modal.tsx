"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Loader2,
  Upload,
  AlertCircle,
  CheckCircle2,
  Edit2,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { createSectionWiseTest, uploadSectionCSV } from "@/lib/actions/admin"
import Papa from "papaparse"

interface Question {
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
  explanation?: string
  exam_source?: string
  error?: string
}

type Step = "basic" | "sections" | "upload" | "preview" | "success"

export function SectionWiseCSVUploadModal({
  open,
  onOpenChange,
  onTestCreated,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTestCreated?: () => void
}) {
  const [step, setStep] = useState<Step>("basic")
  const [isLoading, setIsLoading] = useState(false)

  // Step 1: Basic Info
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [difficulty, setDifficulty] = useState("medium")
  const [negativeMarking, setNegativeMarking] = useState(false)
  const [negativePercent, setNegativePercent] = useState(0)

  // Step 2: Sections
  const [numSections, setNumSections] = useState(1)
  const [sections, setSections] = useState<Array<{ name: string; duration: number }>>([
    { name: "", duration: 0 },
  ])
  const [isSectionTimed, setIsSectionTimed] = useState(false)
  const [combinedDuration, setCombinedDuration] = useState(0)

  // Step 3: Upload
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [uploadedQuestions, setUploadedQuestions] = useState<Record<number, Question[]>>({})

  // Step 4: Preview & Edit
  const [editingQuestion, setEditingQuestion] = useState<{
    sectionIndex: number
    questionIndex: number
  } | null>(null)
  const [createdTestId, setCreatedTestId] = useState("")

  const handleNumSectionsChange = (num: number) => {
    setNumSections(num)
    const newSections = Array.from({ length: num }).map((_, i) => sections[i] || { name: "", duration: 0 })
    setSections(newSections)
    setUploadedQuestions({})
  }

  const validateQuestion = (q: Question): string | null => {
    if (!q.question_text?.trim()) return "Question text required"
    if (!q.option_a?.trim()) return "Option A required"
    if (!q.option_b?.trim()) return "Option B required"
    if (!q.option_c?.trim()) return "Option C required"
    if (!q.option_d?.trim()) return "Option D required"

    const validAnswers = ["a", "b", "c", "d"]
    const answer = q.correct_answer?.toLowerCase().trim()
    if (!validAnswers.includes(answer)) return `Answer must be A/B/C/D (got: ${q.correct_answer})`

    return null
  }

  const handleCSVUpload = (file: File) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result: any) => {
        const parsed: Question[] = result.data.map((row: any) => ({
          question_text: row.question_text || row["Question"] || "",
          option_a: row.option_a || row["Option A"] || "",
          option_b: row.option_b || row["Option B"] || "",
          option_c: row.option_c || row["Option C"] || "",
          option_d: row.option_d || row["Option D"] || "",
          correct_answer: row.correct_answer || row["Correct Answer"] || "",
          explanation: row.explanation || row["Explanation"] || "",
          exam_source: row.exam_source || row["Source"] || "",
        }))

        const withErrors = parsed.map((q) => ({
          ...q,
          error: validateQuestion(q),
        }))

        setUploadedQuestions((prev) => ({
          ...prev,
          [currentSectionIndex]: withErrors,
        }))
      },
      error: (error: any) => {
        alert(`CSV Error: ${error.message}`)
      },
    })
  }

  const updateQuestion = (sectionIndex: number, questionIndex: number, updates: Partial<Question>) => {
    setUploadedQuestions((prev) => {
      const questions = [...(prev[sectionIndex] || [])]
      const updated = { ...questions[questionIndex], ...updates }
      updated.error = validateQuestion(updated)
      questions[questionIndex] = updated
      return { ...prev, [sectionIndex]: questions }
    })
  }

  const deleteQuestion = (sectionIndex: number, questionIndex: number) => {
    setUploadedQuestions((prev) => {
      const questions = (prev[sectionIndex] || []).filter((_, i) => i !== questionIndex)
      return { ...prev, [sectionIndex]: questions }
    })
  }

  const countErrors = (sectionIndex: number) => {
    return (uploadedQuestions[sectionIndex] || []).filter((q) => q.error).length
  }

  const handleCreateTest = async () => {
    setIsLoading(true)
    try {
      const testResult = await createSectionWiseTest({
        title,
        description,
        difficulty: difficulty as "easy" | "medium" | "hard",
        has_negative_marking: negativeMarking,
        negative_marking_percent: negativePercent,
        duration: isSectionTimed ? 0 : combinedDuration,
        is_section_timed: isSectionTimed,
        sections: sections.map((s) => ({
          name: s.name,
          duration: isSectionTimed ? s.duration : undefined,
        })),
      })

      if (!testResult.success) {
        alert(`Error: ${testResult.error}`)
        return
      }

      const testId = testResult.test.id

      for (let i = 0; i < numSections; i++) {
        const questions = uploadedQuestions[i] || []
        const validQuestions = questions.filter((q) => !q.error)

        if (validQuestions.length > 0) {
          const uploadResult = await uploadSectionCSV(testId, sections[i].name, validQuestions)
          if (!uploadResult.success) {
            alert(`Error uploading ${sections[i].name}: ${uploadResult.error}`)
            return
          }
        }
      }

      setCreatedTestId(testId)
      setStep("success")
      setTimeout(() => {
        onTestCreated?.()
        resetModal()
      }, 2000)
    } catch (error) {
      console.error("Error:", error)
      alert("Error creating test")
    } finally {
      setIsLoading(false)
    }
  }

  const resetModal = () => {
    setStep("basic")
    setTitle("")
    setDescription("")
    setDifficulty("medium")
    setNegativeMarking(false)
    setNegativePercent(0)
    setNumSections(1)
    setSections([{ name: "", duration: 0 }])
    setIsSectionTimed(false)
    setCombinedDuration(0)
    setCurrentSectionIndex(0)
    setUploadedQuestions({})
    setEditingQuestion(null)
    onOpenChange(false)
  }

  const allUploaded = Array.from({ length: numSections }).every((_, i) => (uploadedQuestions[i] || []).length > 0)
  const allValid = Object.entries(uploadedQuestions).every(([_, questions]) => questions.every((q) => !q.error))

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Section-wise Test</DialogTitle>
          <DialogDescription>
            {step === "basic" && "Step 1 of 5: Basic Information"}
            {step === "sections" && "Step 2 of 5: Define Sections"}
            {step === "upload" && "Step 3 of 5: Upload CSV Files"}
            {step === "preview" && "Step 4 of 5: Review Questions"}
            {step === "success" && "Step 5 of 5: Success!"}
          </DialogDescription>
        </DialogHeader>

        {/* STEP 1: BASIC */}
        {step === "basic" && (
          <div className="space-y-4">
            <div>
              <Label>Test Title *</Label>
              <Input placeholder="e.g., HSSC CET 2024" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
              <Label>Description</Label>
              <Textarea
                placeholder="Optional description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Difficulty</Label>
                <Select value={difficulty} onValueChange={setDifficulty}>
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

              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={negativeMarking}
                    onChange={(e) => setNegativeMarking(e.target.checked)}
                  />
                  <span className="text-sm">Negative Marking</span>
                </label>
              </div>
            </div>

            {negativeMarking && (
              <div>
                <Label>Negative Marking Percent</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={negativePercent}
                  onChange={(e) => setNegativePercent(parseFloat(e.target.value) || 0)}
                />
              </div>
            )}
          </div>
        )}

        {/* STEP 2: SECTIONS */}
        {step === "sections" && (
          <div className="space-y-4">
            <div>
              <Label>Number of Sections *</Label>
              <Input
                type="number"
                min="1"
                max="10"
                value={numSections}
                onChange={(e) => handleNumSectionsChange(parseInt(e.target.value) || 1)}
              />
            </div>

            <div className="space-y-3">
              {sections.map((section, i) => (
                <Card key={i}>
                  <CardContent className="pt-4 space-y-2">
                    <Label className="text-xs">Section {i + 1} Name</Label>
                    <Input
                      placeholder="e.g., English, Math, General Awareness"
                      value={section.name}
                      onChange={(e) => {
                        const newSections = [...sections]
                        newSections[i].name = e.target.value
                        setSections(newSections)
                      }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="border-t pt-4">
              <Label className="block mb-3">Duration Configuration</Label>

              <label className="flex items-center gap-2 mb-3 cursor-pointer">
                <input
                  type="radio"
                  checked={!isSectionTimed}
                  onChange={() => setIsSectionTimed(false)}
                />
                <span className="text-sm">Combined timing for all sections</span>
              </label>

              {!isSectionTimed && (
                <Input
                  type="number"
                  placeholder="Total minutes"
                  value={combinedDuration}
                  onChange={(e) => setCombinedDuration(parseInt(e.target.value) || 0)}
                  className="ml-6 mb-3"
                />
              )}

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={isSectionTimed}
                  onChange={() => setIsSectionTimed(true)}
                />
                <span className="text-sm">Separate timing per section</span>
              </label>

              {isSectionTimed && (
                <div className="ml-6 mt-3 space-y-2">
                  {sections.map((section, i) => (
                    <div key={i}>
                      <Label className="text-xs">{section.name || `Section ${i + 1}`}</Label>
                      <Input
                        type="number"
                        placeholder="Minutes"
                        value={section.duration}
                        onChange={(e) => {
                          const newSections = [...sections]
                          newSections[i].duration = parseInt(e.target.value) || 0
                          setSections(newSections)
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: UPLOAD */}
        {step === "upload" && (
          <div className="space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {sections.map((section, i) => (
                <Button
                  key={i}
                  variant={currentSectionIndex === i ? "default" : "outline"}
                  onClick={() => setCurrentSectionIndex(i)}
                  className="whitespace-nowrap"
                >
                  {section.name || `Section ${i + 1}`}
                  {uploadedQuestions[i]?.length > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {uploadedQuestions[i].length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            <Card className="border-2 border-dashed">
              <CardContent className="pt-6">
                <div
                  className="p-8 text-center cursor-pointer hover:bg-gray-50 transition"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()
                    const file = e.dataTransfer.files[0]
                    if (file) handleCSVUpload(file)
                  }}
                >
                  <input
                    type="file"
                    accept=".csv"
                    onChange={(e) => {
                      if (e.target.files?.[0]) handleCSVUpload(e.target.files[0])
                    }}
                    className="hidden"
                    id="csv-file"
                  />
                  <label htmlFor="csv-file" className="cursor-pointer block">
                    <Upload className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-medium">Upload CSV for {sections[currentSectionIndex].name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Drop CSV or click to browse</p>
                  </label>
                </div>
              </CardContent>
            </Card>

            {uploadedQuestions[currentSectionIndex]?.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Questions: {uploadedQuestions[currentSectionIndex].length}
                  </CardTitle>
                </CardHeader>
                <CardContent className="max-h-[250px] overflow-y-auto space-y-2">
                  {uploadedQuestions[currentSectionIndex].map((q, i) => (
                    <div key={i} className="text-xs p-2 bg-muted rounded flex justify-between items-start gap-2">
                      <div className="flex-1">
                        <p className="font-medium line-clamp-1">{q.question_text}</p>
                        <p className="text-muted-foreground">Ans: {q.correct_answer}</p>
                      </div>
                      {q.error && <Badge variant="destructive">Error</Badge>}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* STEP 4: PREVIEW */}
        {step === "preview" && (
          <div className="space-y-4">
            <Card className="bg-blue-50 dark:bg-blue-950">
              <CardContent className="pt-4">
                <p className="text-sm font-medium">
                  Total Questions:{" "}
                  {Object.values(uploadedQuestions).reduce((sum, q) => sum + q.length, 0)}
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {sections.map((section, i) => {
                const errors = countErrors(i)
                return (
                  <Button
                    key={i}
                    variant={editingQuestion?.sectionIndex === i ? "default" : "outline"}
                    onClick={() =>
                      setEditingQuestion({ sectionIndex: i, questionIndex: 0 })
                    }
                    className="whitespace-nowrap"
                  >
                    {section.name}
                    <Badge
                      variant={errors > 0 ? "destructive" : "secondary"}
                      className="ml-2"
                    >
                      {errors > 0 ? `${errors} err` : uploadedQuestions[i]?.length || 0}
                    </Badge>
                  </Button>
                )
              })}
            </div>

            {editingQuestion && uploadedQuestions[editingQuestion.sectionIndex] && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Q{editingQuestion.questionIndex + 1} /{" "}
                    {uploadedQuestions[editingQuestion.sectionIndex].length}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {(() => {
                    const q = uploadedQuestions[editingQuestion.sectionIndex][editingQuestion.questionIndex]
                    return (
                      <>
                        {q.error && (
                          <div className="p-2 bg-red-50 border border-red-200 rounded flex gap-2">
                            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-red-700">{q.error}</span>
                          </div>
                        )}

                        <div>
                          <Label className="text-xs">Question *</Label>
                          <Textarea
                            value={q.question_text}
                            onChange={(e) =>
                              updateQuestion(editingQuestion.sectionIndex, editingQuestion.questionIndex, {
                                question_text: e.target.value,
                              })
                            }
                            rows={2}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {(["option_a", "option_b", "option_c", "option_d"] as const).map((opt) => (
                            <div key={opt}>
                              <Label className="text-xs">{opt.toUpperCase()}</Label>
                              <Input
                                value={q[opt]}
                                onChange={(e) =>
                                  updateQuestion(editingQuestion.sectionIndex, editingQuestion.questionIndex, {
                                    [opt]: e.target.value,
                                  })
                                }
                              />
                            </div>
                          ))}
                        </div>

                        <div>
                          <Label className="text-xs">Correct Answer *</Label>
                          <Select
                            value={q.correct_answer.toUpperCase()}
                            onValueChange={(value) =>
                              updateQuestion(editingQuestion.sectionIndex, editingQuestion.questionIndex, {
                                correct_answer: value.toLowerCase(),
                              })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="A">A</SelectItem>
                              <SelectItem value="B">B</SelectItem>
                              <SelectItem value="C">C</SelectItem>
                              <SelectItem value="D">D</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="text-xs">Explanation</Label>
                          <Textarea
                            value={q.explanation || ""}
                            onChange={(e) =>
                              updateQuestion(editingQuestion.sectionIndex, editingQuestion.questionIndex, {
                                explanation: e.target.value,
                              })
                            }
                            rows={2}
                            placeholder="Why is this answer correct?"
                          />
                        </div>

                        <div className="flex gap-2 pt-2 border-t">
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={editingQuestion.questionIndex === 0}
                            onClick={() => {
                              setEditingQuestion({
                                ...editingQuestion,
                                questionIndex: editingQuestion.questionIndex - 1,
                              })
                            }}
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={
                              editingQuestion.questionIndex >=
                              (uploadedQuestions[editingQuestion.sectionIndex]?.length || 0) - 1
                            }
                            onClick={() => {
                              setEditingQuestion({
                                ...editingQuestion,
                                questionIndex: editingQuestion.questionIndex + 1,
                              })
                            }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() =>
                              deleteQuestion(editingQuestion.sectionIndex, editingQuestion.questionIndex)
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </>
                    )
                  })()}
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* STEP 5: SUCCESS */}
        {step === "success" && (
          <div className="text-center py-8">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Test Created Successfully!</h3>
            <p className="text-sm text-muted-foreground">ID: {createdTestId}</p>
          </div>
        )}

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => {
              if (step === "basic") onOpenChange(false)
              else if (step === "sections") setStep("basic")
              else if (step === "upload") setStep("sections")
              else if (step === "preview") setStep("upload")
            }}
            disabled={isLoading || step === "success"}
          >
            {step === "basic" ? "Cancel" : "Back"}
          </Button>

          <Button
            onClick={() => {
              if (step === "basic") {
                if (!title.trim()) {
                  alert("Enter test title")
                  return
                }
                setStep("sections")
              } else if (step === "sections") {
                if (sections.some((s) => !s.name.trim())) {
                  alert("Name all sections")
                  return
                }
                setStep("upload")
              } else if (step === "upload") {
                if (!allUploaded) {
                  alert("Upload CSV for all sections")
                  return
                }
                setStep("preview")
              } else if (step === "preview") {
                if (!allValid) {
                  alert("Fix all errors before creating")
                  return
                }
                handleCreateTest()
              }
            }}
            disabled={isLoading || (step === "preview" && !allValid)}
          >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {step === "preview" ? "Create Test" : step === "success" ? "Done" : "Next"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
