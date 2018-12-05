import readlineSync from 'readline-sync';

const welcome = 'Welcome to the Brain Games!';

const greetUser = name => `Hello, ${name}`;
const getUserName = () => readlineSync.question('May I have your name? ');
const getQuestion = question => (`Question: ${question}`);
const getAnswer = () => readlineSync.question('Your answer: ');
const getCongratulation = name => `Congratulations, ${name}`;

export default (task) => {
  console.log(welcome);
  console.log(`${task}\n`);
  const userName = getUserName();
  console.log(greetUser(userName));
  console.log(getCongratulation(userName));
};

/*
$ brain-calc

Welcome to the Brain Games!
What is the result of the expression?

// greeting
May I have your name? Sam
Hello, Sam!

Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
*/
