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
    const margin = 15;
    const contentWidth = pageWidth - 2 * margin;

    // ============ PAGE 1: COVER PAGE ============
    pdf.setFillColor(13, 110, 253);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');

    pdf.setFont(undefined, 'bold');
    pdf.setFontSize(36);
    pdf.setTextColor(255, 255, 255);
    pdf.text('EXAM RESULT REPORT', pageWidth / 2, 80, { align: 'center' });

    pdf.setFontSize(20);
    pdf.setFont(undefined, 'normal');
    const testTitleLines = pdf.splitTextToSize(examData.testTitle, contentWidth);
    pdf.text(testTitleLines, pageWidth / 2, 120, { align: 'center' });

    pdf.setFontSize(12);
    pdf.setTextColor(220, 220, 220);
    const dateStr = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    pdf.text(`Generated on ${dateStr}`, pageWidth / 2, 180, { align: 'center' });

    // ============ PAGE 2: SUMMARY PAGE ============
    pdf.addPage();
    let yPosition = margin;

    pdf.setFont(undefined, 'bold');
    pdf.setFontSize(22);
    pdf.setTextColor(13, 110, 253);
    pdf.text('Score Summary', margin, yPosition);
    yPosition += 12;

    pdf.setDrawColor(13, 110, 253);
    pdf.setLineWidth(0.8);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // Summary boxes
    const boxHeight = 20;
    const boxWidth = (contentWidth - 8) / 3;

    const summaryData = [
      { 
        label: 'Score', 
        value: `${examData.score.toFixed(1)}/${examData.totalMarks}`,
        color: [13, 110, 253]
      },
      { 
        label: 'Percentage', 
        value: `${examData.percentage.toFixed(1)}%`,
        color: [34, 197, 94]
      },
      { 
        label: 'Time Taken', 
        value: `${Math.floor(examData.timeTaken / 60)}m ${examData.timeTaken % 60}s`,
        color: [249, 115, 22]
      },
    ];

    let boxX = margin;
    summaryData.forEach((box) => {
      pdf.setFillColor(...box.color);
      pdf.rect(boxX, yPosition, boxWidth, boxHeight, 'F');

      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.text(box.label, boxX + 5, yPosition + 6);

      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(14);
      pdf.text(box.value, boxX + 5, yPosition + 15);

      boxX += boxWidth + 4;
    });

    yPosition += boxHeight + 15;

    // Statistics section
    pdf.setFillColor(240, 240, 240);
    pdf.rect(margin, yPosition - 8, contentWidth, 35, 'F');

    pdf.setFont(undefined, 'bold');
    pdf.setFontSize(12);
    pdf.setTextColor(30, 30, 30);
    pdf.text('Question Statistics', margin + 5, yPosition);

    const correctCount = examData.questions.filter(q => q.user_answer === q.correct_answer).length;
    const incorrectCount = examData.questions.filter(q => q.user_answer && q.user_answer !== q.correct_answer).length;
    const unattemptedCount = examData.questions.filter(q => !q.user_answer).length;

    yPosition += 8;
    pdf.setFont(undefined, 'normal');
    pdf.setFontSize(10);

    pdf.setTextColor(34, 197, 94);
    pdf.text(`Correct: ${correctCount}`, margin + 10, yPosition);
    
    pdf.setTextColor(239, 68, 68);
    pdf.text(`Incorrect: ${incorrectCount}`, margin + 60, yPosition);
    
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Unattempted: ${unattemptedCount}`, margin + 110, yPosition);

    // ============ PAGE 3+: QUESTIONS ============
    for (let i = 0; i < examData.questions.length; i++) {
      const question = examData.questions[i];
      const isCorrect = question.user_answer === question.correct_answer;
      const isUnattempted = !question.user_answer;

      if (yPosition > pageHeight - 80) {
        pdf.addPage();
        yPosition = margin;
      }

      // Question header
      const questionNum = i + 1;
      let statusText = 'NOT ATTEMPTED';
      let statusColor = [100, 100, 100];
      let statusBgColor = [230, 230, 230];

      if (isCorrect) {
        statusText = 'CORRECT';
        statusColor = [34, 197, 94];
        statusBgColor = [220, 252, 231];
      } else if (!isUnattempted) {
        statusText = 'INCORRECT';
        statusColor = [239, 68, 68];
        statusBgColor = [254, 226, 226];
      }

      pdf.setFillColor(...statusBgColor);
      pdf.rect(margin, yPosition - 2, contentWidth, 8, 'F');

      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(...statusColor);
      pdf.text(`Q${questionNum}. ${statusText}`, margin + 3, yPosition + 3);
      yPosition += 11;

      // Question text
      pdf.setFont(undefined, 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(30, 30, 30);
      const questionLines = pdf.splitTextToSize(question.question_text, contentWidth - 4);
      pdf.text(questionLines, margin + 2, yPosition);
      yPosition += questionLines.length * 4.5 + 3;

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

        let optionBgColor = [255, 255, 255];
        let optionTextColor = [50, 50, 50];

        if (isCorrectAnswer && isUserAnswer) {
          optionBgColor = [220, 252, 231];
          optionTextColor = [22, 163, 74];
        } else if (isCorrectAnswer) {
          optionBgColor = [220, 252, 231];
          optionTextColor = [22, 163, 74];
        } else if (isUserAnswer) {
          optionBgColor = [254, 226, 226];
          optionTextColor = [220, 38, 38];
        }

        pdf.setFillColor(...optionBgColor);
        pdf.rect(margin + 2, yPosition - 2.5, contentWidth - 4, 6, 'F');

        pdf.setFont(undefined, isUserAnswer || isCorrectAnswer ? 'bold' : 'normal');
        pdf.setTextColor(...optionTextColor);

        let optionLabel = `${option.key}. ${option.text}`;
        if (isCorrectAnswer && isUserAnswer) {
          optionLabel += ' (Your Answer - Correct)';
        } else if (isCorrectAnswer) {
          optionLabel += ' (Correct Answer)';
        } else if (isUserAnswer) {
          optionLabel += ' (Your Answer)';
        }

        const optionLines = pdf.splitTextToSize(optionLabel, contentWidth - 8);
        pdf.text(optionLines, margin + 4, yPosition + 0.5);
        yPosition += optionLines.length * 4 + 1;
      });

      yPosition += 2;

      // Explanation
      if (question.explanation) {
        if (yPosition > pageHeight - 40) {
          pdf.addPage();
          yPosition = margin;
        }

        pdf.setFillColor(240, 248, 255);
        pdf.setDrawColor(13, 110, 253);
        pdf.setLineWidth(0.3);
        pdf.rect(margin + 2, yPosition - 2, contentWidth - 4, 6, 'FD');

        pdf.setFont(undefined, 'bold');
        pdf.setFontSize(8.5);
        pdf.setTextColor(13, 110, 253);
        pdf.text('Explanation:', margin + 4, yPosition + 1);

        yPosition += 7;

        pdf.setFont(undefined, 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(40, 40, 40);
        const explanationLines = pdf.splitTextToSize(question.explanation, contentWidth - 6);
        pdf.text(explanationLines, margin + 3, yPosition);
        yPosition += explanationLines.length * 3.8 + 2;
      }

      yPosition += 4;

      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.2);
      pdf.line(margin + 2, yPosition, pageWidth - margin - 2, yPosition);
      yPosition += 3;
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
