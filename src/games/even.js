import readlineSync from 'readline-sync';

const MIN_NUM = 1;
const MAX_NUM = 100;
const MAX_STAGES = 3;

const isEven = num => num % 2 === 0;

const getNumber = (min = MIN_NUM, max = MAX_NUM) => Math.round(Math.random() * (max - min)) + min;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  for (let stage = 0; stage < MAX_STAGES; stage += 1) {
    const currentNumber = getNumber();
    const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';

    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log('Incorrect! Game over');
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
