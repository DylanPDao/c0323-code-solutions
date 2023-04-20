const $userList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    const $li = document.createElement('li');
    const userName = xhr.response[i].name;
    $li.textContent = userName;
    $userList.appendChild($li);
  }
});
xhr.send();
