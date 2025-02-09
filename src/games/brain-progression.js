import mainEngin from '../index.js';
import getRandomInt from '../utils.js';

const description = ('What number is missing in the progression?');

const getData = () => {
  const start = getRandomInt(0, 100);
  const diff = getRandomInt(1, 5);
  const hiddenIndex = getRandomInt(0, 9);

  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + i * diff);
  }
  const questionRight = `${progression[hiddenIndex]}`;
  progression[hiddenIndex] = ('..');

  const question = progression.join(' ');

  return [question, questionRight];
};

const startBrainProgression = () => mainEngin(getData, description);

export default startBrainProgression;
