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
const express = require("express");
const body_parser_1 = require("body-parser");
const _ = __importStar(require("lodash"));
const utils_1 = require("./utils");
const app = express();
app.use((0, body_parser_1.json)()); //extract the json from the upcoming request
var timeserie = require('./models/series');
var now = Date.now();
//for Loop to generate past values until now
for (let i = timeserie.length - 1; i >= 0; i--) {
    let series = timeserie[i];
    var decreaser = 0;
    for (let y = series.datapoints.length - 1; y >= 0; y--) {
        series.datapoints[y][1] = Math.round((now - decreaser) / 1000) * 1000;
        decreaser += 3800000; //3800000: timestamp range of about a day
    }
}
//setInterval to generate degrees and timestamp from now on 
setInterval(() => {
    timeserie.forEach((city) => {
        const lastIndex = city.datapoints.length - 1;
        const [lastDegree, lastTimeStamp] = [...city.datapoints[lastIndex]];
        city.datapoints.push([lastDegree + (0, utils_1.randomIntFromInterval)(-1, 1), lastTimeStamp + 1220]); //1220: timestamp range of about a second
    });
}, 5000);
function setCORSHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "accept, content-type");
}
app.all('/', function (req, res) {
    setCORSHeaders(res);
    res.send('No data on this Endpoint.');
    res.end();
});
app.all('/search', function (req, res) {
    setCORSHeaders(res);
    var result = [];
    // send all cities available 
    _.each(timeserie, function (ts) {
        result.push(ts.target);
    });
    res.json(result);
    res.end();
});
app.all('/query', function (req, res) {
    setCORSHeaders(res);
    var tsResult = [];
    //send just filtered data about the selected city (Catania, Copenaghen, Monaco etc.)
    _.each(req.body.targets, function (target) {
        var filtered = _.filter(timeserie, function (t) {
            return t.target === target.target;
        });
        _.each(filtered, function (f) {
            tsResult.push(f);
        });
    });
    res.json(tsResult);
    res.end();
});
const port = 3333;
app.listen(port);
console.log("[SERVER UP] port ", port);
