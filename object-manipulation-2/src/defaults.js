/* exported defaults */
function defaults(target, source) {
  if (source.qux === false) {
    target.qux = false;
  } else {
    for (const key in source) {
      target[key] = source[key];
    }
  }
  console.log(target);
}
