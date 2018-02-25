'use strict';

const yelp = require('yelp-fusion');

const express = require('express');
const app = express();
const path = require("path");
var zipcode = "";
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

app.get('/getzipcode', function(req, res){
  zipcode = req.query.zipcode;
  console.log(zipcode);
  var searchRequest = {
    term:'food',
    location: zipcode,
    offset: offsetnum
  };

  const client = yelp.client(apiKey);


  client.search(searchRequest).then(response => {
    const results = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(results, null, 4);
    var restlist = [];
    for (var i = 0; i < offsetnum; i++){
      var restname = results[i]["name"];
      restlist.push(restname);
    }
    console.log(restlist);
    var selectedres = getRest(restlist);
    console.log(selectedres);
    res.setHeader('Content-Type', 'text/html');
    //send the responses
    res.write('<h1>You may like this restaurant: '+ selectedres +'</h1>');
    //add a button here for redirection
    res.write('<a href=""><input type="button" value="regenerate"></a>');
    res.end();
  }).catch(e => {
    console.log(e);
  });


});

app.listen(3000, () => console.log('Example app listening on port 3000!'))


function getRest(param){
  var randomRest = param[Math.floor(Math.random() * param.length)];
  console.log(randomRest);
  return randomRest;
}


// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'saLn3TWj2WtpMMzRv2rtqFztGgRNbmKhakyktpDE-dylPNcKtTZMqRGMRPElvRIpUuEAZR1UXIDPz-zYmLFB2QAtfidxNpusW7uclyMfVpPs0LFCfSxHmoSRGjiRWnYx';
const offsetnum = 10;
