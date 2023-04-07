const array = [
  { title: 'Charolettes Web', author: 'E.B.White', isbn: '1234' },
  { title: 'Harry Potter', author: 'J.K. Rowling', isbn: '5678' },
  { title: 'Tidying', author: 'Marie Condo', isbn: '9012' }
];

console.log('arry:', array);
console.log('array typeof:,', typeof array);

const jsString = JSON.stringify(array);
console.log('JSON arry:', JSON.stringify(array));
console.log('JSON array typeof:,', typeof jsString);

const jsonFormString = '{ "numberID": "111", "String name": "charmander" }';

console.log('typeof jsonFormString:', typeof jsonFormString);

const obj = JSON.parse(jsonFormString);
console.log(obj);
