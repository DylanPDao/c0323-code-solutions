function handleFocus(event) {
  console.log('Focus');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.value:', event.target.value);
  console.log('event.target.name:', event.target.name);
}

const $user = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $message = document.querySelector('#user-message');

$user.addEventListener('focus', handleFocus);
$user.addEventListener('blur', handleBlur);
$user.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
