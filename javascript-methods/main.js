const x = 10;
const y = 20;
const z = 30;
const maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

const heroes = [
  'ironMan',
  'hulk',
  'blackWidow',
  'thor'
];

let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  { title: 'Charolettes Web', author: 'E.B.White' },
  { title: 'Harry Potter', author: 'J.K. Rowling' },
  { title: 'Tidying', author: 'Marie Condo' }
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

const fullName = 'Dylan Dao';
const firstAndLastName = fullName.split(' ');
console.log(fullName);
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
