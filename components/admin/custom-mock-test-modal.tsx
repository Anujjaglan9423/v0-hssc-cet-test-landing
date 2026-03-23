"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { createCustomMockTest } from "@/lib/actions/admin"
import { toast } from "@/hooks/use-toast"

const DEFAULT_SUBJECTS = [
  { name: "Haryana GK", default: 25 },
  { name: "Mathematics", default: 25 },
  { name: "Reasoning", default: 15 },
  { name: "General Awareness", default: 15 },
  { name: "English", default: 10 },
  { name: "Hindi", default: 10 },
]

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function CustomMockTestModal({ isOpen, onClose }: Props) {
  const [title, setTitle] = useState("Custom Mock Test")
  const [percentages, setPercentages] = useState<Record<string, number>>(
    DEFAULT_SUBJECTS.reduce((acc, s) => ({ ...acc, [s.name]: s.default }), {}),
  )
  const [isLoading, setIsLoading] = useState(false)
  const [totalQuestions] = useState(100)
  const [hasNegativeMarking, setHasNegativeMarking] = useState(false)
  const [negativeMarkingPercent, setNegativeMarkingPercent] = useState(25)

  const totalPercent = Object.values(percentages).reduce((sum, p) => sum + p, 0)

  const handlePercentageChange = (subject: string, value: number) => {
    setPercentages((prev) => ({ ...prev, [subject]: Math.max(0, Math.min(100, value)) }))
  }

  const handleCreate = async () => {
    if (totalPercent !== 100) {
      toast({
        title: "Error",
        description: `Total percentage must be 100%, currently ${totalPercent}%`,
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await createCustomMockTest(title, percentages, totalQuestions, 120, hasNegativeMarking, hasNegativeMarking ? negativeMarkingPercent : 0)
      if (result.success) {
        toast({
          title: "Success",
          description: `Mock test created with ${result.questionsCount} questions`,
        })
        onClose()
        setTitle("Custom Mock Test")
        setPercentages(DEFAULT_SUBJECTS.reduce((acc, s) => ({ ...acc, [s.name]: s.default }), {}))
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Custom Mock Test</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Test Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter test title"
              disabled={isLoading}
            />
          </div>

          <div className="bg-muted/50 p-3 rounded-lg border border-border">
            <p className="text-xs font-semibold text-muted-foreground mb-3">
              SUBJECT DISTRIBUTION ({totalQuestions} questions)
            </p>
            <div className="space-y-3">
              {DEFAULT_SUBJECTS.map((subject) => (
                <div key={subject.name}>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-sm font-medium">{subject.name}</label>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary">{percentages[subject.name]}%</span>
                      <span className="text-xs text-muted-foreground">
                        ({Math.round((percentages[subject.name] / 100) * totalQuestions)} Q)
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={percentages[subject.name]}
                    onChange={(e) => handlePercentageChange(subject.name, Number(e.target.value))}
                    disabled={isLoading}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
              <span className="text-xs font-semibold">Total</span>
              <span className={`text-sm font-bold ${totalPercent === 100 ? "text-green-500" : "text-red-500"}`}>
                {totalPercent}%
              </span>
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

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={isLoading || totalPercent !== 100}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Mock Test"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
