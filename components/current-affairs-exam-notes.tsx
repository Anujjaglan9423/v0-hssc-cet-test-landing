import { ExternalLink, BookOpenCheck, GraduationCap } from "lucide-react"
import { currentAffairsEditorialNotes } from "@/lib/current-affairs-editorial-notes"

/** Complementary source links and *topic-specific* exam analysis.
 * This does not claim that every statement in the parent article was independently verified.
 */
export default function CurrentAffairsExamNotes({ slug }: { slug: string }) {
  const note = currentAffairsEditorialNotes[slug]
  if (!note) return null

  return (
    <section aria-labelledby={`exam-analysis-${slug}`} className="mt-10 mb-10 max-w-5xl mx-auto px-4 sm:px-0">
      <div className="rounded-2xl border border-sky-200 dark:border-sky-900 bg-sky-50/70 dark:bg-sky-950/20 p-5 sm:p-7 space-y-5">
        <div className="flex items-center gap-2">
          <BookOpenCheck className="h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden="true" />
          <h2 id={`exam-analysis-${slug}`} className="text-xl sm:text-2xl font-bold text-foreground">
            Exam Takeaways & Official References / परीक्षा विश्लेषण और आधिकारिक स्रोत
          </h2>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-base">Why this topic matters / यह विषय क्यों महत्वपूर्ण है?</h3>
          <p className="text-sm sm:text-base leading-relaxed text-foreground">{note.explanationEn}</p>
          <p lang="hi" className="text-sm sm:text-base leading-relaxed text-muted-foreground">{note.explanationHi}</p>
        </div>
        <div className="flex items-start gap-2 rounded-lg bg-background border p-3">
          <GraduationCap className="mt-0.5 w-4 h-4 shrink-0 text-sky-700" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-sm">Exam preparation tip</h3>
            <p className="text-sm leading-relaxed mt-1">{note.examTip}</p>
          </div>
        </div>
        <div className="border-t pt-4 space-y-2">
          <h3 className="font-semibold text-base">Official reference / आधिकारिक संदर्भ</h3>
          <a
            href={note.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 font-medium text-sky-700 dark:text-sky-300 underline underline-offset-4 hover:no-underline break-words text-sm"
          >
            {note.source.label}
            <ExternalLink className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          {note.source.kind === "portal" ? (
            <p className="text-xs text-muted-foreground">
              This is the relevant institution's official portal, not a verified citation for each specific claim above.
              Find the dated notification or report before relying on figures, names or legal status.
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              This is an official primary-source document or topic page. Check its date and scope;
              it does not automatically verify every other statement or question in this article.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
