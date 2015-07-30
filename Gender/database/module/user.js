var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    
    name:{type:String,required:true}, 
    imageSRC:{type:String,default:"/images/defaultUser.png"}
});

module.export=mongoose.model('User',UserSchema);


