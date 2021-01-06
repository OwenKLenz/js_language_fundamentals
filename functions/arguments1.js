// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// When `a` is passed to `myValue()` as an argument, the local variable `b` is assigned to referenced the same value (7) as `a`. Now, the expression `b += 10` reassigns the local variable b instead of altering the value of `a`. The result is that `console.log` outputs 7.
