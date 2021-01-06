// Search Word Part 1

// Goal: Count the number of times a word appears in some text

// Considerations:
//   - Case sensitivity? (does 'sed' match  'Sed'?)
//   - I'm assuming we aren't matching parts of words ('sed' doesn't match 'used')
//   - Handling punctutation ('sed' matches 'sed?')

// Algorithm
//   1. Break the string up into words
//     - Case insensitive match to get an array of word matches without punctutation
//   2. Filter all words that are a case insensitive match for the target word
//     - Array.prototype.filter for words that are a full (^$) match for the target word
//   3. Get the size of the returned list of words
//     - Return the length of the filtered array

function searchWord(findWord, text) {
  let words = text.match(/\b[^.?!;\s]*/g);

  return words.filter(word => findWord.toLowerCase() === word.toLowerCase()).length;
}

function searchWord(findWord, text) {
  return text.match(new RegExp(`\\b${findWord}\\b`, 'gi')).length;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('sed', 'hellsed sed Sed sed. sedhello?'));      // 3
