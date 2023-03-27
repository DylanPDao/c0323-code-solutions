/* exported reverseWords */
function reverseWords(string) {
  const newArr = [];
  const newArr2 = [];
  let temp = [];
  for (let i = string.length - 1; i > -1; i--) {
    newArr.push(string[i]);
  }
  for (let i = 0; i < newArr.length; i++) {
    temp.push(newArr[i]);
    if (i === ' ') {
      newArr2.push(temp);
      temp = [];
    }
  }

  console.log(newArr2);
}
