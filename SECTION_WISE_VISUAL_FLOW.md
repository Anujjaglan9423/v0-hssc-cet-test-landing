# Section-wise CSV Upload - Visual Flow & Examples

## User Interface Flow

```
┌─────────────────────────────────────────────────────┐
│  Admin Dashboard > Tests                            │
│                                                     │
│  [Create Mock] [Upload CSV] [Add Section-wise Test] │ ← New Button
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ All Tests │ Full Exams │ Subject │ Topic │... │   │ Section-wise Tab
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
         ↓ (Click "Add Section-wise Test")
         
┌──────────────────────────────────────────────────────┐
│  Create Section-wise Test (Modal)                    │
│                                                      │
│  Step 1/5: Basic Information                         │
│  ─────────────────────────────────────────────────   │
│  Test Title *              [HSSC CET 2024______]     │
│  Description               [Optional text____]      │
│  Difficulty                [Medium ▼]              │
│  ☐ Negative Marking  %[25]                          │
│                                                      │
│  [Cancel] ─────────────────────────────── [Next →] │
└──────────────────────────────────────────────────────┘
         ↓
┌──────────────────────────────────────────────────────┐
│  Step 2/5: Define Sections                           │
│  ─────────────────────────────────────────────────   │
│  Number of Sections *      [2________]              │
│                                                      │
│  Section 1: [English___________]                    │
│  Section 2: [Mathematics_______]                    │
│                                                      │
│  ◉ Combined timing for all sections                  │
│    Total Duration: [180 minutes]                     │
│                                                      │
│  ◯ Separate timing per section                       │
│                                                      │
│  [← Back] ───────────────────────────── [Next →]   │
└──────────────────────────────────────────────────────┘
         ↓
┌──────────────────────────────────────────────────────┐
│  Step 3/5: Upload CSV Files                          │
│  ─────────────────────────────────────────────────   │
│  [English □] [Mathematics □]  ← Section Tabs        │
│                                                      │
│  Upload CSV for: English                             │
│  ┌─────────────────────────────────────────────┐   │
│  │                                             │   │
│  │   📄 Drop CSV here or click to browse       │   │
│  │                                             │   │
│  └─────────────────────────────────────────────┘   │
│                                                      │
│  Preview: 25 questions loaded ✓                     │
│                                                      │
│  [← Back] ───────────────────────────── [Next →]   │
└──────────────────────────────────────────────────────┘
         ↓
┌──────────────────────────────────────────────────────┐
│  Step 4/5: Preview & Edit Questions                  │
│  ─────────────────────────────────────────────────   │
│  Total: 50 Questions                                 │
│                                                      │
│  [English 25 ✓] [Mathematics ⚠️ 3 err]              │
│                                                      │
│  ┌─────────────────────────────────────────────┐   │
│  │  Question 1 / 25                            │   │
│  ├─────────────────────────────────────────────┤   │
│  │  ⚠️ Answer must be A/B/C/D (got: "E")       │   │
│  │                                             │   │
│  │  Question: [What is capital of India?]     │   │
│  │  Option A:  [New Delhi]                    │   │
│  │  Option B:  [Mumbai]                       │   │
│  │  Option C:  [Bangalore]                    │   │
│  │  Option D:  [Chennai]                      │   │
│  │  Answer:   [A ▼] (dropdown)                 │   │
│  │  Explain:  [Capital of India...]           │   │
│  │                                             │   │
│  │  [< Prev] [Next >] [🗑️ Delete]             │   │
│  └─────────────────────────────────────────────┘   │
│                                                      │
│  [← Back] ─────────────ⓘ All errors fixed────── [Create] │
└──────────────────────────────────────────────────────┘
         ↓
┌──────────────────────────────────────────────────────┐
│  Step 5/5: Success!                                  │
│  ─────────────────────────────────────────────────   │
│              ✓ Test Created Successfully!             │
│                                                      │
│           ID: 550e8400-e29b-41d4-a716-446655440000  │
│                                                      │
│                    [Close]                          │
└──────────────────────────────────────────────────────┘
         ↓ Auto-closes, reloads tests
         
┌──────────────────────────────────────────────────────┐
│  Section-wise Tests Table                            │
│  ─────────────────────────────────────────────────   │
│  Name │ Sections │ Difficulty │ Questions │ Timing  │
│  HSSC │    2     │   Medium   │    50     │ Comb.  │
│  CET  │    3     │   Hard     │   100     │ Per-S. │
│  ...                                                 │
└──────────────────────────────────────────────────────┘
```

