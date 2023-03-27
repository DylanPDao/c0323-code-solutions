/* exported titleCase */
function titleCase(title) {
  let newStr = title.replace(/\w\S*/g, word =>
    word[0].toUpperCase() + word.substring(1).toLowerCase());

  let i;
  let j;
  const lower = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As',
    'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  for (i = 0, j = lower.length; i < j; i++) {
    newStr = newStr.replace(new RegExp('\\s' + lower[i] + '\\s', 'g'),
      word => word.toLowerCase());
  }

  const special = ['API', 'JavaScript'];
  for (i = 0, j = special.length; i < j; i++) {
    newStr = newStr.replace(new RegExp('\\b' + special[i] + '\\b', 'g'),
      special[i]);
  }
  return newStr;
}
