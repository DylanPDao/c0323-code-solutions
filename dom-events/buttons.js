function handleClick(event) {
  console.log('button clicked');
  console.log('Event:', event);
  console.log('Event.target:', event.target);
}

const elClick = document.querySelector('.click-button');

elClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hover');
  console.log('Event:', event);
  console.log('Event.target:', event.target);
}

const elMouse = document.querySelector('.hover-button');

elMouse.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button doubleClicked');
  console.log('Event:', event);
  console.log('Event.target:', event.target);
}

const elDbl = document.querySelector('.double-click-button');

elDbl.addEventListener('dblclick', handleDoubleClick);
