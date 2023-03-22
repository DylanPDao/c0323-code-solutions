/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  const firstInitial = firstName.charAt(0);
  const lastInitial = lastName.charAt(0);
  const initials = firstInitial + lastInitial;
  return initials;
}
