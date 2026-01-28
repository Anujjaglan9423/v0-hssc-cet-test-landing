import { generateText } from 'ai'
import { z } from 'zod'

const questionSchema = z.object({
  questionEn: z.string(),
  questionHi: z.string(),
  optionsEn: z.array(z.string()),
  optionsHi: z.array(z.string()),
  correct: z.number(),
  explanationEn: z.string(),
  explanationHi: z.string(),
  category: z.string(),
})

// Store recent questions to avoid repetition
const recentQuestions = new Set<string>()

export async function POST(req: Request) {
  try {
    const { excludeTopics = [] } = await req.json().catch(() => ({}))
    
    const categories = [
      'Current Affairs',
      'Reasoning',
      'Mathematics',
      'General Knowledge',
    ]
    
    // Select a category that hasn't been used recently
    let selectedCategory = categories[Math.floor(Math.random() * categories.length)]
    const maxAttempts = 3
    let attempts = 0
    
    while (excludeTopics.includes(selectedCategory) && attempts < maxAttempts) {
      selectedCategory = categories[Math.floor(Math.random() * categories.length)]
      attempts++
    }

    const prompt = `Generate a UNIQUE exam-style multiple choice question for competitive exams like HSSC, CET, State Exams, or government job tests in India.

Category: ${selectedCategory}

CRITICAL: Make this question DIFFERENT from common exam questions. Use specific, unique topics.
IMPORTANT: Generate the question in BOTH English and Hindi with accurate translations.

The question should be:
- Unique and specific (NOT generic or commonly repeated)
- Challenging but fair
- Focused on India-specific topics, current affairs, Indian history, Indian geography, or Indian politics
- Have exactly 4 multiple choice options with 1 correct answer
- Be relevant to Indian competitive exams

RESPOND WITH ONLY A VALID JSON OBJECT (no markdown, no backticks, no comments):
{
  "questionEn": "Specific question in English?",
  "questionHi": "हिंदी में विशिष्ट प्रश्न?",
  "optionsEn": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "optionsHi": ["विकल्प 1", "विकल्प 2", "विकल्प 3", "विकल्प 4"],
  "correct": 0,
  "explanationEn": "Concise explanation in English.",
  "explanationHi": "हिंदी में संक्षिप्त व्याख्या।",
  "category": "${selectedCategory}"
}`

    const result = await generateText({
      model: 'openai/gpt-4o-mini',
      prompt,
      temperature: 0.85,
      maxTokens: 600,
    })

    // Parse the JSON response
    let parsedQuestion
    try {
      // Remove any markdown code blocks if present
      let jsonText = result.text.trim()
      if (jsonText.includes('```json')) {
        jsonText = jsonText
          .replace(/```json\n?/g, '')
          .replace(/```\n?/g, '')
          .trim()
      } else if (jsonText.includes('```')) {
        jsonText = jsonText.replace(/```\n?/g, '').trim()
      }

      parsedQuestion = JSON.parse(jsonText)

      // Validate the structure
      const validated = questionSchema.parse(parsedQuestion)
      
      // Store question hash to avoid repetition
      const questionHash = validated.questionEn.substring(0, 50)
      recentQuestions.add(questionHash)
      
      // Keep only last 20 questions in memory
      if (recentQuestions.size > 20) {
        const firstItem = recentQuestions.values().next().value
        recentQuestions.delete(firstItem)
      }
      
      return Response.json(validated, {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      })
    } catch (parseError) {
      console.error('Parse error:', parseError)
      console.error('Raw response:', result.text)
      return Response.json(
        {
          error: 'Failed to parse question. Please try again.',
        },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Generation error:', error)
    return Response.json(
      {
        error: 'Failed to generate question. Please try again.',
      },
      { status: 500 }
    )
  }
}
