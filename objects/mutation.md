# Mutation

`array2` will contain the strings originally held by `array1` before the elements in `array1` that begin with the letter "C" were reassinged to an uppercase version. This is because `array1` and `array2` are different objects, so while the reassignment in the second loop will mutate `array1`, `array2` remains unaffected.

**Further Exploration**
- What would happen if an object literal was part of the array1 elements pushed to array2? Would changes made to the object literal in array1 be reflected in array2?
  - Yes, the objects contained within `array1` and `array2` are initially the same, so any mutating that was done to those objects (if they were mutable objects, ie: an object literal) would be reflected in both.

- How would you change the code so that any changes made to array1 in the second for loop get reflected to array2?
  - You could perform the reassignment of `array1` elements before pushing the elements of `array1` to `array2`.
  - You could also perform the reassignment of "C" names for both `array1` and `array2` at the current index.

 ```js
const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
    array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
    if (array1[i].startsWith('C')) {
          array1[i] = array1[i].toUpperCase();
            }
}

console.log(array2);
 ``` 
