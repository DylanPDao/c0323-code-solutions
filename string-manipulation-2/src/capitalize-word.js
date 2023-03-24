/* exported capitalizeWord */
function capitalizeWord(word) {
  const words = word.toLowerCase();
  let cap = words[0].toUpperCase();
  cap += words.slice(1);
  if (words.includes('script')) {
    return 'JavaScript';
  }
  return cap;
}
