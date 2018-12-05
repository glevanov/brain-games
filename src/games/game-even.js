import readlineSync from 'readline-sync';

const MIN_NUM = 1;
const MAX_NUM = 100;
const MAX_STAGES = 3;

const isEven = num => num % 2 === 0;

const getNumber = (min = MIN_NUM, max = MAX_NUM) => Math.round(Math.random() * (max - min)) + min;

export default () => {
  let currentStage = 1;
  let userFailing = false;

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}\n`);
  while (currentStage <= MAX_STAGES) {
    const currentNumber = getNumber();
    const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';

    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log('Incorrect! Game over');
      userFailing = true;
      break;
    }
    console.log('Correct!');
    currentStage += 1;
  }
  if (!userFailing) {
    console.log(`Congratulations, ${inputName}!`);
  }
};
