"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { logoutUser, type User } from "@/lib/auth"
import {
  BookOpen,
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
  Target,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  type: "admin" | "student"
  user?: User
}

const adminLinks = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/students", icon: Users, label: "Students" },
  { href: "/admin/tests", icon: FileText, label: "Tests" },
  { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
]

const studentLinks = [
  { href: "/student", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/student/tests", icon: FileText, label: "Test Series" },
  { href: "/student/practice", icon: Target, label: "Practice" },
  { href: "/student/results", icon: Trophy, label: "Results" },
  { href: "/student/analytics", icon: BarChart3, label: "My Analytics" },
]

export function Sidebar({ type, user }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const links = type === "admin" ? adminLinks : studentLinks

  const displayName = user?.full_name || "User"
  const initials = displayName.charAt(0).toUpperCase()

  const handleLogout = async () => {
    try {
      await logoutUser()
      // Force full page reload to clear all state
      window.location.replace("/login")
    } catch (error) {
      console.error("Logout error:", error)
      window.location.replace("/login")
    }
  }

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-foreground whitespace-nowrap">
              HSSC CET <span className="text-primary">TEST</span>
            </span>
          )}
        </Link>
      </div>

      {/* Collapse Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-20 w-6 h-6 rounded-full border border-border bg-background shadow-sm"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </Button>

      {/* User Info */}
      <div className={cn("p-4 border-b border-border", collapsed && "px-2")}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            {type === "admin" ? (
              <GraduationCap className="w-5 h-5 text-primary" />
            ) : (
              <span className="text-sm font-bold text-primary">{initials}</span>
            )}
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="font-medium text-foreground text-sm truncate">{displayName}</p>
              <p className="text-xs text-muted-foreground truncate capitalize">{type}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
                collapsed && "justify-center px-2",
              )}
            >
              <link.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "animate-pulse")} />
              {!collapsed && <span className="font-medium">{link.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Logout - Use handleLogout instead of logout from useAuth */}
      <div className="p-4 border-t border-border">
        <button
          onClick={handleLogout}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
            collapsed && "justify-center px-2",
          )}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  )
}
