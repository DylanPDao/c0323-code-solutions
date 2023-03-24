/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const fIn = string.charAt(firstIndex);
  const sIn = string.charAt(secondIndex);
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newStr += sIn;
    } else if (i === secondIndex) {
      newStr += fIn;
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
