# CSV Upload Checklist ✅

Use this checklist before uploading your CSV to ensure everything is correct.

---

## 📋 Column Structure

- [ ] **Exactly 5 columns** in this order:
  1. Question Text
  2. Options
  3. Exam Details
  4. Correct Answer
  5. Explanation

- [ ] Headers match exactly:
  ```
  Question Text,Options,Exam Details,Correct Answer,Explanation
  ```

---

## 🇮🇳🇬🇧 Bilingual Format

For each field with Hindi and English:

- [ ] Use `[HI]` marker for Hindi text
- [ ] Use `[EN]` marker for English text
- [ ] Format: `[HI] Hindi text [EN] English text`
- [ ] `[HI]` comes **first**, then `[EN]`
- [ ] **No extra spaces** in tags: `[HI]text` ❌, `[HI] text` ✅

### Examples to Copy
```
[HI] एक नाव शांत जल में 60 किमी जा सकती है। [EN] A boat travels 60 km in still water.
[HI] ₹14 [EN] ₹14
[HI] दूरी/समय = गति [EN] Distance/Time = Speed
```

---

## ❓ Question Text Column

- [ ] Bilingual format: `[HI] Hindi question [EN] English question`
- [ ] Contains the complete question statement
- [ ] All text enclosed in **double quotes**

**Example:**
```
"[HI] एक नाव शांत जल में 60 किमी जा सकती है। गति ज्ञात करें। [EN] A boat travels 60 km in still water. Find the speed."
```

---

## 🎯 Options Column

- [ ] Contains **all 4 options (a, b, c, d)** in ONE cell
- [ ] Format: `(a) [HI]...Hindi...[EN]...English...(b) [HI]...Hindi...[EN]...English...`
- [ ] Each option labeled with letter: **(a)**, **(b)**, **(c)**, **(d)**
- [ ] All enclosed in **double quotes**
- [ ] Each option has both Hindi AND English (if bilingual)

**Example:**
```
"(a) [HI] 9 किमी/घंटा [EN] 9 km/h (b) [HI] 10 किमी/घंटा [EN] 10 km/h (c) [HI] 12 किमी/घंटा [EN] 12 km/h (d) [HI] 15 किमी/घंटा [EN] 15 km/h"
```

**✅ Correct Breakdown:**
- (a) is option a
- (b) is option b
- (c) is option c
- (d) is option d

---

## 📅 Exam Details Column

- [ ] Contains exam name and/or date
- [ ] Format: `SSC CGL (Tier-I) 24/07/2023 (Shift-I)`
- [ ] **No language tags needed** (same for all students)
- [ ] Enclosed in **double quotes** if contains commas

**Examples:**
```
SSC CGL (Tier-I) 24/07/2023 (Shift-III)
"SSC CGL, Tier-I, 20/07/2023"
Railway NTPC
UPSC CSE
```

---

## ✔️ Correct Answer Column

- [ ] Contains **only the letter** in parentheses
- [ ] Format: `(a)` or `(b)` or `(c)` or `(d)`
- [ ] Lowercase letter OK: `(a)` ✅
- [ ] Uppercase OK too: `(A)` ✅

**Examples:**
```
(a)
(b)
(c)
(d)
```

---

## 📝 Explanation Column

- [ ] Bilingual format: `[HI] Hindi explanation [EN] English explanation`
- [ ] Can be as long as needed
- [ ] All enclosed in **double quotes**
- [ ] Both Hindi and English are recommended

**Example:**
```
"[HI] धारा के साथ गति = नाव की गति + धारा की गति। दूरी = 60 किमी, समय = 60/(b+s) घंटे। [EN] Downstream speed = boat speed + stream speed. Distance = 60 km, time = 60/(b+s) hours."
```

---

## ⚠️ Common Mistakes - Double Check

### Data Format
- [ ] **NOT** using `\n` or line breaks within cells (use cell breaks in Excel/Sheets)
- [ ] **NOT** having empty cells (fill with N/A or dummy value if needed)
- [ ] **NOT** using tabs or extra whitespace
- [ ] **Using** UTF-8 encoding for special characters

### Column Issues
- [ ] **NOT** using extra columns (exactly 5!)
- [ ] **NOT** missing columns
- [ ] Headers are exactly: `Question Text,Options,Exam Details,Correct Answer,Explanation`

### Bilingual Issues
- [ ] **NOT** using wrong tag order: `[EN]` before `[HI]` ❌
- [ ] **NOT** having spaces after tags: `[HI ]` ❌
- [ ] **NOT** mixing tags with content: `[HI text]` ❌
- [ ] **USING** proper format: `[HI] text [EN] text` ✅

### Options Issues
- [ ] **NOT** splitting options across multiple rows
- [ ] **NOT** missing option letters: (a), (b), (c), (d)
- [ ] All 4 options present in ONE cell

### Quote Issues
- [ ] **USING** double quotes `"` around fields with commas
- [ ] **NOT** using single quotes `'`
- [ ] **NOT** using fancy quotes `"` or `"`

