// Convert a Signed Number to a String

function signedIntegerToString(integer) {
  if (integer === 0) {
    return '0';
  }

  let sign = integer > 0 ? '+' : '-';

  return sign + integerToString(Math.abs(integer));
}

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

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
