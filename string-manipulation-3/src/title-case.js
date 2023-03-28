/* exported titleCase */
function titleCase(title) {
  let i;
  let j;
  const newStr = title.toLowerCase().split(' ').map(word =>
    word.replace(word[0], word[0].toUpperCase()));

  const lower = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As',
    'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  for (i = 0; i < newStr.length; i++) {
    // if (newStr[i].includes('Javascript')) {
    //   const newArr = newStr[i].split('');
    //   newStr[i] = 'JavaScript';
    //   continue;
    // }
    // if (newStr[i].indexOf(':') !== -1) {
    //   console.log(newStr[i]);
    //   continue;
    // }
    if (newStr[i] === 'Api') {
      newStr[i] = 'API';
      continue;
    }
    if (newStr[i].indexOf('-') !== -1) {
      const index = newStr[i].indexOf('-');
      const newArr = newStr[i].split('');
      newArr[index + 1] = newArr[index + 1].toUpperCase();
      newStr[i] = newArr.join('');
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