---

## 🧪 Test Your CSV

### Quick Test (Before Upload)
1. [ ] Open CSV file in Excel or Google Sheets
2. [ ] Verify you see exactly 5 columns
3. [ ] Check that no data is cut off
4. [ ] Confirm all options are in one cell
5. [ ] Make sure `[HI]` and `[EN]` tags are visible

### Format Test
```
CSV View:
├─ Column 1: Question Text ✅
├─ Column 2: Options ✅
├─ Column 3: Exam Details ✅
├─ Column 4: Correct Answer ✅
└─ Column 5: Explanation ✅
```

### Sample Row Check
Use BILINGUAL_SAMPLE.csv as reference:
```
✅ Same 5 columns?
✅ Similar option format?
✅ Similar explanation format?
✅ Using [HI] and [EN] tags?
```

---

## 🚀 Ready to Upload?

### Final Verification
- [ ] CSV file is saved (Ctrl+S / Cmd+S)
- [ ] File format is .csv (not .xlsx or .xls)
- [ ] File is UTF-8 encoded
- [ ] All 5 columns present with data
- [ ] No hidden rows or columns
- [ ] Checked BILINGUAL_SAMPLE.csv format match

### Upload Steps
1. [ ] Go to Admin Dashboard
2. [ ] Navigate to Tests
3. [ ] Click "Upload CSV"
4. [ ] Select your CSV file
5. [ ] Click "Upload"
6. [ ] Wait for success message

---

## ✅ Success Indicators

After upload, you should see:
- [ ] Green success message
- [ ] Question count matches your CSV rows
- [ ] Questions appear in test with proper bilingual formatting
- [ ] "or" divider appears between Hindi and English
- [ ] Options display with proper separation

---

## ❌ If Upload Fails

**Error: "No valid questions found in CSV"**
- [ ] Check exactly 5 columns
- [ ] Verify headers match exactly
- [ ] Make sure each row has all 5 fields
- [ ] Compare with BILINGUAL_SAMPLE.csv

**Error: "Invalid format"**
- [ ] Check quotes around fields with commas
- [ ] Verify UTF-8 encoding
- [ ] Make sure no tabs or special characters
- [ ] Test with BILINGUAL_SAMPLE.csv first

**Error: "Option format incorrect"**
- [ ] All 4 options in one cell
- [ ] Use format: `(a) text (b) text (c) text (d) text`
- [ ] Verify option labels: (a), (b), (c), (d)
- [ ] Check BILINGUAL_SAMPLE.csv for exact format

---

## 📚 Helpful References

- **BILINGUAL_SAMPLE.csv** - Copy this file as template
- **QUICK_START.md** - Quick reference
- **BILINGUAL_FORMAT_GUIDE.md** - Detailed guide

---

## 🎓 Common Question Patterns

### Question 1: Simple Math
```
"[HI] 5 + 5 = ? [EN] What is 5 + 5?","(a) [HI] 8 [EN] 8 (b) [HI] 9 [EN] 9 (c) [HI] 10 [EN] 10 (d) [HI] 11 [EN] 11","Sample Test","(c)","[HI] 5 + 5 = 10 [EN] 5 + 5 = 10"
```

### Question 2: Reading Comprehension
```
"[HI] निम्नलिखित गद्यांश पढ़ें... [EN] Read the following passage...","(a) [HI] विकल्प 1 [EN] Option 1 (b) [HI] विकल्प 2 [EN] Option 2 (c) [HI] विकल्प 3 [EN] Option 3 (d) [HI] विकल्प 4 [EN] Option 4","Exam Name","(a)","[HI] व्याख्या [EN] Explanation"
```

### Question 3: Numerical Problem
```
"[HI] एक नाव... [EN] A boat...","(a) [HI] 9 किमी/घंटा [EN] 9 km/h (b) [HI] 10 किमी/घंटा [EN] 10 km/h (c) [HI] 12 किमी/घंटा [EN] 12 km/h (d) [HI] 15 किमी/घंटा [EN] 15 km/h","SSC CGL (Tier-I) 24/07/2023","(a)","[HI] समाधान... [EN] Solution..."
```

---

## 📋 Pre-Upload Checklist Summary

- [ ] 5 columns exactly
- [ ] Bilingual format with `[HI]` and `[EN]`
- [ ] All options in one cell per question
- [ ] Proper quote usage
- [ ] UTF-8 encoding
- [ ] Headers match exactly
- [ ] Compared with BILINGUAL_SAMPLE.csv
- [ ] Saved as .csv file
- [ ] Ready to upload!

---

**Need Help?** → Check BILINGUAL_README.md for links to all guides.

**Have a Question?** → Search BILINGUAL_FORMAT_GUIDE.md for detailed explanations.

**Want Examples?** → Download BILINGUAL_SAMPLE.csv and study it.

---

✅ **You're ready to upload!** Good luck! 🚀
