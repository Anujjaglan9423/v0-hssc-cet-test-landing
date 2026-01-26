"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { MockTestModal } from "@/components/mock-test-modal"

export function MockTestButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="px-8 group border-border hover:bg-muted bg-transparent"
        onClick={() => setIsModalOpen(true)}
      >
        <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        Try Free Mock Test
      </Button>
      <MockTestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
