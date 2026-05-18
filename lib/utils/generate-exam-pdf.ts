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

export async function generateExamPDF(examData: ExamData) {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  let yPosition = 15;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 12;
  const contentWidth = pageWidth - 2 * margin;

  // Helper function to add header to each page
  const addPageHeader = (pageNum: number) => {
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text(`Page ${pageNum}`, pageWidth - margin - 15, pageHeight - 8);
  };

  let pageNum = 1;

  // ============ COVER SECTION ============
  // Background color
  pdf.setFillColor(13, 110, 253); // Premium blue
  pdf.rect(0, 0, pageWidth, 70, 'F');

  // Title
  pdf.setFontSize(28);
  pdf.setTextColor(255, 255, 255);
  pdf.text('EXAM RESULT REPORT', margin, 25);

  // Reset to dark background
  pdf.setFillColor(245, 247, 250);
  pdf.rect(0, 70, pageWidth, pageHeight - 70, 'F');

  yPosition = 85;

  // Exam Title
  pdf.setFontSize(14);
  pdf.setTextColor(30, 30, 30);
  pdf.setFont(undefined, 'bold');
  const titleLines = pdf.splitTextToSize(examData.testTitle, contentWidth);
  pdf.text(titleLines, margin, yPosition);
  yPosition += titleLines.length * 6 + 5;

  // Generation date
  pdf.setFontSize(9);
  pdf.setTextColor(100, 100, 100);
  pdf.setFont(undefined, 'normal');
  pdf.text(`Generated on: ${new Date().toLocaleString()}`, margin, yPosition);
  yPosition += 15;

  // ============ SCORE SUMMARY CARD ============
  const summaryBoxes = [
    { label: 'Score', value: `${examData.score.toFixed(1)}/${examData.totalMarks}`, color: [13, 110, 253] },
    { label: 'Percentage', value: `${examData.percentage.toFixed(1)}%`, color: [34, 197, 94] },
    { label: 'Time Taken', value: `${Math.floor(examData.timeTaken / 60)}m ${examData.timeTaken % 60}s`, color: [249, 115, 22] },
  ];

  const boxWidth = (contentWidth - 8) / 3;
  let boxX = margin;

  summaryBoxes.forEach((box) => {
    // Box background
    pdf.setFillColor(...box.color);
    pdf.rect(boxX, yPosition, boxWidth, 28, 'F');

    // Label
    pdf.setFontSize(9);
    pdf.setTextColor(255, 255, 255);
    pdf.setFont(undefined, 'bold');
    pdf.text(box.label, boxX + 4, yPosition + 8);

    // Value
    pdf.setFontSize(16);
    pdf.setFont(undefined, 'bold');
    const valueLines = pdf.splitTextToSize(box.value, boxWidth - 8);
    pdf.text(valueLines, boxX + 4, yPosition + 18);

    boxX += boxWidth + 4;
  });

  yPosition += 38;
  addPageHeader(pageNum);

  // ============ QUESTION ANALYSIS ============
  pdf.addPage();
  pageNum = 1;
  yPosition = 15;

  // Section title with underline
  pdf.setFontSize(14);
  pdf.setTextColor(30, 30, 30);
  pdf.setFont(undefined, 'bold');
  pdf.text('Detailed Question Analysis', margin, yPosition);

  pdf.setDrawColor(13, 110, 253);
  pdf.setLineWidth(0.5);
  pdf.line(margin, yPosition + 2, margin + 80, yPosition + 2);

  yPosition += 10;

  // ============ QUESTIONS LOOP ============
  for (let i = 0; i < examData.questions.length; i++) {
    const question = examData.questions[i];
    const isCorrect = question.user_answer === question.correct_answer;
    const isUnattempted = !question.user_answer;

    // Check if we need a new page
    if (yPosition > pageHeight - 70) {
      pdf.addPage();
      pageNum++;
      yPosition = 15;
    }

    // ---- Question Header ----
    const questionNum = i + 1;
    let statusText = '';
    let statusColor = [100, 100, 100];
    let statusBgColor = [240, 240, 240];

    if (isUnattempted) {
      statusText = 'NOT ATTEMPTED';
      statusColor = [100, 100, 100];
      statusBgColor = [240, 240, 240];
    } else if (isCorrect) {
      statusText = '✓ CORRECT';
      statusColor = [34, 197, 94];
      statusBgColor = [220, 252, 231];
    } else {
      statusText = '✗ INCORRECT';
      statusColor = [239, 68, 68];
      statusBgColor = [254, 226, 226];
    }

    // Question number and status badge
    pdf.setFillColor(...statusBgColor);
    pdf.rect(margin, yPosition, contentWidth, 9, 'F');

    pdf.setFontSize(10);
    pdf.setTextColor(...statusColor);
    pdf.setFont(undefined, 'bold');
    pdf.text(`Q${questionNum}. ${statusText}`, margin + 3, yPosition + 6);

    yPosition += 12;

    // ---- Question Text ----
    pdf.setFontSize(10);
    pdf.setTextColor(30, 30, 30);
    pdf.setFont(undefined, 'normal');
    const questionLines = pdf.splitTextToSize(`Question: ${question.question_text}`, contentWidth - 6);
    pdf.text(questionLines, margin + 3, yPosition);
    yPosition += questionLines.length * 5.5 + 3;

    // ---- Options ----
    const options = [
      { key: 'A', text: question.option_a },
      { key: 'B', text: question.option_b },
      { key: 'C', text: question.option_c },
      { key: 'D', text: question.option_d },
    ];

    pdf.setFontSize(9);
    options.forEach((option) => {
      const isUserAnswer = question.user_answer?.toUpperCase() === option.key;
      const isCorrectAnswer = question.correct_answer?.toUpperCase() === option.key;

      let optionBgColor = [255, 255, 255];
      let optionTextColor = [50, 50, 50];
      let borderColor = [200, 200, 200];
      let indicator = '';

      if (isCorrectAnswer && isUserAnswer) {
        optionBgColor = [220, 252, 231];
        optionTextColor = [22, 163, 74];
        borderColor = [22, 163, 74];
        indicator = ' ✓ (Your Answer - Correct)';
      } else if (isCorrectAnswer) {
        optionBgColor = [220, 252, 231];
        optionTextColor = [22, 163, 74];
        borderColor = [22, 163, 74];
        indicator = ' ✓ (Correct Answer)';
      } else if (isUserAnswer) {
        optionBgColor = [254, 226, 226];
        optionTextColor = [220, 38, 38];
        borderColor = [220, 38, 38];
        indicator = ' ✗ (Your Answer)';
      }

      // Option box
      pdf.setFillColor(...optionBgColor);
      pdf.setDrawColor(...borderColor);
      pdf.setLineWidth(0.3);
      pdf.rect(margin + 3, yPosition - 3.5, contentWidth - 6, 7, 'FD');

      pdf.setTextColor(...optionTextColor);
      pdf.setFont(undefined, isUserAnswer || isCorrectAnswer ? 'bold' : 'normal');
      const optionText = `${option.key}. ${option.text}${indicator}`;
      const optionLines = pdf.splitTextToSize(optionText, contentWidth - 12);

      pdf.text(optionLines, margin + 5, yPosition + 1);
      yPosition += optionLines.length * 5 + 2;
    });

    yPosition += 3;

    // ---- Explanation ----
    if (question.explanation) {
      if (yPosition > pageHeight - 50) {
        pdf.addPage();
        pageNum++;
        yPosition = 15;
      }

      pdf.setFillColor(240, 248, 255);
      pdf.setDrawColor(13, 110, 253);
      pdf.setLineWidth(0.3);
      pdf.rect(margin + 3, yPosition - 3, contentWidth - 6, 7, 'FD');

      pdf.setFontSize(9);
      pdf.setTextColor(13, 110, 253);
      pdf.setFont(undefined, 'bold');
      pdf.text('📖 Explanation:', margin + 5, yPosition + 1);

      yPosition += 8;

      pdf.setFontSize(8.5);
      pdf.setTextColor(40, 40, 40);
      pdf.setFont(undefined, 'normal');
      const explanationLines = pdf.splitTextToSize(question.explanation, contentWidth - 6);
      pdf.text(explanationLines, margin + 3, yPosition);
      yPosition += explanationLines.length * 5 + 4;
    }

    yPosition += 6;

    // Divider line
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.2);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 4;
  }

  // ============ FOOTER ============
  addPageHeader(pageNum);
  pdf.setFontSize(8);
  pdf.setTextColor(150, 150, 150);
  pdf.text('© HSSC CET Test Series - Exam Result Report', margin, pageHeight - 10);

  // Save the PDF
  const timestamp = new Date().getTime();
  const testName = examData.testTitle.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 30);
  pdf.save(`exam-result-${testName}-${timestamp}.pdf`);
}
