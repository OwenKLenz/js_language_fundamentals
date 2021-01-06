// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// The `console.log` in `someFunction` will log 'This is global' because `myVar` is a global variable, available within the scope of someFunction.
