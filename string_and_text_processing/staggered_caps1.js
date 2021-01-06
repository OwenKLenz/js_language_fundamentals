// Starggered Caps Part 1

// Goal: starting with the the first character as a capitalized character, alternate upper and lower case with each successive character. Non-letter characters should be counted in the pattern, but obviously don't have their case changed.

// Algorithm:
//   1. Create a new empty string

//   2. Transform all of the even index characters (0, 2, 4, etc.) to upper case
//     - concat the character toUpperCased to the new string 

//   3. Transform all of the odd index characters (1, 3, 5...) to lower case
//     - concat the character toLowerCased to the new string 
//   4. Return the new string

'use strict';

function staggeredCase(string) {
  let staggeredString = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      staggeredString += string[i].toUpperCase(); 
    } else {
      staggeredString += string[i].toLowerCase(); 
    }
  }
  return staggeredString;
}

function staggeredCase(string) {
  string = string.toLowerCase();
  let staggeredString = '';

  for (let i = 1; i < string.length; i += 2) {
    staggeredString += string[i - 1].toUpperCase() + string[i]; 
  }
  
  return staggeredString; 
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
