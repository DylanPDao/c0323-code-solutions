function convertMinutesToSeconds(minutes) {
  const minute = (minutes * 60);
  return minute;
}
convertMinutesToSeconds(5);
console.log(convertMinutesToSeconds(5));

function greet(name) {
  const greetings = 'Hey, ' + name;
  return greetings;
}
greet('Beavis');
console.log(greet('Beavis'));

function getArea(width, height) {
  const area = (width * height);
  return area;
}
getArea(17, 42);
console.log(getArea(17, 42));

function getFirstName(person) {
  const getFirst = person.firstName;
  return getFirst;
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  const lastE = (array[array.length - 1]);
  return lastE;
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
