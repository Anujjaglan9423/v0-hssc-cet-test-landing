import Link from "next/link"

/** Public, original worked examples. They do not claim to be official PYQs. */
const examples = [
  {
    topic: "Quantitative aptitude · Percentage",
    question: "A student answered 72 out of 90 questions correctly. What percentage of answers were correct?",
    answer: "80%",
    steps: ["Divide correct answers by all attempted questions: 72 ÷ 90 = 0.8.", "Multiply by 100 to express the result as a percentage: 0.8 × 100 = 80%."],
    reminder: "Accuracy is correct answers ÷ attempted answers. It is different from the percentage of all questions on the paper that you attempted.",
  },
  {
    topic: "Reasoning · Number series",
    question: "Find the next number in the series: 3, 8, 15, 24, 35, __.",
    answer: "48",
    steps: ["Find successive differences: 5, 7, 9, 11.", "The differences increase by 2 each time, so the next difference is 13.", "Add 13 to the last number: 35 + 13 = 48."],
    reminder: "A number-series rule should explain every given term, not just the final pair.",
  },
  {
    topic: "Mathematics · Time and work",
    question: "If a worker finishes a job in 12 days at a steady rate, what fraction of the job is completed in 3 days?",
    answer: "1/4 of the job",
    steps: ["One day's work is 1/12 of the whole job.", "Three days of work is 3 × 1/12 = 3/12.", "Reduce 3/12 to 1/4."],
    reminder: "The solution assumes the worker maintains the same rate each day.",
  },
  {
    topic: "General science · Everyday chemistry",
    question: "What happens to blue litmus paper when it is dipped in an acidic solution?",
    answer: "It turns red",
    steps: ["Litmus is an acid–base indicator.", "Acidic solutions turn blue litmus red; basic solutions turn red litmus blue."],
    reminder: "This tests an indicator's response, not the exact pH or strength of a particular acid.",
  },
]

export default function MockTestLearningGuide() {
  return (
    <section aria-labelledby="practice-guide-heading" className="border-t border-border bg-background px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Learn before you practise</p>
        <h2 id="practice-guide-heading" className="mt-2 text-2xl font-bold sm:text-3xl">Worked practice questions with explanations</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          A mock test is most useful when you understand why an answer is correct. These original teaching examples show the reasoning, intermediate steps and common mistakes to watch for. They are illustrative practice questions, not verified previous-year examination questions.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {examples.map((example, index) => (
            <article key={example.topic} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Example {index + 1} · {example.topic}</p>
              <h3 className="mt-3 text-lg font-semibold leading-7">{example.question}</h3>
              <p className="mt-4 rounded-lg bg-primary/5 px-4 py-3 text-sm"><span className="font-bold">Correct answer:</span> {example.answer}</p>
              <h4 className="mt-5 font-semibold">Step-by-step solution</h4>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">{example.steps.map((step) => <li key={step}>{step}</li>)}</ol>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-muted-foreground"><span className="font-semibold text-foreground">Remember:</span> {example.reminder}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-muted/30 p-6 md:grid-cols-2 md:p-8">
          <div>
            <h3 className="text-xl font-semibold">How to review a mock-test attempt</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
              <li>Before starting, read the displayed test duration and question count. Rules can vary by recruitment and test.</li>
              <li>After submitting, classify each error as a knowledge gap, calculation mistake, misunderstood wording or time-pressure mistake.</li>
              <li>Rework missed questions without seeing the answer; then explain the method in your own words.</li>
              <li>Revisit difficult topics after a few days, rather than immediately repeating only familiar questions.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Choose supporting study material</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">For Haryana-related exams, revise foundational state history and geography alongside aptitude. Use official recruiting-body notices to verify the latest eligibility, syllabus, marking scheme and exam dates; practice sets on this site are not official notifications.</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
              <Link href="/haryana-gk" className="rounded-lg border border-border bg-background px-4 py-2 hover:border-primary">Haryana GK topics</Link>
              <Link href="/study-materials-hub" className="rounded-lg border border-border bg-background px-4 py-2 hover:border-primary">Study materials</Link>
              <Link href="/editorial-policy" className="rounded-lg border border-border bg-background px-4 py-2 hover:border-primary">Editorial & corrections policy</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
