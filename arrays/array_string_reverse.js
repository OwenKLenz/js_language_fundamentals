function reverse(input) {
  if (Array.isArray(input)) {
    var output = [];
  } else if (typeof input === 'string') {
    var output = '';
  } else {
    throw Error('Invalid type');
    // raise a custom error
  }
  
  for (let index = input.length - 1; index >= 0; index--) {
    output = output.concat(input[index]);
  }

  console.log(output);
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
reverse(true);
