'use strict';

const score0 = document.querySelector('#score--0');
const player0 = document.querySelector('.player--0');
let isPlayer0Active = player0.classList.contains('player--active');
const currentScore0 = document.getElementById('current--0');

const score1 = document.getElementById('score--1');
const player1 = document.querySelector('.player--1');
const currentScore1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
rollDiceBtn.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  const diceFile = 'dice-'.concat(dice).concat('.png');
  diceEl.classList.remove('hidden');
  diceEl.src = diceFile;
  if (dice != 1) {
    // Add dice to current score
    currentScore += dice;
    player0.classList.contains('player--active')
      ? (currentScore0.textContent = currentScore)
      : (currentScore1.textContent = currentScore);
  } else {
    // Switch to next player
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    player0.classList.contains('player--active')
      ? (currentScore1.textContent = 0)
      : (currentScore0.textContent = 0);
    currentScore = 0;
  }
});
