function ExampleConstructor() {}
console.log('Value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

const example = new ExampleConstructor();
console.log('Example:', example);

const test = example instanceof ExampleConstructor;
console.log('Value of instanceof test:', test);
