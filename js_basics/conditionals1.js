// Go over the following program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// The first console.log will execute because true evaluates as truthy in a conditional expression.

// The second console.log won't execute because the original string 'hello' is a truthy value and the ! negates it. This means that the conditional will evaluate as false and the block won't be run.

// The third console.log will execute because an empty array is a truthy value and !! will convert it to false and then to true. As a result, the block will execute.

// The fourth console.log should execute because the conditonal expression will first check myOtherString, which is '', a falsy value. It will then check myArray which is [], a truthy value and since || evaluates as truthy if either operand is truthy, the conditional evaluates as truthy and the block gets run.
