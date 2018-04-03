var Twit = require('twit')
var sumerSays = require('./proverbs')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var bot = new Twit(config);

function randomWisdom(sumerSays) {
    return sumerSays[Math.floor(Math.random() * sumerSays.length)];
}

var ziusudra = randomWisdom(sumerSays);

console.log(ziusudra);

// bot.post('statuses/update', { status: ziusudra }, function (err, data, response) {
//     console.log(data)
// });