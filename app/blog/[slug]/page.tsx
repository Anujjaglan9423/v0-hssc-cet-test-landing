import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

const posts: Record<
  string,
  {
    title: string
    content: string
    date: string
    readTime: string
    category: string
    image: string
    author: string
  }
> = {
  "competitive-exams-2026-complete-syllabus-exam-pattern": {
    title: "Competitive Exams 2026: Complete Syllabus and Exam Pattern",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    category: "Exam Guide",
    image: "/exam-syllabus-study-guide.jpg",
    author: "CET TEST Team",
    content: `
      <h2>Competitive Exam Patterns 2026</h2>
      <p>Competitive exams have different structures depending on the exam type. Understanding the pattern is crucial for effective preparation. Whether you're preparing for HSSC CET, SSC, Railway, or Uttarakhand exams, each has its unique format.</p>
      
      <h3>Common Exam Structures</h3>
      <ul>
        <li><strong>Total Questions:</strong> Varies by exam (80-100 typically)</li>
        <li><strong>Total Marks:</strong> Same as questions in most exams</li>
        <li><strong>Duration:</strong> 60-120 minutes depending on exam</li>
        <li><strong>Negative Marking:</strong> 0.25-0.5 marks for each wrong answer</li>
        <li><strong>Mode:</strong> Computer Based Test (CBT)</li>
      </ul>
      
      <h3>Subject-wise Distribution (General Pattern)</h3>
      <ul>
        <li><strong>General Awareness:</strong> 20-30%</li>
        <li><strong>Reasoning:</strong> 20-25%</li>
        <li><strong>Mathematics:</strong> 20-25%</li>
        <li><strong>English/Language:</strong> 15-20%</li>
        <li><strong>Specialized Topics:</strong> 10-15% (varies by exam)</li>
      </ul>
      
      <h2>Detailed Syllabus Coverage</h2>
      
      <h3>General Awareness</h3>
      <p>Current affairs, Indian History, Geography, Indian Polity, Economics, Science & Technology, Sports, Awards & Honours - applicable across most competitive exams.</p>
      
      <h3>Mathematics</h3>
      <p>Number System, Percentage, Ratio & Proportion, Average, Time & Work, Time & Distance, Profit & Loss, Simple & Compound Interest, Data Interpretation - fundamental topics common to all exams.</p>
      
      <h3>Reasoning</h3>
      <p>Analogy, Classification, Series, Coding-Decoding, Blood Relations, Direction Sense, Syllogism, Statement & Conclusions, Puzzles - essential for logical thinking across all exams.</p>
      
      <h3>Language Skills</h3>
      <p>Grammar (Tenses, Voice, Narration), Vocabulary, Synonyms & Antonyms, Comprehension - applicable in English, Hindi, and other language sections.</p>
      
      <h2>Preparation Tips</h2>
      <ol>
        <li>Start with understanding the complete syllabus for your chosen exam</li>
        <li>Create a study schedule covering all subjects proportionally</li>
        <li>Practice previous year question papers</li>
        <li>Take mock tests regularly to simulate exam conditions</li>
        <li>Focus on specialized topics specific to your exam</li>
        <li>Stay updated with current affairs across domains</li>
      </ol>
    `,
  },
  "top-10-tips-crack-competitive-exam-first-attempt": {
    title: "Top 10 Tips to Crack Competitive Exams in First Attempt",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    category: "Tips & Tricks",
    image: "/success-tips-study-motivation.jpg",
    author: "CET TEST Team",
    content: `
      <h2>Proven Strategies from Competitive Exam Toppers</h2>
      <p>Clearing competitive exams in the first attempt requires smart preparation and dedication. Here are the top 10 tips from successful candidates across various competitive exams.</p>
      
      <h3>1. Understand Your Exam Pattern</h3>
      <p>Before starting preparation, thoroughly understand the exam pattern, marking scheme, and syllabus specific to your chosen exam (HSSC CET, SSC, Railway, etc). This helps in creating an effective study plan.</p>
      
      <h3>2. Create a Realistic Study Schedule</h3>
      <p>Divide your time wisely among all subjects. Allocate more time to weaker areas while maintaining regular revision of strong subjects.</p>
      
      <h3>3. Focus on Core Concepts</h3>
      <p>Don't just memorize; understand the underlying concepts. This helps in solving new variations of questions in the exam.</p>
      
      <h3>4. Practice Problem Solving Daily</h3>
      <p>Mathematics and Reasoning require consistent practice. Solve at least 50 questions daily and learn shortcut tricks for faster calculations.</p>
      
      <h3>5. Master Logical Thinking</h3>
      <p>Reasoning is more about understanding patterns than memorization. Practice different types of questions to build logical thinking.</p>
      
      <h3>6. Stay Updated with Current Affairs</h3>
      <p>Read newspapers daily and make notes of important events. Focus on last 6 months' current affairs before the exam.</p>
      
      <h3>7. Take Regular Mock Tests</h3>
      <p>Mock tests help in understanding the real exam environment and identifying weak areas. Take at least 2-3 full-length tests weekly.</p>
      
      <h3>8. Analyze Your Performance</h3>
      <p>After each mock test, analyze your performance. Identify patterns in mistakes and work on improving them systematically.</p>
      
      <h3>9. Revise Regularly</h3>
      <p>Regular revision is key to retention. Create short notes for quick revision before the exam.</p>
      
      <h3>10. Stay Healthy and Positive</h3>
      <p>Take care of your physical and mental health. Adequate sleep, exercise, and a positive mindset are crucial for effective preparation.</p>
    `,
  },
  "current-affairs-competitive-exams-2026": {
    title: "Important Current Affairs for Competitive Exams 2026",
    date: "Dec 5, 2025",
    readTime: "10 min read",
    category: "Current Affairs",
    image: "/current-affairs-news-newspaper.jpg",
    author: "CET TEST Team",
    content: `
      <h2>Must-Know Current Affairs for All Competitive Exams</h2>
      <p>Current affairs form a significant portion of the General Awareness section in most competitive exams. Here are the most important topics to cover.</p>
      
      <h3>National News</h3>
      <ul>
        <li>Important government schemes and policies</li>
        <li>Constitutional amendments and legal changes</li>
        <li>Economic developments and budget highlights</li>
        <li>Defense and security updates</li>
        <li>Railway and Infrastructure projects</li>
      </ul>
      
      <h3>State-Specific News (Haryana, Uttarakhand, etc.)</h3>
      <ul>
        <li>New government schemes in your state</li>
        <li>Infrastructure projects and development</li>
        <li>Awards and achievements</li>
        <li>Important appointments</li>
        <li>State-specific policies</li>
      </ul>
      
      <h3>International Affairs</h3>
      <ul>
        <li>India's foreign relations</li>
        <li>International summits and conferences</li>
        <li>Global economic developments</li>
        <li>UN and international organizations</li>
      </ul>
      
      <h3>Sports</h3>
      <ul>
        <li>Major tournaments and winners</li>
        <li>Olympic and Commonwealth Games updates</li>
        <li>Sports personalities and achievements</li>
        <li>Major sports events and records</li>
      </ul>
      
      <h3>Awards & Honours</h3>
      <ul>
        <li>Padma Awards</li>
        <li>National Film Awards</li>
        <li>Literary Awards</li>
        <li>Sports Awards</li>
        <li>Nobel Prizes</li>
      </ul>
      
      <h3>Science & Technology</h3>
      <ul>
        <li>ISRO missions and space exploration</li>
        <li>Defense technology developments</li>
        <li>Medical and biotechnology breakthroughs</li>
        <li>New inventions and discoveries</li>
      </ul>
    `,
  },
  "haryana-gk-districts-history-culture": {
    title: "Haryana GK: Districts, History & Culture",
    date: "Nov 28, 2025",
    readTime: "12 min read",
    category: "State GK",
    image: "/haryana-culture-heritage.jpg",
    author: "CET TEST Team",
    content: `
      <h2>Complete Guide to Haryana General Knowledge</h2>
      <p>Haryana GK is a scoring section in competitive exams. This comprehensive guide covers all important topics applicable across different states.</p>
      
      <h3>General Knowledge Base</h3>
      <ul>
        <li><strong>Formation Year:</strong> Check specific to your state</li>
        <li><strong>Capital:</strong> Know the state capital</li>
        <li><strong>Total Districts:</strong> Important for geography</li>
        <li><strong>Official Language:</strong> State language details</li>
        <li><strong>State Symbols:</strong> Animal, Bird, Flower, Tree</li>
      </ul>
      
      <h3>Districts and Geography</h3>
      <p>Know all districts of your state, their boundaries, and important cities. Understand geographical features like rivers, lakes, and mountains.</p>
      
      <h3>Historical Background</h3>
      <p>Study the history of your state including ancient kingdoms, freedom struggle, and significant historical events relevant to the state.</p>
      
      <h3>Culture & Festivals</h3>
      <ul>
        <li><strong>Folk Dances:</strong> Traditional dances of the state</li>
        <li><strong>Folk Music:</strong> Traditional music forms</li>
        <li><strong>Festivals:</strong> Major festivals celebrated</li>
        <li><strong>Handicrafts:</strong> Traditional crafts and art forms</li>
      </ul>
      
      <h3>Famous Personalities</h3>
      <p>Study notable people from your state including freedom fighters, sports legends, scholars, and current achievers.</p>
      
      <h3>Government Schemes</h3>
      <p>Be aware of major government schemes operational in your state, including welfare schemes, development initiatives, and recent policies.</p>
      
      <h3>Development and Infrastructure</h3>
      <ul>
        <li>Major industries and economic activities</li>
        <li>Important projects and initiatives</li>
        <li>Education and healthcare infrastructure</li>
        <li>Transportation and connectivity</li>
      </ul>
    `,
  },
  "math-shortcuts-quick-calculation-tricks": {
    title: "Math Shortcuts: Quick Calculation Tricks for All Exams",
    date: "Nov 20, 2025",
    readTime: "7 min read",
    category: "Mathematics",
    image: "/mathematics-calculation-formulas.jpg",
    author: "CET TEST Team",
    content: `
      <h2>Speed Up Your Math Calculations</h2>
      <p>Time management is crucial in competitive exams. These shortcuts will help you solve math questions faster across all exam types.</p>
      
      <h3>Percentage Shortcuts</h3>
      <ul>
        <li>To find 10% of any number, just move the decimal one place left</li>
        <li>5% = Half of 10%</li>
        <li>15% = 10% + 5%</li>
        <li>20% = 10% × 2</li>
        <li>25% = One-fourth of the number</li>
      </ul>
      
      <h3>Multiplication Tricks</h3>
      <ul>
        <li>Multiply by 11: Add adjacent digits (e.g., 23 × 11 = 253)</li>
        <li>Multiply by 5: Divide by 2 and multiply by 10</li>
        <li>Multiply by 25: Divide by 4 and multiply by 100</li>
        <li>Multiply by 99: Multiply by 100 and subtract the number</li>
      </ul>
      
      <h3>Division Tricks</h3>
      <ul>
        <li>Divide by 5: Multiply by 2 and divide by 10</li>
        <li>Divide by 25: Multiply by 4 and divide by 100</li>
      </ul>
      
      <h3>Square Shortcuts</h3>
      <p>For numbers ending in 5: (First digit × Next digit) and append 25</p>
      <p>Example: 25² = 2 × 3 = 6, append 25 = 625</p>
      
      <h3>Important Formulas</h3>
      <ul>
        <li><strong>Time and Work:</strong> If A does work in x days and B in y days, together they finish in xy/(x+y) days</li>
        <li><strong>Ratio and Proportion:</strong> If a:b = c:d, then ad = bc</li>
        <li><strong>Average:</strong> Sum of all numbers / Count of numbers</li>
      </ul>
      
      <h3>Practice Tips</h3>
      <ol>
        <li>Memorize tables up to 20</li>
        <li>Learn squares up to 30 and cubes up to 12</li>
        <li>Practice mental calculations daily</li>
        <li>Use approximation for complex calculations</li>
        <li>Learn estimation techniques for data interpretation</li>
      </ol>
    `,
  },
  "english-grammar-rules-competitive-aspirant": {
    title: "English Grammar Rules Every Competitive Aspirant Must Know",
    date: "Nov 15, 2025",
    readTime: "9 min read",
    category: "English",
    image: "/english-grammar-book-learning.jpg",
    author: "CET TEST Team",
    content: `
      <h2>Essential English Grammar for Competitive Exams</h2>
      <p>English section can be scoring if you master these fundamental grammar rules applicable across all competitive exams.</p>
      
      <h3>Tenses</h3>
      <p>Understanding the correct use of tenses is crucial:</p>
      <ul>
        <li><strong>Simple Present:</strong> Habitual actions, universal truths, facts</li>
        <li><strong>Present Continuous:</strong> Actions happening now, temporary situations</li>
        <li><strong>Present Perfect:</strong> Past actions with present relevance or recent completion</li>
        <li><strong>Simple Past:</strong> Completed actions in the past</li>
        <li><strong>Past Continuous:</strong> Ongoing actions in the past</li>
      </ul>
      
      <h3>Subject-Verb Agreement</h3>
      <ul>
        <li>Singular subjects take singular verbs</li>
        <li>Plural subjects take plural verbs</li>
        <li>Words like 'everyone', 'anybody', 'someone' are singular</li>
        <li>Collective nouns can be singular or plural based on context</li>
        <li>None can be singular or plural</li>
      </ul>
      
      <h3>Active and Passive Voice</h3>
      <p><strong>Active:</strong> Subject + Verb + Object</p>
      <p><strong>Passive:</strong> Object + Be verb + Past participle + by + Subject</p>
      <p>Passive voice changes tense of 'be' verb and uses past participle of main verb.</p>
      
      <h3>Direct and Indirect Speech</h3>
      <ul>
        <li>Change of pronouns based on speaker and listener</li>
        <li>Change of tense (backshift rule)</li>
        <li>Change of time and place expressions (this → that, here → there)</li>
        <li>Change of question marks to full stops in indirect speech</li>
      </ul>
      
      <h3>Common Errors to Avoid</h3>
      <ul>
        <li>Using 'the' before proper nouns unnecessarily</li>
        <li>Confusing 'since' (specific point) and 'for' (duration) with time expressions</li>
        <li>Wrong preposition usage</li>
        <li>Double negatives</li>
        <li>Misplaced modifiers</li>
      </ul>
      
      <h3>Important One Word Substitutions</h3>
      <ul>
        <li>Autobiography - Story of one's own life</li>
        <li>Omnipresent - Present everywhere</li>
        <li>Posthumous - After death</li>
        <li>Unanimous - In complete agreement</li>
        <li>Altruist - One who thinks of others' welfare</li>
      </ul>
      
      <h3>Vocabulary Building</h3>
      <ul>
        <li>Learn synonyms and antonyms daily</li>
        <li>Understand word roots and prefixes/suffixes</li>
        <li>Practice using new words in sentences</li>
        <li>Read comprehension passages to improve contextual understanding</li>
      </ul>
    `,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                CET <span className="text-primary">TEST</span>
              </span>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Featured Image */}
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
          />

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Start Practicing?</h3>
            <p className="text-muted-foreground mb-4">
              Join thousands of students preparing for competitive exams with our comprehensive test series.
            </p>
            <Link href="/register">
              <Button>Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
