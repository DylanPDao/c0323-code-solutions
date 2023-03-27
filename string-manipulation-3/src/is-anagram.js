/* exported isAnagram */
function isAnagram(fristString, secondString) {
  const fristString1 = fristString.replaceAll(' ', '');
  const secondString1 = secondString.replaceAll(' ', '');
  const firstA = [];
  const secondA = [];
  for (let i = 0; i < fristString1.length; i++) {
    firstA.push(fristString[i]);
  }
  for (let i = 0; i < secondString1.length; i++) {
    secondA.push(secondString[i]);
  }
  const a = firstA.sort();
  const b = secondA.sort();
  return (a === b);
}
