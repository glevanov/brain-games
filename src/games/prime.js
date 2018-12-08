import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const minNum = 1;
const maxNum = 100;

const goal = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getTask = () => {
  const question = `${null}`;
  const answer = `${null}`;
  return {
    question,
    answer,
  };
};
export default () => {
  gameTemplate(goal, getTask);
};
