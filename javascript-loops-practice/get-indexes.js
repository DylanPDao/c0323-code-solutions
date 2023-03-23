/* exported getIndexes */
function getIndexes(array) {
  const arr = [];
  for (const key in array) {
    arr.push(+key);
  }
  return arr;
}
