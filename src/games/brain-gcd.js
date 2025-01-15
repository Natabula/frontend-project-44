import mainEngin from '../index.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const gcdResult = (num1, num2) => {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
  const description = ('Find the greatest common divisor of given numbers');

  const getData = () => {
    const numRandom1 = getRandomInt(0, 100);
    const numRandom2 = getRandomInt(0, 100);
    const question =  `${numRandom1}, ${numRandom2}`;
    const questionRight = `${gcdResult(numRandom1, numRandom2)}`;
    return [question, questionRight];
  }
  const startBrainGcd = () => mainEngin(getData, description);

  export default startBrainGcd;