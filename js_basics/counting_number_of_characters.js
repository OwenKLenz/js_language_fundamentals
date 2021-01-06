// In this exercise, you will write a program that asks the user for a phrase, then outputs the number of characters in that phrase. Go over the documentation for String to find an appropriate method to use.

// Examples:

// Please enter a phrase: walk
// console output
// There are 4 characters in "walk".
//
// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run"

let rlSync = require('readline-sync');

let response = rlSync.question("Please enter a phrase: ");

console.log(`There are ${response.length} characters in "${response}"`);

// Further Exploration:

const regexp = /\S/g;

let count = response.match(regexp).length

console.log(`There are ${count} characters in "${response}"`);

// Or...

let count2 = response.replace(/\s/g, '').length;

console.log(`There are ${count2} characters in "${response}"`);

// Only counting Alpha characters

let count3 = response.replace(/[^a-z]/gi, '').length
console.log(`There are ${count3} characters in "${response}"`);

