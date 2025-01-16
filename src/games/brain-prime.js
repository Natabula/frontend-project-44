import mainEngin from '../index.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const description = ('Answer "yes" if given number is prime. Otherwise answer "no"');

  const getData = () => {
    const question = getRandomInt(0, 20);
    let questionResult = "yes";
    if (question < 2) {
        questionResult = "no"; 
    }   else {
    for (let i = 2; i < question; i ++) {
        if (question % i === 0) {
        questionResult = "no"; 
        break;  
        }
    }
}
    const questionRight = `${questionResult}`;
    return [question, questionRight];
  }
  const startBrainPrime = () => mainEngin(getData, description);

  export default startBrainPrime;