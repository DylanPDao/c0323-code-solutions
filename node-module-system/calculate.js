import add from './add.js';
import divide from './divide.js';
import multiply from './multiply.js';
import subtract from './subtract.js';

const integer1 = Number(process.argv[2]);
const operator = process.argv[3];
const integer2 = Number(process.argv[4]);

if (operator === 'plus') {
  console.log('result: ', add(integer1, integer2));
} else if (operator === 'minus') {
  console.log('result: ', subtract(integer1, integer2));
} else if (operator === 'times') {
  console.log('result: ', multiply(integer1, integer2));
} else if (operator === 'over') {
  console.log('result: ', divide(integer1, integer2));
} else {
  console.log('write it right');
}
