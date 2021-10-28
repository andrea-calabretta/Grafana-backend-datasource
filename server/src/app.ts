import express,  {Application, Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
import _ from 'lodash';
import { randomIntFromInterval } from './utils';

const app: Application = express();

app.use(json()); //extract the json from the upcoming request
var timeserie = require('./models/series');


var now = Date.now();

//with this for loop we generate past values until now
for (var i = timeserie.length -1; i >= 0; i--) {
  var series = timeserie[i];
  // console.log("timeserie", timeserie[i]);

  var decreaser = 0;
  for (var y = series.datapoints.length -1; y >= 0; y--) {
    series.datapoints[y][1] = Math.round((now - decreaser) /1000) * 1000;
    // console.log(" series datapoint", series.datapoints[y][1]);
    decreaser += 3800000; //timestamp representing about a day
  }
  // console.log("timeserie", timeserie[i]); 
}

//with set Interval we update live degrees and timestamp from now on
setInterval(() => {
  // let lastIndex = timeserie[1].datapoints.length-1
  console.log("n° città totali: ",timeserie.length);
  timeserie.forEach((city: any) => {
    // console.log("foreach", element);
    // console.log("city.target", city.target);
    const lastIndex = city.datapoints.length-1;
    console.log("Ultimo elemento "+ city.target + " °C - timestamp: ", city.datapoints[lastIndex]);
    const [lastDegree, lastTimeStamp] = [...city.datapoints[lastIndex]];
    console.log(lastDegree, lastTimeStamp);
    city.datapoints.push([ lastDegree + randomIntFromInterval(-1, 1), lastTimeStamp + 1220 ]) //timestamp representing about a second
    // console.log(i);
    // console.log(array);
  });
  // console.log(" città: ",timeserie[1].target);
  // console.log("ultimo [grado, timestamp]",timeserie[1].datapoints[lastIndex]);
  // console.log(series.datapoints);  
}, 5000);

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
  // console.log(req.url);
  // console.log(req.body);

  var tsResult: any[] = [];
  // let fakeData = timeserie;
  // console.log("REQBODY", req.body);

  _.each(req.body.targets, function(target) {
      var k = _.filter(timeserie, function(t) {
        // console.log(timeserie);
        return t.target === target.target;
      });

      _.each(k, function(kk) {
        tsResult.push(kk)
        // console.log("kk", kk);
      });
  });
  res.json(tsResult);
  res.end();
});

app.listen(3333);

console.log("Server is listening to port 3333 " );


