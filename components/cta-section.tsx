"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-28 bg-primary relative">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Tag */}
        <p className="text-xs tracking-[0.25em] text-white/90 uppercase mb-6">
          Trusted by serious aspirants
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Stop Guessing.
          <br />
          Start Cracking Exams.
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Real exam-level mock tests for <span className="text-white font-medium">HSSC CET, SSC, Railway & Banking</span>.
          Built for aspirants who want results — not distractions.
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-white/40 mx-auto my-10" />

        {/* Stats (minimal + premium) */}
        <div className="flex justify-center gap-10 text-left mb-12">
          <div>
            <p className="text-2xl font-semibold text-white">50K+</p>
            <p className="text-xs text-white/70">Aspirants</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">500+</p>
            <p className="text-xs text-white/70">Tests</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">Top Results</p>
            <p className="text-xs text-white/70">Proven Outcomes</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-black px-8 group cursor-pointer">
              START FREE TRIAL
            </Button>
          </Link>

        </div>

        {/* Trust */}
        <p className="mt-6 text-xs text-white/60">
          No credit card required • 7-day free access
        </p>
      </div>
    </section>
  )
}
