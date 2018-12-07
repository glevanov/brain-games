import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const minNum = 1;
const maxNum = 100;

const isEven = num => num % 2 === 0;

const goal = 'Answer "yes" if number even otherwise answer "no".';
const getTask = () => {
  const question = getNumber(minNum, maxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => {
  gameTemplate(goal, getTask);
};
