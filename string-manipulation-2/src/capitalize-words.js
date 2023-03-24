/* exported capitalizeWords */
function capitalizeWords(string) {
  const str = string.toLowerCase();
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    let cap = '';
    if (i === 0) {
      cap += str[0].toUpperCase();
      newStr += cap;
    } else if (str[i - 1] === ' ') {
      cap += string[i].toUpperCase();
      newStr += cap;
    } else {
      newStr += str[i];
    }
  }
  return (newStr);
}
