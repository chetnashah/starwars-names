var all = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

// interface that this library's clients will use
module.exports = {
    all,
    random: uniqueRandomArray(all)
};