/* exported reverseWords */
function reverseWords(string) {
  let newString = '';
  // const newString2 = '';
  for (let i = string.length - 1; i > 0; i--) {
    newString += string[i];
  }

  console.log(newString);
}
