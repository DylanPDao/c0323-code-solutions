/* exported drop */
function drop(array, count) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i > count - 1) {
      arr.push(array[i]);
    }
  }
  return arr;
}
