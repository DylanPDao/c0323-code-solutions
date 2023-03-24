/* exported firstChars */
function firstChars(length, string) {
  let newStr = '';
  if (string === '') {
    return '';
  } else if (length > string.length) {
    for (let i = 0; i < string.length + 1; i++) {
      console.log(newStr);
      newStr += string[i];
    }
  } else {
    for (let i = 0; i < length; i++) {
      newStr += string[i];
    }
    return newStr;
  }
}
