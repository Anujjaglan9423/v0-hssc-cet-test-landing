'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, CheckCircle2, Clock3, FileQuestion, Play, RotateCcw, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import FooterLinkNavbar from '@/components/footer-link-navbar'
import FooterLinkFooter from '@/components/footer-link-footer'

type Subject = 'Haryana GK' | 'General Awareness' | 'Mathematics' | 'Reasoning'
type Question = { question: string; options: string[]; answer: number }

const questionTemplates: Record<Subject, Question[]> = {
  'Haryana GK': [
    { question: 'Haryana was formed as a separate state on which date?', options: ['1 November 1966', '15 August 1947', '26 January 1950', '1 April 1937'], answer: 0 },
    { question: 'What is the capital of Haryana?', options: ['Gurugram', 'Chandigarh', 'Hisar', 'Rohtak'], answer: 1 },
    { question: 'Which river forms the eastern boundary of Haryana?', options: ['Yamuna', 'Ghaggar', 'Saraswati', 'Markanda'], answer: 0 },
    { question: 'The Surajkund Crafts Mela is held in which district?', options: ['Faridabad', 'Panipat', 'Karnal', 'Sonipat'], answer: 0 },
    { question: 'Which city is known as the Cyber City of Haryana?', options: ['Ambala', 'Gurugram', 'Bhiwani', 'Jind'], answer: 1 },
  ],
  'General Awareness': [
    { question: 'The Constitution of India came into effect on:', options: ['15 August 1947', '26 January 1950', '26 November 1949', '2 October 1950'], answer: 1 },
    { question: 'Which is the largest planet in our solar system?', options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'], answer: 2 },
    { question: 'Who is known as the Father of the Indian Constitution?', options: ['Mahatma Gandhi', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel'], answer: 1 },
    { question: 'What is the national aquatic animal of India?', options: ['Blue whale', 'River dolphin', 'Crocodile', 'Turtle'], answer: 1 },
    { question: 'Which gas is most abundant in Earth’s atmosphere?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], answer: 2 },
  ],
  Mathematics: [
    { question: 'What is 25% of 240?', options: ['40', '50', '60', '80'], answer: 2 },
    { question: 'If 3x + 5 = 20, what is x?', options: ['3', '5', '7', '8'], answer: 1 },
    { question: 'The average of 10, 20 and 30 is:', options: ['15', '20', '25', '30'], answer: 1 },
    { question: 'A triangle with all sides equal is called:', options: ['Isosceles', 'Scalene', 'Equilateral', 'Right angled'], answer: 2 },
    { question: 'What is the simple interest on ₹1,000 at 10% for 2 years?', options: ['₹100', '₹150', '₹200', '₹250'], answer: 2 },
  ],
  Reasoning: [
    { question: 'Find the next number: 2, 4, 8, 16, ?', options: ['20', '24', '30', '32'], answer: 3 },
    { question: 'If CAT is coded as DBU, how is DOG coded?', options: ['EPH', 'FPI', 'CNE', 'EOH'], answer: 0 },
    { question: 'Which one is different from the rest?', options: ['Apple', 'Mango', 'Carrot', 'Banana'], answer: 2 },
    { question: 'A person facing north turns right. Which direction is he facing?', options: ['West', 'East', 'South', 'North'], answer: 1 },
    { question: 'Book is to Reading as Fork is to:', options: ['Writing', 'Eating', 'Drawing', 'Cooking'], answer: 1 },
  ],
}

const subjects = Object.keys(questionTemplates) as Subject[]

function makeTwentyFive(subject: Subject) {
  const source = questionTemplates[subject]
  return Array.from({ length: 25 }, (_, index) => ({ ...source[index % source.length], question: `${index + 1}. ${source[index % source.length].question}` }))
}

export default function MockTestPage() {
  const [subject, setSubject] = useState<Subject>('Haryana GK')
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const questions = useMemo(() => makeTwentyFive(subject), [subject])
  const answered = Object.keys(answers).length
  const score = questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0)

  function chooseSubject(next: Subject) {
    setSubject(next)
    setStarted(false)
    setCurrent(0)
    setAnswers({})
  }

  return (
    <>
      <FooterLinkNavbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary mb-8 text-sm font-medium"><ArrowLeft className="w-4 h-4" />Back to Home</Link>
          <div className="mb-10"><Badge className="mb-4">Hardcoded practice series</Badge><h1 className="text-4xl font-bold mb-3">Subject Mock Tests</h1><p className="text-lg text-muted-foreground">Choose a subject and practice 25 exam-style questions. Every question is available without a database call.</p></div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
            <Card><CardContent className="p-4"><p className="font-semibold mb-3">Choose subject</p><div className="space-y-2">{subjects.map((item) => <button key={item} onClick={() => chooseSubject(item)} className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${subject === item ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>{item}</button>)}</div></CardContent></Card>
            {!started ? <Card><CardContent className="p-8 sm:p-12 text-center"><div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Target className="h-8 w-8" /></div><h2 className="text-2xl font-bold mb-2">{subject} Mock Test</h2><p className="text-muted-foreground mb-8">25 questions · 25 marks · 20 minutes</p><Button size="lg" onClick={() => setStarted(true)} className="gap-2"><Play className="h-4 w-4" />Start Test</Button></CardContent></Card> : <Card><CardContent className="p-5 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3 mb-6"><div><p className="text-sm text-muted-foreground">{subject}</p><h2 className="text-xl font-bold">Question {current + 1} of 25</h2></div><div className="flex gap-4 text-sm text-muted-foreground"><span className="flex gap-1 items-center"><Clock3 className="w-4 h-4" />20 min</span><span className="flex gap-1 items-center"><FileQuestion className="w-4 h-4" />{answered}/25 answered</span></div></div><div className="h-2 bg-muted rounded-full mb-8"><div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((current + 1) / 25) * 100}%` }} /></div><h3 className="text-lg font-semibold mb-5">{questions[current].question}</h3><div className="grid gap-3">{questions[current].options.map((option, index) => <button key={option} onClick={() => setAnswers((previous) => ({ ...previous, [current]: index }))} className={`rounded-xl border p-4 text-left transition-colors ${answers[current] === index ? 'border-primary bg-primary/10' : 'hover:border-primary/50'}`}><span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>{option}</button>)}</div><div className="flex justify-between mt-8"><Button variant="outline" disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}>Previous</Button>{current < 24 ? <Button onClick={() => setCurrent((value) => value + 1)}>Next</Button> : <Button onClick={() => setStarted(false)} className="gap-2"><CheckCircle2 className="w-4 h-4" />Finish: {score}/25</Button>}</div><Button variant="ghost" size="sm" className="mt-4 gap-2" onClick={() => { setStarted(false); setAnswers({}); setCurrent(0) }}><RotateCcw className="w-4 h-4" />Reset test</Button></CardContent></Card>}
          </div>
          {!started && <div className="grid sm:grid-cols-3 gap-4 mt-8"><Card><CardContent className="p-5 flex gap-3"><BookOpen className="text-primary" /><div><p className="font-semibold">25 questions</p><p className="text-sm text-muted-foreground">Selected by subject</p></div></CardContent></Card><Card><CardContent className="p-5 flex gap-3"><Clock3 className="text-primary" /><div><p className="font-semibold">Timed practice</p><p className="text-sm text-muted-foreground">Build exam confidence</p></div></CardContent></Card><Card><CardContent className="p-5 flex gap-3"><CheckCircle2 className="text-primary" /><div><p className="font-semibold">Instant score</p><p className="text-sm text-muted-foreground">Review your answers</p></div></CardContent></Card></div>}
        </div>
      </main>
      <FooterLinkFooter />
    </>
  )
}
