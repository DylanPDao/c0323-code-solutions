/* exported zip */
function zip(first, second) {
  const results = [];
  for (let i = 0; i < first.length; i++) {
    results.push([first[i], second[i]]);
  }
  if (results[results.length - 1][1] === undefined) {
    results.pop();
  }
  return results;
}
