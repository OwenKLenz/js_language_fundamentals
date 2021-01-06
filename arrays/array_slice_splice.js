// Array Slice and Splice

function slice(array, begin, end) {
  let theSlice = [];
  begin = Math.min(begin, array.length);
  end = Math.min(end, array.length);


  for (let index = begin; index < end; index++) {
    theSlice.push(array[index]);
  }

  return theSlice;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

  // Removing deleteCount Element
  // - Iterate deleteCount times from index 
  //   - append each element to new array 

  // Chop off all elements from start to end
  // - decapitatedArray gets array.slice(start)
  // - array.length becomes start

  // shift the first deleteCount elements off decaptiatedArray
  // unshift ...elements on the front of the array
  // concatenate the decapitated ARray onto the orignal array

function splice(array, start, deleteCount, ...elements) {
  start = Math.min(start, array.length);
  
  let returnArray = array.slice(start, start + deleteCount);
  let decapitatedArray = array.slice(start);
  array.length = start;

  surgeryOnHead(decapitatedArray, deleteCount);
  decapitatedArray.unshift(...elements);
  array.push(...decapitatedArray);

  return returnArray;
}

function surgeryOnHead(array, deleteCount) {
  for (let count = 1; count <= deleteCount; count++) {
    array.shift();
  }
}

splice([1, 2, 3, 4, 5, 6], 2, 2)

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
