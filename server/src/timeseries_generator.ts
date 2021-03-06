import * as fs from 'fs';
import { randomIntFromInterval } from './utils';

let siracusa: number[] = [ 34, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 27, 30, 32, 34, 38, 45, 48, 49, 44, 42, 38];
let catania: number[] = [ 33, 31, 30 ,27, 25, 25, 26, 24, 24, 23, 22, 24, 26, 27, 30, 32, 35, 41, 42, 42, 40, 38, 34];
let milano: number[] = [ 30, 28, 27, 25, 25, 25, 24, 23, 22, 22, 21, 22, 23, 25, 28, 29, 30, 33, 34, 34, 33, 32, 31];
let monaco: number[] = [ 12, 10, 8, 7, 5, 3, 4, 3, 2, 1, 0, 2, 3, 4, 6, 8, 9, 10, 12, 15, 18, 17, 15 ];
let dubai: number[] = [ 35, 34, 33, 32, 27, 25, 24, 20, 21, 20, 22, 22, 23, 25, 28, 30, 32, 33, 35, 36, 38, 38, 37];
let copenaghen: number[] = [ 10, 8, 6, 5, 4, 3, 3, 2, 1, 0, -2, 0, 3, 5, 6, 7, 9, 11, 15, 16, 16, 14, 13];
let antartide: number[] = [-15, -18, -20, -22, -24, -26, -25, -26, -25, -24, -23, -22, -23, -27, -30, -32, -34, -38, -45, -46, -44, -42, -35]; 

let siracusaExtended : number[] = [];
let cataniaExtended : number[] = [];
let milanoExtended : number[] = [];
let monacoExtended : number[] = [];
let dubaiExtended : number[] = [];
let copenaghenExtended : number[] = [];
let antartideExtended : number[] = [];
const numberOfdays = 30;

//creation of CitiesExtended arrays containing psudorandom values, starting from Cities arrays
[...Array(numberOfdays)].forEach(_ => siracusaExtended.push(...siracusa.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(numberOfdays)].forEach(_ => cataniaExtended.push(...catania.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(numberOfdays)].forEach(_ => milanoExtended.push(...milano.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(numberOfdays)].forEach(_ => monacoExtended.push(...monaco.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(numberOfdays)].forEach(_ => dubaiExtended.push(...dubai.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(numberOfdays)].forEach(_ => copenaghenExtended.push(...copenaghen.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(numberOfdays)].forEach(_ => antartideExtended.push(...antartide.map(num => num + randomIntFromInterval(-1, 1))));


let degreeTimestampSiracusa : [ number, number][] = [];
let degreeTimestampCatania : [ number, number][] = [];
let degreeTimestampMilano : [ number, number][] = [];
let degreeTimestampMonaco : [ number, number][] = [];
let degreeTimestampDubai : [ number, number][] = [];
let degreeTimestampCopenaghen : [ number, number][] = [];
let degreeTimestampAntartide : [ number, number][] = [];

let now = Date.now();

//Insertion of timestamps in degreeTimestampCities arrays, starting from CitiesExtened Arrays
siracusaExtended.forEach((degree, index) => degreeTimestampSiracusa.push([ degree, (now - (index * 3600)) ]));
cataniaExtended.forEach((degree, index) => degreeTimestampCatania.push([ degree, (now - (index * 3600)) ]));
milanoExtended.forEach((degree, index) => degreeTimestampMilano.push([ degree, (now - (index * 3600)) ]));
monacoExtended.forEach((degree, index) => degreeTimestampMonaco.push([ degree, (now - (index * 3600) ) ]));
dubaiExtended.forEach((degree, index) => degreeTimestampDubai.push([ degree, (now - (index * 3600) ) ]));
copenaghenExtended.forEach((degree, index) => degreeTimestampCopenaghen.push([ degree, (now - (index * 3600) ) ]));
antartideExtended.forEach((degree, index) => degreeTimestampAntartide.push([ degree, (now - (index * 3600) ) ]));

//creation of a string containing all data generated in order to write them on a .json file
let str = "";
str += "[\n";
str += `  {"target": "Temperatura Siracusa", "datapoints":[`
degreeTimestampSiracusa.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`
str += `  {"target": "Temperatura Catania", "datapoints":[`
degreeTimestampCatania.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`
str += `  {"target": "Temperatura Milano", "datapoints":[`
degreeTimestampMilano.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`
str += `  {"target": "Temperatura Monaco", "datapoints":[`
degreeTimestampMonaco.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`
str += `  {"target": "Temperatura Dubai", "datapoints":[`
degreeTimestampDubai.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`
str += `  {"target": "Temperatura Copenaghen", "datapoints":[`
degreeTimestampCopenaghen.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`
str += `  {"target": "Temperatura Dubai", "datapoints":[`
degreeTimestampDubai.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2);
str += `]}, \n`
str += `  {"target": "Temperatura Antartide", "datapoints":[`
degreeTimestampAntartide.forEach((_, i, a) => str += `[${a[i][0]}, ${a[i][1]}], `);
str = str.substring(0, str.length - 2); //delete last coma
str += `]} \n`
str+="]"

console.log("str", str);


// writing data on file
fs.writeFile('./models/series.json', str, function(err){
  if(err) { return console.log(err); } console.log('The file was saved');
});
