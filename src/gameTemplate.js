import readlineSync from 'readline-sync';

const MAX_STAGES = 3;

export default (goal, getTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${goal}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let stage = 0; stage < MAX_STAGES; stage += 1) {
    const task = getTask();
    const { question, answer: correctAnswer } = task;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log('Incorrect! Game over');
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
