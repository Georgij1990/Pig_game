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
const resetBtn = (score0.textContent = 0);
score1.textContent = 0;
diceEl.classList.add('hidden');
let playState = true;

const switchPlayer = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  player0.classList.contains('player--active')
    ? (currentScore1.textContent = 0)
    : (currentScore0.textContent = 0);
  currentScore = 0;
};

let currentScore = 0;

const scores = [0, 0];

// Rolling dice functionality
rollDiceBtn.addEventListener('click', function () {
  // 1. Generating a random dice roll
  if (playState) {
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
      switchPlayer();
    }
  }
});

//Hold btn.
holdBtn.addEventListener('click', function () {
  if (playState) {
    player0.classList.contains('player--active')
      ? (scores[0] += Number(currentScore0.textContent))
      : (scores[1] += Number(currentScore1.textContent));
    player0.classList.contains('player--active')
      ? (score0.textContent = scores[0])
      : (score1.textContent = scores[1]);
    const activePlayer = player0.classList.contains('player--active') ? 0 : 1;
    if (scores[activePlayer] >= 20) {
      playState = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// //Reset btn
newGameBtn.addEventListener('click', function () {
  player0.classList.toggle('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  playState = true;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
});
