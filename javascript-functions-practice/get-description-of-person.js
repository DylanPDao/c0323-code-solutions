/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const des = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return des;
}
