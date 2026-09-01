"use client"

import { useEffect, useState } from "react"

const GTRANSLATE_SRC = "https://cdn.gtranslate.net/widgets/latest/float.js"

type GTranslateWindow = Window & {
  gtranslateSettings?: Record<string, unknown>
}

export function GoogleTranslator() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const wrapper = document.querySelector<HTMLElement>(".gtranslate_wrapper")
    if (!wrapper || document.querySelector(`script[src="${GTRANSLATE_SRC}"]`)) return

    const settingsWindow = window as GTranslateWindow
    settingsWindow.gtranslateSettings = {
      default_language: "en",
      languages: "en,hi",
      native_language_names: true,
      detect_browser_language: false,
      wrapper_selector: ".gtranslate_widget",
    }

    const script = document.createElement("script")
    script.src = GTRANSLATE_SRC
    script.async = true
    script.crossOrigin = "anonymous"
    script.onerror = () => script.remove()
    document.head.appendChild(script)

    return () => script.remove()
  }, [])

  const selectLanguage = (language: "en" | "hi") => {
    setOpen(false)
    const select = document.querySelector<HTMLSelectElement>(".gtranslate_widget select")
    if (select) {
      select.value = language
      select.dispatchEvent(new Event("change", { bubbles: true }))
      return
    }

    document.cookie = `googtrans=/en/${language};path=/;max-age=31536000`
    window.location.reload()
  }

  return (
    <div
      className="translator-control"
      aria-label="Language translation"
      style={{
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: 2147483000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}
    >
      <div className={`translator-menu${open ? " is-open" : ""}`} role="menu" aria-hidden={!open}>
        <button type="button" role="menuitem" onClick={() => selectLanguage("en")}>
          English
        </button>
        <button type="button" role="menuitem" onClick={() => selectLanguage("hi")}>
          हिन्दी
        </button>
      </div>
      <button
        type="button"
        className="translator-trigger"
        aria-label="Choose language"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">文</span>
        <span>Language</span>
      </button>
      <div className="gtranslate_widget" aria-hidden="true" />
    </div>
  )
}

export default GoogleTranslator
