"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Clock, Globe } from "lucide-react"
import { submitContact } from "@/lib/actions/contact"
import FooterLinkNavbar from "@/components/footer-link-navbar"
import FooterLinkFooter from "@/components/footer-link-footer"
import Link from "next/link"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const result = await submitContact({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    })

    setIsLoading(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      alert(result.message)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <FooterLinkNavbar />

      {/* Hero Section - Keyword Optimized */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 blur-3xl rounded-full opacity-30" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            💬 Support for Haryana CET, SSC, Railway & UKSSSC Aspirants
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Contact <span className="text-primary">CET TEST</span> Support
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Need help with <strong>Haryana CET (HSSC Group C & D)</strong>,
            <strong> SSC exams</strong>, <strong>Railway (RRB)</strong>, or
            <strong> UKSSSC preparation</strong>? Our support team is here to assist you
            with mock tests, account issues, and exam guidance.
          </p>

          {/* Quick Help Points */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-10">
            <span>✔ Mock Test Support</span>
            <span>✔ Account & Login Issues</span>
            <span>✔ Exam Guidance</span>
            <span>✔ Fast Response</span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="cursor-pointer">
                Start Free Mock Test →
              </Button>
            </Link>

            <Link href="/mock-test">
              <Button variant="outline" size="lg" className="cursor-pointer">
                Explore All Exams
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-card relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/10 blur-3xl rounded-full opacity-30" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative z-10">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Can We Help You?
              </h2>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                Get support for <strong>Haryana CET (HSSC Group C & D)</strong>,
                <strong> SSC exams</strong>, <strong>Railway (RRB)</strong>, and
                <strong> UKSSSC</strong>. Whether it’s mock tests, account issues,
                or exam guidance — we are here to help.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

              {/* Email */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Support Email</p>
                  <a href="mailto:anujjaglan9423@gmail.com" className="text-sm font-medium hover:text-blue-600">
                    anujjaglan9423@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Helpline</p>
                  <a href="tel:+917291849546" className="text-sm font-medium hover:text-green-600">
                    +91 7291849546
                  </a>
                </div>
              </div>

              {/* Time */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Response Time</p>
                  <p className="text-sm font-medium text-gray-700">Within 24 Hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-4 p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Head Office</p>
                  <p className="text-sm font-medium text-gray-700">Haryana, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-20 rounded-2xl" />

            <div className="relative bg-white rounded-2xl border shadow-2xl p-6">

              <div className="mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Send Your Query
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our experts will respond quickly to help you with your exam preparation
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    We’ll get back to you shortly.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-2 gap-4">
                    <Input name="firstName" placeholder="First Name" required disabled={isLoading} />
                    <Input name="lastName" placeholder="Last Name" required disabled={isLoading} />
                  </div>

                  <Input type="email" name="email" placeholder="Email Address" required disabled={isLoading} />

                  <Input type="tel" name="phone" placeholder="Phone / WhatsApp" disabled={isLoading} />

                  <Input name="subject" placeholder="Subject (Haryana CET / SSC / Railway / UKSSSC)" required disabled={isLoading} />

                  <Textarea name="message" placeholder="Write your query..." rows={4} required disabled={isLoading} />

                  <Button
                    type="submit"
                    className="w-full h-12 font-semibold shadow-md hover:shadow-xl transition"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Submit Inquiry →"}
                  </Button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SEO Footer Text Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background border-t relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-3xl rounded-full opacity-30" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-5 flex items-center justify-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Connecting Aspirants Across India
          </h2>

          {/* Content */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            CET TEST is a growing platform for <strong>Haryana CET (HSSC Group C & D)</strong>,
            <strong> SSC exams</strong>, <strong>Railway (RRB)</strong>, and
            <strong> UKSSSC preparation</strong>. We provide free mock tests,
            previous year questions, and real exam-level practice to help aspirants succeed.
          </p>

          {/* Support Line */}
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            Facing any issue with mock tests or account access? Use the contact form above — our support team will assist you quickly.
          </p>

        </div>
      </section>

      <FooterLinkFooter />
    </div>
  )
}