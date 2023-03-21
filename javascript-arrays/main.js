const colors = [
  'red',
  'white',
  'blue'
];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
const america = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(america);
colors[2] = 'green';
const mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(mexico);
console.log('Values in colors array:', colors);

const students = [
  'Nimrod',
  'Sarah',
  'Bryan',
  'Dylan'
];
const numberOfStudents = students.length;
const classroom = 'There are ' + numberOfStudents + ' students in the class.';
console.log(classroom);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('The last student in the array is ', lastStudent);
console.log('value of students:', students);
