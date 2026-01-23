"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { approvePayment, rejectPayment, getAdminPayments } from "@/lib/actions/subscription"
import { CheckCircle, XCircle, Eye } from "lucide-react"
import Image from "next/image"

interface Payment {
  id: string
  user_id: string
  screenshot_url: string
  status: string
  created_at: string
  user: {
    id: string
    full_name: string
    email: string
    phone: string
  }
  subscription: {
    id: string
    plan: string
  }
}

export function AdminPaymentPanel() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)
  const [rejectionReason, setRejectionReason] = useState("")
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadPayments()
  }, [])

  const loadPayments = async () => {
    setLoading(true)
    const data = await getAdminPayments()
    setPayments(data || [])
    setLoading(false)
  }

  const handleApprove = async (paymentId: string) => {
    setSubmitting(true)
    const success = await approvePayment(paymentId, "admin-id")
    if (success) {
      await loadPayments()
      setSelectedPayment(null)
      alert("Payment approved! User subscription updated.")
    } else {
      alert("Failed to approve payment.")
    }
    setSubmitting(false)
  }

  const handleReject = async () => {
    if (!selectedPayment || !rejectionReason.trim()) return

    setSubmitting(true)
    const success = await rejectPayment(selectedPayment.id, "admin-id", rejectionReason)
    if (success) {
      await loadPayments()
      setSelectedPayment(null)
      setShowRejectDialog(false)
      setRejectionReason("")
      alert("Payment rejected. User will be notified.")
    } else {
      alert("Failed to reject payment.")
    }
    setSubmitting(false)
  }

  if (loading) {
    return <div className="text-center py-8">Loading payments...</div>
  }

  if (payments.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No pending payments for verification.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Pending Payment Verification</h2>

      <div className="grid gap-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="border rounded-lg p-4 hover:bg-muted transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* User Info */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">User</p>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">{payment.user.full_name}</p>
                  <p className="text-xs text-muted-foreground">{payment.user.email}</p>
                  <p className="text-xs text-muted-foreground">{payment.user.phone}</p>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">Amount</p>
                <p className="font-semibold text-sm">₹20.00</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {new Date(payment.created_at).toLocaleDateString()}
                </p>
              </div>

              {/* Status */}
              <div>
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                <Badge variant="outline" className="capitalize">
                  {payment.status}
                </Badge>
              </div>

              {/* Actions */}
              <div className="flex items-end gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setSelectedPayment(payment)
                    setShowPreview(true)
                  }}
                  className="flex-1"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Dialog */}
      {selectedPayment && showPreview && (
        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Payment Screenshot - {selectedPayment.user.full_name}</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Screenshot */}
              {selectedPayment.screenshot_url && (
                <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={selectedPayment.screenshot_url || "/placeholder.svg"}
                    alt="Payment screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* User Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-semibold">{selectedPayment.user.full_name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-sm">{selectedPayment.user.email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-semibold">{selectedPayment.user.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Amount</p>
                  <p className="font-semibold">₹20.00</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={() => handleApprove(selectedPayment.id)}
                  disabled={submitting}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve Payment
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => setShowRejectDialog(true)}
                  disabled={submitting}
                  className="flex-1"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject Payment
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Rejection Dialog */}
      {showRejectDialog && selectedPayment && (
        <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Reject Payment</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Please provide a reason for rejecting this payment.
              </p>

              <Textarea
                placeholder="Reason for rejection..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="min-h-24"
              />

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowRejectDialog(false)
                    setRejectionReason("")
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleReject}
                  disabled={submitting || !rejectionReason.trim()}
                  className="flex-1"
                >
                  Confirm Rejection
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
