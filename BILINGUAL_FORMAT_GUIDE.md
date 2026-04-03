# Bilingual CSV Format Guide (Hindi + English)

## Overview
The system now supports bilingual questions with proper visual separation between Hindi and English text. Questions and options are displayed with clear spacing and language markers.

## CSV Format

Your CSV must have exactly **5 columns** in this order:

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
|----------|----------|----------|----------|----------|
| **Question Text** | **Options** | **Exam Details** | **Correct Answer** | **Explanation** |

## Language Markers

Use `[HI]` and `[EN]` tags to separate languages within fields:

```
[HI] Hindi text here [EN] English text here
```

### Example Format

```csv
Question Text,Options,Exam Details,Correct Answer,Explanation
"[HI] एक निश्चित जमा राशि पर 4.5% वार्षिक दर से एक वर्ष में ₹135 ब्याज प्राप्त होता है। [EN] A certain deposit earns ₹135 interest in 1 year at 4.5% per annum.","(a) [HI] ₹14 [EN] ₹14 (b) [HI] ₹18 [EN] ₹18 (c) [HI] ₹16 [EN] ₹16 (d) [HI] ₹15 [EN] ₹15","SSC CGL (Tier-I) 24/07/2023","(d)","[HI] माना मूलधन x ₹ है... [EN] Let the principal be x ₹..."
```

## Detailed Breakdown

### 1. Question Text Column
**Format:** `[HI] Hindi Question [EN] English Question`

```
[HI] एक नाव शांत जल में 12 घंटे 30 मिनट में धारा के अनुकूल 60 किमी और धारा के प्रतिकूल 40 किमी जा सकती है। [EN] A boat can go 60 km downstream and 40 km upstream in 12 hours 30 minutes.
```

### 2. Options Column
**Format:** `(a) [HI] Option A Hindi [EN] Option A English (b) [HI] Option B Hindi [EN] Option B English (c) ... (d) ...`

```
(a) [HI] 9 किमी/घंटा [EN] 9 km/h (b) [HI] 7 किमी/घंटा [EN] 7 km/h (c) [HI] 10 किमी/घंटा [EN] 10 km/h (d) [HI] 8 किमी/घंटा [EN] 8 km/h
```

### 3. Exam Details Column
Just the exam name and date (no language separation needed):

```
SSC CGL (Tier-I) 20/07/2023 (Shift-I)
```

### 4. Correct Answer Column
Just the letter(s) in parentheses:

```
(a)
```

or for multiple answers:

```
(a), (b)
```

### 5. Explanation Column
**Format:** `[HI] Hindi Explanation [EN] English Explanation`

```
[HI] धारा के अनुकूल गति = नाव की गति + धारा की गति। ... [EN] Downstream speed = boat speed + stream speed. ...
```

## Display in Test Interface

### Question Display
```
🇮🇳 एक निश्चित जमा राशि पर 4.5% वार्षिक दर से...
─────────────────────────
           or
─────────────────────────
🇬🇧 A certain amount earns ₹135 as interest...
```

### Options Display
```
(A) 
🇮🇳 ₹14
─────────────────────────
           or
─────────────────────────
🇬🇧 ₹14
```

### Results/Explanation Display
```
Explanation:
🇮🇳 माना मूलधन x ₹ है...
─────────────────────────
           or
─────────────────────────
🇬🇧 Let the principal be x ₹...
```

## Important Rules

1. **Always use double quotes** around field values containing commas or special characters
2. **[HI] comes first**, then [EN]
3. **No spaces** between `[HI]` and the Hindi text, or `[EN]` and English text
4. Each question = **ONE ROW** in CSV
5. All options (a, b, c, d) must be in the **same field**

## Excel/Google Sheets Tips

1. Create columns with headers: `Question Text | Options | Exam Details | Correct Answer | Explanation`
2. Use line breaks within cells (Ctrl+Enter in Excel, Cmd+Enter in Google Sheets) for readability
3. Export as CSV with UTF-8 encoding
4. Test upload with the sample file first: `BILINGUAL_SAMPLE.csv`

## Sample File Location

A working example is available in: **BILINGUAL_SAMPLE.csv**

Download and use it as a template for your questions!
