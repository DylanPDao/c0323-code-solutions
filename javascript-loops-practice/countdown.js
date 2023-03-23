/* exported countdown */
function countdown(number) {
  const down = [];
  for (let i = number; i >= 0; i--) {
    down.push(i);
  }
  return down;
}
