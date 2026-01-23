"use client"

import React from "react"

import { useEffect, useState } from "react"
import { TrialExpiredModal } from "@/components/subscription/trial-expired-modal"
import { isTrialExpired, getUserSubscription, initiatePayment } from "@/lib/actions/subscription"

interface UseTrialCheckProps {
  userId: string
  enabled?: boolean
}

export function useTrialCheck({ userId, enabled = true }: UseTrialCheckProps) {
  const [showTrialModal, setShowTrialModal] = useState(false)
  const [paymentId, setPaymentId] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!enabled) return

    const checkTrial = async () => {
      try {
        const expired = await isTrialExpired(userId)
        if (expired) {
          // Get subscription to initiate payment
          const subscription = await getUserSubscription(userId)
          if (subscription) {
            const payment = await initiatePayment(userId, subscription.id)
            if (payment) {
              setPaymentId(payment.id)
              setShowTrialModal(true)
            }
          }
        }
      } catch (error) {
        console.log("[v0] Error checking trial:", error)
      } finally {
        setLoading(false)
      }
    }

    checkTrial()
  }, [userId, enabled])

  return {
    showTrialModal,
    setShowTrialModal,
    paymentId,
    loading,
  }
}

export function TrialCheckProvider({ userId, children }: { userId: string; children: React.ReactNode }) {
  const { showTrialModal, setShowTrialModal, paymentId } = useTrialCheck({ userId })

  return (
    <>
      {children}
      <TrialExpiredModal
        open={showTrialModal}
        paymentId={paymentId}
        onClose={() => setShowTrialModal(false)}
        onUploadSuccess={() => {
          setShowTrialModal(false)
          // Optionally refresh page or show success message
          window.location.reload()
        }}
      />
    </>
  )
}
