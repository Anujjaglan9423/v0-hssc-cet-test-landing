# HSSC CET TEST Platform - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Database Schema](#database-schema)
5. [Authentication System](#authentication-system)
6. [Frontend Pages](#frontend-pages)
7. [Backend Server Actions](#backend-server-actions)
8. [Components](#components)
9. [Environment Variables](#environment-variables)
10. [SQL Migration Scripts](#sql-migration-scripts)
11. [Features](#features)
12. [API Reference](#api-reference)

---

## Project Overview

HSSC CET TEST is a comprehensive online test preparation platform for Haryana Staff Selection Commission (HSSC) Common Eligibility Test (CET). The platform allows students to practice tests, track their progress, and prepare for competitive exams.

### Key Features:
- **Student Panel**: Take tests, practice by subject/topic, view results & analytics
- **Admin Panel**: Manage tests, questions, students, view feedback & contacts
- **Custom Mock Test Generator**: Create tests with custom subject percentages
- **Test Feedback System**: Collect feedback after test completion
- **Contact Form**: User inquiries saved to database
- **Responsive Design**: Works on desktop and mobile devices

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Database** | PostgreSQL (Supabase) |
| **Authentication** | Custom auth with bcrypt + sessions |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui |
| **Charts** | Recharts |
| **State Management** | React Context + SWR |
| **Icons** | Lucide React |

---

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── about/page.tsx           # About us page
│   ├── admin/                   # Admin panel
│   │   ├── analytics/page.tsx   # Admin analytics dashboard
│   │   ├── contacts/page.tsx    # Contact form submissions
│   │   ├── feedback/page.tsx    # Test feedback from students
│   │   ├── layout.tsx           # Admin layout with sidebar
│   │   ├── page.tsx             # Admin dashboard
│   │   ├── settings/page.tsx    # Admin settings
│   │   ├── students/page.tsx    # Student management
│   │   └── tests/page.tsx       # Test management
│   ├── blog/                    # Blog pages
│   │   ├── [slug]/page.tsx      # Dynamic blog post page
│   │   └── page.tsx             # Blog listing
│   ├── careers/page.tsx         # Careers page
│   ├── contact/page.tsx         # Contact form
│   ├── globals.css              # Global styles & Tailwind config
│   ├── layout.tsx               # Root layout
│   ├── login/page.tsx           # Login page
│   ├── page.tsx                 # Landing page (homepage)
│   ├── privacy-policy/page.tsx  # Privacy policy
│   ├── refund-policy/page.tsx   # Refund policy
│   ├── signup/page.tsx          # Registration page
│   ├── student/                 # Student panel
│   │   ├── analytics/page.tsx   # Student analytics & insights
│   │   ├── layout.tsx           # Student layout with sidebar
│   │   ├── page.tsx             # Student dashboard
│   │   ├── practice/            # Practice mode
│   │   │   ├── page.tsx         # Practice zone subject selection
│   │   │   └── start/page.tsx   # Practice test interface
│   │   ├── results/             # Test results
│   │   │   ├── [id]/page.tsx    # Individual result details
│   │   │   └── page.tsx         # Results listing
│   │   ├── test/[id]/page.tsx   # Test taking interface
│   │   └── tests/page.tsx       # Available tests listing
│   └── terms-of-service/page.tsx
├── components/                   # Reusable components
│   ├── admin/                   # Admin-specific components
│   │   ├── csv-upload-modal.tsx # CSV upload for questions
│   │   └── custom-mock-test-modal.tsx # Custom mock test creator
│   ├── dashboard/               # Dashboard components
│   │   ├── chart-card.tsx       # Chart wrapper component
│   │   ├── data-table.tsx       # Data table component
│   │   ├── sidebar.tsx          # Dashboard sidebar navigation
│   │   └── stats-card.tsx       # Statistics card component
│   ├── student/                 # Student-specific components
│   │   └── feedback-modal.tsx   # Post-test feedback form
│   ├── ui/                      # shadcn/ui components
│   └── ...                      # Landing page sections
├── lib/                         # Utility functions & server actions
│   ├── actions/                 # Server actions
│   │   ├── admin.ts             # Admin server actions
│   │   ├── contact.ts           # Contact & feedback actions
│   │   └── student.ts           # Student server actions
│   ├── auth-context.ts          # Auth context provider
│   ├── auth.ts                  # Authentication utilities
│   ├── supabase/                # Supabase client setup
│   │   ├── client.ts            # Browser client
│   │   ├── middleware.ts        # Auth middleware
│   │   └── server.ts            # Server client
│   ├── types.ts                 # TypeScript type definitions
│   └── utils.ts                 # Utility functions
├── scripts/                     # SQL migration scripts
└── middleware.ts                # Next.js middleware
```

---

## Database Schema

### Tables Overview

The database consists of **12 tables**:

### 1. `users` - User accounts
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| email | text | User email (unique) |
| password_hash | text | Bcrypt hashed password |
| full_name | text | User's full name |
| phone | text | Phone number |
| role | text | 'admin' or 'student' |
| plan | text | 'free', 'basic', or 'pro' |
| avatar_url | text | Profile picture URL |
| created_at | timestamp | Account creation date |
| updated_at | timestamp | Last update date |

### 2. `sessions` - Authentication sessions
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| user_id | uuid | Foreign key to users |
| token | text | Session token |
| expires_at | timestamp | Session expiration |
| created_at | timestamp | Session creation date |

### 3. `exams` - Exam categories
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| name | text | Exam name (e.g., "HSSC CET") |
| description | text | Exam description |
| created_at | timestamp | Creation date |

### 4. `subjects` - Subjects under exams
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| name | text | Subject name |
| exam_id | uuid | Foreign key to exams |
| created_at | timestamp | Creation date |

### 5. `topics` - Topics under subjects
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| name | text | Topic name |
| subject_id | uuid | Foreign key to subjects |
| created_at | timestamp | Creation date |

### 6. `tests` - Test definitions
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| title | text | Test title |
| description | text | Test description |
| test_type | text | 'full_exam', 'subject', or 'topic' |
| exam_id | uuid | Foreign key to exams |
| subject_id | uuid | Foreign key to subjects |
| topic_id | uuid | Foreign key to topics |
| duration | integer | Duration in minutes |
| total_questions | integer | Number of questions |
| difficulty | text | 'easy', 'medium', or 'hard' |
| is_active | boolean | Whether test is active |
| created_by | uuid | Admin who created |
| created_at | timestamp | Creation date |

### 7. `questions` - Test questions
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| test_id | uuid | Foreign key to tests |
| question_order | integer | Question sequence number |
| question_text | text | Question content |
| option_a | text | Option A |
| option_b | text | Option B |
| option_c | text | Option C |
| option_d | text | Option D |
| correct_answer | text | 'a', 'b', 'c', or 'd' |
| explanation | text | Answer explanation |
| exam_source | text | Source exam (e.g., "HSSC CET 2023") |
| created_at | timestamp | Creation date |

### 8. `test_attempts` - Student test attempts
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| user_id | uuid | Foreign key to users |
| test_id | uuid | Foreign key to tests |
| started_at | timestamp | Attempt start time |
| completed_at | timestamp | Attempt completion time |
| time_taken | integer | Time taken in seconds |
| time_remaining | integer | Remaining time when paused |
| status | text | 'in_progress', 'paused', 'completed', 'abandoned' |
| answers | jsonb | Saved answers (for pause/resume) |
| flagged | jsonb | Flagged questions |
| current_question | integer | Current question index |

### 9. `user_answers` - Individual question answers
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| attempt_id | uuid | Foreign key to test_attempts |
| question_id | uuid | Foreign key to questions |
| selected_answer | text | Selected option |
| is_correct | boolean | Whether answer is correct |
| time_spent | integer | Time spent on question |
| created_at | timestamp | Answer submission time |

### 10. `test_results` - Test results/scores
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| attempt_id | uuid | Foreign key to test_attempts |
| user_id | uuid | Foreign key to users |
| test_id | uuid | Foreign key to tests |
| total_questions | integer | Total questions |
| correct_answers | integer | Correct count |
| wrong_answers | integer | Wrong count |
| unanswered | integer | Unanswered count |
| score | numeric | Marks obtained |
| percentage | numeric | Score percentage |
| time_taken | integer | Time taken in seconds |
| rank | integer | Rank among all attempts |
| created_at | timestamp | Result creation date |

### 11. `contacts` - Contact form submissions
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| first_name | text | First name |
| last_name | text | Last name |
| email | text | Email address |
| phone | text | Phone number |
| subject | text | Message subject |
| message | text | Message content |
| status | text | 'new', 'read', 'responded' |
| created_at | timestamp | Submission date |
| updated_at | timestamp | Last update |

### 12. `test_feedback` - Post-test feedback
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| user_id | uuid | Foreign key to users |
| test_id | uuid | Foreign key to tests |
| attempt_id | uuid | Foreign key to test_attempts |
| rating | integer | 1-5 star rating |
| difficulty_level | text | Perceived difficulty |
| question_quality | text | Quality rating |
| time_sufficient | boolean | Was time enough? |
| would_recommend | boolean | Would recommend? |
| comments | text | Additional comments |
| created_at | timestamp | Feedback date |

### Entity Relationship Diagram

```
users ─────────────────┬─────────────────┬─────────────────┐
  │                    │                 │                 │
  │                    │                 │                 │
  ▼                    ▼                 ▼                 ▼
sessions          test_attempts     test_results     test_feedback
                       │                 │                 │
                       │                 │                 │
                       ▼                 ▼                 ▼
                  user_answers ◄────► questions ◄────── tests
                                                          │
                                                          │
                                    ┌─────────────────────┤
                                    │                     │
                                    ▼                     ▼
                                 topics              subjects
                                    │                     │
                                    │                     │
                                    └─────────────────────┤
                                                          │
                                                          ▼
                                                        exams

contacts (standalone - contact form submissions)
```

---

## Authentication System

The platform uses **custom authentication** with bcrypt password hashing and session-based auth:

### Registration Flow:
1. User submits signup form with email, password, full name
2. Password is hashed using bcrypt (10 rounds)
3. User record created in `users` table with role='student'
4. Session token generated and stored in `sessions` table
5. Session token stored in HTTP-only cookie
6. User redirected to student dashboard

### Login Flow:
1. User submits email and password
2. System fetches user by email
3. Password verified against bcrypt hash
4. If valid, new session created
5. Old sessions deleted (single session per user)
6. Session token set in cookie
7. User redirected based on role (admin/student)

### Session Management:
- Sessions expire after 7 days
- Session validated on each protected route
- Middleware checks session validity
- Logout deletes session from database and clears cookie

### Key Files:
- `lib/auth.ts` - Auth utility functions (hashPassword, verifyPassword, createSession, etc.)
- `lib/auth-context.ts` - React context for auth state
- `lib/supabase/middleware.ts` - Session validation middleware
- `middleware.ts` - Route protection

---

## Frontend Pages

### Public Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, testimonials, pricing |
| `/about` | About us page with team members |
| `/blog` | Blog listing page |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact form |
| `/login` | User login |
| `/signup` | User registration |
| `/careers` | Careers page |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/refund-policy` | Refund policy |

### Student Pages (Protected)

| Route | Description |
|-------|-------------|
| `/student` | Student dashboard with stats, recent tests |
| `/student/tests` | Available tests (Full Exams, Subject Tests, Topic Tests) |
| `/student/test/[id]` | Test taking interface with timer |
| `/student/results` | All test results listing |
| `/student/results/[id]` | Detailed result with answers |
| `/student/analytics` | Performance analytics & insights |
| `/student/practice` | Practice zone - select subject/topic |
| `/student/practice/start` | Practice test interface |

### Admin Pages (Protected)

| Route | Description |
|-------|-------------|
| `/admin` | Admin dashboard with stats, charts |
| `/admin/tests` | Test management (create, edit, delete, CSV upload) |
| `/admin/students` | Student management (view, edit, delete) |
| `/admin/analytics` | Platform analytics |
| `/admin/contacts` | Contact form submissions |
| `/admin/feedback` | Test feedback from students |
| `/admin/settings` | Admin settings |

---

## Backend Server Actions

### Admin Actions (`lib/actions/admin.ts`)

| Function | Description |
|----------|-------------|
| `getAdminStats()` | Get dashboard statistics |
| `getAllTests()` | Get all tests with question counts |
| `getAllStudents()` | Get all students with stats |
| `getTestQuestions(testId)` | Get questions for a test |
| `createTest(data)` | Create new test with questions |
| `updateTest(id, data)` | Update test details |
| `deleteTest(id)` | Delete test and questions |
| `updateStudent(id, data)` | Update student details |
| `deleteStudent(id)` | Delete student account |
| `getExams()` | Get all exams |
| `getSubjects(examId?)` | Get subjects (optionally by exam) |
| `getTopics(subjectId?)` | Get topics (optionally by subject) |
| `createCustomMockTest(config)` | Create mock test with subject percentages |
| `getAdminAnalytics()` | Get detailed platform analytics |

### Student Actions (`lib/actions/student.ts`)

| Function | Description |
|----------|-------------|
| `getStudentDashboard(userId)` | Get dashboard data |
| `getAvailableTests(userId)` | Get available tests by category |
| `getTestById(testId)` | Get test with questions |
| `startTest(userId, testId)` | Start a new test attempt |
| `submitAnswer(attemptId, questionId, answer)` | Submit individual answer |
| `completeTest(attemptId, timeTaken)` | Complete test and calculate results |
| `pauseTest(attemptId, answers, currentQuestion, timeRemaining)` | Pause test |
| `resumeTest(attemptId)` | Resume paused test |
| `getTestResult(resultId)` | Get detailed test result |
| `getAllResults(userId)` | Get all results for user |
| `getStudentAnalytics(userId)` | Get performance analytics |
| `getSubjectsAndTopics()` | Get subjects with question counts |
| `getPracticeQuestions(subjectId, topicId?, count?)` | Get practice questions |

### Contact Actions (`lib/actions/contact.ts`)

| Function | Description |
|----------|-------------|
| `submitContact(data)` | Submit contact form |
| `getContacts(status?)` | Get contact submissions |
| `updateContactStatus(id, status)` | Update contact status |
| `submitTestFeedback(data)` | Submit post-test feedback |
| `getTestFeedback(testId?)` | Get test feedback |

---

## Components

### Landing Page Components
- `hero-section.tsx` - Hero section with CTA
- `features-section.tsx` - Feature highlights
- `stats-section.tsx` - Platform statistics
- `test-series-section.tsx` - Test series showcase
- `testimonials-section.tsx` - User testimonials
- `faq-section.tsx` - FAQ accordion
- `pricing-section.tsx` - Pricing plans
- `cta-section.tsx` - Call to action
- `navbar.tsx` - Navigation bar
- `footer.tsx` - Site footer

### Dashboard Components
- `sidebar.tsx` - Dashboard navigation sidebar
- `stats-card.tsx` - Statistics card with icon
- `chart-card.tsx` - Chart wrapper component
- `data-table.tsx` - Data table with sorting/filtering

### Admin Components
- `csv-upload-modal.tsx` - CSV upload for bulk questions
- `custom-mock-test-modal.tsx` - Create custom mock tests

### Student Components
- `feedback-modal.tsx` - Post-test feedback form

---

## Environment Variables

Required environment variables (automatically configured via Supabase integration):

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_JWT_SECRET=your-jwt-secret

# PostgreSQL Direct Connection
POSTGRES_URL=postgres://...
POSTGRES_PRISMA_URL=postgres://...
POSTGRES_URL_NON_POOLING=postgres://...
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your-password
POSTGRES_DATABASE=postgres
POSTGRES_HOST=your-host

# Development Redirect URL (for auth)
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
```

---

## SQL Migration Scripts

Run these scripts in order to set up the database:

| Script | Description |
|--------|-------------|
| `001_create_tables.sql` | Create all base tables |
| `002_create_trigger.sql` | Create updated_at triggers |
| `003_seed_data.sql` | Seed initial exam/subject/topic data |
| `004_fix_rls_policies.sql` | Set up RLS policies |
| `005_add_paused_test_state.sql` | Add pause/resume fields |
| `005_custom_auth.sql` | Set up custom auth tables |
| `006_fix_status_constraint.sql` | Fix test_attempts status constraint |
| `007_fix_avg_score.sql` | Data cleanup script |
| `008_create_contacts_and_feedback.sql` | Create contacts & feedback tables |
| `009_fix_contacts_indexes.sql` | Fix index creation |

---

## Features

### Student Features

1. **Dashboard**
   - Total tests available
   - Tests completed count
   - Best score achieved
   - Current streak
   - Recent test results

2. **Test Taking**
   - Timed tests with countdown
   - Question navigation
   - Flag questions for review
   - Pause and resume tests
   - Save and exit functionality

3. **Results & Analytics**
   - Detailed score breakdown
   - Correct/wrong/unanswered counts
   - Time analysis
   - Rank among all attempts
   - Performance trends
   - Subject-wise breakdown
   - Topic strengths analysis
   - Personalized recommendations

4. **Practice Zone**
   - Subject-wise practice
   - Topic-wise practice
   - Random question selection
   - No time limit

### Admin Features

1. **Dashboard**
   - Total students
   - Active tests
   - Total attempts
   - Pass rate
   - Test attempts by category chart
   - Subject performance chart
   - Recent activity

2. **Test Management**
   - Create tests manually
   - CSV upload for bulk questions
   - Custom mock test generator
   - Edit/delete tests
   - Pause/resume tests
   - View test questions

3. **Student Management**
   - View all students
   - Edit student details
   - Delete students
   - View student stats

4. **Contacts & Feedback**
   - View contact form submissions
   - Mark as read/responded
   - View test feedback
   - Filter by status/rating

---

## API Reference

All server actions are called directly from React Server Components or via `useTransition` in client components. There are no REST API endpoints - the platform uses Next.js Server Actions exclusively.

### Example Usage:

```tsx
// In a Server Component
import { getStudentDashboard } from "@/lib/actions/student"

export default async function DashboardPage() {
  const data = await getStudentDashboard(userId)
  return <Dashboard data={data} />
}

// In a Client Component
"use client"
import { useState, useTransition } from "react"
import { submitAnswer } from "@/lib/actions/student"

function QuestionComponent() {
  const [isPending, startTransition] = useTransition()
  
  const handleAnswer = (answer: string) => {
    startTransition(async () => {
      await submitAnswer(attemptId, questionId, answer)
    })
  }
}
```

---

## Deployment

The application is deployed on Vercel with automatic deployments from the main branch. Database is hosted on Supabase.

### Deployment Checklist:
1. Ensure all environment variables are set in Vercel
2. Run SQL migrations on Supabase
3. Verify database connectivity
4. Test authentication flow
5. Verify file uploads work correctly

---

## Support

For technical support or questions:
- Email: support@hssccettest.com
- Contact form: /contact

---

*Documentation last updated: January 2026*
