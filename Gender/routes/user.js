var express = require('express');
var router = express.Router();
var query = require('../database/dbQuery');

/* GET home page. */
router.get('/:current', function(req, res, next) {
  
    
});



router.get('/', function(req, res, next) {
    query.getAllUsers(function(data){res.json(data)});
});



router.post('/', function(req, res, next) {
  query.addNewUser(req.body.name,req.body.imgSrc,function(data){
      res.json(data);
  })
});






module.exports = router;
 