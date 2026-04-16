#!/usr/bin/env node

/**
 * HSSC Results Importer
 * 
 * Usage: node scripts/import-pdf-results.js
 * 
 * This script downloads and extracts candidate data from HSSC result PDFs.
 * Requires: npm install pdf-parse
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// PDF URLs - Update these with all your PDF links
const PDF_URLS = [
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96aaa0560021/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a6c1de001e/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a432ae001a/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a5a363001c/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-969f3ca20012/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a2f1a90018/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-969d0a430010/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96ac46450023/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a1b58c0016/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96a0654a0014/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96ad5dac0025/result',
  'https://hssc.gov.in/file/ac1f23cd-9cf7-1335-819d-96b55e08002f/result',
];

const OUTPUT_FILE = path.join(__dirname, '../public/hssc-results.json');

// Helper: Download file from URL
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
        return;
      }
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Helper: Parse PDF text and extract candidate data
function parsePdfText(text) {
  const results = [];
  const lines = text.split('\n');

  // Pattern to match table rows with registration no, roll no, name, ranks
  // Adjust regex based on actual PDF format
  const rowPattern = /(\d{6,})\s+(\d{4,})\s+(.+?)\s+(\d+)\s+(\d+)/;

  for (const line of lines) {
    const match = line.trim().match(rowPattern);
    if (match) {
      results.push({
        registrationNumber: match[1],
        rollNumber: match[2],
        name: match[3].trim(),
        overallRank: parseInt(match[4]),
        categoryRank: parseInt(match[5]),
      });
    }
  }

  return results;
}

// Main function
async function extractResults() {
  console.log('🔍 Starting HSSC Results Extraction...\n');

  // Try to load pdf-parse
  let pdfParse;
  try {
    pdfParse = require('pdf-parse');
  } catch (error) {
    console.error('❌ Error: pdf-parse not installed');
    console.error('\nPlease install it first:');
    console.error('  npm install pdf-parse');
    console.error('  # or');
    console.error('  pnpm add pdf-parse');
    process.exit(1);
  }

  const allResults = [];
  let successCount = 0;
  let failureCount = 0;

  for (let i = 0; i < PDF_URLS.length; i++) {
    const url = PDF_URLS[i];
    console.log(`[${i + 1}/${PDF_URLS.length}] Processing: ${url.substring(url.lastIndexOf('/') + 1)}`);

    try {
      // Download PDF
      const pdfBuffer = await downloadFile(url);
      console.log(`  ✓ Downloaded (${(pdfBuffer.length / 1024).toFixed(2)} KB)`);

      // Parse PDF
      const data = await pdfParse(pdfBuffer);
      const candidates = parsePdfText(data.text);
      
      if (candidates.length > 0) {
        allResults.push(...candidates);
        console.log(`  ✓ Extracted ${candidates.length} records\n`);
        successCount++;
      } else {
        console.log(`  ⚠ No records found (check format)\n`);
        failureCount++;
      }
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}\n`);
      failureCount++;
    }
  }

  // Save results
  console.log(`\n📊 Summary:`);
  console.log(`  Total Records: ${allResults.length}`);
  console.log(`  Successful PDFs: ${successCount}`);
  console.log(`  Failed PDFs: ${failureCount}`);

  // Remove duplicates based on registration number
  const unique = new Map();
  allResults.forEach((result) => {
    if (!unique.has(result.registrationNumber)) {
      unique.set(result.registrationNumber, result);
    }
  });

  const finalResults = Array.from(unique.values());

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalResults, null, 2));
  console.log(`\n✅ Saved ${finalResults.length} unique records to:`);
  console.log(`  ${OUTPUT_FILE}`);
  console.log(`\n🚀 Results are now ready for searching!`);
}

// Run
extractResults().catch((error) => {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
});
