# Section-wise CSV Upload Feature - Complete Guide

## Overview

A fully functional section-wise test creation system with CSV preview and edit capabilities. This allows admins to:
- Create tests with multiple sections
- Upload CSV files for each section separately
- Preview all questions before publishing
- Edit/delete incorrect questions
- Configure combined or per-section timing
- Support negative marking

## Features

### 1. **5-Step Wizard Flow**
- **Step 1**: Basic test info (title, description, difficulty, negative marking)
- **Step 2**: Define sections with names and timing
- **Step 3**: Upload CSV files for each section (with drag-drop)
- **Step 4**: Preview all questions with error highlighting and edit capability
- **Step 5**: Success confirmation

### 2. **CSV Preview & Validation**
- Automatic CSV parsing using Papa Parse
- Real-time validation of all questions
- Clear error messages (missing fields, invalid correct answer, etc.)
- Visual indicators for questions with errors
- Error count per section in tabs

### 3. **Edit Questions**
- Navigate through questions with Previous/Next buttons
- Edit any field: question text, options, correct answer, explanation
- Delete questions you don't need
- Validation updates as you edit
- Questions update in real-time

### 4. **Timing Configuration**
- **Combined Timing**: Single duration for all sections combined
- **Per-Section Timing**: Set different durations for each section
- Stored with test metadata

### 5. **Database Integration**
- Questions stored with section markers in `exam_source` field
- Section info stored in test description as JSON
- Uses existing `questions` table - no new schema needed!

## CSV Format Required

Your CSV file should have these columns:

```
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation,exam_source
```

### Example CSV:

```csv
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation,exam_source
What is the capital of India?,New Delhi,Mumbai,Bangalore,Chennai,A,New Delhi is the capital of India,2024
Who wrote Ramayan?,Valmiki,Vishnu,Brahma,Krishna,A,Valmiki wrote the Ramayana,2024
```

### Valid Values:
- **correct_answer**: Must be A, B, C, or D (case-insensitive)
- **explanation**: Optional
- **exam_source**: Optional (use for exam year or source)

## Implementation Details

### Server Actions (lib/actions/admin.ts)

#### 1. `createSectionWiseTest(testData)`
Creates test with section metadata

```typescript
await createSectionWiseTest({
  title: "HSSC CET 2024",
  difficulty: "medium",
  has_negative_marking: true,
  negative_marking_percent: 25,
  duration: 180, // for combined timing
  is_section_timed: false,
  sections: [
    { name: "English", duration: 60 },
    { name: "Mathematics", duration: 90 },
    { name: "General Awareness", duration: 30 }
  ]
})
```

#### 2. `uploadSectionCSV(testId, sectionName, csvData)`
Uploads questions for a specific section

```typescript
await uploadSectionCSV(
  testId,
  "English",
  questions // Array of Question objects
)
```

#### 3. `getSectionWiseTests()`
Fetches all section-wise tests

#### 4. `deleteSectionWiseTest(testId)`
Deletes entire test with all questions

### Modal Component Features

**File**: `components/admin/section-wise-csv-upload-modal.tsx`

Props:
- `open`: boolean - Dialog visibility
- `onOpenChange`: (open: boolean) => void
- `onTestCreated`: () => void - Callback after success

Usage:
```tsx
<SectionWiseCSVUploadModal
  open={showModal}
  onOpenChange={setShowModal}
  onTestCreated={() => {
    loadTests()
    setShowModal(false)
  }}
/>
```

## Database Schema

No migrations needed! Uses existing columns:

**tests table:**
- `title`, `description`, `difficulty`, `duration`
- `has_negative_marking`, `negative_marking_percent`
- Section info stored in `description` as JSON

**questions table:**
- All standard fields: `question_text`, `option_a/b/c/d`, `correct_answer`
- `exam_source` field contains `"SectionName|original_source"`
- Questions auto-grouped by `exam_source` prefix

## Validation Rules

Questions are validated for:

1. ✓ Question text not empty
2. ✓ All options (A, B, C, D) not empty
3. ✓ Correct answer is A/B/C/D
4. ✓ Clear error messages for each issue

Errors are shown:
- In red during preview step
- Per-question inline
- Section error count in tabs
- Cannot create test if any errors exist

## Admin Page Integration

The "Add Section-wise Test" button is already integrated in `/app/admin/tests/page.tsx`

New tab: **"Section-wise"** shows:
- Test name
- Number of sections
- Difficulty
- Question count
- Timing type (Combined/Per-Section)
- View & Delete actions

## CSV Upload Step-by-Step

1. **Prepare CSV file** with correct format
2. **Click "Add Section-wise Test"** button
3. **Step 1**: Enter test title, difficulty, negative marking
4. **Step 2**: Define section count and names
5. **Step 3**: Upload CSV for each section (one at a time)
6. **Step 4**: Review all questions - edit/delete as needed
7. **Step 5**: Create test!

## Error Handling

Common errors and solutions:

| Error | Solution |
|-------|----------|
| "Question text required" | Ensure CSV row has question in first column |
| "Answer must be A/B/C/D" | Change correct_answer column to only A, B, C, or D |
| "Option A required" | All option columns must have content |
| "Upload CSV for all sections" | Click each section tab and upload |

## Performance Notes

- Papa Parse handles CSV parsing client-side (fast)
- No server load until final creation
- Validation happens in real-time
- Questions edited in-memory before upload
- Bulk insert for all questions at once

## Features You Can Add Later

1. **Bulk Edit**: Edit multiple questions at once
2. **Question Duplication**: Copy questions from other tests
3. **CSV Template Generator**: Auto-generate blank CSV
4. **Import from URL**: Load CSV from external link
5. **Question Bank**: Save questions for reuse across tests

## Testing CSV Upload

### Test CSV:
```csv
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation
What is 2+2?,3,4,5,6,B,2+2 equals 4
What is the color of sky?,Green,Blue,Red,Yellow,B,Sky is blue during day
```

Save as `test.csv` and upload!

## Notes

- All questions get section marker in `exam_source` for tracking
- Section info preserved in test description
- Uses native Supabase - no ORM required
- Fully typed with TypeScript
- Accessible UI with proper ARIA labels
