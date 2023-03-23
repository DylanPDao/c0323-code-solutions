/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const added = word + suffix;
    arr.push(added);
  }
  return arr;
}
