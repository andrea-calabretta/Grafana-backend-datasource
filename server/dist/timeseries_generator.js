"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const utils_1 = require("./utils");
let siracusa = [34, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 27, 30, 32, 34, 38, 45, 48, 49, 44, 42, 38];
let catania = [33, 31, 30, 27, 25, 25, 26, 24, 24, 23, 22, 24, 26, 27, 30, 32, 35, 41, 42, 42, 40, 38, 34];
let milano = [30, 28, 27, 25, 25, 25, 24, 23, 22, 22, 21, 22, 23, 25, 28, 29, 30, 33, 34, 34, 33, 32, 31];
let monaco = [12, 10, 8, 7, 5, 3, 4, 3, 2, 1, 0, 2, 3, 4, 6, 8, 9, 10, 12, 15, 18, 17, 15];
let dubai = [35, 34, 33, 32, 27, 25, 24, 20, 21, 20, 22, 22, 23, 25, 28, 30, 32, 33, 35, 36, 38, 38, 37];
let copenaghen = [10, 8, 6, 5, 4, 3, 3, 2, 1, 0, -2, 0, 3, 5, 6, 7, 9, 11, 15, 16, 16, 14, 13];
let antartide = [-15, -18, -20, -22, -24, -26, -25, -26, -25, -24, -23, -22, -23, -27, -30, -32, -34, -38, -45, -46, -44, -42, -35];
let siracusaExtended = [];
let cataniaExtended = [];
let milanoExtended = [];
let monacoExtended = [];
let dubaiExtended = [];
let copenaghenExtended = [];
let antartideExtended = [];
const numberOfdays = 30;
//creation of CitiesExtended arrays containing psudorandom values, starting from Cities arrays
[...Array(numberOfdays)].forEach(_ => siracusaExtended.push(...siracusa.map(num => num + (0, utils_1.randomIntFromInterval)(-1, 1))));
[...Array(numberOfdays)].forEach(_ => cataniaExtended.push(...catania.map(num => num + (0, utils_1.randomIntFromInterval)(-1, 1))));
[...Array(numberOfdays)].forEach(_ => milanoExtended.push(...milano.map(num => num + (0, utils_1.randomIntFromInterval)(-1, 1))));
[...Array(numberOfdays)].forEach(_ => monacoExtended.push(...monaco.map(num => num + (0, utils_1.randomIntFromInterval)(-1, 1))));
[...Array(numberOfdays)].forEach(_ => dubaiExtended.push(...dubai.map(num => num + (0, utils_1.randomIntFromInterval)(-1, 1))));
[...Array(numberOfdays)].forEach(_ => copenaghenExtended.push(...copenaghen.map(num => num + (0, utils_1.randomIntFromInterval)(-1, 1))));
[...Array(numberOfdays)].forEach(_ => antartideExtended.push(...antartide.map(num => num + (0, utils_1.randomIntFromInterval)(-1, 1))));
let degreeTimestampSiracusa = [];
let degreeTimestampCatania = [];
let degreeTimestampMilano = [];
let degreeTimestampMonaco = [];
let degreeTimestampDubai = [];
let degreeTimestampCopenaghen = [];
let degreeTimestampAntartide = [];
let now = Date.now();
//Insertion of timestamps in degreeTimestampCities arrays, starting from CitiesExtened Arrays
siracusaExtended.forEach((degree, index) => degreeTimestampSiracusa.push([degree, (now - (index * 3600))]));
cataniaExtended.forEach((degree, index) => degreeTimestampCatania.push([degree, (now - (index * 3600))]));
milanoExtended.forEach((degree, index) => degreeTimestampMilano.push([degree, (now - (index * 3600))]));
monacoExtended.forEach((degree, index) => degreeTimestampMonaco.push([degree, (now - (index * 3600))]));
dubaiExtended.forEach((degree, index) => degreeTimestampDubai.push([degree, (now - (index * 3600))]));
copenaghenExtended.forEach((degree, index) => degreeTimestampCopenaghen.push([degree, (now - (index * 3600))]));
antartideExtended.forEach((degree, index) => degreeTimestampAntartide.push([degree, (now - (index * 3600))]));
//creation of a string containing all data generated in order to write them on a .json file
let str = "";
str += "[\n";
str += `  {"target": "Temperatura Siracusa", "datapoints":[`;
degreeTimestampSiracusa.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`;
str += `  {"target": "Temperatura Catania", "datapoints":[`;
degreeTimestampCatania.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`;
str += `  {"target": "Temperatura Milano", "datapoints":[`;
degreeTimestampMilano.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`;
str += `  {"target": "Temperatura Monaco", "datapoints":[`;
degreeTimestampMonaco.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`;
str += `  {"target": "Temperatura Dubai", "datapoints":[`;
degreeTimestampDubai.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`;
str += `  {"target": "Temperatura Copenaghen", "datapoints":[`;
degreeTimestampCopenaghen.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`;
str += `  {"target": "Temperatura Dubai", "datapoints":[`;
degreeTimestampDubai.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`;
str += `  {"target": "Temperatura Antartide", "datapoints":[`;
degreeTimestampAntartide.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2); //delete last coma
str += `]} \n`;
str += "]";
console.log("str", str);
// writing data on file
fs.writeFile('./models/series.json', str, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('The file was saved');
});
