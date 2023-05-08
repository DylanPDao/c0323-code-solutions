/* exported omit */
function omit(source, keys) {
  const obj = {};
  for (const key in source) {
    if (key !== keys[0] && key !== keys[1]) {
      obj[key] = source[key];
    }
  }
  return obj;
}
