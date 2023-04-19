/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width);
    this.width = width;
    this.area = width * width;
    this.perimeter = width * 4;
  }

  describe() {
    return 'The perimeter is ' + this.perimeter + ', the area is ' +
      this.area + ' , and the width is ' + this.width + '.';
  }
}

console.log(Square);
