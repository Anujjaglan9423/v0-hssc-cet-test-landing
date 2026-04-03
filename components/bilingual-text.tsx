import { parseBilingualText, isBilingualText } from "@/lib/utils/bilingual"

interface BilingualTextProps {
  text: string
  className?: string
  hindiClassName?: string
  englishClassName?: string
  separator?: boolean
}

/**
 * Display bilingual (Hindi/English) text with proper formatting and separation
 * Handles both bilingual format [HI]...text...[EN]...text... and single language text
 */
export function BilingualText({
  text,
  className = "",
  hindiClassName = "",
  englishClassName = "",
  separator = true,
}: BilingualTextProps) {
  // Check if text is bilingual
  if (!isBilingualText(text)) {
    // Single language text
    return <span className={className}>{text}</span>
  }

  const parsed = parseBilingualText(text)

  if (!parsed.isBilingual) {
    return <span className={className}>{text}</span>
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Hindi Text */}
      {parsed.hindi && (
        <div className={`leading-relaxed ${hindiClassName}`} lang="hi">
          {parsed.hindi}
        </div>
      )}

      {/* Separator */}
      {separator && parsed.hindi && parsed.english && (
        <div className="flex items-center gap-3 my-3">
          <div className="flex-1 h-px bg-border/50" />
          <span className="text-xs font-medium text-muted-foreground uppercase">
            or
          </span>
          <div className="flex-1 h-px bg-border/50" />
        </div>
      )}

      {/* English Text */}
      {parsed.english && (
        <div className={`leading-relaxed ${englishClassName}`} lang="en">
          {parsed.english}
        </div>
      )}
    </div>
  )
}
