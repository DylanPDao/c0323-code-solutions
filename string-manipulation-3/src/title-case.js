/* exported titleCase */
// function titleCase(title) {
//   let newStr = title.replace(/\w\S*/g, word =>
//     word[0].toUpperCase() + word.substring(1).toLowerCase());

//   let i;
//   let j;
//   const lower = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As',
//     'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
//   for (i = 0, j = lower.length; i < j; i++) {
//     newStr = newStr.replace(new RegExp('\\s' + lower[i] + '\\s', 'g'),
//       word => word.toLowerCase());
//   }

//   const special = ['API', 'JavaScript'];
//   for (i = 0, j = special.length; i < j; i++) {
//     newStr = newStr.replace(new RegExp('\\b' + special[i] + '\\b', 'g'),
//       special[i]);
//   }
//   return newStr;
// }

function titleCase(title) {
  let i;
  let j;
  let newStr = title.toLowerCase().split(' ').map(word =>
    word.replace(word[0], word[0].toUpperCase())).join(' ');
  newStr = newStr.split(' ');

  const lower = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As',
    'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  // debugger;
  for (i = 0; i < newStr.length; i++) {
    for (j = 0; j < lower.length; i++) {
      if (newStr[i] === lower[j]) {
        newStr[i] = newStr[i].toLowerCase;
      }
    }
  }
  return newStr;
}
