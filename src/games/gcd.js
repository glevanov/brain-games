import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const minNum = 1;
const maxNum = 100;

const getGCD = (firstNum, secondNum) => {
  if (firstNum === secondNum) {
    return firstNum;
  }

  const getDivisors = (num) => {
    const result = [];
    for (let i = num; i > 0; i -= 1) {
      if (num % i === 0) {
        result.push(i);
      }
    }
    return result;
  };

  const getCommonDivisors = (firstArr, secondArr) => firstArr.filter(
    it => secondArr.indexOf(it) !== -1,
  );

  const firstNumDivisors = getDivisors(firstNum);
  const secondNumDivisors = getDivisors(secondNum);

  return getCommonDivisors(firstNumDivisors, secondNumDivisors)[0];
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
