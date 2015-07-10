var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InfoSchema = new Schema({
    
    title:{type:String,require:true},
    obj:{type:String},
    category:{type:Schema.Types.ObjectId,ref:"Category"},
    attachments:{type:[Schema.Types.ObjectId],ref:"Attachment"},

    

});

module.export=mongoose.model('Info',InfoSchema);


