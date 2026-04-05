"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface ChartCardProps {
  title: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
}

// export function ChartCard({ title, children, className, action }: ChartCardProps) {
//   return (
//     <div
//       className={cn(
//         "bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300",
//         className,
//       )}
//     >
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-lg font-semibold text-foreground">{title}</h3>
//         {action}
//       </div>
//       {children}
//     </div>
//   )
// }
export function ChartCard({ title, children, className, action }: ChartCardProps) {
  return (
    <div
      className={cn(
        `
        relative rounded-2xl border border-border/60 bg-background/80 backdrop-blur
        p-5 lg:p-6 overflow-hidden
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
        `,
        className
      )}
    >
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/70" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base lg:text-lg font-semibold text-foreground tracking-tight">
          {title}
        </h3>

        {action && (
          <div className="text-muted-foreground hover:text-foreground transition">
            {action}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}