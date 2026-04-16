# Quick Start: Extract HSSC Results

## In 3 Steps

### Step 1: Install PDF Parser (First Time Only)
```bash
npm install pdf-parse
```

### Step 2: Run Extraction
```bash
npm run extract-results
```

This will:
- Download all 12 HSSC PDF files
- Extract: Roll No, Registration, Category, Sub Category, PWD, Marks
- Calculate Overall Rank and Category Rank from marks
- Save to `public/hssc-results.json`

### Step 3: Test It
Open your browser:
```
http://localhost:3000/hssc-results
```

Search with these test numbers:
- **Registration:** `1001234567`
- **Roll Number:** `10001`

---

## Sample Result

When you search for a candidate, you'll see:

```
Marks: 92.5
Overall Rank: 1
Category Rank: 1
Category: General
PWD Status: No
```

---

## What The Script Does

1. **Downloads** all 12 HSSC result PDFs
2. **Parses** text from each PDF
3. **Extracts** candidate data (roll, registration, category, marks, etc.)
4. **Calculates** ranks based on marks:
   - **Overall Rank** = Position when sorted by marks
   - **Category Rank** = Position within their category when sorted by marks
5. **Removes** duplicates (same registration number)
6. **Saves** to JSON for fast searching

---

## Expected Output

```
[✓] Starting HSSC Results Extraction...

[1/12] Processing hssc-result-1.pdf...
Downloaded: hssc-result-1.pdf
Parsing: hssc-result-1.pdf
Pages: 5
Extracted 245 candidates

[2/12] Processing hssc-result-2.pdf...
...

Calculating ranks for 2847 candidates...
Unique candidates: 2847

✓ Results saved to /public/hssc-results.json

Extraction Summary:
- PDFs processed: 12/12
- Total candidates extracted: 2847
- Unique candidates: 2847
- Candidates with ranks: 2847

Top 10 Candidates by Marks:
1. REC123456 | Roll: 50001 | Marks: 98.5 | Overall Rank: 1 | Category Rank: 1
2. REC123457 | Roll: 50002 | Marks: 97.75 | Overall Rank: 2 | Category Rank: 1
...

✓ All done! Check the results page to search candidates.
```

---

## File Generated

**Location:** `public/hssc-results.json`

**Size:** ~2-5MB (for ~10,000+ candidates)

**Format:**
```json
[
  {
    "registrationNumber": "REC123456",
    "rollNumber": "50001",
    "category": "General",
    "subCategory": "N/A",
    "pwd": false,
    "marks": 98.5,
    "overallRank": 1,
    "categoryRank": 1
  },
  ...
]
```

---

## Troubleshooting

### "command not found: npm run extract-results"
Solution: Make sure you're in the project root directory

### "No candidates extracted from PDFs"
Possible causes:
- PDFs are scanned images (not searchable text)
- Different PDF format than expected
- Network issue downloading PDFs

### Download Fails
Solution: Check if you can download the PDFs manually in your browser first

---

## Next Steps

1. Run the extraction (takes 2-5 minutes)
2. Test the search page
3. Deploy to production
4. Share results page link with candidates

## Full Documentation

For more details, see: [PDF_EXTRACTION_GUIDE.md](./PDF_EXTRACTION_GUIDE.md)
