export type BlogPost = {
  slug: string
  category: string
  title: string
  excerpt: string
  published: string
  readTime: string
  tags: string[]
  takeaways: string[]
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "haryana-cet-preparation-strategy",
    category: "Preparation Strategy",
    title: "Haryana CET Preparation Strategy: A Simple Plan for Serious Aspirants",
    excerpt: "Build a practical study routine for Haryana CET with the right balance of concepts, revision, Haryana GK and mock tests.",
    published: "September 18, 2026",
    readTime: "6 min read",
    tags: ["Haryana CET", "Study Plan", "Strategy"],
    takeaways: ["Start with the official syllabus", "Use weekly revision cycles", "Measure progress with mock tests"],
    sections: [
      { heading: "Begin with a realistic baseline", paragraphs: ["Before making a timetable, take one short diagnostic test. Do not worry about the score. Use it to identify the subjects and question types that consume the most time.", "A good plan is built around your current level, available hours and exam date—not someone else's routine."] },
      { heading: "Divide your preparation into three phases", paragraphs: ["Spend the first phase building concepts, the second phase solving topic-wise questions and the final phase revising while taking full-length mocks."], bullets: ["Concept phase: understand one topic and make short notes.", "Practice phase: solve timed questions and review every mistake.", "Revision phase: revisit notes, formulas and weak areas every week."] },
      { heading: "Make Haryana GK a daily habit", paragraphs: ["Haryana-specific history, geography, culture, administration and current affairs can become a strong scoring area. Study a small topic every day and revise it on Sunday instead of postponing the entire section."] },
      { heading: "The rule that keeps a plan working", paragraphs: ["Keep one buffer day each week. If a topic takes longer than expected, use the buffer instead of abandoning the rest of the timetable. Consistency beats an ambitious plan that lasts only three days."] }
    ]
  },
  {
    slug: "how-to-improve-mock-test-score",
    category: "Mock Tests",
    title: "How to Improve Your Mock Test Score: The Review Method That Works",
    excerpt: "Taking more tests is not enough. Learn how to analyse every mock so each attempt improves your accuracy, speed and confidence.",
    published: "September 12, 2026",
    readTime: "5 min read",
    tags: ["Mock Tests", "Accuracy", "Time Management"],
    takeaways: ["Review correct guesses too", "Maintain an error log", "Retake weak topics after analysis"],
    sections: [
      { heading: "A mock test is a diagnostic tool", paragraphs: ["Your score is only the starting point. The real value appears when you understand why a question was wrong, skipped or solved with an unsafe guess.", "Reserve at least the same amount of time for analysis as you spent taking the test."] },
      { heading: "Classify every mistake", paragraphs: ["Use four labels: concept gap, calculation or reading error, time pressure and blind guess. Each label needs a different solution, so avoid writing only the correct answer in your notebook."], bullets: ["Concept gap: revise the chapter and solve five similar questions.", "Careless error: slow down for keywords and units.", "Time pressure: practise short timed sets.", "Guess: learn when to leave a question."] },
      { heading: "Track the numbers that matter", paragraphs: ["Along with your score, record accuracy, attempted questions, time spent per section and repeated error types. Improvement becomes easier to see when you compare these numbers across four or five tests."] },
      { heading: "End every review with one action", paragraphs: ["Choose one small correction for the next test—such as revising percentages or attempting reasoning first. A focused action is more useful than a long list of vague resolutions."] }
    ]
  },
  {
    slug: "haryana-gk-topics-for-cet",
    category: "Haryana GK",
    title: "Haryana GK for CET: High-Value Topics You Should Revise First",
    excerpt: "Prioritise the Haryana GK areas that appear most often and create a revision system that makes facts easier to remember.",
    published: "September 05, 2026",
    readTime: "7 min read",
    tags: ["Haryana GK", "Revision", "CET"],
    takeaways: ["Study topics in connected groups", "Use maps and timelines", "Revise facts through questions"],
    sections: [
      { heading: "Start with the state profile", paragraphs: ["First learn the basic map of Haryana: districts, boundaries, rivers, major cities, divisions and important geographic features. This foundation makes later topics easier to connect."] },
      { heading: "Build topic clusters", paragraphs: ["Instead of memorising isolated facts, connect related information. For example, study a historical site with its district, period, nearby river and cultural importance."], bullets: ["History: ancient, medieval and modern Haryana.", "Geography: soil, climate, drainage, agriculture and resources.", "Culture: fairs, festivals, folk dances, languages and literature.", "Administration: government schemes, local governance and districts."] },
      { heading: "Use active recall", paragraphs: ["Close your notes and answer short questions from memory. Mark facts you forget and place them in a small weekly revision list. Reading the same page repeatedly feels comfortable but does not test recall."] },
      { heading: "A simple seven-day cycle", paragraphs: ["Study one cluster on Monday to Thursday, solve questions on Friday, revise mistakes on Saturday and take a mixed Haryana GK quiz on Sunday. Repeat the cycle with new topics while revisiting old errors."] }
    ]
  },
  {
    slug: "exam-day-time-management",
    category: "Exam Skills",
    title: "Exam-Day Time Management: How to Stay Calm and Attempt More Questions",
    excerpt: "A clear attempt strategy can protect your score when the paper feels difficult. Prepare your time plan before exam day.",
    published: "August 28, 2026",
    readTime: "5 min read",
    tags: ["Exam Day", "Time Management", "Accuracy"],
    takeaways: ["Use a two-pass approach", "Do not fight one question", "Keep final minutes for review"],
    sections: [
      { heading: "Choose your order during mocks", paragraphs: ["There is no universal best section order. Try two or three approaches in mock tests and choose the one that gives you the best accuracy without leaving an unfinished section."] },
      { heading: "Use the two-pass approach", paragraphs: ["In the first pass, solve questions you can answer confidently and mark questions that need calculation or deeper thinking. In the second pass, return to marked questions with the time you have left."] },
      { heading: "Know when to move on", paragraphs: ["If you cannot identify a clear method within the first minute, move ahead. One difficult question should not cost you three easy questions later in the paper."] },
      { heading: "Protect the last few minutes", paragraphs: ["Keep a small review window for unanswered questions, marked responses and avoidable reading errors. Do not change an answer without a clear reason."] }
    ]
  },
  {
    slug: "last-30-days-cet-revision-plan",
    category: "Revision Plan",
    title: "The Last 30 Days Before CET: A Focused Revision Plan for Aspirants",
    excerpt: "Use the final month to revise smartly, practise full papers and build exam confidence without starting everything from zero.",
    published: "August 20, 2026",
    readTime: "6 min read",
    tags: ["Revision", "Last Month", "CET"],
    takeaways: ["Prioritise high-return topics", "Solve full papers regularly", "Keep sleep and routine stable"],
    sections: [
      { heading: "Week one: find and fix gaps", paragraphs: ["Review your notes and recent mock tests. List the top five weak topics and revise those first. Do not make a new book list in the last month."] },
      { heading: "Weeks two and three: practise under pressure", paragraphs: ["Take full-length tests on alternate days. On the days between tests, revise mistakes, practise weak chapters and complete short mixed quizzes."], bullets: ["Morning: one focused revision block.", "Afternoon: topic-wise practice or a mock test.", "Evening: error-log review and light revision."] },
      { heading: "Week four: revise, do not overload", paragraphs: ["Use short notes, formulas, Haryana GK facts and previous mistakes. Reduce new learning and focus on accuracy, speed and a consistent attempt strategy."] },
      { heading: "Take care of your exam brain", paragraphs: ["Keep your sleep schedule stable, take short breaks and avoid comparing your preparation with others. A calm, well-rested mind can use knowledge more effectively than an exhausted one."] }
    ]
  }
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export const blogImage = "/current-affairs-news.jpg"

