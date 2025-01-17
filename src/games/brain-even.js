import mainEngin from '../index.js';

function getRandomInt(min, max) {
  const localMin = Math.ceil(min);
  const localMax = Math.floor(max);
  return Math.floor(Math.random() * (localMax - localMin + 1)) + localMin;
}
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const description = ('Answer "yes" if the number is even, otherwise answer "no"');

const getData = () => {
  const question = getRandomInt(0, 100);
  const questionRight = isEven(question);
  return [question, questionRight];
};
const startBrainEven = () => mainEngin(getData, description);

export default startBrainEven;
