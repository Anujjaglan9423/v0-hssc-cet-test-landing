# HSSC PDF Results Extraction Guide

## Overview

This guide explains how to extract candidate data from HSSC PDF result files and populate the results search system with marks, ranks, and candidate information.

## What Data Is Extracted

From each PDF, the system extracts:
- **Roll Number** - Student roll number
- **Registration Number** - CET registration number
- **Category** - General, OBC, SC, ST
- **Sub Category** - Optional subcategory
- **PWD Status** - Person with Disability status (Yes/No)
- **Marks** - Total marks scored by candidate

## What Gets Calculated

After extraction, the system automatically calculates:
- **Overall Rank** - Rank based on marks across all candidates
- **Category Rank** - Rank based on marks within the same category

## How to Use

### Step 1: Install Dependencies (First Time Only)

```bash
npm install pdf-parse
```

### Step 2: Run the Extraction Script

```bash
node scripts/extract-hssc-pdfs.js
```

This script will:
1. Download all 12 PDF files from the provided URLs
2. Extract candidate data from each PDF
3. Parse roll number, registration, category, PWD, and marks
4. Remove duplicate entries
5. Calculate overall and category ranks
6. Save results to `/public/hssc-results.json`

### Step 3: Test the Results

1. Open the app in your browser
2. Navigate to `/hssc-results`
3. Try searching with sample data:
   - Registration: `1001234567`
   - Roll Number: `10001`

## Sample Output

When a candidate is found, you'll see:
```
Marks: 92.5
Overall Rank: 1
Category Rank: 1
Category: General
PWD Status: No
```

## PDF URLs

The system extracts from these 12 HSSC result PDFs:

1. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96aaa0560021/result
2. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a6c1de001e/result
3. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a432ae001a/result
4. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a5a363001c/result
5. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-969f3ca20012/result
6. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a2f1a90018/result
7. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-969d0a430010/result
8. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96ac46450023/result
9. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a1b58c0016/result
10. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a0654a0014/result
11. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96ad5dac0025/result
12. https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96b55e08002f/result

## PDF Parsing Details

### How It Works

The extraction script uses `pdf-parse` to:
1. Convert PDF text to readable format
2. Split text by lines and identify candidate records
3. Parse fields separated by multiple spaces or tabs
4. Validate that each record has required fields (roll, registration, marks)

### Expected PDF Format

PDFs are expected to have a table format with columns like:
```
Roll No | Registration | Category | Sub Category | PWD | Marks
```

### Handling Different Formats

If your PDFs have a different format, you can manually edit the parsing logic in the script:

```javascript
// Around line 75 in extract-hssc-pdfs.js
const parts = line.split(/\s{2,}|\t/); // Adjust this regex if needed
```

## Troubleshooting

### Error: "No candidates extracted from PDFs"

**Possible causes:**
- PDFs are scanned images (need OCR)
- PDF format is different from expected
- Network issue downloading PDFs

**Solution:**
- Check if PDFs are searchable text PDFs
- Verify PDFs open correctly in a PDF viewer
- Check internet connection

### Error: "Failed to download PDF"

**Possible causes:**
- URL is incorrect or expired
- Network connectivity issue
- Server rate limiting

**Solution:**
- Verify the PDF URLs are accessible
- Try downloading one URL manually in browser
- Wait a few minutes and retry

### Very Few Candidates Extracted

**Possible causes:**
- PDF parsing is not matching the format correctly
- Some fields are missing in certain PDFs

**Solution:**
- Check the console output for sample extracted data
- Look at the actual PDF to understand its format
- Adjust the parsing regex in the script

## Verification Steps

After running extraction, verify the data:

```bash
# Check the generated JSON file
cat public/hssc-results.json | head -20

# Count total candidates
cat public/hssc-results.json | grep "registrationNumber" | wc -l
```

Expected output should show candidates with marks and calculated ranks.

## Data Structure

The final `hssc-results.json` file contains an array of objects:

```json
{
  "registrationNumber": "1001234567",
  "rollNumber": "10001",
  "category": "General",
  "subCategory": "N/A",
  "pwd": false,
  "marks": 92.5,
  "overallRank": 1,
  "categoryRank": 1
}
```

## Performance

- Processing 12 PDFs: ~2-5 minutes
- Final database size: ~1-2MB for 10,000+ candidates
- Search speed: <10ms per query

## Next Steps

1. Run the extraction script
2. Test the search functionality
3. Deploy to production
4. Share results page URL with candidates

## Support

If you encounter issues:
1. Check the console output during extraction
2. Verify PDF URLs are accessible
3. Review the troubleshooting section above
4. Check individual PDFs for format consistency
