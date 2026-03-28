"use client"

interface RichTextDisplayProps {
  content: string
}

export function RichTextDisplay({ content }: RichTextDisplayProps) {
  return (
    <div
      className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-pre:bg-muted prose-code:bg-muted prose-code:text-foreground"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
