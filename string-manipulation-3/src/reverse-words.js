/* exported reverseWords */
function reverseWords(string) {
  const reversedArr = string.split(' ').map(word =>
    word.split('').reverse().join(''));
  return reversedArr.join(' ');
}
