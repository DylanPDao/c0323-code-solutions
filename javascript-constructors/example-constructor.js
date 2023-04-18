function ExampleConstructor() {}
console.log('Value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', ExampleConstructor);

const example = new ExampleConstructor();
console.log('Example:', example);

const test = example instanceof ExampleConstructor;
console.log('Value of instanceof test:', test);
