"use client"

// This file provides a useAuth hook for components that may need it
// The main auth is handled server-side in lib/auth.ts

import { useState, useEffect, useCallback } from "react"
import { getCurrentUser, logoutUser } from "@/lib/auth"

export interface User {
  id: string
  email: string
  full_name: string
  role: "admin" | "student"
  phone?: string
  plan?: string
  avatar_url?: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const refreshUser = useCallback(async () => {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
    } catch (error) {
      console.error("Error fetching user:", error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    refreshUser()
  }, [refreshUser])

  const logout = useCallback(async () => {
    await logoutUser()
    setUser(null)
    window.location.replace("/login")
  }, [])

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    logout,
    refreshUser,
  }
}
