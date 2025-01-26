import mainEngin from '../index.js';
import getRandomInt from '../utils.js';

const description = ('Answer "yes" if given number is prime. Otherwise answer "no"');
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getData = () => {
  const question = getRandomInt(0, 20);
  const questionRight = isPrime(question) ? 'yes' : 'no';
  return [question, questionRight];
};
const startBrainPrime = () => mainEngin(getData, description);

export default startBrainPrime;
