interface Question {
  id: string;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  user_answer: string | null;
  explanation?: string;
  image_url?: string;
}

interface ExamData {
  testTitle: string;
  score: number;
  totalMarks: number;
  percentage: number;
  timeTaken: number;
  questions: Question[];
}

export async function generateExamPDF(examData: ExamData) {
  try {
    console.log('[v0] Starting PDF generation with Hindi font support');

    // Create a printable HTML document with Noto Sans Devanagari font
    const htmlContent = generatePrintableHTML(examData);

    // Create a temporary window/iframe to hold the content
    const printWindow = window.open('', '', 'height=800,width=800');
    
    if (!printWindow) {
      throw new Error('Failed to open print window');
    }

    // Write HTML content to the new window
    printWindow.document.write(htmlContent);
    printWindow.document.close();

    // Wait for content to load and fonts to render
    await new Promise((resolve) => {
      printWindow.onload = () => {
        setTimeout(resolve, 1500);
      };
    });

    console.log('[v0] Triggering print dialog for PDF generation');

    // Trigger print dialog
    printWindow.print();

    // Close window after a delay
    setTimeout(() => {
      printWindow.close();
    }, 500);

    console.log('[v0] PDF generation initiated');
  } catch (error) {
    console.error('[v0] Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again. Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}

function generatePrintableHTML(examData: ExamData): string {
  const correctCount = examData.questions.filter(q => q.user_answer === q.correct_answer).length;
  const incorrectCount = examData.questions.filter(q => q.user_answer && q.user_answer !== q.correct_answer).length;
  const unattemptedCount = examData.questions.filter(q => !q.user_answer).length;

  let questionsHTML = '';

  examData.questions.forEach((question, index) => {
    const isCorrect = question.user_answer === question.correct_answer;
    const isUnattempted = !question.user_answer;

    let statusBadge = '';
    let statusBgColor = '';
    let statusTextColor = '';

    if (isUnattempted) {
      statusBadge = '⊘ NOT ATTEMPTED';
      statusBgColor = '#E5E7EB';
      statusTextColor = '#4B5563';
    } else if (isCorrect) {
      statusBadge = '✓ CORRECT';
      statusBgColor = '#DCFCE7';
      statusTextColor = '#166534';
    } else {
      statusBadge = '✗ INCORRECT';
      statusBgColor = '#FEE2E2';
      statusTextColor = '#991B1B';
    }

    let optionsHTML = '';
    const options = [
      { key: 'A', text: question.option_a },
      { key: 'B', text: question.option_b },
      { key: 'C', text: question.option_c },
      { key: 'D', text: question.option_d },
    ];

    options.forEach((option) => {
      const isUserAnswer = question.user_answer?.toUpperCase() === option.key;
      const isCorrectAnswer = question.correct_answer?.toUpperCase() === option.key;

      let optionBgColor = '#FFFFFF';
      let optionBorderColor = '#E5E7EB';
      let optionTextColor = '#1F2937';
      let indicator = '';

      if (isCorrectAnswer && isUserAnswer) {
        optionBgColor = '#DCFCE7';
        optionBorderColor = '#16A34A';
        optionTextColor = '#15803D';
        indicator = ' ✓ (Your Answer - Correct)';
      } else if (isCorrectAnswer) {
        optionBgColor = '#DCFCE7';
        optionBorderColor = '#16A34A';
        optionTextColor = '#15803D';
        indicator = ' ✓ (Correct Answer)';
      } else if (isUserAnswer) {
        optionBgColor = '#FEE2E2';
        optionBorderColor = '#DC2626';
        optionTextColor = '#991B1B';
        indicator = ' ✗ (Your Answer)';
      }

      optionsHTML += `
        <div style="
          background-color: ${optionBgColor};
          border: 2px solid ${optionBorderColor};
          border-radius: 6px;
          padding: 12px;
          margin-bottom: 10px;
          font-family: 'Noto Sans Devanagari', 'Segoe UI', sans-serif;
        ">
          <p style="
            margin: 0;
            color: ${optionTextColor};
            font-weight: 600;
            font-size: 14px;
            line-height: 1.6;
            word-break: break-word;
          ">
            <strong>${option.key}.</strong> ${option.text}${indicator}
          </p>
        </div>
      `;
    });

    let explanationHTML = '';
    if (question.explanation) {
      explanationHTML = `
        <div style="
          background-color: #EFF6FF;
          border: 2px solid #0D6EFD;
          border-radius: 6px;
          padding: 12px;
          margin-top: 12px;
          font-family: 'Noto Sans Devanagari', 'Segoe UI', sans-serif;
        ">
          <p style="
            margin: 0 0 8px 0;
            color: #0D6EFD;
            font-weight: bold;
            font-size: 12px;
          ">📖 EXPLANATION</p>
          <p style="
            margin: 0;
            color: #1F2937;
            font-size: 13px;
            line-height: 1.6;
            word-break: break-word;
            font-family: 'Noto Sans Devanagari', 'Segoe UI', sans-serif;
          ">
            ${question.explanation}
          </p>
        </div>
      `;
    }

    questionsHTML += `
      <div style="
        background-color: #F9FAFB;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 6px;
        page-break-inside: avoid;
        border-left: 4px solid #0D6EFD;
      ">
        <div style="margin-bottom: 12px;">
          <h3 style="
            margin: 0 0 8px 0;
            font-size: 16px;
            font-weight: bold;
            color: #1F2937;
            font-family: 'Segoe UI', sans-serif;
          ">
            Question ${index + 1} of ${examData.questions.length}
          </h3>
          <div style="
            display: inline-block;
            background-color: ${statusBgColor};
            color: ${statusTextColor};
            padding: 6px 12px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 11px;
          ">
            ${statusBadge}
          </div>
        </div>

        <div style="
          background-color: white;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 12px;
          font-family: 'Noto Sans Devanagari', 'Segoe UI', sans-serif;
        ">
          <p style="
            margin: 0 0 8px 0;
            color: #0D6EFD;
            font-weight: bold;
            font-size: 11px;
            text-transform: uppercase;
          ">QUESTION</p>
          <p style="
            margin: 0;
            font-size: 14px;
            line-height: 1.7;
            color: #1F2937;
            word-break: break-word;
            font-family: 'Noto Sans Devanagari', 'Segoe UI', sans-serif;
          ">
            ${question.question_text}
          </p>
        </div>

        <div style="margin-bottom: 12px;">
          <p style="
            margin: 0 0 8px 0;
            color: #4B5563;
            font-weight: bold;
            font-size: 11px;
            text-transform: uppercase;
          ">OPTIONS</p>
          ${optionsHTML}
        </div>

        ${explanationHTML}
      </div>
    `;
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exam Result Report</title>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          font-family: 'Noto Sans Devanagari', 'Segoe UI', Roboto, sans-serif;
          background-color: #f5f7fa;
          color: #1F2937;
          line-height: 1.6;
        }

        @page {
          size: A4;
          margin: 15mm 12mm;
          orphans: 3;
          widows: 3;
        }

        @page :first {
          margin: 0;
        }

        .page {
          width: 100%;
          page-break-after: always;
          padding: 20px;
          background-color: white;
        }

        .page:last-child {
          page-break-after: avoid;
        }

        .cover-page {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #0D6EFD 0%, #0B5ED7 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 40px;
          page-break-after: always;
        }

        .cover-page h1 {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 40px;
          letter-spacing: 2px;
          font-family: 'Segoe UI', sans-serif;
        }

        .cover-page h2 {
          font-size: 32px;
          font-weight: 600;
          margin: 20px 0;
          word-wrap: break-word;
          font-family: 'Noto Sans Devanagari', 'Segoe UI', sans-serif;
        }

        .cover-page p {
          font-size: 14px;
          opacity: 0.9;
          margin-top: 60px;
        }

        .summary-page {
          padding: 20px;
          background-color: white;
        }

        .summary-page h2 {
          font-size: 24px;
          font-weight: bold;
          color: #1F2937;
          margin-bottom: 20px;
          border-bottom: 3px solid #0D6EFD;
          padding-bottom: 10px;
          font-family: 'Segoe UI', sans-serif;
        }

        .score-boxes {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
          margin-bottom: 25px;
        }

        .score-box {
          background: linear-gradient(135deg, #0D6EFD 0%, #0B5ED7 100%);
          color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .score-box.green {
          background: linear-gradient(135deg, #16A34A 0%, #15803D 100%);
        }

        .score-box.orange {
          background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
        }

        .score-box p:first-child {
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 8px;
          opacity: 0.9;
          font-family: 'Segoe UI', sans-serif;
        }

        .score-box p:last-child {
          font-size: 28px;
          font-weight: bold;
          margin: 0;
        }

        .statistics {
          background-color: #F9FAFB;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .statistics h3 {
          font-size: 14px;
          font-weight: bold;
          color: #1F2937;
          margin-bottom: 12px;
          font-family: 'Segoe UI', sans-serif;
        }

        .stat-items {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
        }

        .stat-item {
          text-align: center;
          padding: 10px;
          border-radius: 4px;
        }

        .stat-item.correct {
          border-left: 4px solid #16A34A;
          background-color: #DCFCE7;
        }

        .stat-item.incorrect {
          border-left: 4px solid #DC2626;
          background-color: #FEE2E2;
        }

        .stat-item.unattempted {
          border-left: 4px solid #9CA3AF;
          background-color: #F3F4F6;
        }

        .stat-item p:first-child {
          font-size: 11px;
          color: #666;
          font-weight: 600;
          margin-bottom: 5px;
          font-family: 'Segoe UI', sans-serif;
        }

        .stat-item p:last-child {
          font-size: 24px;
          font-weight: bold;
          margin: 0;
        }

        .stat-item.correct p:last-child {
          color: #16A34A;
        }

        .stat-item.incorrect p:last-child {
          color: #DC2626;
        }

        .stat-item.unattempted p:last-child {
          color: #9CA3AF;
        }

        .questions-page {
          padding: 20px;
          background-color: white;
        }

        .questions-page h2 {
          font-size: 24px;
          font-weight: bold;
          color: #1F2937;
          margin-bottom: 20px;
          border-bottom: 3px solid #0D6EFD;
          padding-bottom: 10px;
          font-family: 'Segoe UI', sans-serif;
        }

        @media print {
          body {
            background-color: white;
          }
          
          .page {
            page-break-after: always;
            padding: 0;
            margin: 0;
            box-shadow: none;
          }

          .cover-page {
            page-break-after: always;
            width: 100%;
            height: 100%;
            padding: 40mm;
          }
        }
      </style>
    </head>
    <body>
      <!-- COVER PAGE -->
      <div class="cover-page">
        <h1>EXAM RESULT REPORT</h1>
        <h2>${escapeHtml(examData.testTitle)}</h2>
        <p>Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <!-- SUMMARY PAGE -->
      <div class="page summary-page">
        <h2>Score Summary</h2>
        
        <div class="score-boxes">
          <div class="score-box">
            <p>SCORE</p>
            <p>${examData.score.toFixed(1)}/${examData.totalMarks}</p>
          </div>
          <div class="score-box green">
            <p>PERCENTAGE</p>
            <p>${examData.percentage.toFixed(1)}%</p>
          </div>
          <div class="score-box orange">
            <p>TIME TAKEN</p>
            <p>${Math.floor(examData.timeTaken / 60)}m ${examData.timeTaken % 60}s</p>
          </div>
        </div>

        <div class="statistics">
          <h3>Question Statistics</h3>
          <div class="stat-items">
            <div class="stat-item correct">
              <p>CORRECT</p>
              <p>${correctCount}</p>
            </div>
            <div class="stat-item incorrect">
              <p>INCORRECT</p>
              <p>${incorrectCount}</p>
            </div>
            <div class="stat-item unattempted">
              <p>UNATTEMPTED</p>
              <p>${unattemptedCount}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- QUESTIONS PAGE -->
      <div class="page questions-page">
        <h2>Detailed Question Analysis</h2>
        ${questionsHTML}
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
