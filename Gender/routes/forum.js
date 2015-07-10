var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');

/* GET home page. */
router.get('/:current', function(req, res, next) {
  query.getSubForumCategoryById(req.params.current,function(cat){
      
      query.getAllDiscussionByForumCategory(req.params.current,function(inf){
            res.json({categories:cat,info:inf}); 
      });
 });
    
});



router.get('/', function(req, res, next) {
  query.getAllRootForumCategory(function(data){
      query.getAllDiscussion(function(data2){ 
       res.json({categories:data,info:data2});
        })
  
   });
    
});



router.post('/', function(req, res, next) {
    query.addNewForumCategory(req.body.name,req.body.parent,function(data){res.json(data);})
  
});

module.exports = router;
