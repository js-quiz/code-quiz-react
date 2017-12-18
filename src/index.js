import Prism from 'prismjs';
import addRow from './components/textarea/textAreaAddRow';
import showRandomQuiz from './components/showRandomQuiz';
import checkAnswer from './components/checkAnswer';
import questions from '../static/questions';
import answers from '../static/answers';
import current from './components/current';
import showResult from './components/showResult';

window.addEventListener('load', () => {
  showRandomQuiz(questions);
  Prism.highlightAll();

  const $answer = document.getElementById('answer');
  const $nextQuiz = document.getElementById('next-quiz');
  const $textArea = document.getElementById('console-output');

  $nextQuiz.addEventListener('click', () => {
    showRandomQuiz(questions);
    Prism.highlightAll();
  });

  $textArea.addEventListener('keypress', () => {
    addRow('console-output');
  });

  $answer.addEventListener('click', () => {
    const userAnswer = $textArea.value;
    const answer = answers.find(answer => Object.keys(answer) === current.questionName);
    showResult(checkAnswer(userAnswer, answer));
  });
});
