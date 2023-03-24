/* exported truncate */
function truncate(length, string) {
  let str = '';
  str += string.slice(0, length);
  str += '...';
  return str;
}