## CSV Upload & Validation Process

```
CSV File Upload
      ↓
┌──────────────────┐
│  Parse CSV       │ (Papa Parse)
│  with Headers    │
└──────────────────┘
      ↓
┌──────────────────────────────────────────┐
│  Extract Data into Question Objects      │
│  {                                       │
│    question_text: "What is...?",        │
│    option_a: "...",                     │
│    option_b: "...",                     │
│    option_c: "...",                     │
│    option_d: "...",                     │
│    correct_answer: "A",                 │
│    explanation: "Because..."            │
│  }                                       │
└──────────────────────────────────────────┘
      ↓
┌──────────────────────────────────────────┐
│  Validate Each Question                  │
│  ✓ question_text not empty              │
│  ✓ option_a/b/c/d not empty             │
│  ✓ correct_answer ∈ [A,B,C,D]           │
│  ✓ Show error if any validation fails   │
└──────────────────────────────────────────┘
      ↓
┌──────────────────────────────────────────┐
│  Display in Preview Step                 │
│  ✓ Green badge if no errors              │
│  ⚠️  Red badge with error count if errors │
│  User can edit/delete questions          │
└──────────────────────────────────────────┘
      ↓
┌──────────────────────────────────────────┐
│  User Reviews & Edits                    │
│  - Edit question text, options, answer   │
│  - Delete wrong questions                │
│  - Add explanations                      │
│  - Navigate through all questions        │
└──────────────────────────────────────────┘
      ↓
┌──────────────────────────────────────────┐
│  User Clicks "Create Test"               │
│  ✓ All errors must be fixed              │
│  ✓ Cannot proceed if any question has    │
│    validation error                      │
└──────────────────────────────────────────┘
      ↓
┌──────────────────────────────────────────┐
│  Server Side: Save to Database           │
│  1. Create test record                   │
│  2. Store section info in description    │
│  3. Insert all questions in bulk         │
│  4. Update question counts               │
│  5. Return success                       │
└──────────────────────────────────────────┘
      ↓
┌──────────────────────────────────────────┐
│  Test Available in Admin Dashboard       │
│  - View in "Section-wise" tab            │
│  - Can edit/delete                       │
│  - Questions organized by section        │
└──────────────────────────────────────────┘
```

## Example Data Storage

### CSV Input (English Section)
```csv
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation
"What is a noun?","Verb","Person/Thing","Adjective","Adverb","B","A noun is a person, place, or thing"
"Choose correct spelling","Recieve","Receive","Reciive","Recive","B","Correct spelling is Receive"
"Antonym of beautiful","Ugly","Pretty","Handsome","Nice","A","Ugly is the opposite of beautiful"
```

### Stored in Database

**tests table:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "HSSC CET 2024",
  "description": "Full mock test\n[SECTION_WISE:{\"is_section_wise\":true,\"is_section_timed\":false,\"sections\":[{\"name\":\"English\",\"duration\":0},{\"name\":\"Mathematics\",\"duration\":0}]}]",
  "test_type": "full",
  "difficulty": "medium",
  "duration": 180,
  "total_questions": 50,
  "has_negative_marking": true,
  "negative_marking_percent": 25
}
```

**questions table (sample rows):**
```json
{
  "test_id": "550e8400-e29b-41d4-a716-446655440000",
  "question_order": 1,
  "question_text": "What is a noun?",
  "option_a": "Verb",
  "option_b": "Person/Thing",
  "option_c": "Adjective",
  "option_d": "Adverb",
  "correct_answer": "b",
  "explanation": "A noun is a person, place, or thing",
  "exam_source": "English"  ← Section marker!
}
{
  "test_id": "550e8400-e29b-41d4-a716-446655440000",
  "question_order": 26,
  "question_text": "What is 2+2?",
  "option_a": "3",
  "option_b": "4",
  "option_c": "5",
  "option_d": "6",
  "correct_answer": "b",
  "explanation": "2+2 equals 4",
  "exam_source": "Mathematics"  ← Section marker!
}
```

## Error Messages Examples

### CSV Parsing Errors
```
❌ Question text required
   → Row missing or empty first column

