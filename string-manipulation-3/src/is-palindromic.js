/* exported isPalindromic */
function isPalindromic(string) {
  const noSp = string.replaceAll(' ', '');
  let reversedString = '';
  for (let i = noSp.length - 1; i > -1; i--) {
    reversedString += noSp[i];
  }
  return (reversedString === noSp);
}
