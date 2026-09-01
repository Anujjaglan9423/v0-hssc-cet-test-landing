"use client"

import Script from "next/script"

export function GoogleTranslator() {
  return (
    <>
      <div className="gtranslate_wrapper" aria-label="Language translation" />
      <Script
        id="gtranslate-settings"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtranslateSettings = {
              default_language: "en",
              languages: "en,hi",
              native_language_names: true,
              detect_browser_language: false,
              wrapper_selector: ".gtranslate_wrapper"
            };
          `,
        }}
      />
      <Script
        id="gtranslate-float"
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="afterInteractive"
      />
    </>
  )
}

export default GoogleTranslator
