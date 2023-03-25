/* exported invert */
function invert(source) {
  const obj = {};
  for (const key in source) {
    obj[source[key]] = key;
    // obj.key =
  }
  return obj;
}
