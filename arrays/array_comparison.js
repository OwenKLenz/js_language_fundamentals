// Array Comparisons

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  let sortedArray1 = [...array1].sort();
  let sortedArray2 = [...array2].sort();

  for (let index = 0; index < array1.length; index++) {
    if (sortedArray1[index] !== sortedArray2[index]) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([2, 1], [1, 1]));                        // true
let a = [1, 2, 3, 4];
let b = [4, 1, 2, 3];

console.log(areArraysEqual(a, b));                        // true
console.log(a); // [1, 2, 3, 4]
console.log(b); // [4, 1, 2, 3]
