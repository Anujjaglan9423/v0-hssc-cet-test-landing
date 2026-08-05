"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-purple-600 to-accent relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Tag */}
        <p className="text-xs tracking-widest text-white/90 uppercase mb-6 font-bold">
          Join 50K+ Successful Aspirants
        </p>

        {/* Headline */}
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          Transform Your
          <br />
          Exam Preparation
        </h2>

        {/* Subheading */}
        <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-12">
          Proven strategies, real mock tests, and AI-powered analytics. <span className="font-bold">Start for free today.</span>
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="text-left">
            <p className="text-3xl font-black text-white">50K+</p>
            <p className="text-sm text-white/80 font-semibold">Students Succeed</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-black text-white">10K+</p>
            <p className="text-sm text-white/80 font-semibold">Questions</p>
          </div>
          <div className="text-left">
            <p className="text-3xl font-black text-white">98%</p>
            <p className="text-sm text-white/80 font-semibold">Success Rate</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link href="/signup">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl h-14 px-10 font-bold text-base group cursor-pointer">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Trust Badge */}
        <p className="text-sm text-white/80">
          <span className="font-semibold">No credit card required</span> • 7-day free access to all features
        </p>
      </div>
    </section>
  )
}
