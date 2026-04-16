import fs from 'fs';
import https from 'https';
import pdfParse from 'pdf-parse';

const PDF_LINKS = [
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

// Download PDF from URL
async function downloadPDF(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Extract text from PDF
async function extractPDFText(pdfBuffer) {
  try {
    const data = await pdfParse(pdfBuffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error.message);
    return '';
  }
}

// Parse table data from text
function parseTableData(text) {
  const results = [];
  const lines = text.split('\n').filter(line => line.trim());
  
  // Try to find patterns like: Registration No | Roll No | Name | Overall Rank | Category Rank
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Look for numeric patterns that might be registration/roll numbers
    const regMatch = line.match(/(\d{6,})\s+(\d{4,})\s+(.+?)\s+(\d+)\s+(\d+)/);
    if (regMatch) {
      results.push({
        registrationNumber: regMatch[1],
        rollNumber: regMatch[2],
        name: regMatch[3].trim(),
        overallRank: parseInt(regMatch[4]),
        categoryRank: parseInt(regMatch[5]),
      });
    }
  }
  
  return results;
}

// Main function
async function extractAllResults() {
  const allResults = [];
  
  for (let i = 0; i < PDF_LINKS.length; i++) {
    console.log(`Processing PDF ${i + 1}/${PDF_LINKS.length}...`);
    try {
      const pdfBuffer = await downloadPDF(PDF_LINKS[i]);
      const text = await extractPDFText(pdfBuffer);
      const results = parseTableData(text);
      allResults.push(...results);
      console.log(`✓ Extracted ${results.length} records from PDF ${i + 1}`);
    } catch (error) {
      console.error(`✗ Error processing PDF ${i + 1}:`, error.message);
    }
  }
  
  // Save to file
  const outputPath = './public/hssc-results.json';
  fs.writeFileSync(outputPath, JSON.stringify(allResults, null, 2));
  console.log(`\n✓ Saved ${allResults.length} total results to ${outputPath}`);
}

extractAllResults().catch(console.error);
