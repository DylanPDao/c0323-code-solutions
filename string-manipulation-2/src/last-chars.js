/* exported lastChars */
function lastChars(length, string) {
  var startIndex = Math.max(0, string.length - length);
  return string.slice(startIndex);
}
