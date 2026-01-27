import { generateText } from 'ai'
import { z } from 'zod'

const questionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  correct: z.number(),
  explanation: z.string(),
})

export async function POST() {
  try {
    const prompt = `Generate a random exam-style multiple choice question for competitive exams like HSSC, CET, or government job tests. 
    
    The question should be:
    - Challenging but fair
    - Related to topics like: Current Affairs, English Grammar, Mathematics, Indian History, or General Knowledge
    - Have exactly 4 multiple choice options
    
    Return ONLY a JSON object (no markdown, no code blocks) with this exact structure:
    {
      "question": "The main question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Brief explanation of why this answer is correct and why others are wrong."
    }
    
    The "correct" field should be the index (0-3) of the correct option.`

    const result = await generateText({
      model: 'openai/gpt-4o-mini',
      prompt,
      temperature: 0.7,
      maxTokens: 500,
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
