import express = require('express');
import  {Application, Request, Response} from 'express';
import { json } from 'body-parser';
import * as _ from 'lodash';

import { randomIntFromInterval } from './utils';

const app: Application = express();

app.use(json()); //extract the json from the upcoming request
var timeserie = require('./models/series');


var now = Date.now();

//for Loop to generate past values until now
for (let i = timeserie.length -1; i >= 0; i--) {
  let series = timeserie[i];

  var decreaser = 0;
  for (let y = series.datapoints.length -1; y >= 0; y--) {
    series.datapoints[y][1] = Math.round((now - decreaser) /1000) * 1000;
    decreaser += 3800000; //3800000: timestamp range of about a day
  }
}

//setInterval to generate degrees and timestamp from now on 
setInterval(() => {
  timeserie.forEach((city: any) => {
    const lastIndex = city.datapoints.length-1;
    const [lastDegree, lastTimeStamp] = [...city.datapoints[lastIndex]];
    city.datapoints.push([ lastDegree + randomIntFromInterval(-1, 1), lastTimeStamp + 1220 ]) //1220: timestamp range of about a second
  });
}, 5000);

function setCORSHeaders(res: Response) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "accept, content-type");  
}

app.all('/', function(req: Request, res: Response) {
  setCORSHeaders(res);
  res.send('No data on this Endpoint.');
  res.end();
});

app.all('/search', function(req: Request, res: Response){
  setCORSHeaders(res);
  var result: any = [];
  // send all cities available 
  _.each(timeserie, function(ts) {
    result.push(ts.target);
  });
  res.json(result);
  res.end();
});

app.all('/query', function(req: Request, res: Response){
  setCORSHeaders(res);
  var tsResult: any[] = [];
  //send just filtered data about the selected city (Catania, Copenaghen, Monaco etc.)
  _.each(req.body.targets, function(target) {
      var filtered = _.filter(timeserie, function(t) {
        return t.target === target.target;
      });

      _.each(filtered, function(f) {
        tsResult.push(f)
      });
  });
  res.json(tsResult);
  res.end();
});

const port = 3333;
app.listen(port);

console.log("[SERVER UP] port ", port );


