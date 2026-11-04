"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  datePublished: string
  image?: string
}

function getInitials(name: string) {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")

  return initials || "CT"
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  totalRatings?: number
  averageRating?: number | null
  ratingCounts?: Record<1 | 2 | 3 | 4 | 5, number>
}

export default function TestimonialsSection({ testimonials, totalRatings = testimonials.length, averageRating, ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Student feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Trusted by Aspirants, Rated by Students</h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from students practising for government exams on CET TEST.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-3xl gap-6 rounded-2xl border bg-card p-5 sm:grid-cols-[180px_1fr] sm:items-center sm:p-6">
          <div className="text-center sm:border-r sm:pr-6">
            <p className="text-4xl font-bold tracking-tight text-foreground">{averageRating?.toFixed(2) ?? "—"}<span className="text-xl text-muted-foreground">/5</span></p>
            <div className="mt-2 flex justify-center gap-0.5" aria-label={`${averageRating?.toFixed(2) ?? "0"} out of 5 average rating`}>
              {Array.from({ length: 5 }, (_, index) => <span key={index} className={`text-lg ${index < Math.round(averageRating ?? 0) ? "text-amber-400" : "text-muted-foreground/30"}`} aria-hidden="true">★</span>)}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Based on {totalRatings} student ratings</p>
          </div>
          <div className="space-y-2" aria-label="Rating distribution">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = ratingCounts[rating as 1 | 2 | 3 | 4 | 5]
              const percentage = totalRatings ? (count / totalRatings) * 100 : 0
              return <div key={rating} className="grid grid-cols-[44px_1fr_32px] items-center gap-2 text-xs text-muted-foreground"><span>{rating} star</span><div className="h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-label={`${rating} star ratings`} aria-valuemin={0} aria-valuemax={totalRatings} aria-valuenow={count}><div className="h-full rounded-full bg-amber-400 transition-[width]" style={{ width: `${percentage}%` }} /></div><span className="text-right tabular-nums">{count}</span></div>
            })}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-card border border-border shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="h-11 w-11 shrink-0 rounded-full border-2 border-primary/20 object-cover sm:h-14 sm:w-14"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 text-xs font-semibold text-primary sm:h-14 sm:w-14 sm:text-sm"
                        aria-label={`${testimonial.name} avatar`}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {useMemo(
                        () =>
                          [...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          )),
                        [testimonial.rating]
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {/* <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={goToPrev} className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={goToNext} className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div> */}
          <div className="mt-8 flex w-full items-center justify-center gap-2 px-2 sm:gap-4">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              aria-label="Previous review"
              className="h-9 w-9 shrink-0 rounded-full bg-transparent sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex min-w-0 max-w-[180px] flex-1 items-center gap-2 overflow-x-auto scrollbar-hide sm:max-w-[300px]">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "w-6 bg-primary sm:w-8"
                      : "w-1.5 bg-primary/20 hover:bg-primary/40"
                    }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              aria-label="Next review"
              className="h-9 w-9 shrink-0 rounded-full bg-transparent sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
