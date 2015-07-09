var mongoose = require('mongoose');

var CategorySchema =  mongoose.model('Category');
var DiscussionSchema =  mongoose.model('Discussion');

var UserSchema =  mongoose.model('User');


var exports = module.exports = {};

exports.addNewCategory=function(name,parentCategoryId,callback){
    
    if(parentCategoryId==null ||  parentCategoryId==''){
        
        CategorySchema.findOne({name:name , root:true},function(err,cat){
            
            if(err){callback(err);return;}
            if(cat!=null){
                callback({error:"Arleady Exists"});return;
            }
            var elem = new CategorySchema({name:name,root:true});
            elem.save(function(err,data){
            if(err){
                    console.error(err);
                    callback(err);
                    return;
                }
            callback(data);    
            }); 
        });
    }else{
        CategorySchema.findOne({_id:parentCategoryId},"subCategory",function(err,cat){
            if(err){callback(err);return;}
            
                CategorySchema.findOne({_id:{$in:cat.subCategory}},function(err,cat1){
                if(cat1!=null){
                    callback({error:"Arleady Exists"});return;
                }
                var elem = new CategorySchema({name:name,root:false});
                elem.save(function(err,data){
                if(err){
                        console.error(err);
                        callback(err);
                        return;
                }
                CategorySchema.update({_id:cat._id},{$push:{subCategory:data._id}},function(err,data){}) ;           
                callback(data);    
                });          
            })
        })
    }
    
}

exports.getAllSubCategory = function(currentId,callback){
    if(currentId==null || currentId=='all'){
        
        CategorySchema.find({root:true},function(err,data){
            
            if(err){callback(err);return;}
            callback(data);
            return;
            
        })
    }
    else{
         CategorySchema.findOne({_id:currentId},function(err,cat){
                console.log(cat);
                  CategorySchema.find({_id:{$in:cat.subCategory}},function(err,data){
                      callback(data);
                  });
             
         });
        
    }
    
    
}

exports.addNewUser = function(name,imageSRC,callback){
    if(imageSRC==null){
        var usr = new UserSchema({name:name});
        usr.save(function(err,saved){
                if(err){console.error(err);callback(err); return;}
                callback(saved);            
        });
    }
     else{
        
        var usr = new UserSchema({name:name, imageSRC:imageSRC});
        usr.save(function(err,saved){
                if(err){console.error(err);callback(err); return;}
                callback(saved);            
        });
    }   
}


exports.addNewDiscussion = function(title,object,category,user,callback){
    
    var disc = new DiscussionSchema({title:title,object:object,category:category,user:user});
    disc.save(function(err,data){
        
        if(err){console.error(err);callback(err); return;}
        callback(data);
        
    })
}

exports.getAllUsers = function(callback){
    
    UserSchema.find({}).exec(function(err,data){
        if(err){console.error(err);callback(err); return;}
        callback(data);
    })
}



exports.getAllDiscussion = function(callback){
    
    DiscussionSchema.find({}).populate('user category').exec(function(err,data){
        if(err){console.error(err);callback(err); return;}
        callback(data);
    })
}
