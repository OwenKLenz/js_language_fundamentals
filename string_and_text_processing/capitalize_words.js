// Capitalize Words

// Goal: Capitalize the first letter of each word in a string while ensuring that the remaining letters are all lowercase.

// Data Structure:
//   - Array of words

// Algorithm:
//   1. Break the string up into words (delimited by whitespace characters)
//     - split on 1 or more whitespace characters
//   2. Lowercase all of the letters and then capitalize the first letter
//     - Transform the words into capitalized equivalents (map)
//       - return the first character toUpperCased + the substring from index 1 to the end toLowerCased
//   3. Join the words back together
//     - Duh...

"use strict";

function wordCap(string) {
  let words = string.split(/\s+/g);
  const capitalizeWord = function (word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  };

  return words.map(capitalizeWord).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
