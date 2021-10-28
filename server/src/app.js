"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var express = require("express");
var body_parser_1 = require("body-parser");
var _ = require("lodash");
var utils_1 = require("./utils");
var app = express();
app.use(body_parser_1.json()); //extract the json from the upcoming request
var timeserie = require('./models/series');
var now = Date.now();
//for Loop to generate past values until now
for (var i = timeserie.length - 1; i >= 0; i--) {
    var series = timeserie[i];
    var decreaser = 0;
    for (var y = series.datapoints.length - 1; y >= 0; y--) {
        series.datapoints[y][1] = Math.round((now - decreaser) / 1000) * 1000;
        decreaser += 3800000; //3800000: timestamp range of about a day
    }
}
//setInterval to generate degrees and timestamp from now on 
setInterval(function () {
    timeserie.forEach(function (city) {
        var lastIndex = city.datapoints.length - 1;
        var _a = __spreadArrays(city.datapoints[lastIndex]), lastDegree = _a[0], lastTimeStamp = _a[1];
        city.datapoints.push([lastDegree + utils_1.randomIntFromInterval(-1, 1), lastTimeStamp + 1220]); //1220: timestamp range of about a second
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
var port = 3333;
app.listen(port);
console.log("[SERVER UP] port ", port);
