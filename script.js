let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  let result = document.getElementById("result");

  if (guess === secretNumber) {
    result.textContent = "Congratulations! You guessed it!";
    result.className = "correct"; 
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 } 
    });
  } else if (guess < secretNumber) {
    result.textContent = "Too low! Try again.";
    result.className = "incorrect";
  } else {
    result.textContent = "Too high! Try again.";
    result.className = "incorrect";
  }
}
