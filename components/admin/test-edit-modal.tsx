"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
import {
  Edit,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
  Loader2,
  AlertCircle,
} from "lucide-react"
import { updateQuestion, deleteQuestion, addQuestionsToTest } from "@/lib/actions/admin"
import { cn } from "@/lib/utils"

interface EditModalQuestion {
  id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
  explanation?: string
}

interface TestEditModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  test: any
  questions: EditModalQuestion[]
  onTestUpdated: () => void
}

export function TestEditModal({
  open,
  onOpenChange,
  test,
  questions: initialQuestions,
  onTestUpdated,
}: TestEditModalProps) {
  const [questions, setQuestions] = useState<EditModalQuestion[]>(initialQuestions)
  const [editingQuestion, setEditingQuestion] = useState<EditModalQuestion | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showAddNew, setShowAddNew] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const questionsPerPage = 5
  const totalPages = Math.ceil(questions.length / questionsPerPage)
  const paginatedQuestions = questions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  )

  // New question form state
  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "a" as "a" | "b" | "c" | "d",
    explanation: "",
  })

  useEffect(() => {
    setQuestions(initialQuestions)
  }, [initialQuestions, open])

  const handleEditQuestion = (question: EditModalQuestion) => {
    setEditingQuestion({ ...question })
    setShowEditModal(true)
  }

  const handleSaveEdit = async () => {
    if (!editingQuestion) return
    setIsLoading(true)
    setError(null)

    try {
      const result = await updateQuestion(editingQuestion.id, {
        question_text: editingQuestion.question_text,
        option_a: editingQuestion.option_a,
        option_b: editingQuestion.option_b,
        option_c: editingQuestion.option_c,
        option_d: editingQuestion.option_d,
        correct_answer: editingQuestion.correct_answer.toLowerCase(),
        explanation: editingQuestion.explanation || null,
      })

      if (result.success) {
        setQuestions((prev) =>
          prev.map((q) => (q.id === editingQuestion.id ? editingQuestion : q))
        )
        setShowEditModal(false)
        setEditingQuestion(null)
      } else {
        setError(result.error || "Failed to update question")
      }
    } catch (err) {
      setError("Failed to update question")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteQuestion = async (questionId: string) => {
    if (!confirm("Are you sure you want to delete this question?")) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await deleteQuestion(questionId)

      if (result.success) {
        setQuestions((prev) => prev.filter((q) => q.id !== questionId))
        if (paginatedQuestions.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1)
        }
      } else {
        setError(result.error || "Failed to delete question")
      }
    } catch (err) {
      setError("Failed to delete question")
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddNewQuestion = async () => {
    if (
      !newQuestion.questionText ||
      !newQuestion.optionA ||
      !newQuestion.optionB ||
      !newQuestion.optionC ||
      !newQuestion.optionD
    ) {
      setError("Please fill in all required fields")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await addQuestionsToTest(test.id, [
        {
          question_text: newQuestion.questionText,
          option_a: newQuestion.optionA,
          option_b: newQuestion.optionB,
          option_c: newQuestion.optionC,
          option_d: newQuestion.optionD,
          correct_answer: newQuestion.correctAnswer,
          explanation: newQuestion.explanation,
        },
      ])

      if (result.success) {
        // Add the new question locally
        const addedQuestion: EditModalQuestion = {
          id: `temp-${Date.now()}`,
          question_text: newQuestion.questionText,
          option_a: newQuestion.optionA,
          option_b: newQuestion.optionB,
          option_c: newQuestion.optionC,
          option_d: newQuestion.optionD,
          correct_answer: newQuestion.correctAnswer,
          explanation: newQuestion.explanation,
        }

        setQuestions([...questions, addedQuestion])
        setNewQuestion({
          questionText: "",
          optionA: "",
          optionB: "",
          optionC: "",
          optionD: "",
          correctAnswer: "a",
          explanation: "",
        })
        setShowAddNew(false)
        onTestUpdated()
      } else {
        setError(result.error || "Failed to add question")
      }
    } catch (err) {
      setError("Failed to add question")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Edit className="w-5 h-5 text-primary" />
              Edit Test: {test?.title}
            </DialogTitle>
            <DialogDescription>
              Manage questions and answers for this test ({questions.length} total)
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4 overflow-y-auto flex-1 pr-4">
            {/* Add New Question Button */}
            <div className="flex gap-2">
              <Button
                onClick={() => setShowAddNew(!showAddNew)}
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Add New Question
              </Button>
            </div>

            {/* Add New Question Form */}
            {showAddNew && (
              <div className="p-4 border rounded-lg bg-muted/50 space-y-3">
                <h3 className="font-medium">Add New Question</h3>

                <div>
                  <Label>Question Text *</Label>
                  <Textarea
                    placeholder="Enter the question"
                    value={newQuestion.questionText}
                    onChange={(e) =>
                      setNewQuestion({ ...newQuestion, questionText: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Option A *</Label>
                    <Input
                      placeholder="Option A"
                      value={newQuestion.optionA}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, optionA: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Option B *</Label>
                    <Input
                      placeholder="Option B"
                      value={newQuestion.optionB}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, optionB: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Option C *</Label>
                    <Input
                      placeholder="Option C"
                      value={newQuestion.optionC}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, optionC: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Option D *</Label>
                    <Input
                      placeholder="Option D"
                      value={newQuestion.optionD}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, optionD: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label>Correct Answer *</Label>
                  <Select
                    value={newQuestion.correctAnswer}
                    onValueChange={(v: "a" | "b" | "c" | "d") =>
                      setNewQuestion({ ...newQuestion, correctAnswer: v })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">Option A</SelectItem>
                      <SelectItem value="b">Option B</SelectItem>
                      <SelectItem value="c">Option C</SelectItem>
                      <SelectItem value="d">Option D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Explanation (Optional)</Label>
                  <Textarea
                    placeholder="Explanation for the answer"
                    value={newQuestion.explanation}
                    onChange={(e) =>
                      setNewQuestion({ ...newQuestion, explanation: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleAddNewQuestion}
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Adding...
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Question
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowAddNew(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-lg">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm">
                  Questions (Page {currentPage} of {totalPages})
                </h3>
              </div>

              {paginatedQuestions.map((q, idx) => (
                <div key={q.id} className="p-4 border rounded-lg bg-card">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-primary">
                      Q{(currentPage - 1) * questionsPerPage + idx + 1}
                    </span>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleEditQuestion(q)}
                        disabled={isLoading}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => handleDeleteQuestion(q.id)}
                        disabled={isLoading}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm text-foreground mb-3 font-medium">
                    {q.question_text}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(["a", "b", "c", "d"] as const).map((opt) => {
                      const optionKey = `option_${opt}` as keyof typeof q
                      const optionValue = q[optionKey] as string
                      if (!optionValue) return null

                      const isCorrect = q.correct_answer === opt
                      return (
                        <div
                          key={opt}
                          className={`flex items-start gap-2 p-2 rounded-lg text-sm ${
                            isCorrect
                              ? "bg-accent/20 text-accent border border-accent/30"
                              : "bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                              isCorrect ? "bg-accent text-accent-foreground" : "bg-muted-foreground/20"
                            }`}
                          >
                            {opt.toUpperCase()}
                          </span>
                          <span className="flex-1">{optionValue}</span>
                        </div>
                      )
                    })}
                  </div>

                  {q.explanation && (
                    <div className="mt-2 p-2 bg-amber-500/10 rounded-lg">
                      <p className="text-xs text-amber-700 dark:text-amber-400">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1 || isLoading}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum = i + 1
                  if (totalPages > 5) {
                    if (currentPage > 3) pageNum = currentPage - 2 + i
                    if (currentPage > totalPages - 2) pageNum = totalPages - 4 + i
                  }
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      disabled={isLoading}
                      className="w-8"
                    >
                      {pageNum}
                    </Button>
                  )
                })}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages || isLoading}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-4 pt-4 border-t">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Question Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Question</DialogTitle>
          </DialogHeader>

          {editingQuestion && (
            <div className="space-y-4">
              <div>
                <Label>Question Text</Label>
                <Textarea
                  value={editingQuestion.question_text}
                  onChange={(e) =>
                    setEditingQuestion({
                      ...editingQuestion,
                      question_text: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Option A</Label>
                  <Input
                    value={editingQuestion.option_a}
                    onChange={(e) =>
                      setEditingQuestion({ ...editingQuestion, option_a: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Option B</Label>
                  <Input
                    value={editingQuestion.option_b}
                    onChange={(e) =>
                      setEditingQuestion({ ...editingQuestion, option_b: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Option C</Label>
                  <Input
                    value={editingQuestion.option_c}
                    onChange={(e) =>
                      setEditingQuestion({ ...editingQuestion, option_c: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Option D</Label>
                  <Input
                    value={editingQuestion.option_d}
                    onChange={(e) =>
                      setEditingQuestion({ ...editingQuestion, option_d: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label>Correct Answer</Label>
                <Select
                  value={editingQuestion.correct_answer}
                  onValueChange={(v) =>
                    setEditingQuestion({ ...editingQuestion, correct_answer: v })
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Option A</SelectItem>
                    <SelectItem value="b">Option B</SelectItem>
                    <SelectItem value="c">Option C</SelectItem>
                    <SelectItem value="d">Option D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Explanation</Label>
                <Textarea
                  value={editingQuestion.explanation || ""}
                  onChange={(e) =>
                    setEditingQuestion({
                      ...editingQuestion,
                      explanation: e.target.value,
                    })
                  }
                  className="mt-1"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowEditModal(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button onClick={handleSaveEdit} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
