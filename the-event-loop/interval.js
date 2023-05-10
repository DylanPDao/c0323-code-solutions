let count = 3;
const intervalId = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count -= 1;
  } else {
    console.log('Blast off!');
    clearInterval(intervalId);
  }
}, 1000);
