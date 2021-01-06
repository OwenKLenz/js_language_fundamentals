// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// 'This is local' will be logged. The reason for this is that the when looking for the value of myVar to log it, JS will search lexically. This means that it will first check within the current local scope for a variable named `myVar`. If it didn't find that variable, it would check the next outer scope, the global scope in this case. However, because a variable named `myVar` exists in the local scope, the value referenced by that `myVar` is used and `'This is local'` is logged.
