  // Convert a String to a Number

function stringToInteger(str) {
  // Initialize powerOfTen to 0;
  // Intit accumlator to 0; 
  // Iterate over characters from right to left
    // Use reduce
    // multiply current character by 10 to the power of powerOfTen
    // Add it to the accumulator
  // return accumulator;
  // With reduce
    let strArr = str.split('');
    let powerOfTen = -1;
    return strArr.reverse().reduce(function (accum, num) {
      powerOfTen += 1;
      return accum + (num * 10 ** powerOfTen)
    }, 0);

  // let accumulator = 0;

  // for (let index = str.length - 1, powerOfTen = 0; index >= 0; powerOfTen++, index--) {
  //   accumulator += str[index] * 10 ** powerOfTen;
  // }

  // return accumulator;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
