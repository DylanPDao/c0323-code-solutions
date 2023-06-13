/* exported intersection */
function intersection(first, second) {
  const newArr1 = [];
  for (let i = 0; i < first.length; i++) {
    let same = false;
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        same = true;
        break;
      }
    }
    if (same === true) {
      newArr1.push(first[i]);
    }
  }
  return newArr1;
}
