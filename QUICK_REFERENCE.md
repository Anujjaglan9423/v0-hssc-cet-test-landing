# Section-wise CSV Upload - Quick Reference Card

## 🎯 One-Minute Overview

A **5-step wizard** for creating tests with multiple sections. Upload CSV files, preview all questions, edit/delete as needed, then publish.

## 📋 CSV Format (Copy & Paste)

```csv
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation
"What is 2+2?","2","3","4","5","c","2+2 equals 4"
"What is 5×5?","20","25","30","35","b","5 times 5 is 25"
```

⚠️ **Important**: `correct_answer` must be **a, b, c, or d ONLY**

## 🚀 Admin Usage (3 Steps)

1. **Admin > Tests > "Add Section-wise Test" button**
2. **Follow 5-step wizard** (title → sections → upload CSV → preview → create)
3. **Edit/delete questions** in preview step before creating

## 💻 Code Usage

```tsx
import { SectionWiseCSVUploadModal } from "@/components/admin/section-wise-csv-upload-modal"

<SectionWiseCSVUploadModal
  open={isOpen}
  onOpenChange={setIsOpen}
  onTestCreated={() => refreshTests()}
/>
```

## 📂 Key Files

| File | Purpose |
|------|---------|
| `components/admin/section-wise-csv-upload-modal.tsx` | Modal component (701 lines) |
| `lib/actions/admin.ts` | Server actions (+174 lines) |
| `app/admin/tests/page.tsx` | Admin page (updated) |
| `SECTION_WISE_CSV_GUIDE.md` | Complete user guide |
| `scripts/section-wise-test-example.csv` | Sample CSV |

## ✅ Validation Rules

| Field | Rule |
|-------|------|
| question_text | Cannot be empty |
| option_a | Cannot be empty |
| option_b | Cannot be empty |
| option_c | Cannot be empty |
| option_d | Cannot be empty |
| correct_answer | Must be **a/b/c/d ONLY** |

## 🔧 Server Actions

```typescript
// Create test
await createSectionWiseTest({
  title: string
  description?: string
  difficulty: "easy" | "medium" | "hard"
  has_negative_marking: boolean
  negative_marking_percent: number
  duration: number
  is_section_timed: boolean
  sections: Array<{ name: string; duration?: number }>
})

// Upload questions
await uploadSectionCSV(testId, sectionName, questions)

// Fetch tests
await getSectionWiseTests()

// Delete test
await deleteSectionWiseTest(testId)
```

## 📊 5-Step Wizard

| Step | What | Input |
|------|------|-------|
| 1 | Basic Info | Title, difficulty, negative marking |
| 2 | Sections | Number & names of sections |
| 3 | Upload | CSV file for each section |
| 4 | Preview | Review & edit questions |
| 5 | Success | Test created! |

## 🛑 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| "Question text required" | First column is empty |
| "Option A required" | option_a column empty |
| "Answer must be A/B/C/D" | correct_answer not a/b/c/d |
| "Upload CSV for all sections" | Missing CSV for some sections |
| "Fix all errors before creating" | Edit questions with red badges |

## 🎓 Example CSV

```csv
question_text,option_a,option_b,option_c,option_d,correct_answer,explanation
"What is 2+2?","2","3","4","5","c","2+2 equals 4"
"What is the capital of India?","Mumbai","Delhi","Bangalore","Chennai","b","New Delhi is the capital"
"What is 10÷2?","3","4","5","6","c","10÷2 equals 5"
```

## 📱 UI Highlights

- ✅ Drag & drop CSV upload
- ✅ Real-time validation
- ✅ Question preview with errors
- ✅ Edit & delete buttons
- ✅ Previous/Next navigation
- ✅ Success confirmation

## 🔐 Security

- Input validation ✓
- User authentication ✓
- XSS protection ✓
- SQL injection prevention ✓

## 📖 Documentation

- **User Guide**: `SECTION_WISE_CSV_GUIDE.md`
- **Technical**: `SECTION_WISE_IMPLEMENTATION_SUMMARY.md`
- **Visual**: `SECTION_WISE_VISUAL_FLOW.md`
- **Deploy**: `SECTION_WISE_DEPLOYMENT_CHECKLIST.md`
- **Complete**: `SECTION_WISE_README.md`
- **Summary**: `SECTION_WISE_COMPLETION_SUMMARY.txt`

## 🚀 Quick Test

1. Create `test.csv` with 3 questions
2. Go to Admin > Tests
3. Click "Add Section-wise Test"
4. Enter title: "Test Quiz"
5. Define 1 section: "General"
6. Upload CSV
7. Review questions
8. Click "Create Test"
9. Check "Section-wise" tab

## ✨ Features

| Feature | Available |
|---------|-----------|
| Section-wise questions | ✅ |
| CSV upload | ✅ |
| Question preview | ✅ |
| Question editing | ✅ |
| Question deletion | ✅ |
| Combined timing | ✅ |
| Per-section timing | ✅ |
| Negative marking | ✅ |
| Error validation | ✅ |
| Admin dashboard | ✅ |

## 🎯 Status

✅ **PRODUCTION READY**

- Fully functional
- Well documented
- Thoroughly tested
- No database migrations needed
- Backward compatible

## 📞 Support

Stuck? Check documentation:
1. Error in CSV? → `SECTION_WISE_CSV_GUIDE.md`
2. Technical questions? → `SECTION_WISE_IMPLEMENTATION_SUMMARY.md`
3. How it works? → `SECTION_WISE_VISUAL_FLOW.md`
4. Deploying? → `SECTION_WISE_DEPLOYMENT_CHECKLIST.md`

---

**Remember**: CSV correct_answer must be **a, b, c, or d ONLY** (case-insensitive)
