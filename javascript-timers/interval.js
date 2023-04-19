const head = document.querySelector('.countdown-display');

const myInt = setInterval(() => {
  if (head.textContent === '1') {
    clearInterval(myInt);
    head.textContent = '~ Earth Beeeelooowww Us~';
  } else {
    head.textContent = head.textContent -= 1;
  }
}, 1000);
