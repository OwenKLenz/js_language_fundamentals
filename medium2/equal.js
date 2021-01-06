// Equal

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true }

// When used with objects, the strict equality operator checks to see if the two objects being compared are the same object. In order to compare them based on their properties in this case, we could compare the properties themselves which will compare the immutable values, the strings, which are in effect the same object.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name);    // false -- expected: true }

// If we weren't sure what properties the objects had, we could iterate over each of the keys, either with `for...in` or by obtaining the keys manually in an array with `Array.keys(person)` and then iterating over that.

function compareObjects(object1, object2) {

  for(let key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

console.log(compareObjects(person, otherPerson));
