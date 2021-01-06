// Lettercase Counter

// Goal: Count the number of lowercase letters, uppercase letters and neither characters and create an object storinig those values as properties

// Data Structure:
//   - Object
//   - Regex for finding the different character types

// Algorithm:
//   1. Count the number of lowercase letters
//     - Use global matching with a regex (/[a-z]/)

//   2. Count the number of uppercase letters
//     - Use global matching with a regex (/[A-Z]/)

//   3. Count the rest of the letters
//     - Subtract the upper and lowercase counts from the length

function letterCaseCount(string) {
  let lowercase = (string.match(/[a-z]/g) || []).length;
  let uppercase = (string.match(/[A-Z]/g) || []).length;

  return ({
    lowercase,
    uppercase,
    neither: string.length - (lowercase + uppercase),
  });
}

function letterCaseCount(string) {
  let lowercase = (string.match(/[a-z]/g) || []).length;
  let uppercase = (string.match(/[A-Z]/g) || []).length;

  return ({
    lowercase,
    uppercase,
    neither: string.length - (lowercase + uppercase),
  });
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 } }
