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
  });

  let yPosition = 20;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;

  // Title and Header
  pdf.setFontSize(16);
  pdf.setTextColor(40, 40, 40);
  pdf.text('Exam Result Report', margin, yPosition);
  
  yPosition += 10;
  pdf.setFontSize(10);
  pdf.setTextColor(100, 100, 100);
  pdf.text(`Test: ${examData.testTitle}`, margin, yPosition);
  
  yPosition += 8;
  pdf.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPosition);

  // Score Summary Box
  yPosition += 15;
  pdf.setFillColor(240, 245, 250);
  pdf.rect(margin, yPosition - 5, contentWidth, 30, 'F');
  
  pdf.setFontSize(12);
  pdf.setTextColor(40, 40, 40);
  pdf.text(`Score: ${examData.score} / ${examData.totalMarks}`, margin + 5, yPosition);
  pdf.text(`Percentage: ${examData.percentage.toFixed(1)}%`, margin + 5, yPosition + 8);
  pdf.text(`Time Taken: ${Math.floor(examData.timeTaken / 60)} minutes`, margin + 5, yPosition + 16);

  yPosition += 40;

  // Questions Section
  pdf.setFontSize(11);
  pdf.setTextColor(40, 40, 40);
  pdf.text('Question-wise Analysis', margin, yPosition);

  yPosition += 10;

  for (let i = 0; i < examData.questions.length; i++) {
    const question = examData.questions[i];
    const isCorrect = question.user_answer === question.correct_answer;
    const isUnattempted = !question.user_answer;

    // Check if we need a new page
    if (yPosition > pageHeight - 50) {
      pdf.addPage();
      yPosition = 20;
    }

    // Question Number and Status
    const status = isUnattempted ? 'Unattempted' : isCorrect ? 'Correct ✓' : 'Incorrect ✗';
    const statusColor = isUnattempted ? [150, 150, 150] : isCorrect ? [34, 197, 94] : [239, 68, 68];
    
    pdf.setFillColor(...statusColor);
    pdf.rect(margin, yPosition - 5, contentWidth, 8, 'F');
    
    pdf.setFontSize(10);
    pdf.setTextColor(255, 255, 255);
    pdf.text(`Q${i + 1}: ${status}`, margin + 3, yPosition + 1);

    yPosition += 12;

    // Question Text
    pdf.setFontSize(9);
    pdf.setTextColor(40, 40, 40);
    const questionLines = pdf.splitTextToSize(question.question_text, contentWidth - 6);
    pdf.text(questionLines, margin + 3, yPosition);
    yPosition += questionLines.length * 5 + 3;

    // Options
    pdf.setFontSize(8);
    const options = [
      { key: 'A', text: question.option_a },
      { key: 'B', text: question.option_b },
      { key: 'C', text: question.option_c },
      { key: 'D', text: question.option_d },
    ];

    options.forEach((option) => {
      const isUserAnswer = question.user_answer?.toLowerCase() === option.key.toLowerCase();
      const isCorrectAnswer = question.correct_answer?.toLowerCase() === option.key.toLowerCase();

      let bgColor = [255, 255, 255];
      let textColor = [0, 0, 0];

      if (isCorrectAnswer) {
        bgColor = [220, 252, 231]; // light green
        textColor = [22, 163, 74]; // dark green
      } else if (isUserAnswer && !isCorrectAnswer) {
        bgColor = [254, 226, 226]; // light red
        textColor = [220, 38, 38]; // dark red
      }

      pdf.setFillColor(...bgColor);
      pdf.rect(margin + 3, yPosition - 3, contentWidth - 6, 6, 'F');
      
      pdf.setTextColor(...textColor);
      const optionText = `${option.key}. ${option.text}`;
      const optionLines = pdf.splitTextToSize(optionText, contentWidth - 12);
      
      pdf.text(optionLines, margin + 6, yPosition + 1);
      yPosition += optionLines.length * 4 + 2;

      if (isCorrectAnswer) {
        pdf.setTextColor(22, 163, 74);
        pdf.text('(Correct Answer)', contentWidth - margin - 30, yPosition - optionLines.length * 4);
      }
      if (isUserAnswer && !isCorrectAnswer) {
        pdf.setTextColor(220, 38, 38);
        pdf.text('(Your Answer)', contentWidth - margin - 30, yPosition - optionLines.length * 4);
      }
    });

    yPosition += 3;

    // Explanation if available
    if (question.explanation) {
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = 20;
      }

      pdf.setFillColor(240, 250, 245);
      pdf.rect(margin, yPosition - 3, contentWidth, 6, 'F');
      
      pdf.setFontSize(8);
      pdf.setTextColor(20, 83, 45);
      pdf.text('Explanation:', margin + 3, yPosition + 1);
      
      yPosition += 8;
      
      pdf.setFontSize(7);
      pdf.setTextColor(50, 50, 50);
      const explanationLines = pdf.splitTextToSize(question.explanation, contentWidth - 6);
      pdf.text(explanationLines, margin + 3, yPosition);
      yPosition += explanationLines.length * 4 + 5;
    }

    yPosition += 8;
  }

  // Save the PDF
  const timestamp = new Date().getTime();
  pdf.save(`exam-result-${timestamp}.pdf`);
}
