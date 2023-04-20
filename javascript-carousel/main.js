// global declarations
let intervalID = null;
const picture = document.querySelectorAll('.pic');
let count = 0;
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dot = document.querySelectorAll('.dot');
const dotRow = document.querySelector('.dot-row');

// get picture to swap every 2 seconds
dot[0].className = 'dot fa-solid fa-circle';
function swapPicture() {
  if (count === picture.length) {
    count = 0;
  }
  for (let i = 0; i < picture.length; i++) {
    const entryId = Number(picture[i].dataset.entryId);
    if (entryId !== count) {
      picture[i].className = 'pic hidden';
      dot[i].className = 'dot fa-regular fa-circle';
    } else {
      picture[i].className = 'pic';
      dot[i].className = 'dot fa-solid fa-circle';
    }
  }
  count++;
}

intervalID = setInterval(swapPicture, 3000);

// next arrow functionality
arrowLeft.addEventListener('click', (e) => {
  clearInterval(intervalID);
  if (count > 0) {
    count -= 2;
  }
  if (count < 0) {
    count = picture.length - 1;
  }
  swapPicture();
  intervalID = setInterval(swapPicture, 3000);
});

arrowRight.addEventListener('click', (e) => {
  clearInterval(intervalID);
  if (count === 5) {
    count = 0;
  }
  swapPicture();
  intervalID = setInterval(swapPicture, 3000);
});

// progress dot selection
dotRow.addEventListener('click', (e) => {
  if (e.target.className.includes('fa-circle') === true) {
    clearInterval(intervalID);
    count = Number(e.target.dataset.entryId);
    swapPicture();
    intervalID = setInterval(swapPicture, 3000);
  }
});
