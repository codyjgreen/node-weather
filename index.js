'use strict';
require('dotenv').config();
let apiKey = process.env.API_KEY;
let city = 'burien';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const request = require('request');
request(url, function(err, response, body) {
  if (err) {
    console.log('error: ', error);
  } else {
    console.log('body:', body);
  }
});
