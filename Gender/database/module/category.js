var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
    
    name:String,
    subCategory:{type:[Schema.Types.ObjectId], default: []},
    root:Boolean

});

module.export=mongoose.model('Category',CategorySchema);


