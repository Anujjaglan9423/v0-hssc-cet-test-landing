"use client"

import { useState } from "react"
import { ChartCard } from "@/components/dashboard/chart-card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Zap, BookOpen, Clock, Play, Shuffle, Target, Brain } from "lucide-react"

const subjects = [
  { id: "gs", name: "General Studies", icon: BookOpen, color: "primary" },
  { id: "reasoning", name: "Reasoning", icon: Brain, color: "accent" },
  { id: "math", name: "Mathematics", icon: Target, color: "amber-500" },
  { id: "english", name: "English", icon: BookOpen, color: "destructive" },
  { id: "hindi", name: "Hindi", icon: BookOpen, color: "primary" },
  { id: "current", name: "Current Affairs", icon: Zap, color: "accent" },
]

const topics = {
  gs: ["History", "Geography", "Polity", "Economy", "Science", "Haryana GK"],
  reasoning: ["Blood Relations", "Coding-Decoding", "Direction", "Syllogism", "Analogy", "Classification"],
  math: ["Number Series", "Percentage", "Profit & Loss", "Time & Work", "Algebra", "Geometry"],
  english: ["Grammar", "Vocabulary", "Comprehension", "Fill in Blanks", "Synonyms", "Antonyms"],
  hindi: ["Grammar", "Vocabulary", "Comprehension", "Idioms", "Sandhi", "Samas"],
  current: ["National", "International", "Sports", "Awards", "Appointments", "Haryana News"],
}

export default function StudentPracticePage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [questionCount, setQuestionCount] = useState([20])
  const [difficulty, setDifficulty] = useState("medium")
  const [timeLimit, setTimeLimit] = useState("timed")

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]))
  }

  const startPractice = () => {
    alert(
      `Starting practice:\nSubject: ${selectedSubject}\nTopics: ${selectedTopics.join(", ")}\nQuestions: ${questionCount[0]}\nDifficulty: ${difficulty}\nTime: ${timeLimit}`,
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Practice Zone</h1>
        <p className="text-muted-foreground mt-1">Customize your practice session</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Selection */}
        <ChartCard title="1. Select Subject" className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubject(subject.id)
                  setSelectedTopics([])
                }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedSubject === subject.id
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                <subject.icon
                  className={`w-8 h-8 mb-3 ${
                    selectedSubject === subject.id ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <p className="font-medium text-foreground">{subject.name}</p>
              </button>
            ))}
          </div>
        </ChartCard>

        {/* Quick Practice */}
        <ChartCard title="Quick Start">
          <div className="space-y-4">
            <button className="w-full p-4 rounded-xl bg-primary/20 hover:bg-primary/30 transition-colors flex items-center gap-3">
              <Shuffle className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-medium text-foreground">Random Practice</p>
                <p className="text-sm text-muted-foreground">Mixed questions</p>
              </div>
            </button>
            <button className="w-full p-4 rounded-xl bg-accent/20 hover:bg-accent/30 transition-colors flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <div className="text-left">
                <p className="font-medium text-foreground">Speed Test</p>
                <p className="text-sm text-muted-foreground">30 Qs in 15 min</p>
              </div>
            </button>
            <button className="w-full p-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 transition-colors flex items-center gap-3">
              <Target className="w-6 h-6 text-amber-500" />
              <div className="text-left">
                <p className="font-medium text-foreground">Weak Areas</p>
                <p className="text-sm text-muted-foreground">Focus on improvement</p>
              </div>
            </button>
          </div>
        </ChartCard>
      </div>

      {/* Topic Selection */}
      {selectedSubject && (
        <ChartCard title="2. Select Topics">
          <div className="flex flex-wrap gap-3">
            {topics[selectedSubject as keyof typeof topics].map((topic) => (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedTopics.includes(topic)
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary bg-card text-foreground"
                }`}
              >
                {topic}
              </button>
            ))}
            <button
              onClick={() => setSelectedTopics(topics[selectedSubject as keyof typeof topics])}
              className="px-4 py-2 rounded-full border border-dashed border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              Select All
            </button>
          </div>
        </ChartCard>
      )}

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartCard title="3. Number of Questions">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-primary">{questionCount[0]}</span>
              <span className="text-muted-foreground">questions</span>
            </div>
            <Slider
              value={questionCount}
              onValueChange={setQuestionCount}
              min={10}
              max={100}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>10</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>
        </ChartCard>

        <ChartCard title="4. Difficulty Level">
          <RadioGroup value={difficulty} onValueChange={setDifficulty} className="space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="easy" id="easy" />
              <Label htmlFor="easy" className="flex-1 cursor-pointer">
                <span className="font-medium text-accent">Easy</span>
                <p className="text-xs text-muted-foreground">Basic concepts</p>
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="flex-1 cursor-pointer">
                <span className="font-medium text-amber-500">Medium</span>
                <p className="text-xs text-muted-foreground">Moderate difficulty</p>
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="hard" id="hard" />
              <Label htmlFor="hard" className="flex-1 cursor-pointer">
                <span className="font-medium text-destructive">Hard</span>
                <p className="text-xs text-muted-foreground">Advanced questions</p>
              </Label>
            </div>
          </RadioGroup>
        </ChartCard>

        <ChartCard title="5. Time Setting">
          <RadioGroup value={timeLimit} onValueChange={setTimeLimit} className="space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="timed" id="timed" />
              <Label htmlFor="timed" className="flex-1 cursor-pointer">
                <span className="font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Timed
                </span>
                <p className="text-xs text-muted-foreground">1 min per question</p>
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <RadioGroupItem value="untimed" id="untimed" />
              <Label htmlFor="untimed" className="flex-1 cursor-pointer">
                <span className="font-medium text-foreground">Untimed</span>
                <p className="text-xs text-muted-foreground">No time limit</p>
              </Label>
            </div>
          </RadioGroup>
        </ChartCard>
      </div>

      {/* Start Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          className="gap-2 px-12 py-6 text-lg"
          onClick={startPractice}
          disabled={!selectedSubject || selectedTopics.length === 0}
        >
          <Play className="w-5 h-5" />
          Start Practice
        </Button>
      </div>
    </div>
  )
}
