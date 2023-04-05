const messageData = {};
const $contForm = document.querySelector('#contact-form');

$contForm.addEventListener('submit', function (e) {
  e.preventDefault();
  messageData.name = $contForm.elements.name.value;
  messageData.email = $contForm.elements.email.value;
  messageData.message = $contForm.elements.message.value;
  console.log(messageData);
  $contForm.reset();
});
