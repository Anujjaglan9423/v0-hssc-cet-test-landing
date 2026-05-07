# Multi-Exam Mock Test Creation Feature

## Overview
The admin test creation system has been enhanced to support creating mock tests across multiple exam categories (Haryana, Uttrakhand, SSC, Railway) with customizable subject distribution.

## Features

### 1. **Step 1: Exam Type Selection**
- Users can select from any available exam type in the system
- The modal displays all exams with their subject count
- Selected exam is highlighted for visual confirmation

### 2. **Step 2: Subject Distribution Configuration**
- After selecting an exam, users configure question distribution across subjects
- Default distribution divides 100% equally among all subjects
- Visual sliders allow percentage adjustment per subject
- Real-time calculation shows:
  - Percentage per subject
  - Number of questions per subject
  - Total percentage (must equal 100%)
- Progress indicator validates distribution before proceeding

### 3. **Step 3: Test Configuration**
- **Test Title**: Custom name for the mock test
- **Total Questions**: Number of questions to include (5-500)
- **Duration**: Time limit in minutes (5-600)
- **Negative Marking**: Optional toggle with customizable deduction percentage (1-100%)

## Backend Functions

### `getExamsWithSubjects()`
- **Purpose**: Fetch all exams with their associated subjects
- **Returns**: Array of exam objects with nested subject data
- **Used In**: Modal initialization on load

```typescript
interface Exam {
  id: string
  name: string
  subjects?: { id: string; name: string }[]
}
```

### `createExamBasedMockTest(testData)`
- **Purpose**: Create a full mock test with subject-wise question distribution
- **Parameters**:
  - `title`: Test name
  - `exam_id`: Selected exam ID
  - `percentages`: Subject-to-percentage mapping
  - `total_questions`: Total questions to include
  - `duration`: Exam duration in minutes
  - `has_negative_marking`: Boolean flag
  - `negative_marking_percent`: Deduction percentage

- **Process**:
  1. Fetches all questions from tests belonging to the selected exam
  2. Groups questions by subject
  3. Calculates target question count per subject using percentages
  4. Randomly selects questions from each subject
  5. Creates test record with all metadata
  6. Inserts selected questions into test

- **Returns**: Success/error object with question count

## Database Impact

### Tables Used
- `exams`: Source exam data
- `subjects`: Subject information
- `tests`: New mock test records
- `questions`: Questions for the new test

### Data Flow
```
Exams → Subjects (via exam_id)
    ↓
Tests (grouped by exam_id)
    ↓
Questions (from selected tests, filtered by validity)
    ↓
New Test Creation with selected questions
```

## Validation

### Front-end Validations
- ✅ Exam selection required
- ✅ Subject distribution must equal 100%
- ✅ Test title required
- ✅ Total questions must be > 0
- ✅ Percentage changes trigger recalculation

### Back-end Validations
- ✅ Questions must have valid correct_answer (a/b/c/d)
- ✅ Sufficient questions available for distribution
- ✅ User authentication required
- ✅ Exam must exist before test creation

## Error Handling

- Clear error messages for missing/invalid data
- Toast notifications for user feedback
- Automatic rollback if question insertion fails
- Descriptive error messages in console logs

## UI/UX Features

- **Multi-step wizard**: Guides users through process
- **Navigation**: Back/Next buttons with validation
- **Visual feedback**: 
  - Step indicator (1/2/3)
  - Percentage validation color coding
  - Selected exam highlighting
- **Real-time updates**: Subject percentages calculate instantly
- **Disabled states**: Buttons disabled until requirements met

## Usage Example

1. Click "Create Mock Test" button in Tests Management
2. Select exam type (e.g., "Haryana Exams")
3. Adjust subject percentages as needed
4. Click "Next"
5. Enter test details:
   - Title: "Haryana CET Full Practice Test"
   - Total Questions: 100
   - Duration: 120 minutes
   - Negative Marking: Yes (25%)
6. Click "Create Mock Test"
7. Test is created with randomly selected questions

## Files Modified

- `/components/admin/custom-mock-test-modal.tsx`: Enhanced multi-step modal
- `/lib/actions/admin.ts`: Added `getExamsWithSubjects()` and `createExamBasedMockTest()` functions

## Testing Checklist

- [ ] Modal opens on "Create Mock Test" click
- [ ] Exams load and display correctly
- [ ] Subject percentages update in real-time
- [ ] Percentage validation works (prevents > 100%)
- [ ] Test creation succeeds with valid data
- [ ] Test appears in tests list after creation
- [ ] Questions are randomly distributed by subject
- [ ] Error messages display for invalid inputs
- [ ] Modal resets after successful creation
