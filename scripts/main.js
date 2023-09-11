"use strict";

let start = document.querySelector("#start-button");
let output = document.querySelector("#output")

start.addEventListener("click", startGame);

function randomNumber(min, max) {
  // This function creates a random number between two numbers: min and max.
  var result;
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

function startGame() {
  let player1Number = randomNumber(1, 6);
  let player2Number = randomNumber(1, 6);

  showDice({ player: 1, number: player1Number });
  showDice({ player: 2, number: player2Number });
  if (player1Number > player2Number) {
    output.textContent = "Player 1 win!!!"
  } else if (player1Number < player2Number) {
    output.textContent = "Player 2 win!!!"

  } else if (player1Number === player2Number) {
    output.textContent = "Draw!"

  }
}

function showDice({ player, number }) {
  let dice = document.querySelector(`.player${player}`);
  for (let i = 0; i <= 6; i++) {
    dice.classList.remove(`dice-${i}`);
  }
  dice.classList.add(`dice-${number}`);
  // Selects all the playes dots
  let dots = document.querySelectorAll(`.player${player} [class *=dot]`)

  dots.forEach((item) => item.classList.remove("invisible"));

  // add invisible to all the dots equal or grater than the number
  for (let i = number; i < dots.length; i++) {
    dots[i].classList.add("invisible");
  }
}
