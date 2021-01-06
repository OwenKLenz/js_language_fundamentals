// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

logValue();

function logValue() {
  console.log('Hello, world!');
}

// Thanks to hoisting, JS is already aware of the definition of the function declaration `logValue` before the program is executed. This means that logValue will not raise an error, even though the function definition is written below it.

// Further Exploration

// This refactored version will log `'string'`. This is because after hoisting, the function declaration now occurs before the assignment of `logValue` to `"foo"`. As a result, `var logValue = 'foo'` will actually reassign the value of the variable that was referencing the `logValue` function. Now `typeof 'foo'` will return `"string"`.

// The hoisted code would look like this.

function logValue() {
  console.log('Hello, world!');
}

var logValue = 'foo';

console.log(typeof logValue); // 'string'
