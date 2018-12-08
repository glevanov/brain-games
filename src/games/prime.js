import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const minNum = 1;
const maxNum = 100;

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  if (num <= 1 || num % 2 === 0 || !Number.isInteger(num)) {
    return false;
  }

  const start = 3;
  const limit = Math.sqrt(num);
  for (let i = start; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const goal = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getTask = () => {
  const number = getNumber(minNum, maxNum);

  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};
export default () => {
  gameTemplate(goal, getTask);
};
