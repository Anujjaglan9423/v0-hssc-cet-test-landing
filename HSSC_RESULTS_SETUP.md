# HSSC Results Search Feature Setup Guide

## Overview

The HSSC Results Search page allows users to search for their exam results by entering either their registration number or roll number. The system displays their overall rank and category rank.

## Features

✅ **Dual Search Options** - Search by registration number or roll number
✅ **Real-time Search** - Instant results from indexed data
✅ **Clean UI** - Beautiful, responsive design
✅ **Accessible** - Mobile and desktop optimized
✅ **Pre-login Feature** - Users can search results before creating an account

## Current Status

The feature is **ready to use** with sample data:
- Results page: `/hssc-results`
- Search API: `/api/search-results`
- Sample data: `public/hssc-results.json` (10 sample records)

## How to Use (For Users)

1. Visit the website
2. Click "Results" in the navbar
3. Choose search method (Registration No or Roll No)
4. Enter your number
5. Click "Search Results"
6. View your Overall Rank and Category Rank
7. (Optional) Login to access dashboard

## Setting Up with Real PDF Data

### Step 1: Prepare the PDF Extraction Script

The script `scripts/extract-pdf-results.mjs` is configured to:
- Download PDFs from the provided links
- Extract text from searchable PDFs
- Parse candidate data (registration no, roll no, name, ranks)
- Save results to `public/hssc-results.json`

### Step 2: Install PDF Parser Dependencies

```bash
npm install pdf-parse
# or
pnpm add pdf-parse
```

### Step 3: Run the Extraction Script

```bash
node scripts/extract-pdf-results.mjs
```

This will:
- Download all 12 PDF files from HSSC
- Extract candidate data
- Create/update `public/hssc-results.json` with all records

### Step 4: Verify the Results

1. Check console output for success messages
2. Open `public/hssc-results.json` to view extracted data
3. Test the search on `/hssc-results` page

## Data Structure

Each result record contains:

```json
{
  "registrationNumber": "1001234567",
  "rollNumber": "10001",
  "name": "John Doe",
  "overallRank": 45,
  "categoryRank": 8
}
```

## API Endpoint

### GET /api/search-results

**Query Parameters:**
- `type` (required): `'registration'` or `'roll'`
- `value` (required): The search value (number)

**Example Requests:**

```bash
# By registration number
GET /api/search-results?type=registration&value=1001234567

# By roll number
GET /api/search-results?type=roll&value=10001
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "registrationNumber": "1001234567",
    "rollNumber": "10001",
    "name": "John Doe",
    "overallRank": 45,
    "categoryRank": 8
  }
}
```

**Error Response (404):**
```json
{
  "error": "No results found for the provided search criteria"
}
```

## File Locations

- **Results Page**: `/app/hssc-results/page.tsx`
- **API Route**: `/app/api/search-results/route.ts`
- **PDF Script**: `/scripts/extract-pdf-results.mjs`
- **Data File**: `/public/hssc-results.json`
- **Navbar Update**: `/components/navbar.tsx` (Results link added)

## Customization

### Change Search Fields

Edit `/app/hssc-results/page.tsx` and modify the interface:

```typescript
interface SearchResult {
  registrationNumber: string;
  rollNumber: string;
  name: string;
  overallRank: number;
  categoryRank: number;
  // Add more fields as needed
}
```

### Update API Logic

Edit `/app/api/search-results/route.ts` to:
- Add new search fields
- Implement case-insensitive search
- Add filters or additional logic

### Modify UI Styling

The page uses Tailwind CSS with custom colors. Update colors in:
- `/app/hssc-results/page.tsx` - Search form and result cards

## Troubleshooting

### Script Error: "pdf-parse not installed"
```bash
pnpm add pdf-parse
```

### Results not found after uploading data
1. Verify `public/hssc-results.json` exists
2. Check JSON format is valid
3. Ensure registration/roll numbers match exactly

### API returns 404
- Check if `public/hssc-results.json` file exists
- Verify search value is correct
- Check data file for the search value

### PDF download fails
- Check internet connection
- Verify PDF links are accessible
- Check console for specific error messages

## Performance Notes

- **Current**: ~10 sample records load instantly
- **With Real Data**: 10,000+ records will still search in <100ms using direct lookup
- **Future**: Can add caching layer or database for larger datasets

## Future Enhancements

- Add certificate download option
- Email result notifications
- Batch upload results from different PDFs
- Category and exam type filtering
- Result statistics and ranking distribution
- Integration with login for automatic result display

## Contact & Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify your data format matches the expected structure
3. Run the extraction script in debug mode for detailed logs
