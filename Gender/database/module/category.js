var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
    
    name:{type:String,required:true},
    parentCategory:{type:Schema.Types.ObjectId, default:null , ref:"Category"},
    

});

module.export=mongoose.model('Category',CategorySchema);


