/* exported tail */
function tail(array) {
  const arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
