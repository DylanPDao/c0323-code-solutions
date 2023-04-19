const head = document.querySelector('.countdown-display');

const myInt = setInterval(() => {
  if (head.textContent === '1') {
    clearInterval(myInt);
  } else {
    head.textContent = head.textContent -= 1;
  }
}, 1000);

setInterval(() => {
  if (head.textContent === '1') {
    head.textContent = '~ Earth Beeeelooowww Us~';
  }
}, 2000);
