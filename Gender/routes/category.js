var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');
/* GET home page. */
router.get('/:current', function(req, res, next) {
  query.getAllSubCategory(req.params.current,function(data){res.json(data)});
    
});

router.get('/', function(req, res, next) {
  query.getAllSubCategory(null,function(data){res.json(data)});
    
});


//Request method
//    req.body.name;
//    req.body.parent;

router.post('/', function(req, res, next) {
    console.log(req.body.parent);
    if(req.body.parent){
    query.addNewCategory(req.body.name,req.body.parent,function(data){res.json(data)});
    }else{
            query.addNewCategory(req.body.name,null,function(data){res.json(data)});

    }
});
module.exports = router;
