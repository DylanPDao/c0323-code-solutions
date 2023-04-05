// indexs the whole sentence
const index = document.querySelectorAll('span');
let i = 0;

// capture keydown event and adds it to value
document.addEventListener('keydown', function (e) {
  if (index[i].textContent === e.key) {
    index[i].className = 'yes';
    index[i + 1].className = 'on';
    i++;
  } else {
    index[i].className = 'on no';
  }
});
