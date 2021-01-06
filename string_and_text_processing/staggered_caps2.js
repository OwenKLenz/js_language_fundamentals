// Staggered Caps Part 2

// Goal: Convert The first letter character to uppercase, second letter character to lower case, first to upper case.. etc.

// Algorithm:
//   - Create some sort of toggle that tracks whether or not a character should be swapped
//     - Declare a boolean variable upperCase and initialize to true
//   - Examine each letter character, if letter should be uppercase, uppercase it, otherwise lowercase it
//     - replace matching letters with a callback
//       - If upperCase is true, set it to false and return the match uppercase
//       - If upperCase is false, set it to true and return the match lowercased

function staggeredCase(string) {
  let upperCase = true;

  return string.replace(/[a-z]/gi, setCase);

  function setCase(letter) {
    if (upperCase) {
      upperCase = false;
      return letter.toUpperCase();
    } else {
      upperCase = true;
      return letter.toLowerCase();
    }
  }
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
