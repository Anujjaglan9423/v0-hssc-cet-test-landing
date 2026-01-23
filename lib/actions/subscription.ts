"use server"

import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function getUserSubscription(userId: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )

  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (error) {
    console.log("[v0] No subscription found for user:", userId)
    return null
  }

  return data
}

export async function createSubscriptionForNewUser(userId: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )

  const trialEndsAt = new Date()
  trialEndsAt.setDate(trialEndsAt.getDate() + 30)

  const { data, error } = await supabase
    .from("subscriptions")
    .insert({
      user_id: userId,
      plan: "free",
      status: "active",
      trial_ends_at: trialEndsAt.toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.log("[v0] Error creating subscription:", error)
    return null
  }

  return data
}

export async function isTrialExpired(userId: string): Promise<boolean> {
  const subscription = await getUserSubscription(userId)
  if (!subscription) return true

  const now = new Date()
  const trialEndsAt = new Date(subscription.trial_ends_at)

  return now > trialEndsAt && subscription.plan === "free"
}

export async function uploadPaymentScreenshot(
  paymentId: string,
  screenshotUrl: string
) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )

  const { data, error } = await supabase
    .from("payments")
    .update({ screenshot_url: screenshotUrl, status: "pending_verification" })
    .eq("id", paymentId)
    .select()
    .single()

  if (error) {
    console.log("[v0] Error uploading screenshot:", error)
    return null
  }

  // Create notification for admin
  const { data: adminData } = await supabase
    .from("users")
    .select("id")
    .eq("role", "admin")
    .single()

  if (adminData) {
    await supabase.from("payment_notifications").insert({
      admin_id: adminData.id,
      payment_id: paymentId,
    })
  }

  return data
}

export async function getAdminPayments() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )

  const { data, error } = await supabase
    .from("payments")
    .select(
      `
      *,
      user:users(id, full_name, email, phone),
      subscription:subscriptions(id, plan, status)
    `
    )
    .eq("status", "pending_verification")
    .order("created_at", { ascending: false })

  if (error) {
    console.log("[v0] Error fetching admin payments:", error)
    return []
  }

  return data
}

export async function approvePayment(
  paymentId: string,
  adminId: string
): Promise<boolean> {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )

  // Get payment details
  const { data: payment, error: paymentError } = await supabase
    .from("payments")
    .select("subscription_id, user_id")
    .eq("id", paymentId)
    .single()

  if (paymentError) {
    console.log("[v0] Error fetching payment:", paymentError)
    return false
  }

  // Update payment status
  const { error: updateError } = await supabase
    .from("payments")
    .update({
      status: "approved",
      verified_by: adminId,
      verified_at: new Date().toISOString(),
    })
    .eq("id", paymentId)

  if (updateError) {
    console.log("[v0] Error updating payment:", updateError)
    return false
  }

  // Update subscription status
  const subscriptionEndsAt = new Date()
  subscriptionEndsAt.setDate(subscriptionEndsAt.getDate() + 30)

  const { error: subscriptionError } = await supabase
    .from("subscriptions")
    .update({
      plan: "premium",
      status: "active",
      subscription_started_at: new Date().toISOString(),
      subscription_ends_at: subscriptionEndsAt.toISOString(),
    })
    .eq("id", payment.subscription_id)

  if (subscriptionError) {
    console.log("[v0] Error updating subscription:", subscriptionError)
    return false
  }

  return true
}

export async function rejectPayment(
  paymentId: string,
  adminId: string,
  rejectionReason: string
): Promise<boolean> {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )

  const { error } = await supabase
    .from("payments")
    .update({
      status: "rejected",
      verified_by: adminId,
      verified_at: new Date().toISOString(),
      rejection_reason: rejectionReason,
    })
    .eq("id", paymentId)

  if (error) {
    console.log("[v0] Error rejecting payment:", error)
    return false
  }

  return true
}

export async function initiatePayment(
  userId: string,
  subscriptionId: string
) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        },
      },
    }
  )

  const { data, error } = await supabase
    .from("payments")
    .insert({
      user_id: userId,
      subscription_id: subscriptionId,
      amount: 20,
      currency: "INR",
      payment_method: "upi",
      status: "initiated",
    })
    .select()
    .single()

  if (error) {
    console.log("[v0] Error initiating payment:", error)
    return null
  }

  return data
}