❌ Option A required  
   → Row missing option_a column

❌ Answer must be A/B/C/D (got: "E")
   → correct_answer value invalid

❌ All options must have content
   → One or more option column is empty
```

### Workflow Errors
```
❌ Please enter test title
   → Step 1: title field empty

❌ Please name all sections
   → Step 2: section name field empty

❌ Please upload CSV for all sections
   → Step 3: missing CSV for some sections

❌ Fix all errors before creating
   → Step 4: questions with validation errors exist
```

## State Management Flow

```
┌─────────────────┐
│   User Opens    │
│     Modal       │
└────────┬────────┘
         ↓
┌──────────────────────────────────┐
│ useState Management              │
│ - step (basic/sections/...)      │
│ - title, description, difficulty │
│ - sections array                 │
│ - uploadedQuestions object       │
│ - editingQuestion (index)        │
└──────────────────────────────────┘
         ↓
┌──────────────────────────────────┐
│ Step 1: Collect Basic Info       │
│ onChange handlers update state   │
└──────────────────────────────────┘
         ↓
┌──────────────────────────────────┐
│ Step 2: Define Sections          │
│ numSections change creates array │
│ Section name updates stored      │
└──────────────────────────────────┘
         ↓
┌──────────────────────────────────┐
│ Step 3: Upload CSVs              │
│ Papa Parse reads file            │
│ Validation runs on parsed data   │
│ Questions stored in state        │
└──────────────────────────────────┘
         ↓
┌──────────────────────────────────┐
│ Step 4: Preview & Edit           │
│ editingQuestion tracks position  │
│ updateQuestion modifies array    │
│ deleteQuestion removes item      │
│ Can navigate with Previous/Next  │
└──────────────────────────────────┘
         ↓
┌──────────────────────────────────┐
│ Create Test                      │
│ Call createSectionWiseTest()     │
│ Loop: uploadSectionCSV() per sec │
│ Update UI: show success/error    │
└──────────────────────────────────┘
```

## Component Prop Flow

```
AdminTestsPage
    │
    ├─ showSectionWiseModal (state)
    │
    └─ <SectionWiseCSVUploadModal>
        ├─ open (boolean)
        ├─ onOpenChange (function)
        ├─ onTestCreated (callback)
        │
        └─ Internal State:
            ├─ step (current UI)
            ├─ title, description, difficulty
            ├─ sections (array)
            ├─ uploadedQuestions (object)
            ├─ editingQuestion (position)
            └─ createdTestId (result)
```

## Interaction Patterns

### Drag & Drop Upload
```
User drags file
      ↓
onDragOver → setIsDragging(true)
      ↓
onDrop → extract files[0]
      ↓
handleCSVUpload → Papa.parse()
      ↓
Questions loaded into state
      ↓
UI updates with preview
```

### Question Navigation
```
Click "Previous"  ← [< Prev] [Next >] → Click "Next"
      ↓                                      ↓
questionIndex--                         questionIndex++
      ↓                                      ↓
Re-render with                          Re-render with
new question                            new question
```

### In-Line Editing
```
User types in input
      ↓
onChange fires
      ↓
updateQuestion(sectionIdx, qIdx, {field: value})
      ↓
Validate question
      ↓
Update error state
      ↓
Re-render with new value & validation
```

---

This visual flow helps understand:
1. Complete user journey from start to finish
2. Data transformation at each stage
3. Validation and error handling
4. State management patterns
5. Database storage structure
