const student = {
  firstName: 'Dylan',
  lastName: 'Dao',
  age: '28'
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'restauranteur';
console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

const vehicle = {
  make: 'Nissan',
  model: '240z',
  year: 1974
};
vehicle['color'] = 'tobacco metallic';
vehicle['isConvertible'] = false;
console.log(vehicle);
console.log('Value of vehicle.color:', vehicle['color']);
console.log('Value of vehicle.isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

const pet = {
  name: 'Cinnamon',
  type: 'snake'
};
delete pet.name;
delete pet.type;
console.log('value of pet.name', pet.name);
console.log('Value of pet:', pet);
