

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

//list all module
require('./module/category');







var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

});





