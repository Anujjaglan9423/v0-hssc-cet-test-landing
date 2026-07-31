"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Get started with basic features",
    features: [
      { name: "50 Practice Questions", included: true },
      { name: "5 Mock Tests", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Mobile Access", included: true },
      { name: "Detailed Solutions", included: false },
      { name: "Performance Reports", included: false },
      { name: "Ad-free Experience", included: false },
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 30, yearly: 250 },
    description: "Complete preparation package",
    features: [
      { name: "10,000+ Practice Questions", included: true },
      { name: "Unlimited Mock Tests", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "Mobile Access", included: true },
      { name: "Detailed Solutions", included: true },
      { name: "Performance Reports", included: true },
      { name: "Ad-free Experience", included: true },
    ],
    cta: "Get Pro",
    popular: true,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">Choose the plan that fits your preparation needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-card border transition-all duration-300 hover:shadow-xl ${plan.popular ? "border-primary shadow-lg md:scale-105" : "border-border hover:-translate-y-2"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 font-bold text-xs">Most popular</Badge>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">
                    ₹{plan.price.yearly}
                  </span>
                  {plan.price.yearly > 0 && (
                    <span className="text-muted-foreground text-sm">/year</span>
                  )}
                </div>

                <Link href="/signup">
                  <Button
                    className={`w-full font-semibold ${plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-card text-foreground hover:bg-muted border border-border"
                      }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>

              <div className="border-t border-border p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
