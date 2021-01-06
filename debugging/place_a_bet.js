// Place A Bet

// The function placeABet below accepts a guess from the user between 1 and 25. The function should determine a winning number and return a message to the user indicating whether he/she entered a winning guess. When you try to invoke placeABet, an error is raised. Fix the bug and explain what caused it.

function placeABet(guess) {
  function generateRandomInt() {
      return Math.floor(Math.random() * 25) + 1;
    };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
      return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
      return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// The parentheses around the `generateRandomInt` function turn it into a function expression which gets evaluated when `placeABet` is called. The evaluation returns a function object but the object is never stored in a variable so the function is lost (garbage collected). As a result, a ReferenceError occurs when `generateInt()` is called on line 6. To fix that, either save the function expression to a variable and use the variable to call the function, or remove the parentheses so that `generateRandomInt` becomes a function declaration and is then callable on line 6.
