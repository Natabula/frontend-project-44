import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const isEven = (num) => num % 2 === 0 ? "yes" : "no";

const startBrainEven = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no"');

    const roundCounts = 3;
    for (let i = 0; i < roundCounts; i += 1) {
        const randomNumber = getRandomInt(0, 100);
        const questionRight = isEven(randomNumber);

        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question("Your answer: ");

        if (questionRight === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionRight}'`);
            console.log(`Let's try again, ${userName}!`)
            return;
        }
    }
    console.log(`Congratulations, ${userName}!`)
};
export default startBrainEven;