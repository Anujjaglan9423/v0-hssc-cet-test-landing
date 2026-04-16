import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../data');
const OUTPUT_FILE = path.join(__dirname, '../public/hssc-results.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

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

// Download PDF from URL
async function downloadPDF(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(DATA_DIR, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve(filepath);
      });
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// Parse PDF and extract candidate data
async function parsePDF(filepath) {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const pdfData = await pdfParse(dataBuffer);
    const text = pdfData.text;

    console.log(`Parsing: ${path.basename(filepath)}`);
    console.log(`Pages: ${pdfData.numpages}`);

    const candidates = [];

    // Split by lines and process
    const lines = text.split('\n');

    // Pattern to match candidate records
    // Looking for patterns like: Roll No | Registration | Category | Sub Category | PWD | Marks
    let currentCandidate = {};

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip empty lines and headers
      if (!line || line.includes('Roll') || line.includes('Registration') || line.includes('Category')) {
        continue;
      }

      // Try to extract candidate data from line
      // This is flexible to handle various PDF formats
      const parts = line.split(/\s{2,}|\t/); // Split by multiple spaces or tabs

      if (parts.length >= 5) {
        const rollNo = parts[0]?.trim();
        const registration = parts[1]?.trim();
        const category = parts[2]?.trim();
        const subCategory = parts[3]?.trim();
        const pwdStatus = parts[4]?.trim();
        const marks = parseFloat(parts[5]?.trim() || parts[4]?.trim());

        // Validate the record
        if (rollNo && registration && !isNaN(marks)) {
          candidates.push({
            rollNumber: rollNo,
            registrationNumber: registration,
            category: category || 'General',
            subCategory: subCategory || 'N/A',
            pwd: pwdStatus?.toLowerCase() === 'yes' ? true : false,
            marks: marks,
          });
        }
      }
    }

    return candidates;
  } catch (error) {
    console.error(`Error parsing PDF: ${error.message}`);
    return [];
  }
}

// Calculate ranks based on marks
function calculateRanks(allCandidates) {
  // Sort by marks (descending)
  const sorted = [...allCandidates].sort((a, b) => b.marks - a.marks);

  // Calculate overall rank
  let overallRank = 1;
  const candidateMap = new Map();

  sorted.forEach((candidate, index) => {
    if (index > 0 && sorted[index - 1].marks !== candidate.marks) {
      overallRank = index + 1;
    }
    candidate.overallRank = overallRank;
    candidateMap.set(candidate.registrationNumber, candidate);
  });

  // Calculate category rank
  const categoryGroups = {};
  allCandidates.forEach((candidate) => {
    const cat = candidate.category || 'General';
    if (!categoryGroups[cat]) {
      categoryGroups[cat] = [];
    }
    categoryGroups[cat].push(candidate);
  });

  Object.keys(categoryGroups).forEach((category) => {
    const categorySorted = categoryGroups[category].sort((a, b) => b.marks - a.marks);
    let categoryRank = 1;

    categorySorted.forEach((candidate, index) => {
      if (index > 0 && categorySorted[index - 1].marks !== candidate.marks) {
        categoryRank = index + 1;
      }
      const fullCandidate = candidateMap.get(candidate.registrationNumber);
      if (fullCandidate) {
        fullCandidate.categoryRank = categoryRank;
      }
    });
  });

  return Array.from(candidateMap.values());
}

// Main execution
async function main() {
  console.log('Starting HSSC Results Extraction...\n');

  let allCandidates = [];
  let successCount = 0;
  let failureCount = 0;

  for (let i = 0; i < PDF_URLS.length; i++) {
    const url = PDF_URLS[i];
    const filename = `hssc-result-${i + 1}.pdf`;

    try {
      console.log(`\n[${i + 1}/${PDF_URLS.length}] Processing ${filename}...`);

      // Download PDF
      const filepath = await downloadPDF(url, filename);

      // Parse PDF
      const candidates = await parsePDF(filepath);
      console.log(`Extracted ${candidates.length} candidates`);

      allCandidates = allCandidates.concat(candidates);
      successCount++;

      // Clean up downloaded file
      fs.unlinkSync(filepath);
    } catch (error) {
      console.error(`Failed to process ${filename}: ${error.message}`);
      failureCount++;
    }
  }

  if (allCandidates.length === 0) {
    console.error('\nNo candidates extracted from PDFs!');
    process.exit(1);
  }

  console.log(`\n\nCalculating ranks for ${allCandidates.length} candidates...`);

  // Remove duplicates (same registration number)
  const uniqueCandidates = Array.from(
    new Map(allCandidates.map((c) => [c.registrationNumber, c])).values()
  );

  console.log(`Unique candidates: ${uniqueCandidates.length}`);

  // Calculate ranks
  const candidatesWithRanks = calculateRanks(uniqueCandidates);

  // Sort by overall rank
  candidatesWithRanks.sort((a, b) => a.overallRank - b.overallRank);

  // Save to JSON
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(candidatesWithRanks, null, 2));

  console.log(`\n✓ Results saved to ${OUTPUT_FILE}`);
  console.log(`\nExtraction Summary:`);
  console.log(`- PDFs processed: ${successCount}/${PDF_URLS.length}`);
  console.log(`- PDFs failed: ${failureCount}`);
  console.log(`- Total candidates extracted: ${allCandidates.length}`);
  console.log(`- Unique candidates: ${uniqueCandidates.length}`);
  console.log(`- Candidates with ranks: ${candidatesWithRanks.length}`);

  // Show top 10 candidates
  console.log(`\nTop 10 Candidates by Marks:`);
  candidatesWithRanks.slice(0, 10).forEach((c, i) => {
    console.log(
      `${i + 1}. ${c.registrationNumber} | Roll: ${c.rollNumber} | Marks: ${c.marks} | Overall Rank: ${c.overallRank} | Category Rank: ${c.categoryRank}`
    );
  });

  console.log(`\n✓ All done! Check the results page to search candidates.`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
