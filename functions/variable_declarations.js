// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

console.log(a);

var a = 1;

// This will log `undefined` because `a` gets hoisted during the "creation" phase by the JS interpreter, but it is initially set to `undefined`. `a` doesn't get set to the value `1` until the assignment expression occurs at the end, after `a` has already been logged.
