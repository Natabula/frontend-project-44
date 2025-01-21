import mainEngin from '../index.js';
import getRandomInt from '../utils.js';

const gcdResult = (num1, num2) => {
  let localNum1 = num1;
  let localNum2 = num2;
  while (localNum2 !== 0) {
    const temp = localNum2;
    localNum2 = localNum1 % localNum2;
    localNum1 = temp;
  }
  return localNum1;
};
const description = ('Find the greatest common divisor of given numbers');

const getData = () => {
  const numRandom1 = getRandomInt(0, 100);
  const numRandom2 = getRandomInt(0, 100);
  const question = `${numRandom1} ${numRandom2}`;
  const questionRight = `${gcdResult(numRandom1, numRandom2)}`;
  return [question, questionRight];
};
const startBrainGcd = () => mainEngin(getData, description);

export default startBrainGcd;
