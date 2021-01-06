// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This will log `This is local`. The reason for this is that `myVar` initialized on line 1 is a global variable. As a result, it is in scope within `someFunction` and the `myVar = 'This is local'` is a reassignment that changes the value referenced by the global `myVar`. Since `someFunction` is executed before `myVar` is logged, `myVar` gets reassigned and 'This is local' is output.
