// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// If a variable isn't found during a lexical lookup, and the first use of that variable name is an assignment, as is the case inside `someFunction`, JS will actually create a new global variable by that name that is now visible in the global scope. This allows `console.log` to output the value of `myVar` ("This is global") as long as `someFunction` has been invoked, as is the case here.
