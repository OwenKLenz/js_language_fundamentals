// Convert a Number to a String

function integerToString(integer) {
  let powerOfTen = findMatchingPowerOfTen(integer);
  let digits = generateDigitArray(integer, powerOfTen);

  return String.fromCodePoint(...digits);
}

function findMatchingPowerOfTen(integer){
  let powerOfTen = 1;

  while (integer / powerOfTen > 10) {
    powerOfTen *= 10;
  }

  return powerOfTen;
}

function generateDigitArray(integer, powerOfTen) {
  let digits = [];

  while (powerOfTen >= 1) {
    let digit = Math.floor(integer / powerOfTen);
    digits.push(digit + 48);
    integer %= powerOfTen;
    powerOfTen /= 10;
  }

  return digits;
}

console.log(integerToString(1234));
console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
