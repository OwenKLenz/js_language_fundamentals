// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// [1, 2, 10] will be logged. When `a` is passed as an argument to the function, the local variable created from the parameter `b` is assigned to reference the same array as `a`. The reason for this seemingly strange output is that arrays are mutable. The `b[2] += 7` expression is actually mutating the array that is being referenced by both `b` and `a`. This mutation is then evident when `a`s value is logged. 
