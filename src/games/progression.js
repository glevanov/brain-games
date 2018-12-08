import gameTemplate from '../gameTemplate';
import getNumber from '../utils';

const minNum = 1;
const maxNum = 30;
const progressionLength = 10;

const getProgression = (step, base, length) => {
  const result = [];
  for (let i = 1; i <= length; i += 1) {
    result.push(step * i + base);
  }
  return result;
};

const goal = 'What number is missing in the progression?';
const getTask = () => {
  const progression = getProgression(
    getNumber(minNum, maxNum),
    Math.floor(getNumber(minNum, maxNum) / 2),
    progressionLength,
  );
  const answerIndex = getNumber(0, progressionLength - 1);
  const firstHalf = progression.slice(0, answerIndex).join(' ');
  const secondHalf = progression.slice(answerIndex + 1).join(' ');

  const question = `${firstHalf} .. ${secondHalf}`.trim();
  const answer = `${progression[answerIndex]}`;
  return {
    question,
    answer,
  };
};
export default () => {
  gameTemplate(goal, getTask);
};
