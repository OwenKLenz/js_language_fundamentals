function concat(...args) {
  let concattedArray = [];

  args.forEach(function (currentArg) {
    if (Array.isArray(currentArg)) {
        concattedArray.push(...currentArg);
      } else {
        concattedArray.push(currentArg);
      }
  });

  return concattedArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
console.log(concat([1, 2], 4));               // [1, 2, "three", 4]

