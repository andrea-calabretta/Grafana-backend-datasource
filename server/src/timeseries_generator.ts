import * as fs from 'fs';

var startTmstp = 1627776000;

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// for (let i = 0; i < 25; i++ ){
//   console.log(startTmstp + "     " , -i);
//   startTmstp -= 3600;
// }

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

[...Array(4)].forEach(_ => siracusaExtended.push(...siracusa.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(4)].forEach(_ => cataniaExtended.push(...catania.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(4)].forEach(_ => milanoExtended.push(...milano.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(4)].forEach(_ => monacoExtended.push(...monaco.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(4)].forEach(_ => dubaiExtended.push(...dubai.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(4)].forEach(_ => copenaghenExtended.push(...copenaghen.map(num => num + randomIntFromInterval(-1, 1))));
[...Array(4)].forEach(_ => antartideExtended.push(...antartide.map(num => num + randomIntFromInterval(-1, 1))));

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




var str= "";

fs.writeFile('generated.txt', str, function(err){
  if(err) { return console.log(err); } console.log('The file was saved');
});
