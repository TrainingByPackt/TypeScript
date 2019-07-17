import _ = require("lodash");

// Yep
// const nums = [1, 2, 3];
// console.log(_.last(nums));

// Nope
// const number = 10;
// console.log(_.last(number));

const playerNames = [
  "Springer",
  "Bregman",
  "Altuve",
  "Correa",
  "Brantley",
  "White",
  "Gonzalez",
  "Kemp",
  "Reddick"
];
const lineupOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];

_.zip(lineupOrder, playerNames);
