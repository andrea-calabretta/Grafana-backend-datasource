"use strict";
exports.__esModule = true;
exports.randomIntFromInterval = void 0;
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomIntFromInterval = randomIntFromInterval;
