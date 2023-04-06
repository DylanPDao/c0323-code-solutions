const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if (e.target === $tab[i]) {
        e.target.className = 'tab active';
      }
      if ($tab[i] !== e.target) {
        $tab[i].className = 'tab';
      }
    }
    const $data = e.target.dataset.view;
    console.log($data);
    if (e.target.matches('.tab')) {
      for (let i = 0; i < $view.length; i++) {
        if ($data === $view[i].dataset.view) {
          $view[i].className = 'view';
        }
        if ($view[i].dataset.view !== $data) {
          $view[i].className = 'view hidden';
        }
      }
    }
  }
});
