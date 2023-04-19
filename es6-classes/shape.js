/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `Area: ${this.area}, Perimeter: ${this.perimeter}`;
  }
}

const shape = new Shape(144, 42);
console.log(shape.describe());
