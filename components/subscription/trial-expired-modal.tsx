"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ADMIN_CREDENTIALS, SUBSCRIPTION_PLAN } from "@/lib/subscription-config"
import { uploadPaymentScreenshot } from "@/lib/actions/subscription"
import { Copy, CheckCircle } from "lucide-react"

interface TrialExpiredModalProps {
  open: boolean
  paymentId: string
  onClose: () => void
  onUploadSuccess: () => void
}

export function TrialExpiredModal({
  open,
  paymentId,
  onClose,
  onUploadSuccess,
}: TrialExpiredModalProps) {
  const [step, setStep] = useState<"info" | "upload" | "success">("info")
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleUpload = async () => {
    if (!screenshotFile) return

    setUploading(true)
    try {
      // In production, upload to a file storage service and get the URL
      const formData = new FormData()
      formData.append("file", screenshotFile)

      // For now, create a local preview URL
      const screenshotUrl = URL.createObjectURL(screenshotFile)

      await uploadPaymentScreenshot(paymentId, screenshotUrl)
      setStep("success")
      onUploadSuccess()
    } catch (error) {
      console.error("[v0] Upload failed:", error)
      alert("Upload failed. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        {step === "info" && (
          <>
            <DialogHeader>
              <DialogTitle>Premium Subscription Required</DialogTitle>
              <DialogDescription>
                Your 30-day free trial has ended. Upgrade to Premium to continue enjoying unlimited tests.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Subscription Details */}
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Premium Plan</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-semibold">₹{SUBSCRIPTION_PLAN.price}/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valid for:</span>
                    <span className="font-semibold">30 days</span>
                  </div>
                </div>
              </div>

              {/* Admin Contact Details */}
              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-semibold text-sm">Payment Details</h3>

                {/* UPI ID */}
                <div className="flex items-center justify-between bg-muted p-3 rounded">
                  <div>
                    <p className="text-xs text-muted-foreground">UPI ID</p>
                    <p className="font-mono font-semibold text-sm">{ADMIN_CREDENTIALS.upiId}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(ADMIN_CREDENTIALS.upiId, "upi")}
                  >
                    {copied === "upi" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between bg-muted p-3 rounded">
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-mono font-semibold text-sm">{ADMIN_CREDENTIALS.phone}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(ADMIN_CREDENTIALS.phone, "phone")}
                  >
                    {copied === "phone" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between bg-muted p-3 rounded">
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-mono font-semibold text-xs">{ADMIN_CREDENTIALS.email}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(ADMIN_CREDENTIALS.email, "email")}
                  >
                    {copied === "email" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-900">
                  <strong>Instructions:</strong> Transfer ₹{SUBSCRIPTION_PLAN.price} using the UPI ID above, then upload the payment screenshot.
                </p>
              </div>

              <Button onClick={() => setStep("upload")} className="w-full bg-primary">
                Upload Payment Screenshot
              </Button>
            </div>
          </>
        )}

        {step === "upload" && (
          <>
            <DialogHeader>
              <DialogTitle>Upload Payment Proof</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted transition-colors"
                onClick={() => document.getElementById("file-input")?.click()}
              >
                {screenshotFile ? (
                  <div>
                    <CheckCircle className="w-8 h-8 mx-auto text-green-600 mb-2" />
                    <p className="font-semibold text-sm">{screenshotFile.name}</p>
                    <p className="text-xs text-muted-foreground">Click to change</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-semibold text-sm mb-1">Click to upload screenshot</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                  </div>
                )}
              </div>

              <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setScreenshotFile(e.target.files?.[0] || null)}
              />

              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep("info")} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleUpload}
                  disabled={!screenshotFile || uploading}
                  className="flex-1 bg-primary"
                >
                  {uploading ? "Uploading..." : "Submit"}
                </Button>
              </div>
            </div>
          </>
        )}

        {step === "success" && (
          <>
            <DialogHeader>
              <DialogTitle>Payment Received!</DialogTitle>
            </DialogHeader>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-green-100 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              <div>
                <p className="font-semibold mb-2">Screenshot uploaded successfully!</p>
                <p className="text-sm text-muted-foreground">
                  Admin will verify your payment within 24 hours. You'll be notified once approved.
                </p>
              </div>

              <Button onClick={onClose} className="w-full bg-primary">
                Close
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
