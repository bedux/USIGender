var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');

/* GET home page. */
router.get('/:current', function(req, res, next) {
  
    
});



router.get('/', function(req, res, next) {
    query.getAllInfo(function(data){res.json(data)});
});



router.post('/', function(req, res, next) {
    
  query.addNewInfo(req.body.title,req.body.obj,req.body.attachments,req.body.category,function(data){
      res.json(data);
  })
});




module.exports = router;
