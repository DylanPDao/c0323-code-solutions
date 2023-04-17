/* exported yakko, wakko, dot */

const yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother',
  describe: function () {
    const description = this.name + ' is a ' +
                      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

const wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother',
  describe: function () {
    const description = this.name + ' is a ' +
                      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

const dot = {
  age: 10,
  name: 'Dot',
  role: 'sister',
  describe: function () {
    const description = this.name + ' is a ' +
                      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};
