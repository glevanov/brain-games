import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const minNum = 1;
const maxNum = 50;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);
const getOperator = () => operators[getNumber(0, operators.length - 1)];

const goal = 'What is the result of the expression?';
const getTask = () => {
  const firstNum = getNumber(minNum, maxNum);
  const secondNum = getNumber(minNum, maxNum);
  const currentOperator = getOperator();

  const question = `${firstNum} ${currentOperator} ${secondNum}`;
  const answer = `${operations[currentOperator](firstNum, secondNum)}`;
  return {
    question,
    answer,
  };
};

export default () => {
  gameTemplate(goal, getTask);
};
