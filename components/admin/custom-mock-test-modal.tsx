"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, ChevronRight, ChevronLeft } from "lucide-react"
import { createExamBasedMockTest, getExamsWithSubjects } from "@/lib/actions/admin"
import { toast } from "@/hooks/use-toast"

interface Exam {
  id: string
  name: string
  subjects?: { id: string; name: string }[]
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function CustomMockTestModal({ isOpen, onClose }: Props) {
  // Step 1: Exam Selection
  const [exams, setExams] = useState<Exam[]>([])
  const [selectedExamId, setSelectedExamId] = useState<string>("")
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null)
  
  // Step 2: Subject Selection & Percentage Distribution
  const [subjectPercentages, setSubjectPercentages] = useState<Record<string, number>>({})
  
  // Step 3: Test Configuration
  const [title, setTitle] = useState("")
  const [totalQuestions, setTotalQuestions] = useState(100)
  const [duration, setDuration] = useState(120)
  const [hasNegativeMarking, setHasNegativeMarking] = useState(false)
  const [negativeMarkingPercent, setNegativeMarkingPercent] = useState(25)
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Load exams on mount
  useEffect(() => {
    const loadExams = async () => {
      const data = await getExamsWithSubjects()
      setExams(data)
    }
    if (isOpen) {
      loadExams()
    }
  }, [isOpen])

  const totalPercent = Object.values(subjectPercentages).reduce((sum, p) => sum + p, 0)

  const handleExamSelect = (exam: Exam) => {
    setSelectedExamId(exam.id)
    setSelectedExam(exam)
    
    // Initialize percentages equally for all subjects
    const subjects = exam.subjects || []
    const defaultPercentage = subjects.length > 0 ? Math.round(100 / subjects.length) : 0
    const newPercentages: Record<string, number> = {}
    
    subjects.forEach((subject, index) => {
      if (index === subjects.length - 1) {
        // Last subject gets remainder to ensure 100%
        newPercentages[subject.name] = 100 - (defaultPercentage * (subjects.length - 1))
      } else {
        newPercentages[subject.name] = defaultPercentage
      }
    })
    
    setSubjectPercentages(newPercentages)
    setTitle(`${exam.name} Mock Test`)
    setCurrentStep(2)
  }

  const handlePercentageChange = (subject: string, value: number) => {
    setSubjectPercentages((prev) => ({ ...prev, [subject]: Math.max(0, Math.min(100, value)) }))
  }

  const handleCreate = async () => {
    if (!selectedExamId) {
      toast({
        title: "Error",
        description: "Please select an exam",
        variant: "destructive",
      })
      return
    }

    if (totalPercent !== 100) {
      toast({
        title: "Error",
        description: `Total percentage must be 100%, currently ${totalPercent}%`,
        variant: "destructive",
      })
      return
    }

    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Please enter a test title",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await createExamBasedMockTest({
        title,
        exam_id: selectedExamId,
        percentages: subjectPercentages,
        total_questions: totalQuestions,
        duration,
        has_negative_marking: hasNegativeMarking,
        negative_marking_percent: hasNegativeMarking ? negativeMarkingPercent : 0,
      })

      if (result.success) {
        toast({
          title: "Success",
          description: `Mock test created with ${result.questionsCount} questions`,
        })
        handleClose()
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setCurrentStep(1)
    setSelectedExamId("")
    setSelectedExam(null)
    setSubjectPercentages({})
    setTitle("")
    setTotalQuestions(100)
    setDuration(120)
    setHasNegativeMarking(false)
    setNegativeMarkingPercent(25)
    onClose()
  }

  const canProceedToStep2 = selectedExamId && selectedExam
  const canProceedToStep3 = totalPercent === 100
  const canCreate = totalPercent === 100 && title.trim() && totalQuestions > 0

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Mock Test</DialogTitle>
          <p className="text-xs text-muted-foreground mt-2">Step {currentStep} of 3</p>
        </DialogHeader>

        <div className="space-y-4">
          {/* Step 1: Exam Selection */}
          {currentStep === 1 && (
            <div className="space-y-3">
              <p className="text-sm font-medium">Select Exam Type</p>
              <div className="grid grid-cols-2 gap-3">
                {exams.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => handleExamSelect(exam)}
                    disabled={isLoading}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedExamId === exam.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <p className="font-medium text-sm">{exam.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {exam.subjects?.length || 0} subjects
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Subject Distribution */}
          {currentStep === 2 && selectedExam && (
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-3">
                  {selectedExam.name} - Subject Distribution ({totalQuestions} questions)
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border border-border space-y-3">
                  {selectedExam.subjects?.map((subject) => (
                    <div key={subject.id}>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">{subject.name}</label>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-primary">
                            {subjectPercentages[subject.name] || 0}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({Math.round(((subjectPercentages[subject.name] || 0) / 100) * totalQuestions)} Q)
                          </span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={subjectPercentages[subject.name] || 0}
                        onChange={(e) => handlePercentageChange(subject.name, Number(e.target.value))}
                        disabled={isLoading}
                        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                  ))}
                  <div className="mt-4 pt-3 border-t border-border flex justify-between items-center">
                    <span className="text-xs font-semibold">Total Distribution</span>
                    <span className={`text-sm font-bold ${totalPercent === 100 ? "text-green-600" : "text-red-600"}`}>
                      {totalPercent}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Test Configuration */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Test Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter test title"
                  disabled={isLoading}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Total Questions</label>
                  <Input
                    type="number"
                    min="5"
                    max="500"
                    value={totalQuestions}
                    onChange={(e) => setTotalQuestions(Math.max(5, Number(e.target.value)))}
                    disabled={isLoading}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Duration (minutes)</label>
                  <Input
                    type="number"
                    min="5"
                    max="600"
                    value={duration}
                    onChange={(e) => setDuration(Math.max(5, Number(e.target.value)))}
                    disabled={isLoading}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Negative Marking Section */}
              <div className="p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium">Negative Marking</label>
                    <p className="text-xs text-muted-foreground">Deduct marks for wrong answers</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasNegativeMarking}
                      onChange={(e) => setHasNegativeMarking(e.target.checked)}
                      className="sr-only peer"
                      disabled={isLoading}
                    />
                    <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {hasNegativeMarking && (
                  <div className="mt-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                    <label className="text-xs text-destructive font-medium">Deduction Percentage</label>
                    <div className="flex items-center gap-2 mt-2">
                      <Input
                        type="number"
                        min="1"
                        max="100"
                        value={negativeMarkingPercent}
                        onChange={(e) => setNegativeMarkingPercent(Number(e.target.value))}
                        className="w-20 h-8"
                        disabled={isLoading}
                      />
                      <span className="text-xs text-muted-foreground">% deducted per wrong answer</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between">
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <div className="flex gap-2">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={isLoading}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            {currentStep < 3 && (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={isLoading || (currentStep === 1 && !canProceedToStep2) || (currentStep === 2 && !canProceedToStep3)}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
            {currentStep === 3 && (
              <Button onClick={handleCreate} disabled={isLoading || !canCreate}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Mock Test"
                )}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
