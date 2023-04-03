let clicked = 0;
const hotButton = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function () {
  clicked += 1;
  clickCount.textContent = clicked;
  if (clicked < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clicked < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clicked < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clicked < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clicked < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
});
