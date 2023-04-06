const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (e) {
  console.log('event.target:', e.target);
  console.log('event.target.tagName:', e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    const $task = e.target.closest('.task-list-item');
    console.log('e.target.closest():', $task);
    $task.remove();
  }
});
