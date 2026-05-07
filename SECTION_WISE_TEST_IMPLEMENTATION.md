# Section-wise Test Upload Feature - Implementation Summary

## Overview
A complete separate feature for creating tests with section-wise question organization, allowing different timing per section and CSV uploads for each section independently.

## What Was Implemented

### 1. Database Schema (`scripts/add_sections_support.sql`)
- **sections** table: Stores section information with test reference
- **test_sections** table: Junction table linking tests to sections with timing info
- Added `section_id` column to questions table
- Added `is_section_wise`, `is_section_timed`, `combined_duration` columns to tests table
- Row-level security policies for data access control

### 2. Server Actions (`lib/actions/admin.ts`)
Four new server actions added:

#### `createSectionWiseTest(testData)`
- Creates a new section-wise test with basic metadata
- Initializes sections with naming and ordering
- Returns test and sections data

#### `uploadSectionCSV(testId, sectionId, csvData)`
- Uploads questions for a specific section
- Parses CSV data and associates with section_id
- Updates question counts in test_sections table
- Updates total questions in test

#### `getSectionWiseTests()`
- Fetches all section-wise tests
- Includes section count and question count aggregation
- Ordered by creation date

#### `getSectionWiseTestWithQuestions(testId)`
- Fetches test with full section hierarchy
- Includes all questions organized by section
- Used for displaying test details

### 3. UI Components

#### SectionWiseCSVUploadModal (`components/admin/section-wise-csv-upload-modal.tsx`)
A complete multi-step modal with 5 steps:

1. **Basic Info Step**: 
   - Test title, description
   - Exam category, exam name, test category
   - Difficulty level
   - Negative marking configuration

2. **Sections Definition Step**:
   - Input number of sections
   - Define section names
   - Display section status

3. **CSV Upload Step**:
   - Drag-and-drop CSV upload
   - Per-section file upload
   - Section navigation (previous/next)

4. **Timing Configuration Step**:
   - Choice: Combined time for all sections OR separate time per section
   - Input duration accordingly
   - Time validation

5. **Success Step**:
   - Confirmation with test details
   - Section count display
   - Auto-close and refresh

### 4. Admin Tests Page Updates (`app/admin/tests/page.tsx`)
- **New Button**: "Add Section-wise Test" button in action bar
- **New Tab**: "Section-wise" tab in test management
- **New Table**: Dedicated table for section-wise tests showing:
  - Test name
  - Number of sections
  - Difficulty level
  - Total questions
  - Timing type (Combined/Per Section)
  - Actions (View, Delete)
- **Delete Integration**: Extended delete functionality to handle section-wise tests

## Key Features

### Multi-Step Workflow
1. Define test metadata (title, category, difficulty, negative marking)
2. Specify number of sections and name each section
3. Upload CSV files for each section sequentially
4. Configure timing (combined or per-section)
5. Review and create

### Section-wise Organization
- Questions are stored with section_id reference
- Sections have separate duration configurations
- Test can use combined time or per-section timing
- Questions grouped by section in test display

### CSV Format
Expected CSV columns:
```
question_text, option_a, option_b, option_c, option_d, correct_answer, explanation, exam_source
```

Example:
```
"What is 2+2?","2","4","6","8","b","The sum of 2+2 is 4","Math Test 2024"
```

### Data Relationships
```
Tests (is_section_wise=true)
  ├── Sections (test_id FK)
  │   ├── TestSections (section_id, test_id FKs)
  │   └── Questions (section_id FK)
  └── Questions (section_id FK)
```

## Files Created/Modified

### Created:
1. `/scripts/add_sections_support.sql` - Database schema
2. `/components/admin/section-wise-csv-upload-modal.tsx` - Modal component (811 lines)

### Modified:
1. `/lib/actions/admin.ts` - Added 5 new server functions
2. `/app/admin/tests/page.tsx` - Added section-wise tab, button, and functionality

## Usage Flow for Admin

1. Go to Admin → Tests page
2. Click "Add Section-wise Test" button
3. Follow the 5-step modal:
   - Enter test basic info
   - Define number of sections and their names
   - Upload CSV for each section (with drag-drop)
   - Choose timing configuration
   - Review and create
4. Test appears in "Section-wise" tab
5. Can view, delete, or edit later

## Database Migration
Before using this feature, run the migration script:
```sql
-- Execute scripts/add_sections_support.sql in your database
```

This adds:
- sections table
- test_sections table
- New columns to tests and questions tables
- RLS policies for security

## Features Not Yet Implemented (For Student Side)
- Student test page needs update to display questions section-wise
- Section-wise timing display in test page
- Section navigation in test page
- Per-section scoring if applicable

These would be the next phase of implementation for the student-facing test taking experience.

## Notes
- Section-wise tests are independent from regular CSV uploads
- Both flows can coexist in the same system
- Negative marking fully supported for section-wise tests
- RLS policies ensure data security and proper access control
