var mongoose = require('mongoose');

var CategorySchema =  mongoose.model('Category');

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
