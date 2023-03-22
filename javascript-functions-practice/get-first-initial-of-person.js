/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  const firstName = person.firstName;
  const firstLetter = firstName.charAt(0);
  return firstLetter;
}
