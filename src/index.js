import readlineSync from 'readline-sync';

const mainEngin = (getData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundCounts = 3;
  for (let i = 0; i < roundCounts; i += 1) {
    const [question, questionRight] = getData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (questionRight === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default mainEngin;
