"use client"

import Script from "next/script"
import { useCallback, useEffect, useRef } from "react"

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (options: {
          pageLanguage: string
          includedLanguages: string
          autoDisplay: boolean
          layout?: unknown
        }, elementId: string) => unknown
      }
    }
  }
}

const GOOGLE_TRANSLATE_SCRIPT = "google-translate-script"

export function GoogleTranslator() {
  const initialized = useRef(false)

  const initializeTranslator = useCallback(() => {
    if (initialized.current || !window.google?.translate?.TranslateElement) return

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi",
        autoDisplay: false,
      },
      "google_translate_element",
    )
    initialized.current = true
  }, [])

  useEffect(() => {
    initializeTranslator()
  }, [initializeTranslator])

  return (
    <div className="google-translator" aria-label="Language translation">
      <span className="sr-only">Translate this page</span>
      <div id="google_translate_element" />
      <Script
        id={GOOGLE_TRANSLATE_SCRIPT}
        src="https://translate.google.com/translate_a/element.js"
        strategy="afterInteractive"
        onLoad={initializeTranslator}
      />
    </div>
  )
}

export default GoogleTranslator
