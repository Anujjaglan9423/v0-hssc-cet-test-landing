"use client"

import { useEffect } from "react"

const GTRANSLATE_SRC = "https://cdn.gtranslate.net/widgets/latest/float.js"

export function GoogleTranslator() {
  useEffect(() => {
    const wrapper = document.querySelector<HTMLElement>(".gtranslate_wrapper")
    if (!wrapper || document.querySelector(`script[src="${GTRANSLATE_SRC}"]`)) {
      return
    }

    window.gtranslateSettings = {
      default_language: "en",
      languages: "en,hi",
      native_language_names: true,
      detect_browser_language: false,
      wrapper_selector: ".gtranslate_wrapper",
    }

    const script = document.createElement("script")
    script.src = GTRANSLATE_SRC
    script.async = true
    script.crossOrigin = "anonymous"
    script.onerror = () => {
      // The widget is optional; keep a failed third-party load from breaking the app.
      script.remove()
    }
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return <div className="gtranslate_wrapper" aria-label="Language translation" />
}

export default GoogleTranslator
