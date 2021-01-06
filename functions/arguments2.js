// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// This will also log 7. The `a` inside myValue is a local variable, different from the `a` declared on line 1. As a result, the reassignment inside the function definition has no effect on the outer variable `a`.
