"use server"

import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export type User = {
  id: string
  email: string
  full_name: string
  role: "admin" | "student"
  avatar_url?: string
  phone?: string
  plan?: string
  created_at: string
}

export type AuthResult = {
  success: boolean
  message: string
  user?: User
}

// Generate a random token
function generateToken(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let token = ""
  for (let i = 0; i < 64; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return token
}

export async function loginUser(email: string, password: string): Promise<AuthResult> {
  const supabase = await createClient()

  const ADMIN_EMAIL = "anujjaglan9423@gmail.com"
  const ADMIN_PASSWORD = "Aadu@0406"

  if (email.toLowerCase() === ADMIN_EMAIL) {
    if (password !== ADMIN_PASSWORD) {
      return { success: false, message: "Invalid admin password" }
    }

    // Check if admin exists in database
    let { data: adminUser } = await supabase.from("users").select("*").eq("email", ADMIN_EMAIL).maybeSingle()

    // If admin doesn't exist, create them
    if (!adminUser) {
      const { data: newAdmin, error: createError } = await supabase
        .from("users")
        .insert({
          email: ADMIN_EMAIL,
          password_hash: ADMIN_PASSWORD,
          full_name: "Admin",
          role: "admin",
        })
        .select()
        .single()

      if (createError || !newAdmin) {
        return { success: false, message: "Failed to create admin account" }
      }
      adminUser = newAdmin
    }

    // Create session for admin
    const token = generateToken()
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 7)

    await supabase.from("sessions").insert({
      user_id: adminUser.id,
      token,
      expires_at: expiresAt.toISOString(),
    })

  // Set cookie
  const cookieStore = await cookies()
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  })

    return {
      success: true,
      message: "Login successful",
      user: {
        id: adminUser.id,
        email: adminUser.email,
        full_name: adminUser.full_name,
        role: "admin",
        avatar_url: adminUser.avatar_url,
        phone: adminUser.phone,
        plan: adminUser.plan,
        created_at: adminUser.created_at,
      },
    }
  }

  // Regular user login
  const { data: user, error } = await supabase.from("users").select("*").eq("email", email.toLowerCase()).maybeSingle()

  if (error || !user) {
    return { success: false, message: "Invalid email or password" }
  }

  // Check password
  if (user.password_hash !== password) {
    return { success: false, message: "Invalid email or password" }
  }

  // Create session
  const token = generateToken()
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7)

  await supabase.from("sessions").insert({
    user_id: user.id,
    token,
    expires_at: expiresAt.toISOString(),
  })

  // Set cookie
  const cookieStore = await cookies()
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  })

  return {
    success: true,
    message: "Login successful",
    user: {
      id: user.id,
      email: user.email,
      full_name: user.full_name,
      role: user.role,
      avatar_url: user.avatar_url,
      phone: user.phone,
      plan: user.plan,
      created_at: user.created_at,
    },
  }
}

export async function signupUser(name: string, email: string, password: string): Promise<AuthResult> {
  const supabase = await createClient()

  // Check if admin email
  if (email.toLowerCase() === "anujjaglan9423@gmail.com") {
    return { success: false, message: "This email is reserved for admin" }
  }

  // Check if user already exists
  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("email", email.toLowerCase())
    .maybeSingle()

  if (existingUser) {
    return { success: false, message: "An account with this email already exists" }
  }

  // Create user
  const { data: newUser, error } = await supabase
    .from("users")
    .insert({
      email: email.toLowerCase(),
      password_hash: password,
      full_name: name,
      role: "student",
    })
    .select()
    .single()

  if (error || !newUser) {
    console.error("Signup error:", error)
    return { success: false, message: "Failed to create account. Please try again." }
  }

  // Create session
  const token = generateToken()
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7)

  await supabase.from("sessions").insert({
    user_id: newUser.id,
    token,
    expires_at: expiresAt.toISOString(),
  })

  // Set cookie
  const cookieStore = await cookies()
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  })

  return {
    success: true,
    message: "Account created successfully",
    user: {
      id: newUser.id,
      email: newUser.email,
      full_name: newUser.full_name,
      role: "student",
      avatar_url: newUser.avatar_url,
      phone: newUser.phone,
      plan: newUser.plan,
      created_at: newUser.created_at,
    },
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if (!token) {
      return null
    }

    const supabase = await createClient()

    // Get session
    const { data: session, error: sessionError } = await supabase
      .from("sessions")
      .select("user_id, expires_at")
      .eq("token", token)
      .maybeSingle()

    if (sessionError || !session) {
      return null
    }

    // Check if expired
    if (new Date(session.expires_at) < new Date()) {
      await supabase.from("sessions").delete().eq("token", token)
      cookieStore.delete("auth_token")
      return null
    }

    // Get user
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", session.user_id)
      .maybeSingle()

    if (userError || !user) {
      return null
    }

    return {
      id: user.id,
      email: user.email,
      full_name: user.full_name,
      role: user.role,
      avatar_url: user.avatar_url,
      phone: user.phone,
      plan: user.plan,
      created_at: user.created_at,
    }
  } catch (error) {
    console.error("getCurrentUser error:", error)
    return null
  }
}

export async function logoutUser(): Promise<void> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if (token) {
      const supabase = await createClient()
      await supabase.from("sessions").delete().eq("token", token)
    }

    cookieStore.delete("auth_token")
  } catch (error) {
    console.error("Logout error:", error)
  }
}

export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }
  return user
}

export async function requireAdmin(): Promise<User> {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }
  if (user.role !== "admin") {
    redirect("/student")
  }
  return user
}

export async function requireStudent(): Promise<User> {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }
  if (user.role !== "student") {
    redirect("/admin")
  }
  return user
}
