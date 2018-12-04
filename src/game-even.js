import readlineSync from 'readline-sync';

const MIN_NUM = 0;
const MAX_NUM = 100;
const MAX_STAGES = 3;
const WIN_THRESHOLD = MAX_STAGES / 2;
let correctAnswers = 0;
let currentStage = 1;

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getNumber = (min = MIN_NUM, max = MAX_NUM) => Math.round(Math.random() * (max - min)) + min;

const isAnswerCorrect = (answer, num) => {
  const correctYes = (answer === 'yes' && isEven(num));
  const correctNo = (answer === 'no' && !isEven(num));
  if (correctYes || correctNo) {
    correctAnswers += 1;
    return true;
  }
  return false;
};

const askQuestion = () => {
  const questionNumber = getNumber();
  console.log(`Question: ${questionNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`${
    isAnswerCorrect(userAnswer, questionNumber)
      ? 'Correct!'
      : 'Incorrect!'
  }`);
};

const checkVictory = () => {
  if (correctAnswers === 0) {
    return false;
  }
  if (correctAnswers > WIN_THRESHOLD) {
    return true;
  }
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}\n`);
  while (currentStage <= MAX_STAGES) {
    console.log(askQuestion());
    currentStage += 1;
  }
  console.log(`${
    checkVictory()
      ? `Congratulations, ${inputName}!`
      : `You lose, ${inputName} :(`
  }`);
};
