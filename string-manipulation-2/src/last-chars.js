/* exported lastChars */
function lastChars(length, string) {
  let newStr = '';
  if (length > string.length) {
    newStr += string.slice(0);
  } else {
    newStr += string.slice(string.length - length);
  }
  return newStr;
}
