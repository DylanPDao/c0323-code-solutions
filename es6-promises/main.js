import takeAChance from './take-a-chance.js';

const chancePromise = takeAChance('Dylan');

chancePromise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.error(value.message);
  });
