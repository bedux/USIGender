var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');
/* GET home page. */
router.get('/:current', function(req, res, next) {
  query.getSubCraiglistCategoryById(req.params.current,function(cat){
      
      query.getAttachmentByCategory(req.params.current,function(inf){
            res.json({categories:cat,info:inf,parentCategory:req.params.current}); 
      });
  });
    
});



router.get('/', function(req, res, next) {
  query.getAllRootCategory(function(data){
      query.getAllAttachment(function(data2){ 
       res.json({categories:data,info:data2,parentCategory:null});
      
      
        })
  
   });
    
});



router.get('/back/:id', function(req, res, next) {
     query.categoryBack(req.params.id,function(cat){
        query.getAttachmentByCategory(req.params.current,function(inf){
            res.json({categories:cat,info:inf,parentCategory:cat[0].parentCategory}); 
      });
         
     })
    
});




////get the root of a category
//router.get('/root/:id', function(req, res, next) {
//    query.getRootOfCategory(req.params.id,function(data){res.json(data);})
//  
//});
//
//
//router.get('/allLeaf/root/:id', function(req, res, next) {
//  
//  query.getAllSubcategoryOfCategory(req.params.id,function(data){res.json(data)});
//
//});




//Request method
//    req.body.name;
//    req.body.parent;

router.post('/', function(req, res, next) {
    query.addNewCraiglistCategory(req.body.name,req.body.parent,function(data){
    res.json(data); 
        
    });
});
module.exports = router;
