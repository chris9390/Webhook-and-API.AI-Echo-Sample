"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const https = require("https");




app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

/*
app.get('/', function (req, res) {
    res.send("hi!")
});
*/

app.get("/", function(req, res) {

  var appKey = '1b4e36fb-2bb9-4380-8930-a63b1bfcefef';
  var lat_value = 40.1234;
  var lon_value = 127.1234;
  var path_str = '';  
  path_str = '/weather/index/wct?version=1&lat=' + lat_value + '&lon=' + lon_value;
  
  var options = {
    	protocol : 'https:',
	hostname : 'api2.sktelecom.com',
    	path : path_str,
	method : 'GET',
	headers : {'Accept' : 'application/json', 
                   'Content-Type' : 'application/json; charset=utf-8', 
                   'appKey' : appKey
              	  }
   };  


	
  https.get(options, function(response) {
    var status = response.statusCode;
	  res.send(status);
  });

  
  
  
  return res.json({
    fulfillmentText : status,
    source : "WeatherBot"
  });
});


/*

app.post("/echo", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.echoText
      ? req.body.queryResult.parameters.echoText
      : "Seems like some problem. Speak again.";
  
  
  return res.json({
    //speech: speech,
    //displayText: speech,
    //source: "webhook-echo-sample"
    fulfillmentText: "what" + speech,
    source: "EchoService"
  });
});

*/


app.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
