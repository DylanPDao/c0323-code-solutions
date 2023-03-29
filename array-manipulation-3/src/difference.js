/* exported difference */
function difference(first, second) {
  const newArr1 = [];
  const newArr2 = [];
  for (let i = 0; i < first.length; i++) {
    let found = false;
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        found = true;
        break;
      }
    }
    if (found === false) {
      newArr1.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    let found = false;
    for (let j = 0; j < first.length; j++) {
      if (second[i] === first[j]) {
        found = true;
        break;
      }
    }
    if (found === false) {
      newArr2.push(second[i]);
    }
  }
  const answer = newArr1.concat(newArr2);
  return answer;
}
