# Section-wise Test Feature - Setup Guide

## Step 1: Run Database Migration

Execute the migration script in your Supabase or PostgreSQL database:

```bash
# Copy the SQL from scripts/add_sections_support.sql and run it in your database admin panel
```

Or if you have direct SQL access:

```sql
-- Execute the entire content of scripts/add_sections_support.sql
```

This will create:
- `sections` table
- `test_sections` table
- Add new columns to `tests` and `questions` tables
- Set up RLS policies

## Step 2: Feature is Ready to Use

Once the migration is complete, the feature is immediately available in the Admin panel:

1. Go to **Admin** → **Tests**
2. Click the **"Add Section-wise Test"** button (next to "Upload CSV")
3. Follow the 5-step wizard to create your test

## The Creation Flow

### Step 1: Basic Test Information
- **Test Title** (required): Name of the test
- **Description** (optional): Test description
- **Exam Category**: Select category
- **Exam Name**: Select exam
- **Test Category**: Select subject
- **Difficulty**: Easy / Medium / Hard
- **Negative Marking**: Enable/disable with percentage for wrong answers

### Step 2: Define Sections
- **Number of Sections**: How many sections in this exam?
  - Example: 2 sections
- **Section Names**: Name each section
  - Example: Section 1 → "English", Section 2 → "Hindi"

### Step 3: Upload CSV for Each Section
For each section, upload a CSV file with the questions:

**CSV Format:**
```
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation,exam_source
```

**Example:**
```
"Which of the following is a prime number?","2","4","6","8","a","2 is the only even prime number","Math Basics"
"What is the capital of India?","Delhi","Mumbai","Bangalore","Chennai","a","Delhi is the national capital","Geography"
```

**Important:**
- Use comma (,) as delimiter
- Wrap text in quotes if it contains commas
- correct_answer must be: a, b, c, or d
- Explanation and exam_source are optional

### Step 4: Configure Timing

Choose one of two options:

**Option A: Combined Time for All Sections**
- All sections share one total duration
- Example: 180 minutes for entire test
- Timer runs for the whole test

**Option B: Separate Time per Section**
- Each section has its own duration
- Example: English = 60 min, Hindi = 60 min, Math = 60 min
- Student can switch between sections
- Timer resets for each section (or shows per-section time)

### Step 5: Review and Create
- Review all settings
- Click "Create Test"
- Test appears in "Section-wise" tab

## Test Management

### View Section-wise Tests
1. Go to **Admin** → **Tests**
2. Click **"Section-wise"** tab
3. See all section-wise tests in a table with:
   - Test name
   - Number of sections
   - Difficulty level
   - Total questions
   - Timing type (Combined/Per Section)
   - Action buttons

### View Test Details
- Click **eye icon** → View all questions organized by section

### Delete Test
- Click **trash icon** → Confirm deletion
- Deletes test, all sections, and all questions

## CSV Upload Tips

### Valid CSV Examples:

**Simple Format:**
```
question_text,option_a,option_b,option_c,option_d,correct_answer
"What is 5+3?","8","9","10","7","a"
"What color is the sky?","Blue","Red","Green","Yellow","a"
```

**Full Format:**
```
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation,exam_source
"What is the chemical symbol for Gold?","Au","Ag","Cu","Pt","a","Gold's symbol is Au from Latin Aurum","Chemistry 101"
"Which planet is closest to the Sun?","Mercury","Venus","Earth","Mars","a","Mercury is the closest planet","Astronomy Basics"
```

### Common Mistakes to Avoid:

❌ **Wrong:** Commas inside text without quotes
```
"What is 2,000 + 3,000?","5","5,000","6,000","7,000","c"
```

✅ **Correct:** Wrap in quotes
```
"What is 2,000 + 3,000?","5","5,000","6,000","7,000","c"
```

❌ **Wrong:** Wrong answer values
```
question_text,option_a,option_b,option_c,option_d,correct_answer
"Sample?","a","b","c","d","e"  ← "e" is not valid
```

✅ **Correct:** Use only a, b, c, d
```
question_text,option_a,option_b,option_c,option_d,correct_answer
"Sample?","a","b","c","d","c"
```

## Data Structure

After creating a section-wise test, the data is organized as:

```
Test (is_section_wise = true)
├── Section 1: English
│   ├── Question 1
│   ├── Question 2
│   └── Question 3
├── Section 2: Hindi
│   ├── Question 1
│   ├── Question 2
│   └── Question 3
└── Test Settings
    ├── Difficulty: Medium
    ├── Negative Marking: 25%
    ├── Timing Type: Per-Section
    ├── Section 1 Duration: 60 min
    └── Section 2 Duration: 60 min
```

## Troubleshooting

### CSV Upload Fails
- Check file is actually a .csv file (not .txt or .xlsx)
- Verify CSV format matches template
- Ensure all 5 required columns: question_text, option_a, option_b, option_c, option_d, correct_answer

### Test Won't Create
- Make sure all section names are filled in
- Verify all required fields in basic info are complete
- Check at least one CSV is uploaded
- Verify timing configuration is complete

### Questions Don't Appear
- Ensure section_id values in database were created correctly
- Check RLS policies allow admin to view questions
- Verify test.is_section_wise = true

## Next Steps

After creating section-wise tests in admin, the following needs implementation on the student side:

1. **Test Taking Page Updates**:
   - Display questions grouped by section
   - Show section headers
   - Display section-specific timing if applicable

2. **Section Navigation**:
   - Allow students to switch between sections
   - Show which section is currently active
   - Display section progress

3. **Results Page**:
   - Show scores per section if needed
   - Display section-wise analysis

4. **Test Results**:
   - Store section-specific performance metrics
   - Calculate section-wise scores

These features would be implemented in a follow-up update.

## Support

For issues or questions, refer to:
- `SECTION_WISE_TEST_IMPLEMENTATION.md` - Technical details
- Database schema: `scripts/add_sections_support.sql`
- Modal component: `components/admin/section-wise-csv-upload-modal.tsx`
- Server actions: `lib/actions/admin.ts` (search for "SECTION-WISE TEST FUNCTIONS")
