import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('\n');
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}`);
};
