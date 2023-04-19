/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'The perimeter is ' + this.perimeter + ' and the area is ' +
    this.area + '.';
  }
}

console.log(Shape);
