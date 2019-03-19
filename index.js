const request = require('request');
const argv = require('yargs').argv;
const apiKey = require("./config.js"); 

let city = argv.c || 'miami';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey.apiKey}`

request(url, (err, response, body) => {
    if (err){
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`; 
        console.log(message); 
    }
}); 