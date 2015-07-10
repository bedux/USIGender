var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ForumCategorySchema = new Schema({
    
    name:{type:String,required:true},
    parentCategory:{type:Schema.Types.ObjectId, default:null , ref:"ForumCategory"},

});

module.export=mongoose.model('ForumCategory',ForumCategorySchema);


