// "use client"

// import { useEffect, useState } from "react"
// import { Download, X } from "lucide-react"

// interface BeforeInstallPromptEvent extends Event {
//   prompt: () => Promise<void>
//   userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
// }

// export function PWAInstallPrompt() {
//   const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
//   const [showPrompt, setShowPrompt] = useState(false)
//   const [isInstalled, setIsInstalled] = useState(false)

//   useEffect(() => {
//     const dismissed = sessionStorage.getItem("pwaPromptDismissed")

//     if (dismissed === "true") {
//       return
//     }
//     // Check if app is already installed
//     const isStandalone = window.matchMedia("(display-mode: standalone)").matches
//     const isIOSStandalone = (window.navigator as any).standalone === true

//     if (isStandalone || isIOSStandalone) {
//       setIsInstalled(true)
//       return
//     }

//     const handleBeforeInstallPrompt = (e: Event) => {
//       e.preventDefault()
//       setDeferredPrompt(e as BeforeInstallPromptEvent)
//       setShowPrompt(true)
//     }

//     const handleAppInstalled = () => {
//       setIsInstalled(true)
//       setShowPrompt(false)
//       setDeferredPrompt(null)
//     }

//     window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
//     window.addEventListener("appinstalled", handleAppInstalled)

//     return () => {
//       window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
//       window.removeEventListener("appinstalled", handleAppInstalled)
//     }
//   }, [])

//   const handleInstall = async () => {
//     if (!deferredPrompt) {
//       return
//     }

//     deferredPrompt.prompt()
//     const { outcome } = await deferredPrompt.userChoice

//     if (outcome === "accepted") {
//       setIsInstalled(true)
//     }

//     setShowPrompt(false)
//     setDeferredPrompt(null)
//   }

//   const handleDismiss = () => {
//     setShowPrompt(false)
//     sessionStorage.setItem("pwaPromptDismissed", "true")
//   }

//   if (!showPrompt || isInstalled) {
//     return null
//   }

//   return (
//     <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:w-96 bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">
//       <div className="p-4 space-y-3">
//         <div className="flex items-start justify-between">
//           <div className="flex items-start gap-3">
//             <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
//               <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//             </div>
//             <div className="flex-1">
//               <h3 className="font-semibold text-slate-900 dark:text-white">Install CET TEST</h3>
//               <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
//                 Get instant access to all exams. Works offline too!
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={handleDismiss}
//             className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 flex-shrink-0"
//             aria-label="Close"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={handleInstall}
//             className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
//           >
//             Install
//           </button>
//           <button
//             onClick={handleDismiss}
//             className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2 px-4 rounded-lg transition-colors"
//           >
//             Later
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { Download, X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

const DISMISS_KEY = "pwaPromptDismissedAt"
const SESSION_KEY = "pwaPromptClosedSession"
const VISIT_KEY = "pwaPromptVisits"
const ONE_DAY = 24 * 60 * 60 * 1000

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // 🔒 SESSION CHECK (FIRST LINE DEFENSE)
    if (sessionStorage.getItem(SESSION_KEY) === "true") return

    // 📊 VISIT COUNT
    const visits = Number(localStorage.getItem(VISIT_KEY) || 0) + 1
    localStorage.setItem(VISIT_KEY, visits.toString())

    if (visits < 2) return

    // ⏱ LOCAL STORAGE COOLDOWN
    const dismissedAt = localStorage.getItem(DISMISS_KEY)
    if (dismissedAt) {
      const diff = Date.now() - Number(dismissedAt)
      if (diff < ONE_DAY) return
    }

    // 📱 INSTALLED CHECK
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches
    const isIOSStandalone = (window.navigator as any).standalone === true

    if (isStandalone || isIOSStandalone) {
      setIsInstalled(true)
      return
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()

      // 🔥 CHECK AGAIN (IMPORTANT)
      if (sessionStorage.getItem(SESSION_KEY) === "true") return

      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // ⏳ DELAY
      setTimeout(() => {
        // 🔥 CHECK AGAIN INSIDE TIMEOUT (CRITICAL FIX)
        if (sessionStorage.getItem(SESSION_KEY) === "true") return

        setShowPrompt(true)
      }, 3000)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowPrompt(false)
      setDeferredPrompt(null)

      // ❌ NEVER SHOW AGAIN
      localStorage.setItem(DISMISS_KEY, Date.now().toString())
      sessionStorage.setItem(SESSION_KEY, "true")
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setIsInstalled(true)

      localStorage.setItem(DISMISS_KEY, Date.now().toString())
      sessionStorage.setItem(SESSION_KEY, "true")
    }

    setShowPrompt(false)
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)

    // 🔒 BLOCK FOR SESSION
    sessionStorage.setItem(SESSION_KEY, "true")

    // ⏱ BLOCK FOR 1 DAY
    localStorage.setItem(DISMISS_KEY, Date.now().toString())
  }

  if (!showPrompt || isInstalled) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:w-96 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50">

      <div className="p-4 space-y-3">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">

            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
              <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Install CET TEST
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Get instant access to all exams. Works offline too!
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleInstall}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Install
          </button>

          <button
            onClick={handleDismiss}
            className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2 px-4 rounded-lg transition"
          >
            Later
          </button>
        </div>

      </div>
    </div>
  )
}