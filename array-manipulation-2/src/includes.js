/* exported includes */
function includes(array, value) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      arr.push(array[i]);
    }
  }
  if (arr.length === 0) {
    return false;
  } else {
    return true;
  }
}
