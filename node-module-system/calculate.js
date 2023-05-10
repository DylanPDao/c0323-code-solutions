import add from './add.js';
import divide from './divide.js';
import multiple from './multiply.js';
import subtract from './subtract.js';

const arg1 = Number(process.argv[2]);
const arg2 = process.argv[3];
const arg3 = Number(process.argv[4]);

if (arg2 === 'plus') {
  console.log('result: ', add(arg1, arg3));
} else if (arg2 === 'minus') {
  console.log('result: ', subtract(arg1, arg3));
} else if (arg2 === 'times') {
  console.log('result: ', multiple(arg1, arg3));
} else if (arg2 === 'over') {
  console.log('result: ', divide(arg1, arg3));
} else {
  console.log('write it right');
}
