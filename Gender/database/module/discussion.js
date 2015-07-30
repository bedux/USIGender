var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DiscussionSchema = new Schema({
    
    title:{type:String,required:true},
    object:String,

    forumCategory:{type:Schema.Types.ObjectId,ref:"ForumCategory"},
    user:{type:Schema.Types.ObjectId,ref:"User"},
    
  
    response:{type:Number,default:0},
    view: {type:Number,default:0},
    lastView:{type:Number,default:Date.now} 
});

module.export=mongoose.model('Discussion',DiscussionSchema);


