"use client"

import Script from "next/script"
import { useCallback, useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (options: {
          pageLanguage: string
          includedLanguages: string
          autoDisplay: boolean
        }, elementId: string) => unknown
      }
    }
  }
}

const GOOGLE_TRANSLATE_SCRIPT = "google-translate-script"

export function GoogleTranslator() {
  const [open, setOpen] = useState(false)
  const initialized = useRef(false)

  const initializeTranslator = useCallback(() => {
    if (initialized.current || !window.google?.translate?.TranslateElement) return

    new window.google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,hi", autoDisplay: false },
      "google_translate_element",
    )
    initialized.current = true
  }, [])

  useEffect(() => {
    initializeTranslator()
  }, [initializeTranslator])

  const changeLanguage = (language: "en" | "hi") => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo")
    if (!select) return
    select.value = language
    select.dispatchEvent(new Event("change", { bubbles: true }))
    setOpen(false)
  }

  return (
    <div className="google-translator" aria-label="Language translation">
      <div className="google-translator-menu-wrap">
        <button
          type="button"
          className="google-translator-button"
          aria-expanded={open}
          aria-controls="language-menu"
          aria-label="Choose language"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="google-translator-globe">文</span>
          <span className="sr-only">Choose language</span>
        </button>
        {open ? (
          <div id="language-menu" className="google-translator-menu" role="menu">
            <p className="google-translator-label">Language</p>
            <button type="button" role="menuitem" onClick={() => changeLanguage("en")}>English</button>
            <button type="button" role="menuitem" onClick={() => changeLanguage("hi")}>हिन्दी</button>
          </div>
        ) : null}
      </div>
      <div id="google_translate_element" aria-hidden="true" />
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
