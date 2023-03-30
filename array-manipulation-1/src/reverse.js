/* exported reverse */
function reverse(array) {
  const arr = [];
  for (let i = array.length - 1; i > -1; i--) {
    arr.push(array[i]);
  }
  return arr;
}
