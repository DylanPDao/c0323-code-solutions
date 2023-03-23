/* exported filterOutNulls */
function filterOutNulls(values) {
  const arr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      arr.push(values[i]);
    }
  }
  return arr;
}
