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

export async function POST() {
  try {
    const categories = [
      'Current Affairs',
      'Reasoning',
      'Mathematics',
      'General Knowledge',
    ]
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]

    const prompt = `Generate a random exam-style multiple choice question for competitive exams like HSSC, CET, State Exams, or government job tests in India.

Focus on: ${randomCategory}

IMPORTANT: Generate the question in BOTH English and Hindi.

The question should be:
- Challenging but fair
- Focused on India-specific topics, current affairs, Indian history, Indian geography, or Indian politics
- Have exactly 4 multiple choice options
- Be relevant to Indian competitive exams

Return ONLY a JSON object (no markdown, no code blocks, no explanation text before JSON) with this exact structure:
{
  "questionEn": "The main question text in English?",
  "questionHi": "मुख्य प्रश्न पाठ हिंदी में?",
  "optionsEn": ["Option A in English", "Option B in English", "Option C in English", "Option D in English"],
  "optionsHi": ["विकल्प A हिंदी में", "विकल्प B हिंदी में", "विकल्प C हिंदी में", "विकल्प D हिंदी में"],
  "correct": 0,
  "explanationEn": "Brief explanation in English of why this answer is correct and why others are wrong.",
  "explanationHi": "हिंदी में संक्षिप्त व्याख्या कि यह उत्तर सही क्यों है और अन्य गलत क्यों हैं।",
  "category": "${randomCategory}"
}

The "correct" field should be the index (0-3) of the correct option.
Make sure translations are accurate and contextually appropriate.`

    const result = await generateText({
      model: 'openai/gpt-4o-mini',
      prompt,
      temperature: 0.7,
      maxTokens: 800,
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
      return Response.json(validated)
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
