function convertMinutesToSeconds(minutes) {
  const minute = (minutes * 60);
  return minute;
}
const minutes = convertMinutesToSeconds(5);
console.log(minutes);

function greet(name) {
  const greetings = 'Hey, ' + name;
  return greetings;
}
const greetings = greet('Beavis');
console.log(greetings);

function getArea(width, height) {
  const area = (width * height);
  return area;
}
const area = getArea(17, 42);
console.log(area);

function getFirstName(person) {
  const getFirst = person.firstName;
  return getFirst;
}
const first = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(first);

function getLastElement(array) {
  const lastE = (array[array.length - 1]);
  return lastE;
}
const last = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(last);
