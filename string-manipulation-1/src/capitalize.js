/* exported capitalize */
function capitalize(word) {
  const words = word.toLowerCase();
  return words[0].toUpperCase() + words.slice(1);
}
