// One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many unique execution paths are possible.

if (condition1) {
    ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
      // ...
    }
  }
}

// 1. Condition1 is true and condition 2 is true
// 2. Condition 1 is true and condition 2 is false
// 3. Condition 1 is false and condition4 is true and condition 5 is true
// 4. Condition 1 is false and condition4 is true and condition 5 is false
// 5. Condition 1 is false and condition4 is false
