var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    
    name:String,
    imageSRC:{type:String,default:"/images/defaultUser.png"}
});

module.export=mongoose.model('User',UserSchema);


