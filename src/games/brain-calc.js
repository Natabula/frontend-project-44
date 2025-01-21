import mainEngin from '../index.js';
import getRandomInt from '../utils.js';

const operators = ['+', '-', '*'];

const description = ('What is the result of the expression?');

const getData = () => {
  const randonIndex = getRandomInt(0, 2);
  const operator = operators[randonIndex];
  const operand1 = getRandomInt(0, 100);
  const operand2 = getRandomInt(0, 100);
  const question = `${operand1} ${operator} ${operand2}`;
  let questionResult;
  switch (operator) {
    case '+':
      questionResult = operand1 + operand2;
      break;
    case '-':
      questionResult = operand1 - operand2;
      break;
    case '*':
      questionResult = operand1 * operand2;
      break;
    default:
      questionResult = NaN;
  }
  const questionRight = String(questionResult);
  return [question, questionRight];
};

const startBrainCalc = () => mainEngin(getData, description);

export default startBrainCalc;
