// Get elements from HTML
const $bulb = document.querySelector('.bulb');
const $page = document.querySelector('.page');

$bulb.addEventListener('click', function (e) {
  if ($bulb.className === 'bulb on') {
    $bulb.className = 'bulb off';
    $page.className = 'page black';
  } else {
    $bulb.className = 'bulb on';
    $page.className = 'page white';
  }
});
