var mongoose = require('mongoose');

var CategorySchema =  mongoose.model('Category');
var DiscussionSchema =  mongoose.model('Discussion');
var UserSchema =  mongoose.model('User');
var ForumCategorySchema = mongoose.model("ForumCategory");
var ReplySchema = mongoose.model("Reply");
var InfoSchema = mongoose.model("Info");
var AddressSchema =mongoose.model("Address");
var AttachmentSchema =mongoose.model("Attachment");


var exports = module.exports = {};

function error(msg,callback){
    callback({error:msg});
    
}

//--------------------CRAIGLIST CATEGORY -----------------------------------------------------------
exports.addNewCraiglistCategory=function(name,parentCategoryId,callback){
    
   //Max deep n!
    var myCat = new CategorySchema({name:name,parentCategory:parentCategoryId});
    CategorySchema.findOne({name:name,parentCategory:parentCategoryId},function(err,data){
        if(err)error(err,callback);
        
        else if(data==null){
            myCat.save(function(err,saved){
                if(err){error(err,callback);return;};
                callback(saved);
            });
        }else{
            error("Element Exist",callback);
        }
        
    });
    
}
exports.getSubCraiglistCategoryById = function(currentId,callback){

        CategorySchema.find({parentCategory:currentId},function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}
exports.getAllRootCategory = function(callback){
        CategorySchema.find({parentCategory:null},function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}
exports.getAllCategory = function(callback){
        CategorySchema.find({},function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}
exports.getCategory = function(id,callback){
        CategorySchema.find({_id:id},function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}
exports.getRootOfCategory = function(category,callback){
    
    CategorySchema.findOne({_id:category},function(err,data){
        
        if(data==null || data.parentCategory==null){
            callback(data);
            return;
        }    
       exports.getRootOfCategory(data.parentCategory,callback); 
    });
}
exports.getAllSubcategoryOfCategory = function(category,callbackVero){
    
    exports.getCategory(category,function(data){
        var rest = [];   
        var pippo = function(data,i,callback){
            if (i<data.length){
                rest.push(data[i]._id);
                exports.getSubCraiglistCategoryById(data[i]._id,function(sub){
                pippo(sub,0,function(){pippo(data,i+1,callback);});      
                })
            }else{
                callback(rest);
            }
        }
        pippo(data,0,callbackVero);        
    });
}

exports.categoryBack=function(id,callback){
    CategorySchema.findOne({_id:id},function(err,data){
            if(err){error(err,callback);return;};
            CategorySchema.find({parentCategory:data.parentCategory},function(err,result){
                if(err)error(err,callback);
                callback(result);
            });
        

        
    });
    
}


//--------------------FORUM CATEGORY-----------------------------------------------------------

exports.addNewForumCategory=function(name,parentCategoryId,callback){
    
   //Max deep n!
    var myCat = new ForumCategorySchema({name:name,parentCategory:parentCategoryId});
    ForumCategorySchema.findOne({name:name,parentCategory:parentCategoryId},function(err,data){
        if(err)error(err,callback);
        
        else if(data==null){
            myCat.save(function(err,saved){
                if(err){error(err,callback);return;};
                callback(saved);
            });
        }else{
            error("Element Exist",callback);
        }    
    });
    
}




exports.getSubForumCategoryById = function(currentId,callback){

        ForumCategorySchema.find({parentCategory:currentId},function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}
exports.getAllForumCategory = function(callback){

        ForumCategorySchema.find({}).populate("parentCategory").exec(function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}
exports.getForumCategory = function(id,callback){
        ForumCategorySchema.find({_id:id},function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}
exports.getAllSubForumCategoryOfCategory = function(category,callbackVero){

    exports.getForumCategory(category,function(data){
        console.log(data);
        var rest = [];   
        var pippo = function(data,i,callback){
            if (i<data.length){
                rest.push(new mongoose.Types.ObjectId(data[i]._id));
                exports.getSubForumCategoryById(data[i]._id,function(sub){
                pippo(sub,0,function(){pippo(data,i+1,callback);});      
                })
            }else{
                callback(rest);
            }
        }
        pippo(data,0,callbackVero);        
    });
}

exports.getAllRootForumCategory = function(callback){
        ForumCategorySchema.find({parentCategory:null},function(err,data){
            if(err){error(err,callback);return;};
            callback(data);
            return;   
        });
}


exports.categoryForumBack=function(id,callback){
    ForumCategorySchema.findOne({_id:id},function(err,data){
            if(err){error(err,callback);return;};
            ForumCategorySchema.find({parentCategory:data.parentCategory},function(err,result){
                if(err)error(err,callback);
                callback(result);
            });
        

        
    });
    
}



//--------------------USER-----------------------------------------------------------


exports.addNewUser = function(name,imageSRC,callback){
    if(imageSRC==null){
        var usr = new UserSchema({name:name});
        usr.save(function(err,saved){
            if(err){error(err,callback);return;};
                callback(saved);            
        });
    }
     else{
        var usr = new UserSchema({name:name, imageSRC:imageSRC});
        usr.save(function(err,saved){
            if(err){error(err,callback);return;};
                callback(saved);            
        });
    }   
}
exports.getAllUsers = function(callback){
    UserSchema.find({}).exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);
    })
}

//--------------------DISCUSSION-----------------------------------------------------------


exports.addNewDiscussion = function(title,object,forumCategory,user,callback){
    
    var disc = new DiscussionSchema({title:title,object:object,forumCategory:forumCategory,user:user});
    disc.save(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);
        
    });
}
exports.getDiscussionByCategory = function(id,callback){
    
    DiscussionSchema.find({forumCategory:id}).populate('user').exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);
    });
}

