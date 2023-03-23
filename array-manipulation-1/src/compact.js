/* exported compact */
function compact(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      arr.push(array[i]);
    }
  }
  console.log(arr);
  return arr;
}
