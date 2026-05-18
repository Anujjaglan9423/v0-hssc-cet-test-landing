import jsPDF from 'jspdf';

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
    console.log('[v0] Starting PDF generation');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 12;
    const contentWidth = pageWidth - 2 * margin;

    // ============ HELPER FUNCTIONS ============
    const addHeader = () => {
      pdf.setFillColor(245, 247, 250);
      pdf.rect(0, 0, pageWidth, 25, 'F');
      
      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(14);
      pdf.setTextColor(13, 110, 253);
      pdf.text('EXAM RESULT REPORT', margin, 15);
    };

    const checkPageBreak = (requiredSpace: number, currentY: number): number => {
      if (currentY + requiredSpace > pageHeight - 10) {
        pdf.addPage();
        addHeader();
        return 30;
      }
      return currentY;
    };

    // ============ PAGE 1: COVER PAGE ============
    pdf.setFillColor(13, 110, 253);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');

    pdf.setFont(undefined, 'bold');
    pdf.setFontSize(32);
    pdf.setTextColor(255, 255, 255);
    pdf.text('EXAM RESULT REPORT', pageWidth / 2, 70, { align: 'center' });

    pdf.setFontSize(18);
    pdf.setFont(undefined, 'normal');
    const testTitleLines = pdf.splitTextToSize(examData.testTitle, contentWidth - 20);
    pdf.text(testTitleLines, pageWidth / 2, 110, { align: 'center' });

    pdf.setFontSize(11);
    pdf.setTextColor(220, 220, 220);
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    pdf.text(`Generated on ${dateStr}`, pageWidth / 2, pageHeight - 50, { align: 'center' });

    // ============ PAGE 2: SUMMARY PAGE ============
    pdf.addPage();
    let yPosition = 30;

    // Title
    pdf.setFont(undefined, 'bold');
    pdf.setFontSize(16);
    pdf.setTextColor(30, 30, 30);
    pdf.text('Score Summary', margin, yPosition);
    yPosition += 10;

    pdf.setDrawColor(13, 110, 253);
    pdf.setLineWidth(0.8);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 12;

    // Summary boxes - Score, Percentage, Time
    const boxHeight = 22;
    const boxWidth = (contentWidth - 6) / 3;

    const boxes = [
      { label: 'Score', value: `${examData.score.toFixed(1)}/${examData.totalMarks}` },
      { label: 'Percentage', value: `${examData.percentage.toFixed(1)}%` },
      { label: 'Time Taken', value: `${Math.floor(examData.timeTaken / 60)}m ${examData.timeTaken % 60}s` },
    ];

    boxes.forEach((box, idx) => {
      const boxX = margin + idx * (boxWidth + 3);

      pdf.setFillColor(245, 247, 250);
      pdf.rect(boxX, yPosition, boxWidth, boxHeight, 'F');

      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.5);
      pdf.rect(boxX, yPosition, boxWidth, boxHeight);

      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(13, 110, 253);
      pdf.text(box.label, boxX + 3, yPosition + 7);

      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(13);
      pdf.setTextColor(30, 30, 30);
      pdf.text(box.value, boxX + 3, yPosition + 16);
    });

    yPosition += boxHeight + 12;

    // Question Statistics
    const correctCount = examData.questions.filter(q => q.user_answer === q.correct_answer).length;
    const incorrectCount = examData.questions.filter(q => q.user_answer && q.user_answer !== q.correct_answer).length;
    const unattemptedCount = examData.questions.filter(q => !q.user_answer).length;

    pdf.setFont(undefined, 'bold');
    pdf.setFontSize(12);
    pdf.setTextColor(30, 30, 30);
    pdf.text('Question Statistics', margin, yPosition);
    yPosition += 8;

    pdf.setFont(undefined, 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(50, 50, 50);

    const statsText = `Correct: ${correctCount}    Incorrect: ${incorrectCount}    Unattempted: ${unattemptedCount}`;
    pdf.text(statsText, margin + 2, yPosition);

    // ============ PAGE 3+: QUESTIONS ============
    pdf.addPage();
    yPosition = 30;
    addHeader();

    for (let i = 0; i < examData.questions.length; i++) {
      const question = examData.questions[i];
      const isCorrect = question.user_answer === question.correct_answer;
      const isUnattempted = !question.user_answer;

      // Calculate required space for this question
      const questionLines = pdf.splitTextToSize(question.question_text, contentWidth - 4).length;
      const optionLines = 4 * 3; // 4 options, ~3 lines height each
      const explanationLines = question.explanation ? pdf.splitTextToSize(question.explanation, contentWidth - 4).length : 0;
      const requiredSpace = 5 + questionLines * 3.5 + optionLines + (question.explanation ? 8 + explanationLines * 3 : 0) + 5;

      yPosition = checkPageBreak(requiredSpace, yPosition);

      // Question number and status
      const statusText = isUnattempted ? 'NOT ATTEMPTED' : isCorrect ? 'CORRECT' : 'INCORRECT';
      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(11);
      pdf.setTextColor(isCorrect ? 34 : isUnattempted ? 100 : 200, isCorrect ? 197 : 100, isCorrect ? 94 : 100);
      pdf.text(`Q${i + 1}. ${statusText}`, margin, yPosition);
      yPosition += 7;

      // Question text
      pdf.setFont(undefined, 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(30, 30, 30);
      const qLines = pdf.splitTextToSize(question.question_text, contentWidth - 4);
      pdf.text(qLines, margin + 2, yPosition);
      yPosition += qLines.length * 3.5 + 3;

      // Options
      const options = [
        { key: 'A', text: question.option_a },
        { key: 'B', text: question.option_b },
        { key: 'C', text: question.option_c },
        { key: 'D', text: question.option_d },
      ];

      pdf.setFontSize(8.5);

      options.forEach((option) => {
        const isUserAnswer = question.user_answer?.toUpperCase() === option.key;
        const isCorrectAnswer = question.correct_answer?.toUpperCase() === option.key;

        let indicator = '';
        if (isCorrectAnswer && isUserAnswer) {
          indicator = ' (Your Answer - Correct)';
          pdf.setTextColor(34, 197, 94);
          pdf.setFont(undefined, 'bold');
        } else if (isCorrectAnswer) {
          indicator = ' (Correct Answer)';
          pdf.setTextColor(34, 197, 94);
          pdf.setFont(undefined, 'normal');
        } else if (isUserAnswer) {
          indicator = ' (Your Answer)';
          pdf.setTextColor(239, 68, 68);
          pdf.setFont(undefined, 'bold');
        } else {
          pdf.setTextColor(50, 50, 50);
          pdf.setFont(undefined, 'normal');
        }

        const optionLabel = `${option.key}. ${option.text}${indicator}`;
        const optionTextLines = pdf.splitTextToSize(optionLabel, contentWidth - 6);
        pdf.text(optionTextLines, margin + 3, yPosition);
        yPosition += optionTextLines.length * 3 + 1;
      });

      yPosition += 2;

      // Explanation
      if (question.explanation) {
        yPosition = checkPageBreak(10, yPosition);

        pdf.setFont(undefined, 'bold');
        pdf.setFontSize(8.5);
        pdf.setTextColor(13, 110, 253);
        pdf.text('Explanation:', margin + 2, yPosition);
        yPosition += 5;

        pdf.setFont(undefined, 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(40, 40, 40);
        const explLines = pdf.splitTextToSize(question.explanation, contentWidth - 4);
        pdf.text(explLines, margin + 3, yPosition);
        yPosition += explLines.length * 3 + 3;
      }

      yPosition += 4;

      // Divider
      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.3);
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 4;
    }

    // Save PDF
    const timestamp = new Date().getTime();
    const testName = examData.testTitle
      .replace(/[^a-zA-Z0-9]/g, '-')
      .substring(0, 30)
      .toLowerCase();
    pdf.save(`exam-result-${testName}-${timestamp}.pdf`);

    console.log('[v0] PDF generated and downloaded successfully');
  } catch (error) {
    console.error('[v0] Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
}
