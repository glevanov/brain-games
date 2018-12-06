import gameTemplate from '../gameTemplate';

const MIN_NUM = 1;
const MAX_NUM = 100;

const isEven = num => num % 2 === 0;

const getNumber = (min = MIN_NUM, max = MAX_NUM) => Math.round(Math.random() * (max - min)) + min;

export default () => {
  const goal = 'Answer "yes" if number even otherwise answer "no".';
  const getTask = () => {
    const currentQuestion = getNumber();
    const currentAnswer = isEven(currentQuestion) ? 'yes' : 'no';
    return {
      question: currentQuestion,
      answer: currentAnswer,
    };
  };
  gameTemplate(goal, getTask);
};
