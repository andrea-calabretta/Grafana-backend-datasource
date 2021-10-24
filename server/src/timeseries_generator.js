"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var fs = require("fs");
var startTmstp = 1627776000;
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// for (let i = 0; i < 25; i++ ){
//   console.log(startTmstp + "     " , -i);
//   startTmstp -= 3600;
// }
var siracusa = [34, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 27, 30, 32, 34, 38, 45, 48, 49, 44, 42, 38];
var catania = [33, 31, 30, 27, 25, 25, 26, 24, 24, 23, 22, 24, 26, 27, 30, 32, 35, 41, 42, 42, 40, 38, 34];
var milano = [30, 28, 27, 25, 25, 25, 24, 23, 22, 22, 21, 22, 23, 25, 28, 29, 30, 33, 34, 34, 33, 32, 31];
var monaco = [12, 10, 8, 7, 5, 3, 4, 3, 2, 1, 0, 2, 3, 4, 6, 8, 9, 10, 12, 15, 18, 17, 15];
var dubai = [35, 34, 33, 32, 27, 25, 24, 20, 21, 20, 22, 22, 23, 25, 28, 30, 32, 33, 35, 36, 38, 38, 37];
var copenaghen = [10, 8, 6, 5, 4, 3, 3, 2, 1, 0, -2, 0, 3, 5, 6, 7, 9, 11, 15, 16, 16, 14, 13];
var antartide = [-15, -18, -20, -22, -24, -26, -25, -26, -25, -24, -23, -22, -23, -27, -30, -32, -34, -38, -45, -46, -44, -42, -35];
var siracusaExtended = [];
var cataniaExtended = [];
var milanoExtended = [];
var monacoExtended = [];
var dubaiExtended = [];
var copenaghenExtended = [];
var antartideExtended = [];
__spreadArrays(Array(4)).forEach(function (_) { return siracusaExtended.push.apply(siracusaExtended, siracusa.map(function (num) { return num + randomIntFromInterval(-1, 1); })); });
__spreadArrays(Array(4)).forEach(function (_) { return cataniaExtended.push.apply(cataniaExtended, catania.map(function (num) { return num + randomIntFromInterval(-1, 1); })); });
__spreadArrays(Array(4)).forEach(function (_) { return milanoExtended.push.apply(milanoExtended, milano.map(function (num) { return num + randomIntFromInterval(-1, 1); })); });
__spreadArrays(Array(4)).forEach(function (_) { return monacoExtended.push.apply(monacoExtended, monaco.map(function (num) { return num + randomIntFromInterval(-1, 1); })); });
__spreadArrays(Array(4)).forEach(function (_) { return dubaiExtended.push.apply(dubaiExtended, dubai.map(function (num) { return num + randomIntFromInterval(-1, 1); })); });
__spreadArrays(Array(4)).forEach(function (_) { return copenaghenExtended.push.apply(copenaghenExtended, copenaghen.map(function (num) { return num + randomIntFromInterval(-1, 1); })); });
__spreadArrays(Array(4)).forEach(function (_) { return antartideExtended.push.apply(antartideExtended, antartide.map(function (num) { return num + randomIntFromInterval(-1, 1); })); });
console.log("siracusaExtended", siracusaExtended);
console.log("cataniaExtended", cataniaExtended);
console.log("milanoExtended", milanoExtended);
console.log("monacoExtended", monacoExtended);
console.log("dubaiExtended", dubaiExtended);
console.log("copenaghenExtended", copenaghenExtended);
console.log("antartideExtended", antartideExtended);
console.log("siracusaExtended: ", siracusaExtended.length);
console.log("cataniaExtended: ", cataniaExtended.length);
console.log("milanoExtended: ", milanoExtended.length);
console.log("monacoExtended: ", monacoExtended.length);
console.log("dubaiExtended: ", dubaiExtended.length);
console.log("copenaghenExtended: ", copenaghenExtended.length);
console.log("antartideExtended: ", antartideExtended.length);
// siracusa.forEach(element => {
//   console.log(randomIntFromInterval(-1, 1));
// });
var str = "";
fs.writeFile('generated.txt', str, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('The file was saved');
});
