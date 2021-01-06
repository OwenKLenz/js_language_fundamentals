// Swap Case

// Goal: Change all uppercase characters to lowercase, and all lowercase characters to uppercase. Leave others alone.

// Simple Case:
//   1. Use the replace function to match uppercase characters and replace with each match toLoweCased
//   2. Repeat with lowercase

function swapCase(string) {
  function swapMatchCase(match) {
    return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
  }

  return string.replace(/[A-Za-z]/g, swapMatchCase); 
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
