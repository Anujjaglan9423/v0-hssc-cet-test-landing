"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function DussehraModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby="dussehra-message"
        className="w-[min(92vw,72rem)] max-w-none overflow-hidden border-0 bg-[#fff8ed] p-0 text-[#3d1a12] shadow-2xl dark:bg-[#24110d] dark:text-[#fff8ed] sm:max-w-5xl sm:rounded-2xl"
      >
        <div className="grid min-h-[min(620px,calc(100vh-2rem))] font-[family-name:var(--font-devanagari)] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-64 overflow-hidden md:min-h-full">
            <Image
              src="/dussehra-rama.png"
              alt="Lord Rama with bow during a glowing Dussehra celebration"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#28100b]/80 via-transparent to-[#28100b]/10" />
            <div className="absolute bottom-5 left-5 right-5 text-white md:bottom-7 md:left-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">धर्म • साहस • विजय</p>
              <p className="mt-2 font-[family-name:var(--font-devanagari)] text-2xl font-bold leading-tight md:text-3xl">बुराई पर अच्छाई की विजय</p>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-[#b34b24] dark:text-amber-300">
              <Sparkles className="size-4" aria-hidden="true" />
              <span>विजयादशमी की हार्दिक शुभकामनाएँ</span>
            </div>
            <DialogTitle className="font-[family-name:var(--font-devanagari)] text-3xl font-bold leading-tight text-[#7f2417] dark:text-orange-200 sm:text-4xl">
              अपने भीतर के रावण पर विजय पाएं
            </DialogTitle>
            <DialogDescription id="dussehra-message" className="mt-5 text-base leading-8 text-[#70483d] dark:text-orange-100/80 sm:text-lg">
              रामायण हमें सिखाती है कि सत्य, धैर्य और मर्यादा के मार्ग पर चलने वाला व्यक्ति हर कठिनाई को पार कर सकता है। इस दशहरे, अपने लक्ष्य के लिए एकाग्र रहें और हर दिन अपने कल से बेहतर बनने का संकल्प लें।
            </DialogDescription>
            <div className="my-7 border-l-2 border-[#d98b3a] pl-4 text-sm italic leading-6 text-[#8b5b47] dark:text-orange-100/70">
              “धर्म की राह पर चलने वालों की अंततः विजय निश्चित होती है।”
            </div>
            <p className="mb-7 text-sm font-medium text-[#9a4930] dark:text-amber-200/80">आपकी मेहनत ही आपकी सबसे बड़ी विजय है।</p>
            <Button
              onClick={() => setOpen(false)}
              className="w-full rounded-xl bg-[#9d2f1e] py-6 text-base font-semibold text-white shadow-lg shadow-[#9d2f1e]/20 hover:bg-[#7f2417] sm:w-fit sm:min-w-48"
            >
              शुभकामनाएँ स्वीकार करें
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
