/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  return (string[0] === 'J');
}

function isOldEnoughToDrink(person) {
  return (person.age >= 21);
}

function isOldEnoughToDrive(person) {
  return (person.age >= 16);
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 7 && pH >= 0) {
    console.log('acid');
  } else if (pH === 7) {
    console.log('neutral');
  } else if (pH > 7 && pH <= 14) {
    console.log('base');
  } else {
    console.log('invalid pH level');
  }
}

function introduceWarnerBro(name) {
  switch (name.toLowerCase()) {
    case 'yakko':
      console.log('We\'re the warner brothers!');
      break;
    case 'wakko':
      console.log('We\'re the warner brothers!');
      break;
    case 'dot':
      console.log('I\'m cute~');
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

function recommendMovie(genre) {
  switch (genre.toLowerCase()) {
    case 'action':
      console.log('Die Hard');
      break;
    case 'comedy':
      console.log('The Big Lebowski');
      break;
    case 'horror':
      console.log('The Ring');
      break;
    case 'drama':
      console.log('Awaken');
      break;
    case 'musical':
      console.log('High School Musical');
      break;
    case 'sci-fi':
      console.log('The Mandalorian');
      break;
    default:
      console.log('try again bud');
  }
}
