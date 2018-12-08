import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const minNum = 1;
const maxNum = 100;

const getGCD = (firstNum, secondNum) => {
  if (secondNum === 0) return firstNum;
  return getGCD(secondNum, firstNum % secondNum);
};

const goal = 'Find the greatest common divisor of given numbers.';
const getTask = () => {
  const firstNum = getNumber(minNum, maxNum);
  const secondNum = getNumber(minNum, maxNum);

  const question = `${firstNum} ${secondNum}`;
  const answer = `${getGCD(firstNum, secondNum)}`;
  return {
    question,
    answer,
  };
};

export default () => {
  gameTemplate(goal, getTask);
};
