/* exported ransomCase */
function ransomCase(string) {
  const stringU = string.toLowerCase();
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      str += stringU[i];
    } else {
      str += (stringU[i].toUpperCase());
    }
  }
  return str;
}
