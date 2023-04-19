const head = document.querySelector('.countdown-display');

const myInt = setInterval(() => {
  if (head.textContent === '1') {
    clearInterval(myInt);
    setTimeout(() => {
      head.textContent = '~ Earth Beeeelooowww Us~';
    }, 500);
  } else {
    head.textContent = head.textContent -= 1;
  }
}, 1000);
