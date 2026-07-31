"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "HSSC CET 2024 Qualifier",
    image: "/indian-woman-professional-photo.jpg",
    content:
      "HSSC CET TEST was a game-changer for my preparation. The questions are exactly like the actual exam, and the detailed solutions helped me understand my mistakes.",
    rating: 5,
  },
  {
    name: "Rohit Kumar",
    role: "Clerk - HSSC",
    image: "/indian-man-professional-photo.jpg",
    content:
      "I cleared my HSSC CET in the first attempt thanks to this platform. The topic-wise tests helped me focus on my weak areas effectively.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    role: "HSSC CET 2024 Qualifier",
    image: "/indian-woman-student-photo.jpg",
    content:
      "The analytics feature is amazing! I could track my progress daily and see exactly where I needed to improve. Highly recommended!",
    rating: 5,
  },
  {
    name: "Suresh Yadav",
    role: "Patwari - HSSC",
    image: "/indian-man-government-employee.jpg",
    content:
      "Best investment I made for my exam preparation. The previous year papers section was incredibly helpful for understanding the exam pattern.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What our students say</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful candidates who cracked HSSC CET with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-card border border-border p-6 hover:shadow-lg transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {useMemo(
                  () =>
                    [...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-foreground fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    )),
                  [testimonial.rating]
                )}
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
