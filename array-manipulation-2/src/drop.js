/* exported drop */
function drop(array, counts) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i > counts - 1) {
      arr.push(array[i]);
    }
  }
  return arr;
}
