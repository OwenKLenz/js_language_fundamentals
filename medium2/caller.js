// Double Caller

function makeDoubler(name) {
  return function (number) {
    console.log(`This function was called by ${name}.`);
    return number + number;
  }
}


const doubler = makeDoubler('Victor');
const otherDoubler = makeDoubler('Joseph');
console.log(doubler(5));                             // returns 10
console.log(otherDoubler(12));

// logs:
// This function was called by Victor.
