const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((e) => e % 2 === 0);
console.log('Even numbers', evenNumbers);

const noD = names.filter((e) => !e.includes('d') && !e.includes('D'));
console.log('No D', noD);
