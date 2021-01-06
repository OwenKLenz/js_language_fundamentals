// What's my Bonus


function calculateBonus(salary, bonusBool) {
  return bonusBool ? salary / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

// I guess I missed the point of this one.

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

// By using the `arguments` (pseudo) array, we can reference arguments passed to the function even though there are no parameters in the function definition. By using element reference to grab the appropriate elements according to the order they are passed in, we can produce the expected return value.

