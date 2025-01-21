import mainEngin from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;
const description = ('Answer "yes" if the number is even, otherwise answer "no"');

const getData = () => {
  const question = getRandomInt(0, 100);
  const questionRight = isEven(question) ? 'yes' : 'no';
  return [question, questionRight];
};
const startBrainEven = () => mainEngin(getData, description);

export default startBrainEven;
