/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(radius * radius, 2 * 3.14 * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, Radius: ${this.radius}`;
  }
}

const circle = new Circle(13);
console.log('circle:', circle.describe());
