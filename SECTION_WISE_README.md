# Section-wise Test Creation Feature

## 🎯 What's New

A complete, **independent** feature for creating tests with **section-wise organization**. This is separate from the existing CSV upload feature and provides a more structured workflow for exams with multiple sections.

## ✅ What Was Built

### 1. **Database Schema** (`scripts/add_sections_support.sql`)
- New `sections` table for section management
- New `test_sections` table for section-test mapping with timing
- Extended `tests` table with section-wise fields
- Extended `questions` table with section reference
- Full RLS (Row Level Security) policies

### 2. **Multi-Step Modal** (`components/admin/section-wise-csv-upload-modal.tsx`)
A beautiful 5-step wizard that guides admins through:
- **Step 1**: Basic test info (title, category, difficulty, negative marking)
- **Step 2**: Define sections (how many, what names)
- **Step 3**: Upload CSV for each section (drag & drop)
- **Step 4**: Configure timing (combined or per-section)
- **Step 5**: Review and create

### 3. **Server Actions** (`lib/actions/admin.ts`)
Five new functions:
- `createSectionWiseTest()` - Create test with sections
- `uploadSectionCSV()` - Upload questions for a section
- `getSectionWiseTests()` - Fetch all section-wise tests
- `getSectionWiseTestWithQuestions()` - Fetch test with full data
- `deleteSectionWiseTest()` - Delete test and related data

### 4. **Admin Interface Updates** (`app/admin/tests/page.tsx`)
- New **"Add Section-wise Test"** button
- New **"Section-wise"** tab in tests management
- Dedicated table showing all section-wise tests
- View, delete operations

## 🚀 Quick Start

### 1. Run Database Migration
```bash
# Execute scripts/add_sections_support.sql in your database
```

### 2. Create a Section-wise Test
1. Go to **Admin → Tests**
2. Click **"Add Section-wise Test"** button
3. Follow the 5-step wizard
4. Test appears in "Section-wise" tab

## 📋 Key Features

### ✨ Complete Workflow
- Define test metadata (title, category, difficulty)
- Specify number of sections with custom names
- Upload CSV questions section-by-section
- Choose timing: combined or per-section
- Automatic review and confirmation

### 🎓 Section Organization
- Questions stored with section reference
- Sections have individual names and ordering
- Support for per-section timing limits
- Or combined time for all sections

### 📊 Admin Dashboard
- Separate "Section-wise" tab
- View test details including section count
- See all section-wise tests at a glance
- Quick delete functionality

### 📁 CSV Format
```csv
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation,exam_source
"What is 2+2?","2","3","4","5","c","2+2 equals 4","Math 101"
```

## 📂 Files Created/Modified

### New Files:
```
scripts/add_sections_support.sql
scripts/section-wise-test-csv-template.csv
components/admin/section-wise-csv-upload-modal.tsx (811 lines)
```

### Modified Files:
```
lib/actions/admin.ts (added 5 functions, ~370 lines)
app/admin/tests/page.tsx (added tab, button, table)
```

### Documentation Files:
```
SECTION_WISE_IMPLEMENTATION.md (detailed technical docs)
SECTION_WISE_SETUP_GUIDE.md (step-by-step setup guide)
SECTION_WISE_README.md (this file)
```

## 🔄 Data Flow

```
Admin Interface
    ↓
SectionWiseCSVUploadModal (5-step wizard)
    ↓
createSectionWiseTest() → creates test + sections
    ↓
uploadSectionCSV() → uploads questions per section
    ↓
Database (Tests → Sections → Questions)
    ↓
Admin Dashboard (Section-wise tab shows all)
```

## 🎯 Usage Example

### Creating a HSSC Exam with 3 Sections:

1. **Step 1 - Basic Info:**
   - Title: "HSSC CET 2024 Mock Test"
   - Category: HSSC
   - Exam: CET
   - Difficulty: Medium
   - Negative Marking: 25%

2. **Step 2 - Sections:**
   - Section 1: English
   - Section 2: Hindi
   - Section 3: General Knowledge

3. **Step 3 - Upload CSVs:**
   - Upload English questions CSV (40 questions)
   - Upload Hindi questions CSV (40 questions)
   - Upload GK questions CSV (40 questions)

4. **Step 4 - Timing:**
   - Choose: Separate time per section
   - English: 45 minutes
   - Hindi: 45 minutes
   - GK: 30 minutes

5. **Step 5 - Review & Create:**
   - Confirm all details
   - Click "Create Test"
   - Done! Test now appears in "Section-wise" tab

## 🔐 Security

- Row-Level Security (RLS) policies in place
- Admin-only creation and deletion
- Section data protected by RLS
- Questions accessible based on test settings

## 📝 Important Notes

### This Feature is Independent
- Doesn't modify existing CSV upload modal
- Doesn't affect existing tests
- Can coexist with all current features

### Database Required
- Must run migration script first
- Creates new tables and columns
- Adds RLS policies

### CSV Format Matters
- Comma-separated values
- Wrap text with quotes if contains commas
- Correct answer: a, b, c, or d only
- Explanation and source are optional

## 🎓 Student Side (Not Yet Implemented)

The following would need implementation for the test-taking experience:

- Display questions grouped by section
- Show section headers and navigation
- Section-wise timing display
- Section progress indicators
- Per-section scoring in results

These are planned for the next phase.

## 📚 Documentation

Three comprehensive documents included:

1. **SECTION_WISE_IMPLEMENTATION.md** - Technical implementation details
2. **SECTION_WISE_SETUP_GUIDE.md** - Complete setup and usage guide
3. **SECTION_WISE_README.md** - This file

Plus:
- `scripts/section-wise-test-csv-template.csv` - CSV template for admins

## ✅ What Works Now

✅ Create section-wise tests in admin  
✅ Upload CSV for each section  
✅ Configure combined or per-section timing  
✅ View all section-wise tests in dashboard  
✅ Delete section-wise tests  
✅ Negative marking support  
✅ Full RLS security policies  

## ⏳ What's Next

The following features would be built in phase 2:

⏳ Student test page updates to display sections  
⏳ Section navigation in test interface  
⏳ Section-wise timing display  
⏳ Per-section scoring  
⏳ Section progress tracking  

## 🆘 Support

- Read the documentation files for detailed guides
- Check the modal component for UI implementation
- Review admin.ts for server actions
- Check migration script for database structure

All code is well-commented and follows the existing project patterns.

---

**Status:** ✅ Complete and Ready to Use

**Admin Feature:** Fully Functional  
**Student Feature:** Requires Implementation (Phase 2)  

**Questions?** Refer to the comprehensive documentation files included in the project.
