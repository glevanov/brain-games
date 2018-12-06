import gameTemplate from '../gameTemplate';
import { isEven, getNumber } from '../util';

const MIN_NUM = 1;
const MAX_NUM = 100;

export default () => {
  const goal = 'Answer "yes" if number even otherwise answer "no".';
  const getTask = () => {
    const currentQuestion = getNumber(MIN_NUM, MAX_NUM);
    const currentAnswer = isEven(currentQuestion) ? 'yes' : 'no';
    return {
      question: currentQuestion,
      answer: currentAnswer,
    };
  };
  gameTemplate(goal, getTask);
};
