

var mongoose = require('mongoose');
var mongoUrl = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/test';
mongoose.connect(mongoUrl);
//list all module
require('./module/category');
require('./module/forumCategory');
require('./module/discussion');
require('./module/user');
require('./module/address');
require('./module/attachment');
require('./module/info');
require('./module/reply');










var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
});





