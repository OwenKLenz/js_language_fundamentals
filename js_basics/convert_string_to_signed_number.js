// Convert a String to a Signed Number

function stringToInteger(str) {
  let accumulator = 0;

  for (let index = str.length - 1, powerOfTen = 0; index >= 0; powerOfTen++, index--) {
    accumulator += str[index] * 10 ** powerOfTen;
  }

  return accumulator;
}

function stringToSignedInteger(str) {
  let negative = str[0] === '-';
  str = str.match(/[^-+]+/g)[0];
  let number = stringToInteger(str);

  return negative ? number * -1 : number;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
