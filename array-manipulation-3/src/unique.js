/* exported unique */
function unique(array) {
  const newArr = [];
  // return empty array if empty array is input
  if (array.length === 0) {
    return array;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (newArr.indexOf(array[i]) === -1) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
}
