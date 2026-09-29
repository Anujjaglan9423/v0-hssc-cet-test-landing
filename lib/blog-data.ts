export type StaticBlog = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  tags: string[]
  image: string
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
}

export const staticBlogs: StaticBlog[] = [
  {
    slug: "haryana-cet-preparation-strategy",
    title: "Haryana CET Preparation Strategy: A Simple Plan for Serious Aspirants",
    excerpt: "Build a realistic Haryana CET study plan with the right mix of syllabus coverage, revision, mock tests and Haryana GK.",
    category: "Preparation Strategy",
    date: "September 18, 2026",
    readTime: "6 min read",
    author: "CET TEST Team",
    tags: ["Haryana CET", "Study Plan", "Haryana GK"],
    image: "/current-affairs-news.jpg",
    sections: [
      { heading: "Start with the syllabus, not random books", paragraphs: ["The first step in Haryana CET preparation is to understand exactly what you need to study. Download the latest syllabus, divide it into subjects and mark topics as strong, average or weak. This prevents you from spending all your time on comfortable chapters while ignoring scoring areas.", "Keep one short notebook for Haryana-specific facts, important formulas and mistakes from mock tests. Revising this notebook regularly is more useful than collecting multiple new resources."] },
      { heading: "A practical daily routine", paragraphs: ["Study in three focused blocks: one for Quantitative Aptitude and Reasoning, one for Language and General Awareness, and one for Haryana GK. Begin with the subject that needs the most attention when your energy is highest."] , bullets: ["2 hours: Quantitative Aptitude and Reasoning", "90 minutes: English or Hindi", "90 minutes: General Awareness and Haryana GK", "45 minutes: revision and error analysis"] },
      { heading: "Use mocks as a learning tool", paragraphs: ["Do not wait to finish the syllabus before attempting a mock test. Start with one test every week and move to two or three tests as the exam gets closer. After each test, classify every wrong answer as a concept gap, calculation error, rushed attempt or silly mistake."] },
      { heading: "Final takeaway", paragraphs: ["Consistency beats an exhausting timetable. A focused plan followed for 90 days, with regular revision and honest mock analysis, can make your preparation much stronger."] },
    ],
  },
  {
    slug: "haryana-gk-topics-cet",
    title: "Haryana GK for CET: Important Topics and Smart Revision Method",
    excerpt: "Know which Haryana General Knowledge topics deserve priority and how to revise them without feeling overwhelmed.",
    category: "Haryana GK",
    date: "September 12, 2026",
    readTime: "5 min read",
    author: "CET TEST Team",
    tags: ["Haryana GK", "CET", "Revision"],
    image: "/current-affairs-news.jpg",
    sections: [
      { heading: "Why Haryana GK matters", paragraphs: ["Haryana-specific questions can become a real advantage because many candidates underprepare for them. The goal is not to memorise every fact. It is to create a dependable base across history, geography, culture, administration and current affairs."] },
      { heading: "High-priority areas", paragraphs: ["Begin with the topics that appear repeatedly in competitive examinations and connect facts to maps, timelines and short stories."] , bullets: ["Districts, rivers, canals, soils and major crops", "Haryana history, movements, personalities and important places", "Folk dances, fairs, festivals, language and sports achievements", "State government schemes, administrative structure and economy", "Recent state-level appointments, awards and important events"] },
      { heading: "The three-layer revision method", paragraphs: ["On the first reading, understand the topic. On the second, convert it into one-line notes or flashcards. On the third, solve questions without looking at the answer. Keep incorrect questions in a separate revision list and revisit it every Sunday."] },
      { heading: "Avoid the common trap", paragraphs: ["Do not spend weeks reading large reference books without testing yourself. Short notes, previous-year questions and frequent recall are the fastest route to better retention."] },
    ],
  },
  {
    slug: "cet-mock-test-analysis-guide",
    title: "How to Analyse CET Mock Tests and Improve Your Score Every Week",
    excerpt: "Taking a mock test is only half the work. Learn a four-step analysis method that turns every test into a personalised improvement plan.",
    category: "Mock Tests",
    date: "September 6, 2026",
    readTime: "5 min read",
    author: "CET TEST Team",
    tags: ["Mock Test", "Score Improvement", "Exam Strategy"],
    image: "/current-affairs-news.jpg",
    sections: [
      { heading: "Attempt the test like the real exam", paragraphs: ["Choose a fixed time, keep your phone away and follow the same section order you expect to use in the examination. A realistic environment makes your score and time-management feedback more trustworthy."] },
      { heading: "The four buckets of analysis", paragraphs: ["Once the test ends, do not simply check the score and move on. Review every question and place it in one of four buckets."] , bullets: ["Correct and confident: maintain this strength", "Correct but slow: practise shortcuts and timed sets", "Incorrect but understood after review: work on accuracy", "Incorrect and unclear: return to the concept before attempting more questions"] },
      { heading: "Track the right numbers", paragraphs: ["Record accuracy, questions left due to time, time spent per section and the number of avoidable errors. Compare these numbers across tests instead of focusing only on the total marks."] },
      { heading: "A weekly improvement loop", paragraphs: ["Reserve the day after each mock for analysis and targeted practice. Reattempt the wrong questions after three days without seeing the solution. This simple loop helps convert mistakes into marks."] },
    ],
  },
  {
    slug: "government-exam-revision-timetable",
    title: "Best Revision Timetable for Government Exam Aspirants",
    excerpt: "A flexible weekly timetable for students preparing for CET, HSSC, SSC and Railway exams alongside college or work.",
    category: "Time Management",
    date: "August 28, 2026",
    readTime: "6 min read",
    author: "CET TEST Team",
    tags: ["Time Management", "Revision", "Government Exams"],
    image: "/current-affairs-news.jpg",
    sections: [
      { heading: "Plan around your available hours", paragraphs: ["A timetable works only when it fits your life. Students with college or jobs can make strong progress with four focused hours a day if they protect those hours from distractions. Set weekly targets first, then assign them to individual days."] },
      { heading: "A balanced weekly structure", paragraphs: ["Use weekdays for concept building and short practice sets. Keep one day for a full mock and another for revision. This balance gives you both depth and exam speed."] , bullets: ["Monday to Thursday: concepts plus 30–40 practice questions", "Friday: revise formulas, vocabulary and Haryana GK notes", "Saturday: full mock test under exam conditions", "Sunday: mock analysis, weak-topic practice and light revision"] },
      { heading: "The 1-3-7 revision rule", paragraphs: ["Revise a new topic after one day, again after three days and once more after seven days. Spaced revision reduces forgetting and keeps your notes manageable."] },
      { heading: "Protect your energy", paragraphs: ["Sleep well, take short breaks and avoid changing resources every few days. A sustainable routine will always outperform a perfect timetable that you cannot follow."] },
    ],
  },
  {
    slug: "last-30-days-cet-preparation",
    title: "Last 30 Days Before CET: What to Study and What to Avoid",
    excerpt: "Use the final month wisely with a revision-first strategy focused on accuracy, current affairs and full-length practice.",
    category: "Last Month Strategy",
    date: "August 20, 2026",
    readTime: "6 min read",
    author: "CET TEST Team",
    tags: ["Last 30 Days", "CET Preparation", "Revision"],
    image: "/current-affairs-news.jpg",
    sections: [
      { heading: "Stop chasing new resources", paragraphs: ["The final month is for strengthening what you already know. Avoid starting several new books or watching endless strategy videos. Use your notes, previous-year questions and a trusted mock-test series."] },
      { heading: "A four-week plan", paragraphs: ["Divide the month into four clear phases so every week has a purpose."] , bullets: ["Week 1: finish remaining high-priority concepts and revise formulas", "Week 2: revise Haryana GK, language rules and current affairs", "Week 3: attempt full mocks and repair recurring weak areas", "Week 4: light revision, timed practice and exam-day preparation"] },
      { heading: "Accuracy before attempts", paragraphs: ["In the last few weeks, practise deciding which questions to attempt first. Learn to leave a question when the method is not clear instead of losing several minutes on it."] },
      { heading: "The day before the exam", paragraphs: ["Keep the final day calm. Review short notes, check your documents and exam-centre details, and sleep on time. Confidence comes from preparation, not from studying all night."] },
    ],
  },
]

export function getStaticBlog(slug: string) {
  return staticBlogs.find((blog) => blog.slug === slug)
}

export function stripMarkup(value: string) {
  return value.replace(/<[^>]*>/g, "").trim()
}

export function getBlogWords(blog: StaticBlog) {
  return blog.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]).join(" ").split(/\s+/).length
}

// Keep the article collection local and deterministic. It intentionally does not read from a server or database.
