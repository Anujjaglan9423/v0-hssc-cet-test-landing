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
  // Create a temporary container to render HTML content
  const container = document.createElement('div');
  container.style.width = '210mm';
  container.style.padding = '0';
  container.style.margin = '0';
  container.style.background = '#f5f7fa';
  container.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';

  // ============ COVER PAGE ============
  const coverPage = document.createElement('div');
  coverPage.style.width = '210mm';
  coverPage.style.height = '297mm';
  coverPage.style.padding = '0';
  coverPage.style.margin = '0';
  coverPage.style.background = 'linear-gradient(135deg, #0D6EFD 0%, #0B5ED7 100%)';
  coverPage.style.color = 'white';
  coverPage.style.display = 'flex';
  coverPage.style.flexDirection = 'column';
  coverPage.style.justifyContent = 'center';
  coverPage.style.alignItems = 'center';
  coverPage.style.textAlign = 'center';
  coverPage.style.pageBreakAfter = 'always';
  coverPage.style.boxSizing = 'border-box';

  const coverTitle = document.createElement('h1');
  coverTitle.textContent = 'EXAM RESULT REPORT';
  coverTitle.style.fontSize = '48px';
  coverTitle.style.fontWeight = 'bold';
  coverTitle.style.margin = '0 0 40px 0';
  coverTitle.style.letterSpacing = '2px';

  const testTitle = document.createElement('h2');
  testTitle.textContent = examData.testTitle;
  testTitle.style.fontSize = '32px';
  testTitle.style.fontWeight = '600';
  testTitle.style.margin = '20px 40px';
  testTitle.style.wordWrap = 'break-word';
  testTitle.style.whiteSpace = 'normal';

  const coverDate = document.createElement('p');
  coverDate.textContent = `Generated on ${new Date().toLocaleString()}`;
  coverDate.style.fontSize = '16px';
  coverDate.style.opacity = '0.9';
  coverDate.style.marginTop = '60px';

  coverPage.appendChild(coverTitle);
  coverPage.appendChild(testTitle);
  coverPage.appendChild(coverDate);
  container.appendChild(coverPage);

  // ============ SUMMARY PAGE ============
  const summaryPage = document.createElement('div');
  summaryPage.style.width = '210mm';
  summaryPage.style.minHeight = '297mm';
  summaryPage.style.padding = '20mm';
  summaryPage.style.margin = '0';
  summaryPage.style.background = '#f5f7fa';
  summaryPage.style.pageBreakAfter = 'always';
  summaryPage.style.boxSizing = 'border-box';

  const summaryTitle = document.createElement('h2');
  summaryTitle.textContent = 'Score Summary';
  summaryTitle.style.fontSize = '24px';
  summaryTitle.style.fontWeight = 'bold';
  summaryTitle.style.color = '#1e1e1e';
  summaryTitle.style.marginBottom = '30px';
  summaryTitle.style.borderBottom = '3px solid #0D6EFD';
  summaryTitle.style.paddingBottom = '10px';

  summaryPage.appendChild(summaryTitle);

  // Summary boxes
  const summaryBoxes = document.createElement('div');
  summaryBoxes.style.display = 'grid';
  summaryBoxes.style.gridTemplateColumns = 'repeat(3, 1fr)';
  summaryBoxes.style.gap = '20px';
  summaryBoxes.style.marginBottom = '40px';

  const boxes = [
    { label: 'Score', value: `${examData.score.toFixed(1)}/${examData.totalMarks}`, color: '#0D6EFD' },
    { label: 'Percentage', value: `${examData.percentage.toFixed(1)}%`, color: '#22C55E' },
    { label: 'Time Taken', value: `${Math.floor(examData.timeTaken / 60)}m ${examData.timeTaken % 60}s`, color: '#F97316' },
  ];

  boxes.forEach((box) => {
    const boxDiv = document.createElement('div');
    boxDiv.style.background = box.color;
    boxDiv.style.color = 'white';
    boxDiv.style.padding = '25px';
    boxDiv.style.borderRadius = '10px';
    boxDiv.style.textAlign = 'center';
    boxDiv.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';

    const label = document.createElement('p');
    label.textContent = box.label;
    label.style.fontSize = '14px';
    label.style.fontWeight = '600';
    label.style.margin = '0 0 10px 0';
    label.style.opacity = '0.9';

    const value = document.createElement('p');
    value.textContent = box.value;
    value.style.fontSize = '28px';
    value.style.fontWeight = 'bold';
    value.style.margin = '0';

    boxDiv.appendChild(label);
    boxDiv.appendChild(value);
    summaryBoxes.appendChild(boxDiv);
  });

  summaryPage.appendChild(summaryBoxes);

  // Statistics section
  const stats = document.createElement('div');
  stats.style.background = 'white';
  stats.style.padding = '25px';
  stats.style.borderRadius = '10px';
  stats.style.marginTop = '30px';

  const statsTitle = document.createElement('h3');
  statsTitle.textContent = 'Question Statistics';
  statsTitle.style.fontSize = '18px';
  statsTitle.style.fontWeight = 'bold';
  statsTitle.style.color = '#1e1e1e';
  statsTitle.style.marginBottom = '20px';

  stats.appendChild(statsTitle);

  const correctCount = examData.questions.filter(q => q.user_answer === q.correct_answer).length;
  const incorrectCount = examData.questions.filter(q => q.user_answer && q.user_answer !== q.correct_answer).length;
  const unattemptedCount = examData.questions.filter(q => !q.user_answer).length;

  const statItems = [
    { label: 'Correct Answers', count: correctCount, color: '#22C55E' },
    { label: 'Incorrect Answers', count: incorrectCount, color: '#EF4444' },
    { label: 'Unattempted', count: unattemptedCount, color: '#9CA3AF' },
  ];

  const statGrid = document.createElement('div');
  statGrid.style.display = 'grid';
  statGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  statGrid.style.gap = '20px';

  statItems.forEach((item) => {
    const statItem = document.createElement('div');
    statItem.style.textAlign = 'center';
    statItem.style.padding = '15px';
    statItem.style.borderLeft = `4px solid ${item.color}`;

    const label = document.createElement('p');
    label.textContent = item.label;
    label.style.fontSize = '12px';
    label.style.color = '#666';
    label.style.margin = '0 0 5px 0';
    label.style.fontWeight = '600';

    const count = document.createElement('p');
    count.textContent = item.count.toString();
    count.style.fontSize = '28px';
    count.style.fontWeight = 'bold';
    count.style.color = item.color;
    count.style.margin = '0';

    statItem.appendChild(label);
    statItem.appendChild(count);
    statGrid.appendChild(statItem);
  });

  stats.appendChild(statGrid);
  summaryPage.appendChild(stats);

  container.appendChild(summaryPage);

  // ============ QUESTIONS PAGES ============
  for (let i = 0; i < examData.questions.length; i++) {
    const question = examData.questions[i];
    const isCorrect = question.user_answer === question.correct_answer;
    const isUnattempted = !question.user_answer;

    const questionPage = document.createElement('div');
    questionPage.style.width = '210mm';
    questionPage.style.minHeight = '297mm';
    questionPage.style.padding = '20mm';
    questionPage.style.margin = '0';
    questionPage.style.background = '#f5f7fa';
    if (i < examData.questions.length - 1) {
      questionPage.style.pageBreakAfter = 'always';
    }
    questionPage.style.boxSizing = 'border-box';

    // Question header
    const qHeader = document.createElement('div');
    qHeader.style.marginBottom = '20px';

    const qNumber = document.createElement('h3');
    qNumber.style.fontSize = '20px';
    qNumber.style.fontWeight = 'bold';
    qNumber.style.margin = '0 0 10px 0';
    qNumber.style.color = '#1e1e1e';
    qNumber.textContent = `Question ${i + 1} of ${examData.questions.length}`;

    // Status badge
    const statusBadge = document.createElement('div');
    statusBadge.style.display = 'inline-block';
    statusBadge.style.padding = '8px 16px';
    statusBadge.style.borderRadius = '6px';
    statusBadge.style.fontSize = '12px';
    statusBadge.style.fontWeight = 'bold';
    statusBadge.style.marginBottom = '15px';

    if (isUnattempted) {
      statusBadge.style.background = '#E5E7EB';
      statusBadge.style.color = '#6B7280';
      statusBadge.textContent = '⊘ NOT ATTEMPTED';
    } else if (isCorrect) {
      statusBadge.style.background = '#DCFCE7';
      statusBadge.style.color = '#166534';
      statusBadge.textContent = '✓ CORRECT ANSWER';
    } else {
      statusBadge.style.background = '#FEE2E2';
      statusBadge.style.color = '#991B1B';
      statusBadge.textContent = '✗ INCORRECT ANSWER';
    }

    qHeader.appendChild(qNumber);
    qHeader.appendChild(statusBadge);
    questionPage.appendChild(qHeader);

    // Question text
    const qText = document.createElement('div');
    qText.style.background = 'white';
    qText.style.padding = '20px';
    qText.style.borderRadius = '8px';
    qText.style.marginBottom = '20px';
    qText.style.borderLeft = '4px solid #0D6EFD';

    const qLabel = document.createElement('p');
    qLabel.style.fontSize = '12px';
    qLabel.style.color = '#0D6EFD';
    qLabel.style.fontWeight = 'bold';
    qLabel.style.margin = '0 0 8px 0';
    qLabel.textContent = 'QUESTION';

    const qContent = document.createElement('p');
    qContent.style.fontSize = '16px';
    qContent.style.lineHeight = '1.6';
    qContent.style.color = '#1e1e1e';
    qContent.style.margin = '0';
    qContent.style.wordWrap = 'break-word';
    qContent.style.whiteSpace = 'normal';
    qContent.textContent = question.question_text;

    qText.appendChild(qLabel);
    qText.appendChild(qContent);
    questionPage.appendChild(qText);

    // Options
    const optionsContainer = document.createElement('div');
    optionsContainer.style.marginBottom = '20px';

    const options = [
      { key: 'A', text: question.option_a },
      { key: 'B', text: question.option_b },
      { key: 'C', text: question.option_c },
      { key: 'D', text: question.option_d },
    ];

    options.forEach((option) => {
      const isUserAnswer = question.user_answer?.toUpperCase() === option.key;
      const isCorrectAnswer = question.correct_answer?.toUpperCase() === option.key;

      const optionDiv = document.createElement('div');
      optionDiv.style.padding = '15px';
      optionDiv.style.marginBottom = '12px';
      optionDiv.style.borderRadius = '8px';
      optionDiv.style.border = '2px solid #E5E7EB';
      optionDiv.style.background = 'white';

      if (isCorrectAnswer && isUserAnswer) {
        optionDiv.style.background = '#DCFCE7';
        optionDiv.style.borderColor = '#16A34A';
      } else if (isCorrectAnswer) {
        optionDiv.style.background = '#DCFCE7';
        optionDiv.style.borderColor = '#16A34A';
      } else if (isUserAnswer) {
        optionDiv.style.background = '#FEE2E2';
        optionDiv.style.borderColor = '#DC2626';
      }

      const optionText = document.createElement('p');
      optionText.style.fontSize = '14px';
      optionText.style.fontWeight = '600';
      optionText.style.margin = '0 0 5px 0';
      optionText.style.color = isCorrectAnswer ? '#166534' : isUserAnswer ? '#991B1B' : '#1e1e1e';
      optionText.style.wordWrap = 'break-word';
      optionText.style.whiteSpace = 'normal';

      let optionLabel = `${option.key}. ${option.text}`;
      if (isCorrectAnswer && isUserAnswer) {
        optionLabel += ' ✓ (Your Answer - Correct)';
      } else if (isCorrectAnswer) {
        optionLabel += ' ✓ (Correct Answer)';
      } else if (isUserAnswer) {
        optionLabel += ' ✗ (Your Answer)';
      }
      optionText.textContent = optionLabel;

      optionDiv.appendChild(optionText);
      optionsContainer.appendChild(optionDiv);
    });

    questionPage.appendChild(optionsContainer);

    // Explanation
    if (question.explanation) {
      const explanationDiv = document.createElement('div');
      explanationDiv.style.background = '#EFF6FF';
      explanationDiv.style.border = '2px solid #0D6EFD';
      explanationDiv.style.borderRadius = '8px';
      explanationDiv.style.padding = '15px';
      explanationDiv.style.marginTop = '20px';

      const explLabel = document.createElement('p');
      explLabel.style.fontSize = '12px';
      explLabel.style.fontWeight = 'bold';
      explLabel.style.color = '#0D6EFD';
      explLabel.style.margin = '0 0 10px 0';
      explLabel.textContent = '📖 EXPLANATION';

      const explContent = document.createElement('p');
      explContent.style.fontSize = '14px';
      explContent.style.lineHeight = '1.6';
      explContent.style.color = '#1e1e1e';
      explContent.style.margin = '0';
      explContent.style.wordWrap = 'break-word';
      explContent.style.whiteSpace = 'normal';
      explContent.textContent = question.explanation;

      explanationDiv.appendChild(explLabel);
      explanationDiv.appendChild(explContent);
      questionPage.appendChild(explanationDiv);
    }

    container.appendChild(questionPage);
  }

  // Append to body temporarily
  document.body.appendChild(container);

  try {
    // Convert to canvas using html2canvas
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#f5f7fa',
      allowTaint: true,
    });

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

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Save the PDF
    const timestamp = new Date().getTime();
    const testName = examData.testTitle.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 30);
    pdf.save(`exam-result-${testName}-${timestamp}.pdf`);
  } finally {
    // Remove temporary container
    document.body.removeChild(container);
  }
}
