/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
    this.area = (radius * radius) * 3.14;
    this.perimeter = 2 * 3.14 * radius;
  }

  describe() {
    return 'The perimeter is ' + this.perimeter + ', the area is ' +
      this.area + ' , and the radius is ' + this.radius + '.';
  }
}

console.log(Circle);