export function stripBlogContent(post: BlogPost) {
  return [post.excerpt, ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])])].join(" ")
}

export function getBlogReadTime(post: BlogPost) {
  return post.readTime
}

export function getBlogSummary(post: BlogPost) {
  return stripBlogContent(post).slice(0, 150) + "..."
}

export function getBlogPosts() {
  return blogPosts
}

export function getBlogMetadata(post: BlogPost) {
  return { title: post.title, description: post.excerpt, keywords: post.tags }
}

export function getBlogCategories() {
  return [...new Set(blogPosts.map((post) => post.category))]
}

export function getFeaturedBlog() {
  return blogPosts[0]
}

export function getRelatedBlogs(current: BlogPost) {
  return blogPosts.filter((post) => post.slug !== current.slug && post.category === current.category).slice(0, 3)
}

export function getRecentBlogs(current: BlogPost) {
  return blogPosts.filter((post) => post.slug !== current.slug).slice(0, 4)
}

export function formatBlogDate(date: string) {
  return date
}

export function getBlogUrl(slug: string) {
  return `/blog/${slug}`
}

export function getBlogCount() {
  return blogPosts.length
}

export function getBlogTagline() {
  return "Clear guidance for your next government exam milestone."
}

export function getBlogAuthor() {
  return "CET TEST Editorial Team"
}

export function getBlogAuthorRole() {
  return "Exam preparation editors"
}

export function getBlogSections(post: BlogPost) {
  return post.sections
}

export function isBlogPost(slug: string): boolean {
  return blogPosts.some((post) => post.slug === slug)
}

export function getBlogSlugs() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function getBlogDescription(post: BlogPost) {
  return post.excerpt
}

export function getBlogTags(post: BlogPost) {
  return post.tags
}

export function getBlogHeading() {
  return "Study better. Attempt smarter."
}

export function getBlogIntro() {
  return "Practical preparation notes, mock-test lessons and revision plans written for Haryana CET and government exam aspirants."
}

export function getBlogCallout() {
  return "Read one guide, apply one idea, and keep moving forward."
}

export function getBlogBreadcrumb() {
  return "Exam preparation blog"
}

export function getBlogFooterCopy() {
  return "Keep learning with CET TEST."
}
