/**
 * Utility functions for handling bilingual (Hindi/English) text
 */

export interface BilingualText {
  hindi?: string
  english?: string
  isBilingual: boolean
}

/**
 * Parse text with [HI] and [EN] tags
 * Format: "[HI] Hindi text [EN] English text"
 * Returns both languages separated or the original text if no tags found
 */
export function parseBilingualText(text: string): BilingualText {
  if (!text) {
    return { isBilingual: false }
  }

  const hiMatch = text.match(/\[HI\]\s*([\s\S]*?)(?=\[EN\]|$)/)
  const enMatch = text.match(/\[EN\]\s*([\s\S]*)$/)

  if (hiMatch && enMatch) {
    return {
      hindi: hiMatch[1].trim(),
      english: enMatch[1].trim(),
      isBilingual: true,
    }
  }

  // Not bilingual, return original text
  return {
    hindi: text,
    isBilingual: false,
  }
}

/**
 * Check if text contains bilingual markers
 */
export function isBilingualText(text: string): boolean {
  return /\[HI\]|\[EN\]/.test(text)
}
