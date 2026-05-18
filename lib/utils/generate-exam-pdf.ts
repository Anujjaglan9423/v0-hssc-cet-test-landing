import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

const htmlContent = (examData: ExamData) => {
  const correctCount = examData.questions.filter(q => q.user_answer === q.correct_answer).length;
  const incorrectCount = examData.questions.filter(q => q.user_answer && q.user_answer !== q.correct_answer).length;
  const unattemptedCount = examData.questions.filter(q => !q.user_answer).length;

  let questionsHTML = '';
  
  examData.questions.forEach((question, index) => {
    const isCorrect = question.user_answer === question.correct_answer;
    const isUnattempted = !question.user_answer;
    
    let statusBadge = '';
    let statusColor = '';
    
    if (isUnattempted) {
      statusBadge = '⊘ NOT ATTEMPTED';
      statusColor = '#9CA3AF';
    } else if (isCorrect) {
      statusBadge = '✓ CORRECT';
      statusColor = '#16A34A';
    } else {
      statusBadge = '✗ INCORRECT';
      statusColor = '#DC2626';
    }

    let optionsHTML = '';
    const options = [
      { key: 'A', text: question.option_a },
      { key: 'B', text: question.option_b },
      { key: 'C', text: question.option_c },
      { key: 'D', text: question.option_d },
    ];

    options.forEach(option => {
      const isUserAnswer = question.user_answer?.toUpperCase() === option.key;
      const isCorrectAnswer = question.correct_answer?.toUpperCase() === option.key;
      
      let bgColor = '#FFFFFF';
      let borderColor = '#E5E7EB';
      let textColor = '#1F2937';
      let indicator = '';

      if (isCorrectAnswer && isUserAnswer) {
        bgColor = '#DCFCE7';
        borderColor = '#16A34A';
        textColor = '#15803D';
        indicator = ' ✓ (Your Answer - Correct)';
      } else if (isCorrectAnswer) {
        bgColor = '#DCFCE7';
        borderColor = '#16A34A';
        textColor = '#15803D';
        indicator = ' ✓ (Correct Answer)';
      } else if (isUserAnswer) {
        bgColor = '#FEE2E2';
        borderColor = '#DC2626';
        textColor = '#991B1B';
        indicator = ' ✗ (Your Answer)';
      }

      optionsHTML += `
        <div style="background-color: ${bgColor}; border: 2px solid ${borderColor}; border-radius: 8px; padding: 12px; margin-bottom: 10px;">
          <p style="margin: 0; color: ${textColor}; font-weight: 600; font-size: 14px; word-wrap: break-word; white-space: normal;">
            ${option.key}. ${option.text}${indicator}
          </p>
        </div>
      `;
    });

    let explanationHTML = '';
    if (question.explanation) {
      explanationHTML = `
        <div style="background-color: #EFF6FF; border: 2px solid #0D6EFD; border-radius: 8px; padding: 12px; margin-top: 15px;">
          <p style="margin: 0 0 8px 0; color: #0D6EFD; font-weight: bold; font-size: 12px;">📖 EXPLANATION</p>
          <p style="margin: 0; color: #1F2937; font-size: 13px; line-height: 1.6; word-wrap: break-word; white-space: normal;">
            ${question.explanation}
          </p>
        </div>
      `;
    }

    questionsHTML += `
      <div style="background-color: #F9FAFB; padding: 20px; margin-bottom: 20px; border-radius: 8px; page-break-inside: avoid;">
        <div style="margin-bottom: 15px;">
          <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: bold; color: #1F2937;">
            Question ${index + 1} of ${examData.questions.length}
          </h3>
          <div style="display: inline-block; background-color: ${statusColor === '#16A34A' ? '#DCFCE7' : statusColor === '#DC2626' ? '#FEE2E2' : '#E5E7EB'}; color: ${statusColor}; padding: 6px 12px; border-radius: 6px; font-weight: bold; font-size: 11px;">
            ${statusBadge}
          </div>
        </div>

        <div style="background-color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #0D6EFD;">
          <p style="margin: 0 0 8px 0; color: #0D6EFD; font-weight: bold; font-size: 11px;">QUESTION</p>
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #1F2937; word-wrap: break-word; white-space: normal;">
            ${question.question_text}
          </p>
        </div>

        <div style="margin-bottom: 15px;">
          ${optionsHTML}
        </div>

        ${explanationHTML}
      </div>
    `;
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exam Result Report</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #f5f7fa;
          line-height: 1.6;
        }
        .page {
          width: 210mm;
          height: 297mm;
          margin: 0 auto;
          page-break-after: always;
        }
        .page:last-child {
          page-break-after: avoid;
        }
        @page {
          size: A4;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <!-- COVER PAGE -->
      <div class="page" style="background: linear-gradient(135deg, #0D6EFD 0%, #0B5ED7 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; padding: 40px;">
        <h1 style="font-size: 48px; font-weight: bold; margin-bottom: 40px; letter-spacing: 2px;">EXAM RESULT REPORT</h1>
        <h2 style="font-size: 32px; font-weight: 600; margin: 20px 40px; word-wrap: break-word; white-space: normal;">${examData.testTitle}</h2>
        <p style="font-size: 14px; opacity: 0.9; margin-top: 60px;">Generated on ${new Date().toLocaleString()}</p>
      </div>

      <!-- SUMMARY PAGE -->
      <div class="page" style="background-color: #f5f7fa; padding: 30px; display: flex; flex-direction: column;">
        <h2 style="font-size: 28px; font-weight: bold; color: #1F2937; margin-bottom: 25px; border-bottom: 3px solid #0D6EFD; padding-bottom: 12px;">Score Summary</h2>

        <!-- Score Boxes -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 30px;">
          <div style="background-color: #0D6EFD; color: white; padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 12px; font-weight: 600; margin-bottom: 10px; opacity: 0.9;">SCORE</p>
            <p style="font-size: 32px; font-weight: bold; margin: 0;">${examData.score.toFixed(1)}/${examData.totalMarks}</p>
          </div>
          <div style="background-color: #16A34A; color: white; padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 12px; font-weight: 600; margin-bottom: 10px; opacity: 0.9;">PERCENTAGE</p>
            <p style="font-size: 32px; font-weight: bold; margin: 0;">${examData.percentage.toFixed(1)}%</p>
          </div>
          <div style="background-color: #F97316; color: white; padding: 25px; border-radius: 10px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="font-size: 12px; font-weight: 600; margin-bottom: 10px; opacity: 0.9;">TIME TAKEN</p>
            <p style="font-size: 32px; font-weight: bold; margin: 0;">${Math.floor(examData.timeTaken / 60)}m ${examData.timeTaken % 60}s</p>
          </div>
        </div>

        <!-- Statistics -->
        <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h3 style="font-size: 16px; font-weight: bold; color: #1F2937; margin-bottom: 20px;">Question Statistics</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
            <div style="text-align: center; padding: 15px; border-left: 4px solid #16A34A;">
              <p style="font-size: 11px; color: #666; font-weight: 600; margin-bottom: 8px;">CORRECT ANSWERS</p>
              <p style="font-size: 28px; font-weight: bold; color: #16A34A; margin: 0;">${correctCount}</p>
            </div>
            <div style="text-align: center; padding: 15px; border-left: 4px solid #DC2626;">
              <p style="font-size: 11px; color: #666; font-weight: 600; margin-bottom: 8px;">INCORRECT ANSWERS</p>
              <p style="font-size: 28px; font-weight: bold; color: #DC2626; margin: 0;">${incorrectCount}</p>
            </div>
            <div style="text-align: center; padding: 15px; border-left: 4px solid #9CA3AF;">
              <p style="font-size: 11px; color: #666; font-weight: 600; margin-bottom: 8px;">UNATTEMPTED</p>
              <p style="font-size: 28px; font-weight: bold; color: #9CA3AF; margin: 0;">${unattemptedCount}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- QUESTIONS PAGES -->
      <div class="page" style="background-color: #f5f7fa; padding: 30px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #1F2937; margin-bottom: 25px; border-bottom: 3px solid #0D6EFD; padding-bottom: 12px;">Question Analysis</h2>
        ${questionsHTML}
      </div>
    </body>
    </html>
  `;
};

export async function generateExamPDF(examData: ExamData) {
  try {
    console.log('[v0] Starting PDF generation');

    // Create iframe to render HTML
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) {
      throw new Error('Cannot access iframe document');
    }

    iframeDoc.open();
    iframeDoc.write(htmlContent(examData));
    iframeDoc.close();

    // Wait for content to load
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    console.log('[v0] HTML content loaded, starting canvas conversion');

    // Get the body element from iframe
    const element = iframeDoc.body;

    // Convert to canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#f5f7fa',
      allowTaint: true,
      windowHeight: element.scrollHeight,
      windowWidth: element.scrollWidth,
    });

    console.log('[v0] Canvas created successfully');

    // Create PDF from canvas
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

    // Add remaining pages
    let heightLeft = imgHeight - pageHeight;
    let position = 0;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save PDF
    const timestamp = new Date().getTime();
    const testName = examData.testTitle.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 30);
    pdf.save(`exam-result-${testName}-${timestamp}.pdf`);

    console.log('[v0] PDF saved successfully');

    // Clean up
    document.body.removeChild(iframe);
  } catch (error) {
    console.error('[v0] Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again. Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}
