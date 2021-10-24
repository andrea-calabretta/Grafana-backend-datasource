import express,  {Application, Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
import _ from 'lodash';

const app: Application = express();

app.use(json()); //extract the json from the upcoming request
var timeserie = require('./models/series');


var now = Date.now();
// console.log("now",now);
// var now = 1634914973983;

for (var i = timeserie.length -1; i >= 0; i--) {
  var series = timeserie[i];
  // console.log("timeserie", timeserie[i]);

  var decreaser = 0;
  for (var y = series.datapoints.length -1; y >= 0; y--) {
    series.datapoints[y][1] = Math.round((now - decreaser) /1000) * 1000;
    // console.log(" series datapoint", series.datapoints[y][1]);
    decreaser += 3800000;
  }
  console.log("timeserie", timeserie[i]); 
}

// [34, 1627840800],[32, 1627844400], [31, 1627848000], [30, 1627851600], [29, 1627855200], [28, 1627858800],[27, 162776000], [26, 1627779600], [25, 1627783200],[24, 1627786800], [23, 1627790400], [22, 1627794000], [23, 1627797600], [27, 1627801200], [30, 1627804800], [32, 1627808400], [34, 1627812000], [38, 1627815600],[45, 1627819200], [48, 1627822800], [49, 1627826400], [44, 1627830000], [42, 1627833600], [38, 1627837200], [34, 1627840800], [32, 1627844400], [31, 1627848000], [30, 1627851600], [29, 1627855200], [28, 1627858800]

function setCORSHeaders(res: Response) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "accept, content-type");  
}

app.all('/', function(req: Request, res: Response) {
  setCORSHeaders(res);
  res.send('I have a quest for you!');
  res.end();
});

app.all('/search', function(req: Request, res: Response){
  setCORSHeaders(res);
  var result: any = [];
  _.each(timeserie, function(ts) {
    result.push(ts.target);
  });
  res.json(result);
  res.end();
});

app.all('/query', function(req: Request, res: Response){
  setCORSHeaders(res);
  console.log(req.url);
  console.log(req.body);

  var tsResult: any[] = [];
  // let fakeData = timeserie;
  console.log("REQBODY", req.body);

  _.each(req.body.targets, function(target) {
      var k = _.filter(timeserie, function(t) {
        console.log(timeserie);
        return t.target === target.target;
      });

      _.each(k, function(kk) {
        tsResult.push(kk)
        console.log("kk", kk);
      });
  });
  res.json(tsResult);
  res.end();
});

app.listen(3333);

console.log("Server is listening to port 3333 " );