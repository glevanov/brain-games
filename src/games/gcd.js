import gameTemplate from '../gameTemplate';

const goal = 'Find the greatest common divisor of given numbers.';
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
