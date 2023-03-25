/* exported pick */
function pick(source, keys) {
  const obj = {};
  for (const key in source) {
    if (keys[0] === key) {
      obj[key] = source[key];
    } else {
      if (keys[1] === key) {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
