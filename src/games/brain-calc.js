import mainEngin from '../index.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const operators = ['+', '-', '*'];

const description = ('What is the result of the expression?');

const getData = () => {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const operand1 = getRandomInt(0, 100);
  const operand2 = getRandomInt(0, 100);
  const question = `${operand1} ${operator} ${operand2}`;
  let questionResult;
  if (operator === '+') {
    questionResult = operand1 + operand2;
  } else if (operator === '-') {
    questionResult = operand1 - operand2;
  } else if (operator === '*') {
    questionResult = operand1 * operand2;
  }
  const questionRight = String(questionResult);
  return [question, questionRight];
};

const startBrainCalc = () => mainEngin(getData, description);

export default startBrainCalc;
