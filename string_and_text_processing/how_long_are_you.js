// How Long Are You

// Goal: Break a string of words up into an array of words with each word including a space followed by its length

// Considerations:
//   - Words are always separated by spaces (so split(' ') should work)

// Algorithm:
//   1. Break the string into words
//     - split the string on spaces
//     - Transform the array of words with map
//   2. Find the length of each word and combine that length with the word
//     - Callback function that returns word + ' ' + String(word.length)

//   3. Add the word + length combo to a return array
//     - Map takes care of this

function wordLengths(words) {
  if (!words) return [];
  return words.split(' ').map(word => word + ' ' + String(word.length));
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
