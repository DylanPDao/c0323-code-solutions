/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.firstName + ' ' + this.lastName +
  ' and I am studying ' + this.subject + '.';
};

const grace = new Student('Grace', 'Hopper', 'compilers');
const dennis = new Student('Dennis', 'Ritchie', 'systems programming');
console.log('Student Grace:', grace);
console.log('Student Dennis', dennis);

const edsger = new Student('Edgar', 'Dijkstra', 'computer science');
const eFull = edsger.getFullName();
console.log('Edsger full name:', eFull);

const donald = new Student('Donald', 'Knuth', 'algorithms');
const donaldFullName = donald.getFullName();
console.log('Donald full name:', donaldFullName);

const graceIntro = grace.getIntroduction();
console.log('Grace intro:', graceIntro);

const james = new Student('James', 'Gosling', 'language design');
const jamesIntroduction = james.getIntroduction();
console.log('James Intro:', jamesIntroduction);
