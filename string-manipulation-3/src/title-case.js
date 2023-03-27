/* exported titleCase */
function titleCase(title) {
  const newStr = title.replace(/\w\S*/g, word =>
    word[0].toUpperCase() + word.substring(1).toLowerCase());

  const lower = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As',
    'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  console.log(lower);
  console.log(newStr);
}
