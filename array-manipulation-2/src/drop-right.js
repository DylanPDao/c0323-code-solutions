/* exported dropRight */
function dropRight(array, count) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i < (array.length - count)) {
      arr.push(array[i]);
    }
  }
  return arr;
}
