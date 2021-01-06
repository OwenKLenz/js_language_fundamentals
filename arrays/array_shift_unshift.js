// Array Shift and Unshift

function shift(array) {
  if (array.length === 0) return;

  let shiftedElement = array[0];

  for (let index = 0; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return shiftedElement;
}

function unshift(array, ...newElements) {
  // Iterate from length to newElement.length - 1
    // - Array at current index + newElement.length equals array at current index
  // Iterate over newElements by index prepending them at the appropriate index
  // return length.

  let rightShift = newElements.length;
  let oldLength = array.length;

  for (let index = oldLength - 1; index >= 0; index--) {
    array[index + rightShift] = array[index];
  }

  for (let index = 0; index < newElements.length; index++) {
    array[index] = newElements[index];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
