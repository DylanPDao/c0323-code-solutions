// declaring all variables
const $container = document.querySelector('.container');
const $openBtn = document.querySelector('.open-btn');
const $column = document.querySelector('.column');
const $question = document.querySelector('.question');
const $noBtn = document.querySelector('.no-btn');

// turn off to on
$openBtn.addEventListener('click', function (e) {
  $container.className = 'container container-on';
  $openBtn.className = 'open-btn open-on';
  $column.className = 'column column-on';
  $question.className = 'question question-on';
  $noBtn.className = 'no-btn no-btn-on';
});

// turn off to off
$noBtn.addEventListener('click', function (e) {
  $container.className = 'container container-off';
  $openBtn.className = 'open-btn open-off';
  $column.className = 'column column-off';
  $question.className = 'question question-off';
  $noBtn.className = 'no-btn no-btn-off';
});
