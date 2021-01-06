// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// `var` variables have function scope. As a result, the inner `myVar` exists only in the local scope of `someFunction` and it shadows the outer `myVar` meaning that the reassignment has no effect on the value of the outer `myVar`. Consequently, `console.log(myVar);` will log `"This is global"`.
