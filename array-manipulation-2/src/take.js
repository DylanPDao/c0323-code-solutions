/* exported take */
function take(array, count) {
  const arr = [];
  if (array.length !== 0) {
    for (let i = 0; i < count; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
