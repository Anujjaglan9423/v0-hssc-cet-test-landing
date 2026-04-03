# Quick Start: Bilingual Questions Upload

## What Changed?
✅ Questions now display Hindi and English in **separate sections** with clear spacing  
✅ No more confusing `[HI]` and `[EN]` tags mixed in the same line  
✅ Beautiful "or" divider between languages  

## How to Format Your CSV

### Your CSV must have these 5 columns (in order):

```
Question Text | Options | Exam Details | Correct Answer | Explanation
```

### Use this pattern for bilingual content:

```
[HI] Hindi text [EN] English text
```

## Simple Example

```csv
Question Text,Options,Exam Details,Correct Answer,Explanation
"[HI] 2 + 2 = ? [EN] What is 2 + 2?","(a) [HI] 3 [EN] 3 (b) [HI] 4 [EN] 4 (c) [HI] 5 [EN] 5 (d) [HI] 6 [EN] 6","Sample Test","(b)","[HI] 2 + 2 = 4 [EN] 2 + 2 = 4"
```

## Display Example

When you upload the above, it will show in the test as:

```
Question:
🇮🇳 2 + 2 = ?
─────────────────
      or
─────────────────
🇬🇧 What is 2 + 2?

Options:
(A) 🇮🇳 3
    ─────────────────
         or
    ─────────────────
    🇬🇧 3

(B) 🇮🇳 4
    ─────────────────
         or
    ─────────────────
    🇬🇧 4
```

## Step-by-Step

### 1. Create Your CSV File

Use Excel or Google Sheets with 5 columns:
- Column A: Question Text
- Column B: Options  
- Column C: Exam Details
- Column D: Correct Answer
- Column E: Explanation

### 2. Format Each Question

**Question Column:**
```
[HI] Hindi question text [EN] English question text
```

**Options Column:**
```
(a) [HI] option A in hindi [EN] option A in english (b) [HI] ... [EN] ... (c) ... (d) ...
```

**Exam Column:**
```
SSC CGL (Tier-I) 24/07/2023
```

**Answer Column:**
```
(a)
```
or `(a), (b)` for multiple answers

**Explanation Column:**
```
[HI] Hindi explanation [EN] English explanation
```

### 3. Download Sample

Use `BILINGUAL_SAMPLE.csv` as a template - it has 3 complete working examples!

### 4. Upload Your CSV

1. Go to Admin → Tests
2. Click "Upload CSV"
3. Select your file
4. Click Upload

## Common Mistakes to Avoid ❌

- ❌ Not using `[HI]` and `[EN]` markers
- ❌ Having options in separate rows (they must be in ONE cell)
- ❌ Missing quotes around cell values with commas
- ❌ Putting English text first: Use `[HI]` first, then `[EN]`
- ❌ Extra spaces: `[HI] text` NOT `[HI ]  text`

## Files to Reference

1. **BILINGUAL_SAMPLE.csv** - Working examples (3 questions)
2. **BILINGUAL_FORMAT_GUIDE.md** - Complete detailed guide
3. **public/bilingual-ui-example.jpg** - Visual mockup of how it displays

## Need Help?

- Check the **BILINGUAL_SAMPLE.csv** file for working examples
- Read **BILINGUAL_FORMAT_GUIDE.md** for complete details
- Look at the **public/bilingual-ui-example.jpg** to see the visual result
