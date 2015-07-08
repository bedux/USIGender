var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DiscussionSchema = new Schema({
    
    name:String,
    subCategory:{type:[Schema.Types.ObjectId], default: []},
    root:Boolean

});

module.export=mongoose.model('Discussion',DiscussionSchema);


