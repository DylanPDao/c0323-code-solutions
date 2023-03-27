/* exported isAnagram */
function isAnagram(fristString, secondString) {
  const a = fristString.replaceAll(' ', '').toLowerCase().split('').sort().join('');
  const b = secondString.replaceAll(' ', '').toLowerCase().split('').sort().join('');
  return (a === b);
}
