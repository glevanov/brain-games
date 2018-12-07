import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const goal = 'What number is missing in the progression?';
const getTask = () => {
  const question = null;
  const answer = null;
  return {
    question,
    answer,
  };
};
export default () => {
  gameTemplate(goal, getTask);
};
