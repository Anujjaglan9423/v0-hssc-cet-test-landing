export interface HardcodedQuestion {
  id: string
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
  explanation: string
}

export interface HardcodedMockTest {
  id: string
  title: string
  duration: number
  questions: HardcodedQuestion[]
}

const questions = (prefix: string): HardcodedQuestion[] => [
  { id: `${prefix}-q1`, question_text: "Which river is known as the lifeline of Haryana?", option_a: "Yamuna", option_b: "Ghaggar", option_c: "Markanda", option_d: "Sahibi", correct_answer: "A", explanation: "The Yamuna forms Haryana's eastern boundary and is one of its most important rivers." },
  { id: `${prefix}-q2`, question_text: "If 25% of a number is 45, what is the number?", option_a: "120", option_b: "150", option_c: "180", option_d: "200", correct_answer: "C", explanation: "25% is one-fourth, so the number is 45 × 4 = 180." },
  { id: `${prefix}-q3`, question_text: "Choose the word closest in meaning to 'accurate'.", option_a: "Exact", option_b: "Rapid", option_c: "Difficult", option_d: "Useful", correct_answer: "A", explanation: "Accurate means correct or exact." },
  { id: `${prefix}-q4`, question_text: "What comes next in the series: 3, 6, 12, 24, ?", option_a: "36", option_b: "48", option_c: "54", option_d: "72", correct_answer: "B", explanation: "Each term is multiplied by 2, so the next term is 48." },
  { id: `${prefix}-q5`, question_text: "Which document should candidates check for the latest exam eligibility and dates?", option_a: "An unofficial post", option_b: "A forwarded message", option_c: "The official notification", option_d: "An old answer key", correct_answer: "C", explanation: "The recruiting authority's official notification is the reliable source for current requirements." },
  ...Array.from({ length: 20 }, (_, index) => ({
    id: `${prefix}-q${index + 6}`,
    question_text: `Category question ${index + 6}: revise the same exam-bank skill with a timed application question.`,
    option_a: "Option A",
    option_b: "Option B",
    option_c: "Option C",
    option_d: "Option D",
    correct_answer: "A",
    explanation: "Review the corresponding category question-bank topic and the official solution before moving on.",
  })),
]

export const hardcodedMockTests: Record<string, HardcodedMockTest> = Object.fromEntries(
  ["haryana-cet", "haryana-police", "haryana-group-d", "ssc-cgl", "ssc-chsl", "uksssc-vdo", "bank-clerk-po", "railway-rrb"].flatMap((examId) => [
    [`${examId}-practice-1`, { id: `${examId}-practice-1`, title: `${examId.replaceAll("-", " ").toUpperCase()} Practice Test 1`, duration: 10, questions: questions(`${examId}-practice-1`) }],
    [`${examId}-practice-2`, { id: `${examId}-practice-2`, title: `${examId.replaceAll("-", " ").toUpperCase()} Revision Test 2`, duration: 10, questions: questions(`${examId}-practice-2`) }],
  ])
)
