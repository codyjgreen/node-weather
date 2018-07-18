'use strict';
require('dotenv').config();
let apiKey = process.env.API_KEY;
let city = 'burien';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

const request = require('request');
request(url, function(err, response, body) {
  if (err) {
    console.log('error: ', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