//update Data and View
exports.updateDiscussionCounter = function(id,callback){
    
    DiscussionSchema.update({_id:id},{$inc:{view:1},lastView:Date.now},function(err,data){
        if(err){error(err,callback);return;};
        callback(data);
    });
}

//param MUST be in json format 
exports.discussionUpdate = function(id,param,callback){
    DiscussionSchema.update({_id:id},param,function(err,data){
        if(err){error(err,callback);return;};
        callback(data);
    });  
}

exports.getAllDiscussion = function(callback){   
    DiscussionSchema.find({}).populate('user').exec(function(err,data){
        if(err){console.error(err);callback(err); return;}
        callback(data);
    });
}

exports.getDiscussionById = function(id,callback){
    
    DiscussionSchema.findOne({_id:id}).populate('user').exec(function(err,data){
        if(err){console.error(err);callback(err); return;}
        callback(data);
    });
}
                                            


//--------------------REPLY -----------------------------------------------------------

exports.addNewReply = function(message,user,attachments,discussion,callback){
    var rep = new ReplySchema({message:message,user:user,discussion:discussion,attachments:attachments,data:Date.now},function(err,saved){
        if(err){error(err,callback);return;};
        callback(data);
    });   
}

exports.getlReplyOfDiscussion = function(discussion,callback){
    ReplySchema.find({discussion:discussion}).populate("attachments user").exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}

exports.getAlllReply= function(discussion,calback){
    ReplySchema.find({}).populate("attachments user").exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}




//--------------------INFO -----------------------------------------------------------

exports.addNewInfo = function(title,obj,attachments,category,callback){
    var inf = new InfoSchema({title:title,obj:obj,category:category});
    attachments=[attachments];
    console.log(attachments);
    inf.save(function(err, saved){
        InfoSchema.update({_id:saved._id},{$push:{attachments:attachments}},function(err,data){
        if(err){error(err,callback);return;};
            saved.attachments.push(attachments[0]);
        callback(saved);  
        })
    });
}

exports.getInfoByCategory = function(category,callback){
    InfoSchema.find({category:category}).populate("attachments").exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}

exports.getAllInfo = function(callback){
    InfoSchema.find().populate("attachments").exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}

//--------------------ADDRESS -----------------------------------------------------------


exports.addNewAddres = function(street,city,callback){
    var inf = new AddressSchema({street:street,city:city},function(err, saved){
        if(err){error(err,callback);return;};
        callback(data);  
    });
}

exports.getAllAddress = function(calback){
    AddressSchema.find({}).exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}




//--------------------ATTACHMENT -----------------------------------------------------------


//pass a JSON with the information
exports.addNewAttachment = function(fields,callback){
    var att = new AttachmentSchema(fields);
    att.save(function(err,saved){
        if(err){error(err,callback);return;};
        callback(saved);
    }); 
}

exports.getAttachment = function(id,callback){
    AttachmentSchema.find({_id:id}).populate("category address").exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}

exports.getAttachmentByCategory = function(id,callback){
    AttachmentSchema.find({category:id}).populate("category address").exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}


exports.getAllAttachment = function(callback){
    AttachmentSchema.find({}).populate("category address").exec(function(err,data){
        if(err){error(err,callback);return;};
        callback(data);     
    });
}


//______________________GLOBAL QUERY _________________________________________________

//return all the info of belong to a category and a sub category!
exports.getAllInfoByCategory = function(category,callback){
    exports.getAllSubcategoryOfCategory(category,function(data){
        InfoSchema.find({category:{$in:data}},function(result){
            callback(result);
        })
    });
}

//return all the info of belong to a category and a sub category!
exports.getAllDiscussionByForumCategory = function(category,callback){
    exports.getAllSubForumCategoryOfCategory(category,function(data){
        DiscussionSchema.find({forumCategory:{"$in":data}}).populate("user").exec(function(err,result){
            callback(result);
        
       
        })
    });
}









