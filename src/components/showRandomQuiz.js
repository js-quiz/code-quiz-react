import current from './current';
import Prism from "prismjs";

function showRandomQuiz(questions) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }

  const rand = getRandomIntInclusive(0, questions.length - 1);
  const currentQuestion = questions[rand];
  document.getElementById('code').innerHTML = currentQuestion.value;

  current.question = currentQuestion;
  Prism.highlightAll();
}

export default showRandomQuiz;
