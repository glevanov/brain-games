import gameTemplate from '../gameTemplate';
import { getNumber } from '../util';

const MIN_NUM = 1;
const MAX_NUM = 50;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);
const getOperator = () => operators[getNumber(0, operators.length - 1)];

export default () => {
  const goal = 'What is the result of the expression?';
  const getTask = () => {
    const firstNum = getNumber(MIN_NUM, MAX_NUM);
    const secondNum = getNumber(MIN_NUM, MAX_NUM);
    const currentOperator = getOperator();

    const currentQuestion = `${firstNum} ${currentOperator} ${secondNum}`;
    const currentAnswer = `${operations[currentOperator](firstNum, secondNum)}`;
    return {
      question: currentQuestion,
      answer: currentAnswer,
    };
  };
  gameTemplate(goal, getTask);
};
