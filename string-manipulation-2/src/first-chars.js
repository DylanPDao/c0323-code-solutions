/* exported firstChars */
// function firstChars(length, string) {
//   let newStr = '';
//   if (string === '') {
//     return '';
//   } else if (length > string.length) {
//     for (let i = 0; i < string.length; i++) {
//       newStr += string[i];
//     }
//   } else {
//     for (let i = 0; i < length; i++) {
//       newStr += string[i];
//     }
//     return newStr;
//   }
// }

function firstChars(length, string) {
  let newStr = '';
  if (length > string.length) {
    newStr += string.slice(0);
  } else {
    newStr += string.slice(0, length);
  }
  return newStr;
}
