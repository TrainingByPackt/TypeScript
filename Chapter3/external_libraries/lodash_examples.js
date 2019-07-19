"use strict";
exports.__esModule = true;
var _ = require("lodash");
// Yep
// const nums = [1, 2, 3];
// console.log(_.last(nums));
// Nope
// const number = 10;
// console.log(_.last(number));
var playerNames = [
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
var lineupOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
_.zip(lineupOrder, playerNames);
