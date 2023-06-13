/* exported union */
function union(first, second) {
  const newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (newArr.indexOf(first[i]) === -1) {
      newArr.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (newArr.indexOf(second[j]) === -1) {
      newArr.push(second[j]);
    }
  }
  console.log(newArr);
  return newArr;
}
