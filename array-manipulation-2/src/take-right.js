/* exported takeRight */
function takeRight(array, count) {
  const arr = [];
  const nArr = [];
  for (let i = array.length - 1; i > 0; i--) {
    if (i > (array.length - count - 1)) {
      arr.push(array[i]);
    }
  }
  if (count > array.length && array.length !== 0) {
    arr.push(array[0]);
  }

  for (let i = arr.length; i > 0; i--) {
    nArr.push(arr[i - 1]);
  }
  return nArr;
}
