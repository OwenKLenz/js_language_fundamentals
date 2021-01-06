let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice(); // Creates a shallow copy of myArray and assigns it to myOtherArray

// Alternatively...

const myOtherArray2 = [];

for (let index = 0; index < myArray.length; index++) {
  myOtherArray2.push(myArray[index]);
}

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]
console.log(myOtherArray2); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]
console.log(myOtherArray2); // [1, 2, 3, 4]
