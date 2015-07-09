var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DiscussionSchema = new Schema({
    
    title:String,
    object:String,

    category:{type:Schema.Types.ObjectId,ref:"Category"},
    user:{type:Schema.Types.ObjectId,ref:"User"},
    
  
    response:Number,
    view: Number,
    lastView:Date 
});

module.export=mongoose.model('Discussion',DiscussionSchema);


