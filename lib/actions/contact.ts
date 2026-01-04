"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function submitContact(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  const cookieStore = await cookies()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
    },
  })

  try {
    const { error } = await supabase.from("contacts").insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
        status: "new",
      },
    ])

    if (error) throw error
    return { success: true, message: "Contact submitted successfully" }
  } catch (error) {
    console.error("Error submitting contact:", error)
    return { success: false, message: "Failed to submit contact" }
  }
}

export async function submitTestFeedback(data: {
  userId: string
  testId: string
  attemptId: string
  rating: number
  difficultyLevel: string
  comments?: string
  timeSufficient: boolean
  questionQuality: string
  wouldRecommend: boolean
}) {
  const cookieStore = await cookies()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
    },
  })

  try {
    const { error } = await supabase.from("test_feedback").insert([
      {
        user_id: data.userId,
        test_id: data.testId,
        attempt_id: data.attemptId,
        rating: data.rating,
        difficulty_level: data.difficultyLevel,
        comments: data.comments || null,
        time_sufficient: data.timeSufficient,
        question_quality: data.questionQuality,
        would_recommend: data.wouldRecommend,
      },
    ])

    if (error) throw error
    return { success: true, message: "Feedback submitted successfully" }
  } catch (error) {
    console.error("Error submitting feedback:", error)
    return { success: false, message: "Failed to submit feedback" }
  }
}

export async function getContacts() {
  const cookieStore = await cookies()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
    },
  })

  try {
    const { data, error } = await supabase.from("contacts").select("*").order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return []
  }
}

export async function getTestFeedback() {
  const cookieStore = await cookies()
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
    },
  })

  try {
    const { data, error } = await supabase
      .from("test_feedback")
      .select(
        `
        *,
        user:users(full_name, email),
        test:tests(title, test_type)
      `,
      )
      .order("created_at", { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching feedback:", error)
    return []
  }
}
