var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReplySchema = new Schema({
    
    message:{type:String,required:true},
    user:{type:Schema.Types.ObjectId,ref:"User"},
    discussion:{type:Schema.Types.ObjectId,ref:"Discussion"},
    attachments:{type:[Schema.Types.ObjectId],ref:"Attachment"},
    data:{type:Date}

});

module.export=mongoose.model('Reply',ReplySchema);


