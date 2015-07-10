var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AddressSchema = new Schema({
    
    city:{type:String,required:true}, 
    street:{type:String,required:true}, 

});

module.export=mongoose.model('Address',AddressSchema);


