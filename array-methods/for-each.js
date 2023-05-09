const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((e) => console.log(e));

const valuesReversed = values.reverse();
console.log('Reverse order:');
values.forEach((e, index) => console.log(values[index]));
