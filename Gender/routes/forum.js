var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');

/* GET home page. */
router.get('/:current', function(req, res, next) {
  query.getSubForumCategoryById(req.params.current,function(cat){
      query.getAllDiscussionByForumCategory(req.params.current,function(inf){
            res.json({categories:cat,info:inf,parentCategory:req.params.current}); 
      });
 });
    
});



router.get('/', function(req, res, next) {
  query.getAllRootForumCategory(function(data){
      query.getAllDiscussion(function(data2){ 
       res.json({categories:data,info:data2,parentCategory:null});
        })
  
   });
    
});



router.post('/', function(req, res, next) {
    query.addNewForumCategory(req.body.name,req.body.parent,function(data){res.json(data);})
  
});



router.get('/back/:id', function(req, res, next) {
     query.categoryForumBack(req.params.id,function(cat){
         if(cat[0].parentCategory!=null){
                query.getDiscussionByCategory(cat[0].parentCategory,function(inf){
                    res.json({categories:cat,info:inf,parentCategory:cat[0].parentCategory}); 
              });
         }else{
             
              query.getAllDiscussion(function(data2){ 
               res.json({categories:cat,info:data2,parentCategory:null});
              });
      
         }
     })
    
});
module.exports = router;
