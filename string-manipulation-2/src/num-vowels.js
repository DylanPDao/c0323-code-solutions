/* exported numVowels */
function numVowels(string) {
  let count = 0;
  const str = string.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i' || str[i] === 'u') {
      count++;
    }
  }
  return count;
}
