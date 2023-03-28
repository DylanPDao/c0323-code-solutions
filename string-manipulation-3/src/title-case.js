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
  const newStr = title.toLowerCase().split(' ').map(word =>
    word.replace(word[0], word[0].toUpperCase()));

  const lower = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As',
    'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  for (i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'Javascript') {
      newStr[i] = 'JavaScript';
      continue;
    }
    if (newStr[i] === 'Api') {
      console.log('hello');
      newStr[i] = 'API';
      continue;
    }
    if (newStr[i].indexOf('-') !== -1) {
      const index = newStr[i].indexOf('-');
      console.log(index);
      // newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1, newStr[i].length);
      const newArr = newStr[i].split('');
      newArr[index + 1] = newArr[index + 1].toUpperCase();
      newStr[i] = newArr.join('');
      console.log(newArr);
    }
    for (j = 0; j < lower.length; j++) {
      if (newStr[i] === lower[j]) {
        newStr[i] = newStr[i].toLowerCase();
      }
    }
  }
  const final = newStr.join(' ');
  const final1 = final[0].toUpperCase() + final.slice(1, final.length);
  return final1;
}
