/* exported flatten */
function flatten(array) {
  const flat = [].concat.apply([], array);
  return flat;
}
