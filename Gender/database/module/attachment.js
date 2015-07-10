var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AttachmentSchema = new Schema({
    
    type:{type:String,required:true},
    name:{type:String,required:true},
    desc:{type:String},
    pic:{type:String},
    tel:{type:String},
    mail:{type:String},
    website:{type:String},
    
    category:{type:Schema.Types.ObjectId, default:null , ref:"Category"},
    address:{type:Schema.Types.ObjectId, default:null , ref:"Address"},

});

module.export=mongoose.model('Attachment',AttachmentSchema);


