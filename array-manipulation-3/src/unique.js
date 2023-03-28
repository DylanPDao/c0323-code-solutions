/* exported unique */
function unique(array) {
  const newArr = [];
  let i;
  let j;
  // return empty array if empty array is input
  if (array.length === 0) {
    return array;
  } else {
    for (i = 0; i < array.length; i++) {
      for (j = newArr.length + 1; j > 0; j--) {
        if (array[i] !== newArr[j]) {
          newArr.push(array[i]);
        }
      }
    }
    console.log(newArr);
    return newArr;
  }
}
