/* exported titleCase */
function titleCase(title) {
  const newStr = title.split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase());
  return newStr.join(' ');
}
